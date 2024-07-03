import SocialPostsRoute from "../routes/SocialPostsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class SocialPosts {

    /**
     * List all the Posts.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     * 
     * @returns promise
     */
    public static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.getPosts, undefined, undefined, params);
    }

    /**
     * Give a tip to another user
     * 
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     * 
     * @returns A promise
     */
    public static create<T>(data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.createPost, data, {}, params);
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
    public static view<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(SocialPostsRoute.routes.retrievePost, {}, { post_id: post_id }, params);
    }

     /**
     * Dispute a post as being fraudulent.,s
     * 
     * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/disputePost
     * 
     * @param post_id The id fo the post to retrieve.
     * 
     * @returns promise
     */
     public static dispute<T>(post_id: string, data? : object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(SocialPostsRoute.routes.dispute, data, { post_id: post_id }, params);
    }

}

export default SocialPosts;