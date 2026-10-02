import { AxiosPromise, AxiosRequestConfig } from 'axios';
import PreordersRoute from '../routes/PreordersRoute';
import Requests from '../util/Requests';
import Response from '../util/Response';

export type PreorderFulfillmentType = 'glitch_license' | 'platform_key';
export type PreorderOfferStatus = 'draft' | 'active' | 'paused' | 'ended' | 'archived';
export type PreorderDerivedState = 'draft' | 'available' | 'scheduled' | 'sold_out' | 'paused' | 'ended' | 'released' | 'archived';
export type PreorderPaymentStatus = 'created' | 'requires_action' | 'processing' | 'paid' | 'failed' | 'canceled' | 'refunded' | 'disputed' | 'unknown';
export type PreorderFulfillmentStatus = 'waiting_for_release' | 'ready' | 'processing' | 'fulfilled' | 'blocked_missing_build' | 'blocked_missing_key' | 'canceled' | 'failed';

export interface PreorderRequestOptions extends Pick<AxiosRequestConfig, 'signal' | 'timeout'> {}

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

class Preorders {
  public static catalog(title_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderCatalog>> {
    return Requests.processRoute(PreordersRoute.routes.catalog, undefined, { title_id }, undefined, options);
  }

  public static purchase(title_id: string, offer_id: string, data: PreorderPurchaseInput, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOrder>> {
    return Requests.processRoute(PreordersRoute.routes.purchase, data, { title_id, offer_id }, undefined, options);
  }

  public static myOrders(title_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<{ orders: PreorderOrder[] }>> {
    return Requests.processRoute(PreordersRoute.routes.myOrders, undefined, { title_id }, undefined, options);
  }

  public static order(title_id: string, order_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOrder>> {
    return Requests.processRoute(PreordersRoute.routes.order, undefined, { title_id, order_id }, undefined, options);
  }

  public static refundMine(title_id: string, order_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOrder>> {
    return Requests.processRoute(PreordersRoute.routes.refundMine, {}, { title_id, order_id }, undefined, options);
  }

  public static resendMine(title_id: string, order_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<{ resent: boolean }>> {
    return Requests.processRoute(PreordersRoute.routes.resendMine, {}, { title_id, order_id }, undefined, options);
  }

  public static settings(title_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderSettings>> {
    return Requests.processRoute(PreordersRoute.routes.settings, undefined, { title_id }, undefined, options);
  }

  public static updateSettings(title_id: string, data: Partial<Pick<PreorderSettings, 'enabled' | 'timezone'>>, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderSettings>> {
    return Requests.processRoute(PreordersRoute.routes.updateSettings, data, { title_id }, undefined, options);
  }

  public static offers(title_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<{ offers: PreorderOffer[] }>> {
    return Requests.processRoute(PreordersRoute.routes.offers, undefined, { title_id }, undefined, options);
  }

  public static offer(title_id: string, offer_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOffer>> {
    return Requests.processRoute(PreordersRoute.routes.offer, undefined, { title_id, offer_id }, undefined, options);
  }

  public static createOffer(title_id: string, data: PreorderOfferInput, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOffer>> {
    return Requests.processRoute(PreordersRoute.routes.createOffer, data, { title_id }, undefined, options);
  }

  public static updateOffer(title_id: string, offer_id: string, data: PreorderOfferInput, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOffer>> {
    return Requests.processRoute(PreordersRoute.routes.updateOffer, data, { title_id, offer_id }, undefined, options);
  }

  public static activateOffer(title_id: string, offer_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOffer>> {
    return Requests.processRoute(PreordersRoute.routes.activateOffer, {}, { title_id, offer_id }, undefined, options);
  }

  public static pauseOffer(title_id: string, offer_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOffer>> {
    return Requests.processRoute(PreordersRoute.routes.pauseOffer, {}, { title_id, offer_id }, undefined, options);
  }

  public static archiveOffer(title_id: string, offer_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOffer>> {
    return Requests.processRoute(PreordersRoute.routes.archiveOffer, {}, { title_id, offer_id }, undefined, options);
  }

  public static inventory(title_id: string, offer_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderInventory>> {
    return Requests.processRoute(PreordersRoute.routes.inventory, undefined, { title_id, offer_id }, undefined, options);
  }

  public static importKeys(title_id: string, offer_id: string, keys: string[], options?: PreorderRequestOptions): AxiosPromise<Response<{ inserted: number; duplicate_in_upload: number; duplicate_existing: number; invalid: number; inventory: PreorderInventory }>> {
    return Requests.processRoute(PreordersRoute.routes.importKeys, { keys }, { title_id, offer_id }, undefined, options);
  }

  public static importKeyFile<T>(title_id: string, offer_id: string, file: File | Blob): AxiosPromise<Response<T>> {
    const url = PreordersRoute.routes.importKeys.url
      .replace('{title_id}', title_id)
      .replace('{offer_id}', offer_id);
    return Requests.uploadFile<T>(url, 'key_file', file, {}, undefined, undefined, { excludeCommunityContext: true });
  }

  public static retireKey(title_id: string, offer_id: string, key_id: string, reason: string, options?: PreorderRequestOptions): AxiosPromise<Response<{ id: string; status: string; masked_suffix: string }>> {
    return Requests.processRoute(PreordersRoute.routes.retireKey, { reason }, { title_id, offer_id, key_id }, undefined, options);
  }

  public static adminOrders(title_id: string, filters?: PreorderAdminOrderFilters, options?: PreorderRequestOptions): AxiosPromise<Response<{ orders: PreorderOrder[]; pagination: Record<string, number> }>> {
    return Requests.processRoute(PreordersRoute.routes.adminOrders, undefined, { title_id }, filters, options);
  }

  public static readiness(title_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderReadiness>> {
    return Requests.processRoute(PreordersRoute.routes.readiness, undefined, { title_id }, undefined, options);
  }

  public static adminOrderAction(title_id: string, order_id: string, action: PreorderAdminOrderAction, options?: PreorderRequestOptions): AxiosPromise<Response<PreorderOrder>> {
    return Requests.processRoute(PreordersRoute.routes.adminOrderAction, {}, { title_id, order_id, action }, undefined, options);
  }

  public static mcpCapabilities<T = unknown>(title_id: string, options?: PreorderRequestOptions): AxiosPromise<Response<T>> {
    return Requests.processRoute(PreordersRoute.routes.mcpCapabilities, undefined, { title_id }, undefined, options);
  }

  public static mcpOperation<T = unknown>(title_id: string, operation: string, argumentsData: Record<string, unknown> = {}, options?: PreorderRequestOptions): AxiosPromise<Response<T>> {
    return Requests.processRoute(PreordersRoute.routes.mcpOperation, { arguments: argumentsData }, { title_id, operation }, undefined, options);
  }
}

export default Preorders;
