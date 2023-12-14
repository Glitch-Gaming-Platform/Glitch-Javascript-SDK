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
    public static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
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
    public static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(PostsRoute.routes.create, data, undefined, params);
    }

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
    public static createWithFile<T>(file: File, data?: object): AxiosPromise<Response<T>> {

        return Requests.uploadFile(PostsRoute.routes.create.url, 'file', file, data);
    }

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
    public static createWithBlob<T>(blob: Blob, data?: object): AxiosPromise<Response<T>> {

        return Requests.uploadBlob(PostsRoute.routes.create.url, 'file', blob, data);
    }

    /**
   * Create a new post with a file divided into chunks.
   * 
   * @param file The file object to upload.
   * @param chunkSize Size of each chunk in bytes. Default is 1MB.
   * @param data Any additional data to pass along to the upload.
   * 
   * @returns Promise
   */
    /**
     * Create a new post with a file divided into chunks.
     * 
     * @param file The file object to upload.
     * @param chunkSize Size of each chunk in bytes. Default is 1MB.
     * @param data Any additional data to pass along to the upload.
     * 
     * @returns Promise
     */
    public static async createWithFileInChunks<T>(file: File, chunkSize: number = 1 * 1024 * 1024, data: { [key: string]: any } = {}): Promise<AxiosPromise<Response<T>>> {
        const totalChunks = Math.ceil(file.size / chunkSize);
        let lastResponse: AxiosPromise<Response<T>> | undefined;

        for (let i = 0; i < totalChunks; i++) {
            const start = i * chunkSize;
            const end = start + chunkSize;
            const chunk = file.slice(start, end);

            const formData = new FormData();
            formData.append('file', chunk, `${i}-${file.name}`); // Naming chunks as index-filename for identification
            formData.append('totalChunks', totalChunks.toString());
            formData.append('currentChunk', i.toString());

            // merge any other data if provided
            for (let key in data) {
                formData.append(key, data[key]);
            }

            // If it's the last chunk, save the response
            if (i === totalChunks - 1) {
                await Requests.uploadFile(PostsRoute.routes.create.url, 'file', chunk, formData);
            } else {
                await Requests.uploadFile(PostsRoute.routes.create.url, 'file', chunk, formData);
            }
        }

        if (!lastResponse) {
            throw new Error("No response from the last chunk upload");
        }

        return lastResponse;
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
    public static update<T>(post_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(PostsRoute.routes.update, data, { post_id: post_id }, params);
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

        return Requests.processRoute(PostsRoute.routes.view, {}, { post_id: post_id }, params);
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

        return Requests.processRoute(PostsRoute.routes.delete, {}, { post_id: post_id }, params);
    }

    /**
     * Toggle a social interaction and off for a post.
     * 
     * @see hhttps://api.glitch.fun/api/documentation#/Post%20Route/postToggleInteraction
     * 
     * @param data The data to be passed when toggling the interaction.
     * 
     * @returns Promise
     */
    public static toggleInteraction<T>(post_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(PostsRoute.routes.toggleInteraction, data, { post_id: post_id }, params);
    }

}

export default Posts;