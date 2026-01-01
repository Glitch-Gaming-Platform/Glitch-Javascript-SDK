import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Raffles {
    /**
     * List all raffles with optional filters.
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new raffle (Game Owner).
     */
    static create<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Retrieve details for a specific raffle.
     */
    static view<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Enter a raffle (User/Player). Requires Steam ID.
     */
    static enter<T>(id: string, data: {
        referral_code?: string;
        device_fingerprint?: string;
        opt_in_playtesting?: boolean;
    }): AxiosPromise<Response<T>>;
    /**
     * Get the authenticated user's entry status for a specific raffle.
     */
    static me<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Record a viral action (e.g., Steam Wishlist, Social Share).
     */
    static performAction<T>(id: string, data: {
        action_type: string;
        platform?: string;
        reference_id?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Post raffle content to social media via Glitch API.
     */
    static shareSocially<T>(id: string, data: {
        platform: string;
        content: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Send an invitation email to a friend.
     */
    static inviteFriend<T>(id: string, data: {
        email: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Add a prize tier to a raffle (Game Owner).
     */
    static addPrize<T>(id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Trigger the automated drawing process (Game Owner).
     */
    static drawWinners<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Manually select a winner for a specific prize (Live Event Mode).
     */
    static pickWinner<T>(id: string, data: {
        entry_id: string;
        prize_id: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Get the public list of winners for a completed raffle.
     */
    static winners<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * List all participants/entries for a raffle (Game Owner).
     */
    static participants<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update shipping/tracking info for a prize (Game Owner).
     */
    static fulfillPrize<T>(entry_id: string, data: {
        tracking_number: string;
        shipping_carrier: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Submit shipping address for a won prize (User/Winner).
     */
    static updateAddress<T>(entry_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Disqualify a specific entry (Game Owner).
     */
    static disqualify<T>(id: string, entry_id: string, data: {
        reason: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Check if the raffle is fully funded in the community ledger.
     */
    static escrowStatus<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Get viral loop analytics (K-Factor, Cost Per Entry).
     */
    static analytics<T>(id: string): AxiosPromise<Response<T>>;
}
export default Raffles;
