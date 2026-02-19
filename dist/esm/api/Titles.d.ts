import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Titles {
    /**
     * List all the Titles.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/edab2e3b061347b06c82258622d239e2
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/storeTitle
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static update<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/getTitleByUUID
     *
     * @param title_id The id fo the title to retrieve.
     *
     * @returns promise
     */
    static view<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes a title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/deleteTitle
     *
     * @param title_id The id of the title to delete.
     * @returns promise
     */
    static delete<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Approve a title
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/approveTitle
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    static approve<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Reject a title
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/rejectTitle
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    static reject<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a user as an administrator to a title
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/addTitleAdministrator
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    static addAdministrator<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove a user as an administrator toa  tile
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/removeTitleAdministrator
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    static removeAdministrator<T>(title_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static uploadMainImageFile<T>(title_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static uploadMainImageBlob<T>(title_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static uploadBannerImageFile<T>(title_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static uploadBannerImageBlob<T>(title_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Add media to a title.
    */
    static addMedia<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove media from a title.
     */
    static removeMedia<T>(title_id: string, media_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static updateMediaOrder<T>(title_id: string, media_order: {
        media_id: string;
        order: number;
    }[]): AxiosPromise<Response<T>>;
    /**
     * Upload a CSV/Excel file containing wishlist data for a title.
     *
     * @param title_id The UUID of the title
     * @param file The CSV or Excel file
     * @param data Any additional form data, e.g. platform
     * @returns AxiosPromise
     */
    static importWishlist<T>(title_id: string, file: File | Blob, data?: Record<string, any>, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the wishlist data for a specific title.
     *
     * @param title_id The UUID of the title
     * @param params Optional query params, e.g. { platform: 'steam', start_date: '2025-01-01', end_date: '2025-01-31'}
     * @returns AxiosPromise
     */
    static getWishlist<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
   * Create a new API token for a title.
   * Returns { full_token: string, token: TitleToken }.
   */
    static createTitleToken<T>(title_id: string, data?: {
        expires_at?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * List all tokens for a title.
     */
    static listTitleTokens<T>(title_id: string): AxiosPromise<Response<T>>;
    /**
     * Revoke a specific token by ID.
     */
    static revokeTitleToken<T>(title_id: string, token_id: string): AxiosPromise<Response<T>>;
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
    static search<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * List game installs for a specific title.
    */
    static listInstalls<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * View a single game install record.
     */
    static viewInstall<T>(title_id: string, install_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new game install record.
     */
    static createInstall<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List retention events for a specific title.
     */
    static listRetentions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a summary report of retention events for a specific title.
     */
    static retentionSummary<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static activeRetentions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static retentionAnalysis<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static distinctDimensions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List sessions for a specific title, with optional filters and pagination.
     * Returns a paginated list of sessions with start/end times, session_length, user info, etc.
     */
    static listSessions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get aggregated average session length data (daily/weekly/monthly) for a title.
     * Optionally filter by platform/device_type/OS/version and group by one dimension.
     */
    static sessionsAverage<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static sessionsHistogram<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Upload a CSV/Excel file containing daily UTM analytics for a specific title.
     *
     * @param title_id The UUID of the title
     * @param file The CSV or Excel file
     * @param data Optional form fields (if needed)
     * @param params Optional query parameters
     * @returns AxiosPromise
     */
    static importUtmAnalytics<T>(title_id: string, file: File | Blob, data?: Record<string, any>, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the UTM analytics data for a title (paginated, filterable, sortable).
     *
     * GET /titles/{title_id}/utm
     *
     * @param title_id The UUID of the title
     * @param params Optional query params: start_date, end_date, source, device_type, sort_by, etc.
     * @returns AxiosPromise
     */
    static getUtmAnalytics<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the web tracking token used for websites.
     *
     * GET /titles/{title_id}/webTrackingToken
     *
     * @param title_id The UUID of the title
     * @param params Optional query params:
     * @returns AxiosPromise
     */
    static getWebTrackingToken<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Analyze UTM data with optional group_by (source, campaign, medium, device_type, etc.)
     *
     * GET /titles/{title_id}/utm/analysis
     *
     * @param title_id The UUID of the title
     * @param params e.g. ?group_by=source&start_date=YYYY-MM-DD
     * @returns AxiosPromise
     */
    static analyzeUtmAnalytics<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all chat sessions for a title.
     */
    static chatListSessions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a specific chat session and its messages.
     */
    static chatShowSession<T>(title_id: string, session_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Search messages across all sessions of a title.
     */
    static chatListMessages<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a specific chat message.
     */
    static chatUpdateMessage<T>(title_id: string, message_id: string, data: object): AxiosPromise<Response<T>>;
    /**
  * List all purchase events for a specific title.
  * Matches GET /titles/{title_id}/purchases
  */
    static listPurchases<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single purchase record by ID.
     * Matches GET /titles/{title_id}/purchases/{purchase_id}
     */
    static viewPurchase<T>(title_id: string, purchase_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new purchase record.
     * Matches POST /titles/{title_id}/purchases
     */
    static createPurchase<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a summary of total revenue, grouped by day or purchase_type.
     * Matches GET /titles/{title_id}/purchases/summary
     */
    static purchaseSummary<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Revenue by time (daily, weekly, or monthly).
     * Matches GET /titles/{title_id}/purchases/reports/time
     */
    static purchaseRevenueByTime<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * 30-day LTV (Lifetime Value) per install.
     * Matches GET /titles/{title_id}/purchases/reports/ltv30
     */
    static purchaseLtv30<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Show breakdown of revenue per currency, with optional USD conversion.
     * Matches GET /titles/{title_id}/purchases/reports/currency
     */
    static purchaseCurrencyBreakdown<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Distribution of installs by total revenue, plus a histogram array.
     * Matches GET /titles/{title_id}/purchases/reports/install-distribution
     */
    static installRevenueDistribution<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Stats by item SKU, purchase type, and repeat purchase analysis.
     * Matches GET /titles/{title_id}/purchases/reports/item-type-stats
     */
    static itemAndPurchaseTypeStats<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static importKeys<T>(title_id: string, file: File | Blob, data?: Record<string, any>, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update administrator email preferences for a title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/updateTitleAdministrator
     *
     * @param title_id The id of the title.
     * @param user_id The id of the user/administrator.
     * @param data The preference data to update (notify_promotion_schedule_reminder_email, notify_weekly_promotion_performance_email).
     *
     * @returns Promise
     */
    static updateAdministrator<T>(title_id: string, user_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
 * List ad conversion events for a title with filtering
 */
    static listAdConversionEvents<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retry a failed or pending ad conversion event
     */
    static retryAdConversionEvent<T>(title_id: string, event_id: string): AxiosPromise<Response<T>>;
    /**
    * List all landing pages for a specific title.
    * @param title_id The UUID of the title.
    * @param params Optional query parameters for pagination.
    */
    static listLandingPages<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new landing page for a title.
     * @param title_id The UUID of the title.
     * @param data The data for the new landing page.
     */
    static createLandingPage<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * View a specific landing page by its ID.
     * @param landing_page_id The UUID of the landing page.
     */
    static viewLandingPage<T>(landing_page_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an existing landing page.
     * @param landing_page_id The UUID of the landing page to update.
     * @param data The new data for the landing page.
     */
    static updateLandingPage<T>(landing_page_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a landing page.
     * @param landing_page_id The UUID of the landing page to delete.
     */
    static deleteLandingPage<T>(landing_page_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Trigger an AI translation for a landing page.
     * @param landing_page_id The UUID of the landing page.
     * @param data An object containing the target language code, e.g., { language_code: 'es' }.
     */
    static translateLandingPage<T>(landing_page_id: string, data: {
        language_code: string;
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Generate or regenerate AI-powered HTML content for a landing page.
    * @param landing_page_id The UUID of the landing page.
    * @param data An object containing the prompt, language_code, and privacy_mode.
    */
    static generateLandingPageAiContent<T>(landing_page_id: string, data: {
        prompt: string;
        language_code: string;
        privacy_mode: string;
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create or update a specific translation for a landing page.
     * @param landing_page_id The UUID of the landing page.
     * @param translationData The full translation object to be saved.
     */
    static saveLandingPageTranslation<T>(landing_page_id: string, translationData: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static cohorts<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
 * Get an aggregated report of ad conversion events for charting.
 */
    static getAdConversionEventsReport<T>(title_id: string, params: {
        start_date: string;
        end_date: string;
        group_by: 'platform' | 'status' | 'event_type';
        unique_clicks?: boolean;
    }): AxiosPromise<Response<T>>;
    /**
     * Get a geographical distribution report for installs.
     * @param params e.g., { group_by: 'country_code', start_date: '2025-01-01' }
     */
    static geoReport<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List and filter raw game events (telemetry).
     */
    static listEvents<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Record a single in-game action.
     */
    static createEvent<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Record multiple events in one request (Batching).
     * @param data { events: Array<{game_install_id, step_key, action_key, metadata?}> }
     */
    static bulkCreateEvents<T>(title_id: string, data: {
        events: object[];
    }): AxiosPromise<Response<T>>;
    /**
     * Get a summary of actions per step.
     */
    static eventSummary<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all unique step and action keys used in this title.
     */
    static eventDistinctKeys<T>(title_id: string): AxiosPromise<Response<T>>;
    /**
     * List all saved behavioral funnel definitions.
     */
    static listBehavioralFunnels<T>(title_id: string): AxiosPromise<Response<T>>;
    /**
     * Create and save a new behavioral funnel definition.
     * @param data { name: string, description?: string, steps: string[] }
     */
    static createBehavioralFunnel<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Generate the drop-off report for a specific behavioral funnel.
     * @param params { start_date?: string, end_date?: string }
     */
    static behavioralFunnelReport<T>(title_id: string, funnel_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a saved behavioral funnel definition.
     */
    static deleteBehavioralFunnel<T>(title_id: string, funnel_id: string): AxiosPromise<Response<T>>;
    /**
    * Generates a presigned S3 URL for uploading a game build ZIP.
    */
    static getDeploymentUploadUrl<T>(title_id: string): AxiosPromise<Response<T>>;
    /**
     * Confirms the upload and starts the automated deployment/extraction process.
     * @param data { file_path: string, version_string: string, entry_point?: string }
     */
    static confirmDeployment<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Initializes a play session. Handles age-gating and license verification.
     * Returns the CDN URL for WASM/iFrame or Signaling URL for Pixel Streaming.
     */
    static getPlaySession<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all developer payouts for a title.
     */
    static listDeveloperPayouts<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * View a specific payout record.
     */
    static viewDeveloperPayout<T>(title_id: string, payout_id: string): AxiosPromise<Response<T>>;
    /**
     * Get the total earnings and playtime summary for a title.
     */
    static getDeveloperPayoutSummary<T>(title_id: string): AxiosPromise<Response<T>>;
    /**
     * The Aegis Handshake: Verify if a player is allowed to play.
     *
     * This is used by the game engine (Unity/Unreal) to confirm that the
     * current session is valid and the user has a proper license.
     *
     * @see https://api.glitch.fun/api/documentation#/Aegis%20Security/validateGameSession
     *
     * @param title_id The UUID of the game title.
     * @param install_id The UUID of the specific install/session.
     * @returns AxiosPromise containing { valid: boolean, user_name: string, license_type: string }
     */
    static validateInstall<T>(title_id: string, install_id: string): AxiosPromise<Response<T>>;
    /**
     * List all builds/deployments for a specific title.
     * @param title_id The UUID of the title.
     */
    static listBuilds<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all cloud save slots for the player associated with this install.
     */
    static listSaves<T>(title_id: string, install_id: string): AxiosPromise<Response<T>>;
    /**
     * Upload game progress. The user is identified by the install_id.
     */
    static storeSave<T>(title_id: string, install_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Resolve a conflict.
     */
    static resolveSaveConflict<T>(title_id: string, install_id: string, save_id: string, conflict_id: string, choice: 'keep_server' | 'use_client'): AxiosPromise<Response<T>>;
    /**
    * Toggle a game on the current user's wishlist.
    * If the game is not wishlisted, it will be added. If it is, it will be removed.
    *
    * @param title_id The UUID of the title.
    * @param data Optional context: { fingerprint_id?: string, short_link_click_id?: string }
    */
    static wishlistToggle<T>(title_id: string, data?: object): AxiosPromise<Response<T>>;
    /**
     * Record a self-assigned excitement score (1-5) for a wishlisted game.
     *
     * @param title_id The UUID of the title.
     * @param data { score: number } - Must be between 1 and 5.
     */
    static wishlistUpdateScore<T>(title_id: string, data: {
        score: number;
    }): AxiosPromise<Response<T>>;
    /**
     * Retrieve the current user's personal wishlist collection.
     *
     * @param params Optional pagination parameters (?page=1&per_page=25)
     */
    static myWishlists<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get Wishlist Intelligence statistics for a title.
     * Includes funnel data and predictive revenue forecasting.
     * Note: Requires Title Administrator permissions.
     *
     * @param title_id The UUID of the title.
     */
    static wishlistStats<T>(title_id: string): AxiosPromise<Response<T>>;
    /**
     * Get the current user's specific wishlist for a title.
     * @param title_id The UUID of the title.
     */
    static wishlistMe<T>(title_id: string): AxiosPromise<Response<T>>;
    /**
     * Get the consolidated attribution funnel report.
     * @param title_id The UUID of the title.
     */
    static attributionFunnel<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update the status of a specific deployment build.
     * @param title_id The UUID of the title.
     * @param build_id The UUID of the build.
     * @param status The new status ('ready', 'inactive', or 'failed').
     */
    static updateBuildStatus<T>(title_id: string, build_id: string, status: string): AxiosPromise<Response<T>>;
}
export default Titles;
