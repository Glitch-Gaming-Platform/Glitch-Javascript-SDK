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

        purchaseLicense: { url: '/titles/{title_id}/purchase', method: HTTP_METHODS.POST },
        listMyLicenses: { url: '/subscriptions/my-licenses', method: HTTP_METHODS.GET },
        refundLicense: { url: '/subscriptions/licenses/{license_id}/refund', method: HTTP_METHODS.POST },

        purchaseGift: { url: '/subscriptions/gifts/purchase', method: HTTP_METHODS.POST },
        redeemGift: { url: '/subscriptions/gifts/redeem', method: HTTP_METHODS.POST },

    };

}

export default SubscriptionsRoute;