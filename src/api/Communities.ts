import CommunitiesRoute from "../routes/CommunitiesRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Communities {

    /**
     * List all the communities.
     * 
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/resourceCommunityList
     * 
     * @returns promise
     */
    public static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.list, undefined, undefined, params);
    }

    /**
     * Create a new community.
     * 
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/newCommunityResourceStorage
     * 
     * @param data The data to be passed when creating a community.
     * 
     * @returns Promise
     */
    public static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.create, data, undefined, params);
    }

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
    public static update<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.update, data, { community_id: community_id }, params);
    }

    /**
     * Retrieve the information for a single community.
     * 
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/showCommunityStorage
     * 
     * @param community_id The id fo the community to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.view, {}, { community_id: community_id }, params);
    }

    /**
     * Deletes a community.
     * 
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/destoryCommunityStorage
     * 
     * @param community_id The id of the community to delete.
     * @returns promise
     */
    public static delete<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.delete, {}, { community_id: community_id });
    }

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
    public static uploadLogoFile<T>(community_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = CommunitiesRoute.routes.uploadLogo.url.replace('{community_id}', community_id);

        return Requests.uploadFile(url, 'image', file, data, params);
    }

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
    public static uploadLogoBlob<T>(community_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = CommunitiesRoute.routes.uploadLogo.url.replace('{community_id}', community_id);

        return Requests.uploadBlob(url, 'image', blob, data, params);
    }

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
    public static uploadBannerImageFile<T>(community_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = CommunitiesRoute.routes.uploadBannerImage.url.replace('{community_id}', community_id);

        return Requests.uploadFile(url, 'image', file, data, params);
    }

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
    public static uploadBannerImageBlob<T>(community_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = CommunitiesRoute.routes.uploadBannerImage.url.replace('{community_id}', community_id);

        return Requests.uploadBlob(url, 'image', blob, data, params);
    }

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
    public static uploadVideoLogoFile<T>(community_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = CommunitiesRoute.routes.uploadVideoLogo.url.replace('{community_id}', community_id);

        return Requests.uploadFile(url, 'image', file, data, params);
    }

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
    public static uploadVideoLogoBlob<T>(community_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        let url = CommunitiesRoute.routes.uploadVideoLogo.url.replace('{community_id}', community_id);

        return Requests.uploadBlob(url, 'image', blob, data, params);
    }

    /**
     * List the invites that have been sent for the community to users.
     * 
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitysUserInviteList
     * 
     * @param community_id The id of the community
     * 
     * @returns promise
     */
    public static listInvites<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.listInvites, {}, { community_id: community_id }, params);
    }

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
    public static sendInvite<T>(community_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.sendInvite, data, { community_id: community_id }, params);
    }

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
    public static acceptInvite<T>(community_id: string, token: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.acceptInvite, { token: token }, { community_id: community_id }, params);
    }

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
    public static retrieveInvite<T>(community_id: string, token: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.retrieveInvite, {}, { community_id: community_id, token: token }, params);
    }

    /**
     * List the users who are currently associated with the community.
     * 
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communityUserList
     * 
     * @param community_id The id of the community.
     * 
     * @returns promise
     */
    public static listUsers<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.listUsers, {}, { community_id: community_id }, params);
    }

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
    public static addUser<T>(community_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.addUser, data, { community_id: community_id }, params);
    }

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
    public static getUser<T>(community_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.showUser, {}, { community_id: community_id, user_id: user_id }, params);
    }

    /**
     * Updates the users information associated with the community.
     * 
     * @param community_id The id of the community.
     * @param user_id The id of the user.
     * 
     * @returns promise
     */
    public static updatetUser<T>(community_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.updateUser, data, { community_id: community_id, user_id: user_id }, params);
    }

    /**
     * Removes a user from a community.
     * 
     * @param community_id The id of community. 
     * @param user_id The id of the user.
     * 
     * @returns promise
     */
    public static removetUser<T>(community_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.removeUser, {}, { community_id: community_id, user_id: user_id }, params);
    }

    /**
     * Finds a community either by its subdomain or cname. The cname must be active.
     * 
     * @param domain The subcname of the community.
     * 
     * @returns promise
     */
    public static findByDomain<T>(domain: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.findByDomain, {}, { domain: domain }, params);
    }

    /**
     * Has a user join a community. The join is executed using the current user's authentication token.
     * 
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/updateCommunityStorage
     * 
     * @param community_id The id of the community to update.
     * 
     * @returns promise
     */
    public static join<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.join, data, { community_id: community_id }, params);
    }

    /**
     * Add a payment method to the community.
     * 
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/51802cc0cb758850807345918130cf3e
     * 
     * @param community_id The id of the community to update.
     * 
     * @returns promise
     */
    public static addPaymentMethod<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.addPaymentMethod, data, { community_id: community_id }, params);
    }

    /**
     * Sets the default payment method for the community.
     * 
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/dd743e8a7da3b2bebe557cbc6675380d
     * 
     * @param community_id The id of the community to update.
     * 
     * @returns promise
     */
    public static setDefaultPaymentMethod<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.setDefaultPaymentMethod, data, { community_id: community_id }, params);
    }

    /**
     * Get the available payment methods.
     * 
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitysUserInviteList
     * 
     * @param community_id The id of the community
     * 
     * @returns promise
     */
    public static getPaymentMethods<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.getPaymentMethods, {}, { community_id: community_id }, params);
    }

    /**
     * Get the ledger for all transactions from the community.
     * 
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitysUserInviteList
     * 
     * @param community_id The id of the community
     * 
     * @returns promise
     */
    public static getLedger<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.getLedger, {}, { community_id: community_id }, params);
    }

    /**
     * Clear Docusign authentication information from the current user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     * 
     * @returns promise
     */
    public static clearDocusignAuth<T>(community_id: string): AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.clearDocusignAuth, {}, { community_id: community_id });
    }

    /**
     * Clear SimpleSin authentication information from the current user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     * 
     * @returns promise
     */
    public static clearSimplesignAuth<T>(community_id: string): AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.clearSimplesignAuth, {}, { community_id: community_id });
    }

    /**
     * Clear SimpleSin authentication information from the current user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     * 
     * @returns promise
     */
    public static clearHellosignAuth<T>(community_id: string): AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.clearHellosignAuth, {}, { community_id: community_id });
    }

    /**
     * List all the saved email templates for the community.
     * 
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/resourceCommunityList
     * 
     * @returns promise
     */
    public static listEmailTemplates<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.listEmailTemplates, undefined, { community_id: community_id }, params);
    }

    /**
     * Create a new email template for the community
     * 
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/newCommunityResourceStorage
     * 
     * @param data The data to be passed when creating a community.
     * 
     * @returns Promise
     */
    public static createEmailTemplate<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.createEmailTemplate, data, { community_id: community_id }, params);
    }

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
    public static updateEmailTemplate<T>(community_id: string, template_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.updateEmailTemplate, data, { community_id: community_id, template_id: template_id }, params);
    }

    /**
     * Retrieve a single email template for the community.
     * 
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/showCommunityStorage
     * 
     * @param community_id The id fo the community to retrieve.
     * 
     * @returns promise
     */
    public static viewEmailTemplate<T>(community_id: string, template_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.viewEmailTemplate, {}, { community_id: community_id, template_id: template_id }, params);
    }

    /**
     * Deletes an email template for the community.
     * 
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/destoryCommunityStorage
     * 
     * @param community_id The id of the community to delete.
     * @returns promise
     */
    public static deleteEmailTemplate<T>(community_id: string, template_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.deleteEmailTemplate, {}, { community_id: community_id, template_id: template_id });
    }

    /**
     * Populates an email template for the community that will replace the platholders with the data provided.
     * 
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/newCommunityResourceStorage
     * 
     * @param data The data to be passed when creating a community.
     * 
     * @returns Promise
     */
    public static populateEmailTemplate<T>(community_id: string, template_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.populateEmailTemplate, data, { community_id: community_id, template_id: template_id }, params);
    }

    /**
   * List all newsletters for a community.
   *
   * @param community_id The ID of the community.
   * @param params Query parameters.
   * @returns Promise
   */
    public static listNewsletters<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.listNewsletters, undefined, undefined, params);
    }

    /**
     * Create a new newsletter for a community.
     *
     * @param community_id The ID of the community.
     * @param data The data for the new newsletter.
     * @returns Promise
     */
    public static createNewsletter<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.createNewsletter, data, { community_id }, params);
    }

    /**
     * Get a specific newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Query parameters.
     * @returns Promise
     */
    public static viewNewsletter<T>(community_id: string, newsletter_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.viewNewsletter, undefined, { community_id, newsletter_id }, params);
    }

    /**
     * Update a specific newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data The data to update.
     * @returns Promise
     */
    public static updateNewsletter<T>(community_id: string, newsletter_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.updateNewsletter, data, { community_id, newsletter_id }, params);
    }

    /**
     * Delete a specific newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @returns Promise
     */
    public static deleteNewsletter<T>(community_id: string, newsletter_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.deleteNewsletter, undefined, { community_id, newsletter_id }, params);
    }

    /**
     * Import subscribers from a CSV or XLS file into a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param file The CSV or XLS file.
     * @param params Additional parameters.
     * @returns Promise
     */
    public static importNewsletterSubscribers<T>(community_id: string, newsletter_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        const url = CommunitiesRoute.routes.importNewsletterSubscribers.url
            .replace('{community_id}', community_id)
            .replace('{newsletter_id}', newsletter_id);

        return Requests.uploadFile(url, 'file', file, data, params);
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
    public static uploadNewsletterBannerImageFile<T>(community_id: string, newsletter_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        const url = CommunitiesRoute.routes.uploadNewsletterBannerImage.url
            .replace('{community_id}', community_id)
            .replace('{newsletter_id}', newsletter_id);


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
    public static uploadNewsletterBannerImageBlob<T>(community_id: string, newsletter_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        const url = CommunitiesRoute.routes.uploadNewsletterBannerImage.url
            .replace('{community_id}', community_id)
            .replace('{newsletter_id}', newsletter_id);


        return Requests.uploadBlob(url, 'image', blob, data);
    }

    // Campaigns

    /**
     * List all campaigns for a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Query parameters.
     * @returns Promise
     */
    public static listCampaigns<T>(community_id: string, newsletter_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.listCampaigns, undefined, { community_id, newsletter_id }, params);
    }

    /**
     * Create a new campaign for a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data The data for the new campaign.
     * @returns Promise
     */
    public static createCampaign<T>(community_id: string, newsletter_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.createCampaign, data, { community_id, newsletter_id }, params);
    }

    /**
     * Get a specific campaign.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param params Query parameters.
     * @returns Promise
     */
    public static viewCampaign<T>(community_id: string, newsletter_id: string, campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.viewCampaign, undefined, { community_id, newsletter_id, campaign_id }, params);
    }

    /**
     * Update a specific campaign.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param data The data to update.
     * @returns Promise
     */
    public static updateCampaign<T>(community_id: string, newsletter_id: string, campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.updateCampaign, data, { community_id, newsletter_id, campaign_id }, params);
    }

    /**
     * Delete a specific campaign.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @returns Promise
     */
    public static deleteCampaign<T>(community_id: string, newsletter_id: string, campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.deleteCampaign, undefined, { community_id, newsletter_id, campaign_id }, params);
    }

    /**
     * Send a campaign immediately.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @returns Promise
     */
    public static sendCampaign<T>(community_id: string, newsletter_id: string, campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.sendCampaign, undefined, { community_id, newsletter_id, campaign_id }, params);
    }

    /**
     * Schedule a campaign to be sent later.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param data The scheduling data (e.g., scheduled_at).
     * @returns Promise
     */
    public static scheduleCampaign<T>(community_id: string, newsletter_id: string, campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.scheduleCampaign, data, { community_id, newsletter_id, campaign_id }, params);
    }

    /**
     * Test an email campaign by sending an email to the current user.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param data The scheduling data (e.g., scheduled_at).
     * @returns Promise
     */
    public static testCampaign<T>(community_id: string, newsletter_id: string, campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.testCampaign, data, { community_id, newsletter_id, campaign_id }, params);
    }

    // Emails

    /**
     * List all emails sent in a campaign.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param params Query parameters.
     * @returns Promise
     */
    public static listCampaignEmails<T>(community_id: string, newsletter_id: string, campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.listCampaignEmails, undefined, { community_id, newsletter_id, campaign_id }, params);
    }

    // Subscribers (admin routes)

    /**
     * List all subscribers of a newsletter (admin only).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Query parameters.
     * @returns Promise
     */
    public static listNewsletterSubscribers<T>(community_id: string, newsletter_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.listNewsletterSubscribers, undefined, { community_id, newsletter_id }, params);
    }

    /**
     * Get a specific subscriber of a newsletter (admin only).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param subscriber_id The ID of the subscriber.
     * @param params Query parameters.
     * @returns Promise
     */
    public static viewNewsletterSubscriber<T>(community_id: string, newsletter_id: string, subscriber_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.viewNewsletterSubscriber, undefined, { community_id, newsletter_id, subscriber_id }, params);
    }

    /**
     * Update a specific subscriber of a newsletter (admin only).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param subscriber_id The ID of the subscriber.
     * @param data The data to update.
     * @returns Promise
     */
    public static updateNewsletterSubscriber<T>(community_id: string, newsletter_id: string, subscriber_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.updateNewsletterSubscriber, data, { community_id, newsletter_id, subscriber_id }, params);
    }

    /**
     * Delete a specific subscriber from a newsletter (admin only).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param subscriber_id The ID of the subscriber.
     * @returns Promise
     */
    public static deleteNewsletterSubscriber<T>(community_id: string, newsletter_id: string, subscriber_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.deleteNewsletterSubscriber, undefined, { community_id, newsletter_id, subscriber_id }, params);
    }

    // Subscriber registration (open route)

    /**
     * Register a new subscriber to a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data The subscriber data.
     * @returns Promise
     */
    public static registerNewsletterSubscriber<T>(community_id: string, newsletter_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.registerNewsletterSubscriber, data, { community_id, newsletter_id }, params);
    }

    /**
     * Get newsletter overall reports (subscriber changes, unsubscribes, etc.).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Optional query params (start_date, end_date, etc).
     * @returns Promise with aggregated data
     */
    public static newsletterReports<T>(
        community_id: string,
        newsletter_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            CommunitiesRoute.routes.newsletterReports,
            undefined,
            { community_id, newsletter_id },
            params
        );
    }

    /**
     * Get campaign-level stats for a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Optional query params (start_date, end_date, etc).
     * @returns Promise with campaign stats
     */
    public static newsletterCampaignReports<T>(
        community_id: string,
        newsletter_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            CommunitiesRoute.routes.newsletterCampaignReports,
            undefined,
            { community_id, newsletter_id },
            params
        );
    }

    /**
    * Retrieves daily subscriber trend data for the specified newsletter.
    *
    * @param community_id The UUID of the community
    * @param newsletter_id The UUID of the newsletter
    * @param params Optional date-range filter (start_date, end_date, etc.)
    */
    public static newsletterSubscriberTrend<T>(
        community_id: string,
        newsletter_id: string,
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            CommunitiesRoute.routes.newsletterSubscriberTrend,
            undefined, // no body data
            { community_id, newsletter_id },
            params
        );
    }

    /**
     * Export subscribers for a specific newsletter.
     * The file is generated asynchronously on the server and
     * the user is emailed a link to download the file.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data Export options (format: 'csv' or 'xlsx').
     * @returns Promise
     */
    public static exportNewsletterSubscribers<T>(
        community_id: string,
        newsletter_id: string,
        data: { format: 'csv' | 'xlsx' },
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            CommunitiesRoute.routes.exportNewsletterSubscribers,
            data,
            { community_id, newsletter_id },
            params
        );
    }

    /**
     * Import game installs from a game title installations to a newsletter
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data Export options (format: 'csv' or 'xlsx').
     * @returns Promise
     */
    public static importGameInstalls<T>(
        community_id: string,
        newsletter_id: string,
        data: { format: 'csv' | 'xlsx' },
        params?: Record<string, any>
    ): AxiosPromise<Response<T>> {
        return Requests.processRoute(
            CommunitiesRoute.routes.importGameInstalls,
            data,
            { community_id, newsletter_id },
            params
        );
    }


}

export default Communities;