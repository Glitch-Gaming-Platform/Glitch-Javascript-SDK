import RafflesRoute from "../routes/RafflesRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Raffles {

    /**
     * List all raffles.
     * @param params Filter by title_id, community_id, or status.
     */
    public static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.list, undefined, undefined, params);
    }

    /**
     * Create a new raffle for a specific title.
     */
    public static create<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.create, data);
    }

    /**
     * Get full details of a raffle.
     */
    public static view<T>(raffle_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.view, {}, { raffle_id });
    }

    /**
     * Update raffle settings (Draft/Active status, dates, etc).
     */
    public static update<T>(raffle_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.update, data, { raffle_id });
    }

    /**
     * Delete a raffle.
     */
    public static delete<T>(raffle_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.delete, {}, { raffle_id });
    }

    /**
     * Enter the authenticated user into the raffle.
     * @param data { referral_code?, device_fingerprint? }
     */
    public static enter<T>(raffle_id: string, data?: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.enter, data, { raffle_id });
    }

    /**
     * Record a viral action (Steam Wishlist, Social Share) to earn more tickets.
     * @param data { action_type: 'steam_wishlist'|'social_share', platform?, reference_id? }
     */
    public static performAction<T>(raffle_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.performAction, data, { raffle_id });
    }

    /**
     * Get the authenticated user's specific entry status for this raffle.
     */
    public static me<T>(raffle_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.me, {}, { raffle_id });
    }

    /**
     * Submit shipping address for a winning entry.
     * @param entry_id The UUID of the RaffleEntry.
     */
    public static updateAddress<T>(entry_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.updateAddress, data, { entry_id });
    }

    /**
     * Invite a friend via email to join the raffle.
     */
    public static inviteFriend<T>(raffle_id: string, data: { email: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.inviteFriend, data, { raffle_id });
    }

    /**
     * Get the public list of winners (only available if raffle is completed).
     */
    public static winners<T>(raffle_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.winners, {}, { raffle_id });
    }

    /**
     * Add a prize tier (quantity, value, description) to the raffle.
     */
    public static addPrize<T>(raffle_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.addPrize, data, { raffle_id });
    }

    /**
     * Randomly draw winners for all prize tiers based on ticket weights.
     */
    public static drawWinners<T>(raffle_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.drawWinners, {}, { raffle_id });
    }

    /**
     * Manually assign a specific user to a specific prize (Live Event Mode).
     * @param data { entry_id, prize_id }
     */
    public static pickWinner<T>(raffle_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.pickWinner, data, { raffle_id });
    }

    /**
     * Provide shipping/tracking info for a prize fulfillment.
     * @param entry_id The UUID of the RaffleEntry.
     */
    public static fulfillPrize<T>(entry_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.fulfillPrize, data, { entry_id });
    }

    /**
     * Disqualify an entry for fraud or rule violations.
     */
    public static disqualify<T>(raffle_id: string, entry_id: string, data: { reason: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.disqualify, data, { raffle_id, entry_id });
    }

    /**
     * List all participants/entries for management.
     * @param params { opt_in_playtesting?, page?, per_page? }
     */
    public static listParticipants<T>(raffle_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.participants, {}, { raffle_id }, params);
    }

    /**
     * Check if the raffle is fully funded in the community ledger.
     */
    public static escrowStatus<T>(raffle_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.escrowStatus, {}, { raffle_id });
    }

    /**
     * Get viral loop analytics (K-factor, Cost Per Entry).
     */
    public static analytics<T>(raffle_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.analytics, {}, { raffle_id });
    }
}

export default Raffles;