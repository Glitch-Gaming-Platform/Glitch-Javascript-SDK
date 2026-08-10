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
  '/titles/{title_id}/hosting/sites/{site_id}/services/estimate',
  '/titles/{title_id}/hosting/sites/{site_id}/services/apply',
  '/titles/{title_id}/hosting/sites/{site_id}/services/{service_id}/secrets/{name}',
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
  'services', 'estimateServices', 'applyServices', 'putServiceSecret', 'deleteServiceSecret',
].forEach((method) => assert(api.includes(`static ${method}<`) || api.includes(`static ${method}(`), `Missing Hosting API method: ${method}`));

['postgresql', 'mysql', 'azure_sql', 'cosmos_nosql', 'redis'].forEach((engine) => assert(api.includes(`'${engine}'`), `Missing managed database engine: ${engine}`));
['single_server', 'stateful_game_server', 'web_and_api', 'authoritative_world', 'large_realtime_world'].forEach((preset) => assert(api.includes(`'${preset}'`), `Missing service stack preset: ${preset}`));
assert(!api.includes('mongodb_atlas'), 'Marketplace databases must not be included');
assert(api.includes("'X-Glitch-Hosting-Gateway': gatewayToken"), 'Hosted origin resolution must support the private SSR gateway header');
assert(api.includes("'aws_marketplace'"), 'Hosting billing providers must include AWS Marketplace');
assert(api.includes('entry_point: string;'), 'Hosting releases must require a proven entry point');
assert(api.includes('checkout_client_secret?: string | null;'), 'Hosting database checkout must expose embedded Checkout safely');
assert(api.includes('incident_id?: string | null;'), 'Hosting domain failures must expose a safe support reference');
assert(index.includes('Hosting: Hosting'), 'Glitch.api.Hosting is not exported');

console.log('Hosting SDK route tests passed.');
