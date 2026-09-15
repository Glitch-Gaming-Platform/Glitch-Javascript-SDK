const assert = require('node:assert/strict');
const sdk = require('../dist/cjs/index.js');

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
console.log('Built CommonJS legacy/default/named exports and current commerce API passed.');
