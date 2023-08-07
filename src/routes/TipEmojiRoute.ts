import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class TipEmojiRoute {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/tipstypes', method: HTTP_METHODS.GET },
      create: { url: '/tipstypes', method: HTTP_METHODS.POST },
      view: { url: '/tipstypes/{type_id}', method: HTTP_METHODS.GET },
      update: { url: '/tipstypes/{type_id}', method: HTTP_METHODS.PUT },
      DELETE: { url: '/tipstypes/{type_id}', method: HTTP_METHODS.DELETE },
    };

  }

  export default TipEmojiRoute;