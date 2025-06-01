import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

/**
 * AdsRoute holds all the endpoint definitions for:
 * - Ad Campaigns
 * - Ad Groups (Ad Sets)
 * - Ads (Creatives)
 * - Ad Group Triggers
 */
class AdsRoute {
    public static routes: { [key: string]: Route } = {
        // ----------------------------------------------------------------
        // AD CAMPAIGNS
        // ----------------------------------------------------------------
        getCampaigns: {
            url: "/ads/campaigns",
            method: HTTP_METHODS.GET,
        },

        createCampaign: {
            url: "/ads/campaigns",
            method: HTTP_METHODS.POST,
        },

        retrieveCampaign: {
            url: "/ads/campaigns/{campaign_id}",
            method: HTTP_METHODS.GET,
        },

        updateCampaign: {
            url: "/ads/campaigns/{campaign_id}",
            method: HTTP_METHODS.PUT,
        },

        deleteCampaign: {
            url: "/ads/campaigns/{campaign_id}",
            method: HTTP_METHODS.DELETE,
        },
        getCampaignBusinesses: {
            url: "/ads/campaigns/{campaign_id}/businesses",
            method: HTTP_METHODS.GET,
        },

        getCampaignAdAccounts: {
            url: "/ads/campaigns/{campaign_id}/ad_accounts",
            method: HTTP_METHODS.GET,
        },

        getCampaignFundingInstruments: {
            url: "/ads/campaigns/{campaign_id}/funding_instruments",
            method: HTTP_METHODS.GET,
        },



        // ----------------------------------------------------------------
        // AD GROUPS (AKA AD SETS)
        // ----------------------------------------------------------------
        getGroups: {
            url: "/ads/campaigns/{campaign_id}/groups",
            method: HTTP_METHODS.GET,
        },

        createGroup: {
            url: "/ads/campaigns/{campaign_id}/groups",
            method: HTTP_METHODS.POST,
        },

        retrieveGroup: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}",
            method: HTTP_METHODS.GET,
        },

        updateGroup: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}",
            method: HTTP_METHODS.PUT,
        },

        deleteGroup: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}",
            method: HTTP_METHODS.DELETE,
        },
        // ----------------------------------------------------------------
        // ADS (CREATIVES)
        // ----------------------------------------------------------------
        getAds: {
            url: "/ads/creatives",
            method: HTTP_METHODS.GET,
        },

        createAd: {
            url: "/ads/creatives",
            method: HTTP_METHODS.POST,
        },

        retrieveAd: {
            url: "/ads/creatives/{ad_id}",
            method: HTTP_METHODS.GET,
        },

        updateAd: {
            url: "/ads/creatives/{ad_id}",
            method: HTTP_METHODS.PUT,
        },

        deleteAd: {
            url: "/ads/creatives/{ad_id}",
            method: HTTP_METHODS.DELETE,
        },

        // ----------------------------------------------------------------
        // AD GROUP TRIGGERS
        // ----------------------------------------------------------------
        getTriggers: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}/triggers",
            method: HTTP_METHODS.GET,
        },

        createTrigger: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}/triggers",
            method: HTTP_METHODS.POST,
        },

        retrieveTrigger: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}/triggers/{trigger_id}",
            method: HTTP_METHODS.GET,
        },

        updateTrigger: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}/triggers/{trigger_id}",
            method: HTTP_METHODS.PUT,
        },

        deleteTrigger: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}/triggers/{trigger_id}",
            method: HTTP_METHODS.DELETE,
        },

        // REDDIT TARGETING routes
        getRedditCarriers: {
            url: "/ads/reddit/targeting/carriers",
            method: HTTP_METHODS.GET,
        },
        getRedditCommunities: {
            url: "/ads/reddit/targeting/communities",
            method: HTTP_METHODS.GET,
        },
        searchRedditCommunities: {
            url: "/ads/reddit/targeting/communities/search",
            method: HTTP_METHODS.GET,
        },
        getRedditDevices: {
            url: "/ads/reddit/targeting/devices",
            method: HTTP_METHODS.GET,
        },
        getRedditGeolocations: {
            url: "/ads/reddit/targeting/geolocations",
            method: HTTP_METHODS.GET,
        },
        getRedditInterests: {
            url: "/ads/reddit/targeting/interests",
            method: HTTP_METHODS.GET,
        },
        getRedditThirdPartyAudiences: {
            url: "/ads/reddit/targeting/third_party_audiences",
            method: HTTP_METHODS.GET,
        },
        syncCampaign: {
            url: "/ads/campaigns/{campaign_id}/sync",
            method: HTTP_METHODS.POST,
        },

        syncGroup: {
            url: "/ads/campaigns/{campaign_id}/groups/{group_id}/sync",
            method: HTTP_METHODS.POST,
        },
        getRedditAdPosts: {
            url: "/ads/posts/reddit",
            method: HTTP_METHODS.GET,
        },
        createRedditAdPost: {
            url: "/ads/posts/reddit",
            method: HTTP_METHODS.POST,
        },
        retrieveRedditAdPost: {
            url: "/ads/posts/reddit/{post_id}",
            method: HTTP_METHODS.GET,
        },
        updateRedditAdPost: {
            url: "/ads/posts/reddit/{post_id}",
            method: HTTP_METHODS.PUT,
        },
        getTwitterAdPosts: {
            url: "/ads/posts/twitter",
            method: HTTP_METHODS.GET,
        },
        createTwitterAdPost: {
            url: "/ads/posts/twitter",
            method: HTTP_METHODS.POST,
        },
        retrieveTwitterAdPost: {
            url: "/ads/posts/twitter/{post_id}",
            method: HTTP_METHODS.GET,
        },
        updateTwitterAdPost: {
            url: "/ads/posts/twitter/{post_id}",
            method: HTTP_METHODS.PUT,
        },
        deleteTwitterAdPost: {
            url: "/ads/posts/twitter/{post_id}",
            method: HTTP_METHODS.DELETE,
        },

        getFacebookAdPosts: {
            url: "/ads/posts/facebook",
            method: HTTP_METHODS.GET,
        },
        createFacebookAdPost: {
            url: "/ads/posts/facebook",
            method: HTTP_METHODS.POST,
        },
        retrieveFacebookAdPost: {
            url: "/ads/posts/facebook/{post_id}",
            method: HTTP_METHODS.GET,
        },
        updateFacebookAdPost: {
            url: "/ads/posts/facebook/{post_id}",
            method: HTTP_METHODS.PUT,
        },
        deleteFacebookAdPost: {
            url: "/ads/posts/facebook/{post_id}",
            method: HTTP_METHODS.DELETE,
        },

        tiktokUploadImage: {
            url: "/ads/posts/tiktok/upload/image",
            method: HTTP_METHODS.POST,
        },
        tiktokUploadVideo: {
            url: "/ads/posts/tiktok/upload/video",
            method: HTTP_METHODS.POST,
        },
        tiktokUploadMusic: {
            url: "/ads/posts/tiktok/upload/music",
            method: HTTP_METHODS.POST,
        },
        tiktokGetMediaInfo: {
            url: "/ads/posts/tiktok/media/info",
            method: HTTP_METHODS.GET,
        },
        syncAd: {
            url: "/ads/creatives/{ad_id}/sync",
            method: HTTP_METHODS.POST,
        },
        facebookTargetingSearch: {
            url: "/ads/facebook/targeting/search",
            method: HTTP_METHODS.POST,
        },
        facebookGeoSearch: {
            url: "/ads/facebook/targeting/geo_search",
            method: HTTP_METHODS.GET,
        },
        facebookTargetingOptionStatus: {
            url: "/ads/facebook/targeting/option_status",
            method: HTTP_METHODS.GET,
        },
        facebookTargetingSuggestions: {
            url: "/ads/facebook/targeting/suggestions",
            method: HTTP_METHODS.POST,
        },
        facebookTargetingBrowse: {
            url: "/ads/facebook/targeting/browse",
            method: HTTP_METHODS.GET,
        },
        facebookTargetingValidation: {
            url: "/ads/facebook/targeting/validation",
            method: HTTP_METHODS.POST,
        },
        facebookDeliveryEstimate: {
            url: "/ads/facebook/targeting/delivery_estimate",
            method: HTTP_METHODS.GET,
        },
        tiktokTargetingSearch: {
            url: "/ads/tiktok/targeting/search",
            method: HTTP_METHODS.POST,
        },
        tiktokContextualTags: {
            url: "/ads/tiktok/targeting/contextual_tags",
            method: HTTP_METHODS.GET,
        },
        tiktokRecommendHashtags: {
            url: "/ads/tiktok/targeting/hashtags",
            method: HTTP_METHODS.GET,
        },
        tiktokCarriers: {
            url: "/ads/tiktok/targeting/carriers",
            method: HTTP_METHODS.GET,
        },
        tiktokInterestCategories: {
            url: "/ads/tiktok/targeting/interest_categories",
            method: HTTP_METHODS.GET,
        },
        tiktokActionCategories: {
            url: "/ads/tiktok/targeting/action_categories",
            method: HTTP_METHODS.GET,
        },
        tiktokContentExclusions: {
            url: "/ads/tiktok/targeting/content_exclusions",
            method: HTTP_METHODS.GET,
        },
        tiktokRegions: {
            url: "/ads/tiktok/targeting/regions",
            method: HTTP_METHODS.GET,
        },
        tiktokTargetingInfo: {
            url: "/ads/tiktok/targeting/info",
            method: HTTP_METHODS.POST,
        },
        tiktokLanguages: {
            url: "/ads/tiktok/targeting/languages",
            method: HTTP_METHODS.GET,
        },
        tiktokHashtagInfo: {
            url: "/ads/tiktok/targeting/hashtag_info",
            method: HTTP_METHODS.GET,
        },
        tiktokContextualTagInfo: {
            url: "/ads/tiktok/targeting/contextual_tag_info",
            method: HTTP_METHODS.GET,
        },
        tiktokContentExclusionInfo: {
            url: "/ads/tiktok/targeting/content_exclusion_info",
            method: HTTP_METHODS.GET,
        },
        tiktokInterestKeywordRecommend: {
            url: "/ads/tiktok/targeting/interest_keywords",
            method: HTTP_METHODS.GET,
        },
        twitterListTargetingCriteria: {
            url: "/ads/twitter/targeting/criteria",
            method: HTTP_METHODS.GET,
        },
        twitterGetTargetingCriterion: {
            url: "/ads/twitter/targeting/criteria/{criterion_id}",
            method: HTTP_METHODS.GET,
        },
        twitterCreateTargetingCriterion: {
            url: "/ads/twitter/targeting/criteria",
            method: HTTP_METHODS.POST,
        },
        twitterDeleteTargetingCriterion: {
            url: "/ads/twitter/targeting/criteria/{criterion_id}",
            method: HTTP_METHODS.DELETE,
        },
        twitterBatchTargetingCriteria: {
            url: "/ads/twitter/targeting/batch_criteria",
            method: HTTP_METHODS.POST,
        },
        twitterTargetingDiscovery: {
            url: "/ads/twitter/targeting/{resource}",
            method: HTTP_METHODS.GET,
        },
        twitterTargetingSuggestions: {
            url: "/ads/twitter/targeting/suggestions",
            method: HTTP_METHODS.GET,
        },
        syncCampaignTree: {
            url: "/ads/campaigns/{campaign_id}/sync_tree",
            method: HTTP_METHODS.POST,
        },
        syncSchedulerCampaigns: {
            url: "/ads/campaigns/scheduler/{scheduler_id}/syncAll",
            method: HTTP_METHODS.POST,
        },
        
    };
}

export default AdsRoute;
