import Route from './interface';
import HTTP_METHODS from '../constants/HttpMethods';

/** Consumer-facing commerce routes. Signed provider webhooks are deliberately not client APIs. */
class MicrotransactionsRoute {
  public static routes: { [key: string]: Route } = {
    uploadMedia: { url: '/titles/{title_id}/microtransactions/media', method: HTTP_METHODS.POST },
    mcpUploadMedia: { url: '/mcp/v1/titles/{title_id}/microtransactions/media', method: HTTP_METHODS.POST },
    settings: { url: '/titles/{title_id}/microtransactions/settings', method: HTTP_METHODS.GET },
    updateSettings: { url: '/titles/{title_id}/microtransactions/settings', method: HTTP_METHODS.PUT },
    readiness: { url: '/titles/{title_id}/microtransactions/readiness', method: HTTP_METHODS.GET },
    products: { url: '/titles/{title_id}/microtransactions/products', method: HTTP_METHODS.GET },
    createProduct: { url: '/titles/{title_id}/microtransactions/products', method: HTTP_METHODS.POST },
    updateProduct: { url: '/titles/{title_id}/microtransactions/products/{product_id}', method: HTTP_METHODS.PUT },
    archiveProduct: { url: '/titles/{title_id}/microtransactions/products/{product_id}/archive', method: HTTP_METHODS.POST },
    providers: { url: '/titles/{title_id}/microtransactions/providers', method: HTTP_METHODS.GET },
    earnings: { url: '/titles/{title_id}/microtransactions/earnings', method: HTTP_METHODS.GET },
    orders: { url: '/titles/{title_id}/microtransactions/orders', method: HTTP_METHODS.GET },
    order: { url: '/titles/{title_id}/microtransactions/orders/{order_id}', method: HTTP_METHODS.GET },
    refund: { url: '/titles/{title_id}/microtransactions/orders/{order_id}/refund', method: HTTP_METHODS.POST },
    replayDelivery: { url: '/titles/{title_id}/microtransactions/deliveries/{delivery_id}/replay', method: HTTP_METHODS.POST },
    catalog: { url: '/titles/{title_id}/microtransactions/catalog', method: HTTP_METHODS.GET },
    createQuote: { url: '/titles/{title_id}/microtransactions/quotes', method: HTTP_METHODS.POST },
    createCheckoutSession: { url: '/titles/{title_id}/microtransactions/checkout-sessions', method: HTTP_METHODS.POST },
    createRestoreSession: { url: '/titles/{title_id}/microtransactions/restore-sessions', method: HTTP_METHODS.POST },
    checkoutSession: { url: '/titles/{title_id}/microtransactions/checkout-sessions/{session_id}', method: HTTP_METHODS.GET },
    checkoutFramePolicy: { url: '/titles/{title_id}/microtransactions/checkout-sessions/{session_id}/frame-policy', method: HTTP_METHODS.GET },
    framePolicy: { url: '/titles/{title_id}/microtransactions/frame-policy', method: HTTP_METHODS.GET },
    authenticateCheckoutSession: { url: '/titles/{title_id}/microtransactions/checkout-sessions/{session_id}/authenticate', method: HTTP_METHODS.POST },
    checkout: { url: '/titles/{title_id}/microtransactions/checkout-sessions/{session_id}/checkout', method: HTTP_METHODS.POST },
    reconcileCheckout: { url: '/titles/{title_id}/microtransactions/checkout-sessions/{session_id}/reconcile', method: HTTP_METHODS.POST },
    createHandoff: { url: '/titles/{title_id}/microtransactions/checkout-sessions/{session_id}/handoff', method: HTTP_METHODS.POST },
    claimHandoff: { url: '/titles/{title_id}/microtransactions/handoffs/claim', method: HTTP_METHODS.POST },
    restoreHandoff: { url: '/titles/{title_id}/microtransactions/handoffs/restore', method: HTTP_METHODS.POST },
    verifyIntegration: { url: '/titles/{title_id}/microtransactions/integration/verify', method: HTTP_METHODS.POST },
    entitlements: { url: '/titles/{title_id}/microtransactions/entitlements', method: HTTP_METHODS.GET },
    myPurchases: { url: '/titles/{title_id}/microtransactions/me/purchases', method: HTTP_METHODS.GET },
    consume: { url: '/titles/{title_id}/microtransactions/consume', method: HTTP_METHODS.POST },
    requestRefund: { url: '/titles/{title_id}/microtransactions/refund-requests', method: HTTP_METHODS.POST },
    acknowledgeDelivery: { url: '/titles/{title_id}/microtransactions/deliveries/{delivery_id}/acknowledge', method: HTTP_METHODS.POST },
    mcpCapabilities: { url: '/mcp/v1/titles/{title_id}/microtransactions/capabilities', method: HTTP_METHODS.GET },
    mcpOperation: { url: '/mcp/v1/titles/{title_id}/microtransactions/operations/{operation}', method: HTTP_METHODS.POST },
  };
}

export default MicrotransactionsRoute;
