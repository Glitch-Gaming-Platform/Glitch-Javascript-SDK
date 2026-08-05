const fs = require('fs');
const assert = require('assert');

const routes = fs.readFileSync('src/routes/GameShowsRoute.ts', 'utf8');
const api = fs.readFileSync('src/api/GameShows.ts', 'utf8');

[
  '/gameshows/{show_id}/schedule/{schedule_id}/ticket-types',
  '/gameshows/{show_id}/blocks/{block_id}/titles',
  '/gameshows/{show_id}/schedule/{schedule_id}/ticket-types/manage',
  '/gameshows/{show_id}/schedule/{schedule_id}/ticket-types/{ticket_type_id}',
  '/gameshows/{show_id}/schedule/{schedule_id}/ticket-purchases',
  '/gameshows/{show_id}/schedule/{schedule_id}/ticket-purchases/{purchase_id}/confirm',
  '/gameshows/{show_id}/schedule/{schedule_id}/ticket-purchases/{purchase_id}/receipt',
  '/gameshows/{show_id}/schedule/{schedule_id}/ticket-purchases/{purchase_id}/refund',
].forEach((route) => assert(routes.includes(route), `Missing route: ${route}`));

[
  'listBlockTitles', 'listScheduleTicketTypes', 'manageScheduleTicketTypes', 'createScheduleTicketType',
  'updateScheduleTicketType', 'deleteScheduleTicketType', 'purchaseScheduleTickets',
  'confirmScheduleTicketPurchase', 'getScheduleTicketReceipt',
  'listScheduleTicketPurchases', 'refundScheduleTicketPurchase',
].forEach((method) => assert(api.includes(`static ${method}<T>`), `Missing API method: ${method}`));

['GameShowScheduleTicketTypeInput', 'GameShowScheduleTicketPurchaseInput', 'GameShowScheduleTicketRefundInput']
  .forEach((type) => assert(api.includes(`interface ${type}`), `Missing SDK type: ${type}`));

console.log('Game show ticket SDK route tests passed.');
