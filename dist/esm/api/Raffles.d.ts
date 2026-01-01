import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Raffles {
    /**
     * List all raffles.
     * @param params Filter by title_id, community_id, or status.
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new raffle for a specific title.
     */
    static create<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Get full details of a raffle.
     */
    static view<T>(raffle_id: string): AxiosPromise<Response<T>>;
    /**
     * Update raffle settings (Draft/Active status, dates, etc).
     */
    static update<T>(raffle_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Delete a raffle.
     */
    static delete<T>(raffle_id: string): AxiosPromise<Response<T>>;
    /**
     * Enter the authenticated user into the raffle.
     * @param data { referral_code?, device_fingerprint? }
     */
    static enter<T>(raffle_id: string, data?: object): AxiosPromise<Response<T>>;
    /**
     * Record a viral action (Steam Wishlist, Social Share) to earn more tickets.
     * @param data { action_type: 'steam_wishlist'|'social_share', platform?, reference_id? }
     */
    static performAction<T>(raffle_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Get the authenticated user's specific entry status for this raffle.
     */
    static me<T>(raffle_id: string): AxiosPromise<Response<T>>;
    /**
     * Submit shipping address for a winning entry.
     * @param entry_id The UUID of the RaffleEntry.
     */
    static updateAddress<T>(entry_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Invite a friend via email to join the raffle.
     */
    static inviteFriend<T>(raffle_id: string, data: {
        email: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Get the public list of winners (only available if raffle is completed).
     */
    static winners<T>(raffle_id: string): AxiosPromise<Response<T>>;
    /**
     * Add a prize tier (quantity, value, description) to the raffle.
     */
    static addPrize<T>(raffle_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Randomly draw winners for all prize tiers based on ticket weights.
     */
    static drawWinners<T>(raffle_id: string): AxiosPromise<Response<T>>;
    /**
     * Manually assign a specific user to a specific prize (Live Event Mode).
     * @param data { entry_id, prize_id }
     */
    static pickWinner<T>(raffle_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Provide shipping/tracking info for a prize fulfillment.
     * @param entry_id The UUID of the RaffleEntry.
     */
    static fulfillPrize<T>(entry_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Disqualify an entry for fraud or rule violations.
     */
    static disqualify<T>(raffle_id: string, entry_id: string, data: {
        reason: string;
    }): AxiosPromise<Response<T>>;
    /**
     * List all participants/entries for management.
     * @param params { opt_in_playtesting?, page?, per_page? }
     */
    static listParticipants<T>(raffle_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Check if the raffle is fully funded in the community ledger.
     */
    static escrowStatus<T>(raffle_id: string): AxiosPromise<Response<T>>;
    /**
     * Get viral loop analytics (K-factor, Cost Per Entry).
     */
    static analytics<T>(raffle_id: string): AxiosPromise<Response<T>>;
}
export default Raffles;
