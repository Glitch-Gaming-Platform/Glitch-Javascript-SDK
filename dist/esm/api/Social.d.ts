import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Social {
    /**
     * Give a tip to another user
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    static postVideoToTikTokFile<T>(file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static postVideoToTikTokBlob<T>(blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static postVideoToFacebookGroupFile<T>(file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static postVideoToFacebookGroupBlob<T>(blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static postVideoToTwitter<T>(file: File, data?: object, onProgress?: (totalSize: number, amountUploaded: number) => void, params?: Record<string, any>): Promise<void>;
}
export default Social;
