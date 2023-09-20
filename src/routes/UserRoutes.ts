import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class UserRoutes {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/users', method: HTTP_METHODS.GET },
      update: { url: '/users', method: HTTP_METHODS.PUT  },
      follow : { url: '/users/{user_id}/follow', method: HTTP_METHODS.POST  },
      profile  :{ url: '/users/{user_id}/profile', method: HTTP_METHODS.GET  },
      me : { url: '/users/me', method: HTTP_METHODS.GET },
      oneTimeToken : { url: '/users/oneTimeToken', method: HTTP_METHODS.GET },
      uploadAvatar : { url: '/users/uploadAvatarImage', method: HTTP_METHODS.POST },
      uploadBanner : { url: '/users/uploadBannerImage', method: HTTP_METHODS.POST },
      createDonationPage : { url: '/users/createDonationPage', method: HTTP_METHODS.POST },
      clearTwitchAuth : { url: '/users/clearTwitchAuth', method: HTTP_METHODS.DELETE },
      clearFacebookAuth : { url: '/users/clearFacebookAuth', method: HTTP_METHODS.DELETE },
      clearGoogleAuth : { url: '/users/clearGoogleAuth', method: HTTP_METHODS.DELETE },
      clearStripeAuth : { url: '/users/clearStripeAuth', method: HTTP_METHODS.DELETE },
      clearTikTokAuth : { url: '/users/clearTikTokAuth', method: HTTP_METHODS.DELETE },
      clearYoutubeAuth : { url: '/users/clearYoutubeAuth', method: HTTP_METHODS.DELETE },
      getTipsReceivedForMonth : { url: '/users/getTipsReceivedForMonth', method: HTTP_METHODS.GET },
      getTipsGivenForMonth : { url: '/users/getTipsGivenForMonth', method: HTTP_METHODS.GET },
      aggregateMonthlyReceivedTips : { url: '/users/aggregateMonthlyReceivedTips', method: HTTP_METHODS.GET },
      aggregateMonthlyGivenTips : { url: '/users/aggregateMonthlyGivenTips', method: HTTP_METHODS.GET },
      getYoutubeChannels : { url: '/users/getYoutubeChannels', method: HTTP_METHODS.GET },
    };

  }

  export default UserRoutes;