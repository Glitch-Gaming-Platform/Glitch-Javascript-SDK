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
const Titles = require('../src/api/Titles.ts').default;
const Requests = require('../src/util/Requests.ts').default;

const title = 'title-1';
const base = `/titles/${title}/steam/financials`;

test('every Steam Financial API route uses the backend contract', async () => {
  const requests = [];
  Requests.setBaseUrl('https://api.example.test/api');
  Requests.setAuthToken('account-token');
  axios.defaults.adapter = async config => { requests.push(config); return { status: 200, statusText: 'OK', config, headers: {}, data: { data: {} } }; };

  const cases = [
    ['GET', base, () => Titles.steamFinancialsStatus(title)],
    ['PUT', `${base}/key`, () => Titles.steamFinancialsConnect(title, { api_key: 'k'.repeat(32) }), { api_key: 'k'.repeat(32) }],
    ['POST', `${base}/key/test`, () => Titles.steamFinancialsTestKey(title)],
    ['DELETE', `${base}/key`, () => Titles.steamFinancialsDisconnect(title, { purge_data: true })],
    ['POST', `${base}/sync`, () => Titles.steamFinancialsSync(title, { datasets: ['sales'], wait: true }), { datasets: ['sales'], wait: true }],
    ['GET', `${base}/reports`, () => Titles.steamFinancialsReports(title, { report_keys: 'summary', from: '2026-11-01' })],
    ['GET', `${base}/sales`, () => Titles.steamFinancialsSales(title, { country_code: 'US', page: 2 })],
    ['GET', `${base}/wishlists`, () => Titles.steamFinancialsWishlists(title, { dimension: 'country' })],
    ['GET', `${base}/lookups`, () => Titles.steamFinancialsLookups(title, { kind: 'package' })],
    ['GET', `${base}/live/changed-dates`, () => Titles.steamFinancialsLiveChangedDates(title, { highwatermark: '0' })],
    ['GET', `${base}/live/detailed-sales`, () => Titles.steamFinancialsLiveDetailedSales(title, { date: '2026/11/19' })],
    ['GET', `${base}/live/wishlist`, () => Titles.steamFinancialsLiveWishlist(title, { date: '2026-11-19' })],
  ];

  for (const [method, path, call, body] of cases) {
    requests.length = 0;
    await call();
    assert.equal(requests.length, 1, path);
    const config = requests[0];
    assert.equal(String(config.method).toUpperCase(), method, path);
    assert.ok(String(config.url).includes(path), `${config.url} should include ${path}`);
    if (body) {
      assert.deepEqual(typeof config.data === 'string' ? JSON.parse(config.data) : config.data, body);
    }
  }

  requests.length = 0;
  await Titles.steamFinancialsReports(title, { report_keys: 'summary' });
  const sent = requests[0];
  const query = sent.params || Object.fromEntries(new URL(sent.url, 'https://x.test').searchParams);
  assert.equal(query.report_keys, 'summary');
});
