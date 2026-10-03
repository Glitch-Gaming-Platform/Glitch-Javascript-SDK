import Route from './interface';
import HTTP_METHODS from '../constants/HttpMethods';

class PreordersRoute {
  public static routes: { [key: string]: Route } = {
    hostedCatalog: { url: '/hosting/preorders/catalog', method: HTTP_METHODS.GET },
    createHostedSession: { url: '/hosting/preorders/checkout-sessions', method: HTTP_METHODS.POST },
    createHostedRestoreSession: { url: '/hosting/preorders/restore-sessions', method: HTTP_METHODS.POST },
    hostedSession: { url: '/titles/{title_id}/preorders/hosted/checkout-sessions/{session_id}', method: HTTP_METHODS.GET },
    hostedMine: { url: '/titles/{title_id}/preorders/hosted/checkout-sessions/{session_id}/me', method: HTTP_METHODS.GET },
    hostedAuthenticate: { url: '/titles/{title_id}/preorders/hosted/checkout-sessions/{session_id}/authenticate', method: HTTP_METHODS.POST },
    hostedCheckout: { url: '/titles/{title_id}/preorders/hosted/checkout-sessions/{session_id}/checkout', method: HTTP_METHODS.POST },
    hostedReconcile: { url: '/titles/{title_id}/preorders/hosted/checkout-sessions/{session_id}/reconcile', method: HTTP_METHODS.POST },
    hostedRetry: { url: '/titles/{title_id}/preorders/hosted/checkout-sessions/{session_id}/retry', method: HTTP_METHODS.POST },
    hostedRefund: { url: '/titles/{title_id}/preorders/hosted/checkout-sessions/{session_id}/refund', method: HTTP_METHODS.POST },
    hostedResendAccess: { url: '/titles/{title_id}/preorders/hosted/checkout-sessions/{session_id}/resend-access', method: HTTP_METHODS.POST },

    catalog: { url: '/titles/{title_id}/preorders', method: HTTP_METHODS.GET },
    purchase: { url: '/titles/{title_id}/preorders/{offer_id}/purchase', method: HTTP_METHODS.POST },
    myOrders: { url: '/titles/{title_id}/preorders/me/orders', method: HTTP_METHODS.GET },
    order: { url: '/titles/{title_id}/preorders/orders/{order_id}', method: HTTP_METHODS.GET },
    refundMine: { url: '/titles/{title_id}/preorders/orders/{order_id}/refund', method: HTTP_METHODS.POST },
    resendMine: { url: '/titles/{title_id}/preorders/orders/{order_id}/resend-access', method: HTTP_METHODS.POST },

    settings: { url: '/titles/{title_id}/preorders/settings', method: HTTP_METHODS.GET },
    updateSettings: { url: '/titles/{title_id}/preorders/settings', method: HTTP_METHODS.PUT },
    offers: { url: '/titles/{title_id}/preorders/admin/offers', method: HTTP_METHODS.GET },
    createOffer: { url: '/titles/{title_id}/preorders/admin/offers', method: HTTP_METHODS.POST },
    offer: { url: '/titles/{title_id}/preorders/admin/offers/{offer_id}', method: HTTP_METHODS.GET },
    updateOffer: { url: '/titles/{title_id}/preorders/admin/offers/{offer_id}', method: HTTP_METHODS.PUT },
    activateOffer: { url: '/titles/{title_id}/preorders/admin/offers/{offer_id}/activate', method: HTTP_METHODS.POST },
    pauseOffer: { url: '/titles/{title_id}/preorders/admin/offers/{offer_id}/pause', method: HTTP_METHODS.POST },
    archiveOffer: { url: '/titles/{title_id}/preorders/admin/offers/{offer_id}/archive', method: HTTP_METHODS.POST },
    inventory: { url: '/titles/{title_id}/preorders/admin/offers/{offer_id}/keys', method: HTTP_METHODS.GET },
    importKeys: { url: '/titles/{title_id}/preorders/admin/offers/{offer_id}/keys/import', method: HTTP_METHODS.POST },
    retireKey: { url: '/titles/{title_id}/preorders/admin/offers/{offer_id}/keys/{key_id}/retire', method: HTTP_METHODS.POST },
    adminOrders: { url: '/titles/{title_id}/preorders/admin/orders', method: HTTP_METHODS.GET },
    readiness: { url: '/titles/{title_id}/preorders/admin/readiness', method: HTTP_METHODS.GET },
    adminOrderAction: { url: '/titles/{title_id}/preorders/admin/orders/{order_id}/{action}', method: HTTP_METHODS.POST },

    mcpCapabilities: { url: '/mcp/v1/titles/{title_id}/preorders/capabilities', method: HTTP_METHODS.GET },
    mcpOperation: { url: '/mcp/v1/titles/{title_id}/preorders/operations/{operation}', method: HTTP_METHODS.POST },
  };
}

export default PreordersRoute;
