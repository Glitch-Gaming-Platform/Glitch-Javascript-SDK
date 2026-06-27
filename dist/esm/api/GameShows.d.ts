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
    /**
     * List public page-builder blocks for a game show.
     */
    static listBlocks<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a page-builder block for a game show. Requires organizer permissions.
     */
    static createBlock<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a page-builder block for a game show. Requires organizer permissions.
     */
    static updateBlock<T>(show_id: string, block_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a page-builder block from a game show. Requires organizer permissions.
     */
    static deleteBlock<T>(show_id: string, block_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Reorder page-builder blocks for a game show. Requires organizer permissions.
     */
    static reorderBlocks<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List livestream and programming schedule items for a game show.
     */
    static listSchedule<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a schedule item for a game show. Requires organizer permissions.
     */
    static createScheduleItem<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a schedule item for a game show. Requires organizer permissions.
     */
    static updateScheduleItem<T>(show_id: string, schedule_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a schedule item from a game show. Requires organizer permissions.
     */
    static deleteScheduleItem<T>(show_id: string, schedule_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the game show discovery queue.
     */
    static discoveryQueue<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Track public game show analytics events.
     */
    static trackAnalytics<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get organizer analytics for a game show.
     */
    static analyticsReport<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Join or update a public notification signup for a game show.
     */
    static joinWishlist<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List notification signups for a game show. Requires organizer permissions.
     */
    static listWishlist<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List public game shows that include a title. Useful for game-page festival banners.
     */
    static listForTitle<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default GameShows;
