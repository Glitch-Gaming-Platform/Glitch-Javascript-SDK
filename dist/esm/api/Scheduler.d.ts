import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Scheduler {
    /**
     * List promotion schedules.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitlePromotionSchedules
     *
     * @returns promise
     */
    static listSchedules<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/createTitlePromotionSchedule
     *
     * @param data The data for the new schedule.
     *
     * @returns promise
     */
    static createSchedule<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a specific promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitlePromotionSchedule
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    static getSchedule<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static updateSchedule<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/deleteTitlePromotionSchedule
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    static deleteSchedule<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Test the tone of the scheduler.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/updateTitlePromotionSchedule
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The data to update.
     *
     * @returns promise
     */
    static testTone<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get social media posts related to a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getPromotionScheduleSocialPosts
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    static getSchedulePosts<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List title updates for a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitleUpdates
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    static listUpdates<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static createUpdate<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static getUpdate<T>(scheduler_id: string, update_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static updateUpdate<T>(scheduler_id: string, update_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static deleteUpdate<T>(scheduler_id: string, update_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Schedule title update.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/updateTitleUpdate
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static scheduleUpdate<T>(scheduler_id: string, update_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Twitter OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearTwitterAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Facebook OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearFacebookAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Instagram OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearInstagramAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Snapchat OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearSnapchatAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear TikTok OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearTikTokAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Twitch OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearTwitchAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Kick OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearKickAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Reddit OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearRedditAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear YouTube OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearYouTubeAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Patreon OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearPatreonAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Pinterest OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearPinterestAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Steam OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearSteamAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Discord OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearDiscordAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Bluesky OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearBlueskyAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get Facebook groups associated with the scheduler's Facebook account.
    *
    * @param scheduler_id The ID of the promotion schedule.
    * @returns promise
    */
    static getFacebookGroups<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get Instagram accounts associated with the scheduler's Instagram account.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static getInstagramAccounts<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get Reddit subreddits associated with the scheduler's Reddit account.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static getRedditSubreddits<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get flairs for a specific Reddit subreddit.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param subreddit The name of the subreddit.
     * @returns promise
     */
    static getRedditSubredditFlairs<T>(scheduler_id: string, subreddit: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get Discord channels associated with the scheduler's Discord account.
    *
    * @param scheduler_id The ID of the promotion schedule.
    * @returns promise
    */
    static getDiscordChannels<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get aggregated reports for a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param params Query parameters (e.g., social_platform, start_date, end_date)
     * @returns promise
     */
    static getSchedulerReports<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get progression data for social media posts over time.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param params Query parameters (e.g., social_platform, start_date, end_date)
     * @returns promise
     */
    static getSchedulerProgression<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List active cross-promote relationships for a scheduler.
     *
     * @param scheduler_id The ID of the promotion schedule
     * @param params Optional query params
     */
    static crossPromoteListRelationships<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Find potential cross-promote partners for a scheduler.
     *
     * @param scheduler_id The ID of the promotion schedule
     * @param params Optional query params
     */
    static crossPromoteFind<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List cross-promote invites for a scheduler.
     *
     * @param scheduler_id The ID of the promotion schedule
     * @param params Optional query params
     */
    static crossPromoteInvitesList<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send an invite to cross-promote.
     *
     * @param scheduler_id The ID of the promotion schedule
     * @param data { partner_scheduler_id, optional_message }
     */
    static crossPromoteInviteSend<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Accept an invite to cross-promote.
     *
     * @param scheduler_id The ID of the promotion schedule
     * @param invite_id The ID of the invite
     */
    static crossPromoteInviteAccept<T>(scheduler_id: string, invite_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Reject an invite to cross-promote.
     *
     * @param scheduler_id The ID of the promotion schedule
     * @param invite_id The ID of the invite
     */
    static crossPromoteInviteReject<T>(scheduler_id: string, invite_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * End a cross-promote relationship.
     *
     * @param scheduler_id The ID of the promotion schedule
     * @param relationship_id The ID of the relationship
     */
    static crossPromoteRelationshipDelete<T>(scheduler_id: string, relationship_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get which platforms are cross-promoted in an existing relationship.
     *
     * @param scheduler_id The ID of the promotion schedule
     * @param relationship_id The ID of the relationship
     */
    static crossPromoteRelationshipGetPlatforms<T>(scheduler_id: string, relationship_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Set which platforms are cross-promoted in an existing relationship.
     *
     * @param scheduler_id The ID of the promotion schedule
     * @param relationship_id The ID of the relationship
     * @param data An object like { platforms: ['twitter', 'facebook', ...] }
     */
    static crossPromoteRelationshipSetPlatforms<T>(scheduler_id: string, relationship_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get recently cross-promoted posts under a relationship.
     *
     * @param scheduler_id The ID of the promotion schedule
     * @param relationship_id The ID of the relationship
     */
    static crossPromoteRelationshipPosts<T>(scheduler_id: string, relationship_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Scheduler;
