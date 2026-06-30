import { AxiosPromise, AxiosProgressEvent } from 'axios';
import Config from '../config/Config';
import Route from '../routes/interface';
import Response from './Response';
declare class Requests {
    private static config;
    private static baseUrl;
    private static authToken;
    private static community_id?;
    constructor(config: Config);
    static setBaseUrl(url: string): void;
    static setAuthToken(token: string): void;
    static setCommunityID(community_id: string | undefined): void;
    /**
     * Build an absolute API URL using the currently configured base URL.
     *
     * This is useful for browser primitives such as EventSource that need a URL
     * string instead of an Axios request wrapper.
     */
    static buildUrl(url: string, params?: Record<string, any>): string;
    private static request;
    static get<T>(url: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static download(url: string, params?: Record<string, any>): AxiosPromise<Blob>;
    static post<T>(url: string, data: any, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static put<T>(url: string, data: any, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static patch<T>(url: string, data: any, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static delete<T>(url: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static uploadFile<T>(url: string, filename: string, file: File | Blob, data?: any, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static postFormData<T>(url: string, formData: FormData, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static uploadBlob<T>(url: string, filename: string, blob: Blob, data?: any, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static uploadFileInChunks<T>(file: File, uploadUrl: string, onProgress?: (totalSize: number, amountUploaded: number) => void, data?: any, chunkSize?: number): Promise<void>;
    static processRoute<T>(route: Route, data?: object, routeReplace?: {
        [key: string]: any;
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Requests;
