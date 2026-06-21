import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Feedback {
    /**
     * List all the feedback that been left by users.
     *
     * @see https://api.glitch.fun/api/documentation#/Feedback/listFeedback
     *
     * @returns promise
     */
    static listFeedback<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * View a particular item of feedback.
     *
     * @see https://api.glitch.fun/api/documentation#/Feedback/getFeedbackById
     *
     * @returns promise
     */
    static viewFeedback<T>(feedback_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List support tickets owned by the logged-in user.
     */
    static listSupportTickets<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a support ticket for the logged-in user.
     */
    static createSupportTicket<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * View a support ticket owned by the logged-in user.
     */
    static viewSupportTicket<T>(feedback_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Reply to a support ticket owned by the logged-in user.
     */
    static replySupportTicket<T>(feedback_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Admin support inbox covering support tickets and feedback.
     */
    static adminListFeedback<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static adminViewFeedback<T>(feedback_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static adminUpdateFeedback<T>(feedback_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static adminReplyFeedback<T>(feedback_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static adminRewardFeedback<T>(feedback_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Submit feedback.
     *
     * @see https://api.glitch.fun/api/documentation#/Feedback/a64fe3d6f90ed1af5bbd5311a795c134
     *
     * @returns A promise
     */
    static sendFeedback<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static sendFeedbackWithFile<T>(file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static sendFeedbackWithBlob<T>(blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Feedback;
