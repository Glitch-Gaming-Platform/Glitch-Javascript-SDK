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
     * Join the NSFW/Lewd game marketing waitlist.
     * 
     * @param data { name, email, game }
     */
    public static joinNsfwWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.joinNsfwWaitlist, data, undefined, params);
    }

    // --- ADMINISTRATIVE CAMPAIGN METHODS ---

    /**
     * List all newsletter campaigns (Admin only).
     */
    public static listCampaigns<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.listCampaigns, undefined, undefined, params);
    }

    /**
     * Create a new newsletter campaign draft (Admin only).
     */
    public static createCampaign<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.createCampaign, data);
    }

    /**
     * Retrieve a specific newsletter campaign (Admin only).
     */
    public static viewCampaign<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.viewCampaign, undefined, { id });
    }

    /**
     * Update a newsletter campaign draft (Admin only).
     */
    public static updateCampaign<T>(id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.updateCampaign, data, { id });
    }

    /**
     * Delete a newsletter campaign (Admin only).
     */
    public static deleteCampaign<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.deleteCampaign, undefined, { id });
    }

    /**
     * Get high-level analytics for a specific campaign (Admin only).
     */
    public static getCampaignStats<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.getCampaignStats, undefined, { id });
    }

    /**
     * Get detailed delivery and open logs for a campaign (Admin only).
     */
    public static getCampaignLogs<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.getCampaignLogs, undefined, { id }, params);
    }

    /**
     * Trigger the delivery of a newsletter campaign to all active subscribers (Admin only).
     */
    public static sendCampaign<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.sendCampaign, undefined, { id });
    }

    /**
     * Send a test email of a campaign to a specific address (Admin only).
     */
    public static sendTestEmail<T>(id: string, email: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.sendTest, { email }, { id });
    }


    // --- ADMINISTRATIVE SUBSCRIBER METHODS ---

    /**
     * List all newsletter subscribers (Admin only).
     */
    public static listSubscribers<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.listSubscribers, undefined, undefined, params);
    }

    /**
     * Manually create a new newsletter subscriber (Admin only).
     */
    public static createSubscriber<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.createSubscriber, data);
    }

    /**
     * Retrieve a specific subscriber's details (Admin only).
     */
    public static viewSubscriber<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.viewSubscriber, undefined, { id });
    }

    /**
     * Update a subscriber's information or status (Admin only).
     */
    public static updateSubscriber<T>(id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.updateSubscriber, data, { id });
    }

    /**
     * Permanently delete a subscriber from the system (Admin only).
     */
    public static deleteSubscriber<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.deleteSubscriber, undefined, { id });
    }

    /**
     * Join the distribution platform waitlist for indie developers.
     * 
     * @see https://api.glitch.fun/api/documentation#/Newsletters/joinDistributionWaitlist
     * 
     * @param data { name: string, email: string, game: string, team_size: string, revenue_goal: string }
     * @returns Promise
     */
    public static joinDistributionWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.joinDistributionWaitlist, data, undefined, params);
    }

}

export default Newsletters;