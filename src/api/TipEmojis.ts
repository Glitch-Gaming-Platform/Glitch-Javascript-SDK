import AuthRoutes from "../routes/AuthRoute";
import TipEmojiRoute from "../routes/TipEmojiRoute";
import TipRoute from "../routes/TipRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class TipEmojis {

    /**
     * Retrieve a list of emojis for tupping.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     * 
     * @returns promise
     */
    public static list<T>(params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(TipEmojiRoute.routes.list, undefined, undefined, params);
    }

    /**
     * Create a new emoji to use when tipping.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
     * 
     * @param data The data to be passed when creating a post.
     * 
     * @returns Promise
     */
    public static create<T>(data : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(TipEmojiRoute.routes.create, data, undefined, params);
    }
    /**
     * Update an emoji for tipping.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/updatePostStorage
     * 
     * @param type_id The id of the post to update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static update<T>(type_id : string, data : object, params?: Record<string, any>)  :  AxiosPromise<Response<T>>{

        return Requests.processRoute(TipEmojiRoute.routes.update, data, {type_id : type_id}, params);
    }

    /**
     * Retrieve a single emoji resource to be used when tipping.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     * 
     * @param type_id The id fo the post to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(type_id : string, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(TipEmojiRoute.routes.view, {}, {type_id : type_id}, params);
    }

    /**
     * Delete an emoji resource.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     * 
     * @param type_id The id of the post to delete.
     * @returns promise
     */
    public static delete<T>(type_id : string, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(TipEmojiRoute.routes.delete, {}, {type_id : type_id}, params);
    }

}

export default TipEmojis;