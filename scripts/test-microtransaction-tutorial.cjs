const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const { JSDOM } = require('jsdom');

const guide = fs.readFileSync('guides/microtransactions.md', 'utf8');
assert(guide.includes('Minimum SDK for this guide: `3.15.0`'));
assert(guide.includes('approved local package'));
assert(guide.includes('3.10.8`, which lacks commerce'));
const example = guide.match(/```js\n([\s\S]*?)\n```/)?.[1];
assert(example, 'The beginner guide must contain the complete runnable example');
const compiled = ts.transpileModule(example, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
const flush = () => new Promise(resolve => setImmediate(resolve));

function tutorialFixture(failure = 'consume') {
  const dom = new JSDOM('<!doctype html><body><main id="game">Existing game</main></body>', { url: 'https://game.example.test' });
  const calls = { consume: [], history: [], inventory: [], session: [] };
  let overlayOptions; let nonce = 0; let failed = false;
  const timber = balance => [{ key: 'timber', kind: 'consumable', balance, environment: 'sandbox' }];
  const api = {
    createCheckoutSession: async (...args) => { calls.session.push(args); return { data: { data: { id: 'session-1', intent: 'purchase' } } }; },
    createRestoreSession: async (...args) => { calls.session.push(args); return { data: { data: { id: 'restore-1', intent: 'restore' } } }; },
    listMyPurchases: async (...args) => {
      calls.history.push(args);
      return { data: { data: { purchases: [{ id: 'legacy-order', product: { id: 'legacy-product', sku: null, name: null, type: null, version: null }, grant_usage: [{ key: 'timber', usage_status: 'partially_used', purchased_quantity: 100, granted_quantity: 100, consumed_quantity: 10, usable_quantity: 90 }] }], pagination: { page: 1, per_page: 20, total: 1, last_page: 1, has_more_pages: false } } } };
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
  vm.runInNewContext(compiled, { exports, require: name => { assert.equal(name, 'glitch-javascript-sdk'); return sdk; }, document: dom.window.document, window: dom.window, Date, Error });
  const game = exports.installTimberShop({ titleId: 'title-1', productId: 'timber-100', apiBaseUrl: 'https://api.example.test/api', checkoutOrigin: 'https://checkout.example.test' });
  return { dom, game, calls, get overlay() { return overlayOptions; },
    click: async label => { const button = [...dom.window.document.querySelectorAll('button')].find(b => b.textContent === label); assert(button, label); button.click(); await flush(); await flush(); },
    verify: (player = 'player-1') => overlayOptions.onVerified({ player_id: player, player_token: 'test-scoped-' + player, expires_at: new Date(Date.now() + 900000).toISOString(), entitlements: timber(100) }),
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
  f.overlay.onClose();
  await f.click('My purchases');
  assert.equal(f.calls.history[0][0], 'title-1');
  assert.deepEqual(JSON.parse(JSON.stringify(f.calls.history[0][1])), { environment: 'sandbox', page: 1, per_page: 20 });
  assert.equal(f.calls.history[0][2].playerToken, 'test-scoped-player-1');
  assert.match(f.dom.window.document.querySelector('pre').textContent, /Purchase legacy-order/);
  assert.equal(f.dom.window.document.getElementById('game').textContent, 'Existing game');
  f.dom.window.close();
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
    assert.equal(f.calls.consume[1][2].playerToken, 'test-scoped-player-1');
    assert.equal(f.dom.window.document.querySelector('output').textContent, 'Timber: 90');
    f.dom.window.close();
  });
}

test('purchase-history TypeScript contracts preserve nullable legacy snapshots and forbid identity/cursor selectors', () => {
  const filename = path.resolve('scripts/__virtual_commerce_history_types.ts');
  const source = `import Microtransactions, { MicrotransactionPlayerPurchase, MicrotransactionOrder, MicrotransactionGrantUsage, MicrotransactionMyPurchases } from '../src/api/Microtransactions';
declare const purchase: MicrotransactionPlayerPurchase;
declare const order: MicrotransactionOrder;
declare const lot: MicrotransactionGrantUsage;
declare const history: MicrotransactionMyPurchases;
const self: string = purchase.player_id;
const optionalOwner: string | undefined = order.player_id;
const grantId: string | null = lot.grant_id;
const oldProduct: MicrotransactionPlayerPurchase['product'] = { id: 'legacy', sku: null, name: null, type: null, version: null };
const total: number = history.pagination.total;
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
