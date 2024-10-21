import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class GameShowsRoute {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/gameshows', method: HTTP_METHODS.GET },
      create: { url: '/gameshows', method: HTTP_METHODS.POST  },
      view : { url: '/gameshows/{show_id}', method: HTTP_METHODS.GET  },
      update  :{ url: '/gameshows/{show_id}', method: HTTP_METHODS.PUT  },
      delete : { url: '/gameshows/{show_id}', method: HTTP_METHODS.DELETE },
      uploadLogo : {url : '/gameshows/{show_id}/uploadLogo', method: HTTP_METHODS.POST},
      uploadBannerImage : {url : '/gameshows/{show_id}/uploadBannerImage', method: HTTP_METHODS.POST},
    };

  }

  export default GameShowsRoute;