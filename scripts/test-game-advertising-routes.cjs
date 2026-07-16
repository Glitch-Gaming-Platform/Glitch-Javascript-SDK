const fs = require('fs');
const assert = require('assert');

const routes = fs.readFileSync('src/routes/GameAdvertisingRoute.ts', 'utf8');
const api = fs.readFileSync('src/api/GameAdvertising.ts', 'utf8');

[
  '/titles/{title_id}/advertising/settings',
  '/titles/{title_id}/advertising/sessions',
  '/titles/{title_id}/advertising/sessions/{session_id}/events',
  '/titles/{title_id}/advertising/revenue-summary',
  '/titles/{title_id}/advertising/in-game/placements',
  '/admin/game-advertising',
  '/admin/game-advertising/settings',
  '/admin/game-advertising/revenue',
  '/admin/game-advertising/provider-apps',
].forEach((route) => assert(routes.includes(route), `Missing route: ${route}`));

['settings', 'updateSettings', 'createSession', 'storeEvent', 'revenueSummary', 'inGamePlacements', 'replaceInGamePlacements', 'adminDashboard', 'adminUpdateSettings', 'adminStoreRevenue', 'adminProviderApps', 'adminUpsertProviderApp']
  .forEach((method) => assert(api.includes(`static ${method}<T>`), `Missing API method: ${method}`));

assert(api.includes('GameInGameAdPlacement'), 'Missing in-game placement type');
assert(api.includes('GameAdProviderApp'), 'Missing provider app type');
assert(api.includes("'in_game_image'"), 'Missing intrinsic image event format');

console.log('Game advertising SDK route tests passed.');
