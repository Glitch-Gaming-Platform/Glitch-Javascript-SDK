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

    /**
     * Get all the genres available on the platform.
     * 
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenres
     * 
     * @returns promise
     */
    public static listGenres<T>(params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(UtilityRoutes.routes.genres, undefined, undefined, params);
    }

    /**
     * Get all the genders available on the platform.
     * 
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenders
     * 
     * @returns promise
     */
    public static listGenders<T>(params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(UtilityRoutes.routes.genders, undefined, undefined, params);
    }

    /**
     * Get all the countries available on the platform.
     * 
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenres
     * 
     * @returns promise
     */
    public static listCountries<T>(params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(UtilityRoutes.routes.countries, undefined, undefined, params);
    }

    /**
     * Get all the ethnicities available on the platform.
     * 
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenres
     * 
     * @returns promise
     */
    public static listEthnicities<T>(params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(UtilityRoutes.routes.ethnicities, undefined, undefined, params);
    }

    /**
     * Get all the game types available on the platform.
     * 
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilTypes
     * 
     * @returns promise
     */
    public static listTypes<T>(params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(UtilityRoutes.routes.types, undefined, undefined, params);
    }

}

export default Utility;