import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class SubscriptionsRoute {
    
    public static routes: { [key: string]: Route } = {
        createCreatorSubscription: { url: '/subscriptions/creators/subscribe', method: HTTP_METHODS.POST },
        getCreatorSubscription: { url: '/subscriptions/creators/{stripe_subscription_id}', method: HTTP_METHODS.GET },
        cancelCreatorSubscription: { url: '/subscriptions/creators/{stripe_subscription_id}', method: HTTP_METHODS.DELETE },
        listCreatorSubscriptions: { url: '/subscriptions/creators', method: HTTP_METHODS.GET },

        createCommunityInfluencerSubscription: { url: '/subscriptions/communities/influencers/subscribe/{community_id}', method: HTTP_METHODS.POST },
        getCommunityInfluencerSubscription: { url: '/subscriptions/communities/influencers/{community_id}/{stripe_subscription_id}', method: HTTP_METHODS.GET },
        cancelCommunityInfluencerSubscription: { url: '/subscriptions/communities/influencers/{community_id}/{stripe_subscription_id}', method: HTTP_METHODS.DELETE },
        listCommunityInfluencerSubscriptions: { url: '/subscriptions/communities/influencers/{community_id}', method: HTTP_METHODS.GET },
        changeCommunityInfluencerSubscription: { url: '/subscriptions/communities/influencers/change/{community_id}', method: HTTP_METHODS.POST },

        createCustomCommunitySubscription: { 
            url: '/subscriptions/communities/custom/{community_id}', 
            method: HTTP_METHODS.POST 
        },
    };

  }

  export default SubscriptionsRoute;