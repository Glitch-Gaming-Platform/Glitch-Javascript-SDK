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
      reject : { url: '//titles/{title_id}/reject', method: HTTP_METHODS.POST },
    };

  }

  export default TitlesRoute;