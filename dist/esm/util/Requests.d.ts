import Config from '../config/Config';
import Route from '../routes/interface';
import Response from './Response';
import { AxiosPromise } from 'axios';
declare class Requests {
    config: Config;
    private static baseUrl;
    private static authToken;
    constructor(config: Config);
    /**
     * Sets the configuration of the system.
     *
     * @param config Config The config class.
     */
    static setConfig(config: Config): void;
    /**
     * Sets the base url of the API.
     *
     * @param url The url to of the API.
     */
    static setBaseUrl(url: string): void;
    /**
     * Sets the JSON Web token
     *
     * @param token
     */
    static setAuthToken(token: string): void;
    private static request;
    /**
     * Calls a GET request to the url endpoint.
     *
     * @param url
     * @returns
     */
    static get<T>(url: string): AxiosPromise<Response<T>>;
    static post<T>(url: string, data: any): AxiosPromise<Response<T>>;
    static put<T>(url: string, data: any): AxiosPromise<Response<T>>;
    static delete<T>(url: string): AxiosPromise<Response<T>>;
    static uploadFile<T>(url: string, filename: string, file: File, data?: any): AxiosPromise<Response<T>>;
    static uploadBlob<T>(url: string, filename: string, blob: Blob, data?: any): AxiosPromise<Response<T>>;
    /**
     *  The Route class contains the method and url, thereforce items can be
     *  automatically routed depending on the configuration.
     *
     * @param route
     * @param data
     * @returns
     */
    static processRoute<T>(route: Route, data?: object, routeReplace?: object): AxiosPromise<Response<T>>;
}
export default Requests;
