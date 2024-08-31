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
     * Get the ledger for this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLedger
     *
     * @returns promise
     */
    static getLedger<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the post associated with the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLedger
     *
     * @returns promise
     */
    static getPosts<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the associated statistics for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/campaignStatistics
     *
     * @returns promise
     */
    static statistics<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the stream view counts for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignStreamViewCounts
     *
     * @returns promise
     */
    static getStreamViewCounts<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve recommended influencers for a campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/recommendInfluencers
     *
     * @returns promise
     */
    static getRecommendedInfluencers<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all the campaign links.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLinks
     *
     * @returns promise
     */
    static listCampaignLinks<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all the campaign links.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLinks
     *
     * @returns promise
     */
    static listInfluencerCampaignLinkClicks<T>(campaign_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    /**
    * List all the campaign mentions.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLinks
    *
    * @returns promise
    */
    static listCampaignMentions<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new campaign mention.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/storeCampaignLink
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static createCampaignMention<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a campaign mention.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/1bb1492981b4529693604b03aade8bf6
     *
     * @param campaign_id The id of the campaign to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static updateCampaignMention<T>(campaign_id: string, mention_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single campaign mention.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLink
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static getCampaignMention<T>(campaign_id: string, mention_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Delete the information for a single campaign mention.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLink
    *
    * @param campaign_id The id fo the campaign to retrieve.
    *
    * @returns promise
    */
    static deleteCampaignMention<T>(campaign_id: string, mention_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Associate a country with the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/addCountryToCampaign
     *
     * @param data The country information to be passed to update the country campaigns information.
     *
     * @returns Promise
     */
    static addCountry<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove a country
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeCountry
     *
     * @param country_id The id of the country to remove.
     *
     * @returns Promise
     */
    static removeCountry<T>(campaign_id: string, country_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Associate a gender with the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/addGenderToCampaign
     *
     * @param data The gener information to be passed to update the gender information.
     *
     * @returns Promise
     */
    static addGender<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove a gender
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeGender
     *
     * @param gender_id The id of the gender to remove.
     *
     * @returns Promise
     */
    static removeGender<T>(campaign_id: string, gender_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Associate an ethnicity with the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/addGenderToCampaign
     *
     * @param data The ethnicity information to be passed to update the campaign information.
     *
     * @returns Promise
     */
    static addEthnicity<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove an ethnicity
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeGender
     *
     * @param gender_id The id of the ethnicity to remove.
     *
     * @returns Promise
     */
    static removeEthnicity<T>(campaign_id: string, ethnicity_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Associate a type with the campaign.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/addGenderToCampaign
    *
    * @param data The type information to be passed to update the campaign information.
    *
    * @returns Promise
    */
    static addType<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove an type
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeGender
     *
     * @param type_id The id of the ethnicity to remove.
     *
     * @returns Promise
     */
    static removeType<T>(campaign_id: string, type_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a list of influencer invites that have been sent for this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerInvites
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static listInfluencerInvites<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Invites an influencer to join this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/inviteInfluencer
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static sendInfluencerInvite<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Invites an influencer to join this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static viewInfluencerInvite<T>(campaign_id: string, influencer_id: string, token: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the influencer invite information.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/updateInfluencerInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static updateInfluencerInvite<T>(campaign_id: string, influencer_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the influencer invite compenstation information.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/updateInfluencerCompensationInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static updateInfluencerCompensationInvite<T>(campaign_id: string, influencer_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * The route for an influencer to accept an invite.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/acceptInfluencerInvite
    *
    * @param campaign_id The id fo the campaign to retrieve.
    *
    * @returns promise
    */
    static acceptInfluencerInvite<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * The route for an influencer to decline an invite.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/delinceInfluencerInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static declineInfluencerInvite<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * The route for an influencer to decline an invite.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/withdrawInfluencerInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static widthdrawInfluencerInvite<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * The route to mark an influencer reachout and finished, and it will no longer send reachouts.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/finishInfluencerInvite
    *
    * @param campaign_id The id fo the campaign to retrieve.
    *
    * @returns promise
    */
    static finishInfluencerInvite<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
   * The route to accept an influnecers request to join the campaign.
   *
   * @see https://api.glitch.fun/api/documentation#/Campaigns/acceptInfluencer
   *
   * @param campaign_id The id fo the campaign to retrieve.
   *
   * @returns promise
   */
    static acceptInfluencerRequest<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * The route to deny an influencer request to join the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/denyInfluencer
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static declineInfluencerRequest<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * The route the route to mark the influencers request as in review.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/reviewInfluencer
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static reviewInfluencerRequest<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Generate post content for the influencer to help them with their content creation.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/generatePostContent
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static generateContentForInfluencer<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a list of all active campaigns.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getActiveCampaignLinks
     *
     * @returns promise
     */
    static getActiveCampaignLinks<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Generate a contract for the influencer based on the values in the invite.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/generateInfluencerContract
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static generateContractFromInvite<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send a contract with Docusign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/sendContractWithDocusign
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static sendContractWithDocusign<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Resend the acceptance email for the influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/resendInfluencerAcceptance
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static resendAcceptanceEmail<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Pay the influencer a custom amount for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/payInfluencer
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static payInfluencer<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Campaigns;
