const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const ts = require('typescript');
const { JSDOM } = require('jsdom');
// UNIT tests only: jsdom does not lay out pixels, implement native modal focus,
// enforce iframe origins/sandboxing, or deliver real cross-origin browser events.
// MessageEvent origin/source and load/error events below are synthetic metadata.
// Real browser QA must cover geometry, scrolling, touch targets, safe areas,
// nested frames, native Tab/Escape, and the hosted page's secure close sender.
require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true }, fileName: filename }).outputText, filename);
const axios = require('axios');
const Requests = require('../src/util/Requests.ts').default;
const { openMicrotransactionOverlay, openMicrotransactionRestoreOverlay } = require('../src/util/MicrotransactionOverlay.ts');
const flush = () => new Promise(resolve => setImmediate(resolve));
const session = { id: 'session-1', checkout_session_id: 'session-1', intent: 'purchase', nonce: '0123456789abcdef0123456789abcdef', session_token: 'test-session-capability-private', hosted_url: 'https://checkout.example.test/games/title-1/checkout/session-1#token=test-session-capability-private', status: 'authentication_required', expires_at: new Date(Date.now() + 3600000).toISOString() };
const order = { id: 'order-1', title_id: 'title-1', checkout_session_id: 'session-1', payment_status: 'paid', fulfillment_status: 'delivered' };
const claim = { title_id: 'title-1', checkout_session_id: 'session-1', order_id: 'order-1', player_id: 'player-1', player_token: 'test-scoped-token', expires_at: new Date(Date.now() + 900000).toISOString(), entitlements: [{ key: 'gold', kind: 'consumable', balance: 100, environment: 'sandbox' }] };
const message = { type: 'glitch.microtransaction.updated', version: 1, title_id: 'title-1', checkout_session_id: 'session-1', order_id: 'order-1', nonce: session.nonce, claim_code: 'test_claim_code_0123456789012345678901234567890123456789' };

function fixture(custom = {}, response = {}) {
  const dom = new JSDOM('<!doctype html><body><button id="play">Play</button><main id="game" data-counter="17"><canvas></canvas></main></body>', { url: 'https://game.example.test/level?save=original', pretendToBeVisual: true });
  const { window } = dom; const doc = window.document;
  const game = doc.getElementById('game'); const play = doc.getElementById('play');
  doc.cookie = 'game_session=original'; play.focus();
  const requests = []; const verified = []; const notices = []; const hooks = []; const errors = [];
  Requests.setBaseUrl('https://api.example.test/api'); Requests.setAuthToken('');
  axios.defaults.adapter = async config => {
    requests.push(config);
    const path = new URL(config.url).pathname;
    let data;
    if (path.endsWith('/handoffs/claim')) data = response.claim ? await response.claim() : claim;
    else if (path.endsWith('/entitlements')) data = { entitlements: claim.entitlements };
    else if (path.includes('/orders/')) data = order;
    else data = { ...session, title: { id: 'title-1', name: 'Game' }, product: null, order: response.order ?? null };
    return { status: 200, statusText: 'OK', config, headers: {}, data: { data } };
  };
  const options = { titleId: 'title-1', checkoutOrigin: 'https://checkout.example.test', session, document: doc, onVerified: c => verified.push(c), onOrderUpdate: o => notices.push(o), onOpen: () => hooks.push('pause'), onClose: () => hooks.push('resume'), onError: e => errors.push(e), ...custom };
  custom.beforeOpen?.(window);
  const open = custom.session?.intent === 'restore' ? openMicrotransactionRestoreOverlay : openMicrotransactionOverlay;
  let overlay;
  try { overlay = open(options); } catch (error) { window.close(); throw error; }
  // Model the stable WindowProxy of the same browsing context across Retry;
  // jsdom replaces its Window on src assignment and cannot prove this behavior.
  const frameWindow = overlay.iframe.contentWindow;
  return { dom, doc, window, game, play, overlay, requests, verified, notices, hooks, errors,
    emit: (data = message, override = {}) => window.dispatchEvent(new window.MessageEvent('message', { data, origin: options.checkoutOrigin, source: frameWindow, ...override })),
    preserved: () => {
      assert.equal(window.location.href, 'https://game.example.test/level?save=original');
      assert.equal(doc.getElementById('game'), game); assert.equal(game.dataset.counter, '17'); assert.equal(doc.cookie, 'game_session=original');
    },
  };
}

// jsdom does not perform real iframe navigation. Model only the committed
// document inspected by the load handler; browser QA proves the WindowProxy.
function frameDocumentEvent(f, url, type = 'load', readyState = 'complete') {
  Object.defineProperty(f.overlay.iframe, 'contentDocument', { configurable: true, value: { URL: url, readyState } });
  try { f.overlay.iframe.dispatchEvent(new f.window.Event(type)); }
  finally { delete f.overlay.iframe.contentDocument; }
}
function finishRetryBlank(f) {
  assert.equal(f.overlay.iframe.src, 'about:blank');
  frameDocumentEvent(f, 'about:blank');
  assert.equal(f.overlay.iframe.src, session.hosted_url);
}

test('modal keeps original game DOM, URL and cookie and restores focus/pause hooks after cancellation', async () => {
  const f = fixture(); f.preserved();
  assert.equal(f.overlay.element.getAttribute('role'), 'dialog');
  assert.equal(f.overlay.element.getAttribute('aria-modal'), 'true');
  assert.equal(f.overlay.element.querySelector('h2').style.color, 'rgb(23, 32, 51)', 'Heading color must remain readable when game CSS sets global h2 colors');
  assert.equal(f.overlay.iframe.getAttribute('allow'), 'payment');
  assert(!f.overlay.iframe.getAttribute('sandbox').includes('top-navigation'));
  assert(f.overlay.iframe.getAttribute('sandbox').includes('allow-popups'));
  assert.deepEqual(f.hooks, ['pause']);
  await Promise.all([f.overlay.close(), f.overlay.close()]);
  f.preserved(); assert.equal(f.doc.querySelector('dialog'), null); assert.equal(f.doc.activeElement, f.play);
  assert.deepEqual(f.hooks, ['pause', 'resume']); assert.equal(f.game.getAttribute('aria-hidden'), null);
  assert.equal(f.requests.length, 1); assert.equal(f.requests[0].headers.get('X-Checkout-Token'), session.session_token);
  assert.equal(f.verified.length, 0); f.dom.window.close();
});

test('verified purchase updates original game and close refreshes with per-request scoped authority', async () => {
  const f = fixture(); f.emit(); await flush(); await flush();
  assert.equal(f.verified.length, 1); f.preserved();
  f.emit(); await flush(); assert.equal(f.requests.filter(r => r.url.endsWith('/handoffs/claim')).length, 1);
  await f.overlay.close('completed'); f.preserved();
  assert.equal(f.requests.filter(r => r.url.includes('/orders/')).length, 1);
  assert.equal(f.requests.find(r => r.url.endsWith('/entitlements')).headers.get('Authorization'), 'Bearer test-scoped-token');
  assert.equal(f.verified.at(-1).entitlements[0].balance, 100);
  assert.deepEqual(f.hooks, ['pause', 'resume']); f.dom.window.close();
});

test('forged close messages cannot dismiss the game overlay', async () => {
  const f = fixture(); const close = { type: 'glitch.microtransaction.close', version: 1, title_id: 'title-1', checkout_session_id: session.id, nonce: session.nonce };
  for (const origin of ['https://evil.example.test', 'http://checkout.example.test', 'https://checkout.example.test:444', 'null']) f.emit(close, { origin });
  f.emit(close, { source: f.window }); f.emit(close, { source: null });
  for (const patch of [{ nonce: 'wrong' }, { checkout_session_id: 'wrong' }, { title_id: 'wrong' }, { version: 2 }, { type: 'close' }]) f.emit({ ...close, ...patch });
  f.emit(null); f.emit('glitch.microtransaction.close');
  assert.equal(f.overlay.element.isConnected, true); f.preserved();
  f.emit(close); await flush(); await flush(); assert.equal(f.overlay.element.isConnected, false);
  f.preserved(); assert.equal(f.verified.length, 0); f.dom.window.close();
});

test('pending/3DS action-required close gives receipt status without claiming inventory or navigating', async () => {
  const f = fixture({}, { order: { ...order, payment_status: 'action_required', fulfillment_status: 'not_ready' } });
  await f.overlay.close(); f.preserved();
  assert.equal(f.notices[0].payment_status, 'action_required'); assert.equal(f.verified.length, 0);
  assert(!f.requests.some(r => /\/checkout$|\/handoffs\/claim$/.test(r.url)));
  f.dom.window.close();
});

test('anonymous restore uses same in-place strict session bridge and never creates checkout', async () => {
  const f = fixture({ session: { ...session, intent: 'restore' } });
  f.emit({ ...message, checkout_session_id: 'wrong-session' }); await flush(); assert.equal(f.verified.length, 0);
  f.emit(); await flush(); await flush(); await f.overlay.close(); f.preserved();
  assert(!f.requests.some(r => /\/checkout$/.test(r.url))); assert(f.verified.length > 0); f.dom.window.close();
});

test('close waits for backend claim and inventory callback before removing dialog or resuming game', async () => {
  let finishInventory;
  const gate = new Promise(resolve => { finishInventory = resolve; });
  const f = fixture({ onVerified: async () => gate });
  f.emit(); await flush();
  const closing = f.overlay.close('completed');
  await flush();
  assert.equal(f.overlay.element.isConnected, true);
  assert.deepEqual(f.hooks, ['pause']); f.preserved();
  finishInventory(); await closing;
  assert.equal(f.overlay.element.isConnected, false); assert.deepEqual(f.hooks, ['pause', 'resume']); f.preserved();
  f.dom.window.close();
});

test('unavailable iframe, retry and invalid URL never navigate or replace the game', async () => {
  const f = fixture(); const source = f.overlay.iframe.src;
  f.overlay.iframe.dispatchEvent(new f.window.Event('error'));
  assert.equal(f.overlay.element.querySelector('[role=alert]').textContent.includes('your game remains open'), true);
  f.overlay.retry(); finishRetryBlank(f); assert.equal(f.overlay.iframe.src, source); f.preserved();
  assert.equal(f.errors.length, 1); await f.overlay.close('unavailable'); f.dom.window.close();
  assert.throws(() => fixture({ session: { ...session, hosted_url: 'https://evil.example.test/checkout' } }), /does not match/);
});

function fakeWindowClock(window) {
  let now = 0; let id = 0; const pending = new Map();
  window.setTimeout = (callback, delay) => { const key = ++id; pending.set(key, { callback, at: now + delay }); return key; };
  window.clearTimeout = key => pending.delete(key);
  return {
    pending,
    tick: milliseconds => {
      const until = now + milliseconds;
      for (;;) {
        const next = [...pending.entries()].filter(([, item]) => item.at <= until).sort((a, b) => a[1].at - b[1].at)[0];
        if (!next) break;
        pending.delete(next[0]); now = next[1].at; next[1].callback();
      }
      now = until;
    },
  };
}

test('silent cross-origin loading timeout offers Retry/Close, resets on retry and never creates a payment', async () => {
  let clock;
  const f = fixture({ frameLoadTimeoutMs: 1000, beforeOpen: window => { clock = fakeWindowClock(window); } });
  const originalUrl = f.overlay.iframe.src;
  clock.tick(999); assert.equal(f.overlay.element.querySelector('[role=alert]'), null);
  clock.tick(1);
  assert.match(f.overlay.element.querySelector('[role=alert]').textContent, /Retry.*Close/);
  assert.equal(f.errors.length, 1); assert.equal(f.requests.length, 0); f.preserved();
  f.overlay.retry(); finishRetryBlank(f); assert.equal(f.overlay.iframe.src, originalUrl); assert.equal(clock.pending.size, 1);
  clock.tick(999); assert.equal(f.errors.length, 1);
  clock.tick(1); assert.equal(f.errors.length, 2); assert.equal(f.requests.length, 0);
  await f.overlay.close('unavailable'); assert.equal(clock.pending.size, 0);
  clock.tick(60000); assert.equal(f.errors.length, 2); f.preserved(); f.dom.window.close();
});

test('document load clears loading timer but is not application readiness; ready message is source/nonce bound', async () => {
  let clock;
  const f = fixture({ frameLoadTimeoutMs: 1000, beforeOpen: window => { clock = fakeWindowClock(window); } });
  const firstTimer = [...clock.pending.keys()][0];
  clock.tick(900); f.overlay.iframe.dispatchEvent(new f.window.Event('load'));
  assert.equal(clock.pending.has(firstTimer), false);
  assert.match(f.overlay.element.querySelector('[role=status]').textContent, /document loaded/);
  clock.tick(100); assert.equal(f.errors.length, 0, 'Old load deadline must be cleared');
  const ready = { type: 'glitch.microtransaction.ready', version: 1, title_id: 'title-1', checkout_session_id: session.id, nonce: session.nonce };
  f.emit(ready, { origin: 'https://evil.example.test' }); f.emit(ready, { source: f.window }); f.emit({ ...ready, nonce: 'wrong' });
  f.emit({ ...ready, title_id: 'wrong' }); f.emit({ ...ready, checkout_session_id: 'wrong' }); f.emit({ ...ready, version: 2 });
  assert.equal(clock.pending.size, 1);
  clock.tick(900); assert.match(f.overlay.element.querySelector('[role=alert]').textContent, /did not become ready/);
  f.emit(ready); assert.equal(clock.pending.size, 0);
  assert.match(f.overlay.element.querySelector('[role=status]').textContent, /Checkout is ready/);
  assert.equal(f.verified.length, 0, 'Ready must never grant or redeem a purchase');
  assert.equal(f.requests.length, 0); f.preserved(); await f.overlay.close(); f.dom.window.close();
});

test('ready before load and closing during loading cancel every watchdog', async () => {
  let clock;
  const f = fixture({ frameLoadTimeoutMs: 1000, beforeOpen: window => { clock = fakeWindowClock(window); } });
  f.emit({ type: 'glitch.microtransaction.ready', version: 1, title_id: 'title-1', checkout_session_id: session.id, nonce: session.nonce });
  f.overlay.iframe.dispatchEvent(new f.window.Event('load'));
  assert.equal(clock.pending.size, 0); clock.tick(10000); assert.equal(f.errors.length, 0);
  f.overlay.retry(); assert.equal(clock.pending.size, 1);
  await f.overlay.close(); assert.equal(clock.pending.size, 0); clock.tick(10000); assert.equal(f.errors.length, 0);
  f.preserved(); f.dom.window.close();
});

test('wrapper declares bounded remaining-space layout, wrapping 44px controls and scoped viewport rules (not pixel QA)', async t => {
  const label = '<b>Localized title</b> ' + 'VeryLongUnbrokenGameName'.repeat(30);
  const f = fixture({ label });
  t.after(() => f.dom.window.close());
  const dialog = f.overlay.element;
  const heading = dialog.querySelector('h2');
  const header = heading.parentElement;
  const chrome = header.parentElement;
  const status = dialog.querySelector('[role=status]');
  const buttons = [...dialog.querySelectorAll('button')];
  assert.equal(dialog.style.display, 'flex'); assert.equal(dialog.style.flexDirection, 'column');
  assert.equal(dialog.style.boxSizing, 'border-box'); assert.equal(dialog.style.overflow, 'hidden');
  // cssstyle/jsdom can serialize min() differently; only check the fallback contract.
  assert.match(dialog.style.height, /^min\(850px.*calc\(100vh - 32px\)\)$/);
  assert.equal(chrome.style.maxHeight, '50%'); assert.equal(chrome.style.overflow, 'auto');
  assert.equal(chrome.style.minHeight, '0'); assert.equal(chrome.style.minWidth, '0');
  assert.equal(header.style.height, ''); assert.equal(header.style.flexWrap, 'wrap');
  assert.equal(status.style.height, ''); assert.equal(status.style.minHeight, '');
  assert.equal(heading.textContent, label); assert.equal(heading.children.length, 0, 'Labels remain text, never injected markup');
  for (const element of [heading, status, ...buttons]) {
    assert.equal(element.style.whiteSpace, 'normal'); assert.equal(element.style.overflowWrap, 'anywhere');
  }
  assert.deepEqual(buttons.map(button => button.textContent), ['Retry', 'Close'], 'Only one outer Close');
  for (const button of buttons) {
    assert.equal(button.style.minHeight, '44px'); assert.equal(button.style.minWidth, '44px');
    assert.equal(button.style.height, 'auto'); assert.equal(button.style.maxWidth, '100%');
    assert.equal(button.style.boxSizing, 'border-box');
  }
  assert.notEqual(buttons[0].style.background, buttons[1].style.background, 'Close is the primary control');
  assert.equal(buttons[0].parentElement.style.flexWrap, 'wrap');
  assert.equal(f.overlay.iframe.parentElement, dialog);
  assert.equal(f.overlay.iframe.style.flex, '1 1 0%'); assert.equal(f.overlay.iframe.style.minHeight, '0');
  assert.equal(f.overlay.iframe.style.height.includes('calc'), false, 'No fixed header/status subtraction');
  assert.equal(f.overlay.iframe.getAttribute('scrolling'), null, 'Hosted document retains its normal scrolling');
  assert.equal(f.overlay.iframe.referrerPolicy, 'no-referrer');
  const style = dialog.querySelector('style');
  assert.match(style.textContent, /@supports\(height:100dvh\)/);
  assert.match(style.textContent, /@media\(max-width:600px\),\(max-height:500px\)/);
  for (const edge of ['top', 'right', 'bottom', 'left']) assert(style.textContent.includes(`env(safe-area-inset-${edge},0px)`));
  const checkScope = rules => {
    for (const rule of rules) {
      if (rule.selectorText) assert(rule.selectorText.startsWith(`#${dialog.id}`), `Unscoped selector: ${rule.selectorText}`);
      if (rule.cssRules) checkScope(rule.cssRules);
    }
  };
  checkScope(style.sheet.cssRules);
  f.preserved(); await f.overlay.close();
  assert.equal(f.doc.querySelector('style'), null, 'Scoped styles are removed with their wrapper');
  f.dom.window.close();
});

test('legacy purchase creation without intent uses checkout defaults without mutating the session', async () => {
  const legacy = { ...session }; delete legacy.intent;
  const f = fixture({ session: legacy });
  assert.equal(f.overlay.element.querySelector('h2').textContent, 'Secure game checkout');
  assert.match(f.overlay.element.querySelector('[role=status]').textContent, /Loading secure checkout/);
  assert.equal(Object.hasOwn(legacy, 'intent'), false);
  assert.equal(f.overlay.iframe.src, session.hosted_url);
  assert.throws(() => openMicrotransactionRestoreOverlay({ session: legacy }), /Create a restore session/);
  await f.overlay.close(); f.dom.window.close();
});

test('restore loading, readiness, retry, errors and pending close use restore-only status copy', async () => {
  let clock; let finishInventory;
  const inventory = new Promise(resolve => { finishInventory = resolve; });
  const f = fixture({ session: { ...session, intent: 'restore' }, frameLoadTimeoutMs: 1000,
    beforeOpen: window => { clock = fakeWindowClock(window); }, onVerified: () => inventory });
  const status = f.overlay.element.querySelector('[role=status]');
  const assertRestore = () => {
    assert.match(status.textContent, /restore/i); assert.doesNotMatch(status.textContent, /checkout|payment|purchase/i);
  };
  assert.equal(f.overlay.element.querySelector('h2').textContent, 'Restore game purchases');
  assert.equal(f.overlay.iframe.title, 'Restore game purchases'); assertRestore();
  for (const button of f.overlay.element.querySelectorAll('button')) {
    assert.match(button.getAttribute('aria-label'), /restore/i);
    assert.doesNotMatch(button.getAttribute('aria-label'), /checkout|payment|purchase/i);
  }
  const frame = f.overlay.iframe; const url = frame.src;
  frame.dispatchEvent(new f.window.Event('load')); assertRestore();
  clock.tick(1000); assert.equal(status.getAttribute('role'), 'alert'); assertRestore();
  for (const error of f.errors) assert.doesNotMatch(error.message, /checkout|payment|purchase/i);
  f.overlay.retry(); assertRestore(); assert.equal(f.overlay.iframe, frame); finishRetryBlank(f); assert.equal(frame.src, url);
  frame.dispatchEvent(new f.window.Event('error')); assertRestore();
  f.overlay.retry();
  finishRetryBlank(f);
  f.emit({ type: 'glitch.microtransaction.ready', version: 1, title_id: 'title-1', checkout_session_id: session.id, nonce: session.nonce });
  frameDocumentEvent(f, session.hosted_url);
  assert.match(status.textContent, /Restore is ready/); assertRestore();
  assert.equal(f.requests.length, 0, 'Ready/retry are not inventory or purchase authority');
  f.emit(); await flush();
  const closing = f.overlay.close(); assertRestore();
  assert.match(status.textContent, /Finishing secure restore verification/);
  assert.equal(f.overlay.element.isConnected, true); assert.equal(clock.pending.size, 0);
  finishInventory(); await closing; f.preserved(); f.dom.window.close();
});

test('synthetic parent Tab/Escape and dialog cancel preserve focus, fallback isolation and prior overflow', async () => {
  for (const action of ['Escape', 'cancel', 'button']) {
    const f = fixture({ beforeOpen: window => {
      window.document.body.style.overflow = 'scroll';
      const game = window.document.getElementById('game'); game.inert = true; game.setAttribute('aria-hidden', 'false');
    } });
    const [retry, close] = f.overlay.element.querySelectorAll('button');
    assert.equal(f.doc.activeElement, close); assert.equal(f.doc.body.style.overflow, 'hidden');
    assert.equal(f.game.inert, true); assert.equal(f.game.getAttribute('aria-hidden'), 'true');
    retry.focus();
    const backTab = new f.window.KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, cancelable: true });
    f.window.dispatchEvent(backTab); assert.equal(backTab.defaultPrevented, true); assert.equal(f.doc.activeElement, f.overlay.iframe);
    const tab = new f.window.KeyboardEvent('keydown', { key: 'Tab', cancelable: true });
    f.window.dispatchEvent(tab); assert.equal(tab.defaultPrevented, true); assert.equal(f.doc.activeElement, retry);
    if (action === 'button') close.click();
    else {
      const event = action === 'Escape' ? new f.window.KeyboardEvent('keydown', { key: 'Escape', cancelable: true }) : new f.window.Event('cancel', { cancelable: true });
      (action === 'Escape' ? f.window : f.overlay.element).dispatchEvent(event);
      assert.equal(event.defaultPrevented, true);
    }
    await f.overlay.close();
    assert.equal(f.doc.activeElement, f.play); assert.equal(f.doc.body.style.overflow, 'scroll');
    assert.equal(f.game.inert, true); assert.equal(f.game.getAttribute('aria-hidden'), 'false');
    assert.deepEqual(f.hooks, ['pause', 'resume']); f.preserved(); f.dom.window.close();
  }
});

test('forwarded secure close waits for pending claim and callback, retains Tab trap, and ignores retry/ready during close', async () => {
  let finishClaim; let finishInventory;
  const claiming = new Promise(resolve => { finishClaim = resolve; });
  const inventory = new Promise(resolve => { finishInventory = resolve; });
  const f = fixture({ onVerified: () => inventory }, { claim: () => claiming });
  const frame = f.overlay.iframe; const src = frame.src;
  f.emit(); await flush();
  const close = { type: 'glitch.microtransaction.close', version: 1, title_id: 'title-1', checkout_session_id: session.id, nonce: session.nonce };
  // This is the existing message inner Escape sends, not a simulated browser key.
  f.emit(close);
  const closing = f.overlay.close(); assert.equal(f.overlay.close(), closing);
  const status = f.overlay.element.querySelector('[role=status]');
  assert.match(status.textContent, /Finishing secure purchase verification/);
  const [retry] = f.overlay.element.querySelectorAll('button');
  retry.focus(); f.window.dispatchEvent(new f.window.KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, cancelable: true }));
  assert.equal(f.doc.activeElement, frame, 'Focus stays trapped until the claim/callback complete');
  f.overlay.retry(); assert.equal(f.overlay.iframe, frame); assert.equal(frame.src, src);
  f.emit({ ...close, type: 'glitch.microtransaction.ready' });
  frame.dispatchEvent(new f.window.Event('load')); frame.dispatchEvent(new f.window.Event('error'));
  assert.match(status.textContent, /Finishing secure purchase verification/);
  assert.equal(f.overlay.element.isConnected, true); assert.deepEqual(f.hooks, ['pause']);
  finishClaim(claim); await flush(); assert.equal(f.overlay.element.isConnected, true);
  finishInventory(); await closing;
  assert.equal(f.overlay.element.isConnected, false); assert.equal(f.doc.activeElement, f.play);
  assert.deepEqual(f.hooks, ['pause', 'resume']); assert.equal(f.errors.length, 0);
  assert.equal(f.requests.filter(request => request.url.endsWith('/handoffs/claim')).length, 1);
  assert.equal(f.requests.length, 1, 'Close joins the pending claim; no new checkout or credential escalation');
  f.preserved(); f.dom.window.close();
});

test('Retry commits blank then the exact capability URL in the same iframe, ignores stale events and coalesces clicks', async t => {
  let clock;
  const f = fixture({ frameLoadTimeoutMs: 1000, beforeOpen: window => { clock = fakeWindowClock(window); } });
  t.after(() => f.dom.window.close());
  const frame = f.overlay.iframe;
  const ready = { type: 'glitch.microtransaction.ready', version: 1, title_id: 'title-1', checkout_session_id: session.id, nonce: session.nonce };
  f.emit(ready);
  assert.equal(clock.pending.size, 0);
  f.overlay.retry();
  assert.equal(f.overlay.iframe, frame); assert.equal(frame.src, 'about:blank');
  const timer = [...clock.pending.keys()][0];
  f.overlay.retry(); f.overlay.retry();
  assert.equal([...clock.pending.keys()][0], timer, 'Clicks do not reset bounded navigation timeout');
  f.emit(ready); frameDocumentEvent(f, session.hosted_url); frameDocumentEvent(f, session.hosted_url, 'error');
  assert.match(f.overlay.element.querySelector('[role=status]').textContent, /Retrying/);
  assert.equal(frame.src, 'about:blank'); assert.equal(clock.pending.size, 1);
  frameDocumentEvent(f, 'about:blank', 'load', 'loading');
  assert.equal(frame.src, 'about:blank', 'Uncommitted blank cannot start checkout');
  finishRetryBlank(f);
  const targetTimer = [...clock.pending.keys()][0];
  assert.notEqual(targetTimer, timer);
  frameDocumentEvent(f, 'about:blank'); frameDocumentEvent(f, 'about:blank', 'error');
  assert.equal([...clock.pending.keys()][0], targetTimer, 'Queued blank load/error cannot reset target watchdog');
  Object.defineProperty(frame, 'contentDocument', { configurable: true, value: { URL: 'about:blank', readyState: 'complete' } });
  f.emit(ready); delete frame.contentDocument;
  assert.equal(clock.pending.size, 1, 'A late old ready while blank is ignored');
  f.emit(ready, { origin: 'https://evil.example.test' }); f.emit(ready, { source: f.window });
  f.emit(ready); // Ready before the new document load is held until that load.
  assert.equal(clock.pending.size, 1);
  frameDocumentEvent(f, session.hosted_url);
  assert.equal(clock.pending.size, 0); assert.match(f.overlay.element.querySelector('[role=status]').textContent, /Checkout is ready/);
  assert.equal(f.overlay.iframe, frame); assert.equal(frame.src, session.hosted_url);
  assert.equal(new URL(frame.src).search, ''); assert.equal(f.requests.length, 0);
  f.preserved(); await f.overlay.close();
});

test('blank timeout and target timeout retain explicit retry and ignore late navigation after failure or close', async t => {
  let clock;
  const f = fixture({ frameLoadTimeoutMs: 1000, beforeOpen: window => { clock = fakeWindowClock(window); } });
  t.after(() => f.dom.window.close());
  f.overlay.retry(); clock.tick(1000);
  assert.equal(f.errors.length, 1); assert.equal(clock.pending.size, 0);
  frameDocumentEvent(f, 'about:blank'); assert.equal(f.overlay.iframe.src, 'about:blank');
  f.overlay.retry(); finishRetryBlank(f); clock.tick(1000);
  assert.equal(f.errors.length, 2); assert.equal(clock.pending.size, 0);
  frameDocumentEvent(f, session.hosted_url);
  assert.equal(f.overlay.element.querySelector('[role=alert]') !== null, true);
  f.overlay.retry(); assert.equal(f.overlay.iframe.src, 'about:blank');
  await f.overlay.close();
  frameDocumentEvent(f, 'about:blank');
  assert.equal(f.overlay.iframe.src, 'about:blank', 'Close prevents delayed target navigation');
  assert.equal(clock.pending.size, 0); assert.equal(f.doc.activeElement, f.play);
  assert.deepEqual(f.hooks, ['pause', 'resume']); f.preserved();
});

test('close during blank still waits for the existing claim callback and cannot certify or restart the new UI', async t => {
  let complete;
  const pending = new Promise(resolve => { complete = resolve; });
  let clock;
  const f = fixture({ onVerified: () => pending, frameLoadTimeoutMs: 1000, beforeOpen: window => { clock = fakeWindowClock(window); } });
  t.after(() => f.dom.window.close());
  f.emit(); await flush(); f.overlay.retry();
  const closing = f.overlay.close();
  frameDocumentEvent(f, 'about:blank'); f.overlay.retry();
  assert.equal(f.overlay.iframe.src, 'about:blank'); assert.equal(clock.pending.size, 0);
  assert.equal(f.overlay.element.isConnected, true); assert.deepEqual(f.hooks, ['pause']);
  complete(); await closing;
  assert.deepEqual(f.hooks, ['pause', 'resume']); assert.equal(f.doc.activeElement, f.play);
  assert.equal(f.requests.length, 1); assert.equal(f.verified.length, 0); f.preserved();
});
