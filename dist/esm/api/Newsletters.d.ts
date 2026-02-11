import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Newsletters {
    /**
     * Download the list of publictions, podcasts and blogs.
     *
     * @see https://api.glitch.fun/api/documentation#/Newsletters/downloadMarketingChecklists
     *
     * @param data The data to be passed when creating a team.
     *
     * @returns Promise
     */
    static downloadMarketingChecklist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Join the marketing course waitlist.
     *
     * @param data { name, email, game, topics[] }
     * @returns Promise
     */
    static joinCourseWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
 * Join the raffle feature waitlist.
 *
 * @param data { name, email, game, prizes[], interest_in_playtesters, launch_timeline, target_wishlist_count }
 */
    static joinRaffleWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Join the Discord Marketplace waitlist.
     *
     * @param data { name, email, game, categories[] }
     */
    static joinDiscordMarketplaceWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Join the NSFW/Lewd game marketing waitlist.
     *
     * @param data { name, email, game }
     */
    static joinNsfwWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all newsletter campaigns (Admin only).
     */
    static listCampaigns<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new newsletter campaign draft (Admin only).
     */
    static createCampaign<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Retrieve a specific newsletter campaign (Admin only).
     */
    static viewCampaign<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Update a newsletter campaign draft (Admin only).
     */
    static updateCampaign<T>(id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Delete a newsletter campaign (Admin only).
     */
    static deleteCampaign<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Get high-level analytics for a specific campaign (Admin only).
     */
    static getCampaignStats<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Get detailed delivery and open logs for a campaign (Admin only).
     */
    static getCampaignLogs<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Trigger the delivery of a newsletter campaign to all active subscribers (Admin only).
     */
    static sendCampaign<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Send a test email of a campaign to a specific address (Admin only).
     */
    static sendTestEmail<T>(id: string, email: string): AxiosPromise<Response<T>>;
    /**
     * List all newsletter subscribers (Admin only).
     */
    static listSubscribers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Manually create a new newsletter subscriber (Admin only).
     */
    static createSubscriber<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Retrieve a specific subscriber's details (Admin only).
     */
    static viewSubscriber<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Update a subscriber's information or status (Admin only).
     */
    static updateSubscriber<T>(id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Permanently delete a subscriber from the system (Admin only).
     */
    static deleteSubscriber<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Join the distribution platform waitlist for indie developers.
     *
     * @see https://api.glitch.fun/api/documentation#/Newsletters/joinDistributionWaitlist
     *
     * @param data { name: string, email: string, game: string, team_size: string, revenue_goal: string }
     * @returns Promise
     */
    static joinDistributionWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Newsletters;
