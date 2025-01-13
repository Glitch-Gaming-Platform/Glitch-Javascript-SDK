import AuthRoutes from "../routes/AuthRoute";
import HashtagRoute from "../routes/HashtagRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Hashtags {

    /**
     * List all the hashtags
     * 
     * 
     * @returns A promise
     */
    public static list<T>(data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(HashtagRoute.routes.list, data, {}, params);
    }

    /**
     * Get the top hashtags for a title, campaign, or schedule.
     * 
     * @param params - e.g. { title_id: '...', limit: 10, sort: 'sum_views', start_date: 'YYYY-MM-DD', end_date: 'YYYY-MM-DD' }
     * @returns AxiosPromise of an array of aggregated hashtags
     */
    public static top<T>(data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(HashtagRoute.routes.top, data, {}, params);
    }

}

export default Hashtags;