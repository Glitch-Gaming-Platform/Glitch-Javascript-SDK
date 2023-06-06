import UtilityRoutes from "../routes/UtilityRoutes";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Utility {

    /**
     * Get all the social interactions and emojis that are available.
     * 
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilSocialInteraction
     * 
     * @returns promise
     */
    public static listSocialInteractions<T>(params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(UtilityRoutes.routes.social_interactions, undefined, undefined, params);
    }

}

export default Utility;