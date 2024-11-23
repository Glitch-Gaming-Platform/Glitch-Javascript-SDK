import Response from "../util/Response";
import { AxiosProgressEvent, AxiosPromise } from "axios";
declare class Media {
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
    static uploadFile<T>(file: File, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
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
    static uploadBlob<T>(blob: Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    /**
     * Get media details.
     *
     * @see https://api.glitch.fun/api/documentation#/Media%20Route/getMedia
     *
     * @param id The ID of the media item.
     *
     * @returns promise
     */
    static get<T>(media_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Media;
