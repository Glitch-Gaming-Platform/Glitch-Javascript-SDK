import { AxiosProgressEvent, AxiosPromise, AxiosRequestConfig } from 'axios';
export type MicrotransactionEnvironment = 'sandbox' | 'live';
export type MicrotransactionProductType = 'durable' | 'consumable' | 'currency' | 'bundle' | 'pass';
export type MicrotransactionCurrency = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | 'JPY' | 'BRL' | 'INR' | 'KRW';
export type MicrotransactionProductStatus = 'draft' | 'active' | 'archived';
export type MicrotransactionPaymentStatus = 'created' | 'action_required' | 'pending' | 'unknown' | 'paid' | 'failed' | 'canceled' | 'refund_pending' | 'partially_refunded' | 'refunded' | 'disputed' | 'quarantined';
export type MicrotransactionFulfillmentStatus = 'not_ready' | 'pending' | 'delivered' | 'retrying' | 'failed' | 'revoked' | 'partially_recovered';
export type MicrotransactionAbility = 'commerce:read' | 'commerce:write' | 'commerce:finance' | 'commerce:fulfill';
export type MicrotransactionErrorCode = 'authentication_required' | 'permission_denied' | 'human_approval_required' | 'not_found' | 'not_eligible' | 'quote_expired' | 'already_owned' | 'idempotency_conflict' | 'payment_unknown' | 'rate_limited' | 'invalid_revenue_configuration' | 'fulfillment_pending' | 'provider_unavailable';
/** The backend's JSON envelope; Axios returns this envelope in response.data. */
export interface MicrotransactionResponse<T> {
    data: T;
    message?: string;
    success?: boolean;
}
export interface MicrotransactionError {
    message: string;
    code?: MicrotransactionErrorCode | string;
    errors?: Record<string, string[]>;
}
export interface MicrotransactionRequestOptions extends Pick<AxiosRequestConfig, 'signal' | 'timeout'> {
    /** Optional short-lived commerce-only player token. Never a shipped developer/title token. */
    playerToken?: string;
}
export interface MicrotransactionSessionOptions extends MicrotransactionRequestOptions {
    /** Required limited checkout capability; sent only in X-Checkout-Token, never a query. */
    checkoutToken: string;
}
export interface MicrotransactionEnvironmentFilter {
    environment?: MicrotransactionEnvironment;
}
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
    localizations?: Record<string, {
        name: string;
        description?: string | null;
    }>;
    starts_at?: string | null;
    ends_at?: string | null;
    max_per_order?: number;
    /** Required for publishing/changing published goods; live approvals also enforced server-side. */
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
    provider: 'stripe' | 'xsolla';
    environment: MicrotransactionEnvironment;
    configured: boolean;
    approved: boolean;
    countries: string[];
    currencies: string[];
    channels: string[];
    reason?: string;
}
export interface MicrotransactionReadiness {
    status: 'disabled' | 'draft' | 'sandbox' | 'ready' | 'live' | 'degraded' | 'suspended';
    ready: boolean;
    blockers: string[];
    providers: MicrotransactionProvider[];
    commission_basis_points: 1200;
}
export interface MicrotransactionFramePolicy {
    frame_ancestors: string[];
    expires_at: string | null;
}
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
    webhook_url?: string | null;
    /** Required for policy/live changes; cannot replace recorded platform approval. */
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
    title: {
        id: string;
        name: string;
    };
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
    product: {
        id: string;
        sku: string | null;
        name: string | null;
        type: MicrotransactionProductType | null;
        version: number | null;
    };
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
    title: {
        id: string;
        name: string;
    };
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
export interface MicrotransactionHandoffClaimInput {
    claim_code: string;
    nonce: string;
    return_origin: string;
    checkout_session_id: string;
}
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
export interface MicrotransactionRefund {
    refund_id: string;
    status: string;
    order_id: string;
    refund_allocation?: 'pro_rata_all_grants';
}
export interface MicrotransactionRefundRequest {
    id: string;
    order_id: string;
    status: 'requested';
}
export interface MicrotransactionEarnings {
    currency_balances: Array<{
        currency: string;
        pending_minor: number;
        available_minor: number;
        paid_minor: number;
        commission_minor: number;
        provider_fees_minor: number;
        /** Transfer to a connected provider balance is NOT a confirmed bank payout. */
        transferred_minor?: number;
        bank_payout_status?: 'provider_managed_not_reconciled';
    }>;
    payouts_enabled: boolean;
    reserve_days?: number;
}
export type MicrotransactionOperation = 'settings.get' | 'settings.update' | 'products.list' | 'products.create' | 'products.update' | 'products.archive' | 'providers.list' | 'readiness.get' | 'orders.list' | 'orders.get' | 'earnings.get' | 'refunds.request' | 'deliveries.replay' | 'integration.get' | 'integration.verify';
export interface MicrotransactionOperationCapability {
    operation: MicrotransactionOperation;
    description: string;
    ability: MicrotransactionAbility;
    input_schema: Record<string, unknown>;
    requires_confirmation: boolean;
    requires_human_approval: boolean;
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
declare class Microtransactions {
    /**
     * Upload an image/video through existing Glitch Media processing with title
     * and actor ownership. Attach its returned Media ID to products/branding.
     * Does not create a social-library post, scheduler, or new payment product.
     */
    static uploadMedia(title_id: string, media: File | Blob, onUploadProgress?: (event: AxiosProgressEvent) => void, options?: Pick<AxiosRequestConfig, 'signal' | 'timeout'>): AxiosPromise<MicrotransactionResponse<MicrotransactionMedia>>;
    /** Same title-authorized Media pipeline using the caller's MCP credential and commerce:write ability. */
    static mcpUploadMedia(title_id: string, media: File | Blob, onUploadProgress?: (event: AxiosProgressEvent) => void, options?: Pick<AxiosRequestConfig, 'signal' | 'timeout'>): AxiosPromise<MicrotransactionResponse<MicrotransactionMedia>>;
    /** Admin settings, including immutable 1200bp commission and readiness blockers. */
    static settings(title_id: string, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionSettings>>;
    /** Atomic policy update. Sandbox/off by default. Cannot disable the final working revenue model. */
    static updateSettings(title_id: string, data: MicrotransactionSettingsInput, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionSettings>>;
    /** Read-only country/provider/approval readiness; never enables a provider. */
    static readiness(title_id: string, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionReadiness>>;
    /** Admin list includes drafts and archives. Player clients should use catalog(). */
    static listProducts(title_id: string, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<{
        products: MicrotransactionProduct[];
    }>>;
    /** Save a catalog product. Prices use integer minor units and attached media must belong to the title. */
    static createProduct(title_id: string, data: MicrotransactionProductInput, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionProduct>>;
    /** Update a product version. Existing order snapshots remain unchanged. */
    static updateProduct(title_id: string, product_id: string, data: Partial<MicrotransactionProductInput>, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionProduct>>;
    /** Archive, never delete financial history. Requires explicit confirmation. */
    static archiveProduct(title_id: string, product_id: string, data: {
        confirm: true;
    }, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionProduct>>;
    /** Public provider metadata only. Credentials and commercial approvals are platform-managed. */
    static providers(title_id: string, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<{
        providers: MicrotransactionProvider[];
    }>>;
    /** Admin read of separate-currency balances; pending is not withdrawable revenue. */
    static earnings(title_id: string, params?: MicrotransactionEnvironmentFilter, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionEarnings>>;
    /** Admin list, bounded to the server's most recent 100 redacted orders. */
    static listOrders(title_id: string, params?: MicrotransactionEnvironmentFilter, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<{
        orders: MicrotransactionOrder[];
    }>>;
    /** Owner JWT/scoped player token or title admin. An arbitrary order UUID grants no access. */
    static getOrder(title_id: string, order_id: string, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionOrder>>;
    /** Financial admin only; original provider and human approval. Omit amount_minor for remaining full refund; partial amounts are bounded and allocated pro rata. */
    static refundOrder(title_id: string, order_id: string, data: {
        reason: string;
        confirm: true;
        amount_minor?: number;
    }, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionRefund>>;
    /** Replay the same immutable event. Receiver must deduplicate event_id. This cannot mint goods. */
    static replayDelivery(title_id: string, delivery_id: string, data: {
        confirm: true;
    }, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<Record<string, unknown>>>;
    /** Public eligible catalog. Sandbox is restricted by backend environment/admin policy. */
    static catalog(title_id: string, params?: MicrotransactionCatalogFilter, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionCatalog>>;
    /** User-authenticated quote. Clients select product/quantity, never monetary values or seller accounts. */
    static createQuote(title_id: string, data: MicrotransactionPurchaseInput, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionQuote>>;
    /** Anonymous-safe opening step only. The hosted UI creates/logs into an account before payment. */
    static createCheckoutSession(title_id: string, data: MicrotransactionCheckoutSessionInput, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionCreatedCheckoutSession>>;
    /** Anonymous-safe inventory recovery. Opens an in-game hosted sign-in overlay, never creates a charge or requires the game's account JWT. */
    static createRestoreSession(title_id: string, data: {
        return_origin: string;
        nonce: string;
        environment: MicrotransactionEnvironment;
    }, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionCreatedCheckoutSession>>;
    /** Read the session using its limited capability. Cannot mutate user identity or declare payment. */
    static getCheckoutSession(title_id: string, session_id: string, options: MicrotransactionSessionOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionCheckoutSession>>;
    /** Anonymous, read-only embedding policy: server-approved frame ancestors only, no player/session capability data. */
    static getCheckoutFramePolicy(title_id: string, session_id: string, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionFramePolicy>>;
    /** Anonymous title-wide approved embedding policy for trusted hosted account pages; no player data. */
    static getFramePolicy(title_id: string, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionFramePolicy>>;
    /** Bind once to the existing authenticated account. Cannot reassign another player's purchase. */
    static authenticateCheckoutSession(title_id: string, session_id: string, options: MicrotransactionSessionOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionCheckoutSession>>;
    /** Bound-user JWT + session capability. Reuse the idempotency key after a network timeout. */
    static checkout(title_id: string, session_id: string, data: MicrotransactionCheckoutInput, options: MicrotransactionSessionOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionCheckoutResult>>;
    /** Query original provider; never creates another charge. Pending/unknown remains non-terminal. */
    static reconcileCheckoutSession(title_id: string, session_id: string, options: MicrotransactionSessionOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionOrder>>;
    /** Hosted checkout only. Server issues an expiring one-time game handoff after verified fulfillment. */
    static createHandoff(title_id: string, session_id: string, options: MicrotransactionSessionOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionHandoff>>;
    /** Game exchanges a verified popup code. Browser Origin must match return_origin; code is consumed once. */
    static claimHandoff(title_id: string, data: MicrotransactionHandoffClaimInput, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionHandoffClaim>>;
    /**
     * Authenticated hosted Glitch account only: restore a previous purchase into a
     * NEW nonce-bound session/handoff after the game's 15-minute token expires or
     * storage is cleared. Does not create another payment. Return to the game via
     * verified source/origin and a new bridge bound to event.checkout_session_id.
     */
    static restoreHandoff(title_id: string, data: {
        order_id: string;
        return_origin: string;
        nonce: string;
    }, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionHandoff>>;
    /** Record integration proof from a genuinely paid, fulfilled sandbox order with a claimed game handoff. */
    static verifyIntegration(title_id: string, data: {
        order_id: string;
        confirm: true;
    }, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionReadiness>>;
    /** Restore authoritative durable ownership/current consumable balances, never mutable cloud-save balances. */
    static listEntitlements(title_id: string, params?: MicrotransactionEnvironmentFilter, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<{
        entitlements: MicrotransactionEntitlement[];
    }>>;
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
    static listMyPurchases(title_id: string, filters?: MicrotransactionMyPurchasesFilters, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionMyPurchases>>;
    /** Atomic tracked spending. Reuse action_id for retries; a new gameplay action needs a new ID. */
    static consume(title_id: string, data: MicrotransactionConsumeInput, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<{
        entitlement: MicrotransactionEntitlement;
        replayed: boolean;
    }>>;
    /** Owning user asks support to review a refund. This does not execute payment reversal. */
    static requestRefund(title_id: string, data: {
        order_id: string;
        reason: string;
    }, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionRefundRequest>>;
    /** Trusted title server with commerce:fulfill or admin JWT acknowledges the immutable event. */
    static acknowledgeDelivery(title_id: string, delivery_id: string, data: {
        event_id: string;
    }, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<Record<string, unknown>>>;
    /** Title MCP token, never a runtime install token. Describes every argument/schema/ability/approval gate. */
    static mcpCapabilities(title_id: string, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<MicrotransactionCapabilities>>;
    /** Execute only an operation discovered in mcpCapabilities. confirm is not financial approval. */
    static mcpOperation<T = Record<string, unknown>>(title_id: string, operation: MicrotransactionOperation, data: {
        arguments: Record<string, unknown>;
        confirm?: boolean;
    }, options?: MicrotransactionRequestOptions): AxiosPromise<MicrotransactionResponse<{
        operation: MicrotransactionOperation;
        result: T;
    }>>;
    private static call;
}
export default Microtransactions;
