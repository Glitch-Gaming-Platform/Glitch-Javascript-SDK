import InfluencerRoutes from "../routes/InfluencerRoutes";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Influencers {

    /**
     * Get a list of influencers available on he platform.
     * 
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencers
     * 
     * @returns promise
     */
    public static listInfluencers<T>(params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(InfluencerRoutes.routes.listInfluencers, undefined, undefined, params);
    }

    /**
     * Retrieve information on a single influencer.
     * 
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencerById
     * 
     * @returns promise
     */
    public static viewInfluencer<T>(params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(InfluencerRoutes.routes.viewInfluencer, undefined, undefined, params);
    }

}

export default Influencers;