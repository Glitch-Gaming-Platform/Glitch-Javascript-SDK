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
         * Rewrite / generate content for a promotion schedule.
         *
         * @see https://api.glitch.fun/api/documentation#/Scheduler/generateTitleContent
         *
         * @param scheduler_id UUID of the promotion schedule.
         * @param data         Body payload. At minimum you must supply
         *                     `{ platform: 'twitter' }` plus either `content`
         *                     **or** a `media` array containing at least one
         *                     `{ id: '<media-uuid>' }`.
         * @returns Axios promise with `{ content, title? }`
         */
    static generateTitleContent<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
     * Search the updates related to a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/searchTitleUpdates
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    static searchUpdates<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
     * Clear Reddit Ads OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearRedditAdsAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
      * List cross-promote relationships for a scheduler (with optional pagination).
      * GET /schedulers/{scheduler_id}/crosspromote/relationships
      */
    static crossPromoteListRelationships<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Find potential cross-promote partners for a scheduler (with optional filters).
     * GET /schedulers/{scheduler_id}/crosspromote/find
     */
    static crossPromoteFind<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List cross-promote invites for a scheduler (incoming + outgoing).
     * GET /schedulers/{scheduler_id}/crosspromote/invites
     */
    static crossPromoteInvitesList<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send an invite to cross-promote (from scheduler_id to partner_scheduler_id).
     * POST /schedulers/{scheduler_id}/crosspromote/invites
     *
     * @param data { partner_scheduler_id, optional_message }
     */
    static crossPromoteInviteSend<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Accept an invite to cross-promote.
     * POST /schedulers/{scheduler_id}/crosspromote/invites/{invite_id}/accept
     */
    static crossPromoteInviteAccept<T>(scheduler_id: string, invite_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Reject an invite to cross-promote.
     * POST /schedulers/{scheduler_id}/crosspromote/invites/{invite_id}/reject
     */
    static crossPromoteInviteReject<T>(scheduler_id: string, invite_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * End a cross-promote relationship (delete).
     * DELETE /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}
     */
    static crossPromoteRelationshipDelete<T>(scheduler_id: string, relationship_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get which platforms are cross-promoted in an existing relationship.
     * GET /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/platforms
     */
    static crossPromoteRelationshipGetPlatforms<T>(scheduler_id: string, relationship_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Set which platforms are cross-promoted in an existing relationship.
     * PUT /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/platforms
     * data = { platforms: ['twitter','facebook',...]}
     */
    static crossPromoteRelationshipSetPlatforms<T>(scheduler_id: string, relationship_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get recently cross-promoted logs under a relationship.
     * GET /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/posts
     */
    static crossPromoteRelationshipPosts<T>(scheduler_id: string, relationship_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List platform-level businesses for the given campaign ID,
     * as defined by /schedulers/{scheduler_id}/businesses on the backend.
     *
     * Typically relevant for Reddit (list businesses), or might return a
     * "not supported" message for Meta/TikTok.
     *
     * @param scheduler_id The UUID of the Ad Campaign
     * @param params      Optional query parameters, e.g. page.size, etc.
     * @returns           A response object with data (business list or messages)
     */
    static listCampaignBusinesses<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List Ad Accounts for the given campaign ID,
     * as defined by /schedulers/{scheduler_id}/ad_accounts on the backend.
     *
     * E.g. for Reddit, you can pass ?business_id= to get business-level ad accounts,
     * or for Twitter, it might just return a user’s ad accounts, etc.
     *
     * @param scheduler_id The UUID of the Ad Campaign
     * @param params      Optional query parameters, e.g. business_id, page.size, etc.
     * @returns           A response object with data (ad account list)
     */
    static listCampaignAdAccounts<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List funding instruments for the given campaign ID,
     * as defined by /schedulers/{scheduler_id}/funding_instruments on the backend.
     *
     * For Twitter, pass ?account_id=...
     * For Reddit, pass ?ad_account_id=... or ?business_id=...
     *
     * @param scheduler_id The UUID of the Ad Campaign
     * @param params      Optional query parameters
     * @returns           A response object with data (funding instruments)
     */
    static listCampaignFundingInstruments<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Scheduler;
