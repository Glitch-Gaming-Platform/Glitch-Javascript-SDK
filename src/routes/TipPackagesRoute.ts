import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class TipPackagesRoute {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/tipspackages', method: HTTP_METHODS.GET },
      create: { url: '/tipspackages', method: HTTP_METHODS.POST },
      view: { url: '/tipspackages/{package_id}', method: HTTP_METHODS.GET },
      update: { url: '/tipspackages/{package_id}', method: HTTP_METHODS.PUT },
      DELETE: { url: '/tipspackages/{package_id}', method: HTTP_METHODS.DELETE },
    };

  }

  export default TipPackagesRoute;