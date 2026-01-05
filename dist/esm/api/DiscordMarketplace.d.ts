import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class DiscordMarketplace {
    /**
     * Search for Discord servers available for sponsorship.
     */
    static listListings<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List a Discord server in the marketplace (Owner).
     */
    static createListing<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Get details for a specific server listing.
     */
    static viewListing<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Update listing settings like price or auto-approve (Owner).
     */
    static updateListing<T>(id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Remove a server from the marketplace (Owner).
     */
    static deleteListing<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * List sponsored post orders. Use params { mode: 'buyer' | 'seller' }.
     */
    static listOrders<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Submit a post to a Discord server for sponsorship (Game Developer).
     */
    static createOrder<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Get details for a specific order.
     */
    static viewOrder<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Approve and publish a sponsored post (Owner).
     */
    static approveOrder<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Reject a sponsored post (Owner).
     */
    static rejectOrder<T>(id: string, data: {
        reason: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Request changes to the post content (Owner).
     */
    static requestChanges<T>(id: string, data: {
        reason: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Resubmit a post after making requested changes (Game Developer).
     */
    static resubmitOrder<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Get available text channels for a specific Discord listing.
     */
    static getChannels<T>(id: string): AxiosPromise<Response<T>>;
}
export default DiscordMarketplace;
