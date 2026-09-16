/* Execute unmodified published AND local bundles, with only browser HTTP mocked.
 * --published fetches pinned public npm bytes in memory; never loads npm config,
 * writes archives, calls a Glitch backend/provider, or uses real credentials.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { createHash, webcrypto } = require('node:crypto');
const { gunzipSync } = require('node:zlib');
const { test } = require('node:test');
const ts = require('typescript');
const { JSDOM } = require('jsdom');
const fixture = require('./fixtures/published-commerce.json');

const root = path.resolve(__dirname, '..');
const clone = value => JSON.parse(JSON.stringify(value));
const legacyReady = { status: 'ready', ready: true, blockers: [], providers: [], commission_basis_points: 1200 };

function browser() {
  const requests = [];
  let reply = { status: 200, data: { data: { accepted: true } } };
  class XHR {
    constructor() { this.headers = {}; this.onloadend = null; this.upload = { addEventListener() {} }; }
    open(method, url) { this.method = method; this.url = url; }
    setRequestHeader(name, value) { this.headers[name.toLowerCase()] = value; }
    getAllResponseHeaders() { return 'Content-Type: application/json\r\n'; }
    addEventListener() {}
    abort() {}
    send(body) {
      // Enforce hermetic transport: no network or provider call can occur here.
      assert.equal(new URL(this.url).origin, 'https://api.example.test');
      requests.push({ method: this.method.toUpperCase(), url: this.url, headers: { ...this.headers }, body: body ? JSON.parse(body) : null });
      this.status = reply.status;
      this.statusText = reply.status === 200 ? 'OK' : 'Denied';
      this.responseText = JSON.stringify(reply.data);
      queueMicrotask(() => this.onloadend());
    }
  }
  const window = { location: new URL(fixture.game_origin) };
  const context = vm.createContext({
    window, self: window, document: { cookie: '' }, navigator: { userAgent: 'commerce-compat-test' },
    XMLHttpRequest: XHR, URL, URLSearchParams, FormData, Blob, TextEncoder, TextDecoder,
    ArrayBuffer, Uint8Array, Buffer, AbortController, crypto: webcrypto,
    setTimeout, clearTimeout, setInterval, clearInterval, queueMicrotask, console,
    // No fetch in the VM: the published browser transport must use the stub.
  });
  return { context, requests, reply(value) { reply = value; } };
}

async function load(code, format, env) {
  if (format === 'cjs') {
    const module = { exports: {} };
    const guardedRequire = name => {
      const value = require(name);
      if (!['http', 'https', 'http2', 'net', 'tls'].includes(name.replace(/^node:/, ''))) return value;
      const guarded = { ...value };
      for (const method of ['request', 'get', 'connect', 'createConnection']) {
        if (typeof value[method] === 'function') guarded[method] = () => { throw new Error('Real network is forbidden in SDK compatibility tests'); };
      }
      return guarded;
    };
    Object.assign(env.context, { module, exports: module.exports, require: guardedRequire });
    new vm.Script(code, { filename: 'published-sdk.cjs' }).runInContext(env.context);
    return module.exports.default || module.exports;
  }
  const module = new vm.SourceTextModule(code, { context: env.context });
  await module.link(specifier => { throw new Error(`Unexpected external ESM import: ${specifier}`); });
  await module.evaluate();
  return module.namespace.default;
}

async function checkStarter(sdk, env, timberGrantKey) {
  const dom = new JSDOM('<!doctype html><body><main id="game">Existing game</main></body>', { url: fixture.game_origin });
  const source = fs.readFileSync(path.join(root, 'guides/microtransactions.md'), 'utf8').match(/```js\n([\s\S]*?)\n```/)[1];
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  let overlay;
  const open = options => { overlay = options; options.onOpen(); return { close: () => options.onClose() }; };
  const exports = {};
  env.reply({ status: 200, data: { data: { id: 'session-1', nonce: fixture.restore_body.nonce } } });
  const before = env.requests.length;
  try {
    vm.runInNewContext(compiled, { exports, document: dom.window.document, window: dom.window, URL, Date, Error,
      require: name => { assert.equal(name, 'glitch-javascript-sdk'); return { __esModule: true, default: sdk,
        createMicrotransactionNonce: () => fixture.restore_body.nonce,
        openMicrotransactionOverlay: open, openMicrotransactionRestoreOverlay: open }; },
    });
    const game = exports.installTimberShop({ titleId: 'title-1', productId: 'product-1', apiBaseUrl: 'https://api.example.test/api', checkoutOrigin: 'https://checkout.example.test', gameOrigin: fixture.game_origin, timberGrantKey });
    for (const label of ['Buy 100 Timber', 'Restore purchases']) {
      [...dom.window.document.querySelectorAll('button')].find(button => button.textContent === label).click();
      await new Promise(resolve => setImmediate(resolve));
      assert.equal(game.paused, true);
      assert.equal(overlay.allowLocalDevelopment, false, 'Hosted example does not silently enable local origin exceptions');
      overlay.onClose();
    }
    assert.deepEqual(env.requests.slice(before).map(request => request.body), [fixture.checkout_body, fixture.restore_body]);
    assert(env.requests.slice(before).every(request => !request.headers.authorization), 'Actual published API keeps starter requests guest-only');
    overlay.onVerified({ player_id: 'player-1', player_token: 'test-only-starter-player',
      expires_at: new Date(Date.now() + 900000).toISOString(), entitlements: [{ key: timberGrantKey, kind: 'consumable', balance: 100 }] });
    const entitlements = [{ key: timberGrantKey, kind: 'consumable', balance: 90 }];
    env.reply({ status: 200, data: { data: { entitlements } } });
    [...dom.window.document.querySelectorAll('button')].find(button => button.textContent === 'Use 10 Timber').click();
    await new Promise(resolve => setImmediate(resolve));
    const spending = env.requests.slice(before + 2);
    assert.equal(spending.length, 2, 'Explicit spending consumes once then refreshes');
    assert.deepEqual(spending[0].body, { key: timberGrantKey, quantity: 10, action_id: fixture.restore_body.nonce, environment: 'sandbox' });
    assert(spending.every(request => request.headers.authorization === 'Bearer test-only-starter-player'));
    assert.deepEqual(clone(game.inventory), entitlements);
    assert.equal(sdk.config.Config.getAuthToken(), '', 'Starter retains per-request auth, never global');
    assert.equal(dom.window.document.getElementById('game').textContent, 'Existing game');
  } finally { dom.window.close(); }
}

async function check(code, format, legacyCommunity, cryptoInterop = false) {
  const env = browser();
  if (cryptoInterop) {
    // Explicit legacy bundler interop, NOT native ESM. Keep the raw-import
    // regression below so this shim can never hide the 3.15 packaging caveat.
    env.context.require = name => { assert.equal(name, 'crypto-js'); return require(name); };
  }
  const sdk = await load(code, format, env);
  const api = sdk.api.Microtransactions;
  const requests = sdk.util.Requests;
  sdk.config.Config.setBaseUrl('https://api.example.test/api');
  for (const fn of ['catalog', 'createCheckoutSession', 'createRestoreSession', 'getCheckoutSession', 'authenticateCheckoutSession', 'claimHandoff', 'listMyPurchases']) {
    assert.equal(typeof api[fn], 'function', `${format}: ${fn}`);
  }
  const guest = async () => {
    await api.catalog('title-1', fixture.catalog_query);
    await api.createCheckoutSession('title-1', fixture.checkout_body);
    await api.createRestoreSession('title-1', fixture.restore_body);
  };
  await guest();
  for (const [index, suffix, method, body] of [
    [0, 'catalog', 'GET', null], [1, 'checkout-sessions', 'POST', fixture.checkout_body],
    [2, 'restore-sessions', 'POST', fixture.restore_body],
  ]) {
    const actual = env.requests[index];
    assert.equal(new URL(actual.url).pathname, `/api/titles/title-1/microtransactions/${suffix}`);
    assert.equal(actual.method, method);
    assert.deepEqual(actual.body, body, 'Existing 3.15 request body: no new required fields');
    assert.equal(actual.headers.authorization, undefined, 'Fresh guest sends no default Bearer');
    assert.equal(actual.headers['x-checkout-token'], undefined);
    assert.deepEqual(Object.fromEntries(new URL(actual.url).searchParams), index === 0 ? fixture.catalog_query : {});
  }
  // Published SDK inherits global auth; document it rather than silently stripping
  // the account JWT that the HOSTED account-bind step still legitimately needs.
  sdk.config.Config.setAuthToken('test-only-hosted-account');
  requests.setCommunityID('test-selected-community');
  await guest();
  for (const actual of env.requests.slice(3, 6)) {
    assert.equal(actual.headers.authorization, 'Bearer test-only-hosted-account');
    assert.equal(new URL(actual.url).searchParams.get('community_id'), legacyCommunity ? 'test-selected-community' : null);
    if (actual.body) assert(!Object.hasOwn(actual.body, 'community_id') && !Object.hasOwn(actual.body, 'communities'));
  }
  // Independent request credentials survive concurrent hosted/player calls.
  await Promise.all([
    api.getCheckoutSession('title-1', 'session-1', { checkoutToken: 'test-only-checkout' }),
    api.authenticateCheckoutSession('title-1', 'session-1', { checkoutToken: 'test-only-checkout' }),
    api.listEntitlements('title-1', { environment: 'sandbox' }, { playerToken: 'test-only-player-a' }),
    api.listMyPurchases('title-1', { environment: 'sandbox', page: 1, per_page: 20 }, { playerToken: 'test-only-player-b' }),
  ]);
  assert.deepEqual(env.requests.slice(6).map(r => r.headers.authorization), [
    'Bearer test-only-hosted-account', 'Bearer test-only-hosted-account', 'Bearer test-only-player-a', 'Bearer test-only-player-b',
  ]);
  for (const actual of env.requests.slice(6, 8)) assert.equal(actual.headers['x-checkout-token'], 'test-only-checkout');
  assert.equal(env.requests[7].method, 'POST');
  assert.equal(new URL(env.requests[7].url).pathname, '/api/titles/title-1/microtransactions/checkout-sessions/session-1/authenticate');
  assert.deepEqual(env.requests[7].body, {});
  assert.equal(new URL(env.requests[9].url).searchParams.has('community_id'), false, 'History never inherits community');
  assert.equal(sdk.config.Config.getAuthToken(), 'test-only-hosted-account');
  await requests.processRoute({ url: '/ordinary-context', method: 'GET' }, undefined, {}, undefined, {});
  assert.equal(new URL(env.requests.at(-1).url).searchParams.get('community_id'), 'test-selected-community', 'Commerce never mutates stored context');

  requests.setAuthToken('test-only-direct-request-auth');
  await api.catalog('title-1', fixture.catalog_query);
  assert.equal(env.requests.at(-1).headers.authorization, 'Bearer test-only-direct-request-auth');
  // This reset is isolated test teardown, not a recommended game auth workaround.
  sdk.config.Config.setAuthToken(''); requests.setCommunityID(undefined);
  const claim = { title_id: 'title-1', checkout_session_id: 'session-1', order_id: 'order-1', player_id: 'player-1', entitlements: [], player_token: 'test-only-scoped-result', expires_at: '2026-09-16T23:00:00Z' };
  env.reply({ status: 200, data: { data: claim } });
  const body = { claim_code: 'test-only-claim-code', checkout_session_id: 'session-1', nonce: fixture.restore_body.nonce, return_origin: fixture.game_origin };
  assert.deepEqual(clone((await api.claimHandoff('title-1', body)).data.data), claim);
  assert.deepEqual(env.requests.at(-1).body, body);
  assert.equal(env.requests.at(-1).headers.authorization, undefined);
  for (const readiness of [legacyReady, { ...legacyReady, configuration_ready: true, integration_verified: false }, { ...legacyReady, configuration_ready: true, integration_verified: true }]) {
    env.reply({ status: 200, data: { data: readiness } });
    assert.deepEqual(clone((await api.readiness('title-1')).data.data), readiness, 'New fields pass through; absent fields are not invented');
  }
  for (const status of [401, 403]) {
    env.reply({ status, data: { code: status === 401 ? 'authentication_required' : 'permission_denied', message: 'Fixture denial' } });
    for (const call of [() => api.catalog('title-1', fixture.catalog_query),
      () => api.createCheckoutSession('title-1', fixture.checkout_body),
      () => api.createRestoreSession('title-1', fixture.restore_body)]) {
      const before = env.requests.length;
      await assert.rejects(call(), error => error.response.status === status);
      assert.equal(env.requests.length, before + 1, 'No credential escalation or hidden retry on denial');
    }
  }
  for (const key of ['timber', 'wotw.resource.timber']) await checkStarter(sdk, env, key);
  for (const actual of env.requests) {
    assert(!actual.url.includes('test-only-'), 'No capability/Bearer in URL');
    assert.equal(actual.headers.origin, undefined, 'SDK does not spoof browser Origin');
  }
}

// Parse only regular tar files into memory; no archive paths are written to disk.
function tarFiles(bytes) {
  const tar = gunzipSync(bytes, { maxOutputLength: 32 * 1024 * 1024 });
  const files = new Map();
  for (let offset = 0; offset + 512 <= tar.length;) {
    const header = tar.subarray(offset, offset + 512);
    if (header.every(byte => byte === 0)) break;
    const name = header.subarray(0, 100).toString().replace(/\0.*$/, '');
    const size = parseInt(header.subarray(124, 136).toString().replace(/\0.*$/, '').trim(), 8);
    assert(Number.isSafeInteger(size) && size >= 0 && offset + 512 + size <= tar.length);
    if (header[156] === 0 || header[156] === 48) files.set(name, tar.subarray(offset + 512, offset + 512 + size).toString());
    offset += 512 + Math.ceil(size / 512) * 512;
  }
  return files;
}
async function publicFetch(url) {
  assert.equal(new URL(url).origin, 'https://registry.npmjs.org');
  const response = await fetch(url, { redirect: 'error', signal: AbortSignal.timeout(30000) });
  assert(response.ok, `Registry HTTP ${response.status}`);
  return response;
}

for (const format of ['cjs', 'esm']) {
  test(`local build ${format}: published-player contract, auth isolation, additive readiness`, async () => {
    await check(fs.readFileSync(path.join(root, 'dist', format, 'index.js'), 'utf8'), format, false);
  });
}
if (process.argv.includes('--published')) {
  for (const pinned of fixture.packages) {
    test(`published ${pinned.version}: integrity-verified CJS + ESM guest/account payloads`, async () => {
      const meta = await (await publicFetch(`https://registry.npmjs.org/glitch-javascript-sdk/${pinned.version}`)).json();
      assert.equal(meta.name, 'glitch-javascript-sdk'); assert.equal(meta.version, pinned.version);
      assert.equal(meta.dist.integrity, pinned.integrity);
      const bytes = Buffer.from(await (await publicFetch(meta.dist.tarball)).arrayBuffer());
      assert.equal('sha512-' + createHash('sha512').update(bytes).digest('base64'), pinned.integrity);
      const files = tarFiles(bytes);
      assert.equal(JSON.parse(files.get('package/package.json')).version, pinned.version);
      if (pinned.version === '3.15.0') {
        await assert.rejects(load(files.get('package/dist/esm/index.js'), 'esm', browser()), /require is not defined/,
          '3.15 raw native ESM needs legacy crypto-js CommonJS interop; do not claim standalone script-module support');
      }
      for (const format of ['cjs', 'esm']) await check(files.get(`package/dist/${format}/index.js`), format, pinned.legacy_community_query, pinned.version === '3.15.0' && format === 'esm');
    });
  }
}
