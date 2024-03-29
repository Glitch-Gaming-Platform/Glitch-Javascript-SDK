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

        return Requests.processRoute(CampaignsRoute.routes.getCampaignLink, {}, { campaign_id: campaign_id, link_id: link_id  }, params);
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
        return Requests.processRoute(CampaignsRoute.routes.createInfluencerCampaign , data, { campaign_id: campaign_id }, params);
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
        return Requests.processRoute(CampaignsRoute.routes.listInfluencerCampaignLinks , undefined, { campaign_id: campaign_id, user_id: user_id }, params);
    }

}

export default Campaigns;