import NewslettersRoutes from "../routes/NewslettersRoutes";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Newsletters {


    /**
     * Download the list of publictions, podcasts and blogs.
     * 
     * @see https://api.glitch.fun/api/documentation#/Newsletters/downloadMarketingChecklists
     * 
     * @param data The data to be passed when creating a team.
     * 
     * @returns Promise
     */
    public static downloadMarketingChecklist<T>(data : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(NewslettersRoutes.routes.downloadMarketingChecklist, data, undefined, params);
    }

   


}

export default Newsletters;