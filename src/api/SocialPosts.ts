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
    public static create<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
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
     * Update the informationa bout a post, as long as it hasn't been posted.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     * 
     * @param post_id The id fo the post to retrieve.
     * 
     * @returns promise
     */
    public static update<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(SocialPostsRoute.routes.updatePost, data, { post_id: post_id }, params);
    }

    /**
     * Deletes a post.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     * 
     * @param post_id The id of the post to delete.
     * @returns promise
     */
    public static delete<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(SocialPostsRoute.routes.deletePost, {}, { post_id: post_id }, params);
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
    public static dispute<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(SocialPostsRoute.routes.dispute, data, { post_id: post_id }, params);
    }

    /**
    * Get the change of the post metrics over a period of time.
    * 
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/getSocialMediaPostHistory
    * 
    * @param post_id The id fo the post to retrieve.
    * 
    * @returns promise
    */
    public static history<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(SocialPostsRoute.routes.history, {}, { post_id: post_id }, params);
    }

    /**
    * Get the change progression of a social media post over period of time.
    * 
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/getSocialMediaPostHistory
    * 
    * @param post_id The id fo the post to retrieve.
    * 
    * @returns promise
    */
    public static progression<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(SocialPostsRoute.routes.progression, {}, { }, params);
    }

    /**
     * Add media to a social media post.
     * 
     * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/addMediaToSocialMediaPost
     * 
     * @param post_id The ID of the social media post.
     * @param data The data to be sent in the request body.
     * 
     * @returns promise
     */
    public static addMedia<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.addMedia, data, { post_id: post_id }, params);
    }

    /**
     * Remove media from a social media post.
     * 
     * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/removeMediaFromSocialMediaPost
     * 
     * @param post_id The ID of the social media post.
     * @param media_id The ID of the media to remove.
     * 
     * @returns promise
     */
    public static removeMedia<T>(post_id: string, media_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.removeMedia, {}, { post_id: post_id, media_id: media_id }, params);
    }

    /**
    * Reschedule a post that has failed.
    * 
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/addMediaToSocialMediaPost
    * 
    * @param post_id The ID of the social media post.
    * @param data The data to be sent in the request body.
    * 
    * @returns promise
    */
    public static reschedule<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.reschedule, data, { post_id: post_id }, params);
    }

    /**
    * Get the reports for a social media post
    * 
    * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
    * 
    * @returns promise
    */
    public static reports<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.reports, undefined, undefined, params);
    }

    /**
     * Update the information about a post impressions, for posts who API do not give view counts.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     * 
     * @param post_id The id fo the post to retrieve.
     * 
     * @returns promise
     */
    public static updatePostImpressions<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(SocialPostsRoute.routes.updatePostImpressions, data, { post_id: post_id }, params);
    }

    /**
    * Get reports on all the the short links
    * 
    * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
    * 
    * @returns promise
    */
    public static shortLinkReports<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.shortLinkReports, undefined, undefined, params);
    }

}

export default SocialPosts;