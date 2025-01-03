import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class TitlesRoute {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/titles', method: HTTP_METHODS.GET },
      create: { url: '/titles', method: HTTP_METHODS.POST  },
      view : { url: '/titles/{title_id}', method: HTTP_METHODS.GET  },
      update  :{ url: '/titles/{title_id}', method: HTTP_METHODS.PUT  },
      delete : { url: '/titles/{title_id}', method: HTTP_METHODS.DELETE },
      approve : { url: '/titles/{title_id}/approve', method: HTTP_METHODS.POST },
      reject : { url: '/titles/{title_id}/reject', method: HTTP_METHODS.POST },
      uploadMainImage : {url : '/titles/{title_id}/uploadMainImage', method: HTTP_METHODS.POST},
      uploadBannerImage : {url : '/titles/{title_id}/uploadBannerImage', method: HTTP_METHODS.POST},
      addAdministrator : { url: '/titles/{title_id}/addAdministrator', method: HTTP_METHODS.POST },
      removeAdministrator : { url: '/titles/{title_id}/removeAdministrator/{user_id}', method: HTTP_METHODS.DELETE },
      addMedia: { url: '/titles/{title_id}/addMedia', method: HTTP_METHODS.POST },
      removeMedia: { url: '/titles/{title_id}/removeMedia/{media_id}', method: HTTP_METHODS.DELETE },
      updateMediaOrder: { url: '/titles/{title_id}/updateMediaOrder', method: HTTP_METHODS.POST },
      importWishlist: { url: '/titles/{title_id}/wishlist/import', method: HTTP_METHODS.POST },
      getWishlist: { url: '/titles/{title_id}/wishlist', method: HTTP_METHODS.GET },
    };

  }

  export default TitlesRoute;