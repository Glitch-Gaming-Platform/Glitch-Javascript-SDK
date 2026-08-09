import { AxiosPromise, AxiosProgressEvent } from 'axios';
import Response from '../util/Response';
export type HostingPlanKey = 'free' | 'launch' | 'growth' | 'scale' | 'studio';
export type HostingMode = 'static' | 'server';
export type HostingDatabaseEngine = 'postgresql' | 'mysql' | 'azure_sql' | 'cosmos_nosql' | 'redis';
export type HostingDatabasePlan = 'sandbox' | 'launch' | 'growth' | 'scale' | 'dedicated' | 'cache_sandbox' | 'cache_launch' | 'cache_growth' | 'cache_scale';
export type HostingServiceRole = 'web' | 'api' | 'game' | 'realtime' | 'simulation' | 'worker' | 'scheduled';
export type HostingServiceVisibility = 'public' | 'internal' | 'none';
export type HostingCapacityModel = 'singleton' | 'replicated' | 'serverless';
export type HostingDeliveryChannel = 'glitch_store' | 'glitch_hosted_subdomain' | 'glitch_hosted_custom_domain' | 'external';
export type HostingBillingProvider = 'direct' | 'microsoft_marketplace' | 'aws_marketplace';
export interface HostingAccount {
    id: string;
    community_id: string;
    plan: HostingPlanKey;
    pending_plan?: HostingPlanKey | null;
    status: string;
    billing_provider: HostingBillingProvider;
    microsoft_marketplace_subscription_id?: string | null;
    aws_marketplace_subscription_id?: string | null;
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
    source_type: 'upload' | 'cli' | 'game_build' | 'service_stack';
    entry_point: string;
    size_bytes: number;
    checksum?: string | null;
    error_message?: string | null;
    promoted_at?: string | null;
    service_deployments?: HostingServiceDeployment[];
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
    deployment_model: 'shared' | 'dedicated' | 'serverless' | 'managed_cache';
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
    billing_provider: HostingBillingProvider;
    billing_active: boolean;
    last_error?: string | null;
}
export interface HostingDatabaseCredentials {
    database_id: string;
    name: string;
    engine: HostingDatabaseEngine;
    binding_name: string;
    connection_string: string;
    connection: {
        driver?: string;
        host?: string;
        endpoint?: string;
        port?: number;
        database?: string;
        username?: string;
        password?: string;
        key?: string;
        tls: boolean;
    };
    revealed_at: string;
    /** UI safety timer only; the database credential itself does not expire after this interval. */
    hide_after_seconds: number;
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
    services?: HostingService[];
    runtime_routes?: Array<{
        path_prefix: string;
        service: string;
        runtime_origin: string;
    }>;
}
export interface HostingServiceVolume {
    name: string;
    mount_path: string;
    size_gb: number;
    access_mode?: 'ReadOnly' | 'ReadWrite';
}
export interface HostingServiceDeployment {
    id: string;
    hosting_service_id: string;
    hosting_release_id: string;
    game_build_id?: string | null;
    version: string;
    status: 'queued' | 'deploying' | 'ready' | 'active' | 'inactive' | 'failed';
    image?: string | null;
    public_url?: string | null;
    error_message?: string | null;
    ready_at?: string | null;
    promoted_at?: string | null;
}
export interface HostingService {
    id: string;
    hosting_site_id: string;
    name: string;
    slug: string;
    role: HostingServiceRole;
    runtime: 'node' | 'python' | 'rust' | 'container';
    visibility: HostingServiceVisibility;
    status: 'draft' | 'deploying' | 'active' | 'disabled' | 'failed';
    is_primary: boolean;
    target_port?: number | null;
    transport: 'http' | 'http2' | 'tcp';
    health_check_path?: string | null;
    startup_check_path?: string | null;
    readiness_check_path?: string | null;
    liveness_check_path?: string | null;
    capacity_model: HostingCapacityModel;
    container_cpu: number;
    container_memory_mb: number;
    min_replicas: number;
    max_replicas: number;
    schedule_cron?: string | null;
    termination_grace_seconds: number;
    depends_on: string[];
    public_paths: string[];
    volumes: HostingServiceVolume[];
    database_bindings: string[];
    secret_names: string[];
    active_deployment?: HostingServiceDeployment | null;
    deployments?: HostingServiceDeployment[];
}
export interface HostingServiceDefinition {
    name?: string;
    slug: string;
    role?: HostingServiceRole;
    runtime?: 'node' | 'python' | 'rust' | 'container';
    visibility?: HostingServiceVisibility;
    is_primary?: boolean;
    target_port?: number;
    transport?: 'http' | 'http2' | 'tcp';
    health_check_path?: string;
    startup_check_path?: string;
    readiness_check_path?: string;
    liveness_check_path?: string;
    capacity_model?: HostingCapacityModel;
    container_cpu?: number;
    container_memory_mb?: number;
    min_replicas?: number;
    max_replicas?: number;
    schedule_cron?: string;
    termination_grace_seconds?: number;
    depends_on?: string[];
    public_paths?: string[];
    volumes?: HostingServiceVolume[];
    environment?: Record<string, string | number | boolean | null>;
    database_bindings?: string[];
    configuration?: Record<string, unknown>;
    command?: string[];
    arguments?: string[];
    game_build_id?: string;
}
export interface HostingServiceStackRequest {
    preset?: 'single_server' | 'world_of_claudecraft' | 'web_and_api' | 'authoritative_world' | 'biomes_style';
    game_build_id?: string;
    builds?: Record<string, string>;
    services?: HostingServiceDefinition[];
}
export interface ApplyHostingServiceStackRequest extends HostingServiceStackRequest {
    version: string;
    test?: {
        service: string;
        command: string[];
    };
    migration?: {
        service: string;
        command: string[];
    };
}
export interface HostingServiceEstimate {
    billing_provider: HostingBillingProvider;
    estimated_monthly_floor_cents: number;
    estimated_monthly_floor_dollars: number;
    services: Array<Record<string, unknown>>;
    rates: {
        vcpu_hour_cents: number;
        memory_gib_hour_cents: number;
        requests_million_cents: number;
        persistent_storage_gib_month_cents: number;
    };
    note: string;
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
export interface HostingMarketplaceSubscription {
    id: string;
    marketplace_subscription_id: string;
    subscription_name?: string | null;
    offer_id: string;
    plan_id: string;
    plan_key: HostingPlanKey;
    status: 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed';
    quantity: number;
    community_id?: string | null;
    is_test: boolean;
    is_free_trial: boolean;
    auto_renew: boolean;
    term_starts_at?: string | null;
    term_ends_at?: string | null;
    activated_at?: string | null;
}
export interface HostingAwsMarketplaceSubscription {
    id: string;
    customer_aws_account_id?: string | null;
    plan_dimension?: string | null;
    plan_key?: Exclude<HostingPlanKey, 'free'> | null;
    status: 'PendingRegistration' | 'PendingEntitlement' | 'Subscribed' | 'Unsubscribed';
    entitlement_value: number;
    entitlement_expires_at?: string | null;
    community_id?: string | null;
    hosting_account_id?: string | null;
    activated_at?: string | null;
    last_synced_at?: string | null;
    manage_url: string;
}
/**
 * Typed SDK for game website hosting, Azure database add-ons, domains, usage,
 * deployment instructions, and hosted-play attribution.
 */
declare class Hosting {
    static catalog<T>(): AxiosPromise<Response<T>>;
    static dashboard<T>(title_id: string): AxiosPromise<Response<T>>;
    static channelAnalytics<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Start or apply a bandwidth-based Hosting plan, separate from Store distribution. */
    static billingCheckout<T>(title_id: string, plan: HostingPlanKey): AxiosPromise<Response<T>>;
    /** Confirm a paid Stripe Checkout session before provisioning its Azure resource. */
    static confirmBillingCheckout<T>(title_id: string, checkout_session_id: string): AxiosPromise<Response<T>>;
    /** Resolve the one-hour purchase token passed to Glitch by Microsoft Marketplace. */
    static resolveMarketplacePurchase<T>(token: string): AxiosPromise<Response<T>>;
    /** Link a resolved Microsoft Marketplace subscription to a billable Glitch business account. */
    static activateMarketplaceSubscription<T>(subscription_id: string, community_id: string): AxiosPromise<Response<T>>;
    /** Retrieve safe Microsoft Marketplace entitlement and lifecycle status. */
    static marketplaceSubscription<T>(subscription_id: string): AxiosPromise<Response<T>>;
    /** Claim the one-time Glitch code created after AWS ResolveCustomer succeeds. */
    static resolveAwsMarketplacePurchase<T>(activation_code: string): AxiosPromise<Response<T>>;
    /** Connect a paid AWS Marketplace contract to one Glitch business account. */
    static activateAwsMarketplaceSubscription<T>(subscription_id: string, community_id: string): AxiosPromise<Response<T>>;
    /** Refresh and retrieve the safe AWS Marketplace entitlement state. */
    static awsMarketplaceSubscription<T>(subscription_id: string): AxiosPromise<Response<T>>;
    static createSite<T>(title_id: string, data: CreateHostingSiteRequest): AxiosPromise<Response<T>>;
    static updateSite<T>(title_id: string, site_id: string, data: Partial<CreateHostingSiteRequest> & Record<string, any>): AxiosPromise<Response<T>>;
    static createUploadUrl<T>(title_id: string, site_id: string): AxiosPromise<Response<T>>;
    /** Upload directly to the short-lived Azure URL returned by createUploadUrl. */
    static uploadBuild(uploadUrl: string, file: Blob, requiredHeaders?: Record<string, string>, onUploadProgress?: (event: AxiosProgressEvent) => void): AxiosPromise<void>;
    static releases<T>(title_id: string, site_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static createRelease<T>(title_id: string, site_id: string, data: CreateHostingReleaseRequest): AxiosPromise<Response<T>>;
    static promoteRelease<T>(title_id: string, site_id: string, release_id: string): AxiosPromise<Response<T>>;
    static connectDomain<T>(title_id: string, site_id: string, hostname: string): AxiosPromise<Response<T>>;
    static verifyDomain<T>(title_id: string, site_id: string, domain_id: string): AxiosPromise<Response<T>>;
    static checkDomain<T>(hostname: string): AxiosPromise<Response<T>>;
    static purchaseDomain<T>(title_id: string, site_id: string, data: Record<string, any>): AxiosPromise<Response<T>>;
    static aiInstructions<T>(title_id: string, site_id: string, data?: Record<string, any>): AxiosPromise<Response<T>>;
    static services<T = HostingService[]>(title_id: string, site_id: string): AxiosPromise<Response<T>>;
    /** Calculate the always-on floor without creating resources or charges. */
    static estimateServices<T = HostingServiceEstimate>(title_id: string, site_id: string, data: HostingServiceStackRequest): AxiosPromise<Response<T>>;
    /** Queue an immutable multi-service release. Publishing remains a separate operation. */
    static applyServices<T>(title_id: string, site_id: string, data: ApplyHostingServiceStackRequest): AxiosPromise<Response<T>>;
    /** Store or rotate a secret. The API never returns the value. Interactive administrators only. */
    static putServiceSecret<T>(title_id: string, site_id: string, service_id: string, name: string, value: string): AxiosPromise<Response<T>>;
    static deleteServiceSecret<T>(title_id: string, site_id: string, service_id: string, name: string): AxiosPromise<Response<T>>;
    static resolve<T>(hostname: string, gatewayToken?: string): AxiosPromise<Response<T>>;
    static startPlaySession<T>(data: Record<string, any>): AxiosPromise<Response<T>>;
    static heartbeatPlaySession<T>(session_id: string, sessionToken: string): AxiosPromise<Response<T>>;
    static databases<T>(title_id: string, site_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static createDatabase<T>(title_id: string, site_id: string, data: CreateHostingDatabaseRequest): AxiosPromise<Response<T>>;
    static database<T>(title_id: string, site_id: string, database_id: string): AxiosPromise<Response<T>>;
    /**
     * Reveal credentials to a signed-in business billing administrator after an
     * exact database-name confirmation. Hosting and MCP tokens are rejected.
     */
    static databaseCredentials<T = HostingDatabaseCredentials>(title_id: string, site_id: string, database_id: string, confirmation: string): AxiosPromise<Response<T>>;
    static updateDatabase<T>(title_id: string, site_id: string, database_id: string, data: Record<string, any>): AxiosPromise<Response<T>>;
    static retryDatabase<T>(title_id: string, site_id: string, database_id: string): AxiosPromise<Response<T>>;
    static deleteDatabase<T>(title_id: string, site_id: string, database_id: string, confirmation: string): AxiosPromise<Response<T>>;
}
export default Hosting;
