import FeedbackRoute from "../routes/FeedbackRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Feedback {

    /**
     * List all the feedback that been left by users.
     * 
     * @see https://api.glitch.fun/api/documentation#/Feedback/listFeedback
     * 
     * @returns promise
     */
    public static listFeedback<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(FeedbackRoute.routes.listFeedback, undefined, undefined, params);
    }

    /**
     * View a particular item of feedback.
     * 
     * @see https://api.glitch.fun/api/documentation#/Feedback/getFeedbackById
     * 
     * @returns promise
     */
    public static viewFeedback<T>(feedback_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(FeedbackRoute.routes.viewFeedback, undefined, { feedback_id: feedback_id }, params);
    }

    /**
     * Submit feedback.
     * 
     * @see https://api.glitch.fun/api/documentation#/Feedback/a64fe3d6f90ed1af5bbd5311a795c134
     * 
     * @returns A promise
     */
    public static sendFeedback<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(FeedbackRoute.routes.sendFeedback, data, {}, params);
    }



    /**
    * Submit feedback with the log file as a file.
    * 
    * @see https://api.glitch.fun/api/documentation#/Feedback/a64fe3d6f90ed1af5bbd5311a795c134
    * 
    * @param file The file object to upload.
    * @param data Any additional data to pass along to the upload.
    * 
    * @returns promise
    */
    public static sendFeedbackWithFile<T>(file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = FeedbackRoute.routes.sendFeedback.url;

        return Requests.uploadFile(url, 'image', file, data);
    }

    /**
     * Submit feedback with the log file as a blob.
     * 
     * @see hhttps://api.glitch.fun/api/documentation#/Feedback/a64fe3d6f90ed1af5bbd5311a795c134
     * 
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     * 
     * @returns promise
     */
    public static sendFeedbackWithBlob<T>(blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = FeedbackRoute.routes.sendFeedback.url;

        return Requests.uploadBlob(url, 'image', blob, data);
    }


}

export default Feedback;