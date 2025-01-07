import { unescape } from "querystring";
import UserRoutes from "../routes/UserRoutes";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Users {

    /**
     * List all the users.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userList
     * 
     * @returns promise
     */
    public static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(UserRoutes.routes.list, undefined, undefined, params);
    }

    /**
     * Updates a users information. Requires the users JSON Web Token (JWT) for them to update their profile.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     * 
     * @param data The date to be passed when creating a competiton.
     * 
     * @returns Promise
     */
    public static update<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.update, data, undefined, params);
    }

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
    public static me<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.me, {}, undefined, params);
    }

    /**
     * Gets the campaigns the users has been invited too.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showMe
     * 
     * @param user_id The id of the user to update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static getCampaignInvites<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.getCampaignInvites, {}, undefined, params);
    }

    /**
     * Gets payouts from past campaings
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showMe
     * 
     * @param user_id The id of the user to update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static getPayouts<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.getPayouts, {}, undefined, params);
    }

    /**
     * Sync the current influencer's information.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showMe
     * 
     * @param user_id The id of the user to update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static syncInfluencer<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.syncInfluencer, {}, undefined, params);
    }

    /**
     * Create profile data for an influencer based on their synced information and social media posts.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/generateUserInfluencerProfile
     * 
     * @param user_id The id of the user to update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static generateInfluencerProfile<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.generateInfluencerProfile, {}, undefined, params);
    }


    /**
     * Will follow and unfollow a user. If the user is not being following, it will follow the user. If they are following, it will unfollow the user. The current JWT is used for the follower.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userToggleFollow
     * 
     * @param user_id The id fo the user to retrieve.
     * 
     * @returns promise
     */
    public static followToggle<T>(user_id: string): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.follow, {}, { user_id: user_id });
    }

    /**
     * Show a users profile.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showUser
     * 
     * @param user_id The id of the user to delete.
     * @returns promise
     */
    public static profile<T>(user_id: string): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.profile, {}, { user_id: user_id });
    }

    /**
     * Retrieves a user's one time login token based on a users JWT.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userOneTimeLoginToken
     * 
     * 
     * @returns promise
     */
    public static oneTimeLoginToken<T>(): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.oneTimeToken, {});
    }

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
    public static uploadAvatarImageFile<T>(file: File, data?: object): AxiosPromise<Response<T>> {

        return Requests.uploadFile(UserRoutes.routes.uploadAvatar.url, 'image', file, data);
    }

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
    public static uploadAvatarImageBlob<T>(blob: Blob, data?: object): AxiosPromise<Response<T>> {

        return Requests.uploadBlob(UserRoutes.routes.uploadAvatar.url, 'image', blob, data);
    }

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
    public static uploadBannerImageFile<T>(file: File, data?: object): AxiosPromise<Response<T>> {

        return Requests.uploadFile(UserRoutes.routes.uploadBanner.url, 'image', file, data);
    }

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
    public static uploadBannerImageBlob<T>(blob: Blob, data?: object): AxiosPromise<Response<T>> {

        return Requests.uploadBlob(UserRoutes.routes.uploadBanner.url, 'image', blob, data);
    }

    /**
     * Creates a donation page for that user by syncing their information with various
     * payment service.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     * 
     * @returns promise
     */
    public static createDonationPage<T>(): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.createDonationPage, {});
    }

    /**
    * Clear Twitches authentication information from the current user.
    * 
    * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
    * 
    * @returns promise
    */
    public static clearTwitchAuth<T>(): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.clearTwitchAuth, {});
    }

    /**
     * Clear Facebook authentication information from the current user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     * 
     * @returns promise
     */
    public static clearFacebookAuth<T>(): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.clearFacebookAuth, {});
    }

    /**
     * Clear Google authentication information from the current user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     * 
     * @returns promise
     */
    public static clearGoogleAuth<T>(): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.clearGoogleAuth, {});
    }

    /**
     * Clear Stripe authentication information from the current user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     * 
     * @returns promise
     */
    public static clearStripeAuth<T>(): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.clearStripeAuth, {});
    }

    /**
     * Clear TikTok authentication information from the current user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     * 
     * @returns promise
     */
    public static clearTikTokAuth<T>(): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.clearTikTokAuth, {});
    }

    /**
     * Clear YouTube authentication information from the current user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     * 
     * @returns promise
     */
    public static clearYoutubeAuth<T>(): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.clearYoutubeAuth, {});
    }

    /**
     * Clear Reddit authentication information from the current user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     * 
     * @returns promise
     */
    public static clearRedditAuth<T>(): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.clearRedditAuth, {});
    }

    /**
     * Clear Docusign authentication information from the current user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/clearDocusignAuth
     * 
     * @returns promise
     */
    public static clearDocusignAuth<T>(): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.clearDocusignAuth, {});
    }

    /**
     * Clear Twitter authentication information from the current user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     * 
     * @returns promise
     */
    public static clearTwitterAuth<T>(): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.clearTwitterAuth, {});
    }

    /**
    * Clear StreamElements authentication information from the current user.
    * 
    * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
    * 
    * @returns promise
    */
    public static clearStreamElementsAuth<T>(): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.clearStreamElementsAuth, {});
    }

    /**
     * Returns a list of tips received by the authenticated user for a given month and year
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     * 
     * @returns promise
     */
    public static getTipsReceivedForMonth<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.getTipsReceivedForMonth, undefined, undefined, params);
    }

    /**
     * Returns a list of tips given by the authenticated user for a given month and year.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     * 
     * @returns promise
     */
    public static getTipsGivenForMonth<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.getTipsGivenForMonth, undefined, undefined, params);
    }

    /**
     * Returns the aggregated monthly tips received by the authenticated user over a certain number of months. Defaults to 12 months if not provided.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     * 
     * @returns promise
     */
    public static aggregateMonthlyReceivedTips<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.aggregateMonthlyReceivedTips, undefined, undefined, params);
    }

    /**
     * Returns the aggregated monthly tips given by the authenticated user over a certain number of months. Defaults to 12 months if not provided.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     * 
     * @returns promise
     */
    public static aggregateMonthlyGivenTips<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.aggregateMonthlyGivenTips, undefined, undefined, params);
    }

    /**
     * Returns the user associated Youtube a channels a user has.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     * 
     * @returns promise
     */
    public static getFacebookGroups<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.getFacebookGroups, undefined, undefined, params);
    }

    /**
     * Add a genre to a user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     * 
     * @param data The genre information to be passed to update the genre information.
     * 
     * @returns Promise
     */
    public static addGenre<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.addGenre, data, undefined, params);
    }

    /**
     * Remove a genre from a user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     * 
     * @param genre_id The id of the genre to remove.
     * 
     * @returns Promise
     */
    public static removeGenre<T>(genre_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.removeGenre, undefined, { genre_id: genre_id }, params);
    }

    /**
     * Add a type to a user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     * 
     * @param data The genre information to be passed to update the type information.
     * 
     * @returns Promise
     */
    public static addType<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.addType, data, undefined, params);
    }

    /**
     * Remove a genre from a user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     * 
     * @param genre_id The id of the genre to remove.
     * 
     * @returns Promise
     */
    public static removeType<T>(type_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.removeType, undefined, { type_id: type_id }, params);
    }

    /**
    * Verify a user's account to complete their sign-up process.
    * 
    * @see https://api.glitch.fun/api/documentation#/Users%20Route/verifyAccount
    * 
    * @param data The genre information to be passed to update the type information.
    * 
    * @returns Promise
    */
    public static verifyAccount<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.verifyAccount, data, undefined, params);
    }

    /**
     * Gets the instagram accounts associated with the user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getInstagramAccounts
     * 
     * @returns promise
     */
    public static getInstagramAccounts<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.getInstagramAccounts, undefined, undefined, params);
    }

    /**
   * Gets the Facebook Pages associated with the user.
   *
   * @see https://api.glitch.fun/api/documentation#/Users%20Route/getFacebookPages
   *
   * @returns Promise resolving to the list of Facebook Pages
   */
    public static getFacebookPages<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(UserRoutes.routes.getFacebookPages, undefined, undefined, params);
    }

    /**
     * Gets the subreddits the user is subscribed to.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getSubreddits
     *
     * @returns Promise resolving to the list of subreddits
     */
    public static getSubreddits<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(UserRoutes.routes.getSubreddits, undefined, undefined, params);
    }

    /**
     * Gets the flairs for a specific subreddit.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getSubredditFlairs
     *
     * @param subreddit The name of the subreddit to get flairs for.
     * @returns Promise resolving to the list of flairs
     */
    public static getSubredditFlairs<T>(subreddit: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(UserRoutes.routes.getSubredditFlairs, undefined, { subreddit: subreddit }, params);
    }


    /**
     * Search all the users with advanced meilisearch options
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userSearch
     * 
     * @returns promise
     */
    public static search<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(UserRoutes.routes.search, undefined, undefined, params);
    }





}

export default Users;