import TitlesRoute from "../routes/TitlesRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Titles {

    /**
     * List all the Titles.
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/edab2e3b061347b06c82258622d239e2
     * 
     * @returns promise
     */
    public static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(TitlesRoute.routes.list, undefined, undefined, params);
    }

    /**
     * Create a new title.
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/storeTitle
     * 
     * @param data The data to be passed when creating a title.
     * 
     * @returns Promise
     */
    public static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(TitlesRoute.routes.create, data, undefined, params);
    }

    /**
     * Update a title.
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/updateTitle
     * 
     * @param title_id The id of the title to update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static update<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(TitlesRoute.routes.update, data, { title_id: title_id }, params);
    }

    /**
     * Retrieve the information for a single title.
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/getTitleByUUID
     * 
     * @param title_id The id fo the title to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(TitlesRoute.routes.view, {}, { title_id: title_id }, params);
    }

    /**
     * Deletes a title.
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/deleteTitle
     * 
     * @param title_id The id of the title to delete.
     * @returns promise
     */
    public static delete<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(TitlesRoute.routes.delete, {}, { title_id: title_id }, params);
    }

    /**
     * Approve a title
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/approveTitle
     * 
     * @param data The data to be passed when creating a title.
     * 
     * @returns Promise
     */
    public static approve<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(TitlesRoute.routes.approve, data, { title_id: title_id }, params);
    }

    /**
     * Reject a title
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/rejectTitle
     * 
     * @param data The data to be passed when creating a title.
     * 
     * @returns Promise
     */
    public static reject<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(TitlesRoute.routes.reject, data, { title_id: title_id }, params);
    }

    /**
     * Add a user as an administrator to a title
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/addTitleAdministrator
     * 
     * @param data The data to be passed when creating a title.
     * 
     * @returns Promise
     */
    public static addAdministrator<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(TitlesRoute.routes.addAdministrator, data, { title_id: title_id }, params);
    }

    /**
     * Remove a user as an administrator toa  tile
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/removeTitleAdministrator
     * 
     * @param data The data to be passed when creating a title.
     * 
     * @returns Promise
     */
    public static removeAdministrator<T>(title_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(TitlesRoute.routes.removeAdministrator, data, { title_id: title_id, user_id: user_id }, params);
    }

    /**
       * Updates the main image for the title using a File object.
       * 
       * @see https://api.glitch.fun/api/documentation#/Titles/uploadTitleMainImage
       * 
       * @param file The file object to upload.
       * @param data Any additional data to pass along to the upload.
       * 
       * @returns promise
       */
    public static uploadMainImageFile<T>(title_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = TitlesRoute.routes.uploadMainImage.url.replace('{title_id}', title_id);

        return Requests.uploadFile(url, 'image', file, data);
    }

    /**
     * Updates the main image for the title using a Blob.
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/uploadTitleMainImage
     * 
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     * 
     * @returns promise
     */
    public static uploadMainImageBlob<T>(title_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = TitlesRoute.routes.uploadMainImage.url.replace('{title_id}', title_id);

        return Requests.uploadBlob(url, 'image', blob, data);
    }

    /**
     * Updates the banner image for the title using a File object.
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/uploadTitleBannerImage
     * 
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     * 
     * @returns promise
     */
    public static uploadBannerImageFile<T>(title_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = TitlesRoute.routes.uploadBannerImage.url.replace('{title_id}', title_id);

        return Requests.uploadFile(url, 'image', file, data);
    }

    /**
     * Updates the banner image for the title using a Blob.
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/uploadTitleBannerImage
     * 
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     * 
     * @returns promise
     */
    public static uploadBannerImageBlob<T>(title_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = TitlesRoute.routes.uploadBannerImage.url.replace('{title_id}', title_id);

        return Requests.uploadBlob(url, 'image', blob, data);
    }

    /**
    * Add media to a title.
    */
    public static addMedia<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(TitlesRoute.routes.addMedia, data, { title_id: title_id }, params);
    }

    /**
     * Remove media from a title.
     */
    public static removeMedia<T>(title_id: string, media_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(TitlesRoute.routes.removeMedia, {}, { title_id: title_id, media_id: media_id }, params);
    }

    /**
     * Update the ordering of media items (images, videos, etc.) for a title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/updateMediaOrder
     *
     * @param title_id The ID of the title to update
     * @param media_order An array of objects, each containing:
     *                    - media_id: string (the UUID of the media)
     *                    - order: number (the new order/index)
     * @returns Promise containing the server response
     */
    public static updateMediaOrder<T>(title_id: string, media_order: { media_id: string, order: number }[]): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            TitlesRoute.routes.updateMediaOrder,
            { media_order },
            { title_id: title_id }
        );
    }

    /**
     * Upload a CSV/Excel file containing wishlist data for a title.
     * 
     * @param title_id The UUID of the title
     * @param file The CSV or Excel file
     * @param data Any additional form data, e.g. platform
     * @returns AxiosPromise
     */
    public static importWishlist<T>(
        title_id: string,
        file: File | Blob,
        data?: Record<string, any>,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        let url = TitlesRoute.routes.importWishlist.url.replace('{title_id}', title_id);
        return Requests.uploadFile(url, 'file', file, data, params);
    }

    /**
     * Retrieve the wishlist data for a specific title.
     * 
     * @param title_id The UUID of the title
     * @param params Optional query params, e.g. { platform: 'steam', start_date: '2025-01-01', end_date: '2025-01-31'}
     * @returns AxiosPromise
     */
    public static getWishlist<T>(
        title_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        let url = TitlesRoute.routes.getWishlist.url.replace('{title_id}', title_id);
        return Requests.processRoute(TitlesRoute.routes.getWishlist, {}, { title_id }, params);
    }

    /**
   * Create a new API token for a title.
   * Returns { full_token: string, token: TitleToken }.
   */
    public static createTitleToken<T>(
        title_id: string,
        data?: { expires_at?: string }
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            TitlesRoute.routes.createToken,
            data,
            { title_id }
        );
    }

    /**
     * List all tokens for a title.
     */
    public static listTitleTokens<T>(
        title_id: string
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            TitlesRoute.routes.listTokens,
            {},
            { title_id }
        );
    }

    /**
     * Revoke a specific token by ID.
     */
    public static revokeTitleToken<T>(
        title_id: string,
        token_id: string
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            TitlesRoute.routes.revokeToken,
            {},
            { title_id, token_id }
        );
    }

    /**
     * Search for Titles using Meilisearch or fallback based on the query and filters.
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/searchTitles
     * 
     * @param params Object of query params:
     *   - q?: string, filters?: string,
     *   - sort_by?: string, sort_order?: 'asc'|'desc',
     *   - page?: number, per_page?: number
     */
    public static search<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(TitlesRoute.routes.search, {}, undefined, params);
    }

    /**
    * List game installs for a specific title.
    */
    public static listInstalls<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(TitlesRoute.routes.listInstalls, {}, { title_id: title_id }, params);
    }

    /**
     * View a single game install record.
     */
    public static viewInstall<T>(title_id: string, install_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(TitlesRoute.routes.viewInstall, {}, { title_id: title_id, install_id: install_id }, params);
    }

    /**
     * Create a new game install record.
     */
    public static createInstall<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(TitlesRoute.routes.createInstall, data, { title_id: title_id }, params);
    }

    /**
     * List retention events for a specific title.
     */
    public static listRetentions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(TitlesRoute.routes.listRetentions, {}, { title_id: title_id }, params);
    }

    /**
     * Get a summary report of retention events for a specific title.
     */
    public static retentionSummary<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(TitlesRoute.routes.retentionSummary, {}, { title_id: title_id }, params);
    }

    public static activeRetentions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(TitlesRoute.routes.activeRetentions, {}, { title_id }, params);
    }

    public static retentionAnalysis<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(TitlesRoute.routes.retentionAnalysis, {}, { title_id }, params);
    }

    public static distinctDimensions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(TitlesRoute.routes.distinctDimensions, {}, { title_id }, params);
    }

    /**
     * List sessions for a specific title, with optional filters and pagination.
     * Returns a paginated list of sessions with start/end times, session_length, user info, etc.
     */
    public static listSessions<T>(
        title_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            TitlesRoute.routes.listSessions,
            {},
            { title_id },
            params
        );
    }

    /**
     * Get aggregated average session length data (daily/weekly/monthly) for a title.
     * Optionally filter by platform/device_type/OS/version and group by one dimension.
     */
    public static sessionsAverage<T>(
        title_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            TitlesRoute.routes.sessionsAverage,
            {},
            { title_id },
            params
        );
    }

    public static sessionsHistogram<T>(
        title_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            TitlesRoute.routes.sessionsHistogram,
            {},
            { title_id },
            params
        );
    }

    /**
     * Upload a CSV/Excel file containing daily UTM analytics for a specific title.
     * 
     * @param title_id The UUID of the title
     * @param file The CSV or Excel file
     * @param data Optional form fields (if needed)
     * @param params Optional query parameters
     * @returns AxiosPromise
     */
    public static importUtmAnalytics<T>(
        title_id: string,
        file: File | Blob,
        data?: Record<string, any>,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        const url = TitlesRoute.routes.importUtmAnalytics.url.replace("{title_id}", title_id);
        return Requests.uploadFile<T>(url, "file", file, data, params);
    }

    /**
     * Retrieve the UTM analytics data for a title (paginated, filterable, sortable).
     * 
     * GET /titles/{title_id}/utm
     * 
     * @param title_id The UUID of the title
     * @param params Optional query params: start_date, end_date, source, device_type, sort_by, etc.
     * @returns AxiosPromise
     */
    public static getUtmAnalytics<T>(
        title_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            TitlesRoute.routes.getUtmAnalytics,
            {},
            { title_id },
            params
        );
    }

    /**
     * Get the web tracking token used for websites.
     * 
     * GET /titles/{title_id}/webTrackingToken
     * 
     * @param title_id The UUID of the title
     * @param params Optional query params: 
     * @returns AxiosPromise
     */
    public static getWebTrackingToken<T>(
        title_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            TitlesRoute.routes.getWebTrackingToken,
            {},
            { title_id },
            params
        );
    }

    /**
     * Analyze UTM data with optional group_by (source, campaign, medium, device_type, etc.)
     * 
     * GET /titles/{title_id}/utm/analysis
     * 
     * @param title_id The UUID of the title
     * @param params e.g. ?group_by=source&start_date=YYYY-MM-DD
     * @returns AxiosPromise
     */
    public static analyzeUtmAnalytics<T>(
        title_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            TitlesRoute.routes.analyzeUtmAnalytics,
            {},
            { title_id },
            params
        );
    }

    /**
     * List all chat sessions for a title.
     */
    public static chatListSessions<T>(
        title_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            TitlesRoute.routes.chatListSessions,
            {},
            { title_id },
            params
        );
    }

    /**
     * Get a specific chat session and its messages.
     */
    public static chatShowSession<T>(
        title_id: string,
        session_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            TitlesRoute.routes.chatShowSession,
            {},
            { title_id, session_id },
            params
        );
    }

    /**
     * Search messages across all sessions of a title.
     */
    public static chatListMessages<T>(
        title_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            TitlesRoute.routes.chatListMessages,
            {},
            { title_id },
            params
        );
    }

    /**
     * Update a specific chat message.
     */
    public static chatUpdateMessage<T>(
        title_id: string,
        message_id: string,
        data: object
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            TitlesRoute.routes.chatUpdateMessage,
            data,
            { title_id, message_id }
        );
    }

     /**  
   * List all purchase events for a specific title.  
   * Matches GET /titles/{title_id}/purchases  
   */  
  public static listPurchases<T>(  
    title_id: string,  
    params?: Record<string, any>  
  ): AxiosPromise<Response<T>> {  
    return Requests.processRoute(  
      TitlesRoute.routes.purchasesList,  
      {},  
      { title_id },  
      params  
    );  
  }  
  
  /**  
   * Retrieve a single purchase record by ID.  
   * Matches GET /titles/{title_id}/purchases/{purchase_id}  
   */  
  public static viewPurchase<T>(  
    title_id: string,  
    purchase_id: string,  
    params?: Record<string, any>  
  ): AxiosPromise<Response<T>> {  
    return Requests.processRoute(  
      TitlesRoute.routes.purchasesShow,  
      {},  
      { title_id, purchase_id },  
      params  
    );  
  }  
  
  /**  
   * Create a new purchase record.  
   * Matches POST /titles/{title_id}/purchases  
   */  
  public static createPurchase<T>(  
    title_id: string,  
    data: object,  
    params?: Record<string, any>  
  ): AxiosPromise<Response<T>> {  
    return Requests.processRoute(  
      TitlesRoute.routes.purchasesCreate,  
      data,  
      { title_id },  
      params  
    );  
  }  
  
  /**  
   * Get a summary of total revenue, grouped by day or purchase_type.  
   * Matches GET /titles/{title_id}/purchases/summary  
   */  
  public static purchaseSummary<T>(  
    title_id: string,  
    params?: Record<string, any>  
  ): AxiosPromise<Response<T>> {  
    return Requests.processRoute(  
      TitlesRoute.routes.purchasesSummary,  
      {},  
      { title_id },  
      params  
    );  
  }  
  
  /**  
   * Revenue by time (daily, weekly, or monthly).  
   * Matches GET /titles/{title_id}/purchases/reports/time  
   */  
  public static purchaseRevenueByTime<T>(  
    title_id: string,  
    params?: Record<string, any>  
  ): AxiosPromise<Response<T>> {  
    return Requests.processRoute(  
      TitlesRoute.routes.purchasesTimeReport,  
      {},  
      { title_id },  
      params  
    );  
  }  
  
  /**  
   * 30-day LTV (Lifetime Value) per install.  
   * Matches GET /titles/{title_id}/purchases/reports/ltv30  
   */  
  public static purchaseLtv30<T>(  
    title_id: string,  
    params?: Record<string, any>  
  ): AxiosPromise<Response<T>> {  
    return Requests.processRoute(  
      TitlesRoute.routes.purchasesLtv30Report,  
      {},  
      { title_id },  
      params  
    );  
  }  
  
  /**  
   * Show breakdown of revenue per currency, with optional USD conversion.  
   * Matches GET /titles/{title_id}/purchases/reports/currency  
   */  
  public static purchaseCurrencyBreakdown<T>(  
    title_id: string,  
    params?: Record<string, any>  
  ): AxiosPromise<Response<T>> {  
    return Requests.processRoute(  
      TitlesRoute.routes.purchasesCurrencyBreakdown,  
      {},  
      { title_id },  
      params  
    );  
  }  
  
  /**  
   * Distribution of installs by total revenue, plus a histogram array.  
   * Matches GET /titles/{title_id}/purchases/reports/install-distribution  
   */  
  public static installRevenueDistribution<T>(  
    title_id: string,  
    params?: Record<string, any>  
  ): AxiosPromise<Response<T>> {  
    return Requests.processRoute(  
      TitlesRoute.routes.purchasesInstallDistribution,  
      {},  
      { title_id },  
      params  
    );  
  }  
  
  /**  
   * Stats by item SKU, purchase type, and repeat purchase analysis.  
   * Matches GET /titles/{title_id}/purchases/reports/item-type-stats  
   */  
  public static itemAndPurchaseTypeStats<T>(  
    title_id: string,  
    params?: Record<string, any>  
  ): AxiosPromise<Response<T>> {  
    return Requests.processRoute(  
      TitlesRoute.routes.purchasesItemTypeStats,  
      {},  
      { title_id },  
      params  
    );  
  }
  
  /**
     * Bulk import access keys for a title from a CSV or Excel file.
     * The file must contain 'platform' and 'code' columns.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/importTitleKeys
     *
     * @param title_id The UUID of the title.
     * @param file The CSV or Excel file to upload.
     * @param data Optional additional form data.
     * @param params Optional query parameters.
     * @returns AxiosPromise
     */
    public static importKeys<T>(
        title_id: string,
        file: File | Blob,
        data?: Record<string, any>,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        const url = TitlesRoute.routes.importKeys.url.replace("{title_id}", title_id);
        return Requests.uploadFile<T>(url, "file", file, data, params);
    }



}

export default Titles;