import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Utility {
    /**
     * Get all the social interactions and emojis that are available.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilSocialInteraction
     *
     * @returns promise
     */
    static listSocialInteractions<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all the genres available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenres
     *
     * @returns promise
     */
    static listGenres<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Utility;
