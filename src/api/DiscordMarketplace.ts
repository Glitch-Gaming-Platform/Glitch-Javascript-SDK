import DiscordMarketplaceRoute from "../routes/DiscordMarketplaceRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class DiscordMarketplace {
    /**
     * Search for Discord servers available for sponsorship.
     */
    public static listListings<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.listListings, undefined, undefined, params);
    }

    /**
     * List a Discord server in the marketplace (Owner).
     */
    public static createListing<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.createListing, data);
    }

    /**
     * Get details for a specific server listing.
     */
    public static viewListing<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.viewListing, {}, { id });
    }

    /**
     * Update listing settings like price or auto-approve (Owner).
     */
    public static updateListing<T>(id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.updateListing, data, { id });
    }

    /**
     * Remove a server from the marketplace (Owner).
     */
    public static deleteListing<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.deleteListing, {}, { id });
    }

    /**
     * List sponsored post orders. Use params { mode: 'buyer' | 'seller' }.
     */
    public static listOrders<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.listOrders, undefined, undefined, params);
    }

    /**
     * Submit a post to a Discord server for sponsorship (Game Developer).
     */
    public static createOrder<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.createOrder, data);
    }

    /**
     * Get details for a specific order.
     */
    public static viewOrder<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.viewOrder, {}, { id });
    }

    /**
     * Approve and publish a sponsored post (Owner).
     */
    public static approveOrder<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.approveOrder, {}, { id });
    }

    /**
     * Reject a sponsored post (Owner).
     */
    public static rejectOrder<T>(id: string, data: { reason: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.rejectOrder, data, { id });
    }

    /**
     * Request changes to the post content (Owner).
     */
    public static requestChanges<T>(id: string, data: { reason: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.requestChanges, data, { id });
    }

    /**
     * Resubmit a post after making requested changes (Game Developer).
     */
    public static resubmitOrder<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(DiscordMarketplaceRoute.routes.resubmitOrder, {}, { id });
    }
}

export default DiscordMarketplace;