import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Subscriptions {
    /**
     * Get a creator subscription for the creator program.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCreatorSubscription
     *
     * @returns promise
     */
    static getCreatorSubscription<T>(stripe_subscription_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a s subscription plan that a community has to talk with influencers
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCommunityInfluencerSubscription
     *
     * @returns promise
     */
    static getCommunityInfluencerSubscription<T>(community_id: string, stripe_subscription_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all the subscription plans that a creator has.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCreatorSubscriptions
     *
     * @returns promise
     */
    static listCreatorSubscriptions<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all the subscription plans that a community has.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCommunityInfluencerSubscriptions
     *
     * @returns promise
     */
    static listCommunityInfluencerSubscriptions<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new subscription of a content creator
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/createCreatorSubscription
     *
     * @returns A promise
     */
    static createCreatorSubscription<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new subscription of a community engaging in influencer marketing
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/createCommunityInfluencerSubscription
     *
     * @returns A promise
     */
    static createCommunityInfluencerSubscription<T>(community_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Cancels a creator subscription
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/cancelCreatorSubscription
     *
     * @returns A promise
     */
    static cancelCreatorSubscription<T>(stripe_subscription_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Cancels a community subscription
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/cancelCommunityInfluencerSubscription
     *
     * @returns A promise
     */
    static cancelCommunityInfluencerSubscription<T>(community_id: string, stripe_subscription_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Change the current subscription that the community is associated with.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/createCreatorSubscription
     *
     * @returns A promise
     */
    static changeCommunityInfluencerSubscription<T>(community_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Create a custom tailored subscription for a business/community.
    * Only accessible by Glitch administrators.
    *
    * @param community_id The ID of the community.
    * @param data { priceId, paymentMethod, custom_name, limits: { posts, enrichments, invites, ads }, metered_prices: [] }
    */
    static createCustomCommunitySubscription<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Purchase a permanent license or rent a game title.
     * If a rental was active in the last 7 days, the fee is automatically deducted from the premium price.
     * @param data { purchase_type: 'premium' | 'rental', payment_method_id: string }
     */
    static purchaseLicense<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * List all game licenses (Premium/Rental) owned by the current user.
     */
    static listMyLicenses<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Request a refund for a premium purchase.
     */
    static refundLicense<T>(license_id: string): AxiosPromise<Response<T>>;
    /**
     * Purchase a game or subscription as a gift for another user.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/purchaseGift
     *
     * @param data { gift_type: 'premium'|'rental'|'subscription', payment_method_id: string, title_id?: string, recipient_id?: string, recipient_email?: string, recipient_name?: string }
     * @returns promise
     */
    static purchaseGift<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Redeem a gift code to grant access to a game or subscription.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/redeemGift
     *
     * @param redemption_code The unique GLITCH-XXXX-XXXX code.
     * @returns promise
     */
    static redeemGift<T>(redemption_code: string): AxiosPromise<Response<T>>;
}
export default Subscriptions;
