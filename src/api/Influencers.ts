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
    public static viewInfluencer<T>(influencer_id : string, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(InfluencerRoutes.routes.viewInfluencer, undefined, {influencer_id : influencer_id}, params);
    }

    /**
     * Generate a profile for an influencer based on their data.
     * 
     * @see https://api.glitch.fun/api/documentation#/Influencers/generateInfluencerProfile
     * 
     * @returns promise
     */
    public static generateProfile<T>(influencer_id : string, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(InfluencerRoutes.routes.generateProfile, undefined, {influencer_id : influencer_id}, params);
    }

}

export default Influencers;