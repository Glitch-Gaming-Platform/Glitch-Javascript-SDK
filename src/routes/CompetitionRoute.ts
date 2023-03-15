import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class CompetitionRoutes {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/competitions', method: HTTP_METHODS.GET },
      create: { url: '/competitions', method: HTTP_METHODS.POST  },
      view : { url: '/competitions/{competition_id}', method: HTTP_METHODS.GET  },
      update  :{ url: '/competitions/{competition_id}', method: HTTP_METHODS.PUT  },
      delete : { url: '/competitions/{competition_id}', method: HTTP_METHODS.DELETE },
    };

  }

  export default CompetitionRoutes;