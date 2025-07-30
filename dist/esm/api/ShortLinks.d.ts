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
    /**
    * Get click-summary report
    *  - Example usage: ShortLinks.clickSummary({ short_link_id: 'uuid-here' })
    */
    static clickSummary<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get geo & device breakdown report
     *  - Example usage: ShortLinks.geoDeviceBreakdown({ short_link_id: 'uuid-here' })
     */
    static geoDeviceBreakdown<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get time-series report
     *  - Example usage: ShortLinks.timeSeries({ short_link_id: 'uuid-here', group_by: 'day' })
     */
    static timeSeries<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get referrer & UTM report
     *  - Example usage: ShortLinks.referrerReport({ short_link_id: 'uuid-here' })
     */
    static referrerReport<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default ShortLinks;
