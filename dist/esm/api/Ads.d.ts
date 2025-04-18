import Response from "../util/Response";
import { AxiosPromise } from "axios";
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
}
export default Ads;
