import SubscriptionsRoute from "../routes/SubscriptionsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Subscriptions {

    /**
     * Get a creator subscription for the creator program.
     * 
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCreatorSubscription
     * 
     * @returns promise
     */
    public static getCreatorSubscription<T>(stripe_subscription_id : string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SubscriptionsRoute.routes.getCreatorSubscription, undefined, {stripe_subscription_id : stripe_subscription_id}, params);
    }

    /**
     * Get a s subscription plan that a community has to talk with influencers
     * 
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCommunityInfluencerSubscription
     * 
     * @returns promise
     */
     public static getCommunityInfluencerSubscription<T>(community_id : string, stripe_subscription_id : string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SubscriptionsRoute.routes.getCommunityInfluencerSubscription, undefined, {community_id  : community_id, stripe_subscription_id : stripe_subscription_id}, params);
    }

    /**
     * List all the subscription plans that a creator has.
     * 
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCreatorSubscriptions
     * 
     * @returns promise
     */
    public static listCreatorSubscriptions<T>( params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SubscriptionsRoute.routes.listCreatorSubscriptions, undefined, undefined, params);
    }

    /**
     * List all the subscription plans that a community has.
     * 
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCommunityInfluencerSubscriptions
     * 
     * @returns promise
     */
    public static listCommunityInfluencerSubscriptions<T>(community_id : string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SubscriptionsRoute.routes.listCommunityInfluencerSubscriptions, undefined, {community_id  : community_id}, params);
    }

    /**
     * Create a new subscription of a content creator
     * 
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/createCreatorSubscription
     * 
     * @returns A promise
     */
    public static createCreatorSubscription<T>(data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(SubscriptionsRoute.routes.createCreatorSubscription, data, {}, params);
    }

    /**
     * Create a new subscription of a community engaging in influencer marketing
     * 
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/createCommunityInfluencerSubscription
     * 
     * @returns A promise
     */
    public static createCommunityInfluencerSubscription<T>(community_id : string, data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(SubscriptionsRoute.routes.createCommunityInfluencerSubscription, data, {community_id: community_id}, params);
    }

    /**
     * Cancels a creator subscription
     * 
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/cancelCreatorSubscription
     * 
     * @returns A promise
     */
    public static cancelCreatorSubscription<T>(stripe_subscription_id: string, data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(SubscriptionsRoute.routes.cancelCreatorSubscription, data, {stripe_subscription_id : stripe_subscription_id}, params);
    }

    /**
     * Cancels a community subscription
     * 
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/cancelCommunityInfluencerSubscription
     * 
     * @returns A promise
     */
    public static cancelCommunityInfluencerSubscription<T>(community_id : string, stripe_subscription_id: string, data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(SubscriptionsRoute.routes.cancelCreatorSubscription, data, {community_id: community_id, stripe_subscription_id : stripe_subscription_id}, params);
    }
   

}

export default Subscriptions;