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

  };

}

export default TitlesRoute;