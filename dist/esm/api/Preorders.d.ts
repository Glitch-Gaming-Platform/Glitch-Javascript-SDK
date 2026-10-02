import { AxiosPromise, AxiosRequestConfig } from 'axios';
import Response from '../util/Response';
export type PreorderFulfillmentType = 'glitch_license' | 'platform_key';
export type PreorderOfferStatus = 'draft' | 'active' | 'paused' | 'ended' | 'archived';
export type PreorderDerivedState = 'draft' | 'available' | 'scheduled' | 'sold_out' | 'paused' | 'ended' | 'released' | 'archived';
export type PreorderPaymentStatus = 'created' | 'requires_action' | 'processing' | 'paid' | 'failed' | 'canceled' | 'refunded' | 'disputed' | 'unknown';
export type PreorderFulfillmentStatus = 'waiting_for_release' | 'ready' | 'processing' | 'fulfilled' | 'blocked_missing_build' | 'blocked_missing_key' | 'canceled' | 'failed';
export interface PreorderRequestOptions extends Pick<AxiosRequestConfig, 'signal' | 'timeout'> {
}
export interface PreorderPrice {
    country: string;
    currency: string;
    amount_minor: number;
}
export interface PreorderInventory {
    available: number;
    reserved: number;
    delivered: number;
    retired: number;
    total: number;
}
export interface PreorderOfferInput {
    sku: string;
    platform_code: string;
    platform_label: string;
    fulfillment_type: PreorderFulfillmentType;
    status?: PreorderOfferStatus;
    sales_start_at?: string | null;
    sales_end_at?: string | null;
    release_at: string;
    limit_total?: number | null;
    max_per_user?: number;
    custom_message?: string | null;
    post_purchase_url?: string | null;
    redeem_url?: string | null;
    prices: PreorderPrice[];
}
export interface PreorderOffer extends Omit<PreorderOfferInput, 'status'> {
    id: string;
    title_id: string;
    status: PreorderOfferStatus;
    state: PreorderDerivedState;
    sold: number;
    reserved_or_paid: number;
    remaining: number | null;
    revision: number;
    inventory?: PreorderInventory;
    owned_count?: number;
}
export interface PreorderSettings {
    enabled: boolean;
    timezone: string;
    readiness?: PreorderReadiness;
}
export interface PreorderCatalog {
    enabled: boolean;
    timezone?: string;
    offers: PreorderOffer[];
}
export interface PreorderPurchaseInput {
    country?: string;
    currency?: string;
    idempotency_key: string;
    payment_method_id?: string;
    payment_intent_id?: string;
}
export interface PreorderOrder {
    id: string;
    title_id: string;
    offer_id: string;
    user_id?: string;
    platform_code: string;
    platform_label: string;
    fulfillment_type: PreorderFulfillmentType;
    payment_status: PreorderPaymentStatus;
    fulfillment_status: PreorderFulfillmentStatus;
    currency: string;
    subtotal_minor: number;
    tax_minor: number;
    total_minor: number;
    promised_release_at: string;
    current_release_at: string;
    paid_at?: string;
    fulfilled_at?: string;
    custom_message?: string;
    post_purchase_url?: string;
    redeem_url?: string;
    platform_key?: string;
    key_masked_suffix?: string;
    purchase_email?: string;
    provider_reference?: string;
    commission_minor?: number;
    developer_share_minor?: number;
    requires_action?: boolean;
    client_secret?: string;
    payment_intent_id?: string;
}
export interface PreorderReadinessIssue {
    offer_id: string;
    code: string;
    [key: string]: unknown;
}
export interface PreorderReadiness {
    enabled: boolean;
    ready: boolean;
    blockers: PreorderReadinessIssue[];
    warnings: PreorderReadinessIssue[];
}
export interface PreorderAdminOrderFilters {
    offer_id?: string;
    payment_status?: string;
    fulfillment_status?: string;
    per_page?: number;
    page?: number;
}
export type PreorderAdminOrderAction = 'refund' | 'reconcile' | 'fulfill' | 'resend_receipt' | 'resend_access';
declare class Preorders {
    static catalog(title_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderCatalog>>;
    static purchase(title_id: string, offer_id: string, data: PreorderPurchaseInput, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOrder>>;
    static myOrders(title_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<{
        orders: PreorderOrder[];
    }>>;
    static order(title_id: string, order_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOrder>>;
    static refundMine(title_id: string, order_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOrder>>;
    static resendMine(title_id: string, order_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<{
        resent: boolean;
    }>>;
    static settings(title_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderSettings>>;
    static updateSettings(title_id: string, data: Partial<Pick<PreorderSettings, 'enabled' | 'timezone'>>, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderSettings>>;
    static offers(title_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<{
        offers: PreorderOffer[];
    }>>;
    static offer(title_id: string, offer_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOffer>>;
    static createOffer(title_id: string, data: PreorderOfferInput, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOffer>>;
    static updateOffer(title_id: string, offer_id: string, data: PreorderOfferInput, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOffer>>;
    static activateOffer(title_id: string, offer_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOffer>>;
    static pauseOffer(title_id: string, offer_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOffer>>;
    static archiveOffer(title_id: string, offer_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOffer>>;
    static inventory(title_id: string, offer_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderInventory>>;
    static importKeys(title_id: string, offer_id: string, keys: string[], options?: PreorderRequestOptions): AxiosPromise<Response<{
        inserted: number;
        duplicate_in_upload: number;
        duplicate_existing: number;
        invalid: number;
        inventory: PreorderInventory;
    }>>;
    static importKeyFile<T>(title_id: string, offer_id: string, file: File | Blob): AxiosPromise<Response<T>>;
    static retireKey(title_id: string, offer_id: string, key_id: string, reason: string, options?: PreorderRequestOptions): AxiosPromise<Response<{
        id: string;
        status: string;
        masked_suffix: string;
    }>>;
    static adminOrders(title_id: string, filters?: PreorderAdminOrderFilters, options?: PreorderRequestOptions): AxiosPromise<Response<{
        orders: PreorderOrder[];
        pagination: Record<string, number>;
    }>>;
    static readiness(title_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderReadiness>>;
    static adminOrderAction(title_id: string, order_id: string, action: PreorderAdminOrderAction, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOrder>>;
    static mcpCapabilities<T = unknown>(title_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<T>>;
    static mcpOperation<T = unknown>(title_id: string, operation: string, argumentsData?: Record<string, unknown>, options?: PreorderRequestOptions): AxiosPromise<Response<T>>;
}
export default Preorders;
