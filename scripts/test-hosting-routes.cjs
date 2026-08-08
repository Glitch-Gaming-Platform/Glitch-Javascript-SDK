const fs = require('fs');
const assert = require('assert');

const routes = fs.readFileSync('src/routes/HostingRoute.ts', 'utf8');
const api = fs.readFileSync('src/api/Hosting.ts', 'utf8');
const index = fs.readFileSync('src/index.ts', 'utf8');

[
  '/hosting/catalog',
  '/titles/{title_id}/hosting',
  '/titles/{title_id}/hosting/billing/checkout',
  '/titles/{title_id}/hosting/billing/confirm',
  '/hosting/marketplace/resolve',
  '/hosting/marketplace/subscriptions/{subscription_id}/activate',
  '/hosting/aws-marketplace/resolve',
  '/hosting/aws-marketplace/subscriptions/{subscription_id}/activate',
  '/titles/{title_id}/hosting/sites/{site_id}/upload-url',
  '/titles/{title_id}/hosting/sites/{site_id}/releases/{release_id}/promote',
  '/titles/{title_id}/hosting/sites/{site_id}/domains/purchase',
  '/titles/{title_id}/hosting/sites/{site_id}/databases',
  '/titles/{title_id}/hosting/sites/{site_id}/databases/{database_id}',
  '/titles/{title_id}/hosting/sites/{site_id}/databases/{database_id}/credentials',
  '/hosting/play-sessions',
].forEach((route) => assert(routes.includes(route), `Missing hosting route: ${route}`));

[
  'catalog', 'dashboard', 'channelAnalytics', 'billingCheckout', 'confirmBillingCheckout',
  'resolveMarketplacePurchase', 'activateMarketplaceSubscription', 'marketplaceSubscription', 'createSite', 'updateSite',
  'resolveAwsMarketplacePurchase', 'activateAwsMarketplaceSubscription', 'awsMarketplaceSubscription',
  'createUploadUrl', 'uploadBuild', 'releases', 'createRelease', 'promoteRelease',
  'connectDomain', 'verifyDomain', 'checkDomain', 'purchaseDomain', 'aiInstructions',
  'resolve', 'startPlaySession', 'heartbeatPlaySession', 'databases',
  'createDatabase', 'database', 'databaseCredentials', 'updateDatabase', 'retryDatabase', 'deleteDatabase',
].forEach((method) => assert(api.includes(`static ${method}<`) || api.includes(`static ${method}(`), `Missing Hosting API method: ${method}`));

['postgresql', 'mysql', 'azure_sql', 'cosmos_nosql'].forEach((engine) => assert(api.includes(`'${engine}'`), `Missing Azure database engine: ${engine}`));
assert(!api.includes('mongodb_atlas'), 'Marketplace databases must not be included');
assert(api.includes("'X-Glitch-Hosting-Gateway': gatewayToken"), 'Hosted origin resolution must support the private SSR gateway header');
assert(api.includes("'aws_marketplace'"), 'Hosting billing providers must include AWS Marketplace');
assert(index.includes('Hosting: Hosting'), 'Glitch.api.Hosting is not exported');

console.log('Hosting SDK route tests passed.');
