const fs = require('fs');
const assert = require('assert');

const routes = fs.readFileSync('src/routes/UserRoutes.ts', 'utf8');
const api = fs.readFileSync('src/api/Users.ts', 'utf8');

[
  '/users/me/email-delivery',
  '/users/me/email-delivery/restore',
].forEach((route) => assert(routes.includes(route), `Missing route: ${route}`));

[
  'emailDeliveryStatus',
  'restoreEmailDelivery',
].forEach((method) => assert(api.includes(`static ${method}`), `Missing API method: ${method}`));

[
  'EmailDeliveryStatus',
  'EmailDeliveryRecovery',
  'RestoreEmailDeliveryRequest',
].forEach((type) => assert(api.includes(`interface ${type}`), `Missing API type: ${type}`));

assert(api.includes('acknowledged: true'), 'Restore request must require explicit acknowledgement.');

console.log('User email-delivery SDK route tests passed.');
