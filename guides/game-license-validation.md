# Game licenses and the Aegis validation handshake

Call `Titles.validateInstall(titleId, installId)` at game startup and when resuming an
existing session. Deny full-game access whenever HTTP is 403/404 or `valid` is
not `true`; never infer ownership from client-local values.

```ts
import Glitch from "glitch-javascript-sdk";
import type { AegisInstallValidation } from "glitch-javascript-sdk";

const response = await Glitch.api.Titles.validateInstall<AegisInstallValidation>(
  titleId, installId
);
const result = response.data.data;
if (!result.valid) throw new Error(result.reason || "Access denied");

if (result.license?.type === "premium") {
  // Player owns a permanent premium license.
} else if (result.license?.type === "rental") {
  // Check expires_at and rely on repeat server validation.
} else if (result.license?.type === "subscription") {
  // Subscription access is scoped to titles that allow it.
}
```

The historical `license_type` property is kept for backward compatibility
and can be `purchased`, `subscription`, `trial`, `demo` or `playtest`.
Use `license.type` for exact `premium`, `rental`, `subscription`, `sponsored`,
`admin`, `free`, `trial`, `demo`, `playtest` or `none`.

`license` includes `id`, `type`, `source`, `status`, `acquired_at`,
`purchased_at`, `expires_at`, `is_permanent` and `price_paid`. Amount and
purchase time are nullable when a historical payment record is not reliably
recoverable; never substitute the current catalog price. No payment secret or
raw transaction identifier is returned.

Premium-only access is configured by the title administrator on the
Monetization page using `premium_purchase_required_for_full_game`. It defaults
to false. When true, a production game launch or validation without an
authorized premium entitlement returns `PREMIUM_PURCHASE_REQUIRED` (403).
The Glitch play page renders checkout and registration/login inline.
Demo and eligible playtests remain free. Previously sold, still-active rentals
are honored until their original expiration; new rentals cannot be enabled
with premium-only mode.

The publisher SDK exposes `Titles.getGameMonetization` and
`Titles.updateGameMonetization`. Mutation requires publisher JWT and backend
validation. The Glitch MCP connector additionally offers
`glitch_get_game_monetization` and `glitch_update_game_monetization`, the latter
requiring `commerce:write`, `expected_version` and `confirm=true`.

Use `AegisInstallValidation` and `AegisLicenseDetail` types for integration.
Do not expose developer install/MCP credentials in browser JavaScript or game
builds, or use an unrelated player's install ID.
