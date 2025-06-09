import Response from "../util/Response";
import { AxiosPromise, AxiosProgressEvent } from "axios";
declare class Ads {
    /**
     * List Ad Campaigns.
     *
     * Example usage:
     *  Ads.listCampaigns({ community: 'uuid-of-community', platform: 'tiktok' })
     *
     * @param params Query parameters (e.g. community, platform, advertiser_id, etc.)
     * @returns A paginated list of AdCampaign resources
     */
    static listCampaigns<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new Ad Campaign.
     *
     * @param data  The Ad Campaign payload (JSON) to create
     * @param params Optional query parameters
     * @returns The newly created AdCampaign resource
     */
    static createCampaign<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single Ad Campaign by ID.
     *
     * @param campaign_id The UUID of the campaign to fetch
     * @param params Optional query parameters
     * @returns The requested AdCampaign resource
     */
    static viewCampaign<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an existing Ad Campaign by ID.
     *
     * @param campaign_id The UUID of the campaign to update
     * @param data  The partial or full updated AdCampaign payload
     * @param params Optional query parameters
     * @returns The updated AdCampaign resource
     */
    static updateCampaign<T>(campaign_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete an Ad Campaign by ID.
     *
     * @param campaign_id The UUID of the campaign to delete
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    static deleteCampaign<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static listGroups<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new Ad Group (ad set) under a specific campaign.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param data The AdGroup creation payload
     * @param params Optional query parameters
     * @returns The newly created AdGroup resource
     */
    static createGroup<T>(campaign_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single Ad Group by ID, under a specific campaign.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the AdGroup to fetch
     * @param params Optional query parameters
     * @returns The requested AdGroup resource
     */
    static viewGroup<T>(campaign_id: string, group_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an Ad Group (ad set) by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the AdGroup to update
     * @param data Updated fields for the AdGroup
     * @param params Optional query parameters
     * @returns The updated AdGroup resource
     */
    static updateGroup<T>(campaign_id: string, group_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete an Ad Group (ad set) by ID, under a specific campaign.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the AdGroup to delete
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    static deleteGroup<T>(campaign_id: string, group_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List Ads (creatives).
     *
     * Supports filtering by ad_group_id, social_media_post_id, operation_status, etc.
     *
     * @param params Optional query parameters for filtering/sorting
     * @returns A paginated list of Ad resources
     */
    static listAds<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new Ad (creative).
     *
     * @param data The Ad creation payload
     * @param params Optional query parameters
     * @returns The newly created Ad resource
     */
    static createAd<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single Ad by ID.
     *
     * @param ad_id The UUID of the Ad to fetch
     * @param params Optional query parameters
     * @returns The requested Ad resource
     */
    static viewAd<T>(ad_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an existing Ad by ID.
     *
     * @param ad_id The UUID of the Ad to update
     * @param data The partial or full Ad payload
     * @param params Optional query parameters
     * @returns The updated Ad resource
     */
    static updateAd<T>(ad_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete an Ad by ID.
     *
     * @param ad_id The UUID of the Ad to delete
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    static deleteAd<T>(ad_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List triggers defined for a given Ad Group.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param params Optional query parameters (pagination, etc.)
     * @returns A paginated list of AdGroupTrigger resources
     */
    static listTriggers<T>(campaign_id: string, group_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new Ad Group Trigger.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param data The trigger creation payload
     * @param params Optional query parameters
     * @returns The newly created AdGroupTrigger resource
     */
    static createTrigger<T>(campaign_id: string, group_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single Ad Group Trigger by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param trigger_id The UUID of the trigger
     * @param params Optional query parameters
     * @returns The requested AdGroupTrigger resource
     */
    static viewTrigger<T>(campaign_id: string, group_id: string, trigger_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static updateTrigger<T>(campaign_id: string, group_id: string, trigger_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete an Ad Group Trigger by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param trigger_id The UUID of the trigger
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    static deleteTrigger<T>(campaign_id: string, group_id: string, trigger_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static listCampaignBusinesses<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static listCampaignAdAccounts<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static listCampaignFundingInstruments<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
   * GET /ads/reddit/targeting/carriers
   *
   * Example usage:
   *   Ads.listRedditCarriers({ scheduler_id: 'uuid-of-scheduler', 'page.size': 50 })
   */
    static listRedditCarriers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/reddit/targeting/communities?names=sub1,sub2
     */
    static listRedditCommunities<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/reddit/targeting/communities/search?query=xyz
     */
    static searchRedditCommunities<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/reddit/targeting/devices
     */
    static listRedditDevices<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/reddit/targeting/geolocations
     */
    static listRedditGeolocations<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/reddit/targeting/interests
     */
    static listRedditInterests<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/reddit/targeting/third_party_audiences
     */
    static listRedditThirdPartyAudiences<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
   * Sync an Ad Campaign with the remote platform
   *
   * @param campaign_id The UUID of the campaign to sync
   * @param params Optional query parameters
   * @returns The synced AdCampaign resource
   */
    static syncCampaign<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sync an Ad Group with the remote platform
     *
     * @param campaign_id The UUID of the parent campaign
     * @param group_id The UUID of the ad group to sync
     * @param params Optional query parameters
     * @returns The synced AdGroup resource
     */
    static syncGroup<T>(campaign_id: string, group_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static listRedditAdPosts<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Create a Reddit ad-style social-media post */
    static createRedditAdPost<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Retrieve a single Reddit ad-style social-media post */
    static viewRedditAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Update a Reddit ad-style social-media post */
    static updateRedditAdPost<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static listTwitterAdPosts<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static createTwitterAdPost<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static viewTwitterAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static updateTwitterAdPost<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static deleteTwitterAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static listFacebookAdPosts<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static createFacebookAdPost<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static viewFacebookAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static updateFacebookAdPost<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static deleteFacebookAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokUploadImageFile<T>(file: File, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static tiktokUploadVideoFile<T>(file: File, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static tiktokUploadMusicFile<T>(file: File, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static tiktokUploadImageBlob<T>(blob: Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static tiktokUploadVideoBlob<T>(blob: Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static tiktokUploadMusicBlob<T>(blob: Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static tiktokGetMediaInfo<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
 * Sync an Ad with the remote platform.
 *
 * @param ad_id  UUID of the ad to sync
 * @param params Optional query parameters
 * @returns      The synced Ad resource
 */
    static syncAd<T>(ad_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
 * POST /ads/facebook/targeting/search
 */
    static facebookTargetingSearch<T>(data: Record<string, any>, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/facebook/targeting/geo_search
     */
    static facebookGeoSearch<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/facebook/targeting/option_status
     */
    static facebookTargetingOptionStatus<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * POST /ads/facebook/targeting/suggestions
     */
    static facebookTargetingSuggestions<T>(data: Record<string, any>, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/facebook/targeting/browse
     */
    static facebookTargetingBrowse<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * POST /ads/facebook/targeting/validation
     */
    static facebookTargetingValidation<T>(data: Record<string, any>, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/facebook/targeting/delivery_estimate
     */
    static facebookDeliveryEstimate<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokTargetingSearch<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokContextualTags<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokRecommendHashtags<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokListCarriers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokListInterestCategories<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokListActionCategories<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokListContentExclusions<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokListRegions<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokGetTargetingInfo<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokListLanguages<T>(advertiser_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokRecommendInterestKeywords<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
 * GET /ads/tiktok/targeting/hashtag_info
 */
    static tiktokHashtagInfo<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/tiktok/targeting/contextual_tag_info
     */
    static tiktokContextualTagInfo<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/tiktok/targeting/content_exclusion_info
     */
    static tiktokContentExclusionInfo<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    static listTwitterTargetingCriteria<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static getTwitterTargetingCriterion<T>(criterion_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static createTwitterTargetingCriterion<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static deleteTwitterTargetingCriterion<T>(criterion_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static twitterBatchTargetingCriteria<T>(data: object[], params?: Record<string, any>): AxiosPromise<Response<T>>;
    static lookupTwitterTargeting<T>(resource: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static twitterTargetingSuggestions<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deep-sync a campaign tree (campaign → groups → ads) with its remote platform.
     *
     * @param campaign_id UUID of the campaign to sync
     * @param params      Optional query params
     * @returns           Fully-hydrated AdCampaign resource
     */
    static syncCampaignTree<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Deep-sync all the campaigns for a scheduler.
    *
    * @param scheduler_id UUID of the campaign to sync
    * @param params      Optional query params
    * @returns           Fully-hydrated AdCampaign resource
    */
    static syncSchedulerCampaigns<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get campaign performance summary.
     */
    static getPerformanceSummary<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get spend and delivery metrics over time.
     */
    static getSpendDeliveryReport<T>(params: {
        start_date: string;
        end_date: string;
        group_by?: 'day' | 'week' | 'month';
        community_id?: string;
        platform?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Compare performance across platforms.
     */
    static getPlatformComparisonReport<T>(params?: {
        start_date?: string;
        end_date?: string;
        community_id?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Get performance metrics for individual ad creatives.
     */
    static getCreativePerformanceReport<T>(params?: {
        community_id?: string;
        platform?: string;
        start_date?: string;
        end_date?: string;
        limit?: number;
        sort?: 'spend' | 'impressions' | 'clicks' | 'ctr' | 'cpm' | 'cpc';
        order?: 'asc' | 'desc';
    }): AxiosPromise<Response<T>>;
    /**
     * Get time-based performance metrics by hour and day of week.
     */
    static getTimePerformanceReport<T>(params: {
        start_date: string;
        end_date: string;
        community_id?: string;
        platform?: string;
    }): AxiosPromise<Response<T>>;
    /**
 * GET /ads/google/targeting/geo/suggest
 */
    static listGoogleGeoSuggestions<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * POST /ads/google/targeting/campaigns/{customer_id}/{campaign_id}/locations
     */
    static addGoogleLocationTargets<T>(customer_id: number, campaign_id: number, data: object): AxiosPromise<Response<T>>;
    /**
     * GET /ads/google/targeting/campaigns/{customer_id}/{campaign_id}/locations
     */
    static getGoogleLocationTargets<T>(customer_id: number, campaign_id: number, params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * DELETE /ads/google/targeting/campaigns/{customer_id}/{campaign_id}/locations
     */
    static removeGoogleLocationTargets<T>(customer_id: number, campaign_id: number, data: object): AxiosPromise<Response<T>>;
    /**
     * POST /ads/google/targeting/campaigns/{customer_id}/{campaign_id}/proximity
     */
    static addGoogleProximityTarget<T>(customer_id: number, campaign_id: number, data: object): AxiosPromise<Response<T>>;
    /**
     * PUT /ads/google/targeting/{resource_type}/{customer_id}/{resource_id}/settings
     */
    static updateGoogleTargetingSettings<T>(resource_type: 'campaign' | 'ad_group', customer_id: number, resource_id: number, data: object): AxiosPromise<Response<T>>;
    /**
     * GET /ads/google/targeting/{resource_type}/{customer_id}/{resource_id}/settings
     */
    static getGoogleTargetingSettings<T>(resource_type: 'campaign' | 'ad_group', customer_id: number, resource_id: number, params: Record<string, any>): AxiosPromise<Response<T>>;
    /** GET /ads/posts/google */
    static listGoogleAdPosts<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** POST /ads/posts/google */
    static createGoogleAdPost<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** PUT /ads/posts/google/{post_id} */
    static updateGoogleAdPost<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** DELETE /ads/posts/google/{post_id} */
    static deleteGoogleAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** POST /ads/posts/google/{post_id}/pause */
    static pauseGoogleAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** POST /ads/posts/google/{post_id}/enable */
    static enableGoogleAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Ads;
