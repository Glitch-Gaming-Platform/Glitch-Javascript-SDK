import RafflesRoute from "../routes/RafflesRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Raffles {
    /**
     * List all raffles with optional filters.
     */
    public static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.list, undefined, undefined, params);
    }

    /**
     * Create a new raffle (Game Owner).
     */
    public static create<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.create, data);
    }

    /**
     * Retrieve details for a specific raffle.
     */
    public static view<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.view, {}, { id });
    }

    /**
     * Enter a raffle (User/Player). Requires Steam ID.
     */
    public static enter<T>(id: string, data: { referral_code?: string, device_fingerprint?: string, opt_in_playtesting?: boolean }): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.enter, data, { id });
    }

    /**
     * Get the authenticated user's entry status for a specific raffle.
     */
    public static me<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.me, {}, { id });
    }

    /**
     * Record a viral action (e.g., Steam Wishlist, Social Share).
     */
    public static performAction<T>(id: string, data: { action_type: string, platform?: string, reference_id?: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.performAction, data, { id });
    }

    /**
     * Post raffle content to social media via Glitch API.
     */
    public static shareSocially<T>(id: string, data: { platform: string, content: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.shareSocially, data, { id });
    }

    /**
     * Send an invitation email to a friend.
     */
    public static inviteFriend<T>(id: string, data: { email: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.inviteFriend, data, { id });
    }

    /**
     * Add a prize tier to a raffle (Game Owner).
     */
    public static addPrize<T>(id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.addPrize, data, { id });
    }

    /**
     * Trigger the automated drawing process (Game Owner).
     */
    public static drawWinners<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.drawWinners, {}, { id });
    }

    /**
     * Manually select a winner for a specific prize (Live Event Mode).
     */
    public static pickWinner<T>(id: string, data: { entry_id: string, prize_id: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.pickWinner, data, { id });
    }

    /**
     * Get the public list of winners for a completed raffle.
     */
    public static winners<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.winners, {}, { id });
    }

    /**
     * List all participants/entries for a raffle (Game Owner).
     */
    public static participants<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.participants, {}, { id }, params);
    }

    /**
     * Update shipping/tracking info for a prize (Game Owner).
     */
    public static fulfillPrize<T>(entry_id: string, data: { tracking_number: string, shipping_carrier: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.fulfillPrize, data, { entry_id });
    }

    /**
     * Submit shipping address for a won prize (User/Winner).
     */
    public static updateAddress<T>(entry_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.updateAddress, data, { entry_id });
    }

    /**
     * Disqualify a specific entry (Game Owner).
     */
    public static disqualify<T>(id: string, entry_id: string, data: { reason: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.disqualify, data, { id, entry_id });
    }

    /**
     * Check if the raffle is fully funded in the community ledger.
     */
    public static escrowStatus<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.escrowStatus, {}, { id });
    }

    /**
     * Get viral loop analytics (K-Factor, Cost Per Entry).
     */
    public static analytics<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(RafflesRoute.routes.analytics, {}, { id });
    }
}

export default Raffles;