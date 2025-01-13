import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class HashtagRoute {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/hashtags', method: HTTP_METHODS.GET },
      top: { url: '/hashtags/top', method: HTTP_METHODS.GET },
    };

  }

  export default HashtagRoute;