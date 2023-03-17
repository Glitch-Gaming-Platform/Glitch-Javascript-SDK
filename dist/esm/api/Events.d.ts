import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Events {
    /**
     * List all the events
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/resourceEventList
     *
     * @returns promise
     */
    static list<T>(): AxiosPromise<Response<T>>;
    /**
     * Create a new event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/newEventResourceStorage
     *
     * @param data The data to be passed when creating an event.
     *
     * @returns Promise
     */
    static create<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Update a event
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventStorage
     *
     * @param event_id The id of the event to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static update<T>(event_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/showEventStorage
     *
     * @param event_id The id fo the event to retrieve.
     *
     * @returns promise
     */
    static view<T>(event_id: string): AxiosPromise<Response<T>>;
    /**
     * Deletes a event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/destoryEventStorage
     *
     * @param event_id The id of the event to delete.
     * @returns promise
     */
    static delete<T>(event_id: string): AxiosPromise<Response<T>>;
    /**
     * The event is synced with Invirtu for the lie streams. This will allow you to update
     *
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventStorage
     *
     * @param event_id The id of the event to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static updateInvirtuEvent<T>(event_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Add an RTMP source to multicast a stream too.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/addRTMPSource
     *
     * @param event_id The id of the event.
     * @param data The data to be passed when adding an RTMP source.
     *
     * @returns promise
     */
    static addRTMPSource<T>(event_id: string, data?: object): AxiosPromise<Response<T>>;
    /**
     * Update an RTMP Source for multicasing.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/addRTMPSource
     *
     * @param event_id The id of the event.
     * @param data The data to be passed when adding an RTMP source.
     *
     * @returns promise
     */
    static updateRTMPSource<T>(event_id: string, stream_id: string, data?: object): AxiosPromise<Response<T>>;
    /**
     * Remove a RTMP source for multicasing.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/addRTMPSource
     *
     * @param event_id The id of the event.
     * @param data The data to be passed when adding an RTMP source.
     *
     * @returns promise
     */
    static removeRTMPSource<T>(event_id: string, stream_id: string): AxiosPromise<Response<T>>;
    /**
     * A function that should be run on an interval to set the event as live when the live stream is active.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/syncLive
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static syncAsLive<T>(event_id: string): AxiosPromise<Response<T>>;
    /**
         * Updates the main image for the event using a File object.
         *
         * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadMainEventImage
         *
         * @param file The file object to upload.
         * @param data Any additional data to pass along to the upload.
         *
         * @returns promise
         */
    static uploadMainImageFile<T>(event_id: string, file: File, data?: object): AxiosPromise<Response<T>>;
    /**
     * Updates the main image for the event using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadMainEventImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadMainImageBlob<T>(event_id: string, blob: Blob, data?: object): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the team using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadBannerEventImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadBannerImageFile<T>(event_id: string, file: File, data?: object): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the team using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadBannerEventImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadBannerImageBlob<T>(event_id: string, blob: Blob, data?: object): AxiosPromise<Response<T>>;
    /**
     * Enable Broadcast Mode. Broadcast mode is when the live stream is broadcasted from the game play through a protocol
     * such as screen sharing.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/enableBroadcastMode
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static enableBroadcastMode<T>(event_id: string): AxiosPromise<Response<T>>;
    /**
     * Enable livestream mode, in which the stream will be delivered to the invirtu RTMP endpoint for
     * streaming.
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static enableLivestreamMode<T>(event_id: string): AxiosPromise<Response<T>>;
    /**
     * Sends content that will appear on-screen to the user.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/sendOnScreenContent
     *
     * @param event_id The id of the event.
     * @param data The information to send on-screen.
     *
     * @returns promise
     */
    static sendOnScreenContent<T>(event_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Uploads an image that can be used and overlay later. A File object is used.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadOverlayImage
     *
     * @param event_id The id of the event.
     * @param file The image as a file.
     * @param data Any additional data to be sent in the request.
     *
     * @returns promise
     */
    static addOverlayAsFile<T>(event_id: string, file: File, data?: object): AxiosPromise<Response<T>>;
    /**
     * Uploads an image that can be used and overlay later. A blob is used.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadOverlayImage
     *
     * @param event_id The id of the event.
     * @param blob Image data as a blob
     * @param data Any additional data to be sent in the request.
     *
     * @returns promise
     */
    static addOverlayAsBlob<T>(event_id: string, blob: Blob, data?: object): AxiosPromise<Response<T>>;
    /**
     * Deletes an overlay image.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/destoryOverlayStorage
     *
     * @param event_id The id of the event.
     * @param overlay_id The id of the overlay.
     *
     * @returns promise
     */
    static removeOverlay<T>(event_id: string, overlay_id: string): AxiosPromise<Response<T>>;
    /**
     * Enables an overlay so that it will appear on screen.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/enableOverlayImage
     *
     * @param event_id The id of the event.
     * @param overlay_id The id of the overlay.
     *
     * @returns promise
     */
    static enableOverlay<T>(event_id: string, overlay_id: string): AxiosPromise<Response<T>>;
    /**
     * Disables the overlay so it no longer appears on-screen.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static disableOverlay<T>(event_id: string): AxiosPromise<Response<T>>;
    /**
     * Enable the donations to appear on-screen
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/enableDonations
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static enableDonations<T>(event_id: string): AxiosPromise<Response<T>>;
    /**
     * Disable the donations and remove from the screen.
     *
     * @param event_id
     * @returns
     */
    static disableDonations<T>(event_id: string): AxiosPromise<Response<T>>;
    static sendInvite<T>(event_id: string, data: object): AxiosPromise<Response<T>>;
    static acceptInvite<T>(event_id: string, token: string): AxiosPromise<Response<T>>;
}
export default Events;
