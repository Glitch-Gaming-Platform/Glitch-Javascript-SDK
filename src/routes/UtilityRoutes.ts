import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class UtilityRoutes {

  public static routes: { [key: string]: Route } = {
    social_interactions: { url: '/util/socialinteractions', method: HTTP_METHODS.GET },
    genres: { url: '/util/genres', method: HTTP_METHODS.GET },
    countries: { url: '/util/countries', method: HTTP_METHODS.GET },
    genders: { url: '/util/genders', method: HTTP_METHODS.GET },
    ethnicities : { url: '/util/ethnicities', method: HTTP_METHODS.GET },
  };

}

export default UtilityRoutes;