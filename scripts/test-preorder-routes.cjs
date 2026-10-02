const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const ts = require('typescript');

require.extensions['.ts'] = (module, filename) => {
  const result = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
    fileName: filename,
  });
  module._compile(result.outputText, filename);
};

const axios = require('axios');
const Preorders = require('../src/api/Preorders.ts').default;
const Routes = require('../src/routes/PreordersRoute.ts').default.routes;
const Requests = require('../src/util/Requests.ts').default;

const title = 'title-1';
const offer = 'offer-1';
const order = 'order-1';
const key = 'key-1';
const offerInput = {
  sku: 'steam-standard', platform_code: 'steam', platform_label: 'Steam', fulfillment_type: 'platform_key', status: 'draft',
  release_at: '2026-12-01T06:00:00Z', limit_total: 5000, max_per_user: 1, custom_message: 'Thanks',
  post_purchase_url: 'https://example.test/form', redeem_url: 'https://store.steampowered.com/account/registerkey',
  prices: [{ country: '*', currency: 'USD', amount_minor: 2999 }],
};

test('every preorder route executes with its exact transport contract', async () => {
  const requests = [];
  Requests.setBaseUrl('https://api.example.test/api');
  Requests.setAuthToken('account-token');
  axios.defaults.adapter = async config => { requests.push(config); return { status: 200, statusText: 'OK', config, headers: {}, data: { data: { accepted: true } } }; };
  const cases = [
    ['catalog', () => Preorders.catalog(title)],
    ['purchase', () => Preorders.purchase(title, offer, { idempotency_key: 'fixed-idempotency-key-1234', country: 'US', currency: 'USD', payment_method_id: 'pm_test' })],
    ['myOrders', () => Preorders.myOrders(title)], ['order', () => Preorders.order(title, order)],
    ['refundMine', () => Preorders.refundMine(title, order)], ['resendMine', () => Preorders.resendMine(title, order)],
    ['settings', () => Preorders.settings(title)], ['updateSettings', () => Preorders.updateSettings(title, { enabled: true, timezone: 'America/Chicago' })],
    ['offers', () => Preorders.offers(title)], ['createOffer', () => Preorders.createOffer(title, offerInput)],
    ['offer', () => Preorders.offer(title, offer)], ['updateOffer', () => Preorders.updateOffer(title, offer, offerInput)],
    ['activateOffer', () => Preorders.activateOffer(title, offer)], ['pauseOffer', () => Preorders.pauseOffer(title, offer)], ['archiveOffer', () => Preorders.archiveOffer(title, offer)],
    ['inventory', () => Preorders.inventory(title, offer)], ['importKeys', () => Preorders.importKeys(title, offer, ['AAAA-BBBB-CCCC'])],
    ['retireKey', () => Preorders.retireKey(title, offer, key, 'invalid upstream key')],
    ['adminOrders', () => Preorders.adminOrders(title, { offer_id: offer, payment_status: 'paid', per_page: 50 })],
    ['readiness', () => Preorders.readiness(title)], ['adminOrderAction', () => Preorders.adminOrderAction(title, order, 'fulfill')],
    ['mcpCapabilities', () => Preorders.mcpCapabilities(title)], ['mcpOperation', () => Preorders.mcpOperation(title, 'settings.get', {})],
  ];
  for (const [name, run] of cases) {
    const response = await run(); assert.equal(response.data.data.accepted, true);
    const request = requests.at(-1);
    const expected = Routes[name].url.replace('{title_id}', title).replace('{offer_id}', offer).replace('{order_id}', order).replace('{key_id}', key).replace('{action}', 'fulfill').replace('{operation}', 'settings.get');
    assert.equal(new URL(request.url).pathname, '/api' + expected, name);
    assert.equal(request.method.toUpperCase(), Routes[name].method, name); assert(!request.url.includes('undefined'), name);
  }
  await Preorders.importKeyFile(title, offer, new Blob(['KEY-ONE\\nKEY-TWO'], { type: 'text/plain' }));
  const upload = requests.at(-1);
  assert.equal(new URL(upload.url).pathname, '/api' + Routes.importKeys.url.replace('{title_id}', title).replace('{offer_id}', offer));
  assert.equal(upload.method.toUpperCase(), 'POST'); assert.equal(upload.headers.get('Authorization'), 'Bearer account-token');
  assert.equal(cases.length, Object.keys(Routes).length, 'All JSON preorder routes must have a runtime transport test');
  assert.deepEqual(JSON.parse(requests.find(r => r.url.endsWith('/keys/import') && typeof r.data === 'string').data).keys, ['AAAA-BBBB-CCCC']);
  assert.deepEqual(JSON.parse(requests.find(r => r.url.endsWith('/operations/settings.get')).data), { arguments: {} });
});
