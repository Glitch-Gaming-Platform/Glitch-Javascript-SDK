import AdsRoute from "../routes/AdsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Ads {
    // ----------------------------------------------------------------------
    // AD CAMPAIGNS
    // ----------------------------------------------------------------------

    /**
     * List Ad Campaigns.
     * 
     * Example usage:
     *  Ads.listCampaigns({ community: 'uuid-of-community', platform: 'tiktok' })
     *
     * @param params Query parameters (e.g. community, platform, advertiser_id, etc.)
     * @returns A paginated list of AdCampaign resources
     */
    public static listCampaigns<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.getCampaigns, undefined, undefined, params);
    }

    /**
     * Create a new Ad Campaign.
     *
     * @param data  The Ad Campaign payload (JSON) to create
     * @param params Optional query parameters
     * @returns The newly created AdCampaign resource
     */
    public static createCampaign<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.createCampaign, data, {}, params);
    }

    /**
     * Retrieve a single Ad Campaign by ID.
     *
     * @param campaign_id The UUID of the campaign to fetch
     * @param params Optional query parameters
     * @returns The requested AdCampaign resource
     */
    public static viewCampaign<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.retrieveCampaign,
            {},
            { campaign_id: campaign_id },
            params
        );
    }

    /**
     * Update an existing Ad Campaign by ID.
     *
     * @param campaign_id The UUID of the campaign to update
     * @param data  The partial or full updated AdCampaign payload
     * @param params Optional query parameters
     * @returns The updated AdCampaign resource
     */
    public static updateCampaign<T>(
        campaign_id: string,
        data?: object,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.updateCampaign,
            data,
            { campaign_id: campaign_id },
            params
        );
    }

    /**
     * Delete an Ad Campaign by ID.
     *
     * @param campaign_id The UUID of the campaign to delete
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    public static deleteCampaign<T>(
        campaign_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.deleteCampaign,
            {},
            { campaign_id: campaign_id },
            params
        );
    }

    // ----------------------------------------------------------------------
    // AD GROUPS (AD SETS)
    // ----------------------------------------------------------------------

    /**
     * List Ad Groups (ad sets) for a specific campaign.
     *
     * Example usage:
     *  Ads.listGroups('some-campaign-uuid', { promotion_type: 'WEBSITE' })
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param params Optional query parameters (e.g. promotion_type, operation_status, etc.)
     * @returns A paginated list of AdGroup resources
     */
    public static listGroups<T>(
        campaign_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.getGroups,
            {},
            { campaign_id },
            params
        );
    }

    /**
     * Create a new Ad Group (ad set) under a specific campaign.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param data The AdGroup creation payload
     * @param params Optional query parameters
     * @returns The newly created AdGroup resource
     */
    public static createGroup<T>(
        campaign_id: string,
        data?: object,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.createGroup,
            data,
            { campaign_id },
            params
        );
    }

    /**
     * Retrieve a single Ad Group by ID, under a specific campaign.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the AdGroup to fetch
     * @param params Optional query parameters
     * @returns The requested AdGroup resource
     */
    public static viewGroup<T>(
        campaign_id: string,
        group_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.retrieveGroup,
            {},
            { campaign_id, group_id },
            params
        );
    }

    /**
     * Update an Ad Group (ad set) by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the AdGroup to update
     * @param data Updated fields for the AdGroup
     * @param params Optional query parameters
     * @returns The updated AdGroup resource
     */
    public static updateGroup<T>(
        campaign_id: string,
        group_id: string,
        data?: object,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.updateGroup,
            data,
            { campaign_id, group_id },
            params
        );
    }

    /**
     * Delete an Ad Group (ad set) by ID, under a specific campaign.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the AdGroup to delete
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    public static deleteGroup<T>(
        campaign_id: string,
        group_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.deleteGroup,
            {},
            { campaign_id, group_id },
            params
        );
    }

    // ----------------------------------------------------------------------
    // ADS (CREATIVES)
    // ----------------------------------------------------------------------

    /**
     * List Ads (creatives). 
     *
     * Supports filtering by ad_group_id, social_media_post_id, operation_status, etc.
     * 
     * @param params Optional query parameters for filtering/sorting
     * @returns A paginated list of Ad resources
     */
    public static listAds<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.getAds, undefined, undefined, params);
    }

    /**
     * Create a new Ad (creative).
     *
     * @param data The Ad creation payload
     * @param params Optional query parameters
     * @returns The newly created Ad resource
     */
    public static createAd<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.createAd, data, {}, params);
    }

    /**
     * Retrieve a single Ad by ID.
     *
     * @param ad_id The UUID of the Ad to fetch
     * @param params Optional query parameters
     * @returns The requested Ad resource
     */
    public static viewAd<T>(
        ad_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.retrieveAd,
            {},
            { ad_id },
            params
        );
    }

    /**
     * Update an existing Ad by ID.
     *
     * @param ad_id The UUID of the Ad to update
     * @param data The partial or full Ad payload
     * @param params Optional query parameters
     * @returns The updated Ad resource
     */
    public static updateAd<T>(
        ad_id: string,
        data?: object,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.updateAd,
            data,
            { ad_id },
            params
        );
    }

    /**
     * Delete an Ad by ID.
     *
     * @param ad_id The UUID of the Ad to delete
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    public static deleteAd<T>(
        ad_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.deleteAd,
            {},
            { ad_id },
            params
        );
    }

    // ----------------------------------------------------------------------
    // AD GROUP TRIGGERS
    // ----------------------------------------------------------------------

    /**
     * List triggers defined for a given Ad Group.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param params Optional query parameters (pagination, etc.)
     * @returns A paginated list of AdGroupTrigger resources
     */
    public static listTriggers<T>(
        campaign_id: string,
        group_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.getTriggers,
            {},
            { campaign_id, group_id },
            params
        );
    }

    /**
     * Create a new Ad Group Trigger.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param data The trigger creation payload
     * @param params Optional query parameters
     * @returns The newly created AdGroupTrigger resource
     */
    public static createTrigger<T>(
        campaign_id: string,
        group_id: string,
        data?: object,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.createTrigger,
            data,
            { campaign_id, group_id },
            params
        );
    }

    /**
     * Retrieve a single Ad Group Trigger by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param trigger_id The UUID of the trigger
     * @param params Optional query parameters
     * @returns The requested AdGroupTrigger resource
     */
    public static viewTrigger<T>(
        campaign_id: string,
        group_id: string,
        trigger_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.retrieveTrigger,
            {},
            { campaign_id, group_id, trigger_id },
            params
        );
    }

    /**
     * Update an existing Ad Group Trigger by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param trigger_id The UUID of the trigger to update
     * @param data Updated trigger fields
     * @param params Optional query parameters
     * @returns The updated AdGroupTrigger resource
     */
    public static updateTrigger<T>(
        campaign_id: string,
        group_id: string,
        trigger_id: string,
        data?: object,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.updateTrigger,
            data,
            { campaign_id, group_id, trigger_id },
            params
        );
    }

    /**
     * Delete an Ad Group Trigger by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param trigger_id The UUID of the trigger
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    public static deleteTrigger<T>(
        campaign_id: string,
        group_id: string,
        trigger_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.deleteTrigger,
            {},
            { campaign_id, group_id, trigger_id },
            params
        );
    }

    /**
     * List platform-level businesses for the given campaign ID,
     * as defined by /ads/campaigns/{id}/businesses on the backend.
     * 
     * Typically relevant for Reddit (list businesses), or might return a 
     * "not supported" message for Meta/TikTok.
     *
     * @param campaign_id The UUID of the Ad Campaign
     * @param params      Optional query parameters, e.g. page.size, etc.
     * @returns           A response object with data (business list or messages)
     */
    public static listCampaignBusinesses<T>(
        campaign_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.getCampaignBusinesses,
            undefined,                // no request body
            { campaign_id },          // path params
            params                    // query params
        );
    }

    /**
     * List Ad Accounts for the given campaign ID,
     * as defined by /ads/campaigns/{id}/ad_accounts on the backend.
     * 
     * E.g. for Reddit, you can pass ?business_id= to get business-level ad accounts,
     * or for Twitter, it might just return a user’s ad accounts, etc.
     *
     * @param campaign_id The UUID of the Ad Campaign
     * @param params      Optional query parameters, e.g. business_id, page.size, etc.
     * @returns           A response object with data (ad account list)
     */
    public static listCampaignAdAccounts<T>(
        campaign_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.getCampaignAdAccounts,
            undefined,
            { campaign_id },
            params
        );
    }

    /**
     * List funding instruments for the given campaign ID,
     * as defined by /ads/campaigns/{id}/funding_instruments on the backend.
     * 
     * For Twitter, pass ?account_id=... 
     * For Reddit, pass ?ad_account_id=... or ?business_id=... 
     *
     * @param campaign_id The UUID of the Ad Campaign
     * @param params      Optional query parameters
     * @returns           A response object with data (funding instruments)
     */
    public static listCampaignFundingInstruments<T>(
        campaign_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.getCampaignFundingInstruments,
            undefined,
            { campaign_id },
            params
        );
    }

    /**
   * GET /ads/reddit/targeting/carriers
   * 
   * Example usage:
   *   Ads.listRedditCarriers({ scheduler_id: 'uuid-of-scheduler', 'page.size': 50 })
   */
    public static listRedditCarriers<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.getRedditCarriers,
            undefined,
            undefined,
            params
        );
    }

    /**
     * GET /ads/reddit/targeting/communities?names=sub1,sub2
     */
    public static listRedditCommunities<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.getRedditCommunities,
            undefined,
            undefined,
            params
        );
    }

    /**
     * GET /ads/reddit/targeting/communities/search?query=xyz
     */
    public static searchRedditCommunities<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.searchRedditCommunities,
            undefined,
            undefined,
            params
        );
    }

    /**
     * GET /ads/reddit/targeting/devices
     */
    public static listRedditDevices<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.getRedditDevices,
            undefined,
            undefined,
            params
        );
    }

    /**
     * GET /ads/reddit/targeting/geolocations
     */
    public static listRedditGeolocations<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.getRedditGeolocations,
            undefined,
            undefined,
            params
        );
    }

    /**
     * GET /ads/reddit/targeting/interests
     */
    public static listRedditInterests<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.getRedditInterests,
            undefined,
            undefined,
            params
        );
    }

    /**
     * GET /ads/reddit/targeting/third_party_audiences
     */
    public static listRedditThirdPartyAudiences<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.getRedditThirdPartyAudiences,
            undefined,
            undefined,
            params
        );
    }

    /**
   * Sync an Ad Campaign with the remote platform
   * 
   * @param campaign_id The UUID of the campaign to sync
   * @param params Optional query parameters
   * @returns The synced AdCampaign resource
   */
    public static syncCampaign<T>(
        campaign_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.syncCampaign,
            undefined,
            { campaign_id },
            params
        );
    }

    /**
     * Sync an Ad Group with the remote platform
     * 
     * @param campaign_id The UUID of the parent campaign
     * @param group_id The UUID of the ad group to sync
     * @param params Optional query parameters
     * @returns The synced AdGroup resource
     */
    public static syncGroup<T>(
        campaign_id: string,
        group_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.syncGroup,
            undefined,
            { campaign_id, group_id },
            params
        );
    }

    public static listRedditAdPosts<T>(
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.getRedditAdPosts,
            undefined,
            undefined,
            params
        );
    }

    /** Create a Reddit ad-style social-media post */
    public static createRedditAdPost<T>(
        data?: object,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.createRedditAdPost,
            data,
            {},
            params
        );
    }

    /** Retrieve a single Reddit ad-style social-media post */
    public static viewRedditAdPost<T>(
        post_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.retrieveRedditAdPost,
            {},
            { post_id },
            params
        );
    }

    /** Update a Reddit ad-style social-media post */
    public static updateRedditAdPost<T>(
        post_id: string,
        data?: object,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.updateRedditAdPost,
            data,
            { post_id },
            params
        );
    }

    public static listTwitterAdPosts<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.getTwitterAdPosts,
            undefined,
            undefined,
            params
        );
    }

    public static createTwitterAdPost<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.createTwitterAdPost,
            data,
            {},
            params
        );
    }

    public static viewTwitterAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.retrieveTwitterAdPost,
            {},
            { post_id },
            params
        );
    }

    public static updateTwitterAdPost<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.updateTwitterAdPost,
            data,
            { post_id },
            params
        );
    }

    public static deleteTwitterAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.deleteTwitterAdPost,
            {},
            { post_id },
            params
        );
    }

    public static listFacebookAdPosts<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.getFacebookAdPosts,
            undefined,
            undefined,
            params
        );
    }

    public static createFacebookAdPost<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.createFacebookAdPost,
            data,
            {},
            params
        );
    }

    public static viewFacebookAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.retrieveFacebookAdPost,
            {},
            { post_id },
            params
        );
    }

    public static updateFacebookAdPost<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.updateFacebookAdPost,
            data,
            { post_id },
            params
        );
    }

    public static deleteFacebookAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.deleteFacebookAdPost,
            {},
            { post_id },
            params
        );
    }

    public static tiktokUploadImage<T>(
        data: FormData,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.tiktokUploadImage,
            data,
            {},
            params
        );
    }

    public static tiktokUploadVideo<T>(
        data: FormData,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.tiktokUploadVideo,
            data,
            {},
            params
        );
    }

    public static tiktokUploadMusic<T>(
        data: FormData,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.tiktokUploadMusic,
            data,
            {},
            params
        );
    }

    public static tiktokGetMediaInfo<T>(params: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.tiktokGetMediaInfo,
            undefined,
            undefined,
            params
        );
    }

    /**
 * Sync an Ad with the remote platform.
 *
 * @param ad_id  UUID of the ad to sync
 * @param params Optional query parameters
 * @returns      The synced Ad resource
 */
    public static syncAd<T>(
        ad_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            AdsRoute.routes.syncAd,
            undefined,
            { ad_id },
            params
        );
    }

    /**
 * POST /ads/facebook/targeting/search
 */
    public static facebookTargetingSearch<T>(
        data: Record<string, any>,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.facebookTargetingSearch, data, undefined, params);
    }

    /**
     * GET /ads/facebook/targeting/geo_search
     */
    public static facebookGeoSearch<T>(params: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.facebookGeoSearch, undefined, undefined, params);
    }

    /**
     * GET /ads/facebook/targeting/option_status
     */
    public static facebookTargetingOptionStatus<T>(params: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.facebookTargetingOptionStatus, undefined, undefined, params);
    }

    /**
     * POST /ads/facebook/targeting/suggestions
     */
    public static facebookTargetingSuggestions<T>(
        data: Record<string, any>,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.facebookTargetingSuggestions, data, undefined, params);
    }

    /**
     * GET /ads/facebook/targeting/browse
     */
    public static facebookTargetingBrowse<T>(params: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.facebookTargetingBrowse, undefined, undefined, params);
    }

    /**
     * POST /ads/facebook/targeting/validation
     */
    public static facebookTargetingValidation<T>(
        data: Record<string, any>,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.facebookTargetingValidation, data, undefined, params);
    }

    /**
     * GET /ads/facebook/targeting/delivery_estimate
     */
    public static facebookDeliveryEstimate<T>(params: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.facebookDeliveryEstimate, undefined, undefined, params);
    }

    public static tiktokTargetingSearch<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.tiktokTargetingSearch, data, {}, params);
    }
    
    public static tiktokContextualTags<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.tiktokContextualTags, undefined, undefined, params);
    }
    
    public static tiktokRecommendHashtags<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.tiktokRecommendHashtags, undefined, undefined, params);
    }
    
    public static tiktokListCarriers<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.tiktokCarriers, undefined, undefined, params);
    }
    
    public static tiktokListInterestCategories<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.tiktokInterestCategories, undefined, undefined, params);
    }
    
    public static tiktokListActionCategories<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.tiktokActionCategories, undefined, undefined, params);
    }
    
    public static tiktokListContentExclusions<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.tiktokContentExclusions, undefined, undefined, params);
    }
    
    public static tiktokListRegions<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.tiktokRegions, undefined, undefined, params);
    }

    public static listTwitterTargetingCriteria<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.twitterListTargetingCriteria, undefined, undefined, params);
    }
    
    public static getTwitterTargetingCriterion<T>(criterion_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.twitterGetTargetingCriterion, undefined, { criterion_id }, params);
    }
    
    public static createTwitterTargetingCriterion<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.twitterCreateTargetingCriterion, data, {}, params);
    }
    
    public static deleteTwitterTargetingCriterion<T>(criterion_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.twitterDeleteTargetingCriterion, undefined, { criterion_id }, params);
    }
    
    public static twitterBatchTargetingCriteria<T>(data: object[], params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.twitterBatchTargetingCriteria, data, {}, params);
    }
    
    public static lookupTwitterTargeting<T>(resource: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.twitterTargetingDiscovery, undefined, { resource }, params);
    }
    
    public static twitterTargetingSuggestions<T>(params: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdsRoute.routes.twitterTargetingSuggestions, undefined, undefined, params);
    }
    
    

}

export default Ads;
