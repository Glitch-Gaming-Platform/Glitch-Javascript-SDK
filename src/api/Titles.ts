import TitlesRoute from "../routes/TitlesRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Titles {

    /**
     * List all the Titles.
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/edab2e3b061347b06c82258622d239e2
     * 
     * @returns promise
     */
    public static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(TitlesRoute.routes.list, undefined, undefined, params);
    }

    /**
     * Create a new title.
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/storeTitle
     * 
     * @param data The data to be passed when creating a title.
     * 
     * @returns Promise
     */
    public static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(TitlesRoute.routes.create, data, undefined, params);
    }

    /**
     * Update a title.
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/updateTitle
     * 
     * @param title_id The id of the title to update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static update<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(TitlesRoute.routes.update, data, { title_id: title_id }, params);
    }

    /**
     * Retrieve the information for a single title.
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/getTitleByUUID
     * 
     * @param title_id The id fo the title to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(TitlesRoute.routes.view, {}, { title_id: title_id }, params);
    }

    /**
     * Deletes a title.
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/deleteTitle
     * 
     * @param title_id The id of the title to delete.
     * @returns promise
     */
    public static delete<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(TitlesRoute.routes.delete, {}, { title_id: title_id }, params);
    }

    /**
     * Approve a title
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/approveTitle
     * 
     * @param data The data to be passed when creating a title.
     * 
     * @returns Promise
     */
    public static approve<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(TitlesRoute.routes.approve, data, { title_id: title_id }, params);
    }

    /**
     * Reject a title
     * 
     * @see https://api.glitch.fun/api/documentation#/Titles/rejectTitle
     * 
     * @param data The data to be passed when creating a title.
     * 
     * @returns Promise
     */
    public static reject<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(TitlesRoute.routes.reject, data, { title_id: title_id }, params);
    }

}

export default Titles;