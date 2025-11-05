import CampaignsRoute from "../routes/CampaignsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Campaigns {

    /**
     * List all the Campaigns.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/edab2e3b061347b06c82258622d239e2
     * 
     * @returns promise
     */
    public static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.listCampaigns, undefined, undefined, params);
    }

    /**
     * Create a new campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/createCampaign
     * 
     * @param data The data to be passed when creating a campaign.
     * 
     * @returns Promise
     */
    public static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.createCampaign, data, undefined, params);
    }

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
    public static update<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.updateCampaign, data, { campaign_id: campaign_id }, params);
    }

    /**
     * Retrieve the information for a single campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignByUuid
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.viewCampaign, {}, { campaign_id: campaign_id }, params);
    }

    /**
     * Deletes a campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/deleteCampaign
     * 
     * @param campaign_id The id of the campaign to delete.
     * @returns promise
     */
    public static delete<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.deleteCampaign, {}, { campaign_id: campaign_id }, params);
    }

    /**
     * Get the ledger for this campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLedger
     * 
     * @returns promise
     */
    public static getLedger<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.getLedger, undefined, { campaign_id: campaign_id }, params);
    }

    /**
     * Get the post associated with the campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLedger
     * 
     * @returns promise
     */
    public static getPosts<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.getPosts, undefined, { campaign_id: campaign_id }, params);
    }

    /**
     * Get the associated statistics for the campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/campaignStatistics
     * 
     * @returns promise
     */
    public static statistics<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.statistics, undefined, { campaign_id: campaign_id }, params);
    }

    /**
     * Get the stream view counts for the campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignStreamViewCounts
     * 
     * @returns promise
     */
    public static getStreamViewCounts<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.streamViewCounts, undefined, { campaign_id: campaign_id }, params);
    }

    /**
     * Retrieve recommended influencers for a campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/recommendInfluencers
     * 
     * @returns promise
     */
    public static getRecommendedInfluencers<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.getRecommendedInfluencers, undefined, { campaign_id: campaign_id }, params);
    }


    /**
     * List all the campaign links.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLinks
     * 
     * @returns promise
     */
    public static listCampaignLinks<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.listCampaignLinks, undefined, { campaign_id: campaign_id }, params);
    }

    /**
     * List all the campaign links.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLinks
     * 
     * @returns promise
     */
    public static listInfluencerCampaignLinkClicks<T>(campaign_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.listInfluencerCampaignLinkClicks, undefined, { campaign_id: campaign_id, user_id: user_id }, params);
    }


    /**
     * Create a new campaign link.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/storeCampaignLink
     * 
     * @param data The data to be passed when creating a campaign.
     * 
     * @returns Promise
     */
    public static createCampaignLink<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.createCampaignLink, data, { campaign_id: campaign_id }, params);
    }

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
    public static updateCampaignLink<T>(campaign_id: string, link_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.updateCampaignLink, data, { campaign_id: campaign_id, link_id: link_id }, params);
    }

    /**
     * Retrieve the information for a single campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLink
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static getCampaignLink<T>(campaign_id: string, link_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.getCampaignLink, {}, { campaign_id: campaign_id, link_id: link_id }, params);
    }

    /**
    * List all the influencers associated with a campaign.
    * 
    * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerCampaigns
    * 
    * @returns promise
    */
    public static listInfluencerCampaigns<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.listInfluencerCampaigns, undefined, undefined, params);
    }

    /**
     * Create an influencer campaign
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/6d834c837c5f330d6a4cef5786c45c90
     * 
     * @param data The data to be passed when creating a campaign.
     * 
     * @returns Promise
     */
    public static createInfluencerCampaign<T>(campaign_id: string, user_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.createInfluencerCampaign, data, { campaign_id: campaign_id }, params);
    }

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
    public static updateInfluencerCampaign<T>(campaign_id: string, user_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.updateInfluencerCampaign, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }

    /**
     * Retrieve the information for a single campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/showInfluencerCampaign
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static viewInfluencerCampaign<T>(campaign_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.viewInfluencerCampaign, {}, { campaign_id: campaign_id, user_id: user_id }, params);
    }

    /**
     * Mark an influencer campaign as completed.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/markCompleted
     * 
     * @param data The data to be passed when creating a campaign.
     * 
     * @returns Promise
     */
    public static markInfluencerCampaignComplete<T>(campaign_id: string, user_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.markInfluencerCampaignComplete, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }

    /**
     * Mark an influencer campaign as incomplete.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/afffdc7a0c7fc4d9740f10517c53933e
     * 
     * @param data The data to be passed when creating a campaign.
     * 
     * @returns Promise
     */
    public static markInfluencerCampaignIncomplete<T>(campaign_id: string, user_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.markInfluencerCampaignIncomplete, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }

    /**
     * Get all the links associated with an influencer's campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/edab2e3b061347b06c82258622d239e2
     * 
     * @returns promise
     */
    public static listInfluencerCampaignLinks<T>(campaign_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.listInfluencerCampaignLinks, undefined, { campaign_id: campaign_id, user_id: user_id }, params);
    }

    /**
    * List all the campaign mentions.
    * 
    * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLinks
    * 
    * @returns promise
    */
    public static listCampaignMentions<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.listCampaignMentions, undefined, { campaign_id: campaign_id }, params);
    }

    /**
     * Create a new campaign mention.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/storeCampaignLink
     * 
     * @param data The data to be passed when creating a campaign.
     * 
     * @returns Promise
     */
    public static createCampaignMention<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.createCampaignMention, data, { campaign_id: campaign_id }, params);
    }

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
    public static updateCampaignMention<T>(campaign_id: string, mention_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.updateCampaignMention, data, { campaign_id: campaign_id, mention_id: mention_id }, params);
    }

    /**
     * Retrieve the information for a single campaign mention.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLink
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static getCampaignMention<T>(campaign_id: string, mention_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.getCampaignMention, {}, { campaign_id: campaign_id, mention_id: mention_id }, params);
    }

    /**
    * Delete the information for a single campaign mention.
    * 
    * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLink
    * 
    * @param campaign_id The id fo the campaign to retrieve.
    * 
    * @returns promise
    */
    public static deleteCampaignMention<T>(campaign_id: string, mention_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.deleteCampaignMention, {}, { campaign_id: campaign_id, mention_id: mention_id }, params);
    }

    /**
     * Associate a country with the campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/addCountryToCampaign
     * 
     * @param data The country information to be passed to update the country campaigns information.
     * 
     * @returns Promise
     */
    public static addCountry<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.addCountry, data, { campaign_id: campaign_id }, params);
    }

    /**
     * Remove a country
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeCountry
     * 
     * @param country_id The id of the country to remove.
     * 
     * @returns Promise
     */
    public static removeCountry<T>(campaign_id: string, country_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.removeCountry, undefined, { campaign_id: campaign_id, country_id: country_id }, params);
    }

    /**
     * Associate a gender with the campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/addGenderToCampaign
     * 
     * @param data The gener information to be passed to update the gender information.
     * 
     * @returns Promise
     */
    public static addGender<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.addGender, data, { campaign_id: campaign_id }, params);
    }

    /**
     * Remove a gender
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeGender
     * 
     * @param gender_id The id of the gender to remove.
     * 
     * @returns Promise
     */
    public static removeGender<T>(campaign_id: string, gender_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.removeGender, undefined, { campaign_id: campaign_id, gender_id: gender_id }, params);
    }

    /**
     * Associate an ethnicity with the campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/addGenderToCampaign
     * 
     * @param data The ethnicity information to be passed to update the campaign information.
     * 
     * @returns Promise
     */
    public static addEthnicity<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.addEthnicity, data, { campaign_id: campaign_id }, params);
    }

    /**
     * Remove an ethnicity
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeGender
     * 
     * @param gender_id The id of the ethnicity to remove.
     * 
     * @returns Promise
     */
    public static removeEthnicity<T>(campaign_id: string, ethnicity_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.removeEthnicity, undefined, { campaign_id: campaign_id, ethnicity_id: ethnicity_id }, params);
    }

    /**
    * Associate a type with the campaign.
    * 
    * @see https://api.glitch.fun/api/documentation#/Campaigns/addGenderToCampaign
    * 
    * @param data The type information to be passed to update the campaign information.
    * 
    * @returns Promise
    */
    public static addType<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.addType, data, { campaign_id: campaign_id }, params);
    }

    /**
     * Remove an type
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeGender
     * 
     * @param type_id The id of the ethnicity to remove.
     * 
     * @returns Promise
     */
    public static removeType<T>(campaign_id: string, type_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.removeType, undefined, { campaign_id: campaign_id, type_id: type_id }, params);
    }


    /**
     * Get a list of influencer invites that have been sent for this campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerInvites
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static listInfluencerInvites<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.listInfluencerInvites, {}, { campaign_id: campaign_id }, params);
    }

    /**
     * Invites an influencer to join this campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/inviteInfluencer
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static sendInfluencerInvite<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.sendInfluencerInvite, data, { campaign_id: campaign_id }, params);
    }

    /**
     * Invites an influencer to join this campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerInvite
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static viewInfluencerInvite<T>(campaign_id: string, influencer_id: string, token: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        // Ensure params is defined and includes the token
        const updatedParams = { ...params, token };

        return Requests.processRoute(
            CampaignsRoute.routes.viewInfluencerInvite,
            {},
            { campaign_id: campaign_id, influencer_id: influencer_id },
            updatedParams
        );
    }

    /**
     * Updates the influencer invite information.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/updateInfluencerInvite
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static updateInfluencerInvite<T>(campaign_id: string, influencer_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {


        return Requests.processRoute(CampaignsRoute.routes.updateInfluencerInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    }

    /**
     * Updates the influencer invite compenstation information.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/updateInfluencerCompensationInvite
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static updateInfluencerCompensationInvite<T>(campaign_id: string, influencer_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {


        return Requests.processRoute(CampaignsRoute.routes.updateInfluencerCompensationInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    }

    /**
    * The route for an influencer to accept an invite.
    * 
    * @see https://api.glitch.fun/api/documentation#/Campaigns/acceptInfluencerInvite
    * 
    * @param campaign_id The id fo the campaign to retrieve.
    * 
    * @returns promise
    */
    public static acceptInfluencerInvite<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.acceptInfluencerInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    }

    /**
     * The route for an influencer to decline an invite.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/delinceInfluencerInvite
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static declineInfluencerInvite<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.declineInfluencerInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    }

    /**
     * The route for an influencer to decline an invite.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/withdrawInfluencerInvite
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static widthdrawInfluencerInvite<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.widthdrawInfluencerInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    }

    /**
    * The route to mark an influencer reachout and finished, and it will no longer send reachouts.
    * 
    * @see https://api.glitch.fun/api/documentation#/Campaigns/finishInfluencerInvite
    * 
    * @param campaign_id The id fo the campaign to retrieve.
    * 
    * @returns promise
    */
    public static finishInfluencerInvite<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.finishInfluencerInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    }

    /**
   * The route to accept an influnecers request to join the campaign.
   * 
   * @see https://api.glitch.fun/api/documentation#/Campaigns/acceptInfluencer
   * 
   * @param campaign_id The id fo the campaign to retrieve.
   * 
   * @returns promise
   */
    public static acceptInfluencerRequest<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.acceptInfluencerRequest, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }

    /**
     * The route to deny an influencer request to join the campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/denyInfluencer
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static declineInfluencerRequest<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.declineInfluencerRequest, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }

    /**
     * The route the route to mark the influencers request as in review.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/reviewInfluencer
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static reviewInfluencerRequest<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.reviewInfluencerRequest, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }

    /**
     * Generate post content for the influencer to help them with their content creation.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/generatePostContent
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static generateContentForInfluencer<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.generateContentForInfluencer, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }

    /**
     * Get a list of all active campaigns.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getActiveCampaignLinks
     * 
     * @returns promise
     */
    public static getActiveCampaignLinks<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.getActiveCampaignLinks, undefined, undefined, params);
    }

    /**
     * Generate a contract for the influencer based on the values in the invite.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/generateInfluencerContract
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static generateContractFromInvite<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.generateContractFromInvite, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    }

    /**
     * Send a contract with Docusign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/sendContractWithDocusign
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static sendContractWithDocusign<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.sendContractWithDocusign, data, { campaign_id: campaign_id, influencer_id: influencer_id }, params);
    }

    /**
     * Resend the acceptance email for the influencer.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/resendInfluencerAcceptance
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static resendAcceptanceEmail<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.resendAcceptanceEmail, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }

    /**
     * Pay the influencer a custom amount for the campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/payInfluencer
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static payInfluencer<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.payInfluencer, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }

    /**
     * Get the ledger for this campaign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignPayouts
     * 
     * @returns promise
     */
    public static listPayouts<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.getLedger, undefined, { campaign_id: campaign_id }, params);
    }

    /**
    * Generate a contract for the influencer based on the values in the campaign.
    * 
    * @see https://api.glitch.fun/api/documentation#/Campaigns/generateCampaignContract
    * 
    * @param campaign_id The id fo the campaign to retrieve.
    * 
    * @returns promise
    */
    public static generateCampaignContract<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.generateCampaignContract, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }

    /**
     * Send a contract with Docusign.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns/sendCampaignContractWithDocusign
     * 
     * @param campaign_id The id fo the campaign to retrieve.
     * 
     * @returns promise
     */
    public static sendCampaignContractWithDocusign<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CampaignsRoute.routes.sendCampaignContractWithDocusign, data, { campaign_id: campaign_id, user_id: user_id }, params);
    }


    /**
     * Search IGDB for the campaign's game.
     * @param campaign_id The UUID of the campaign.
     * @param params Query parameters (e.g., search_query, limit).
     * @returns promise
     */
    public static sourcingSearchIgdbForCampaignGame<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.sourcingSearchIgdbForCampaignGame, undefined, { campaign_id }, params);
    }

    /**
     * Find popular similar games from IGDB.
     * @param campaign_id The UUID of the campaign.
     * @param params Query parameters (e.g., igdb_id, limit).
     * @returns promise
     */
    public static sourcingGetSimilarIgdbGames<T>(campaign_id: string, params: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.sourcingGetSimilarIgdbGames, undefined, { campaign_id }, params);
    }

    /**
     * Find content creators for selected games. This does not save them to the database.
     * @param campaign_id The UUID of the campaign.
     * @param data The search criteria (source, igdb_ids, etc.).
     * @returns promise
     */
    public static sourcingFindCreators<T>(campaign_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.sourcingFindCreators, data, { campaign_id });
    }

    /**
     * Update campaign sourcing settings.
     * @param campaign_id The UUID of the campaign.
     * @param data The settings to update (igdb_id, similar_game_igdb_ids, etc.).
     * @returns promise
     */
    public static updateSourcingSettings<T>(campaign_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.updateSourcingSettings, data, { campaign_id });
    }

    /**
     * Find and save content creators for selected games to the database.
     * @param campaign_id The UUID of the campaign.
     * @param data The search criteria (source, igdb_ids, etc.).
     * @returns promise
     */
    public static sourcingFindAndSaveCreators<T>(campaign_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.sourcingFindAndSaveCreators, data, { campaign_id });
    }

    /**
     * Get sourced creators for a campaign from the database.
     * @param campaign_id The UUID of the campaign.
     * @param params Query parameters for filtering, sorting, and pagination.
     * @returns promise
     */
    public static getSourcedCreators<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.getSourcedCreators, undefined, { campaign_id }, params);
    }

    /**
     * Get a single sourced creator.
     * @param campaign_id The UUID of the campaign.
     * @param sourced_creator_id The UUID of the sourced creator.
     * @returns promise
     */
    public static getSourcedCreator<T>(campaign_id: string, sourced_creator_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.getSourcedCreator, undefined, { campaign_id, sourced_creator_id });
    }

    /**
     * Update a sourced creator (e.g., approve or reject).
     * @param campaign_id The UUID of the campaign.
     * @param sourced_creator_id The UUID of the sourced creator to update.
     * @param data The update data (e.g., is_approved, is_rejected).
     * @returns promise
     */
    public static updateSourcedCreator<T>(campaign_id: string, sourced_creator_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.updateSourcedCreator, data, { campaign_id, sourced_creator_id });
    }

    /**
     * Assigns an available access key to an influencer for a specific campaign.
     * This will find the next available key for the given platform and assign it.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/assignKey
     *
     * @param campaign_id The ID of the campaign.
     * @param user_id The ID of the user (influencer).
     * @param data The platform for which to assign a key.
     * @param data.platform The platform of the key to assign (e.g., 'steam').
     * @returns promise
     */
    public static assignKeyToInfluencer<T>(campaign_id: string, user_id: string, data: { platform: string }, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.assignKeyToInfluencer, data, { campaign_id, user_id }, params);
    }

    /**
     * Manually trigger a real-time profile enrichment for a sourced creator.
     * This synchronously scrapes and parses social media profiles to enrich the creator's data and returns the updated record.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns%20Sourcing/enrichSourcedCreator
     * 
     * @param campaign_id The UUID of the campaign.
     * @param sourced_creator_id The UUID of the sourced creator to enrich.
     * @returns promise containing the fully enriched SourcedCreator object.
     */
    public static enrichSourcedCreator<T>(campaign_id: string, sourced_creator_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.enrichSourcedCreator, {}, { campaign_id, sourced_creator_id });
    }

    /**
    * Find and save Twitch creators for selected games to the database.
    * @param campaign_id The UUID of the campaign.
    * @param data The search criteria (source, igdb_ids, etc.).
    * @returns promise
    */
    public static sourcingFindAndSaveTwitchCreators<T>(campaign_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.sourcingFindAndSaveTwitchCreators, data, { campaign_id });
    }

    /**
     * Find and save YouTube creators for selected games to the database.
     * @param campaign_id The UUID of the campaign.
     * @param data The search criteria (igdb_ids, period).
     * @returns promise
     */
    public static sourcingFindAndSaveYouTubeCreators<T>(campaign_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.sourcingFindAndSaveYouTubeCreators, data, { campaign_id });
    }

    /**
     * Export sourced creators for a campaign to a CSV or XLSX file.
     * This method applies the same filtering and sorting parameters as getSourcedCreators.
     * The browser will automatically trigger a download for the returned file.
     * 
     * @see https://api.glitch.fun/api/documentation#/Campaigns%20Sourcing/exportSourcedCreators
     * 
     * @param campaign_id The UUID of the campaign.
     * @param params Query parameters for the export, including the required 'format' and any filters.
     * @param params.format The desired file format ('csv' or 'xlsx').
     * @param params.search Optional search term.
     * @param params.status Optional status filter ('pending', 'approved', 'rejected').
     * @param params.has_email Optional filter for creators with an email address (true/false).
     * @returns A promise that resolves with the file blob for download.
     */
    public static exportSourcedCreators<T>(campaign_id: string, params: { format: 'csv' | 'xlsx', [key: string]: any }): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.exportSourcedCreators, undefined, { campaign_id }, params);
    }

    /**
    * Search IGDB for any game by a query string.
    * @param campaign_id The UUID of the campaign (for permission checking).
    * @param params Query parameters including 'search_query' and optional 'limit'.
    * @returns promise
    */
    public static sourcingSearchAnyIgdbGame<T>(campaign_id: string, params: { search_query: string, limit?: number }): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.sourcingSearchAnyIgdbGame, undefined, { campaign_id }, params);
    }

    /**
     * Get full game details from a list of IGDB IDs.
     * @param campaign_id The UUID of the campaign.
     * @param data An object containing the array of IGDB IDs.
     * @param data.igdb_ids An array of IGDB game IDs.
     * @returns promise
     */
    public static sourcingGetGamesByIds<T>(campaign_id: string, data: { igdb_ids: number[] }): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.sourcingGetGamesByIds, data, { campaign_id });
    }

    /**
     * Get full game details from a list of IGDB IDs.
     * @param campaign_id The UUID of the campaign.
     * @param data An object containing the array of IGDB IDs.
     * @param data.igdb_ids An array of IGDB game IDs.
     * @returns promise
     */
    public static updateAutoInviteCriteria<T>(campaign_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.updateAutoInviteCriteria, data, { campaign_id });
    }

    public static updateCustomRanking<T>(campaign_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.updateCustomRanking, data, { campaign_id });
    }

    public static updateCreatorBucket<T>(campaign_id: string, creator_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.updateCreatorBucket, data, { campaign_id, creator_id });
    }

    public static reRankSourcedCreators<T>(campaign_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.reRankSourcedCreators, data, { campaign_id });
    }

    /**
     * Queue multiple sourced creators for profile enrichment.
     * This dispatches a background job for each creator to find their social media profiles and contact information.
     * 
     * @param campaign_id The UUID of the campaign.
     * @param data An object containing the array of SourcedCreator IDs to enrich.
     * @param data.creator_ids An array of SourcedCreator UUIDs.
     * @returns A promise that resolves with a confirmation message and the count of queued jobs.
     */
    public static bulkEnrichSourcedCreators<T>(campaign_id: string, data: { creator_ids: string[] }): AxiosPromise<Response<T>> {
        return Requests.processRoute(CampaignsRoute.routes.bulkEnrichSourcedCreators, data, { campaign_id });
    }


}

export default Campaigns;