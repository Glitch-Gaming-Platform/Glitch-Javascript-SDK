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
        createUpdate: { url: '/schedulers/{scheduler_id}/updates', method: HTTP_METHODS.POST },
        getUpdate: { url: '/schedulers/{scheduler_id}/updates/{update_id}', method: HTTP_METHODS.GET },
        updateUpdate: { url: '/schedulers/{scheduler_id}/updates/{update_id}', method: HTTP_METHODS.PUT },
        deleteUpdate: { url: '/schedulers/{scheduler_id}/updates/{update_id}', method: HTTP_METHODS.DELETE },

        testTone: { url: '/schedulers/{scheduler_id}/tone', method: HTTP_METHODS.POST },

        // Clear OAuth Routes
        clearTwitterAuth: { url: '/schedulers/{scheduler_id}/clearTwitterAuth', method: HTTP_METHODS.DELETE },
        clearFacebookAuth: { url: '/schedulers/{scheduler_id}/clearFacebookAuth', method: HTTP_METHODS.DELETE },
        clearInstagramAuth: { url: '/schedulers/{scheduler_id}/clearInstagramAuth', method: HTTP_METHODS.DELETE },
        clearSnapchatAuth: { url: '/schedulers/{scheduler_id}/clearSnapchatAuth', method: HTTP_METHODS.DELETE },
        clearTikTokAuth: { url: '/schedulers/{scheduler_id}/clearTikTokAuth', method: HTTP_METHODS.DELETE },
        clearTwitchAuth: { url: '/schedulers/{scheduler_id}/clearTwitchAuth', method: HTTP_METHODS.DELETE },
        clearKickAuth: { url: '/schedulers/{scheduler_id}/clearKickAuth', method: HTTP_METHODS.DELETE },
        clearRedditAuth: { url: '/schedulers/{scheduler_id}/clearRedditAuth', method: HTTP_METHODS.DELETE },
        clearYouTubeAuth: { url: '/schedulers/{scheduler_id}/clearYouTubeAuth', method: HTTP_METHODS.DELETE },
        clearPatreonAuth: { url: '/schedulers/{scheduler_id}/clearPatreonAuth', method: HTTP_METHODS.DELETE },
        clearPinterestAuth: { url: '/schedulers/{scheduler_id}/clearPinterestAuth', method: HTTP_METHODS.DELETE },
        clearSteamAuth: { url: '/schedulers/{scheduler_id}/clearSteamAuth', method: HTTP_METHODS.DELETE },
        clearDiscordAuth: { url: '/schedulers/{scheduler_id}/clearDiscordAuth', method: HTTP_METHODS.DELETE },
        clearBlueskyAuth: { url: '/schedulers/{scheduler_id}/clearBlueskyAuth', method: HTTP_METHODS.DELETE },

        //Social Utility Routes
        getFacebookGroups: { url: '/schedulers/{scheduler_id}/facebook/groups', method: HTTP_METHODS.GET },
        getInstagramAccounts: { url: '/schedulers/{scheduler_id}/instagram/accounts', method: HTTP_METHODS.GET },
        getRedditSubreddits: { url: '/schedulers/{scheduler_id}/reddit/subreddits', method: HTTP_METHODS.GET },
        getRedditSubredditFlairs: { url: '/schedulers/{scheduler_id}/reddit/subreddits/{subreddit}/flairs', method: HTTP_METHODS.GET },
        getDiscordChannels: { url: '/schedulers/{scheduler_id}/discord/channels', method: HTTP_METHODS.GET },

    };
}

export default SchedulerRoute;
