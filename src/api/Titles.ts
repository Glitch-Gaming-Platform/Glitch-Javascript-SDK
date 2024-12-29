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

    public static updateMediaOrder<T>(title_id: string, media_order: { media_id: string, order: number }[]): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            TitlesRoute.routes.updateMediaOrder,
            { media_order },
            { title_id: title_id }
        );
    }

}

export default Titles;