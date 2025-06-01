import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class SchedulerRoute {
    public static routes: { [key: string]: Route } = {
        // Title Promotion Schedule Routes
        listSchedules: { url: '/schedulers', method: HTTP_METHODS.GET },
        createSchedule: { url: '/schedulers', method: HTTP_METHODS.POST },
        getSchedule: { url: '/schedulers/{scheduler_id}', method: HTTP_METHODS.GET },
        updateSchedule: { url: '/schedulers/{scheduler_id}', method: HTTP_METHODS.PUT },
        deleteSchedule: { url: '/schedulers/{scheduler_id}', method: HTTP_METHODS.DELETE },
        getSchedulePosts: { url: '/schedulers/{scheduler_id}/posts', method: HTTP_METHODS.GET },

        // Title Update Routes
        listUpdates: { url: '/schedulers/{scheduler_id}/updates', method: HTTP_METHODS.GET },
        searchUpdates: { url: '/schedulers/{scheduler_id}/updates/search', method: HTTP_METHODS.GET },
        createUpdate: { url: '/schedulers/{scheduler_id}/updates', method: HTTP_METHODS.POST },
        getUpdate: { url: '/schedulers/{scheduler_id}/updates/{update_id}', method: HTTP_METHODS.GET },
        updateUpdate: { url: '/schedulers/{scheduler_id}/updates/{update_id}', method: HTTP_METHODS.PUT },
        deleteUpdate: { url: '/schedulers/{scheduler_id}/updates/{update_id}', method: HTTP_METHODS.DELETE },
        scheduleUpdate: { url: '/schedulers/{scheduler_id}/updates/{update_id}/schedule', method: HTTP_METHODS.POST },

        testTone: { url: '/schedulers/{scheduler_id}/tone', method: HTTP_METHODS.POST },
        getSchedulerReports: { url: '/schedulers/{scheduler_id}/reports', method: HTTP_METHODS.GET },
        getSchedulerProgression: { url: '/schedulers/{scheduler_id}/progression', method: HTTP_METHODS.GET },

        // Clear OAuth Routes
        clearTwitterAuth: { url: '/schedulers/{scheduler_id}/clearTwitterAuth', method: HTTP_METHODS.DELETE },
        clearFacebookAuth: { url: '/schedulers/{scheduler_id}/clearFacebookAuth', method: HTTP_METHODS.DELETE },
        clearInstagramAuth: { url: '/schedulers/{scheduler_id}/clearInstagramAuth', method: HTTP_METHODS.DELETE },
        clearSnapchatAuth: { url: '/schedulers/{scheduler_id}/clearSnapchatAuth', method: HTTP_METHODS.DELETE },
        clearTikTokAuth: { url: '/schedulers/{scheduler_id}/clearTikTokAuth', method: HTTP_METHODS.DELETE },
        clearTwitchAuth: { url: '/schedulers/{scheduler_id}/clearTwitchAuth', method: HTTP_METHODS.DELETE },
        clearKickAuth: { url: '/schedulers/{scheduler_id}/clearKickAuth', method: HTTP_METHODS.DELETE },
        clearRedditAuth: { url: '/schedulers/{scheduler_id}/clearRedditAuth', method: HTTP_METHODS.DELETE },
        clearRedditAdsAuth: { url: '/schedulers/{scheduler_id}/clearRedditAdsAuth', method: HTTP_METHODS.DELETE },
        clearYouTubeAuth: { url: '/schedulers/{scheduler_id}/clearYouTubeAuth', method: HTTP_METHODS.DELETE },
        clearPatreonAuth: { url: '/schedulers/{scheduler_id}/clearPatreonAuth', method: HTTP_METHODS.DELETE },
        clearPinterestAuth: { url: '/schedulers/{scheduler_id}/clearPinterestAuth', method: HTTP_METHODS.DELETE },
        clearSteamAuth: { url: '/schedulers/{scheduler_id}/clearSteamAuth', method: HTTP_METHODS.DELETE },
        clearDiscordAuth: { url: '/schedulers/{scheduler_id}/clearDiscordAuth', method: HTTP_METHODS.DELETE },
        clearBlueskyAuth: { url: '/schedulers/{scheduler_id}/clearBlueskyAuth', method: HTTP_METHODS.DELETE },
        clearTiktokAdsAuth:    { url: '/schedulers/{scheduler_id}/clearTiktokAdsAuth',    method: HTTP_METHODS.DELETE },
        clearGoogleAdsAuth:    { url: '/schedulers/{scheduler_id}/clearGoogleAdsAuth',    method: HTTP_METHODS.DELETE },

        //Social Utility Routes
        getFacebookGroups: { url: '/schedulers/{scheduler_id}/facebook/groups', method: HTTP_METHODS.GET },
        getInstagramAccounts: { url: '/schedulers/{scheduler_id}/instagram/accounts', method: HTTP_METHODS.GET },
        getRedditSubreddits: { url: '/schedulers/{scheduler_id}/reddit/subreddits', method: HTTP_METHODS.GET },
        getRedditSubredditFlairs: { url: '/schedulers/{scheduler_id}/reddit/subreddits/{subreddit}/flairs', method: HTTP_METHODS.GET },
        getDiscordChannels: { url: '/schedulers/{scheduler_id}/discord/channels', method: HTTP_METHODS.GET },

        crossPromoteListRelationships: {
            url: '/schedulers/{scheduler_id}/crosspromote/relationships',
            method: HTTP_METHODS.GET
        },
        crossPromoteFind: {
            url: '/schedulers/{scheduler_id}/crosspromote/find',
            method: HTTP_METHODS.GET
        },
        crossPromoteInvitesList: {
            url: '/schedulers/{scheduler_id}/crosspromote/invites',
            method: HTTP_METHODS.GET
        },
        crossPromoteInviteSend: {
            url: '/schedulers/{scheduler_id}/crosspromote/invites',
            method: HTTP_METHODS.POST
        },
        crossPromoteInviteAccept: {
            url: '/schedulers/{scheduler_id}/crosspromote/invites/{invite_id}/accept',
            method: HTTP_METHODS.POST
        },
        crossPromoteInviteReject: {
            url: '/schedulers/{scheduler_id}/crosspromote/invites/{invite_id}/reject',
            method: HTTP_METHODS.POST
        },
        crossPromoteRelationshipDelete: {
            url: '/schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}',
            method: HTTP_METHODS.DELETE
        },
        crossPromoteRelationshipGetPlatforms: {
            url: '/schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/platforms',
            method: HTTP_METHODS.GET
        },
        crossPromoteRelationshipSetPlatforms: {
            url: '/schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/platforms',
            method: HTTP_METHODS.PUT
        },
        crossPromoteRelationshipPosts: {
            url: '/schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/posts',
            method: HTTP_METHODS.GET
        },

        getCampaignBusinesses: {
            url: "/schedulers/{scheduler_id}/businesses",
            method: HTTP_METHODS.GET,
        },

        getCampaignAdAccounts: {
            url: "/schedulers/{scheduler_id}/ad_accounts",
            method: HTTP_METHODS.GET,
        },

        getCampaignFundingInstruments: {
            url: "/schedulers/{scheduler_id}/funding_instruments",
            method: HTTP_METHODS.GET,
        },
        generateContent: {
            url: '/schedulers/{scheduler_id}/generateContent',
            method: HTTP_METHODS.POST
        },



    };
}

export default SchedulerRoute;
