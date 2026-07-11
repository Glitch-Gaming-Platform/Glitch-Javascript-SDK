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

    /**
     * Register a title to a game show.
     */
    public static registerTitle<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.registerTitle, data, { show_id: show_id }, params);
    }

    /**
     * Add a title to a game show by admin.
     */
    public static addTitle<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.addTitle, data, { show_id: show_id }, params);
    }

    /** Preview CSV/TSV/TXT/ZIP registrations without writing showcase data. */
    public static previewExternalTitles<T>(show_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        // Multipart helpers require the concrete URL before uploading.
        const url = GameShowsRoute.routes.previewExternalTitles.url.replace('{show_id}', show_id);
        return Requests.uploadFile(url, 'file', file, data, params);
    }

    /** Import valid external registrations after organizer preview. */
    public static importExternalTitles<T>(show_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        const url = GameShowsRoute.routes.importExternalTitles.url.replace('{show_id}', show_id);
        return Requests.uploadFile(url, 'file', file, data, params);
    }

    /**
     * List all titles for a game show.
     */
    public static listTitles<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.listTitles, {}, { show_id: show_id }, params);
    }

    /**
     * Get details of a specific title in a game show.
     */
    public static getTitle<T>(show_id: string, title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.viewTitle, {}, { show_id: show_id, title_id: title_id }, params);
    }

    /**
     * Update a specific title in a game show.
     */
    public static updateTitle<T>(show_id: string, title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.updateTitle, data, { show_id: show_id, title_id: title_id }, params);
    }

    /**
     * Delete a specific title from a game show.
     */
    public static deleteTitle<T>(show_id: string, title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.deleteTitle, {}, { show_id: show_id, title_id: title_id }, params);
    }

    /**
     * List public page-builder blocks for a game show.
     */
    public static listBlocks<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.listBlocks, {}, { show_id: show_id }, params);
    }

    /**
     * Create a page-builder block for a game show. Requires organizer permissions.
     */
    public static createBlock<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.createBlock, data, { show_id: show_id }, params);
    }

    /**
     * Update a page-builder block for a game show. Requires organizer permissions.
     */
    public static updateBlock<T>(show_id: string, block_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.updateBlock, data, { show_id: show_id, block_id: block_id }, params);
    }

    /**
     * Delete a page-builder block from a game show. Requires organizer permissions.
     */
    public static deleteBlock<T>(show_id: string, block_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.deleteBlock, {}, { show_id: show_id, block_id: block_id }, params);
    }

    /**
     * Reorder page-builder blocks for a game show. Requires organizer permissions.
     */
    public static reorderBlocks<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.reorderBlocks, data, { show_id: show_id }, params);
    }

    /**
     * List livestream and programming schedule items for a game show.
     */
    public static listSchedule<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.listSchedule, {}, { show_id: show_id }, params);
    }

    /**
     * Create a schedule item for a game show. Requires organizer permissions.
     */
    public static createScheduleItem<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.createScheduleItem, data, { show_id: show_id }, params);
    }

    /**
     * Update a schedule item for a game show. Requires organizer permissions.
     */
    public static updateScheduleItem<T>(show_id: string, schedule_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.updateScheduleItem, data, { show_id: show_id, schedule_id: schedule_id }, params);
    }

    /**
     * Delete a schedule item from a game show. Requires organizer permissions.
     */
    public static deleteScheduleItem<T>(show_id: string, schedule_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.deleteScheduleItem, {}, { show_id: show_id, schedule_id: schedule_id }, params);
    }

    /**
     * Get the game show discovery queue.
     */
    public static discoveryQueue<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.discoveryQueue, {}, { show_id: show_id }, params);
    }

    /**
     * Track public game show analytics events.
     */
    public static trackAnalytics<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.trackAnalytics, data, { show_id: show_id }, params);
    }

    /**
     * Get organizer analytics for a game show.
     */
    public static analyticsReport<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.analyticsReport, {}, { show_id: show_id }, params);
    }

    /**
     * Join or update a public notification signup for a game show.
     */
    public static joinWishlist<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.joinWishlist, data, { show_id: show_id }, params);
    }

    /**
     * List notification signups for a game show. Requires organizer permissions.
     */
    public static listWishlist<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.listWishlist, {}, { show_id: show_id }, params);
    }

    /**
     * List public game shows that include a title. Useful for game-page festival banners.
     */
    public static listForTitle<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.listForTitle, {}, { title_id: title_id }, params);
    }

    /** List private sponsor workflow, contact, billing, media, and placements. */
    public static listSponsors<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.listSponsors, {}, { show_id }, params);
    }

    /** Create a manual sponsor or send a self-service invitation. */
    public static createSponsor<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.createSponsor, data, { show_id }, params);
    }

    /** Retrieve one organizer-authorized festival sponsor. */
    public static getSponsor<T>(show_id: string, sponsor_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.getSponsor, {}, { show_id, sponsor_id }, params);
    }

    /** Update sponsor workflow, creative metadata, schedule, or billing terms. */
    public static updateSponsor<T>(show_id: string, sponsor_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.updateSponsor, data, { show_id, sponsor_id }, params);
    }

    /** Delete an unpaid sponsor and its placements. */
    public static deleteSponsor<T>(show_id: string, sponsor_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.deleteSponsor, {}, { show_id, sponsor_id }, params);
    }

    /** Replace the private token and resend the sponsor invitation. */
    public static resendSponsorInvitation<T>(show_id: string, sponsor_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.resendSponsorInvitation, {}, { show_id, sponsor_id }, params);
    }

    /** Add another festival, game, session, or event placement. */
    public static createSponsorPlacement<T>(show_id: string, sponsor_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.createSponsorPlacement, data, { show_id, sponsor_id }, params);
    }

    /** Partially update an existing sponsor placement. */
    public static updateSponsorPlacement<T>(show_id: string, sponsor_id: string, placement_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.updateSponsorPlacement, data, { show_id, sponsor_id, placement_id }, params);
    }

    /** Delete one placement without deleting the sponsor creative. */
    public static deleteSponsorPlacement<T>(show_id: string, sponsor_id: string, placement_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.deleteSponsorPlacement, {}, { show_id, sponsor_id, placement_id }, params);
    }

    /** List privacy-limited, publicly eligible creatives and placements. */
    public static listPublicSponsors<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.listPublicSponsors, {}, { show_id }, params);
    }

    /** Open a token-protected sponsor portal without a user session. */
    public static sponsorInvitation<T>(token: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.sponsorInvitation, {}, { token }, params);
    }

    /** Upload sponsor image/video through the shared Media pipeline. */
    public static uploadSponsorInvitationMedia<T>(token: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        // Sponsor uploads use the `media` multipart field documented by API.
        const url = GameShowsRoute.routes.sponsorInvitationUpload.url.replace('{token}', token);
        return Requests.uploadFile(url, 'media', file, data, params);
    }

    /** Submit sponsor identity, destination, and accessibility metadata. */
    public static submitSponsorInvitation<T>(token: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.sponsorInvitationSubmit, data, { token }, params);
    }

    /** Create/confirm a destination PaymentIntent from a PaymentMethod ID. */
    public static paySponsorInvitation<T>(token: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.sponsorInvitationPayment, data, { token }, params);
    }

    /** Synchronize the same intent after Stripe.js completes required 3DS. */
    public static confirmSponsorInvitationPayment<T>(token: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GameShowsRoute.routes.sponsorInvitationConfirmPayment, {}, { token }, params);
    }

}

export default GameShows;
