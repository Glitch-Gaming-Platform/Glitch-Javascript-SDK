import PostsRoute from "../routes/PostsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Posts {

    /**
     * List all the Posts.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     * 
     * @returns promise
     */
    public static list<T>(params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(PostsRoute.routes.list, undefined, undefined, params);
    }

    /**
     * Create a new post.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
     * 
     * @param data The data to be passed when creating a post.
     * 
     * @returns Promise
     */
    public static create<T>(data : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(PostsRoute.routes.create, data, undefined, params);
    }

    /**
     * Update a post.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/updatePostStorage
     * 
     * @param post_id The id of the post to update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static update<T>(post_id : string, data : object, params?: Record<string, any>)  :  AxiosPromise<Response<T>>{

        return Requests.processRoute(PostsRoute.routes.update, data, {post_id : post_id}, params);
    }

    /**
     * Retrieve the information for a single post.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     * 
     * @param post_id The id fo the post to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(post_id : string, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(PostsRoute.routes.view, {}, {post_id : post_id}, params);
    }

    /**
     * Deletes a post.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     * 
     * @param post_id The id of the post to delete.
     * @returns promise
     */
    public static delete<T>(post_id : string, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(PostsRoute.routes.delete, {}, {post_id : post_id}, params);
    }

}

export default Posts;