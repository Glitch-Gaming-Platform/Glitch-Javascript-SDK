import Route from './interface';
import HTTP_METHODS from '../constants/HttpMethods';

/** Route catalog for Azure-backed game website hosting. */
class HostingRoute {
  public static routes: { [key: string]: Route } = {
    catalog: { url: '/hosting/catalog', method: HTTP_METHODS.GET },
    dashboard: { url: '/titles/{title_id}/hosting', method: HTTP_METHODS.GET },
    channelAnalytics: { url: '/titles/{title_id}/hosting/analytics/channels', method: HTTP_METHODS.GET },
    billingCheckout: { url: '/titles/{title_id}/hosting/billing/checkout', method: HTTP_METHODS.POST },
    confirmBillingCheckout: { url: '/titles/{title_id}/hosting/billing/confirm', method: HTTP_METHODS.POST },
    createSite: { url: '/titles/{title_id}/hosting/sites', method: HTTP_METHODS.POST },
    updateSite: { url: '/titles/{title_id}/hosting/sites/{site_id}', method: HTTP_METHODS.PUT },
    uploadUrl: { url: '/titles/{title_id}/hosting/sites/{site_id}/upload-url', method: HTTP_METHODS.POST },
    releases: { url: '/titles/{title_id}/hosting/sites/{site_id}/releases', method: HTTP_METHODS.GET },
    createRelease: { url: '/titles/{title_id}/hosting/sites/{site_id}/releases', method: HTTP_METHODS.POST },
    promoteRelease: { url: '/titles/{title_id}/hosting/sites/{site_id}/releases/{release_id}/promote', method: HTTP_METHODS.POST },
    connectDomain: { url: '/titles/{title_id}/hosting/sites/{site_id}/domains', method: HTTP_METHODS.POST },
    verifyDomain: { url: '/titles/{title_id}/hosting/sites/{site_id}/domains/{domain_id}/verify', method: HTTP_METHODS.POST },
    checkDomain: { url: '/hosting/domains/check', method: HTTP_METHODS.POST },
    purchaseDomain: { url: '/titles/{title_id}/hosting/sites/{site_id}/domains/purchase', method: HTTP_METHODS.POST },
    aiInstructions: { url: '/titles/{title_id}/hosting/sites/{site_id}/ai-instructions', method: HTTP_METHODS.POST },
    resolve: { url: '/hosting/resolve', method: HTTP_METHODS.GET },
    startPlaySession: { url: '/hosting/play-sessions', method: HTTP_METHODS.POST },
    heartbeatPlaySession: { url: '/hosting/play-sessions/{session_id}/heartbeat', method: HTTP_METHODS.POST },
    databases: { url: '/titles/{title_id}/hosting/sites/{site_id}/databases', method: HTTP_METHODS.GET },
    createDatabase: { url: '/titles/{title_id}/hosting/sites/{site_id}/databases', method: HTTP_METHODS.POST },
    database: { url: '/titles/{title_id}/hosting/sites/{site_id}/databases/{database_id}', method: HTTP_METHODS.GET },
    updateDatabase: { url: '/titles/{title_id}/hosting/sites/{site_id}/databases/{database_id}', method: HTTP_METHODS.PUT },
    retryDatabase: { url: '/titles/{title_id}/hosting/sites/{site_id}/databases/{database_id}/retry', method: HTTP_METHODS.POST },
    deleteDatabase: { url: '/titles/{title_id}/hosting/sites/{site_id}/databases/{database_id}', method: HTTP_METHODS.DELETE },
  };
}

export default HostingRoute;
