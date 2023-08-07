import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class TipRoute {
    
    public static routes: { [key: string]: Route } = {
      give: { url: '/tips/give', method: HTTP_METHODS.POST },

    };

  }

  export default TipRoute;