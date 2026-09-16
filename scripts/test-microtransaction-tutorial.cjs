const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const { JSDOM } = require('jsdom');

const guide = fs.readFileSync('guides/microtransactions.md', 'utf8');
assert(guide.includes('Player checkout/history minimum: SDK `3.15.0`'));
assert(guide.includes('major SDK `4.0.0` migration'));
assert(guide.includes('does not require installing or publishing the game SDK'));
const example = guide.match(/```js\n([\s\S]*?)\n```/)?.[1];
assert(example, 'The beginner guide must contain the complete runnable example');
const compiled = ts.transpileModule(example, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
const flush = () => new Promise(resolve => setImmediate(resolve));

function tutorialFixture(failure = 'consume', overrides = {}) {
  const dom = new JSDOM('<!doctype html><body><main id="game">Existing game</main></body>', { url: 'https://game.example.test' });
  const calls = { consume: [], history: [], inventory: [], session: [] };
  let overlayOptions; let nonce = 0; let failed = false;
  const key = overrides.timberGrantKey ?? 'wotw.resource.timber';
  // Independent title fixtures: timber may be consumable in one title and
  // durable in the WOTW-like fixture. Never emit two kinds for one title/key.
  const timber = (balance, kind = 'consumable') => [
    ...(key === 'timber' ? [] : [{ key: 'timber', kind: 'durable', balance: 1, environment: 'sandbox' }]),
    { key, kind, balance, environment: 'sandbox' }];
  const api = {
    createCheckoutSession: async (...args) => { calls.session.push(args); return { data: { data: { id: 'session-1', intent: 'purchase' } } }; },
    createRestoreSession: async (...args) => { calls.session.push(args); return { data: { data: { id: 'restore-1', intent: 'restore' } } }; },
    listMyPurchases: async (...args) => {
      calls.history.push(args);
      return { data: { data: { purchases: [{ id: 'legacy-order', product: { id: 'legacy-product', sku: null, name: null, type: null, version: null }, grant_usage: [{ key, usage_status: 'partially_used', purchased_quantity: 100, granted_quantity: 100, consumed_quantity: 10, usable_quantity: 90 }] }], pagination: { page: 1, per_page: 20, total: 1, last_page: 1, has_more_pages: false } } } };
    },
    consume: async (...args) => {
      calls.consume.push(args);
      if (failure === 'consume' && !failed) { failed = true; throw new Error('Simulated lost response'); }
      return { data: { data: { replayed: calls.consume.length > 1 } } };
    },
    listEntitlements: async (...args) => {
      calls.inventory.push(args);
      if (failure === 'inventory' && !failed) { failed = true; throw new Error('Simulated refresh failure'); }
      return { data: { data: { entitlements: timber(90) } } };
    },
  };
  const sdk = { __esModule: true, default: { api: { Microtransactions: api }, util: { Requests: { setBaseUrl: () => {} } } },
    createMicrotransactionNonce: () => 'test-intent-' + (++nonce),
    openMicrotransactionOverlay: options => { overlayOptions = options; options.onOpen(); return { close: () => options.onClose() }; },
    openMicrotransactionRestoreOverlay: options => { overlayOptions = options; options.onOpen(); return { close: () => options.onClose() }; },
  };
  const exports = {};
  vm.runInNewContext(compiled, { exports, require: name => { assert.equal(name, 'glitch-javascript-sdk'); return sdk; }, document: dom.window.document, window: dom.window, Date, Error, URL });
  let game;
  try {
    game = exports.installTimberShop({ titleId: 'title-1', productId: 'timber-100', apiBaseUrl: 'https://api.example.test/api', checkoutOrigin: 'https://checkout.example.test', gameOrigin: 'https://game.example.test', timberGrantKey: 'wotw.resource.timber', ...overrides });
  } catch (error) { dom.window.close(); throw error; }
  return { dom, game, calls, get overlay() { return overlayOptions; },
    click: async label => { const button = [...dom.window.document.querySelectorAll('button')].find(b => b.textContent === label); assert(button, label); button.click(); await flush(); await flush(); },
    verify: (player = 'player-1', kind = 'consumable') => overlayOptions.onVerified({ player_id: player, player_token: 'test-scoped-' + player, expires_at: new Date(Date.now() + 900000).toISOString(), entitlements: timber(100, kind) }),
  };
}

test('copyable tutorial binds profile and replaces verified inventory without automatic consumption or global token mutation', async () => {
  const f = tutorialFixture();
  await f.click('Buy 100 Timber');
  assert.equal(f.game.paused, true);
  f.verify(); f.verify();
  assert.equal(f.game.playerId, 'player-1');
  assert.equal(f.dom.window.document.querySelector('output').textContent, 'Timber: 100', 'Repeated callback must not add product quantity');
  assert.equal(f.calls.consume.length, 0);
  assert.equal(f.calls.session[0].length, 2, 'Guest creation does not supply any credential option');
  assert.equal(f.calls.session[0][1].return_origin, 'https://game.example.test');
  assert.equal(f.game.inventory.find(row => row.key === 'timber').kind, 'durable');
  f.overlay.onClose();
  await f.click('My purchases');
  assert.equal(f.calls.history[0][0], 'title-1');
  assert.deepEqual(JSON.parse(JSON.stringify(f.calls.history[0][1])), { environment: 'sandbox', page: 1, per_page: 20 });
  assert.equal(f.calls.history[0][2].playerToken, 'test-scoped-player-1');
  assert.match(f.dom.window.document.querySelector('pre').textContent, /Purchase legacy-order/);
  assert.equal(f.dom.window.document.getElementById('game').textContent, 'Existing game');
  f.dom.window.close();
});

test('starter requires exact approved game origin and an explicit key using the existing grammar', () => {
  for (const gameOrigin of ['https://other.example.test', 'https://game.example.test/game-path']) {
    assert.throws(() => tutorialFixture('consume', { gameOrigin }), /exact approved gameOrigin/);
  }
  for (const timberGrantKey of [undefined, null, 42, {}, '', 'a'.repeat(101), ' timber', 'timber ', 'timber/wood', 'timber:wood', 'timber\n', 'timbér']) {
    assert.throws(() => tutorialFixture('consume', { timberGrantKey }), /explicit grant key/);
  }
});

for (const timberGrantKey of ['timber', 'gold', 'Wood_01-pack', 'wotw.resource.timber', 'a'.repeat(100)]) {
  test(`starter accepts the actual consumable key ${timberGrantKey.slice(0, 30)} without a namespace rule`, async () => {
    const f = tutorialFixture('none', { timberGrantKey });
    try {
      await f.click('Buy 100 Timber'); f.verify(); f.overlay.onClose();
      await f.click('Use 10 Timber');
      assert.equal(f.calls.consume.length, 1);
      assert.equal(f.calls.consume[0][1].key, timberGrantKey, 'Use the exact caller key, never rename it');
      assert.equal(f.game.inventory.find(row => row.key === timberGrantKey).kind, 'consumable');
      assert.equal(f.dom.window.document.querySelector('output').textContent, 'Timber: 90');
      if (timberGrantKey !== 'timber') assert.equal(f.game.inventory.find(row => row.key === 'timber').kind, 'durable');
    } finally { f.dom.window.close(); }
  });
}

for (const timberGrantKey of ['timber', 'wotw.resource.timber']) {
  test(`starter rejects canonical durable ${timberGrantKey}, not its spelling`, async () => {
    const f = tutorialFixture('none', { timberGrantKey });
    try {
      await f.click('Buy 100 Timber');
      assert.throws(() => f.verify('player-1', 'durable'), /kind mismatch/);
      assert.equal(f.game.inventory.length, 0, 'Durable ownership is never converted to spendable units');
      assert.equal(f.game.playerId, null, 'A mismatched mapping cannot partially accept the account');
      f.overlay.onClose(); await f.click('Use 10 Timber');
      assert.equal(f.calls.consume.length, 0);
    } finally { f.dom.window.close(); }
  });
}

test('public guide scopes the WOTW proposal to its title and has no task-specific approval gate', () => {
  assert.match(guide, /WOTW-specific migration proposal/);
  assert.match(guide, /title ID prefix `ad467`/);
  assert.match(guide, /another game[\s\S]*may already use `timber` as consumable/);
  assert.match(guide, /namespacing is optional/);
  assert.match(guide, /proposal does not create\/publish products or prices or\s+authorize a catalog mutation/);
  assert.doesNotMatch(guide, /parent review|parent-owned|let the parent|to the parent/i);
  assert.match(guide, /Unreleased additive follow-up/);
  assert.match(guide, /no hosted backend deployment was performed/i);
});

test('tutorial explains no_purchases_to_restore without granting items or assuming a new token', async () => {
  const f = tutorialFixture();
  await f.click('Restore purchases');
  f.overlay.onError({ response: { data: { code: 'no_purchases_to_restore' } } });
  assert.match(f.dom.window.document.querySelector('[role=status]').textContent, /No active purchases to restore/);
  assert.match(f.dom.window.document.querySelector('[role=status]').textContent, /no new game token or items/);
  assert.equal(f.game.playerId, null);
  assert.equal(f.calls.consume.length, 0);
  assert.equal(f.calls.history.length, 0);
  f.dom.window.close();
});

for (const failure of ['consume', 'inventory']) {
  test(`tutorial preserves the same use intent when ${failure} fails and replaces the authoritative balance`, async () => {
    const f = tutorialFixture(failure);
    await f.click('Buy 100 Timber'); f.verify(); f.overlay.onClose();
    await f.click('Use 10 Timber'); await f.click('Use 10 Timber');
    assert.equal(f.calls.consume.length, 2);
    assert.equal(f.calls.consume[0][1].action_id, f.calls.consume[1][1].action_id, 'A retry must not create a fresh action ID');
    assert.equal(f.calls.consume[0][1].quantity, 10);
    assert.equal(f.calls.consume[0][1].key, 'wotw.resource.timber', 'Spending uses the explicit mapping, never durable timber');
    assert.equal(f.calls.consume[1][2].playerToken, 'test-scoped-player-1');
    assert.equal(f.dom.window.document.querySelector('output').textContent, 'Timber: 90');
    f.dom.window.close();
  });
}

test('purchase-history TypeScript contracts preserve nullable legacy snapshots and forbid identity/cursor selectors', () => {
  const filename = path.resolve('scripts/__virtual_commerce_history_types.ts');
  const source = `import Microtransactions, { MicrotransactionReadiness, MicrotransactionPlayerPurchase, MicrotransactionOrder, MicrotransactionGrantUsage, MicrotransactionMyPurchases, MicrotransactionOrderDetail, MicrotransactionProvider, MicrotransactionDeliverySettings, MicrotransactionProviderOnboarding } from '../src/api/Microtransactions';
const oldReady: MicrotransactionReadiness = { status: 'ready', ready: true, blockers: [], providers: [], commission_basis_points: 1200 };
const newReady: MicrotransactionReadiness = { ...oldReady, configuration_ready: true, integration_verified: false };
const proof: boolean | undefined = newReady.integration_verified;
// @ts-expect-error An older server can omit integration evidence; callers must handle unknown.
const assumedProof: boolean = oldReady.integration_verified;
declare const purchase: MicrotransactionPlayerPurchase;
declare const order: MicrotransactionOrder;
declare const lot: MicrotransactionGrantUsage;
declare const history: MicrotransactionMyPurchases;
const self: string = purchase.player_id;
const optionalOwner: string | undefined = order.player_id;
const grantId: string | null = lot.grant_id;
const oldProduct: MicrotransactionPlayerPurchase['product'] = { id: 'legacy', sku: null, name: null, type: null, version: null };
const total: number = history.pagination.total;
declare const detail: MicrotransactionOrderDetail;
const optionalRefundAmount: number | undefined = detail.refunds?.[0]?.amount_minor;
declare const provider: MicrotransactionProvider;
const gamePayoutReady: boolean = provider.payout_account.available;
declare const delivery: MicrotransactionDeliverySettings;
const publicKey: string | null = delivery.verification_public_key;
const keyId: string | null = delivery.key_id;
const algorithm: 'ed25519' | 'hmac-sha256' = delivery.signature_algorithm;
declare const onboarding: MicrotransactionProviderOnboarding;
const onboardingUrl: string = onboarding.onboarding_url;
Microtransactions.updateProvider('title', 'stripe', { environment: 'sandbox', minimum_amounts: { USD: 50 } });
Microtransactions.listProducts('title', { page: 2, per_page: 200, status: 'archived', sku: 'exact.sku' }, { timeout: 1000 });
Microtransactions.listProducts('title', { timeout: 1000 });
Microtransactions.listProducts('title').then(response => { const total: number = response.data.data.pagination.total; });
Microtransactions.replayDelivery('title', 'delivery').then(response => {
  const attempts: number = response.data.data.attempts;
  // @ts-expect-error Replay returns a safe subset, not list-only timestamps.
  const createdAt: string = response.data.data.created_at;
});
// @ts-expect-error Product catalog has no environment filter.
Microtransactions.listProducts('title', { environment: 'sandbox' });
Microtransactions.refundOrder('title', 'order', { reason: 'Buyer refund', idempotency_key: 'one-persisted-refund-key' });
// @ts-expect-error Direct refunds must provide a stable caller key.
Microtransactions.refundOrder('title', 'order', { reason: 'Buyer refund' });
// @ts-expect-error Actual provider capability is server-owned, not writable.
Microtransactions.updateProvider('title', 'stripe', { environment: 'sandbox', available: true });
// @ts-expect-error Private signing keys cannot be configured through the SDK.
Microtransactions.updateDeliverySettings('title', { environment: 'sandbox', private_key: 'forbidden' });
// @ts-expect-error Player receipt callers cannot assume financial relationships are included.
const allRefunds: number = detail.refunds.length;
Microtransactions.listMyPurchases('title', { environment: 'sandbox', page: 1, per_page: 20 }, { playerToken: 'test' });
// @ts-expect-error Runtime history cannot select another user.
Microtransactions.listMyPurchases('title', { user_id: 'other' });
// @ts-expect-error Final contract uses page-based pagination, never cursors.
Microtransactions.listMyPurchases('title', { cursor: 'old' });
// @ts-expect-error Durable/pass usage is not a boolean.
const guessedUsed: boolean = lot.is_used;
// @ts-expect-error Legacy snapshot display names can be null.
const assumedName: string = purchase.product.name;
`;
  const options = { noEmit: true, strict: true, skipLibCheck: true, target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS, esModuleInterop: true, moduleResolution: ts.ModuleResolutionKind.NodeJs };
  const host = ts.createCompilerHost(options);
  const originalGet = host.getSourceFile.bind(host);
  host.getSourceFile = (file, languageVersion, onError, shouldCreate) => file === filename ? ts.createSourceFile(file, source, languageVersion) : originalGet(file, languageVersion, onError, shouldCreate);
  const program = ts.createProgram([filename], options, host);
  const diagnostics = ts.getPreEmitDiagnostics(program).map(d => ts.flattenDiagnosticMessageText(d.messageText, '\n'));
  assert.deepEqual(diagnostics, []);
});
