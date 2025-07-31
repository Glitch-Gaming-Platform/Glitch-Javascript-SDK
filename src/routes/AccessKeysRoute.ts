import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class AccessKeysRoute {

  public static routes: { [key: string]: Route } = {
    list: { url: '/titles/{title_id}/keys', method: HTTP_METHODS.GET },
    store: { url: '/titles/{title_id}/keys', method: HTTP_METHODS.POST },
    delete: { url: '/keys/{key_id}', method: HTTP_METHODS.DELETE },
  };

}

export default AccessKeysRoute;