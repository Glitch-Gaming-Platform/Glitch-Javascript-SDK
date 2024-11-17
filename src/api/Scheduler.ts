import SchedulerRoute from "../routes/SchedulerRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Scheduler {
    /**
     * List promotion schedules.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitlePromotionSchedules
     * 
     * @returns promise
     */
    public static listSchedules<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.listSchedules, {}, {}, params);
    }

    /**
     * Create a new promotion schedule.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/createTitlePromotionSchedule
     * 
     * @param data The data for the new schedule.
     * 
     * @returns promise
     */
    public static createSchedule<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.createSchedule, data, {}, params);
    }

    /**
     * Get a specific promotion schedule.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitlePromotionSchedule
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * 
     * @returns promise
     */
    public static getSchedule<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.getSchedule, {}, { scheduler_id }, params);
    }

    /**
     * Update a promotion schedule.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/updateTitlePromotionSchedule
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static updateSchedule<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.updateSchedule, data, { scheduler_id }, params);
    }

    /**
     * Delete a promotion schedule.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/deleteTitlePromotionSchedule
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * 
     * @returns promise
     */
    public static deleteSchedule<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.deleteSchedule, {}, { scheduler_id }, params);
    }

    /**
     * Get social media posts related to a promotion schedule.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getPromotionScheduleSocialPosts
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * 
     * @returns promise
     */
    public static getSchedulePosts<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.getSchedulePosts, {}, { scheduler_id }, params);
    }

    /**
     * List title updates for a promotion schedule.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitleUpdates
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * 
     * @returns promise
     */
    public static listUpdates<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.listUpdates, {}, { scheduler_id }, params);
    }

    /**
     * Create a new title update for a promotion schedule.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/createTitleUpdate
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The data for the new update.
     * 
     * @returns promise
     */
    public static createUpdate<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.createUpdate, data, { scheduler_id }, params);
    }

    /**
     * Get a specific title update.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitleUpdate
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * 
     * @returns promise
     */
    public static getUpdate<T>(scheduler_id: string, update_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.getUpdate, {}, { scheduler_id, update_id }, params);
    }

    /**
     * Update a title update.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/updateTitleUpdate
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static updateUpdate<T>(scheduler_id: string, update_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.updateUpdate, data, { scheduler_id, update_id }, params);
    }

    /**
     * Delete a title update.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/deleteTitleUpdate
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * 
     * @returns promise
     */
    public static deleteUpdate<T>(scheduler_id: string, update_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.deleteUpdate, {}, { scheduler_id, update_id }, params);
    }

    /**
     * Clear Twitter OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearTwitterAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.clearTwitterAuth, {}, { scheduler_id }, params);
    }

    /**
     * Clear Facebook OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearFacebookAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.clearFacebookAuth, {}, { scheduler_id }, params);
    }

    /**
     * Clear Instagram OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearInstagramAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.clearInstagramAuth, {}, { scheduler_id }, params);
    }

    /**
     * Clear Snapchat OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearSnapchatAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.clearSnapchatAuth, {}, { scheduler_id }, params);
    }

    /**
     * Clear TikTok OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearTikTokAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.clearTikTokAuth, {}, { scheduler_id }, params);
    }

    /**
     * Clear Twitch OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearTwitchAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.clearTwitchAuth, {}, { scheduler_id }, params);
    }

    /**
     * Clear Kick OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearKickAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.clearKickAuth, {}, { scheduler_id }, params);
    }

    /**
     * Clear Reddit OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearRedditAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.clearRedditAuth, {}, { scheduler_id }, params);
    }

    /**
     * Clear YouTube OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearYouTubeAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.clearYouTubeAuth, {}, { scheduler_id }, params);
    }

    /**
     * Clear Patreon OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearPatreonAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.clearPatreonAuth, {}, { scheduler_id }, params);
    }

    /**
     * Clear Pinterest OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearPinterestAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.clearPinterestAuth, {}, { scheduler_id }, params);
    }

    /**
     * Clear Steam OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearSteamAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.clearSteamAuth, {}, { scheduler_id }, params);
    }

    /**
     * Clear Discord OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearDiscordAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.clearDiscordAuth, {}, { scheduler_id }, params);
    }

    /**
     * Clear Bluesky OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearBlueskyAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.clearBlueskyAuth, {}, { scheduler_id }, params);
    }

     /**
     * Get Facebook groups associated with the scheduler's Facebook account.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
     public static getFacebookGroups<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.getFacebookGroups, {}, { scheduler_id }, params);
    }

    /**
     * Get Instagram accounts associated with the scheduler's Instagram account.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static getInstagramAccounts<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.getInstagramAccounts, {}, { scheduler_id }, params);
    }

    /**
     * Get Reddit subreddits associated with the scheduler's Reddit account.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static getRedditSubreddits<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.getRedditSubreddits, {}, { scheduler_id }, params);
    }

    /**
     * Get flairs for a specific Reddit subreddit.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param subreddit The name of the subreddit.
     * @returns promise
     */
    public static getRedditSubredditFlairs<T>(scheduler_id: string, subreddit: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.getRedditSubredditFlairs, {}, { scheduler_id, subreddit }, params);
    }

     /**
     * Get Discord channels associated with the scheduler's Discord account.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
     public static getDiscordChannels<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.getDiscordChannels, {}, { scheduler_id }, params);
    }

}

export default Scheduler;
