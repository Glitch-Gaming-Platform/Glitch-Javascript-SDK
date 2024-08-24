import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Communities {
    /**
     * List all the communities.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/resourceCommunityList
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/newCommunityResourceStorage
     *
     * @param data The data to be passed when creating a community.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/updateCommunityStorage
     *
     * @param community_id The id of the community to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static update<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/showCommunityStorage
     *
     * @param community_id The id fo the community to retrieve.
     *
     * @returns promise
     */
    static view<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes a community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/destoryCommunityStorage
     *
     * @param community_id The id of the community to delete.
     * @returns promise
     */
    static delete<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the main image for the community using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadLogoCommunityImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadLogoFile<T>(community_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the main image for the community using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadLogoCommunityImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadLogoBlob<T>(community_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the community using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadBannerCommunityImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadBannerImageFile<T>(community_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the community using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadBannerCommunityImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadBannerImageBlob<T>(community_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Updates the banner image for the community using a File object.
    *
    * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadBannerCommunityImage
    *
    * @param file The file object to upload.
    * @param data Any additional data to pass along to the upload.
    *
    * @returns promise
    */
    static uploadVideoLogoFile<T>(community_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the community using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadBannerCommunityImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadVideoLogoBlob<T>(community_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List the invites that have been sent for the community to users.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitysUserInviteList
     *
     * @param community_id The id of the community
     *
     * @returns promise
     */
    static listInvites<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send an invitation to a user to join the community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitySendInvite
     *
     * @param community_id The id of the community.
     * @param data The data that will be passed into sending an invite.
     *
     * @returns promise
     */
    static sendInvite<T>(community_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Accept an invite to a community. The JSON Web Token (JWT) must be related to the token.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communityAcceptInvite
     *
     * @param community_id The id of the community
     * @param token The token required to accept the user.
     *
     * @returns promise
     */
    static acceptInvite<T>(community_id: string, token: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieves a user's invite that have been sent.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communityAcceptInvite
     *
     * @param community_id The id of the community
     * @param token The token required to get the invite.
     *
     * @returns promise
     */
    static retrieveInvite<T>(community_id: string, token: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List the users who are currently associated with the community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communityUserList
     *
     * @param community_id The id of the community.
     *
     * @returns promise
     */
    static listUsers<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a user to a community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/createcommunityUser
     *
     * @param community_id The id of the community.
     * @param data The data to be passed when adding a user.
     *
     * @returns promise
     */
    static addUser<T>(community_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieves a single user and their information that is associated with a community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/showcommunityUser
     *
     * @param community_id The id of the community.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    static getUser<T>(community_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the users information associated with the community.
     *
     * @param community_id The id of the community.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    static updatetUser<T>(community_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Removes a user from a community.
     *
     * @param community_id The id of community.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    static removetUser<T>(community_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Finds a community either by its subdomain or cname. The cname must be active.
     *
     * @param domain The subcname of the community.
     *
     * @returns promise
     */
    static findByDomain<T>(domain: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Has a user join a community. The join is executed using the current user's authentication token.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/updateCommunityStorage
     *
     * @param community_id The id of the community to update.
     *
     * @returns promise
     */
    static join<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a payment method to the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/51802cc0cb758850807345918130cf3e
     *
     * @param community_id The id of the community to update.
     *
     * @returns promise
     */
    static addPaymentMethod<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sets the default payment method for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/dd743e8a7da3b2bebe557cbc6675380d
     *
     * @param community_id The id of the community to update.
     *
     * @returns promise
     */
    static setDefaultPaymentMethod<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the available payment methods.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitysUserInviteList
     *
     * @param community_id The id of the community
     *
     * @returns promise
     */
    static getPaymentMethods<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the ledger for all transactions from the community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitysUserInviteList
     *
     * @param community_id The id of the community
     *
     * @returns promise
     */
    static getLedger<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Docusign authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearDocusignAuth<T>(community_id: string): AxiosPromise<Response<T>>;
    /**
     * Clear SimpleSin authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearSimplesignAuth<T>(community_id: string): AxiosPromise<Response<T>>;
    /**
     * Clear SimpleSin authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearHellosignAuth<T>(community_id: string): AxiosPromise<Response<T>>;
    /**
     * List all the saved email templates for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/resourceCommunityList
     *
     * @returns promise
     */
    static listEmailTemplates<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new email template for the community
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/newCommunityResourceStorage
     *
     * @param data The data to be passed when creating a community.
     *
     * @returns Promise
     */
    static createEmailTemplate<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an email template for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/updateCommunityStorage
     *
     * @param community_id The id of the community to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static updateEmailTemplate<T>(community_id: string, template_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single email template for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/showCommunityStorage
     *
     * @param community_id The id fo the community to retrieve.
     *
     * @returns promise
     */
    static viewEmailTemplate<T>(community_id: string, template_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes an email template for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/destoryCommunityStorage
     *
     * @param community_id The id of the community to delete.
     * @returns promise
     */
    static deleteEmailTemplate<T>(community_id: string, template_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Communities;
