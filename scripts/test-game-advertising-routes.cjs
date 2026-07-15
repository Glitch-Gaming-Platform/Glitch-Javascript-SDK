const fs = require('fs');
const assert = require('assert');

const routes = fs.readFileSync('src/routes/GameAdvertisingRoute.ts', 'utf8');
const api = fs.readFileSync('src/api/GameAdvertising.ts', 'utf8');

[
  '/titles/{title_id}/advertising/settings',
  '/titles/{title_id}/advertising/sessions',
  '/titles/{title_id}/advertising/sessions/{session_id}/events',
  '/titles/{title_id}/advertising/revenue-summary',
  '/admin/game-advertising',
  '/admin/game-advertising/settings',
  '/admin/game-advertising/revenue',
].forEach((route) => assert(routes.includes(route), `Missing route: ${route}`));

['settings', 'updateSettings', 'createSession', 'storeEvent', 'revenueSummary', 'adminDashboard', 'adminUpdateSettings', 'adminStoreRevenue']
  .forEach((method) => assert(api.includes(`static ${method}<T>`), `Missing API method: ${method}`));

console.log('Game advertising SDK route tests passed.');
