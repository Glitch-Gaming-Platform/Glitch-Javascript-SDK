import { AxiosProgressEvent, AxiosPromise, AxiosRequestConfig } from 'axios';
import MicrotransactionsRoute from '../routes/MicrotransactionsRoute';
import Requests from '../util/Requests';

export type MicrotransactionEnvironment = 'sandbox' | 'live';
export type MicrotransactionProviderName = 'stripe' | 'xsolla';
export type MicrotransactionProductType = 'durable' | 'consumable' | 'currency' | 'bundle' | 'pass';
export type MicrotransactionCurrency = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | 'JPY' | 'BRL' | 'INR' | 'KRW';
export type MicrotransactionProductStatus = 'draft' | 'active' | 'archived';
export type MicrotransactionPaymentStatus = 'created' | 'action_required' | 'pending' | 'unknown' | 'paid' | 'failed' | 'canceled' | 'refund_pending' | 'partially_refunded' | 'refunded' | 'disputed' | 'quarantined' | 'refund_review';
export type MicrotransactionRefundStatus = 'requested' | 'linked' | 'unknown' | 'pending' | 'submitted' | 'succeeded' | 'failed' | 'canceled';
export type MicrotransactionDeliveryStatus = 'pending' | 'retrying' | 'processing' | 'acknowledged' | 'failed' | 'superseded';
export type MicrotransactionPayoutStatus = 'pending' | 'transferred' | 'bank_paid' | 'bank_pending' | 'bank_failed' | 'transfer_reversed';
export type MicrotransactionFulfillmentStatus = 'not_ready' | 'pending' | 'delivered' | 'retrying' | 'failed' | 'revoked' | 'partially_recovered';
export type MicrotransactionAbility = 'commerce:read' | 'commerce:write' | 'commerce:finance' | 'commerce:fulfill';
export type MicrotransactionErrorCode = 'authentication_required' | 'permission_denied' | 'not_found' | 'not_eligible' | 'quote_expired' | 'already_owned' | 'idempotency_conflict' | 'payment_unknown' | 'rate_limited' | 'invalid_revenue_configuration' | 'fulfillment_pending' | 'provider_unavailable';

/** The backend's JSON envelope; Axios returns this envelope in response.data. */
export interface MicrotransactionResponse<T> { data: T; message?: string; success?: boolean; }
export interface MicrotransactionError { message: string; code?: MicrotransactionErrorCode | string; errors?: Record<string, string[]>; }

export interface MicrotransactionRequestOptions extends Pick<AxiosRequestConfig, 'signal' | 'timeout'> {
  /** Optional short-lived commerce-only player token. Never a shipped developer/title token. */
  playerToken?: string;
}
export interface MicrotransactionSessionOptions extends MicrotransactionRequestOptions {
  /** Required limited checkout capability; sent only in X-Checkout-Token, never a query. */
  checkoutToken: string;
}
export interface MicrotransactionEnvironmentFilter { environment?: MicrotransactionEnvironment; }
/** Catalog discovery defaults to 200 records per page; absence on page one is not proof a SKU is unused. */
export interface MicrotransactionProductListFilters {
  page?: number;
  per_page?: number;
  status?: MicrotransactionProductStatus;
  /** Exact SKU, not a substring search. */
  sku?: string;
}
/** Administrative lists default to page 1 / 25 records and are scoped to the authorized title. */
export interface MicrotransactionManagementListFilters extends MicrotransactionEnvironmentFilter {
  page?: number;
  per_page?: number;
  status?: string;
}
export interface MicrotransactionOrderListFilters extends MicrotransactionManagementListFilters { product_id?: string; status?: MicrotransactionPaymentStatus; payment_status?: MicrotransactionPaymentStatus; }
export interface MicrotransactionRelatedListFilters extends MicrotransactionManagementListFilters { order_id?: string; }
export interface MicrotransactionRefundListFilters extends MicrotransactionRelatedListFilters { status?: MicrotransactionRefundStatus; }
export interface MicrotransactionDeliveryListFilters extends MicrotransactionRelatedListFilters { status?: MicrotransactionDeliveryStatus; }
export interface MicrotransactionPayoutListFilters extends MicrotransactionRelatedListFilters { status?: MicrotransactionPayoutStatus; }
/** @deprecated Optional compatibility field only; no confirmation or human-approval gate is enforced. */
export interface MicrotransactionLegacyConfirmation { confirm?: boolean; }
/** Self-only purchase-history filters. Identity comes from authentication, never a user_id argument. */
export interface MicrotransactionMyPurchasesFilters extends MicrotransactionEnvironmentFilter {
  /** Page number, integer 1–10000. Defaults to 1; ordering is created_at DESC, id DESC. */
  page?: number;
  /** Integer 1–100. Defaults to 20. No cursor or product filter is supported. */
  per_page?: number;
}
export interface MicrotransactionCatalogFilter extends MicrotransactionEnvironmentFilter {
  country?: string;
  currency?: string;
  channel?: 'web';
}
export interface MicrotransactionMedia {
  id: string;
  url: string;
  mime_type: string;
  poster?: string | null;
}
export interface MicrotransactionBranding {
  display_name?: string | null;
  accent_color?: string | null;
  /** Existing authorized title Media ID, not an external URL or UserMedia ID. */
  logo_media_id?: string | null;
  /** Resolved public Media returned for display; not a writable branding input. */
  logo_media?: MicrotransactionMedia | null;
}
export interface MicrotransactionPrice {
  /** Uppercase ISO 4217 currency. Not all currencies have two decimal places. */
  currency: MicrotransactionCurrency;
  /** Uppercase ISO 3166-1 alpha-2 buyer country, or '*' default. */
  country: string;
  /** Integer 1–100000 in currency minor units: USD 499 means $4.99; JPY 499 means ¥499. Provider minima apply separately. */
  amount_minor: number;
}
export interface MicrotransactionGrant {
  /** Stable per-title inventory key; never a client-supplied grant at checkout. */
  key: string;
  quantity: number;
  kind: 'durable' | 'consumable' | 'pass';
  /** Required for pass grants; 60–31536000 seconds. Durable quantity must be one. */
  duration_seconds?: number | null;
}
export interface MicrotransactionProductInput {
  sku: string;
  name: string;
  description?: string;
  type: MicrotransactionProductType;
  status?: MicrotransactionProductStatus;
  /** Attach IDs from the existing title-authorized Media pipeline. No arbitrary media URLs. */
  media_ids?: string[];
  prices: MicrotransactionPrice[];
  grants: MicrotransactionGrant[];
  localizations?: Record<string, { name: string; description?: string | null }>;
  starts_at?: string | null;
  ends_at?: string | null;
  max_per_order?: number;
  /** @deprecated Ignored compatibility field. Title authorization and immutable-data validation remain required. */
  confirm?: boolean;
}
export interface MicrotransactionProduct extends Omit<MicrotransactionProductInput, 'confirm' | 'status' | 'media_ids'> {
  id: string;
  title_id: string;
  status: MicrotransactionProductStatus;
  version: number;
  media_ids: string[];
  media: MicrotransactionMedia[];
  created_at: string;
  updated_at: string;
}
export interface MicrotransactionProvider {
  provider: MicrotransactionProviderName;
  environment: MicrotransactionEnvironment;
  configured: boolean;
  /** Actual external provider/account capability, not a manual approval flag. */
  available: boolean;
  enabled: boolean;
  priority: number;
  countries: string[];
  currencies: string[];
  minimum_amounts: Record<string, number>;
  channels: string[];
  payment_methods: string[];
  configuration: MicrotransactionProviderConfiguration;
  account: { id: string; country: string | null; charges_enabled: boolean; payouts_enabled: boolean; requirements_due: string[] } | null;
  /** The game's payout target. Do not substitute the platform processing account's payouts_enabled. */
  payout_account: { source: 'platform' | 'user' | 'community' | 'managed'; id: string | null; available: boolean; country: string | null; transfers_active: boolean; payouts_enabled: boolean; requirements_due: string[]; reasons: string[] };
  tax: { status: string; missing_fields: string[] };
  reasons: string[];
  checked_at: string | null;
  revision?: number;
}
export interface MicrotransactionProviderSku {
  /** Provider SKU, 1–100 characters. */
  sku: string;
  currency: MicrotransactionCurrency;
  amount_minor: number;
}
export interface MicrotransactionProviderConfiguration {
  tax_mode: 'automatic' | 'disabled';
  /** Stripe tax code txcd_ followed by exactly eight digits. */
  tax_code: string | null;
  payout_source: 'platform' | 'user' | 'community' | 'managed';
  /** Xsolla public project ID, 1–20 decimal digits. */
  project_id: string | null;
  /** Maximum 200 mappings. */
  sku_map: Record<string, MicrotransactionProviderSku>;
}
/** Developer preferences and an optional new owned Xsolla webhook secret only; never platform credentials, arbitrary payees, or availability facts. */
export interface MicrotransactionProviderInput extends Partial<MicrotransactionProviderConfiguration>, MicrotransactionLegacyConfirmation {
  environment: MicrotransactionEnvironment;
  enabled?: boolean;
  priority?: number;
  countries?: string[];
  currencies?: MicrotransactionCurrency[];
  minimum_amounts?: Record<string, number>;
  /** Write-only NEW owned Xsolla project secret, 16–512 chars, finance scope. Never a platform API key or MCP token; never returned/logged or put in game code. Existing platform/historical bindings cannot be overwritten. */
  webhook_secret?: string;
}
export interface MicrotransactionProviderOnboardingInput extends MicrotransactionLegacyConfirmation {
  environment: MicrotransactionEnvironment;
  country: string;
  /** Stable caller-created key. Reuse with identical input after uncertain retries; never generate inside a retry. */
  idempotency_key: string;
}
export interface MicrotransactionProviderOnboarding {
  title_id: string;
  provider: 'stripe';
  environment: MicrotransactionEnvironment;
  account_id: string;
  /** Single-use provider onboarding URL on connect.stripe.com; do not log or persist it. */
  onboarding_url: string;
  expires_at: string;
  status: 'requires_provider_onboarding';
  reused: boolean;
}
export interface MicrotransactionDeliverySettings {
  title_id: string;
  environment: MicrotransactionEnvironment;
  enabled: boolean;
  url: string | null;
  signature_algorithm: 'ed25519' | 'hmac-sha256';
  /** Public verification material only. The private signing key never leaves the server. */
  verification_public_key: string | null;
  key_id: string | null;
  revision: number;
  configured: boolean;
}
export interface MicrotransactionDeliverySettingsInput extends MicrotransactionLegacyConfirmation {
  environment: MicrotransactionEnvironment;
  enabled?: boolean;
  url?: string | null;
}
export interface MicrotransactionDelivery {
  id: string;
  order_id: string;
  event_type: string;
  status: MicrotransactionDeliveryStatus;
  attempts: number;
  next_attempt_at: string | null;
  acknowledged_at: string | null;
  created_at: string;
  updated_at: string;
}
/** Replay/acknowledgement return only this safe subset, not the list's timestamps. */
export type MicrotransactionDeliveryResult = Pick<MicrotransactionDelivery, 'id' | 'order_id' | 'status' | 'event_type' | 'attempts' | 'acknowledged_at'>;
export interface MicrotransactionRefundRecord {
  id: string;
  order_id: string;
  status: MicrotransactionRefundStatus;
  amount_minor: number;
  reason: string;
  idempotency_key: string | null;
  record_type: 'request' | 'execution';
  execution_refund_id: string | null;
  execution_status: MicrotransactionRefundStatus | null;
  request_resolution: 'linked_to_execution' | 'not_executed' | null;
  order_refunded_minor: number | null;
  failure_code: string | null;
  created_at: string;
  updated_at: string;
}
export interface MicrotransactionPayout {
  id: string;
  order_id: string;
  status: MicrotransactionPayoutStatus;
  amount_minor: number;
  provider_reference: string | null;
  created_at: string;
  updated_at: string;
}
export interface MicrotransactionRefundInput extends MicrotransactionLegacyConfirmation {
  reason: string;
  amount_minor?: number;
  /** REQUIRED stable operation key, scoped to title/order. Reuse identical input on retry; changes conflict. */
  idempotency_key: string;
}
export interface MicrotransactionReadiness {
  status: 'disabled' | 'draft' | 'sandbox' | 'ready' | 'live' | 'degraded' | 'suspended';
  ready: boolean;
  blockers: string[];
  providers: MicrotransactionProvider[];
  commission_basis_points: 1200;
}
export interface MicrotransactionFramePolicy { frame_ancestors: string[]; expires_at: string | null; }
export interface MicrotransactionSettingsInput {
  enabled?: boolean;
  environment?: MicrotransactionEnvironment;
  /** Actual title-wide ad-delivery policy, distinct from ad revenue sharing. */
  ads_enabled?: boolean;
  fulfillment_mode?: 'glitch' | 'server';
  allowed_origins?: string[];
  countries?: string[];
  currencies?: MicrotransactionCurrency[];
  branding?: Omit<MicrotransactionBranding, 'logo_media'>;
  support_email?: string | null;
  /** @deprecated Legacy delivery alias requiring BOTH commerce:write and commerce:fulfill; prefer updateDeliverySettings/getDeliverySettings. */
  webhook_url?: string | null;
  /** @deprecated Ignored compatibility field. Authorized title editors save directly; actual provider/sales restrictions remain. */
  confirm?: boolean;
}
export interface MicrotransactionSettings extends Omit<Required<MicrotransactionSettingsInput>, 'confirm'> {
  title_id: string;
  branding: MicrotransactionBranding;
  integration_verified: boolean;
  /** 12% of discounted pre-tax subtotal; no second commission for in-game currency spending. */
  commission_basis_points: 1200;
  fee_policy: 'developer_pays_provider_costs';
  readiness: MicrotransactionReadiness;
}
export interface MicrotransactionCatalog {
  title: { id: string; name: string };
  branding: MicrotransactionBranding;
  products: MicrotransactionProduct[];
  environment: MicrotransactionEnvironment;
  available: boolean;
  blockers: string[];
}
export interface MicrotransactionPurchaseInput {
  product_id: string;
  quantity: number;
  country: string;
  currency: string;
  environment: MicrotransactionEnvironment;
  channel: 'web';
}
export interface MicrotransactionCheckoutSessionInput extends MicrotransactionPurchaseInput {
  /** Exact game origin previously allowlisted by its owner. */
  return_origin: string;
  /** Random per-purchase state; retain locally and compare before claiming a handoff. */
  nonce: string;
}
export interface MicrotransactionQuote extends Omit<MicrotransactionPurchaseInput, 'channel'> {
  id: string;
  product_version: number;
  subtotal_minor: number;
  tax_minor: number;
  total_minor: number;
  commission_minor: number;
  commission_basis_points: 1200;
  expires_at: string;
}
export interface MicrotransactionEntitlement {
  key: string;
  kind: 'durable' | 'consumable' | 'pass';
  balance: number;
  environment: MicrotransactionEnvironment;
  updated_at: string;
  expires_at?: string | null;
}
export interface MicrotransactionOrder {
  id: string;
  /** Opaque owning Glitch player ID; no email or billing identity is exposed. */
  player_id?: string;
  checkout_session_id: string | null;
  title_id: string;
  product_id: string;
  quantity: number;
  environment: MicrotransactionEnvironment;
  currency: string;
  country: string;
  subtotal_minor: number;
  tax_minor: number;
  total_minor: number;
  commission_minor: number;
  /** Null until actual costs are reconciled; never confuse an estimate with a payout. */
  provider_fee_minor: number | null;
  payment_status: MicrotransactionPaymentStatus;
  fulfillment_status: MicrotransactionFulfillmentStatus;
  provider: 'stripe' | 'xsolla' | null;
  created_at: string;
  paid_at: string | null;
  refunded_minor: number;
  items: MicrotransactionGrant[];
  entitlements?: MicrotransactionEntitlement[];
}
export interface MicrotransactionOrderDetail extends MicrotransactionOrder {
  /** Optional, permission-scoped management relationships. Omission is not proof no records exist. */
  refunds?: Array<Pick<MicrotransactionRefundRecord, 'id' | 'order_id' | 'status'> & Partial<MicrotransactionRefundRecord>>;
  deliveries?: MicrotransactionDelivery[];
  payouts?: Array<Pick<MicrotransactionPayout, 'id' | 'order_id' | 'status'> & Partial<MicrotransactionPayout>>;
  financial_details_included?: boolean;
}
export type MicrotransactionGrantUsageStatus = 'unused' | 'partially_used' | 'used_up' | 'owned' | 'expired' | 'revoked' | 'not_delivered' | 'unavailable';

/** One purchase's server-calculated grant lot, not the player's aggregate inventory balance. */
export interface MicrotransactionGrantUsage {
  /** Null when the captured purchase has not produced an actual grant lot. */
  grant_id: string | null;
  key: string;
  kind: 'durable' | 'consumable' | 'pass';
  /** Promised units from the frozen grant quantity multiplied by order quantity, not money. */
  purchased_quantity: number;
  /** Actual granted units; zero when no lot exists, even if promised units are positive. */
  granted_quantity: number;
  /** Alias of actual granted_quantity, not the promised purchased_quantity. */
  acquired_quantity: number;
  /** Units remaining in the lot; expired/unavailable lots may still have raw remaining units. */
  remaining_quantity: number;
  /** acquired_quantity - remaining_quantity - revoked_quantity. Includes unrecoverable consumed units. */
  consumed_quantity: number;
  /** Units actually recovered/revoked by a refund; not gameplay consumption. */
  revoked_quantity: number;
  /** Bounded revoked_quantity + unrecoverable_quantity. This overlaps consumed quantity; do not subtract twice. */
  refunded_quantity: number;
  /** Refunded units that could not be recovered because already consumed. Overlaps consumed_quantity. */
  unrecoverable_quantity: number;
  expires_at: string | null;
  expired: boolean;
  /** Server-calculated usable units after expiry and payment/fulfillment restrictions. */
  usable_quantity: number;
  /** Consumable usage only. Durable/pass grants return null; ownership is not proof of gameplay use. */
  is_used: boolean | null;
  usage_status: MicrotransactionGrantUsageStatus;
}

export interface MicrotransactionPlayerPurchase extends MicrotransactionOrder {
  /** Always present on authenticated self-history, unlike older generic order DTOs. */
  player_id: string;
  /** Product snapshot for this purchase, not a replacement for the current catalog. */
  product: { id: string; sku: string | null; name: string | null; type: MicrotransactionProductType | null; version: number | null };
  grant_usage: MicrotransactionGrantUsage[];
  has_consumed_grants: boolean;
  has_usable_grants: boolean;
}

export interface MicrotransactionPurchasePagination {
  page: number;
  per_page: number;
  total: number;
  last_page: number;
  has_more_pages: boolean;
}

/** Captured own-player purchases, including later refunds/disputes/quarantine; unpaid attempts are excluded. */
export interface MicrotransactionMyPurchases {
  title_id: string;
  player_id: string;
  environment: MicrotransactionEnvironment;
  purchases: MicrotransactionPlayerPurchase[];
  pagination: MicrotransactionPurchasePagination;
}
export interface MicrotransactionCreatedCheckoutSession {
  id: string;
  checkout_session_id: string;
  intent: 'purchase' | 'restore';
  /** Short-lived capability: never log, send to analytics, or put in a URL query. */
  session_token: string;
  hosted_url: string;
  expires_at: string;
  status: 'authentication_required' | 'ready';
  nonce: string;
}
export interface MicrotransactionCheckoutSession {
  id: string;
  checkout_session_id: string;
  title_id: string;
  intent: 'purchase' | 'restore';
  title: { id: string; name: string };
  branding: MicrotransactionBranding;
  product: MicrotransactionProduct | null;
  quantity: number;
  country: string;
  currency: string;
  environment: MicrotransactionEnvironment;
  status: string;
  expires_at: string;
  authenticated: boolean;
  order: MicrotransactionOrder | null;
  return_origin: string;
  nonce: string;
  support_email: string | null;
}
export interface MicrotransactionCheckoutInput {
  /** UUID retained for retries of the same purchase, never reused for different goods. */
  idempotency_key: string;
  accept_terms: true;
}
export interface MicrotransactionCheckoutResult {
  order: MicrotransactionOrder;
  checkout_url: string | null;
  status: MicrotransactionPaymentStatus;
  provider: 'stripe' | 'xsolla';
  quote: MicrotransactionQuote;
  /** Provider's limited embedded-checkout secret if this route supports embedded checkout. */
  client_secret?: string | null;
  /** Public provider key only. Never a Stripe secret key. */
  publishable_key?: string | null;
  ui_mode: 'embedded' | 'xsolla';
}
export interface MicrotransactionHandoff {
  event: {
    type: 'glitch.microtransaction.updated';
    version: 1;
    title_id: string;
    checkout_session_id: string;
    order_id: string;
    nonce: string;
    /** One-time claim only; never an account JWT. */
    claim_code: string;
  };
  target_origin: string;
  expires_at: string;
}
export interface MicrotransactionHandoffClaimInput { claim_code: string; nonce: string; return_origin: string; checkout_session_id: string; }
export interface MicrotransactionHandoffClaim {
  title_id: string;
  checkout_session_id: string;
  order_id: string;
  player_id: string;
  entitlements: MicrotransactionEntitlement[];
  /** 15-minute title/player/environment-scoped token, stored in memory only. */
  player_token: string;
  expires_at: string;
}
export interface MicrotransactionConsumeInput {
  key: string;
  quantity: number;
  action_id: string;
  environment: MicrotransactionEnvironment;
}
export interface MicrotransactionRefund { refund_id: string; status: MicrotransactionRefundStatus; order_id: string; idempotency_key: string; failure_code: string | null; refund_allocation?: 'pro_rata_all_grants'; }
export interface MicrotransactionRefundRequest { id: string; order_id: string; status: 'requested'; }
export interface MicrotransactionEarnings {
  currency_balances: Array<{
    currency: string; pending_minor: number; available_minor: number; paid_minor: number;
    commission_minor: number; provider_fees_minor: number;
    /** Transfer to a connected provider balance is NOT a confirmed bank payout. */
    transferred_minor?: number;
    bank_payout_status?: 'provider_managed_not_reconciled';
  }>;
  payouts_enabled: boolean;
  reserve_days?: number;
}
export type MicrotransactionOperation = 'settings.get' | 'settings.update' | 'products.list' | 'products.create' | 'products.update' | 'products.archive' | 'providers.list' | 'providers.update' | 'providers.refresh' | 'providers.onboarding' | 'readiness.get' | 'orders.list' | 'orders.get' | 'orders.reconcile' | 'earnings.get' | 'refunds.list' | 'refunds.get' | 'refunds.create' | 'refunds.request' | 'refunds.reconcile' | 'delivery.settings.get' | 'delivery.settings.update' | 'deliveries.list' | 'deliveries.replay' | 'deliveries.acknowledge' | 'payouts.list' | 'integration.get' | 'integration.verify';
export interface MicrotransactionOperationCapability {
  operation: MicrotransactionOperation;
  description: string;
  ability: MicrotransactionAbility;
  input_schema: Record<string, unknown>;
  http_method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  mutates: boolean;
  requires_confirmation: false;
  requires_human_approval: false;
  examples: Array<Record<string, unknown>>;
  output_description: string;
}
export interface MicrotransactionCapabilities {
  schema_version: number;
  title_id: string;
  operations: MicrotransactionOperationCapability[];
  [key: string]: unknown;
}

/**
 * Provider-neutral, title-scoped commerce. Configure with user JWT; purchases
 * use a recoverable user account and limited checkout capability. Install/title
 * tokens cannot authorize money, ownership, refunds, or catalog changes.
 *
 * Each result preserves payment versus fulfillment versus settlement. Redirects
 * and postMessage events only trigger an authoritative refresh. A timeout is
 * unknown; reconcile the original attempt instead of charging another provider.
 */
class Microtransactions {
  /**
   * Upload an image/video through existing Glitch Media processing with title
   * and actor ownership. Attach its returned Media ID to products/branding.
   * Does not create a social-library post, scheduler, or new payment product.
   */
  static uploadMedia(title_id: string, media: File | Blob, onUploadProgress?: (event: AxiosProgressEvent) => void, options?: Pick<AxiosRequestConfig, 'signal' | 'timeout'>): AxiosPromise<MicrotransactionResponse<MicrotransactionMedia>> {
    if (!/^[A-Za-z0-9_:-]+$/.test(title_id)) throw new Error('Invalid commerce title identifier.');
    return Requests.uploadFile<MicrotransactionMedia>(MicrotransactionsRoute.routes.uploadMedia.url.replace('{title_id}', encodeURIComponent(title_id)), 'media', media, {}, undefined, onUploadProgress, { ...options, excludeCommunityContext: true });
  }
  /** Same title-authorized Media pipeline using the caller's MCP credential and commerce:write ability. */
  static mcpUploadMedia(title_id: string, media: File | Blob, onUploadProgress?: (event: AxiosProgressEvent) => void, options?: Pick<AxiosRequestConfig, 'signal' | 'timeout'>): AxiosPromise<MicrotransactionResponse<MicrotransactionMedia>> {
    if (!/^[A-Za-z0-9_:-]+$/.test(title_id)) throw new Error('Invalid commerce title identifier.');
    return Requests.uploadFile<MicrotransactionMedia>(MicrotransactionsRoute.routes.mcpUploadMedia.url.replace('{title_id}', encodeURIComponent(title_id)), 'media', media, {}, undefined, onUploadProgress, { ...options, excludeCommunityContext: true });
  }
  /** Admin settings, including immutable 1200bp commission and readiness blockers. */
  static settings(title_id: string, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionSettings>('settings', title_id, undefined, {}, undefined, options); }
  /** Atomic policy update. Sandbox/off by default. Cannot disable the final working revenue model. */
  static updateSettings(title_id: string, data: MicrotransactionSettingsInput, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionSettings>('updateSettings', title_id, data, {}, undefined, options); }
  /** Read-only current country/provider capability and revenue readiness; never fabricates availability. */
  static readiness(title_id: string, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionReadiness>('readiness', title_id, undefined, {}, undefined, options); }
  /** Paginated admin catalog including drafts/archives. Default 200, per_page 1–200/page 1–10000. Use exact sku to resolve uncertain creates. */
  static listProducts(title_id: string, params?: MicrotransactionProductListFilters, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<{ products: MicrotransactionProduct[]; pagination: MicrotransactionPurchasePagination }>>;
  /** @deprecated Compatibility overload for the earlier second-argument request options. */
  static listProducts(title_id: string, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<{ products: MicrotransactionProduct[]; pagination: MicrotransactionPurchasePagination }>>;
  static listProducts(title_id: string, paramsOrOptions?: MicrotransactionProductListFilters | MicrotransactionRequestOptions, options?: MicrotransactionRequestOptions) {
    const legacy = paramsOrOptions && ('playerToken' in paramsOrOptions || 'signal' in paramsOrOptions || 'timeout' in paramsOrOptions);
    return this.call<{ products: MicrotransactionProduct[]; pagination: MicrotransactionPurchasePagination }>('products', title_id, undefined, {}, legacy ? undefined : paramsOrOptions, legacy ? paramsOrOptions as MicrotransactionRequestOptions : options);
  }
  /** Save a catalog product. Prices use integer minor units and attached media must belong to the title. */
  static createProduct(title_id: string, data: MicrotransactionProductInput, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionProduct>('createProduct', title_id, data, {}, undefined, options); }
  /** Update a product version. Existing order snapshots remain unchanged. */
  static updateProduct(title_id: string, product_id: string, data: Partial<MicrotransactionProductInput>, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionProduct>('updateProduct', title_id, data, { product_id }, undefined, options); }
  /** Direct authorized archive. Never deletes financial history or bypasses the last-revenue-model rule. */
  static archiveProduct(title_id: string, product_id: string, data: MicrotransactionLegacyConfirmation = {}, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionProduct>('archiveProduct', title_id, data, { product_id }, undefined, options); }
  /** Actual provider configuration/capability facts; no credentials or manual approval flag. */
  static providers(title_id: string, params?: MicrotransactionEnvironmentFilter, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<{ providers: MicrotransactionProvider[] }>>;
  /** @deprecated Compatibility overload for the earlier second-argument request options. */
  static providers(title_id: string, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<{ providers: MicrotransactionProvider[] }>>;
  static providers(title_id: string, paramsOrOptions?: MicrotransactionEnvironmentFilter | MicrotransactionRequestOptions, options?: MicrotransactionRequestOptions) {
    const legacy = paramsOrOptions && !('environment' in paramsOrOptions) && ('playerToken' in paramsOrOptions || 'signal' in paramsOrOptions || 'timeout' in paramsOrOptions);
    return this.call<{ providers: MicrotransactionProvider[] }>('providers', title_id, undefined, {}, legacy ? undefined : paramsOrOptions, legacy ? paramsOrOptions as MicrotransactionRequestOptions : options);
  }
  /** Direct commerce:finance configuration. Saving preferences does not fabricate external capability; inspect available/reasons. */
  static updateProvider(title_id: string, provider: MicrotransactionProviderName, data: MicrotransactionProviderInput, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionProvider>('updateProvider', title_id, data, { provider }, undefined, options); }
  /** Refresh authenticated external provider facts. May update cached state; never creates a payment or invents eligibility. */
  static refreshProvider(title_id: string, provider: MicrotransactionProviderName, data: { environment: MicrotransactionEnvironment }, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionProvider>('refreshProvider', title_id, data, { provider }, undefined, options); }
  /** Start/reuse owned Stripe Connect onboarding with one stable key. Provider KYC is factual setup, not a Glitch approval workflow. */
  static createProviderOnboarding(title_id: string, data: MicrotransactionProviderOnboardingInput, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionProviderOnboarding>('createProviderOnboarding', title_id, data, {}, undefined, options); }
  /** Read title/environment delivery settings and the Ed25519 PUBLIC verification key. */
  static getDeliverySettings(title_id: string, params?: MicrotransactionEnvironmentFilter, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionDeliverySettings>('deliverySettings', title_id, undefined, {}, params, options); }
  /** Direct commerce:fulfill setup. Private/metadata network targets and private-key inputs remain forbidden. */
  static updateDeliverySettings(title_id: string, data: MicrotransactionDeliverySettingsInput, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionDeliverySettings>('updateDeliverySettings', title_id, data, {}, undefined, options); }
  /** Discover safe event IDs/statuses before replay or acknowledge. Page 1–10000, per_page 1–100, default 25. */
  static listDeliveries(title_id: string, params?: MicrotransactionDeliveryListFilters, options?: MicrotransactionRequestOptions) { return this.call<{ deliveries: MicrotransactionDelivery[]; pagination: MicrotransactionPurchasePagination }>('deliveries', title_id, undefined, {}, params, options); }
  /** Financially scoped refund operation discovery; pending/unknown is not completed. */
  static listRefunds(title_id: string, params?: MicrotransactionRefundListFilters, options?: MicrotransactionRequestOptions) { return this.call<{ refunds: MicrotransactionRefundRecord[]; pagination: MicrotransactionPurchasePagination }>('refunds', title_id, undefined, {}, params, options); }
  /** Inspect one same-title refund operation. */
  static getRefund(title_id: string, refund_id: string, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionRefundRecord>('refundDetail', title_id, undefined, { refund_id }, undefined, options); }
  /** Query/retry the original persisted refund with its existing identity, never generate a new refund key. */
  static reconcileRefund(title_id: string, refund_id: string, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionRefundRecord>('reconcileRefund', title_id, {}, { refund_id }, undefined, options); }
  /** Discover provider transfer/payout records; transferred funds are not automatically a verified bank payout. */
  static listPayouts(title_id: string, params?: MicrotransactionPayoutListFilters, options?: MicrotransactionRequestOptions) { return this.call<{ payouts: MicrotransactionPayout[]; pagination: MicrotransactionPurchasePagination }>('payouts', title_id, undefined, {}, params, options); }
  /** Admin read of separate-currency balances; pending is not withdrawable revenue. */
  static earnings(title_id: string, params?: MicrotransactionEnvironmentFilter, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionEarnings>('earnings', title_id, undefined, {}, params, options); }
  /** Admin paginated redacted orders. Page 1–10000/per_page 1–100 (default 25); own-player history is separate. */
  static listOrders(title_id: string, params?: MicrotransactionOrderListFilters, options?: MicrotransactionRequestOptions) { return this.call<{ orders: MicrotransactionOrder[]; pagination: MicrotransactionPurchasePagination }>('orders', title_id, undefined, {}, params, options); }
  /** Owner JWT/scoped player token or title admin. An arbitrary order UUID grants no access. */
  static getOrder(title_id: string, order_id: string, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionOrderDetail>('order', title_id, undefined, { order_id }, undefined, options); }
  /** Financially scoped original-provider reconciliation. Does not reroute or start a different purchase. */
  static reconcileOrder(title_id: string, order_id: string, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionOrderDetail>('reconcileOrder', title_id, {}, { order_id }, undefined, options); }
  /** Direct commerce:finance refund. REQUIRED stable idempotency_key; omission is an error, never auto-filled. Same-key changed input conflicts. */
  static refundOrder(title_id: string, order_id: string, data: MicrotransactionRefundInput, options?: MicrotransactionRequestOptions) {
    if (typeof data.idempotency_key !== 'string' || data.idempotency_key.length < 16 || data.idempotency_key.length > 128) throw new Error('A stable 16–128 character refund idempotency_key is required. Reuse it on retry.');
    return this.call<MicrotransactionRefund>('refund', title_id, data, { order_id }, undefined, options);
  }
  /** Replay the same immutable event. Receiver must deduplicate event_id. This cannot mint goods. */
  static replayDelivery(title_id: string, delivery_id: string, data: MicrotransactionLegacyConfirmation = {}, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionDeliveryResult>('replayDelivery', title_id, data, { delivery_id }, undefined, options); }
  /** Public eligible catalog. Sandbox is restricted by backend environment/admin policy. */
  static catalog(title_id: string, params?: MicrotransactionCatalogFilter, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionCatalog>('catalog', title_id, undefined, {}, params, options); }
  /** User-authenticated quote. Clients select product/quantity, never monetary values or seller accounts. */
  static createQuote(title_id: string, data: MicrotransactionPurchaseInput, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionQuote>('createQuote', title_id, data, {}, undefined, options); }
  /** Anonymous-safe opening step only. The hosted UI creates/logs into an account before payment. */
  static createCheckoutSession(title_id: string, data: MicrotransactionCheckoutSessionInput, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionCreatedCheckoutSession>('createCheckoutSession', title_id, data, {}, undefined, options); }
  /** Anonymous-safe inventory recovery. Opens an in-game hosted sign-in overlay, never creates a charge or requires the game's account JWT. */
  static createRestoreSession(title_id: string, data: { return_origin: string; nonce: string; environment: MicrotransactionEnvironment }, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionCreatedCheckoutSession>('createRestoreSession', title_id, data, {}, undefined, options); }
  /** Read the session using its limited capability. Cannot mutate user identity or declare payment. */
  static getCheckoutSession(title_id: string, session_id: string, options: MicrotransactionSessionOptions) { return this.call<MicrotransactionCheckoutSession>('checkoutSession', title_id, undefined, { session_id }, undefined, options); }
  /** Anonymous, read-only embedding policy: server-approved frame ancestors only, no player/session capability data. */
  static getCheckoutFramePolicy(title_id: string, session_id: string, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionFramePolicy>('checkoutFramePolicy', title_id, undefined, { session_id }, undefined, options); }
  /** Anonymous title-wide approved embedding policy for trusted hosted account pages; no player data. */
  static getFramePolicy(title_id: string, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionFramePolicy>('framePolicy', title_id, undefined, {}, undefined, options); }
  /** Bind once to the existing authenticated account. Cannot reassign another player's purchase. */
  static authenticateCheckoutSession(title_id: string, session_id: string, options: MicrotransactionSessionOptions) { return this.call<MicrotransactionCheckoutSession>('authenticateCheckoutSession', title_id, {}, { session_id }, undefined, options); }
  /** Bound-user JWT + session capability. Reuse the idempotency key after a network timeout. */
  static checkout(title_id: string, session_id: string, data: MicrotransactionCheckoutInput, options: MicrotransactionSessionOptions) { return this.call<MicrotransactionCheckoutResult>('checkout', title_id, data, { session_id }, undefined, options); }
  /** Query original provider; never creates another charge. Pending/unknown remains non-terminal. */
  static reconcileCheckoutSession(title_id: string, session_id: string, options: MicrotransactionSessionOptions) { return this.call<MicrotransactionOrder>('reconcileCheckout', title_id, {}, { session_id }, undefined, options); }
  /** Hosted checkout only. Server issues an expiring one-time game handoff after verified fulfillment. */
  static createHandoff(title_id: string, session_id: string, options: MicrotransactionSessionOptions) { return this.call<MicrotransactionHandoff>('createHandoff', title_id, {}, { session_id }, undefined, options); }
  /** Game exchanges a verified popup code. Browser Origin must match return_origin; code is consumed once. */
  static claimHandoff(title_id: string, data: MicrotransactionHandoffClaimInput, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionHandoffClaim>('claimHandoff', title_id, data, {}, undefined, options); }
  /**
   * Authenticated hosted Glitch account only: restore a previous purchase into a
   * NEW nonce-bound session/handoff after the game's 15-minute token expires or
   * storage is cleared. Does not create another payment. Return to the game via
   * verified source/origin and a new bridge bound to event.checkout_session_id.
   */
  static restoreHandoff(title_id: string, data: { order_id: string; return_origin: string; nonce: string }, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionHandoff>('restoreHandoff', title_id, data, {}, undefined, options); }
  /** Record integration proof from a genuinely paid, fulfilled sandbox order with a claimed game handoff. */
  static verifyIntegration(title_id: string, data: { order_id: string; confirm?: boolean }, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionReadiness>('verifyIntegration', title_id, data, {}, undefined, options); }
  /** Restore authoritative durable ownership/current consumable balances, never mutable cloud-save balances. */
  static listEntitlements(title_id: string, params?: MicrotransactionEnvironmentFilter, options?: MicrotransactionRequestOptions) { return this.call<{ entitlements: MicrotransactionEntitlement[] }>('entitlements', title_id, undefined, {}, params, options); }
  /**
   * Optional self-only purchase/usage history. A user JWT selects that user; a
   * scoped playerToken selects its bound title/player/environment and requires
   * the exact approved game Origin. No MCP/install token or caller-selected
   * user_id/player_id is accepted. JWT environment defaults to live; scoped
   * tokens default to their bound environment. Admin listOrders stays separate.
   *
   * Read response.data.data.purchases and .pagination. Use grant_usage for lot
   * consumption/refund/expiry status, listEntitlements for current aggregate
   * inventory, and consume for explicit gameplay spending. History never grants
   * inventory and durable/pass is_used is null rather than a guessed boolean.
   */
  static listMyPurchases(title_id: string, filters: MicrotransactionMyPurchasesFilters = {}, options?: MicrotransactionRequestOptions) {
    const allowed = ['environment', 'page', 'per_page'];
    if (Object.keys(filters).some(key => !allowed.includes(key))) throw new Error('Own purchase history supports only environment, page and per_page; identity cannot be selected.');
    if (filters.environment !== undefined && !['sandbox', 'live'].includes(filters.environment)) throw new Error('Invalid purchase-history environment.');
    if (filters.page !== undefined && (!Number.isInteger(filters.page) || filters.page < 1 || filters.page > 10000)) throw new Error('Purchase-history page must be an integer from 1 to 10000.');
    if (filters.per_page !== undefined && (!Number.isInteger(filters.per_page) || filters.per_page < 1 || filters.per_page > 100)) throw new Error('Purchase-history per_page must be an integer from 1 to 100.');
    return this.call<MicrotransactionMyPurchases>('myPurchases', title_id, undefined, {}, filters, options);
  }
  /** Atomic tracked spending. Reuse action_id for retries; a new gameplay action needs a new ID. */
  static consume(title_id: string, data: MicrotransactionConsumeInput, options?: MicrotransactionRequestOptions) { return this.call<{ entitlement: MicrotransactionEntitlement; replayed: boolean }>('consume', title_id, data, {}, undefined, options); }
  /** Owning user asks support to review a refund. This does not execute payment reversal. */
  static requestRefund(title_id: string, data: { order_id: string; reason: string }, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionRefundRequest>('requestRefund', title_id, data, {}, undefined, options); }
  /** Trusted title server with commerce:fulfill or admin JWT acknowledges the immutable event. */
  static acknowledgeDelivery(title_id: string, delivery_id: string, data: { event_id: string }, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionDeliveryResult>('acknowledgeDelivery', title_id, data, { delivery_id }, undefined, options); }
  /** Title MCP token, never a runtime install token. Describes arguments, abilities, mutation semantics and provider facts. */
  static mcpCapabilities(title_id: string, options?: MicrotransactionRequestOptions) { return this.call<MicrotransactionCapabilities>('mcpCapabilities', title_id, undefined, {}, undefined, options); }
  /** Execute a discovered authorized operation directly. Legacy confirm is ignored and not forwarded. */
  static mcpOperation<T = Record<string, unknown>>(title_id: string, operation: MicrotransactionOperation, data: { arguments: Record<string, unknown>; confirm?: boolean }, options?: MicrotransactionRequestOptions) { return this.call<{ operation: MicrotransactionOperation; result: T }>('mcpOperation', title_id, { arguments: data.arguments }, { operation }, undefined, options); }

  private static call<T>(route: string, title_id: string, data?: object, ids: Record<string, string> = {}, params?: object, options?: MicrotransactionRequestOptions | MicrotransactionSessionOptions): AxiosPromise<MicrotransactionResponse<T>> {
    const replacements: Record<string, string> = {};
    for (const [key, value] of Object.entries({ title_id, ...ids })) {
      if (!value || !/^[A-Za-z0-9_.:-]+$/.test(value) || value === '.' || value === '..') throw new Error(`Invalid commerce route identifier: ${key}`);
      replacements[key] = encodeURIComponent(value);
    }
    const headers: Record<string, string> = {};
    if (options?.playerToken) headers.Authorization = `Bearer ${options.playerToken}`;
    if (options && 'checkoutToken' in options) {
      if (!options.checkoutToken) throw new Error('A checkout capability is required.');
      headers['X-Checkout-Token'] = options.checkoutToken;
    }
    return Requests.processRoute<T>(MicrotransactionsRoute.routes[route], data, replacements, params, {
      signal: options?.signal, timeout: options?.timeout, headers,
      // Every commerce route is title/environment-scoped. Never inject unrelated
      // global community context into strict management/player route inputs.
      excludeCommunityContext: true,
    });
  }
}

export default Microtransactions;
