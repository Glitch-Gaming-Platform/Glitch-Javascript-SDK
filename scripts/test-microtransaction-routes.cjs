const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const ts = require('typescript');

// Execute actual source modules before the release build, not string-presence assertions.
require.extensions['.ts'] = (module, filename) => {
  const result = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
    fileName: filename,
  });
  module._compile(result.outputText, filename);
};
const axios = require('axios');
const Microtransactions = require('../src/api/Microtransactions.ts').default;
const Routes = require('../src/routes/MicrotransactionsRoute.ts').default.routes;
const Requests = require('../src/util/Requests.ts').default;
const { createMicrotransactionBridge, createMicrotransactionRestoreBridge, createMicrotransactionNonce } = require('../src/util/MicrotransactionBridge.ts');

const title = 'title-1';
const product = { sku: 'blue-cape', name: 'Blue cape', description: 'Permanent cosmetic', type: 'durable', prices: [{ currency: 'USD', country: '*', amount_minor: 499 }], grants: [{ key: 'cosmetic.blue-cape', kind: 'durable', quantity: 1 }] };
const purchase = { product_id: 'product-1', quantity: 1, country: 'US', currency: 'USD', environment: 'sandbox', channel: 'web' };
const sessionOptions = { checkoutToken: 'test-checkout-capability' };
const nonce = '0123456789abcdef0123456789abcdef';
const claimCode = 'test_one_time_claim_code_0123456789_0123456789';
const message = { type: 'glitch.microtransaction.updated', version: 1, title_id: title, checkout_session_id: 'session-1', order_id: 'order-1', nonce, claim_code: claimCode };
// Exact documented /handoffs/claim DTO (no fabricated bridge-only paid flag).
const claim = () => ({ title_id: title, checkout_session_id: 'session-1', order_id: 'order-1', player_id: 'player-1', entitlements: [{ key: 'cosmetic.blue-cape', kind: 'durable', balance: 1, environment: 'sandbox', updated_at: new Date().toISOString() }], player_token: 'test-scoped-commerce-token', expires_at: new Date(Date.now() + 900000).toISOString() });
const flush = () => new Promise(resolve => setImmediate(resolve));

test('every new route executes with its exact method/path, envelope and per-request credentials', async () => {
  const requests = [];
  Requests.setBaseUrl('https://api.example.test/api');
  Requests.setAuthToken('test-account-jwt');
  axios.defaults.adapter = async config => {
    requests.push(config);
    return { status: 200, statusText: 'OK', config, headers: {}, data: { data: { accepted: true } } };
  };
  const cases = [
    ['settings', () => Microtransactions.settings(title)],
    ['updateSettings', () => Microtransactions.updateSettings(title, { enabled: true, environment: 'sandbox', confirm: true })],
    ['readiness', () => Microtransactions.readiness(title)],
    ['products', () => Microtransactions.listProducts(title)],
    ['createProduct', () => Microtransactions.createProduct(title, product)],
    ['updateProduct', () => Microtransactions.updateProduct(title, 'product-1', { name: 'New cape' })],
    ['archiveProduct', () => Microtransactions.archiveProduct(title, 'product-1', { confirm: true })],
    ['providers', () => Microtransactions.providers(title)],
    ['updateProvider', () => Microtransactions.updateProvider(title, 'stripe', { environment: 'sandbox', enabled: true, priority: 25 })],
    ['refreshProvider', () => Microtransactions.refreshProvider(title, 'stripe', { environment: 'sandbox' })],
    ['createProviderOnboarding', () => Microtransactions.createProviderOnboarding(title, { environment: 'sandbox', country: 'US', idempotency_key: 'fixed-onboarding-intent' })],
    ['deliverySettings', () => Microtransactions.getDeliverySettings(title, { environment: 'sandbox' })],
    ['updateDeliverySettings', () => Microtransactions.updateDeliverySettings(title, { environment: 'sandbox', enabled: false })],
    ['deliveries', () => Microtransactions.listDeliveries(title, { environment: 'sandbox', order_id: 'order-1', page: 1, per_page: 25 })],
    ['refunds', () => Microtransactions.listRefunds(title, { environment: 'sandbox', order_id: 'order-1' })],
    ['refundDetail', () => Microtransactions.getRefund(title, 'refund-1')],
    ['reconcileRefund', () => Microtransactions.reconcileRefund(title, 'refund-1')],
    ['payouts', () => Microtransactions.listPayouts(title, { environment: 'sandbox', order_id: 'order-1' })],
    ['earnings', () => Microtransactions.earnings(title, { environment: 'sandbox' })],
    ['orders', () => Microtransactions.listOrders(title, { environment: 'sandbox' })],
    ['order', () => Microtransactions.getOrder(title, 'order-1', { playerToken: 'test-player-token' })],
    ['reconcileOrder', () => Microtransactions.reconcileOrder(title, 'order-1')],
    ['refund', () => Microtransactions.refundOrder(title, 'order-1', { reason: 'test refund', idempotency_key: 'fixed-refund-intent-1' })],
    ['replayDelivery', () => Microtransactions.replayDelivery(title, 'delivery-1', { confirm: true })],
    ['catalog', () => Microtransactions.catalog(title, { country: 'US', currency: 'USD', environment: 'sandbox', channel: 'web' })],
    ['createQuote', () => Microtransactions.createQuote(title, purchase)],
    ['createCheckoutSession', () => Microtransactions.createCheckoutSession(title, { ...purchase, return_origin: 'https://game.example.test', nonce })],
    ['createRestoreSession', () => Microtransactions.createRestoreSession(title, { environment: 'sandbox', return_origin: 'https://game.example.test', nonce })],
    ['checkoutSession', () => Microtransactions.getCheckoutSession(title, 'session-1', sessionOptions)],
    ['checkoutFramePolicy', () => Microtransactions.getCheckoutFramePolicy(title, 'session-1')],
    ['framePolicy', () => Microtransactions.getFramePolicy(title)],
    ['authenticateCheckoutSession', () => Microtransactions.authenticateCheckoutSession(title, 'session-1', sessionOptions)],
    ['checkout', () => Microtransactions.checkout(title, 'session-1', { idempotency_key: 'action-1', accept_terms: true }, sessionOptions)],
    ['reconcileCheckout', () => Microtransactions.reconcileCheckoutSession(title, 'session-1', sessionOptions)],
    ['createHandoff', () => Microtransactions.createHandoff(title, 'session-1', sessionOptions)],
    ['claimHandoff', () => Microtransactions.claimHandoff(title, { claim_code: claimCode, nonce, return_origin: 'https://game.example.test', checkout_session_id: 'session-1' })],
    ['restoreHandoff', () => Microtransactions.restoreHandoff(title, { order_id: 'order-1', nonce, return_origin: 'https://game.example.test' })],
    ['verifyIntegration', () => Microtransactions.verifyIntegration(title, { order_id: 'order-1', confirm: true })],
    ['entitlements', () => Microtransactions.listEntitlements(title, { environment: 'sandbox' }, { playerToken: 'test-player-token' })],
    ['myPurchases', () => Microtransactions.listMyPurchases(title, { environment: 'sandbox', page: 2, per_page: 20 }, { playerToken: 'test-player-token' })],
    ['consume', () => Microtransactions.consume(title, { key: 'gold', quantity: 5, action_id: 'action-1', environment: 'sandbox' }, { playerToken: 'test-player-token' })],
    ['requestRefund', () => Microtransactions.requestRefund(title, { order_id: 'order-1', reason: 'test refund' })],
    ['acknowledgeDelivery', () => Microtransactions.acknowledgeDelivery(title, 'delivery-1', { event_id: 'event-1' })],
    ['mcpCapabilities', () => Microtransactions.mcpCapabilities(title)],
    ['mcpOperation', () => Microtransactions.mcpOperation(title, 'settings.get', { arguments: {} })],
    ['uploadMedia', () => Microtransactions.uploadMedia(title, new Blob(['test-png'], { type: 'image/png' }))],
    ['mcpUploadMedia', () => Microtransactions.mcpUploadMedia(title, new Blob(['test-png'], { type: 'image/png' }))],
  ];
  for (const [route, run] of cases) {
    const response = await run();
    assert.equal(response.data.data.accepted, true);
    const config = requests.at(-1);
    const expected = Routes[route].url.replace('{title_id}', title).replace('{product_id}', 'product-1').replace('{order_id}', 'order-1').replace('{session_id}', 'session-1').replace('{delivery_id}', 'delivery-1').replace('{refund_id}', 'refund-1').replace('{provider}', 'stripe').replace('{operation}', 'settings.get');
    assert.equal(new URL(config.url).pathname, `/api${expected}`, route);
    assert.equal(config.method.toUpperCase(), Routes[route].method, route);
    assert(!config.url.includes('test-checkout-capability'));
    assert(!config.url.includes('test-player-token'));
    assert(!config.url.includes('undefined'));
    assert.equal(config.headers.get('X-Checkout-Token'), expected.includes('/checkout-sessions/session-1') && !expected.endsWith('/frame-policy') ? 'test-checkout-capability' : undefined);
  }
  assert.equal(cases.length, Object.keys(Routes).length, 'A new route needs a runtime transport test');
  assert.equal(JSON.parse(requests.find(r => r.url.endsWith('/products') && r.method === 'post').data).prices[0].amount_minor, 499);
  await Promise.all([
    Microtransactions.getOrder(title, 'order-1', { playerToken: 'player-a' }),
    Microtransactions.getOrder(title, 'order-2', { playerToken: 'player-b' }),
    Microtransactions.settings(title),
  ]);
  assert.deepEqual(requests.slice(-3).map(r => r.headers.get('Authorization')), ['Bearer player-a', 'Bearer player-b', 'Bearer test-account-jwt']);
  assert.throws(() => Microtransactions.getOrder('../other-title', 'order-1'), /identifier/);
  assert.throws(() => Microtransactions.getOrder(title, 'order-1?token=bad'), /identifier/);
  assert.throws(() => Microtransactions.getCheckoutSession(title, 'session-1', { checkoutToken: '' }), /capability/);
});

function bridgeFixture(overrides = {}) {
  const popup = {};
  const listeners = new Set();
  const verified = [];
  const errors = [];
  const calls = [];
  const eventTarget = { addEventListener: (_name, listener) => listeners.add(listener), removeEventListener: (_name, listener) => listeners.delete(listener) };
  const bridge = createMicrotransactionBridge({ titleId: title, checkoutSessionId: 'session-1', checkoutOrigin: 'https://checkout.example.test', checkoutWindow: popup, nonce, eventTarget,
    verify: async received => { calls.push(received); return claim(); }, onVerified: value => verified.push(value), onError: error => errors.push(error), ...overrides });
  return { bridge, calls, verified, errors, listeners, emit: (data = message, event = {}) => { for (const listener of listeners) listener({ data, origin: 'https://checkout.example.test', source: popup, ...event }); } };
}

test('own purchase history preserves page/lot DTOs, uses only per-request identity and rejects caller-selected players', async () => {
  const requests = [];
  const history = {
    title_id: title, player_id: 'player-1', environment: 'sandbox',
    purchases: [{ id: 'order-1', player_id: 'player-1', product: { id: 'product-1', sku: 'timber-100', name: '100 Timber', type: 'currency', version: 1 },
      grant_usage: [{ grant_id: 'grant-1', key: 'timber', kind: 'consumable', purchased_quantity: 100, granted_quantity: 100, acquired_quantity: 100, remaining_quantity: 20, consumed_quantity: 60, revoked_quantity: 20, refunded_quantity: 40, unrecoverable_quantity: 20, expires_at: null, expired: false, usable_quantity: 20, is_used: true, usage_status: 'partially_used' },
        { grant_id: null, key: 'other-resource', kind: 'consumable', purchased_quantity: 50, granted_quantity: 0, acquired_quantity: 0, remaining_quantity: 0, consumed_quantity: 0, revoked_quantity: 0, refunded_quantity: 0, unrecoverable_quantity: 0, expires_at: null, expired: false, usable_quantity: 0, is_used: false, usage_status: 'not_delivered' }],
      has_consumed_grants: true, has_usable_grants: true },
      { id: 'legacy-order', player_id: 'player-1', product: { id: 'legacy-product', sku: null, name: null, type: null, version: null }, grant_usage: [], has_consumed_grants: false, has_usable_grants: false }],
    pagination: { page: 2, per_page: 20, total: 25, last_page: 2, has_more_pages: false },
  };
  Requests.setAuthToken('test-account-jwt');
  axios.defaults.adapter = async config => { requests.push(config); return { status: 200, statusText: 'OK', headers: {}, config, data: { data: history } }; };
  const response = await Microtransactions.listMyPurchases(title, { environment: 'sandbox', page: 2, per_page: 20 }, { playerToken: 'history-player-token' });
  assert.deepEqual(response.data.data, history, 'The SDK must not infer usage from aggregate balances or rewrite authoritative lot data');
  assert.equal(new URL(requests[0].url).pathname, '/api/titles/title-1/microtransactions/me/purchases');
  assert.equal(new URL(requests[0].url).search, '?environment=sandbox&page=2&per_page=20');
  assert.equal(requests[0].headers.get('Authorization'), 'Bearer history-player-token');
  await Microtransactions.listMyPurchases(title);
  assert.equal(new URL(requests[1].url).search, '', 'Let JWT/scoped authentication determine default environment');
  assert.equal(requests[1].headers.get('Authorization'), 'Bearer test-account-jwt', 'Scoped requests cannot mutate global account auth');
  Requests.setCommunityID('community-current');
  try {
    await Promise.all([
      Microtransactions.listMyPurchases(title, { page: 1 }, { playerToken: 'isolated-history-token' }),
      Requests.processRoute({ url: '/ordinary/context', method: 'GET' }, undefined, {}, undefined, {}),
    ]);
    assert.equal(new URL(requests[2].url).search, '?page=1', 'Self-history must exclude inherited community_id');
    assert.equal(requests[2].headers.get('Authorization'), 'Bearer isolated-history-token');
    assert.equal(new URL(requests[3].url).searchParams.get('community_id'), 'community-current', 'Concurrent non-commerce routes retain global community context');
    assert.equal(requests[3].headers.get('Authorization'), 'Bearer test-account-jwt', 'Concurrent normal routes retain original account token');
  } finally { Requests.setCommunityID(undefined); }
  for (const filters of [{ user_id: 'other' }, { player_id: 'other' }, { cursor: 'legacy' }, { product_id: 'other' }, { page: 0 }, { page: 10001 }, { page: 1.5 }, { per_page: 0 }, { per_page: 101 }, { environment: 'production' }]) {
    assert.throws(() => Microtransactions.listMyPurchases(title, filters), /history|identity|environment/);
  }
  assert.equal(requests.length, 4, 'Invalid self-history selectors are rejected before network transport');
});

test('direct management never leaks global community context and refunds keep their caller key', async () => {
  const requests = [];
  Requests.setAuthToken('test-account-jwt'); Requests.setCommunityID('selected-global-community');
  axios.defaults.adapter = async config => { requests.push(config); return { status: 200, statusText: 'OK', headers: {}, config, data: { data: { status: 'unknown', refund_id: 'refund-1' } } }; };
  try {
    await Promise.all([
      Microtransactions.providers(title, { environment: 'sandbox' }),
      Microtransactions.updateProvider(title, 'stripe', { environment: 'sandbox', enabled: false }),
      Microtransactions.refreshProvider(title, 'stripe', { environment: 'sandbox' }),
      Microtransactions.updateDeliverySettings(title, { environment: 'sandbox', enabled: false }),
      Microtransactions.uploadMedia(title, new Blob(['test'], { type: 'image/png' })),
      Requests.processRoute({ url: '/ordinary/context', method: 'GET' }, undefined, {}, undefined, {}),
    ]);
    for (const request of requests.slice(0, 5)) assert.equal(new URL(request.url).searchParams.has('community_id'), false);
    assert.deepEqual([...requests[4].data.keys()], ['media'], 'Commerce uploads must not inherit communities form fields');
    assert.equal(new URL(requests[5].url).searchParams.get('community_id'), 'selected-global-community');
    const data = { reason: 'Buyer refund', amount_minor: 99, idempotency_key: 'one-stable-refund-operation' };
    await Microtransactions.refundOrder(title, 'order-1', data);
    await Microtransactions.refundOrder(title, 'order-1', data);
    assert.equal(JSON.parse(requests[6].data).idempotency_key, data.idempotency_key);
    assert.deepEqual(JSON.parse(requests[6].data), JSON.parse(requests[7].data));
    assert.throws(() => Microtransactions.refundOrder(title, 'order-1', { reason: 'Missing key' }), /stable.*idempotency_key/);
    assert.equal(requests.length, 8);
    await Microtransactions.providers(title, { timeout: 1234 });
    assert.equal(requests[8].timeout, 1234, 'Legacy provider request-options overload remains valid');
    assert.equal(new URL(requests[8].url).search, '');
    await Microtransactions.getOrder(title, 'order-1', { playerToken: 'player-receipt-token' });
    assert.equal(requests[9].headers.get('Authorization'), 'Bearer player-receipt-token', 'Existing player receipt request is not forced into admin auth');
  } finally { Requests.setCommunityID(undefined); }
});

test('partial provider edits never select or default a payout recipient', async () => {
  const requests = [];
  axios.defaults.adapter = async config => {
    requests.push(config);
    return { status: 200, statusText: 'OK', headers: {}, config, data: { data: { provider: 'stripe' } } };
  };
  const input = Object.freeze({ environment: 'sandbox', priority: 17 });
  await Microtransactions.updateProvider(title, 'stripe', input);
  assert.deepEqual(JSON.parse(requests[0].data), input);
  assert.equal(Object.hasOwn(JSON.parse(requests[0].data), 'payout_source'), false);
  await Microtransactions.updateProvider(title, 'stripe', { ...input, payout_source: 'managed' });
  assert.deepEqual(JSON.parse(requests[1].data), { ...input, payout_source: 'managed' });
});

test('catalog discovery supports later pages and exact SKU without changing legacy request options', async () => {
  const requests = [];
  const data = { products: [{ id: 'older-product', sku: 'older.exact-sku' }], pagination: { page: 2, per_page: 1, total: 3, last_page: 3, has_more_pages: true } };
  axios.defaults.adapter = async config => {
    requests.push(config);
    return { status: 200, statusText: 'OK', headers: {}, config, data: { data } };
  };
  const response = await Microtransactions.listProducts(title, { page: 2, per_page: 1, status: 'archived', sku: 'older.exact-sku' }, { timeout: 1500 });
  assert.deepEqual(response.data.data, data);
  assert.equal(new URL(requests[0].url).search, '?page=2&per_page=1&status=archived&sku=older.exact-sku');
  assert.equal(requests[0].timeout, 1500);
  await Microtransactions.listProducts(title, { timeout: 1501 });
  assert.equal(new URL(requests[1].url).search, '');
  assert.equal(requests[1].timeout, 1501);
  await Microtransactions.listProducts(title);
  assert.equal(new URL(requests[2].url).search, '', 'No-argument callers retain backend defaults');
});

test('rejects wrong origin/window/title/session/nonce/version and malformed claim codes before any verification', async () => {
  const f = bridgeFixture();
  f.emit(message, { origin: 'https://evil.example.test' });
  f.emit(message, { source: {} });
  for (const changed of [{ title_id: 'other' }, { checkout_session_id: 'other' }, { nonce: 'other' }, { version: 2 }, { claim_code: 'x' }, { order_id: '../other' }, { type: 'glitch.microtransaction.completed' }]) f.emit({ ...message, ...changed });
  await flush();
  assert.equal(f.calls.length, 0);
  assert.equal(f.verified.length, 0);
  f.bridge.dispose();
});

test('redeems an actual handoff once, validates returned binding and refreshes with existing scoped authority', async () => {
  const refreshCalls = [];
  const f = bridgeFixture({ refresh: async previous => { refreshCalls.push(previous); return { ...previous, entitlements: [] }; } });
  f.emit(); f.emit(); await flush(); f.emit(); await flush();
  assert.equal(f.calls.length, 1);
  assert.equal(f.calls[0].claim_code, claimCode);
  assert.equal(f.verified.length, 1);
  await Promise.all([f.bridge.refresh(), f.bridge.refresh()]);
  assert.equal(refreshCalls.length, 1);
  assert.equal(refreshCalls[0].player_token, 'test-scoped-commerce-token');
  assert.equal(f.calls.length, 1, 'Refresh must not redeem the one-time code again');
  assert.deepEqual(f.verified.at(-1).entitlements, []);
  f.bridge.dispose();
  assert.equal(f.listeners.size, 0);
});

test('different server title/session/order and expired tokens never reach game onVerified', async () => {
  for (const changed of [{ title_id: 'other-title' }, { checkout_session_id: 'other-session' }, { order_id: 'other-order' }, { expires_at: '2000-01-01T00:00:00Z' }]) {
    const f = bridgeFixture({ verify: async () => ({ ...claim(), ...changed }) });
    f.emit(); await flush();
    assert.equal(f.verified.length, 0);
    assert.equal(f.errors.length, 1);
    f.bridge.dispose();
  }
});

test('claim timeout suppresses replay, accepts a fresh hosted code and never initiates another payment', async () => {
  let count = 0;
  const f = bridgeFixture({ verify: async () => { if (++count === 1) throw new Error('Test network timeout'); return claim(); } });
  f.emit(); await flush(); f.emit(); await flush();
  assert.equal(count, 1);
  assert.equal(f.errors.length, 1);
  await assert.rejects(f.bridge.refresh(), /verified claim/);
  f.emit({ ...message, claim_code: 'fresh_one_time_claim_code_0123456789_0123456789' }); await flush();
  assert.equal(count, 2);
  assert.equal(f.verified.length, 1);
  f.bridge.dispose();
});

test('disposing during verification prevents account-crossing UI callbacks', async () => {
  let complete;
  const f = bridgeFixture({ verify: () => new Promise(resolve => { complete = resolve; }) });
  f.emit(); await flush(); f.bridge.dispose(); complete(claim()); await flush();
  assert.equal(f.verified.length, 0);
});

test('refresh cannot switch the verified player identity', async () => {
  const f = bridgeFixture({ refresh: async previous => ({ ...previous, player_id: 'different-player' }) });
  f.emit(); await flush();
  await assert.rejects(f.bridge.refresh(), /differently bound/);
  assert.equal(f.verified.length, 1);
  f.bridge.dispose();
});

test('restore bridge pins original receipt while verifying the newly issued session', async () => {
  const listeners = new Set(); const popup = {}; const received = []; const verified = [];
  const bridge = createMicrotransactionRestoreBridge({ titleId: title, orderId: 'order-1', checkoutOrigin: 'https://checkout.example.test', checkoutWindow: popup, nonce,
    eventTarget: { addEventListener: (_n, f) => listeners.add(f), removeEventListener: (_n, f) => listeners.delete(f) },
    verify: async msg => { received.push(msg); return { ...claim(), checkout_session_id: msg.checkout_session_id }; },
    onVerified: result => verified.push(result),
  });
  const emit = data => { for (const listener of listeners) listener({ data, origin: 'https://checkout.example.test', source: popup }); };
  emit({ ...message, order_id: 'other-order', checkout_session_id: 'new-session' }); await flush();
  assert.equal(received.length, 0);
  emit({ ...message, checkout_session_id: 'new-session' }); await flush();
  assert.equal(received.length, 1);
  assert.equal(verified[0].checkout_session_id, 'new-session');
  bridge.dispose();
  const original = bridgeFixture(); original.emit({ ...message, checkout_session_id: 'new-session' }); await flush();
  assert.equal(original.calls.length, 0, 'Purchase bridge must still pin its original session');
  original.bridge.dispose();
});

test('origin/nonce inputs fail closed and nonce generation is cryptographically random', () => {
  for (const checkoutOrigin of ['*', 'https://checkout.example.test/path', 'https://user:pass@checkout.example.test', 'http://checkout.example.test']) assert.throws(() => bridgeFixture({ checkoutOrigin }));
  assert.throws(() => bridgeFixture({ nonce: 'short' }));
  const a = createMicrotransactionNonce(); const b = createMicrotransactionNonce();
  assert.match(a, /^[a-f0-9]{64}$/); assert.notEqual(a, b);
});
