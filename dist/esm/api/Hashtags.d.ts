import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Hashtags {
    /**
     * List all the hashtags
     *
     *
     * @returns A promise
     */
    static list<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the top hashtags for a title, campaign, or schedule.
     *
     * @param params - e.g. { title_id: '...', limit: 10, sort: 'sum_views', start_date: 'YYYY-MM-DD', end_date: 'YYYY-MM-DD' }
     * @returns AxiosPromise of an array of aggregated hashtags
     */
    static top<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Hashtags;
