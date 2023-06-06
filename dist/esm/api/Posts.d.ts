import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Posts {
    /**
     * List all the Posts.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
     *
     * @param data The data to be passed when creating a post.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Create a new post with a file. The file should either be an image or video.
    *
    * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
    *
    * @param file The file object to upload.
    * @param data Any additional data to pass along to the upload.
    *
    * @returns promise
    */
    static createWithFile<T>(file: File, data?: object): AxiosPromise<Response<T>>;
    /**
     * Create a new post with a blob. The blob should either be an image or video.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
     *
     * @param file The blob to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static createWithBlob<T>(blob: Blob, data?: object): AxiosPromise<Response<T>>;
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
    static update<T>(post_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
     * Deletes a post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     *
     * @param post_id The id of the post to delete.
     * @returns promise
     */
    static delete<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Toggle a social interaction and off for a post.
     *
     * @see hhttps://api.glitch.fun/api/documentation#/Post%20Route/postToggleInteraction
     *
     * @param data The data to be passed when toggling the interaction.
     *
     * @returns Promise
     */
    static toggleInteraction<T>(post_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Posts;
