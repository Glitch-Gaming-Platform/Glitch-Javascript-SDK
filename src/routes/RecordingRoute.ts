import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class RecordingsRoute {
    
    public static routes: { [key: string]: Route } = {
      login: { url: '/auth/login', method: HTTP_METHODS.POST },
      register: { url: '/auth/register', method: HTTP_METHODS.POST  },
      one_time_login : { url: '/auth/oneTimeLoginWithToken', method: HTTP_METHODS.POST  },
      forgot_password  :{ url: '/auth/forgotpassword', method: HTTP_METHODS.POST  },
      reset_password : { url: '/auth/resetpassword', method: HTTP_METHODS.POST },
    };

  }

  export default RecordingsRoute;