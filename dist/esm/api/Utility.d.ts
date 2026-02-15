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
    /**
     * Get all the genders available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenders
     *
     * @returns promise
     */
    static listGenders<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all the countries available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenres
     *
     * @returns promise
     */
    static listCountries<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all the ethnicities available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenres
     *
     * @returns promise
     */
    static listEthnicities<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all the game types available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilTypes
     *
     * @returns promise
     */
    static listTypes<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all genres that are associated with at least one game title.
     * Includes the 'titles_count' property.
     *
     * @returns promise
     */
    static listActiveGenres<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Utility;
