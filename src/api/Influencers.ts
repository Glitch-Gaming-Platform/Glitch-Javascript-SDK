import InfluencerRoutes from "../routes/InfluencerRoutes";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Influencers {

    /**
     * Add a new influencer to the platform.
     * 
     * @see https://api.glitch.fun/api/documentation#/Influencers/createInfluencersNotes
     * 
     * @returns promise
     */
    public static addInfluencer<T>(data?: object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(InfluencerRoutes.routes.addInfluencer, data, {}, params);
    }

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

    /**
     * List all the notes left about an influencer.
     * 
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencersNotes
     * 
     * @returns promise
     */
    public static listNotes<T>(influencer_id : string, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(InfluencerRoutes.routes.listNotes, undefined, {influencer_id : influencer_id}, params);
    }

    /**
     * View a note left about an influencer.
     * 
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencersNote
     * 
     * @returns promise
     */
    public static viewNote<T>(influencer_id : string,  note_id : string, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(InfluencerRoutes.routes.viewNote, undefined, {influencer_id : influencer_id, note_id : note_id}, params);
    }

    /**
     * Create a new note about an influencer.
     * 
     * @see https://api.glitch.fun/api/documentation#/Influencers/createInfluencersNotes
     * 
     * @returns promise
     */
    public static createNote<T>(influencer_id : string, data?: object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(InfluencerRoutes.routes.createNote, data, {influencer_id : influencer_id}, params);
    }

     /**
     * Update a note about an influencer.
     * 
     * @see https://api.glitch.fun/api/documentation#/Influencers/updateInfluencersNote
     * 
     * @returns promise
     */
     public static updateNote<T>(influencer_id : string, note_id : string, data?: object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(InfluencerRoutes.routes.updateNote, data, {influencer_id : influencer_id, note_id : note_id}, params);
    }

    /**
     * Delete a note about an influencer.
     * 
     * @see https://api.glitch.fun/api/documentation#/Influencers/deleteInfluencersNote
     * 
     * @returns promise
     */
    public static deleteNote<T>(influencer_id : string, note_id : string, data?: object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(InfluencerRoutes.routes.deleteNote, data, {influencer_id : influencer_id, note_id : note_id}, params);
    }

     /**
     * Get a list of contracts associated with an influencer.
     * 
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencers
     * 
     * @returns promise
     */
     public static listContracts<T>(params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(InfluencerRoutes.routes.listContracts, undefined, undefined, params);
    }


}

export default Influencers;