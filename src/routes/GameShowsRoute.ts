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
      registerTitle: { url: '/gameshows/{show_id}/registerTitle', method: HTTP_METHODS.POST },
        listTitles: { url: '/gameshows/{show_id}/titles', method: HTTP_METHODS.GET },
        addTitle: { url: '/gameshows/{show_id}/addTitle', method: HTTP_METHODS.POST },
        viewTitle: { url: '/gameshows/{show_id}/titles/{title_id}', method: HTTP_METHODS.GET },
        updateTitle: { url: '/gameshows/{show_id}/titles/{title_id}', method: HTTP_METHODS.PUT },
        deleteTitle: { url: '/gameshows/{show_id}/titles/{title_id}', method: HTTP_METHODS.DELETE },
    };

  }

  export default GameShowsRoute;