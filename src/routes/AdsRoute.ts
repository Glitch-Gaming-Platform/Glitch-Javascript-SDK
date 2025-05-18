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
    };
}

export default AdsRoute;
