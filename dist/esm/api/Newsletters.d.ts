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
     * List all newsletter campaigns (Admin only).
     *
     * @param params Query parameters for pagination and filtering.
     * @returns Promise
     */
    static listCampaigns<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new newsletter campaign draft (Admin only).
     *
     * @param data { subject, content_html, content_json }
     * @returns Promise
     */
    static createCampaign<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Retrieve a specific newsletter campaign (Admin only).
     *
     * @param id The UUID of the campaign.
     * @returns Promise
     */
    static viewCampaign<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Update a newsletter campaign draft (Admin only).
     *
     * @param id The UUID of the campaign.
     * @param data The updated campaign data.
     * @returns Promise
     */
    static updateCampaign<T>(id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Get analytics for a specific campaign (Admin only).
     * Returns open rates, click rates, and human vs proxy metrics.
     *
     * @param id The UUID of the campaign.
     * @returns Promise
     */
    static getCampaignStats<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Trigger the delivery of a newsletter campaign to all active subscribers (Admin only).
     *
     * @param id The UUID of the campaign.
     * @returns Promise
     */
    static sendCampaign<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * List all newsletter subscribers (Admin only).
     *
     * @param params Query parameters for pagination and filtering.
     * @returns Promise
     */
    static listSubscribers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a newsletter campaign (Admin only).
     */
    static deleteCampaign<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Send a test email of a campaign to a specific address (Admin only).
     */
    static sendTestEmail<T>(id: string, email: string): AxiosPromise<Response<T>>;
    /**
     * Get detailed delivery and open logs for a campaign (Admin only).
     */
    static getDetailedLogs<T>(id: string, params?: object): AxiosPromise<Response<T>>;
    /**
     * Manually create a new subscriber (Admin only).
     */
    static createSubscriber<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Update a subscriber's details or status (Admin only).
     */
    static updateSubscriber<T>(id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Delete a subscriber (Admin only).
     */
    static deleteSubscriber<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Retrieve a specific subscriber's details (Admin only).
     *
     * @see https://api.glitch.fun/api/documentation#/Newsletter%20Admin/showNewsletterSubscriber
     *
     * @param id The UUID of the subscriber.
     * @returns Promise
     */
    static viewSubscriber<T>(id: string): AxiosPromise<Response<T>>;
}
export default Newsletters;
