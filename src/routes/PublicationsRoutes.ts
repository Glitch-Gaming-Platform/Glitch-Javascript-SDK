import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class PublicationsRoutes {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/publications', method: HTTP_METHODS.GET },
      download: { url: '/publications/download', method: HTTP_METHODS.POST },
    };

  }

  export default PublicationsRoutes;