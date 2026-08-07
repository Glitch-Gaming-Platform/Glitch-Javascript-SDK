import axios, { AxiosPromise, AxiosProgressEvent } from 'axios';
import HostingRoute from '../routes/HostingRoute';
import Config from '../config/Config';
import Requests from '../util/Requests';
import Response from '../util/Response';

export type HostingPlanKey = 'free' | 'launch' | 'growth' | 'scale' | 'studio';
export type HostingMode = 'static' | 'server';
export type HostingDatabaseEngine = 'postgresql' | 'mysql' | 'azure_sql' | 'cosmos_nosql';
export type HostingDatabasePlan = 'sandbox' | 'launch' | 'growth' | 'scale' | 'dedicated';
export type HostingDeliveryChannel = 'glitch_store' | 'glitch_hosted_subdomain' | 'glitch_hosted_custom_domain' | 'external';

export interface HostingAccount {
  id: string;
  community_id: string;
  plan: HostingPlanKey;
  pending_plan?: HostingPlanKey | null;
  status: string;
  included_bandwidth_bytes: number;
  used_bandwidth_bytes: number;
  remaining_bandwidth_bytes: number;
  bandwidth_overage_enabled: boolean;
  bandwidth_spend_limit_cents?: number | null;
}

export interface HostingRelease {
  id: string;
  hosting_site_id: string;
  game_build_id?: string | null;
  version: string;
  status: 'uploading' | 'processing' | 'ready' | 'failed' | 'active' | 'inactive';
  source_type: 'upload' | 'cli' | 'game_build';
  entry_point: string;
  size_bytes: number;
  checksum?: string | null;
  error_message?: string | null;
  promoted_at?: string | null;
}

export interface HostingDomain {
  id: string;
  hostname: string;
  type: 'generated' | 'custom' | 'managed';
  status: 'pending_verification' | 'provisioning' | 'active' | 'failed' | 'expired';
  verification_record_type?: string | null;
  verification_record_name?: string | null;
  verification_record_value?: string | null;
  certificate_status?: string | null;
  billing_status?: 'active' | 'past_due' | 'unpaid' | 'cancelled' | null;
  annual_price_cents?: number | null;
  auto_renew: boolean;
}

export interface HostingDatabase {
  id: string;
  hosting_site_id: string;
  name: string;
  engine: HostingDatabaseEngine;
  plan: HostingDatabasePlan;
  status: 'awaiting_payment' | 'requested' | 'provisioning' | 'ready' | 'resizing' | 'restoring' | 'failed' | 'deleting' | 'deleted';
  deployment_model: 'shared' | 'dedicated' | 'serverless';
  azure_region: string;
  included_storage_bytes: number;
  current_storage_bytes: number;
  auto_grow_enabled: boolean;
  backup_retention_days: number;
  high_availability_enabled: boolean;
  endpoint?: string | null;
  port?: number | null;
  binding_name: string;
  billing_status: 'awaiting_payment' | 'active' | 'past_due' | 'unpaid' | 'cancelled' | 'expired' | 'failed';
  billing_active: boolean;
  last_error?: string | null;
}

export interface HostingSite {
  id: string;
  hosting_account_id: string;
  community_id: string;
  title_id: string;
  name: string;
  slug: string;
  community_slug: string;
  generated_hostname: string;
  url: string;
  mode: HostingMode;
  status: 'draft' | 'provisioning' | 'live' | 'limited' | 'failed' | 'disabled';
  server_mode_enabled: boolean;
  azure_region?: string | null;
  active_release?: HostingRelease | null;
  domains?: HostingDomain[];
  databases?: HostingDatabase[];
}

export interface CreateHostingSiteRequest {
  name: string;
  slug: string;
  mode: HostingMode;
  azure_region?: string;
}

export interface CreateHostingReleaseRequest {
  version: string;
  source_type: 'upload' | 'cli' | 'game_build';
  blob_path?: string;
  game_build_id?: string;
  entry_point?: string;
}

export interface CreateHostingDatabaseRequest {
  name: string;
  engine: HostingDatabaseEngine;
  plan: HostingDatabasePlan;
  azure_region: string;
  auto_grow_enabled?: boolean;
  high_availability_enabled?: boolean;
}

/**
 * Typed SDK for game website hosting, Azure database add-ons, domains, usage,
 * deployment instructions, and hosted-play attribution.
 */
class Hosting {
  public static catalog<T>(): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.catalog);
  }

  public static dashboard<T>(title_id: string): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.dashboard, undefined, { title_id });
  }

  public static channelAnalytics<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.channelAnalytics, undefined, { title_id }, params);
  }

  /** Start or apply a bandwidth-based Hosting plan, separate from Store distribution. */
  public static billingCheckout<T>(title_id: string, plan: HostingPlanKey): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.billingCheckout, { plan }, { title_id });
  }

  /** Confirm a paid Stripe Checkout session before provisioning its Azure resource. */
  public static confirmBillingCheckout<T>(title_id: string, checkout_session_id: string): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.confirmBillingCheckout, { checkout_session_id }, { title_id });
  }

  public static createSite<T>(title_id: string, data: CreateHostingSiteRequest): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.createSite, data, { title_id });
  }

  public static updateSite<T>(title_id: string, site_id: string, data: Partial<CreateHostingSiteRequest> & Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.updateSite, data, { title_id, site_id });
  }

  public static createUploadUrl<T>(title_id: string, site_id: string): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.uploadUrl, {}, { title_id, site_id });
  }

  /** Upload directly to the short-lived Azure URL returned by createUploadUrl. */
  public static uploadBuild(uploadUrl: string, file: Blob, requiredHeaders: Record<string, string> = {}, onUploadProgress?: (event: AxiosProgressEvent) => void): AxiosPromise<void> {
    return axios.put(uploadUrl, file, {
      headers: { 'x-ms-blob-type': 'BlockBlob', 'Content-Type': 'application/zip', ...requiredHeaders },
      onUploadProgress,
    });
  }

  public static releases<T>(title_id: string, site_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.releases, undefined, { title_id, site_id }, params);
  }

  public static createRelease<T>(title_id: string, site_id: string, data: CreateHostingReleaseRequest): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.createRelease, data, { title_id, site_id });
  }

  public static promoteRelease<T>(title_id: string, site_id: string, release_id: string): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.promoteRelease, {}, { title_id, site_id, release_id });
  }

  public static connectDomain<T>(title_id: string, site_id: string, hostname: string): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.connectDomain, { hostname }, { title_id, site_id });
  }

  public static verifyDomain<T>(title_id: string, site_id: string, domain_id: string): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.verifyDomain, {}, { title_id, site_id, domain_id });
  }

  public static checkDomain<T>(hostname: string): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.checkDomain, { hostname });
  }

  public static purchaseDomain<T>(title_id: string, site_id: string, data: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.purchaseDomain, data, { title_id, site_id });
  }

  public static aiInstructions<T>(title_id: string, site_id: string, data: Record<string, any> = {}): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.aiInstructions, data, { title_id, site_id });
  }

  public static resolve<T>(hostname: string, gatewayToken?: string): AxiosPromise<Response<T>> {
    if (!gatewayToken) {
      return Requests.processRoute(HostingRoute.routes.resolve, undefined, undefined, { hostname });
    }

    const base = (Config.getBaseUrl() || '').replace(/\/+$/, '');
    const path = HostingRoute.routes.resolve.url.replace(/^\/+/, '');
    return axios.get(`${base}/${path}`, {
      params: { hostname },
      headers: { 'X-Glitch-Hosting-Gateway': gatewayToken },
    });
  }

  public static startPlaySession<T>(data: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.startPlaySession, data);
  }

  public static heartbeatPlaySession<T>(session_id: string, sessionToken: string): AxiosPromise<Response<T>> {
    const path = HostingRoute.routes.heartbeatPlaySession.url.replace('{session_id}', session_id);
    const base = (Config.getBaseUrl() || '').replace(/\/+$/, '');
    return axios.post(`${base}/${path.replace(/^\/+/, '')}`, {}, { headers: { Authorization: `Bearer ${sessionToken}` } });
  }

  public static databases<T>(title_id: string, site_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.databases, undefined, { title_id, site_id }, params);
  }

  public static createDatabase<T>(title_id: string, site_id: string, data: CreateHostingDatabaseRequest): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.createDatabase, data, { title_id, site_id });
  }

  public static database<T>(title_id: string, site_id: string, database_id: string): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.database, undefined, { title_id, site_id, database_id });
  }

  public static updateDatabase<T>(title_id: string, site_id: string, database_id: string, data: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.updateDatabase, data, { title_id, site_id, database_id });
  }

  public static retryDatabase<T>(title_id: string, site_id: string, database_id: string): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.retryDatabase, {}, { title_id, site_id, database_id });
  }

  public static deleteDatabase<T>(title_id: string, site_id: string, database_id: string, confirmation: string): AxiosPromise<Response<T>> {
    return Requests.processRoute(HostingRoute.routes.deleteDatabase, undefined, { title_id, site_id, database_id }, { confirmation });
  }
}

export default Hosting;
