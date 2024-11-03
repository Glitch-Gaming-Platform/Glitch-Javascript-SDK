import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class NewslettersRoutes {
    
    public static routes: { [key: string]: Route } = {
      downloadMarketingChecklist: { url: '/newsletters/downloadMarketingChecklist', method: HTTP_METHODS.POST },
    };

  }

  export default NewslettersRoutes;