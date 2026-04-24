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
     * Gets the campaigns the users has been invited too.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showMe
     *
     * @param user_id The id of the user to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static getCampaignInvites<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static getPayouts<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static syncInfluencer<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static generateInfluencerProfile<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
     * Clear Docusign authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/clearDocusignAuth
     *
     * @returns promise
     */
    static clearDocusignAuth<T>(): AxiosPromise<Response<T>>;
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
    /**
     * Add a genre to a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param data The genre information to be passed to update the genre information.
     *
     * @returns Promise
     */
    static addGenre<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove a genre from a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param genre_id The id of the genre to remove.
     *
     * @returns Promise
     */
    static removeGenre<T>(genre_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a type to a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param data The genre information to be passed to update the type information.
     *
     * @returns Promise
     */
    static addType<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove a genre from a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param genre_id The id of the genre to remove.
     *
     * @returns Promise
     */
    static removeType<T>(type_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Verify a user's account to complete their sign-up process.
    *
    * @see https://api.glitch.fun/api/documentation#/Users%20Route/verifyAccount
    *
    * @param data The genre information to be passed to update the type information.
    *
    * @returns Promise
    */
    static verifyAccount<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Gets the instagram accounts associated with the user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getInstagramAccounts
     *
     * @returns promise
     */
    static getInstagramAccounts<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
   * Gets the Facebook Pages associated with the user.
   *
   * @see https://api.glitch.fun/api/documentation#/Users%20Route/getFacebookPages
   *
   * @returns Promise resolving to the list of Facebook Pages
   */
    static getFacebookPages<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Gets the subreddits the user is subscribed to.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getSubreddits
     *
     * @returns Promise resolving to the list of subreddits
     */
    static getSubreddits<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Gets the flairs for a specific subreddit.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getSubredditFlairs
     *
     * @param subreddit The name of the subreddit to get flairs for.
     * @returns Promise resolving to the list of flairs
     */
    static getSubredditFlairs<T>(subreddit: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Search all the users with advanced meilisearch options
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userSearch
     *
     * @returns promise
     */
    static search<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Resends the verification email to the authenticated user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/resendVerificationEmail
     *
     * @returns Promise
     */
    static resendVerificationEmail<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear Instagram authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/clearInstagramAuth
     *
     * @returns promise
     */
    static clearInstagramAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Gets the rules for a specific subreddit.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getSubredditRules
     *
     * @param subreddit The name of the subreddit to get rules for.
     * @returns Promise resolving to the list of rules
     */
    static getSubredditRules<T>(subreddit: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a list of games the current user has played.
     * Includes playtime and last played timestamps.
     */
    static playedGames<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all stats for a user, optionally filtered by title_id.
     */
    static getProgressionStats<T>(user_id: string, params?: {
        title_id?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Get all achievements for a user.
     */
    static getProgressionAchievements<T>(user_id: string, params?: {
        title_id?: string;
        status?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Get the raw gameplay history (Run Records) for a user.
     */
    static getProgressionHistory<T>(user_id: string, params?: {
        title_id?: string;
        page?: number;
    }): AxiosPromise<Response<T>>;
    /**
    * List the authenticated user's media library (clips, screenshots, AI generated).
    *
    * @param params Optional filters: { type: 'clip'|'screenshot'|'ai_generated', title_id: string }
    */
    static listMedia<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a Media record to the user's personal library.
     *
     * @param data { media_id: string, type: string, title_id?: string, label?: string, studio_metadata?: object }
     */
    static storeMedia<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Retrieve details for a specific library item.
     */
    static viewMedia<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Update a library item's label or metadata.
     */
    static updateMedia<T>(id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Remove an item from the user's library (Soft Delete).
     */
    static deleteMedia<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Apply AI transformations (Style Transfer/Upscale) to a library item.
     *
     * @param id The UUID of the UserMedia record.
     * @param data { prompt: string, tool: 'style_transfer'|'upscale' }
     */
    static modifyMedia<T>(id: string, data: {
        prompt: string;
        tool: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Get AI-generated suggestions for the best 15-second window to trim a video.
     */
    static suggestSmartTrim<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Share a library item to social media as User Generated Content (UGC).
     *
     * @param id The UUID of the UserMedia record.
     * @param data { platform: string, title?: string, content: string }
     */
    static shareMedia<T>(id: string, data: {
        platform: string;
        title?: string;
        content: string;
    }): AxiosPromise<Response<T>>;
}
export default Users;
