import EventsRoutes from "../routes/EventsRoute";
import RecordingsRoute from "../routes/RecordingRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Events {

    /**
     * List all the events
     * 
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/resourceEventList
     * 
     * @returns promise
     */
    public static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(EventsRoutes.routes.list, undefined, undefined, params);
    }

    /**
     * Create a new event.
     * 
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/newEventResourceStorage
     * 
     * @param data The data to be passed when creating an event.
     * 
     * @returns Promise
     */
    public static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.create, data, undefined, params);
    }

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
    public static update<T>(event_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.update, data, { event_id: event_id }, params);
    }

    /**
     * Retrieve the information for a single event.
     * 
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/showEventStorage
     * 
     * @param event_id The id fo the event to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(event_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.view, {}, { event_id: event_id }, params);
    }

    /**
     * Deletes a event.
     * 
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/destoryEventStorage
     * 
     * @param event_id The id of the event to delete.
     * @returns promise
     */
    public static delete<T>(event_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.delete, {}, { event_id: event_id }, params);
    }

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
    public static updateInvirtuEvent<T>(event_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.updateInvirtu, data, { event_id: event_id }, params);
    }

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
    public static addRTMPSource<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.addRTMPSource, data, { event_id: event_id }, params);
    }

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
    public static updateRTMPSource<T>(event_id: string, stream_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.updateRTMPSource, data, { event_id: event_id, subid: stream_id }, params);
    }

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
    public static removeRTMPSource<T>(event_id: string, stream_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.removeRTMPSource, data, { event_id: event_id, subid: stream_id }, params);
    }

    /**
     * A function that should be run on an interval to set the event as live when the live stream is active.
     * 
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/syncLive
     * 
     * @param event_id The id of the event.
     *  
     * @returns promise
     */
    public static syncAsLive<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.syncAsLive, data, { event_id: event_id }, params);
    }

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
    public static uploadMainImageFile<T>(event_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = EventsRoutes.routes.uploadMainImage.url.replace('{event_id}', event_id);

        return Requests.uploadFile(url, 'image', file, data);
    }

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
    public static uploadMainImageBlob<T>(event_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = EventsRoutes.routes.uploadMainImage.url.replace('{event_id}', event_id);

        return Requests.uploadBlob(url, 'image', blob, data);
    }

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
    public static uploadBannerImageFile<T>(event_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = EventsRoutes.routes.uploadBannerImage.url.replace('{event_id}', event_id);

        return Requests.uploadFile(url, 'image', file, data);
    }

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
    public static uploadBannerImageBlob<T>(event_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = EventsRoutes.routes.uploadBannerImage.url.replace('{event_id}', event_id);

        return Requests.uploadBlob(url, 'image', blob, data);
    }

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
    public static enableBroadcastMode<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.enableBroadcastMode, data, { event_id: event_id }, params);
    }

    /**
     * Enable livestream mode, in which the stream will be delivered to the invirtu RTMP endpoint for
     * streaming.
     * 
     * @param event_id The id of the event.
     *  
     * @returns promise
     */
    public static enableLivestreamMode<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.enableLivestreamMode, data, { event_id: event_id }, params);
    }

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
    public static sendOnScreenContent<T>(event_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.enableLivestreamMode, data, { event_id: event_id }, params);
    }

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
    public static addOverlayAsFile<T>(event_id: string, file: File, data?: object): AxiosPromise<Response<T>> {

        let url = EventsRoutes.routes.addOverlay.url.replace('{event_id}', event_id);

        return Requests.uploadFile(url, 'image', file, data);
    }

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
    public static addOverlayAsBlob<T>(event_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = EventsRoutes.routes.addOverlay.url.replace('{event_id}', event_id);

        return Requests.uploadBlob(url, 'image', blob, data);
    }

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
    public static removeOverlay<T>(event_id: string, overlay_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.removeOverlay, {}, { event_id: event_id, subid: overlay_id }, params);
    }

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
    public static enableOverlay<T>(event_id: string, overlay_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.enableOverlay, data, { event_id: event_id, subid: overlay_id }, params);
    }

    /**
     * Disables the overlay so it no longer appears on-screen.
     * 
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     * 
     * @param event_id The id of the event.
     * 
     * @returns promise
     */
    public static disableOverlay<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.disableOverlay, data, { event_id: event_id }, params);
    }

    /**
     * Enable the donations to appear on-screen
     * 
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/enableDonations
     * 
     * @param event_id The id of the event.
     * 
     * @returns promise
     */
    public static enableDonations<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.enableDonations, data, { event_id: event_id }, params);
    }

    /**
     * Disable the donations and remove from the screen.
     * 
     * @param event_id 
     * @returns
     */
    public static disableDonations<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.disableDonations, data, { event_id: event_id }, params);
    }

    public static sendInvite<T>(event_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.sendInvite, data, { event_id: event_id }, params);
    }

    public static acceptInvite<T>(event_id: string, token: string , params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.acceptInvite, { token: token }, { event_id: event_id }, params);
    }

    /**
     * Update a recording related to an event.
     * 
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventRecording
     * 
     * @param event_id The id of the event to update.
     * @param recording_id The id of the recording to update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static updateRecording<T>(event_id: string, recording_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(RecordingsRoute.routes.update, data, { event_id: event_id, recording_id : recording_id }, params);
    }


}

export default Events;