# Game microtransactions

**Player checkout/history minimum: SDK `3.15.0`, which is published.** The new
administrative direct-management API below is a **major SDK `4.0.0` migration**.
Registry verification on September 16, 2026 confirmed SDK `3.15.0`, SDK `4.0.0`
and MCP `0.5.0` published. SDK4 is not required just for the guest player flow.
SDK `4.0.1` includes the additive readiness and tax-collection types, checkout
overlay retry/layout fixes, and tutorial corrections below. Release validation
is local; no hosted backend deployment was performed for this update.
Server-side MCP catalog/provider
setup does not require installing or publishing the game SDK, so do not block
authorized server configuration while runtime package work is pending.

The SDK entry point is `Glitch.api.Microtransactions`. All HTTP methods return an
Axios response whose `response.data.data` contains the typed commerce result.
Configure the ordinary API base once using the existing Glitch configuration.
Never put administrative/developer credentials, MCP tokens or provider secrets
into a shipped browser game. Existing supported **install-purpose runtime tokens**
are a separate capability: use them only for their documented install, validation,
heartbeat and telemetry endpoints. They do not authenticate commerce or prove paid
ownership, and must not be injected into the guest commerce context.

## Guest authentication and supported test origins

A fresh SDK context has no default auth token. Setting only the API base URL does
not log in, read credentials from storage, or add a Bearer token. However,
`Config.setAuthToken` and `Requests.setAuthToken` configure shared global auth:
`Requests.processRoute` automatically includes that Authorization header, including
on `catalog`, `createCheckoutSession` and `createRestoreSession`. A per-request
`{playerToken}` overrides it; `{checkoutToken}` adds only `X-Checkout-Token` and
does NOT suppress global auth. The published 3.15.0 also appends a selected global
`community_id` query on these routes (not a body field); 4.0.0 excludes community
context for commerce. Neither commerce implementation mutates global auth/context.

Keep guest commerce in its own credential-free SDK context. Do not initialize it
with an admin JWT, MCP credential or shared Axios Authorization default/interceptor.
This does not require removing an unrelated allowed install-purpose token from
the game's existing install/validation/heartbeat flow or changing global SDK auth.
Preserve that supported integration; do not reuse its token as commerce auth or
temporarily clear/replace another context's global auth to make a guest request.
Keep the owning account JWT inside Glitch's hosted account page, and use
the verified short-lived player token only in per-request player options. Adding
an admin JWT to a guest request is not a fix for a hosted sandbox 401.

The local backend guest-entry change applies only to `catalog`, `checkout-sessions`
and `restore-sessions`: use the exact configured browser **gameOrigin**, and for
session creation set `return_origin` equal to it. Hosted testing requires approved
**HTTPS** game/API/checkout endpoints. Sandbox catalog/checkout require enabled
sandbox title settings; sandbox is a payment environment, not a relaxed Origin
policy. Historical restore entry may remain available with commerce off, but
the hosted owning-account bind still controls access. Quote/pay/inventory/finance
do not become anonymous. This contract must be verified on the target backend;
an SDK transport test alone does not establish that the server fix is deployed.

HTTP loopback is only for an explicitly configured **local/testing backend** and
its approved local game/checkout origins. `allowLocalDevelopment:true` relaxes a
client helper check only; it cannot authorize localhost against hosted services.
Published helpers also recognize some development hostnames; that does not make
those hostnames supported by a hosted backend. Browsers supply `Origin`; never
spoof it in game code. Use `window.location.origin`, not the full page URL.

An origin is scheme + host + port. Paths are NOT an origin boundary: games at
`https://shared.example/games/a` and `/games/b` have the same origin. Shared S3 or
CDN hostnames with per-game paths cannot isolate tenants via an origin allowlist.
Use an independently approved per-game hostname/origin; do not expand an allowlist
or silently substitute a path to make testing pass.

## Configuration readiness versus verified integration

`ready` and optional `configuration_ready` describe configuration only. Optional
`readiness.integration_verified` means stored sandbox **paid + fulfilled + claimed**
evidence. Older responses may omit the new field: absence means unknown, not true
and not false. `settings.integration_verified` already exists separately. Neither
a configuration save, a ready flag, nor an iframe-ready event proves a new payment,
current inventory delivery or successful claim. Integration evidence is not browser
3DS certification; record challenge success/cancel/failure separately. Do not call
`verifyIntegration` or perform a test purchase without authorization.

MCP tool discovery is not credential scope. A visible tool can still return 403
for a missing title ability; that is separate from a guest-entry 401. Preserve the
status/code and check the effective connection's credential abilities. Do not change
global connector credentials or broaden permissions as a runtime workaround.

## Developer setup

1. Read `settings`, `readiness`, `providers` and `listProducts` with a signed-in
   title administrator or scoped MCP caller. Use sandbox for development. Authorized
   commerce operations execute directly; no custom confirmation/human-review gate.
   The **Enable in-game purchases** and **Show ads** switches live only on the
   game's Pricing/monetization page. Microtransactions is for products, media,
   prices, orders and integration—not a second location for those switches.
2. `uploadMedia(titleId, file, onProgress?)` reuses existing Glitch Media with
   trusted title/actor ownership. Attach returned `id` to `media_ids` or
   `branding.logo_media_id`. No scheduler or social-library post is created.
3. Create a product draft using `createProduct`. Prices use integer minor units,
   not floating-point money: USD 499 means $4.99; JPY 499 means ¥499. Supported
   currencies are USD/EUR/GBP/CAD/AUD/JPY/BRL/INR/KRW; provider coverage can be
   narrower. Each price is 1–100000 minor units, with country `US` or `*` fallback.
   Provider-specific purchase minima are checked separately (sandbox USD: 50).
4. Product types are durable, consumable, currency, bundle or pass. Grants have
   a stable key, quantity and kind. Durable quantity is one. Pass requires
   `duration_seconds` between 60 and 31536000, with no active stacking. Existing
   purchased grants cannot be changed in place: create a new SKU. No recurring
   subscriptions, gifts, paid random loot, cash-out or cross-game wallet support.
5. Configure the exact game origin, regions/currencies, support contact and
   game name/accent/logo with `updateSettings`. The fixed commission is 1200bp
   (12%) of discounted pre-tax subtotal. Actual provider costs are separate.
   Taxes are separate; pending earnings are not a verified available payout.
6. Run a real approved provider sandbox purchase, verify game delivery/claim,
   then call `verifyIntegration(titleId, {order_id})`. This records
   real evidence, not a self-certified integration checkbox. Actual external
   provider/account/tax capability and global sales emergency controls still apply.

## SDK4.0 administrative migration

### SDK 4.0.1 additive follow-up

This follow-up adds optional `configuration_ready` and `integration_verified`
readiness fields; it does not change routes, auth precedence or required player
request fields. Existing typed DTO literals and older servers remain valid.
Callers must handle an absent integration flag as unknown. The copyable starter
now additionally requires `gameOrigin` and `timberGrantKey` (example function
parameters, not new SDK/API parameters). These additions follow the SDK `4.0.0`
baseline; local tests do not establish hosted backend deployment.

Published SDK3.15.0 CJS and its explicit CommonJS/bundler-interoperable ESM path
support the guest/account payloads. Its raw native ESM entry contains a legacy
`require('crypto-js')` during initialization, so it is not a standalone browser
script-module guarantee. SDK4 CJS and native ESM pass the runtime tests. This
packaging distinction is separate from backend 401 and does not require an
already-working SDK3.15 game to upgrade just for player checkout.

Local verification (no backend/provider calls):

```sh
npm test
npx tsc --noEmit
npm run build
npm run build-docs
npm run test:package
npm run test:commerce-compat -- --published
```

The last command fetches only public npm registry tarballs into memory, verifies
the pinned SHA-512 values in `scripts/fixtures/published-commerce.json`, and runs
their unmodified CJS/ESM bundles with an in-memory browser HTTP transport. It also
records the SDK3.15 raw-ESM caveat separately rather than hiding it with a shim.
It asserts exact guest bodies/query, no default auth, legacy community injection,
hosted account-bind and scoped credentials, and old/new readiness response
pass-through. It does not prove deployed backend authorization, catalog availability,
payment, fulfillment, claim execution or browser 3DS. Ordinary package tests run
the local-build part offline. The normal build/build-docs pipeline generates
artifacts; never hand-edit `dist` or generated API docs.

Player checkout, restore, inventory and self-history routes remain compatible with
SDK3.15. The administrative changes are deliberately major:

- `refundOrder(titleId,orderId,{reason,amount_minor?,idempotency_key},options?)`
  now requires a stable caller key. The SDK never generates it. Legacy `confirm`
  is optional/ignored, not authorization. Keep one refund intent outside retries;
  same key + changed payload conflicts, and unknown outcomes stay pinned.
- `providers(titleId,{environment}?,options?)` returns factual `configured` and
  `available` values instead of an `approved` badge. `account` is the platform
  processor; `payout_account` is the game's target and must be evaluated separately.
  The older second-argument request-options overload remains compatible.
- `listProducts(titleId,{page,per_page,status,sku}?,options?)` now discovers the
  complete catalog. `sku` matches exactly; status is draft/active/archived. Product
  pages default to 200 records (1–200), unlike financial/history lists below.
  Follow `pagination.has_more_pages`; absence on page one is not proof a SKU is
  unused. Query the exact SKU after an uncertain create before retrying it.
  The no-filter call and older request-options overload remain compatible.
- `updateProvider`, `refreshProvider` and `createProviderOnboarding` manage routes
  and owned Stripe onboarding. Onboarding also requires a stable key and returns
  `onboarding_url` for the same owned account on retry, not an arbitrary payee ID.
- `getDeliverySettings`/`updateDeliverySettings` expose enabled/URL and only public
  verification material. Private signing keys remain server-side. Actual DNS/IP,
  HTTPS and provider requirements are validated without an approval workflow.
  Legacy `updateSettings.webhook_url` additionally requires commerce:fulfill as
  well as commerce:write; prefer the dedicated delivery-settings methods.
- `listOrders`, `listRefunds`, `listDeliveries` and `listPayouts` use page1–10000,
  per_page1–100(default25) and return arrays plus pagination. Get IDs from discovery.
  `getOrder` retains the player receipt path; management relationships are optional
  and can be finance-redacted. Omitted fields do not prove no records exist.
- `reconcileOrder`, `getRefund` and `reconcileRefund` inspect/recover the original
  provider operations. A linked refund request or pending/unknown execution is not
  a completed refund. Keep `execution_refund_id`, `execution_status` and actual
  `order_refunded_minor` distinct. Transfers are not automatically bank-paid payouts.
- All commerce calls omit unrelated global community context without mutating the
  stored community/auth state. Other SDK features retain their own context behavior.

Example stable refund intent (authorized commerce:finance only):

```ts
const refundIntent = {
  reason: 'Customer refund', amount_minor: 199,
  idempotency_key: crypto.randomUUID(), // ONCE for this intent, outside retries.
};
async function submitOrRetryRefund() {
  return Glitch.api.Microtransactions.refundOrder(titleId, orderId, refundIntent);
}
// If response is unknown/lost, keep refundIntent. Inspect/reconcile its original
// operation instead of making another key or blindly starting another refund.
```

Provider configuration reuses existing platform credentials; never send platform
Stripe/Xsolla API keys or MCP credentials as settings. A new owned title/environment
Xsolla `webhook_secret` is write-only(16–512 chars) under finance scope, encrypted
server-side and never returned/audited. Existing platform/historical bindings cannot
be overwritten. Keep this out of runtime game code, logs and raw JSON editors.
Missing external setup returns factual reasons; saving configuration is not proof
that a provider can accept payments. Global sales-off may block new purchases while
authorized configuration and historical refunds remain available.

### Signed server-delivery receiver

[The complete Node24+ receiver example](commerce-delivery-receiver.mjs) verifies
the exact raw body before parsing and durably queues event IDs without applying
embedded inventory. Pin `title_id`, environment, `key_id` and the base64 raw32-byte
`verification_public_key` from authenticated delivery settings, never from a message.
Require algorithm `ed25519`, `X-Glitch-Key-Id`, UNIX-second `X-Glitch-Timestamp`
within300 seconds, and `X-Glitch-Event-Id === body.id`. `X-Glitch-Signature` is base64
raw64 bytes over timestamp + `.` + exact raw JSON bytes. ACK2xx `{event_id}` only
after durable handling/commit. Duplicate IDs stay deduped across restarts.

Do not increment inventory or replace aggregate balances from webhook snapshots:
cross-order notifications can arrive out of order. An authorized game/player
refreshes current `listEntitlements`, or a real server adapter uses monotonic
inventory revisions. Legacy HMAC delivery is a separate configured algorithm;
leave its original secrets unchanged and reject message-selected algorithm/key
downgrades. The example needs Node24 only; it does not change the core SDK/MCP
runtime requirement or replace actual payment/browser3DS verification.

Product limits: SKU/grant key 1–100 alphanumeric/underscore/dot/hyphen characters;
name 255 characters; description 4000; 10 distinct Media UUIDs; 50 prices; 30
distinct grants; 30 localizations. Settings allow 20 exact origins (255 chars
each), 100 countries and 20 supported currencies. Branding name maximum 100.
Server capability schemas remain authoritative.

Required product fields are **SKU\***, **Name\***, **Type\***, **Prices\*** and
**Grants\***; each price needs currency, country and integer minor-unit amount,
and each grant needs key, quantity and kind. A pass also needs duration in seconds.
For a pack of **100 Timber** spent building things, use that title's actual
consumable grant key. Keys are title-scoped, not globally reserved: another game
may already use `timber` as consumable and should pass that exact key. The starter
requires an explicit key using the existing 1–100 character grammar above;
namespacing is optional. Validate its canonical grant kind from the title's catalog
and server-verified inventory, never from the display name. Preserve the per-title
key/kind invariant and all old grants/orders; never convert durable ownership.

**WOTW-specific migration proposal:** WOTW (title ID prefix `ad467`, abbreviated)
already has durable `timber`. That title needs a coordinated new consumable key
and game-resource mapping; a new SKU alone cannot retype its existing key.
`wotw.resource.timber` is one possible new key, not an existing catalog fact or a
global naming rule. This proposal does not create/publish products or prices or
authorize a catalog mutation. It does not restrict other titles' consumable keys.

## Hosted checkout and account creation

`createCheckoutSession(titleId, {product_id,quantity,country,currency,environment,
channel:'web',return_origin,nonce})` supports guest entry and only opens the purchase
flow. Use `createMicrotransactionNonce()` to generate the nonce and retain it in
the game. `hosted_url` points to Glitch's game-branded checkout with the session
secret in a `#token` fragment, never a query parameter.

Use `openMicrotransactionOverlay` to mount an accessible modal iframe inside the
running game, even if the game is itself embedded. The game document, URL,
session, canvas and state remain intact. Do not navigate the game away for checkout
or provide a top-level fallback. The iframe permits payments and controlled
bank/OAuth verification windows but has no top-navigation sandbox permission.
When embedding or required verification is unavailable, offer retry/close while
preserving the game. Retry reloads only the same session, not a new charge.

The overlay bounds each document-loading and application-ready wait to 20 seconds
by default (`frameLoadTimeoutMs`, clamped to 1–60 seconds). A missing iframe load
or error event cannot leave the player indefinitely at Loading. Timeout displays
explicit Retry/Close guidance without initiating payment or navigating the game.
A document `load` only starts the bounded application-ready wait; it is not proof
that checkout rendered. The hosted page sends
`{type:'glitch.microtransaction.ready',version:1,title_id,checkout_session_id,nonce}`
only after its valid-session account/checkout UI is usable. Exact origin/source/
session/nonce checks protect this signal, and it never grants inventory. Retry
resets timers; verified readiness and close clear them.

Retry first commits `about:blank` inside the existing iframe, then restores the
exact original hosted URL after that blank document loads. This avoids a
fragment-only navigation after checkout removes `#token` from its visible URL.
The iframe and its WindowProxy stay the same, so the existing exact
origin/source/title/session/nonce bridge remains pinned. No query parameter,
new checkout session or payment is created. Repeated Retry clicks during this
navigation are coalesced; each phase has a bounded watchdog, and Close still
cleans up while navigation or a verified claim is pending.

The read-only `getCheckoutFramePolicy(titleId,sessionId)` returns only approved
`frame_ancestors` and expiry; the hosted document uses that server-owned policy.
It does not expose a checkout token or player data.

Inside Glitch, the page uses existing sign-in/registration/OAuth and binds the
checkout session once to that user. Session methods require
`{checkoutToken: sessionSecret}` as their last options argument. The existing
signed-in account JWT stays inside Glitch, not the game. The SDK sends the limited
session secret only in `X-Checkout-Token` and never temporarily changes global auth.

`checkout(titleId, sessionId, {idempotency_key,accept_terms:true}, options)` returns
an order, quote, provider and UI mode. Stripe uses `ui_mode:'embedded'`, a limited
`client_secret` and public `publishable_key`; mount Stripe Embedded Checkout
inside the branded page, never build custom raw card fields. Approved Xsolla
routes use `ui_mode:'xsolla'` and its official Pay Station flow. Disclose payment
methods that need external authentication.

Stripe 3DS is part of checkout. Exercise challenge success, cancel/failure,
timeout and reload in the real sandbox. Keep the same order/session/idempotency
key through authentication. `action_required`, provider authorization, redirect,
and client completion are not paid/delivered proof. Call
`reconcileCheckoutSession(titleId, sessionId, options)` to query the original
attempt; never charge another provider after an uncertain submission.

## Verified game/account handoff

After verified payment and fulfillment, `createHandoff` returns an event with
`type:'glitch.microtransaction.updated'`, `version:1`, `title_id`,
`checkout_session_id`, `order_id`, `nonce`, and a one-time `claim_code` valid for
two minutes. The hosted page targets the exact approved game origin. It never
posts the account JWT or a player token.

The SDK does the secure return work for you: it checks the actual checkout iframe,
origin, title, session and nonce, exchanges the one-time claim with Glitch, and
then calls **your `onVerified` function with the server-verified result**. This is
where your game connects the player account and displays the purchased inventory.
You do not need to write your own `message` listener or grant items from a browser
event. Closing checkout without a successful claim does not call this a purchase.

### Minimal working Timber shop

Copy this JavaScript module into your game's browser bundle. Call
`installTimberShop` with the title/product IDs, exact approved `gameOrigin`,
API/checkout origins and actual consumable `timberGrantKey` from that title's catalog.
Use approved HTTPS origins for hosted sandbox testing. HTTP loopback with
`allowLocalDevelopment:true` additionally requires a local/testing backend.
The example creates its own small UI, so no undefined HTML elements or game helper
functions are required. It never takes the player away from the game.

```js
import Glitch, {
  createMicrotransactionNonce,
  openMicrotransactionOverlay,
  openMicrotransactionRestoreOverlay,
} from 'glitch-javascript-sdk';

export function installTimberShop({ titleId, productId, apiBaseUrl, checkoutOrigin, gameOrigin, timberGrantKey,
  environment = 'sandbox', allowLocalDevelopment = false }) {
  if (new URL(gameOrigin).origin !== gameOrigin || window.location.origin !== gameOrigin) {
    throw new Error('Open the game on its exact approved gameOrigin; a path is not an origin.');
  }
  if (typeof timberGrantKey !== 'string' || timberGrantKey.length < 1 || timberGrantKey.length > 100
      || /[^A-Za-z0-9_.-]/.test(timberGrantKey)) {
    throw new Error('Supply an explicit grant key: 1–100 letters, numbers, underscores, dots or hyphens.');
  }
  // This game bundle must not configure global account/admin/MCP auth.
  Glitch.util.Requests.setBaseUrl(apiBaseUrl); // Set API location, NOT global auth.
  const api = Glitch.api.Microtransactions;
  const game = { playerId: null, inventory: [], paused: false };
  let playerToken = '', tokenExpiresAt = 0, overlay = null;
  let opening = false, spending = false, pendingUse = null;
  const shop = document.createElement('section');
  const status = document.createElement('p'); status.setAttribute('role', 'status');
  const timber = document.createElement('output');
  const history = document.createElement('pre');
  shop.append(timber, status, history); document.body.append(shop);
  const say = text => { status.textContent = text; };

  function replaceInventoryInYourGame(entitlements) {
    const resource = entitlements.find(x => x.key === timberGrantKey);
    if (resource && resource.kind !== 'consumable') throw new Error('Timber grant kind mismatch.');
    game.inventory = entitlements; // REPLACE the snapshot. Never add 100 here.
    timber.textContent = 'Timber: ' + (resource?.balance ?? 0);
  }
  function setGamePaused(paused) { game.paused = paused; }
  function onVerified(result) {
    replaceInventoryInYourGame(result.entitlements); // Validate canonical kind before accepting this account.
    game.playerId = result.player_id; // Associate the game's profile with this player.
    playerToken = result.player_token; // Memory only; never a URL or global auth token.
    tokenExpiresAt = Date.parse(result.expires_at);
    say('Account connected. Your current inventory is ready.');
  }
  function playerOptions() {
    if (!playerToken || Date.now() >= tokenExpiresAt) {
      throw new Error('Player authentication is required; restore needs an active purchase.');
    }
    return { playerToken }; // Per-request token; never choose a user_id.
  }
  function showError(error) {
    const code = error?.response?.data?.code ?? error?.code ?? error?.response?.data?.message;
    const noRestore = code === 'no_purchases_to_restore'
      || error?.response?.data?.message === 'No active purchases to restore for this game/account/environment.';
    say(noRestore
      ? 'No active purchases to restore. Refunded receipt history still belongs to this account, but no new game token or items can be granted here.'
      : 'Not completed. Retry the same action. If sign-in expired, authenticate again; restore requires an active purchase.');
  }
  async function openShop(restore) {
    if (opening || overlay) return;
    opening = true;
    try {
      const context = { return_origin: gameOrigin,
        nonce: createMicrotransactionNonce(), environment };
      const response = restore
        ? await api.createRestoreSession(titleId, context)
        : await api.createCheckoutSession(titleId, { ...context, product_id: productId,
          quantity: 1, country: 'US', currency: 'USD', channel: 'web' });
      const open = restore ? openMicrotransactionRestoreOverlay : openMicrotransactionOverlay;
      overlay = open({ titleId, checkoutOrigin, session: response.data.data,
        allowLocalDevelopment, onVerified,
        onOpen: () => setGamePaused(true),
        onClose: () => { overlay = null; setGamePaused(false); },
        onOrderUpdate: order => say(order ? 'Receipt: ' + order.payment_status : 'No completed receipt yet.'),
        onError: showError });
    } finally { opening = false; }
  }
  async function showMyPurchases(page = 1) {
    const response = await api.listMyPurchases(titleId,
      { environment, page, per_page: 20 }, playerOptions());
    const data = response.data.data;
    history.textContent = data.purchases.map(purchase => {
      const name = purchase.product.name ?? purchase.product.sku ?? ('Purchase ' + purchase.id);
      return name + '\n' + purchase.grant_usage.map(row => row.key + ': ' + row.usage_status
        + '; promised ' + row.purchased_quantity + ', granted ' + row.granted_quantity
        + ', consumed ' + row.consumed_quantity + ', usable ' + row.usable_quantity).join('\n');
    }).join('\n\n') || 'No captured purchases yet.';
    say('History page ' + data.pagination.page + ' of ' + data.pagination.last_page);
  }
  async function useTenTimber() {
    if (spending || game.paused) return;
    const options = playerOptions();
    const resource = game.inventory.find(x => x.key === timberGrantKey);
    if (!resource || resource.kind !== 'consumable') throw new Error('A verified consumable grant is required.');
    if (pendingUse && pendingUse.playerId !== game.playerId) {
      throw new Error('Restore the original account before retrying its pending action.');
    }
    // Create ONCE for this gameplay intent. A failed retry keeps this same object.
    pendingUse ??= { playerId: game.playerId, action_id: createMicrotransactionNonce(),
      key: timberGrantKey, quantity: 10 };
    spending = true;
    try {
      await api.consume(titleId, { key: pendingUse.key, quantity: pendingUse.quantity,
        action_id: pendingUse.action_id, environment }, options);
      const current = await api.listEntitlements(titleId, { environment }, options);
      replaceInventoryInYourGame(current.data.data.entitlements);
      pendingUse = null; // Clear only after successful acknowledgement AND refresh.
      say('10 Timber spent once. Inventory refreshed from Glitch.');
    } finally { spending = false; } // Do not clear pendingUse on failure.
  }
  function button(label, action) {
    const element = document.createElement('button');
    element.type = 'button'; element.textContent = label;
    element.onclick = () => void action().catch(showError);
    shop.append(element);
  }
  replaceInventoryInYourGame([]);
  button('Buy 100 Timber', () => openShop(false));
  button('Restore purchases', () => openShop(true));
  button('My purchases', () => showMyPurchases());
  button('Use 10 Timber', useTenTimber); // Explicit gameplay action, NOT a purchase callback.
  return game;
}
```

Call `installTimberShop({titleId: YOUR_TITLE_ID, productId: YOUR_TIMBER_PRODUCT_ID,
apiBaseUrl: YOUR_API_BASE, checkoutOrigin: YOUR_CHECKOUT_ORIGIN,
gameOrigin: YOUR_APPROVED_GAME_ORIGIN, timberGrantKey: YOUR_CONSUMABLE_GRANT_KEY})`
from your existing game initialization. These names describe your configuration;
replace them with the actual values, not credentials. `environment` is optional
and defaults to sandbox. The example assumes an eligible US/USD price; choose a
server-supported country/currency for your real player instead of guessing from IP.
Pass `timberGrantKey:'timber'` when that title's canonical `timber` is consumable.
The starter checks the returned entitlement kind before accepting an account or
spending; backend validation remains authoritative. It never changes a grant kind.

**`replaceInventoryInYourGame` and `setGamePaused` are example game functions, not
SDK APIs.** Their working demo bodies update the displayed Timber and `game`
object. In your game, replace those bodies with your engine's inventory assignment
and pause/input/audio controls. Do not replace assignment with `+= productQuantity`:
callbacks, restores and refreshes can occur more than once. The callback must never
call `consume`; that state-changing API belongs to an explicit gameplay action.

The sample retains `pendingUse` across failed button retries. For reload recovery,
persist the nonsecret action intent and its account binding in your game's durable
command queue, then retry the same action ID after sign-in. Never save the player
token with it, invent a new ID for an uncertain retry, or infer a particular action's
success from aggregate purchase-history totals. Coordinate actual building creation
idempotently with that same gameplay action; the demo only spends the resource.

The verified result is the actual claim DTO. The helper validates matching
title/session/order and, on refresh, the same player. It ignores duplicate codes
even after a network timeout because the server may already have consumed them.
It does not grant items from window data or continuously poll. A close message
uses `{type:'glitch.microtransaction.close',version:1,title_id,
checkout_session_id,nonce}` and must match the same exact origin/source/session.
The dialog remains mounted until an in-flight claim and inventory callback finish.
Close before a successful claim can refresh limited receipt status only; show
pending/restore guidance, never claim that a checkout capability grants inventory.

`player_token` lasts 15 minutes and is restricted to one title/player/environment.
Keep it in memory and pass `{playerToken}` per request to `getOrder`,
`listEntitlements` and `consume`. Never install it in global `Glitch.util.Session`
or `Requests.setAuthToken`, log it, or put it in URLs. The SDK's per-request
headers prevent simultaneous account/checkout requests from overwriting auth.

### Inventory, purchase history and usage are different

Use `listEntitlements` to replace the current player inventory. Use the optional
`listMyPurchases(titleId, {environment,page,per_page}, {playerToken})` to show the
signed-in player's captured purchases and their lot-level usage; it does not grant
items or let a game pick another `user_id` or `player_id`. A normal user JWT selects
its own user; a `gl_player` token selects its bound title/player/environment and
requires the exact approved Origin. MCP and install tokens cannot use this route.
Admin `listOrders` remains a separate developer reporting API.

Read `response.data.data`:

- `title_id`, `player_id`, `environment`, `purchases`, and
  `pagination:{page,per_page,total,last_page,has_more_pages}`.
- `page` defaults to 1 (1–10000), `per_page` to 20 (1–100). Results are ordered by
  `created_at DESC, id DESC`. Pass the next page number when `has_more_pages` is true.
  No cursor or product filter exists. The HTTP API rejects unknown selectors with 422;
  the SDK rejects invalid filter names/ranges before transport.
- Each purchase includes the immutable product snapshot, payment/fulfillment state,
  `grant_usage`, `has_consumed_grants`, and `has_usable_grants`. Captured purchases
  remain visible after refund, dispute or quarantine; unpaid attempts are excluded.
  Historical snapshots may have null product `sku`, `name`, `type`, or `version`;
  show a receipt-ID fallback rather than inventing a current catalog value.
- Each grant usage row has `grant_id` (nullable), `key`, `kind`,
  `purchased_quantity`, `granted_quantity`, `acquired_quantity`, `remaining_quantity`,
  `consumed_quantity`, `revoked_quantity`, `refunded_quantity`,
  `unrecoverable_quantity`, `expires_at`, `expired`, `usable_quantity`, `is_used`,
  and `usage_status`.

`purchased_quantity` is what the frozen product promised (grant quantity × order
quantity). `granted_quantity` and its alias `acquired_quantity` are what was actually
granted. Without a lot, `grant_id` is null and actual granted/remaining/consumed
quantities are zero even though promised quantity can be positive. Do not grant
missing items just because purchase history lists the promised amount.

For consumables, `consumed_quantity = acquired_quantity - remaining_quantity -
revoked_quantity`. Refunded quantity is bounded `revoked_quantity +
unrecoverable_quantity`; **unrecoverable overlaps consumed**, so never subtract it
twice. Refund recovery is not gameplay use. Durable/pass `is_used` is **null** because
ownership does not prove gameplay usage; inspect `usable_quantity` and `expired`
instead. Statuses are `unused`, `partially_used`, `used_up`, `owned`, `expired`,
`revoked`, `not_delivered`, or `unavailable`. Use the server's fields, not a locally
invented “used” checkbox or a raw remaining count that ignores expiry/restrictions.

After expiry/reload or a lost claim response, call the anonymous-safe
`createRestoreSession(titleId,{return_origin,nonce,environment})` and pass its
returned `intent:'restore'` session to `openMicrotransactionRestoreOverlay` with
the same hooks shown above. The account signs in inside the modal, then Glitch
selects an owned paid purchase and sends its verified handoff. No original receipt
ID or account JWT is required from the game, and restore never calls `/checkout`.
The new session ID is known before authentication and remains strictly pinned.
Restoring cannot duplicate ownership or recreate spent consumables; fully refunded,
unpaid or failed purchases cannot issue a paid handoff.

Restore can issue a new game token only when this account still has an eligible
active purchase. An account with only fully refunded items may receive
`no_purchases_to_restore`; the hosted sign-in/restore UI or the example's error
handler should explain that clearly. An expired scoped token still requires
authentication. The owner JWT in a Glitch-authenticated context can read all
captured history, and an existing valid scoped token can read the same history,
but this example does not promise a new game token after every refund/expiry.
Do not bypass that boundary, expose the account JWT to the game, repurchase just
to obtain history access, or invent a read-only-authentication endpoint.

Lower-level `createMicrotransactionBridge` remains available for existing in-game
iframe implementations; pass the actual iframe's `contentWindow`. Its `refresh()`
works only after a successful claim. The older JWT-only `restoreHandoff` and
receipt-pinned `createMicrotransactionRestoreBridge` are specialized trusted
hosted-account flows, not the default anonymous-game recovery path.

## Gameplay, refunds and failures

- Use server entitlements, not mutable cloud saves. `consume` atomically spends
  consumable units with a unique gameplay `action_id`; reuse that ID for retries.
  Free local gameplay cannot mint paid balances. Pass expiry is server-authoritative.
- Keep payment, fulfillment and settlement independent. Paid can coexist with
  pending server delivery. Replaying delivery reuses immutable IDs and never
  grants twice. Provider and game messages are at-least-once delivery.
- Earnings `transferred_minor` means money transferred to a provider balance,
  not a confirmed bank deposit. Preserve `bank_payout_status` and reserve/reconciliation
  fields; never relabel pending or transferred balances as paid bank payouts.
- `requestRefund` is an owning account's support request. `refundOrder` executes
  directly for an authorized finance caller with a stable key; pending/unknown is not completed.
  Preserve historical orders and reverse commission proportionately. Refunds
  use the original provider/account, not the currently preferred payment route.
- Handle HTTP 401/403 for account/scope, 404 for unavailable or cross-title IDs,
  409 for idempotency/state/invariant conflicts, 410 for expired sessions/claims,
  422 for invalid inputs/revenue policy, 429 for rate limits and 503 for provider
  coverage. Do not retry a hard decline/fraud block through another provider.
- Ads-off is an actual per-title delivery policy. The backend rejects removing
  the final working revenue model. Provider outages leave ads off and existing
  ownership intact. Sandbox products do not constitute production monetization.

## MCP

Use `mcpCapabilities` to discover exact schemas, abilities, mutation metadata and
examples. `mcpOperation` always targets the authenticated MCP facade; it never
uses a game's runtime token. `mcpUploadMedia` uses the same authorized Media
pipeline. The companion `glitch-mcp` package supplies explicit tools, a
`glitch://microtransactions/setup` resource, dynamic title schema resources and
the `glitch_setup_microtransactions` prompt. Authorized title-scoped MCP management
executes directly without confirmation/proposal/approval workflows. Permissions,
actual provider facts and the last-revenue-model/financial invariants remain enforced.
Developer MCP read tools do not impersonate players. The self-only runtime purchase
history API is documented for game code, not exposed as an arbitrary-player MCP tool.
