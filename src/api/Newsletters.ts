import NewslettersRoutes from "../routes/NewslettersRoutes";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Newsletters {


    /**
     * Download the list of publictions, podcasts and blogs.
     * 
     * @see https://api.glitch.fun/api/documentation#/Newsletters/downloadMarketingChecklists
     * 
     * @param data The data to be passed when creating a team.
     * 
     * @returns Promise
     */
    public static downloadMarketingChecklist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(NewslettersRoutes.routes.downloadMarketingChecklist, data, undefined, params);
    }


    /**
     * Join the marketing course waitlist.
     * 
     * @param data { name, email, game, topics[] }
     * @returns Promise
     */
    public static joinCourseWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.joinCourseWaitlist, data, undefined, params);
    }

    /**
 * Join the raffle feature waitlist.
 * 
 * @param data { name, email, game, prizes[], interest_in_playtesters, launch_timeline, target_wishlist_count }
 */
    public static joinRaffleWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.joinRaffleWaitlist, data, undefined, params);
    }

    /**
     * Join the Discord Marketplace waitlist.
     * 
     * @param data { name, email, game, categories[] }
     */
    public static joinDiscordMarketplaceWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.joinDiscordMarketplaceWaitlist, data, undefined, params);
    }

    /**
     * List all newsletter campaigns (Admin only).
     * 
     * @param params Query parameters for pagination and filtering.
     * @returns Promise
     */
    public static listCampaigns<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.listCampaigns, undefined, undefined, params);
    }

    /**
     * Create a new newsletter campaign draft (Admin only).
     * 
     * @param data { subject, content_html, content_json }
     * @returns Promise
     */
    public static createCampaign<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.createCampaign, data);
    }

    /**
     * Retrieve a specific newsletter campaign (Admin only).
     * 
     * @param id The UUID of the campaign.
     * @returns Promise
     */
    public static viewCampaign<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.viewCampaign, undefined, { id });
    }

    /**
     * Update a newsletter campaign draft (Admin only).
     * 
     * @param id The UUID of the campaign.
     * @param data The updated campaign data.
     * @returns Promise
     */
    public static updateCampaign<T>(id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.updateCampaign, data, { id });
    }

    /**
     * Get analytics for a specific campaign (Admin only).
     * Returns open rates, click rates, and human vs proxy metrics.
     * 
     * @param id The UUID of the campaign.
     * @returns Promise
     */
    public static getCampaignStats<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.getStats, undefined, { id });
    }

    /**
     * Trigger the delivery of a newsletter campaign to all active subscribers (Admin only).
     * 
     * @param id The UUID of the campaign.
     * @returns Promise
     */
    public static sendCampaign<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.sendCampaign, undefined, { id });
    }

    /**
     * List all newsletter subscribers (Admin only).
     * 
     * @param params Query parameters for pagination and filtering.
     * @returns Promise
     */
    public static listSubscribers<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.listSubscribers, undefined, undefined, params);
    }

    /**
     * Delete a newsletter campaign (Admin only).
     */
    public static deleteCampaign<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.deleteCampaign, undefined, { id });
    }

    /**
     * Send a test email of a campaign to a specific address (Admin only).
     */
    public static sendTestEmail<T>(id: string, email: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.sendTest, { email }, { id });
    }

    /**
     * Get detailed delivery and open logs for a campaign (Admin only).
     */
    public static getDetailedLogs<T>(id: string, params?: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.getLogs, undefined, { id }, params);
    }

    /**
     * Manually create a new subscriber (Admin only).
     */
    public static createSubscriber<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.createSubscriber, data);
    }

    /**
     * Update a subscriber's details or status (Admin only).
     */
    public static updateSubscriber<T>(id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.updateSubscriber, data, { id });
    }

    /**
     * Delete a subscriber (Admin only).
     */
    public static deleteSubscriber<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.deleteSubscriber, undefined, { id });
    }


    /**
     * Retrieve a specific subscriber's details (Admin only).
     * 
     * @see https://api.glitch.fun/api/documentation#/Newsletter%20Admin/showNewsletterSubscriber
     * 
     * @param id The UUID of the subscriber.
     * @returns Promise
     */
    public static viewSubscriber<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.viewSubscriber, undefined, { id });
    }

   

}

export default Newsletters;