import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class TitlesRoute {

  public static routes: { [key: string]: Route } = {
    list: { url: '/titles', method: HTTP_METHODS.GET },
    create: { url: '/titles', method: HTTP_METHODS.POST },
    view: { url: '/titles/{title_id}', method: HTTP_METHODS.GET },
    update: { url: '/titles/{title_id}', method: HTTP_METHODS.PUT },
    delete: { url: '/titles/{title_id}', method: HTTP_METHODS.DELETE },
    approve: { url: '/titles/{title_id}/approve', method: HTTP_METHODS.POST },
    reject: { url: '/titles/{title_id}/reject', method: HTTP_METHODS.POST },
    uploadMainImage: { url: '/titles/{title_id}/uploadMainImage', method: HTTP_METHODS.POST },
    uploadBannerImage: { url: '/titles/{title_id}/uploadBannerImage', method: HTTP_METHODS.POST },
    addAdministrator: { url: '/titles/{title_id}/addAdministrator', method: HTTP_METHODS.POST },
    removeAdministrator: { url: '/titles/{title_id}/removeAdministrator/{user_id}', method: HTTP_METHODS.DELETE },
    addMedia: { url: '/titles/{title_id}/addMedia', method: HTTP_METHODS.POST },
    removeMedia: { url: '/titles/{title_id}/removeMedia/{media_id}', method: HTTP_METHODS.DELETE },
    updateMediaOrder: { url: '/titles/{title_id}/updateMediaOrder', method: HTTP_METHODS.POST },
    importWishlist: { url: '/titles/{title_id}/wishlist/import', method: HTTP_METHODS.POST },
    getWishlist: { url: '/titles/{title_id}/wishlist', method: HTTP_METHODS.GET },
    createToken: { url: '/titles/{title_id}/tokens', method: HTTP_METHODS.POST },
    listTokens: { url: '/titles/{title_id}/tokens', method: HTTP_METHODS.GET },
    revokeToken: { url: '/titles/{title_id}/tokens/{token_id}', method: HTTP_METHODS.DELETE },
    search: { url: '/titles/search', method: HTTP_METHODS.GET },
    listInstalls: { url: '/titles/{title_id}/installs', method: HTTP_METHODS.GET },
    viewInstall: { url: '/titles/{title_id}/installs/{install_id}', method: HTTP_METHODS.GET },
    createInstall: { url: '/titles/{title_id}/installs', method: HTTP_METHODS.POST },
    listRetentions: { url: '/titles/{title_id}/retentions', method: HTTP_METHODS.GET },
    retentionSummary: { url: '/titles/{title_id}/retentions/summary', method: HTTP_METHODS.GET },
    activeRetentions: { url: '/titles/{title_id}/retentions/active', method: HTTP_METHODS.GET },
    retentionAnalysis: { url: '/titles/{title_id}/retentions/analysis', method: HTTP_METHODS.GET },
    distinctDimensions: { url: '/titles/{title_id}/installs/distinctDimensions', method: HTTP_METHODS.GET },
    updateAdministrator: { url: '/titles/{title_id}/updateAdministrator/{user_id}', method: HTTP_METHODS.PUT },
    listSessions: {
      url: '/titles/{title_id}/installs/sessions',
      method: HTTP_METHODS.GET
    },
    sessionsAverage: {
      url: '/titles/{title_id}/installs/sessions/average',
      method: HTTP_METHODS.GET
    },
    sessionsHistogram: {
      url: '/titles/{title_id}/sessions/histogram',
      method: HTTP_METHODS.GET
    },
    /**
     * 1) Import a CSV/Excel file containing daily UTM analytics data for a Title
     *    POST /titles/{title_id}/utm/import
     */
    importUtmAnalytics: {
      url: "/titles/{title_id}/utm/import",
      method: HTTP_METHODS.POST,
    },

    /**
     * 2) Retrieve paginated/filterable UTM analytics data for a Title
     *    GET /titles/{title_id}/utm
     */
    getUtmAnalytics: {
      url: "/titles/{title_id}/utm",
      method: HTTP_METHODS.GET,
    },

    getWebTrackingToken: {
      url: "/titles/{title_id}/webTrackingToken",
      method: HTTP_METHODS.GET,
    },

    /**
     * 3) Analyze UTM data with optional group_by / dimension-based aggregates
     *    GET /titles/{title_id}/utm/analysis
     */
    analyzeUtmAnalytics: {
      url: "/titles/{title_id}/utm/analysis",
      method: HTTP_METHODS.GET,
    },

    chatListSessions: {
      url: '/titles/{title_id}/chat/sessions',
      method: HTTP_METHODS.GET
    },
    chatShowSession: {
      url: '/titles/{title_id}/chat/sessions/{session_id}',
      method: HTTP_METHODS.GET
    },
    chatListMessages: {
      url: '/titles/{title_id}/chat/messages',
      method: HTTP_METHODS.GET
    },
    chatUpdateMessage: {
      url: '/titles/{title_id}/chat/messages/{message_id}',
      method: HTTP_METHODS.PUT
    },

    importKeys: { url: '/titles/{title_id}/import-keys', method: HTTP_METHODS.POST },


    // ─────────────────────────────────────────────────────────────────  
    // Purchase/Revenue Endpoints  
    // ─────────────────────────────────────────────────────────────────  
    purchasesList: {
      url: "/titles/{title_id}/purchases",
      method: HTTP_METHODS.GET,
    },
    purchasesShow: {
      url: "/titles/{title_id}/purchases/{purchase_id}",
      method: HTTP_METHODS.GET,
    },
    purchasesCreate: {
      url: "/titles/{title_id}/purchases",
      method: HTTP_METHODS.POST,
    },
    purchasesSummary: {
      url: "/titles/{title_id}/purchases/summary",
      method: HTTP_METHODS.GET,
    },

    // Advanced analytics sub-routes  
    purchasesTimeReport: {
      url: "/titles/{title_id}/purchases/reports/time",
      method: HTTP_METHODS.GET,
    },
    purchasesLtv30Report: {
      url: "/titles/{title_id}/purchases/reports/ltv30",
      method: HTTP_METHODS.GET,
    },
    purchasesCurrencyBreakdown: {
      url: "/titles/{title_id}/purchases/reports/currency",
      method: HTTP_METHODS.GET,
    },
    purchasesInstallDistribution: {
      url: "/titles/{title_id}/purchases/reports/install-distribution",
      method: HTTP_METHODS.GET,
    },
    purchasesItemTypeStats: {
      url: "/titles/{title_id}/purchases/reports/item-type-stats",
      method: HTTP_METHODS.GET,
    },

    listAdConversionEvents: {
      url: '/titles/{title_id}/ad-conversion-events',
      method: HTTP_METHODS.GET
    },
    retryAdConversionEvent: {
      url: '/titles/{title_id}/ad-conversion-events/{event_id}/retry',
      method: HTTP_METHODS.POST
    },

    getAdConversionEventsReport: {
      url: '/titles/{title_id}/ad-conversion-events/report',
      method: HTTP_METHODS.GET
    },

    listLandingPages: { url: '/titles/{title_id}/landing-pages', method: HTTP_METHODS.GET },
    createLandingPage: { url: '/titles/{title_id}/landing-pages', method: HTTP_METHODS.POST },
    viewLandingPage: { url: '/landing-pages/{landing_page_id}', method: HTTP_METHODS.GET },
    updateLandingPage: { url: '/landing-pages/{landing_page_id}', method: HTTP_METHODS.PUT },
    deleteLandingPage: { url: '/landing-pages/{landing_page_id}', method: HTTP_METHODS.DELETE },
    translateLandingPage: { url: '/landing-pages/{landing_page_id}/translate', method: HTTP_METHODS.POST },

    generateLandingPageAiContent: { url: '/landing-pages/{landing_page_id}/generate-ai-content', method: HTTP_METHODS.POST },
    saveLandingPageTranslation: { url: '/landing-pages/{landing_page_id}/translations', method: HTTP_METHODS.POST },

    cohorts: { url: '/titles/{title_id}/installs/cohorts', method: HTTP_METHODS.GET },

    geoReport: { url: '/titles/{title_id}/installs/geo-report', method: HTTP_METHODS.GET },

    // Game Events (Behavioral Telemetry)
    listEvents: { url: '/titles/{title_id}/events', method: HTTP_METHODS.GET },
    createEvent: { url: '/titles/{title_id}/events', method: HTTP_METHODS.POST },
    bulkCreateEvents: { url: '/titles/{title_id}/events/bulk', method: HTTP_METHODS.POST },
    eventSummary: { url: '/titles/{title_id}/events/summary', method: HTTP_METHODS.GET },
    eventDistinctKeys: { url: '/titles/{title_id}/events/distinct-keys', method: HTTP_METHODS.GET },

    // Behavioral Funnels
    listBehavioralFunnels: { url: '/titles/{title_id}/behavioral-funnels', method: HTTP_METHODS.GET },
    createBehavioralFunnel: { url: '/titles/{title_id}/behavioral-funnels', method: HTTP_METHODS.POST },
    behavioralFunnelReport: { url: '/titles/{title_id}/behavioral-funnels/{funnel_id}/report', method: HTTP_METHODS.GET },
    deleteBehavioralFunnel: { url: '/titles/{title_id}/behavioral-funnels/{funnel_id}', method: HTTP_METHODS.DELETE },

    // Aegis Deployment
    getDeploymentUploadUrl: { url: '/titles/{title_id}/deployments/presigned-url', method: HTTP_METHODS.POST },
    confirmDeployment: { url: '/titles/{title_id}/deployments/confirm', method: HTTP_METHODS.POST },
    getPlaySession: { url: '/titles/{title_id}/play', method: HTTP_METHODS.GET },

    // Aegis Payouts
    listDeveloperPayouts: { url: '/titles/{title_id}/payouts', method: HTTP_METHODS.GET },
    viewDeveloperPayout: { url: '/titles/{title_id}/payouts/{payout_id}', method: HTTP_METHODS.GET },
    developerPayoutSummary: { url: '/titles/{title_id}/payouts/summary', method: HTTP_METHODS.GET },

    /**
    * The Aegis Handshake: Validates if a specific install/session is authorized to play.
    * POST /titles/{title_id}/installs/{install_id}/validate
    */
    validateInstall: {
      url: '/titles/{title_id}/installs/{install_id}/validate',
      method: HTTP_METHODS.POST
    },

    listBuilds: { url: '/titles/{title_id}/deployments', method: HTTP_METHODS.GET },

    listSaves: { url: '/titles/{title_id}/installs/{install_id}/saves', method: HTTP_METHODS.GET },
    storeSave: { url: '/titles/{title_id}/installs/{install_id}/saves', method: HTTP_METHODS.POST },
    resolveSaveConflict: { url: '/titles/{title_id}/installs/{install_id}/saves/{save_id}/resolve', method: HTTP_METHODS.POST },

    wishlistToggle: {
      url: '/titles/{title_id}/wishlist',
      method: HTTP_METHODS.POST
    },
    wishlistUpdateScore: {
      url: '/titles/{title_id}/wishlist/score',
      method: HTTP_METHODS.POST
    },
    wishlistStats: {
      url: '/titles/{title_id}/wishlist/stats',
      method: HTTP_METHODS.GET
    },
    myWishlists: {
      url: '/users/me/wishlists',
      method: HTTP_METHODS.GET
    },

    wishlistMe: {
      url: '/titles/{title_id}/wishlist/me',
      method: HTTP_METHODS.GET
    },
    attributionFunnel: {
      url: '/titles/{title_id}/reports/attribution-funnel',
      method: HTTP_METHODS.GET
    },

    updateBuildStatus: { url: '/titles/{title_id}/deployments/{build_id}/status', method: HTTP_METHODS.PUT },


  };

}

export default TitlesRoute;