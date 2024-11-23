import MediaRoute from "../routes/MediaRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosProgressEvent, AxiosPromise } from "axios";

class Media {
    /**
     * Upload media content using a File object.
     * 
     * @see https://api.glitch.fun/api/documentation#/Media%20Route/uploadMedia
     * 
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     * 
     * @returns promise
     */
    public static uploadFile<T>(file: File, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>> {
        return Requests.uploadFile(MediaRoute.routes.upload.url, 'media', file, data, params, onUploadProgress);
    }

    /**
     * Upload media content using a Blob.
     * 
     * @see https://api.glitch.fun/api/documentation#/Media%20Route/uploadMedia
     * 
     * @param blob The Blob object to upload.
     * @param data Any additional data to pass along to the upload.
     * 
     * @returns promise
     */
    public static uploadBlob<T>(blob: Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>> {
        return Requests.uploadBlob(MediaRoute.routes.upload.url, 'media', blob, data, params, onUploadProgress);
    }

    /**
     * Get media details.
     * 
     * @see https://api.glitch.fun/api/documentation#/Media%20Route/getMedia
     * 
     * @param id The ID of the media item.
     * 
     * @returns promise
     */
    public static get<T>(media_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(MediaRoute.routes.getMedia, {}, { media_id: media_id }, params);
    }
}

export default Media;
