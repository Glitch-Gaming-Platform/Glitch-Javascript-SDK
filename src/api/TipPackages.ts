import AuthRoutes from "../routes/AuthRoute";
import TipPackagesRoute from "../routes/TipPackagesRoute";
import TipRoute from "../routes/TipRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class TipPackages {

    /**
     * Retrieve a list of tip packages.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     * 
     * @returns promise
     */
    public static list<T>(params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(TipPackagesRoute.routes.list, undefined, undefined, params);
    }

    /**
     * Create a new tip package.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
     * 
     * @param data The data to be passed when creating a post.
     * 
     * @returns Promise
     */
    public static create<T>(data : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(TipPackagesRoute.routes.create, data, undefined, params);
    }
    /**
     * Update a tip package.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/updatePostStorage
     * 
     * @param package_id The id of the post to update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static update<T>(package_id : string, data : object, params?: Record<string, any>)  :  AxiosPromise<Response<T>>{

        return Requests.processRoute(TipPackagesRoute.routes.update, data, {package_id : package_id}, params);
    }

    /**
     * Retrieve a single tip package resource.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     * 
     * @param package_id The id fo the post to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(package_id : string, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(TipPackagesRoute.routes.view, {}, {package_id : package_id}, params);
    }

    /**
     * Delete a tip package.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     * 
     * @param package_id The id of the post to delete.
     * @returns promise
     */
    public static delete<T>(package_id : string, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(TipPackagesRoute.routes.delete, {}, {package_id : package_id}, params);
    }

}

export default TipPackages;