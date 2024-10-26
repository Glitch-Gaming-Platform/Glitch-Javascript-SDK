import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class GameShows {
    /**
     * List all the GameShows.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/getGameShows
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new game show.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/createGameShow
     *
     * @param data The data to be passed when creating a game show.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a game show.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/updateGameShow
     *
     * @param show_id The id of the game show to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static update<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single game show.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/getGameShowByUuid
     *
     * @param show_id The id fo the game show to retrieve.
     *
     * @returns promise
     */
    static view<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes a game show.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/deleteGameShow
     *
     * @param show_id The id of the game show to delete.
     * @returns promise
     */
    static delete<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
       * Updates the main image for the game show using a File object.
       *
       * @see https://api.glitch.fun/api/documentation#/GameShows/uploadGameShowLogo
       *
       * @param file The file object to upload.
       * @param data Any additional data to pass along to the upload.
       *
       * @returns promise
       */
    static uploadLogoFile<T>(show_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the main image for the game show using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/uploadGameShowLogo
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadLogoBlob<T>(show_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the game show using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/uploadGameShowBannerImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadBannerImageFile<T>(show_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the game show using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/uploadGameShowBannerImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadBannerImageBlob<T>(show_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Register a title to a game show.
     */
    static registerTitle<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a title to a game show by admin.
     */
    static addTitle<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all titles for a game show.
     */
    static listTitles<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get details of a specific title in a game show.
     */
    static getTitle<T>(show_id: string, title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a specific title in a game show.
     */
    static updateTitle<T>(show_id: string, title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a specific title from a game show.
     */
    static deleteTitle<T>(show_id: string, title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default GameShows;
