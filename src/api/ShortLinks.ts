import ShortLinksRoute from "../routes/ShortLinksRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class ShortLinks {
  /**
   * List all short links with optional filters
   */
  public static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(ShortLinksRoute.routes.listShortLinks, undefined, undefined, params);
  }

  /**
   * Create a new short link
   */
  public static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(ShortLinksRoute.routes.createShortLink, data, {}, params);
  }

  /**
   * Get a specific short link by ID
   */
  public static view<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(ShortLinksRoute.routes.viewShortLink, {}, { id }, params);
  }

  /**
   * Update a short link
   */
  public static update<T>(id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(ShortLinksRoute.routes.updateShortLink, data, { id }, params);
  }

  // Uncomment when delete is supported
  // public static delete<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
  //   return Requests.processRoute(ShortLinksRoute.routes.deleteShortLink, {}, { id }, params);
  // }

  /**  
  * Get click-summary report  
  *  - Example usage: ShortLinks.clickSummary({ short_link_id: 'uuid-here' })  
  */
  public static clickSummary<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      ShortLinksRoute.routes.clickSummary,
      undefined,
      undefined,
      params
    );
  }

  /**  
   * Get geo & device breakdown report  
   *  - Example usage: ShortLinks.geoDeviceBreakdown({ short_link_id: 'uuid-here' })  
   */
  public static geoDeviceBreakdown<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      ShortLinksRoute.routes.geoDeviceBreakdown,
      undefined,
      undefined,
      params
    );
  }

  /**  
   * Get time-series report  
   *  - Example usage: ShortLinks.timeSeries({ short_link_id: 'uuid-here', group_by: 'day' })  
   */
  public static timeSeries<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      ShortLinksRoute.routes.timeSeries,
      undefined,
      undefined,
      params
    );
  }

  /**  
   * Get referrer & UTM report  
   *  - Example usage: ShortLinks.referrerReport({ short_link_id: 'uuid-here' })  
   */
  public static referrerReport<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      ShortLinksRoute.routes.referrerReport,
      undefined,
      undefined,
      params
    );
  }

  public static campaignPerformance<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(ShortLinksRoute.routes.campaignPerformance, undefined, undefined, params);
  }

  public static influencerPerformance<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(ShortLinksRoute.routes.influencerPerformance, undefined, undefined, params);
  }

  public static socialPostPerformance<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(ShortLinksRoute.routes.socialPostPerformance, undefined, undefined, params);
  }

  public static conversionFunnel<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(ShortLinksRoute.routes.conversionFunnel, undefined, undefined, params);
  }

  public static clickHeatmap<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(ShortLinksRoute.routes.clickHeatmap, undefined, undefined, params);
  }

  public static botAnalysis<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(ShortLinksRoute.routes.botAnalysis, undefined, undefined, params);
  }

  public static attributionReport<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(ShortLinksRoute.routes.attributionReport, undefined, undefined, params);
  }
}

export default ShortLinks;
