import Config from '../config/Config';
import Route from '../routes/interface';
import Response from './Response';
declare class Requests {
    config: Config;
    private static baseUrl;
    private static authToken;
    constructor(config: Config);
    static setConfig(config: Config): void;
    static setBaseUrl(url: string): void;
    static setAuthToken(token: string): void;
    private static request;
    static get<T>(url: string): Promise<Response<T>>;
    static post<T>(url: string, data: any): Promise<Response<T>>;
    static put<T>(url: string, data: any): Promise<Response<T>>;
    static delete<T>(url: string): Promise<Response<T>>;
    /**
     *  The Route class contains the method and url, thereforce items can be
     *  automatically routed depending on the configuration.
     *
     * @param route
     * @param data
     * @returns
     */
    static processRoute(route: Route, data?: object, routeReplace?: object): Promise<Response<unknown> | undefined>;
}
export default Requests;
