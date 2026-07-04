import Response from "../util/Response";
import { AxiosPromise, AxiosProgressEvent } from "axios";
declare class PlayTests {
    /**
     * Get a list of play tests associated with a title.
     *
     * @param title_id The ID of the title.
     * @param params Optional query parameters.
     * @returns Promise
     */
    static list<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * User requests to test a title.
     *
     * @param title_id The ID of the title.
     * @param data Optional data for the request.
     * @returns Promise
     */
    static requestPlayTest<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Title administrator invites a user to test a title.
     *
     * @param title_id The ID of the title.
     * @param data The data containing user_id and other optional fields.
     * @returns Promise
     */
    static invitePlayTester<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * User submits or updates their answers for a play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @param data The answers data.
     * @returns Promise
     */
    static submitAnswers<T>(title_id: string, playtest_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Title admin updates test questions for a play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @param data The questions data.
     * @returns Promise
     */
    static updateQuestions<T>(title_id: string, playtest_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * User accepts an invite to a play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static acceptInvite<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * User rejects an invite to a play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static rejectInvite<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Title admin approves a user's play test request.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static approveRequest<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Title admin declines a user's play test request.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static declineRequest<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * User cancels their own play test request.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static cancelRequest<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static show<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all the play tests that are associated with the current user.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static mine<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get aggregated results for a play test (publisher view).
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static getResults<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Upload an audio/video answer file for a play test question. The file is
     * stored by the Glitch backend (authenticated with the session token) and a
     * media URL is returned that can then be passed to submitAnswers().
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @param file The recorded audio/video file or blob.
     * @param data Additional fields (question_id, media_type, title, description).
     * @param params Optional query parameters.
     * @param onUploadProgress Optional progress callback.
     * @returns Promise
     */
    static uploadAnswer<T>(title_id: string, playtest_id: string, file: File | Blob, data?: Record<string, any>, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
}
export default PlayTests;
