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
     * Test the tone of the scheduler.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/updateTitlePromotionSchedule
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static testTone<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.testTone, data, { scheduler_id }, params);
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
    public static generateTitleContent<T>(
        scheduler_id: string,
        data: object,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            SchedulerRoute.routes.generateContent,
            data,                     // request body
            { scheduler_id },         // path params
            params                    // query params
        );
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
     * Search the updates related to a promotion schedule.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/searchTitleUpdates
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * 
     * @returns promise
     */
    public static searchUpdates<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
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
    public static scheduleUpdate<T>(scheduler_id: string, update_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.scheduleUpdate, data, { scheduler_id, update_id }, params);
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
     * Clear Reddit Ads OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearRedditAdsAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.clearRedditAdsAuth, {}, { scheduler_id }, params);
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

    /**
     * Clear Google Ads OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearGoogleAdsAuth<T>(
        scheduler_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            SchedulerRoute.routes.clearGoogleAdsAuth,
            {},                       // no body
            { scheduler_id },         // path params
            params                    // optional query params
        );
    }

    /**
     * Clear Tiktok Ads OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    public static clearTiktokAdsAuth<T>(
        scheduler_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            SchedulerRoute.routes.clearTiktokAdsAuth,
            {},                       // no body
            { scheduler_id },         // path params
            params                    // optional query params
        );
    }

    /**
     * Get aggregated reports for a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param params Query parameters (e.g., social_platform, start_date, end_date)
     * @returns promise
     */
    public static getSchedulerReports<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.getSchedulerReports, {}, { scheduler_id }, params);
    }

    /**
     * Get progression data for social media posts over time.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param params Query parameters (e.g., social_platform, start_date, end_date)
     * @returns promise
     */
    public static getSchedulerProgression<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.getSchedulerProgression, {}, { scheduler_id }, params);
    }

    /**
      * List cross-promote relationships for a scheduler (with optional pagination).
      * GET /schedulers/{scheduler_id}/crosspromote/relationships
      */
    public static crossPromoteListRelationships<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            SchedulerRoute.routes.crossPromoteListRelationships,
            {},
            { scheduler_id },
            params
        );
    }

    /**
     * Find potential cross-promote partners for a scheduler (with optional filters).
     * GET /schedulers/{scheduler_id}/crosspromote/find
     */
    public static crossPromoteFind<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        // e.g. { platform:'twitter', min_followers:500, sort:'desc', page:2, limit:5 }
        return Requests.processRoute(
            SchedulerRoute.routes.crossPromoteFind,
            {},
            { scheduler_id },
            params
        );
    }

    /**
     * List cross-promote invites for a scheduler (incoming + outgoing).
     * GET /schedulers/{scheduler_id}/crosspromote/invites
     */
    public static crossPromoteInvitesList<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            SchedulerRoute.routes.crossPromoteInvitesList,
            {},
            { scheduler_id },
            params
        );
    }

    /**
     * Send an invite to cross-promote (from scheduler_id to partner_scheduler_id).
     * POST /schedulers/{scheduler_id}/crosspromote/invites
     *
     * @param data { partner_scheduler_id, optional_message }
     */
    public static crossPromoteInviteSend<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            SchedulerRoute.routes.crossPromoteInviteSend,
            data,
            { scheduler_id },
            params
        );
    }

    /**
     * Accept an invite to cross-promote.
     * POST /schedulers/{scheduler_id}/crosspromote/invites/{invite_id}/accept
     */
    public static crossPromoteInviteAccept<T>(scheduler_id: string, invite_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            SchedulerRoute.routes.crossPromoteInviteAccept,
            {},
            { scheduler_id, invite_id },
            params
        );
    }

    /**
     * Reject an invite to cross-promote.
     * POST /schedulers/{scheduler_id}/crosspromote/invites/{invite_id}/reject
     */
    public static crossPromoteInviteReject<T>(scheduler_id: string, invite_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            SchedulerRoute.routes.crossPromoteInviteReject,
            {},
            { scheduler_id, invite_id },
            params
        );
    }

    /**
     * End a cross-promote relationship (delete).
     * DELETE /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}
     */
    public static crossPromoteRelationshipDelete<T>(scheduler_id: string, relationship_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            SchedulerRoute.routes.crossPromoteRelationshipDelete,
            {},
            { scheduler_id, relationship_id },
            params
        );
    }

    /**
     * Get which platforms are cross-promoted in an existing relationship.
     * GET /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/platforms
     */
    public static crossPromoteRelationshipGetPlatforms<T>(scheduler_id: string, relationship_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            SchedulerRoute.routes.crossPromoteRelationshipGetPlatforms,
            {},
            { scheduler_id, relationship_id },
            params
        );
    }

    /**
     * Set which platforms are cross-promoted in an existing relationship.
     * PUT /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/platforms
     * data = { platforms: ['twitter','facebook',...]}
     */
    public static crossPromoteRelationshipSetPlatforms<T>(scheduler_id: string, relationship_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            SchedulerRoute.routes.crossPromoteRelationshipSetPlatforms,
            data,
            { scheduler_id, relationship_id },
            params
        );
    }

    /**
     * Get recently cross-promoted logs under a relationship.
     * GET /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/posts
     */
    public static crossPromoteRelationshipPosts<T>(scheduler_id: string, relationship_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            SchedulerRoute.routes.crossPromoteRelationshipPosts,
            {},
            { scheduler_id, relationship_id },
            params
        );
    }

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
    public static listCampaignBusinesses<T>(
        scheduler_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            SchedulerRoute.routes.getCampaignBusinesses,
            undefined,                // no request body
            { scheduler_id },          // path params
            params                    // query params
        );
    }

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
    public static listCampaignAdAccounts<T>(
        scheduler_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            SchedulerRoute.routes.getCampaignAdAccounts,
            undefined,
            { scheduler_id },
            params
        );
    }

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
    public static listCampaignFundingInstruments<T>(
        scheduler_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            SchedulerRoute.routes.getCampaignFundingInstruments,
            undefined,
            { scheduler_id },
            params
        );
    }

    /**
     * List all destinations for a title update.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/listTitleUpdateDestinations
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @returns promise
     */
    public static listDestinations<T>(scheduler_id: string, update_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.listDestinations, {}, { scheduler_id, update_id }, params);
    }

    /**
     * Create a new destination for a title update.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/createTitleUpdateDestination
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param data The data for the new destination.
     * @returns promise
     */
    public static createDestination<T>(scheduler_id: string, update_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.createDestination, data, { scheduler_id, update_id }, params);
    }

    /**
     * Get a specific title update destination.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitleUpdateDestination
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param destination_id The ID of the destination.
     * @returns promise
     */
    public static getDestination<T>(scheduler_id: string, update_id: string, destination_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.getDestination, {}, { scheduler_id, update_id, destination_id }, params);
    }

    /**
     * Update a title update destination.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/updateTitleUpdateDestination
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param destination_id The ID of the destination.
     * @param data The data to update.
     * @returns promise
     */
    public static updateDestination<T>(scheduler_id: string, update_id: string, destination_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.updateDestination, data, { scheduler_id, update_id, destination_id }, params);
    }

    /**
     * Delete a title update destination.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/deleteTitleUpdateDestination
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param destination_id The ID of the destination.
     * @returns promise
     */
    public static deleteDestination<T>(scheduler_id: string, update_id: string, destination_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.deleteDestination, {}, { scheduler_id, update_id, destination_id }, params);
    }

    /**
     * Get AI-powered subreddit recommendations for a scheduler.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getSchedulerRedditRecommendations
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The context for the post (title, content, media type).
     * @returns promise
     */
    public static getRedditRecommendations<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.getRedditRecommendations, data, { scheduler_id }, params);
    }

    /**
     * Generate tailored content for a specific subreddit.
     * 
     * @see https://api.glitch.fun/api/documentation#/Scheduler/generateRedditContentForSubreddit
     * 
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The target subreddit and post context.
     * @returns promise
     */
    public static generateRedditContent<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.generateRedditContent, data, { scheduler_id }, params);
    }

     /**
     * Get all posts and comments for a scheduler.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param params Optional query parameters for filtering and sorting.
     * @returns promise
     */
    public static getSchedulerPostsWithComments<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.getSchedulerPostsWithComments, {}, { scheduler_id }, params);
    }

    /**
     * Sync all comments for all posts in a scheduler.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param params Optional query parameters (e.g., limit_per_post).
     * @returns promise
     */
    public static syncAllSchedulerComments<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SchedulerRoute.routes.syncAllSchedulerComments, {}, { scheduler_id }, params);
    }

}

export default Scheduler;
