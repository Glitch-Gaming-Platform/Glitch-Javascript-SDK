const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const ts = require('typescript');
const { JSDOM } = require('jsdom');
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
    if (path.endsWith('/handoffs/claim')) data = claim;
    else if (path.endsWith('/entitlements')) data = { entitlements: claim.entitlements };
    else if (path.includes('/orders/')) data = order;
    else data = { ...session, title: { id: 'title-1', name: 'Game' }, product: null, order: response.order ?? null };
    return { status: 200, statusText: 'OK', config, headers: {}, data: { data } };
  };
  const options = { titleId: 'title-1', checkoutOrigin: 'https://checkout.example.test', session, document: doc, onVerified: c => verified.push(c), onOrderUpdate: o => notices.push(o), onOpen: () => hooks.push('pause'), onClose: () => hooks.push('resume'), onError: e => errors.push(e), ...custom };
  custom.beforeOpen?.(window);
  const open = custom.session?.intent === 'restore' ? openMicrotransactionRestoreOverlay : openMicrotransactionOverlay;
  const overlay = open(options);
  return { dom, doc, window, game, play, overlay, requests, verified, notices, hooks, errors,
    emit: (data = message, override = {}) => window.dispatchEvent(new window.MessageEvent('message', { data, origin: options.checkoutOrigin, source: overlay.iframe.contentWindow, ...override })),
    preserved: () => {
      assert.equal(window.location.href, 'https://game.example.test/level?save=original');
      assert.equal(doc.getElementById('game'), game); assert.equal(game.dataset.counter, '17'); assert.equal(doc.cookie, 'game_session=original');
    },
  };
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
  f.emit(close, { origin: 'https://evil.example.test' }); f.emit(close, { source: f.window });
  f.emit({ ...close, nonce: 'wrong' }); f.emit({ ...close, checkout_session_id: 'wrong' });
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
  f.overlay.retry(); assert.equal(f.overlay.iframe.src, source); f.preserved();
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
  f.overlay.retry(); assert.equal(f.overlay.iframe.src, originalUrl); assert.equal(clock.pending.size, 1);
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
