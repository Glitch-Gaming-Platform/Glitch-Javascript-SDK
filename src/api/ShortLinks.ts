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
}

export default ShortLinks;
