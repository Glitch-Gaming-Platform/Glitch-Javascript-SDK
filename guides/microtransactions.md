# Game microtransactions

**Player checkout/history minimum: SDK `3.15.0`, which is published.** The new
administrative direct-management API below is a **major SDK `4.0.0` migration**.
Verify usable published versions independently before installing; a reviewed
local4.0 candidate is not proof of publication. Server-side MCP catalog/provider
setup does not require installing or publishing the game SDK, so do not block
authorized server configuration while runtime package work is pending.

The SDK entry point is `Glitch.api.Microtransactions`. All HTTP methods return an
Axios response whose `response.data.data` contains the typed commerce result.
Configure the ordinary API base once using the existing Glitch configuration.
Never put a developer/MCP/install token into a shipped browser game.

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
For a pack of **100 Timber** spent building things, choose product type `currency`
(or `consumable`) and grant `{key:'timber',quantity:100,kind:'consumable'}`. A durable
grant means lasting ownership and cannot be spent; it is wrong for building Timber.

## Hosted checkout and account creation

`createCheckoutSession(titleId, {product_id,quantity,country,currency,environment,
channel:'web',return_origin,nonce})` is anonymous-safe and only opens the purchase
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
`installTimberShop` with the title/product IDs and API/checkout origins shown by
your game integration settings. For local testing use your approved local origins
and `allowLocalDevelopment:true`; for production use approved HTTPS endpoints.
The example creates its own small UI, so no undefined HTML elements or game helper
functions are required. It never takes the player away from the game.

```js
import Glitch, {
  createMicrotransactionNonce,
  openMicrotransactionOverlay,
  openMicrotransactionRestoreOverlay,
} from 'glitch-javascript-sdk';

export function installTimberShop({ titleId, productId, apiBaseUrl, checkoutOrigin,
  environment = 'sandbox', allowLocalDevelopment = false }) {
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
    game.inventory = entitlements; // REPLACE the snapshot. Never add 100 here.
    timber.textContent = 'Timber: ' + (entitlements.find(x => x.key === 'timber')?.balance ?? 0);
  }
  function setGamePaused(paused) { game.paused = paused; }
  function onVerified(result) {
    game.playerId = result.player_id; // Associate the game's profile with this player.
    playerToken = result.player_token; // Memory only; never a URL or global auth token.
    tokenExpiresAt = Date.parse(result.expires_at);
    replaceInventoryInYourGame(result.entitlements); // Already verified by Glitch.
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
      const context = { return_origin: window.location.origin,
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
    if (pendingUse && pendingUse.playerId !== game.playerId) {
      throw new Error('Restore the original account before retrying its pending action.');
    }
    // Create ONCE for this gameplay intent. A failed retry keeps this same object.
    pendingUse ??= { playerId: game.playerId, action_id: createMicrotransactionNonce(),
      key: 'timber', quantity: 10 };
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
apiBaseUrl: YOUR_API_BASE, checkoutOrigin: YOUR_CHECKOUT_ORIGIN})` from your existing
game initialization. These four capitalized names describe your configuration;
replace them with the actual values, not credentials. `environment` is optional
and defaults to sandbox. The example assumes an eligible US/USD price; choose a
server-supported country/currency for your real player instead of guessing from IP.

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
