import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class ShortLinks {
    /**
     * List all short links with optional filters
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new short link
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a specific short link by ID
     */
    static view<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a short link
     */
    static update<T>(id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default ShortLinks;
