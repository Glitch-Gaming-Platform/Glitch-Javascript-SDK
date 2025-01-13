import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class SocialPosts {
    /**
     * List all the Posts.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Give a tip to another user
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    static create<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param post_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    static view<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update the informationa bout a post, as long as it hasn't been posted.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param post_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    static update<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes a post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     *
     * @param post_id The id of the post to delete.
     * @returns promise
     */
    static delete<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Dispute a post as being fraudulent.,s
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/disputePost
    *
    * @param post_id The id fo the post to retrieve.
    *
    * @returns promise
    */
    static dispute<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get the change of the post metrics over a period of time.
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/getSocialMediaPostHistory
    *
    * @param post_id The id fo the post to retrieve.
    *
    * @returns promise
    */
    static history<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get the change progression of a social media post over period of time.
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/getSocialMediaPostHistory
    *
    * @param post_id The id fo the post to retrieve.
    *
    * @returns promise
    */
    static progression<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static addMedia<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static removeMedia<T>(post_id: string, media_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static reschedule<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get the reports for a social media post
    *
    * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
    *
    * @returns promise
    */
    static reports<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update the information about a post impressions, for posts who API do not give view counts.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param post_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    static updatePostImpressions<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get reports on all the the short links
    *
    * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
    *
    * @returns promise
    */
    static shortLinkReports<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default SocialPosts;
