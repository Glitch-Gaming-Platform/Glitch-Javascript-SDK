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
}
export default Titles;
