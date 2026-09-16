const assert = require('node:assert/strict');
const sdk = require('../dist/cjs/index.js');
const fs = require('node:fs');
const path = require('node:path');
const { createHmac } = require('node:crypto');

const managementMethods = [
  'providers', 'updateProvider', 'refreshProvider', 'createProviderOnboarding',
  'getDeliverySettings', 'updateDeliverySettings', 'listOrders', 'getOrder', 'reconcileOrder',
  'listRefunds', 'getRefund', 'refundOrder', 'reconcileRefund', 'listDeliveries', 'replayDelivery',
  'acknowledgeDelivery', 'listPayouts', 'mcpCapabilities', 'mcpOperation',
];

assert.equal(typeof sdk, 'function', 'Legacy CommonJS export remains the Glitch class');
assert.equal(sdk.default, sdk, 'ESModule interop preserves the same Glitch API identity');
assert.equal(typeof sdk.api.Auth.loginWithEmail, 'function');
assert.equal(typeof sdk.api.Titles.list, 'function');
assert.equal(typeof sdk.api.Microtransactions.createRestoreSession, 'function');
assert.equal(typeof sdk.api.Microtransactions.listMyPurchases, 'function');
assert.equal(typeof sdk.api.Microtransactions.getCheckoutFramePolicy, 'function');
assert.equal(typeof sdk.openMicrotransactionOverlay, 'function');
assert.equal(typeof sdk.openMicrotransactionRestoreOverlay, 'function');
assert.equal(typeof sdk.createMicrotransactionBridge, 'function');
assert.equal(typeof sdk.createMicrotransactionNonce, 'function');
const types = fs.readFileSync(path.join(__dirname, '../dist/index.d.ts'), 'utf8');
for (const method of managementMethods) {
  assert.equal(typeof sdk.api.Microtransactions[method], 'function', `Built CommonJS commerce method ${method}`);
  assert(new RegExp(`static ${method}[<(]`).test(types), `Public declarations export ${method}`);
}
assert(fs.existsSync(path.join(__dirname, '../guides/commerce-delivery-receiver.mjs')), 'Packaged signed-delivery example exists');
import('../dist/esm/index.js').then(esm => {
  assert.equal(typeof esm.default.api.Auth.loginWithEmail, 'function');
  assert.equal(typeof esm.openMicrotransactionOverlay, 'function');
  for (const method of managementMethods) assert.equal(typeof esm.default.api.Microtransactions[method], 'function', `Built ESM commerce method ${method}`);
  for (const [titleId, secret] of [['test-title', 'test-only-shared-secret'], ['game.emoji-🛠️', 'test-only-unicode-密钥'], ['a'.repeat(1024), 'test-only-long-input']]) {
    const expected = createHmac('sha256', secret).update(titleId).digest('hex');
    assert.equal(sdk.util.Session.generateTrackingToken(titleId, secret), expected, 'CommonJS tracking-token bytes remain unchanged');
    assert.equal(esm.default.util.Session.generateTrackingToken(titleId, secret), expected, 'Native ESM tracking-token bytes equal CommonJS and Node HMAC-SHA256');
  }
  console.log('Built CommonJS legacy/default, ESM, declarations and direct-commerce API exports passed.');
}).catch(error => { console.error(error); process.exitCode = 1; });
