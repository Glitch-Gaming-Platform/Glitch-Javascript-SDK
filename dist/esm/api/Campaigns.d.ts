import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Campaigns {
    /**
     * List all the Campaigns.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/edab2e3b061347b06c82258622d239e2
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/createCampaign
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/updateCampaign
     *
     * @param campaign_id The id of the campaign to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static update<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignByUuid
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static view<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes a campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/deleteCampaign
     *
     * @param campaign_id The id of the campaign to delete.
     * @returns promise
     */
    static delete<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all the campaign links.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLinks
     *
     * @returns promise
     */
    static listCampaignLinks<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new campaign link.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/storeCampaignLink
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static createCampaignLink<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/1bb1492981b4529693604b03aade8bf6
     *
     * @param campaign_id The id of the campaign to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static updateCampaignLink<T>(campaign_id: string, link_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLink
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static getCampaignLink<T>(campaign_id: string, link_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * List all the influencers associated with a campaign.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerCampaigns
    *
    * @returns promise
    */
    static listInfluencerCampaigns<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create an influencer campaign
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/6d834c837c5f330d6a4cef5786c45c90
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static createInfluencerCampaign<T>(campaign_id: string, user_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Update an influencer campaign.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/updateInfluencerCampaign
    *
    * @param campaign_id The id of the campaign to update.
    * @param data The data to update.
    *
    * @returns promise
    */
    static updateInfluencerCampaign<T>(campaign_id: string, user_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/showInfluencerCampaign
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static viewInfluencerCampaign<T>(campaign_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Mark an influencer campaign as completed.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/markCompleted
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static markInfluencerCampaignComplete<T>(campaign_id: string, user_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Mark an influencer campaign as incomplete.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/afffdc7a0c7fc4d9740f10517c53933e
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static markInfluencerCampaignIncomplete<T>(campaign_id: string, user_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all the links associated with an influencer's campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/edab2e3b061347b06c82258622d239e2
     *
     * @returns promise
     */
    static listInfluencerCampaignLinks<T>(campaign_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Campaigns;
