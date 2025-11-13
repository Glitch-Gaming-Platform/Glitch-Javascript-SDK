import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class ShortLinksRoute {
  public static routes: { [key: string]: Route } = {
    listShortLinks:    { url: '/shortlinks', method: HTTP_METHODS.GET },
    createShortLink:   { url: '/shortlinks', method: HTTP_METHODS.POST },
    viewShortLink:     { url: '/shortlinks/{id}', method: HTTP_METHODS.GET },
    updateShortLink:   { url: '/shortlinks/{id}', method: HTTP_METHODS.PUT },
    // Delete can be added if supported
    // deleteShortLink:   { url: '/shortlinks/{id}', method: HTTP_METHODS.DELETE }

    clickSummary:      { url: '/shortlinks/reports/click-summary', method: HTTP_METHODS.GET },  
    geoDeviceBreakdown:{ url: '/shortlinks/reports/geo-device',    method: HTTP_METHODS.GET },  
    timeSeries:        { url: '/shortlinks/reports/time-series',   method: HTTP_METHODS.GET },  
    referrerReport:    { url: '/shortlinks/reports/referrer',      method: HTTP_METHODS.GET }, 

    campaignPerformance: { url: '/shortlinks/reports/campaign-performance', method: HTTP_METHODS.GET },
    influencerPerformance: { url: '/shortlinks/reports/influencer-performance', method: HTTP_METHODS.GET },
    socialPostPerformance: { url: '/shortlinks/reports/social-post-performance', method: HTTP_METHODS.GET },
    conversionFunnel: { url: '/shortlinks/reports/conversion-funnel', method: HTTP_METHODS.GET },
    clickHeatmap: { url: '/shortlinks/reports/click-heatmap', method: HTTP_METHODS.GET },
    botAnalysis: { url: '/shortlinks/reports/bot-analysis', method: HTTP_METHODS.GET },
    attributionReport: { url: '/shortlinks/reports/attribution', method: HTTP_METHODS.GET },
  };
}

export default ShortLinksRoute;
