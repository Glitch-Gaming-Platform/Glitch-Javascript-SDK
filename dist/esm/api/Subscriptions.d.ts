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
}
export default Subscriptions;
