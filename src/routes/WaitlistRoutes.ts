import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class WaitlistRoutes {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/waitlists', method: HTTP_METHODS.GET },
      create: { url: '/waitlists', method: HTTP_METHODS.POST },
      show : { url: '/waitlists/{waitlist_id}', method: HTTP_METHODS.GET},
      update : { url: '/waitlists/{waitlist_id}', method: HTTP_METHODS.PUT},
      delete : { url: '/waitlists/{waitlist_id}', method: HTTP_METHODS.DELETE},
    };

  }

  export default WaitlistRoutes;