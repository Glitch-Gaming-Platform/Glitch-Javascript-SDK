import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Influencers {
    /**
     * Get a list of influencers available on he platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencers
     *
     * @returns promise
     */
    static listInfluencers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve information on a single influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencerById
     *
     * @returns promise
     */
    static viewInfluencer<T>(influencer_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Influencers;
