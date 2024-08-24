import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Influencers {
    /**
     * Add a new influencer to the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/createInfluencersNotes
     *
     * @returns promise
     */
    static addInfluencer<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    /**
     * Generate a profile for an influencer based on their data.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/generateInfluencerProfile
     *
     * @returns promise
     */
    static generateProfile<T>(influencer_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all the notes left about an influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencersNotes
     *
     * @returns promise
     */
    static listNotes<T>(influencer_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * View a note left about an influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencersNote
     *
     * @returns promise
     */
    static viewNote<T>(influencer_id: string, note_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new note about an influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/createInfluencersNotes
     *
     * @returns promise
     */
    static createNote<T>(influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Update a note about an influencer.
    *
    * @see https://api.glitch.fun/api/documentation#/Influencers/updateInfluencersNote
    *
    * @returns promise
    */
    static updateNote<T>(influencer_id: string, note_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a note about an influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/deleteInfluencersNote
     *
     * @returns promise
     */
    static deleteNote<T>(influencer_id: string, note_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get a list of contracts associated with an influencer.
    *
    * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencers
    *
    * @returns promise
    */
    static listContracts<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Influencers;
