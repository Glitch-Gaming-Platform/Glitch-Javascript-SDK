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
    };

  }

  export default UserRoutes;