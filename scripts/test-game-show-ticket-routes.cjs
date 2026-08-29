const fs = require('fs');
const assert = require('assert');

const routes = fs.readFileSync('src/routes/GameShowsRoute.ts', 'utf8');
const api = fs.readFileSync('src/api/GameShows.ts', 'utf8');
const titleRoutes = fs.readFileSync('src/routes/TitlesRoute.ts', 'utf8');
const titleApi = fs.readFileSync('src/api/Titles.ts', 'utf8');

[
  '/gameshows/{show_id}/ticket-types',
  '/gameshows/{show_id}/ticket-types/manage',
  '/gameshows/{show_id}/ticket-types/{ticket_type_id}',
  '/gameshows/{show_id}/ticket-purchases',
  '/gameshows/{show_id}/ticket-purchases/{purchase_id}/confirm',
  '/gameshows/{show_id}/ticket-purchases/{purchase_id}/receipt',
  '/gameshows/{show_id}/ticket-purchases/{purchase_id}/refund',
  '/gameshows/{show_id}/schedule/{schedule_id}/ticket-types',
  '/gameshows/{show_id}/blocks/{block_id}/titles',
  '/gameshows/{show_id}/title-candidates',
  '/gameshows/{show_id}/schedule/{schedule_id}/ticket-types/manage',
  '/gameshows/{show_id}/schedule/{schedule_id}/ticket-types/{ticket_type_id}',
  '/gameshows/{show_id}/schedule/{schedule_id}/ticket-purchases',
  '/gameshows/{show_id}/schedule/{schedule_id}/ticket-purchases/{purchase_id}/confirm',
  '/gameshows/{show_id}/schedule/{schedule_id}/ticket-purchases/{purchase_id}/receipt',
  '/gameshows/{show_id}/schedule/{schedule_id}/ticket-purchases/{purchase_id}/refund',
].forEach((route) => assert(routes.includes(route), `Missing route: ${route}`));

[
  'listBlockTitles', 'searchTitleCandidates', 'listFestivalTicketTypes', 'manageFestivalTicketTypes', 'createFestivalTicketType',
  'updateFestivalTicketType', 'deleteFestivalTicketType', 'purchaseFestivalTickets',
  'confirmFestivalTicketPurchase', 'getFestivalTicketReceipt', 'listFestivalTicketPurchases', 'refundFestivalTicketPurchase',
  'listScheduleTicketTypes', 'manageScheduleTicketTypes', 'createScheduleTicketType',
  'updateScheduleTicketType', 'deleteScheduleTicketType', 'purchaseScheduleTickets',
  'confirmScheduleTicketPurchase', 'getScheduleTicketReceipt',
  'listScheduleTicketPurchases', 'refundScheduleTicketPurchase',
].forEach((method) => assert(api.includes(`static ${method}<T>`), `Missing API method: ${method}`));

['GameShowScheduleTicketTypeInput', 'GameShowFestivalTicketTypeInput', 'GameShowScheduleTicketPurchaseInput', 'GameShowScheduleTicketRefundInput', 'GameShowTitleCandidate', 'GameShowTitleCandidateSearchParams']
  .forEach((type) => assert(api.includes(`interface ${type}`), `Missing SDK type: ${type}`));

assert(titleRoutes.includes('/users/me/wishlists/lookup'), 'Missing batch wishlist lookup route');
assert(titleApi.includes('static lookupMyWishlists<T>'), 'Missing batch wishlist lookup method');

console.log('Game show ticket SDK route tests passed.');
