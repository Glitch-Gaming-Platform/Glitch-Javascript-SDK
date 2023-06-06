import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class UtilityRoutes {

  public static routes: { [key: string]: Route } = {
    social_interactions: { url: '/util/socialinteractions', method: HTTP_METHODS.GET },
  };

}

export default UtilityRoutes;