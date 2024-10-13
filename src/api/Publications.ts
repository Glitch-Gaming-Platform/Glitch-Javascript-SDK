import PublicationsRoutes from "../routes/PublicationsRoutes";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Publications {

    /**
     * Get a list of all publictions, podcasts and blogs.
     * 
     * @see https://api.glitch.fun/api/documentation#/Publications/getPublications
     * 
     * @returns promise
     */
    public static list<T>(params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(PublicationsRoutes.routes.list, undefined, undefined, params);
    }

    /**
     * Download the list of publictions, podcasts and blogs.
     * 
     * @see https://api.glitch.fun/api/documentation#/Publications/downloadPublications
     * 
     * @param data The data to be passed when creating a team.
     * 
     * @returns Promise
     */
    public static create<T>(data : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(PublicationsRoutes.routes.download, data, undefined, params);
    }

   


}

export default Publications;