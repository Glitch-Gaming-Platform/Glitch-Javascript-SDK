import GameShowsRoute from "../routes/GameShowsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class GameShows {

    /**
     * List all the GameShows.
     * 
     * @see https://api.glitch.fun/api/documentation#/GameShows/getGameShows
     * 
     * @returns promise
     */
    public static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.list, undefined, undefined, params);
    }

    /**
     * Create a new game show.
     * 
     * @see https://api.glitch.fun/api/documentation#/GameShows/createGameShow
     * 
     * @param data The data to be passed when creating a game show.
     * 
     * @returns Promise
     */
    public static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(GameShowsRoute.routes.create, data, undefined, params);
    }

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
    public static update<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(GameShowsRoute.routes.update, data, { show_id: show_id }, params);
    }

    /**
     * Retrieve the information for a single game show.
     * 
     * @see https://api.glitch.fun/api/documentation#/GameShows/getGameShowByUuid
     * 
     * @param show_id The id fo the game show to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(GameShowsRoute.routes.view, {}, { show_id: show_id }, params);
    }

    /**
     * Deletes a game show.
     * 
     * @see https://api.glitch.fun/api/documentation#/GameShows/deleteGameShow
     * 
     * @param show_id The id of the game show to delete.
     * @returns promise
     */
    public static delete<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(GameShowsRoute.routes.delete, {}, { show_id: show_id }, params);
    }

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
    public static uploadLogoFile<T>(show_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = GameShowsRoute.routes.uploadLogo.url.replace('{show_id}', show_id);

        return Requests.uploadFile(url, 'image', file, data);
    }

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
    public static uploadLogoBlob<T>(show_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = GameShowsRoute.routes.uploadLogo.url.replace('{show_id}', show_id);

        return Requests.uploadBlob(url, 'image', blob, data);
    }

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
    public static uploadBannerImageFile<T>(show_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = GameShowsRoute.routes.uploadBannerImage.url.replace('{show_id}', show_id);

        return Requests.uploadFile(url, 'image', file, data);
    }

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
    public static uploadBannerImageBlob<T>(show_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = GameShowsRoute.routes.uploadBannerImage.url.replace('{show_id}', show_id);

        return Requests.uploadBlob(url, 'image', blob, data);
    }

}

export default GameShows;