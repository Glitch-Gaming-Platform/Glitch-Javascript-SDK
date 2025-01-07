import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class UserRoutes {

  public static routes: { [key: string]: Route } = {
    list: { url: '/users', method: HTTP_METHODS.GET },
    update: { url: '/users', method: HTTP_METHODS.PUT },
    follow: { url: '/users/{user_id}/follow', method: HTTP_METHODS.POST },
    profile: { url: '/users/{user_id}/profile', method: HTTP_METHODS.GET },
    me: { url: '/users/me', method: HTTP_METHODS.GET },
    syncInfluencer: { url: '/users/syncInfluencer', method: HTTP_METHODS.POST },
    generateInfluencerProfile: { url: '/users/generateInfluencerProfile', method: HTTP_METHODS.POST },
    oneTimeToken: { url: '/users/oneTimeToken', method: HTTP_METHODS.GET },
    uploadAvatar: { url: '/users/uploadAvatarImage', method: HTTP_METHODS.POST },
    uploadBanner: { url: '/users/uploadBannerImage', method: HTTP_METHODS.POST },
    createDonationPage: { url: '/users/createDonationPage', method: HTTP_METHODS.POST },
    clearTwitchAuth: { url: '/users/clearTwitchAuth', method: HTTP_METHODS.DELETE },
    clearFacebookAuth: { url: '/users/clearFacebookAuth', method: HTTP_METHODS.DELETE },
    clearGoogleAuth: { url: '/users/clearGoogleAuth', method: HTTP_METHODS.DELETE },
    clearStripeAuth: { url: '/users/clearStripeAuth', method: HTTP_METHODS.DELETE },
    clearTikTokAuth: { url: '/users/clearTikTokAuth', method: HTTP_METHODS.DELETE },
    clearYoutubeAuth: { url: '/users/clearYoutubeAuth', method: HTTP_METHODS.DELETE },
    clearRedditAuth: { url: '/users/clearRedditAuth', method: HTTP_METHODS.DELETE },
    clearTwitterAuth: { url: '/users/clearTwitterAuth', method: HTTP_METHODS.DELETE },
    clearDocusignAuth: { url: '/users/clearDocusignAuth', method: HTTP_METHODS.DELETE },
    clearStreamElementsAuth: { url: '/users/clearStreamElementsAuth', method: HTTP_METHODS.DELETE },
    getTipsReceivedForMonth: { url: '/users/getTipsReceivedForMonth', method: HTTP_METHODS.GET },
    getTipsGivenForMonth: { url: '/users/getTipsGivenForMonth', method: HTTP_METHODS.GET },
    aggregateMonthlyReceivedTips: { url: '/users/aggregateMonthlyReceivedTips', method: HTTP_METHODS.GET },
    aggregateMonthlyGivenTips: { url: '/users/aggregateMonthlyGivenTips', method: HTTP_METHODS.GET },
    getYoutubeChannels: { url: '/users/getYoutubeChannels', method: HTTP_METHODS.GET },
    getFacebookGroups: { url: '/users/getFacebookGroups', method: HTTP_METHODS.GET },
    addGenre: { url: '/users/addGenre', method: HTTP_METHODS.POST },
    removeGenre: { url: '/users/removeGenre/{genre_id}', method: HTTP_METHODS.DELETE },
    addType: { url: '/users/addType', method: HTTP_METHODS.POST },
    removeType: { url: '/users/removeType/{type_id}', method: HTTP_METHODS.DELETE },
    getCampaignInvites: { url: '/users/getCampaignInvites', method: HTTP_METHODS.GET },
    getPayouts: { url: '/users/payouts', method: HTTP_METHODS.GET },
    verifyAccount: { url: '/users/verify', method: HTTP_METHODS.POST },
    getInstagramAccounts: { url: '/users/instagramAccounts', method: HTTP_METHODS.GET },

    getFacebookPages: { url: "/users/facebookPages", method: HTTP_METHODS.GET },
    getSubreddits: { url: "/users/reddit/subreddits", method: HTTP_METHODS.GET },
    getSubredditFlairs: { url: "/users/reddit/redditflairs/{subreddit}", method: HTTP_METHODS.GET },

    search: { url: '/users/search', method: HTTP_METHODS.GET },

  };

}

export default UserRoutes;