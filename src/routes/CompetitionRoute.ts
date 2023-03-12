import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class CompetitionRoutes {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/auth/login', method: HTTP_METHODS.POST },
      create: { url: '/auth/register', method: HTTP_METHODS.POST  },
      view : { url: '/auth/oneTimeLoginWithToken', method: HTTP_METHODS.POST  },
      update  :{ url: '/auth/forgotpassword', method: HTTP_METHODS.POST  },
      delete : { url: '/auth/resetpassword', method: HTTP_METHODS.POST },
    };

  }

  export default CompetitionRoutes;