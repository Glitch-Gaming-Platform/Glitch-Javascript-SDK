import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Users {
    /**
     * List all the users.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userList
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates a users information. Requires the users JSON Web Token (JWT) for them to update their profile.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param data The date to be passed when creating a competiton.
     *
     * @returns Promise
     */
    static update<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Gets the current users information based on the current Json Web Token (JWT).
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showMe
     *
     * @param user_id The id of the user to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static me<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Will follow and unfollow a user. If the user is not being following, it will follow the user. If they are following, it will unfollow the user. The current JWT is used for the follower.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userToggleFollow
     *
     * @param user_id The id fo the user to retrieve.
     *
     * @returns promise
     */
    static followToggle<T>(user_id: string): AxiosPromise<Response<T>>;
    /**
     * Show a users profile.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showUser
     *
     * @param user_id The id of the user to delete.
     * @returns promise
     */
    static profile<T>(user_id: string): AxiosPromise<Response<T>>;
    /**
     * Retrieves a user's one time login token based on a users JWT.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userOneTimeLoginToken
     *
     *
     * @returns promise
     */
    static oneTimeLoginToken<T>(): AxiosPromise<Response<T>>;
    /**
     * Updates the avatar image for the user using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userUploadAvatarImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadAvatarImageFile<T>(file: File, data?: object): AxiosPromise<Response<T>>;
    /**
     * Updates the avatar image for the user using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userUploadAvatarImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadAvatarImageBlob<T>(blob: Blob, data?: object): AxiosPromise<Response<T>>;
    /**
     * Upload a banner image for the user, as a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userUploadBannerImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadBannerImageFile<T>(file: File, data?: object): AxiosPromise<Response<T>>;
    /**
     * Upload a banner image for the user, as a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userUploadBannerImage
     *
     * @param file The blob to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadBannerImageBlob<T>(blob: Blob, data?: object): AxiosPromise<Response<T>>;
    /**
     * Creates a donation page for that user by syncing their information with various
     * payment service.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static createDonationPage<T>(): AxiosPromise<Response<T>>;
    /**
    * Clear Twitches authentication information from the current user.
    *
    * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
    *
    * @returns promise
    */
    static clearTwitchAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear Facebook authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearFacebookAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear Google authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearGoogleAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear Stripe authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearStripeAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear TikTok authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearTikTokAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear YouTube authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearYoutubeAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear Reddit authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearRedditAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear Twitter authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearTwitterAuth<T>(): AxiosPromise<Response<T>>;
    /**
    * Clear StreamElements authentication information from the current user.
    *
    * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
    *
    * @returns promise
    */
    static clearStreamElementsAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Returns a list of tips received by the authenticated user for a given month and year
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static getTipsReceivedForMonth<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Returns a list of tips given by the authenticated user for a given month and year.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static getTipsGivenForMonth<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Returns the aggregated monthly tips received by the authenticated user over a certain number of months. Defaults to 12 months if not provided.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static aggregateMonthlyReceivedTips<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Returns the aggregated monthly tips given by the authenticated user over a certain number of months. Defaults to 12 months if not provided.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static aggregateMonthlyGivenTips<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Returns the user associated Youtube a channels a user has.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static getFacebookGroups<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Users;
