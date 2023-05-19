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
    public static list<T>(params?: Record<string, any>) :  AxiosPromise<Response<T>> {
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
    public static create<T>(data : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

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
    public static update<T>(community_id : string, data : object, params?: Record<string, any>)  :  AxiosPromise<Response<T>>{

        return Requests.processRoute(CommunitiesRoute.routes.update, data, {community_id : community_id}, params);
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
    public static view<T>(community_id : string, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.view, {}, {community_id : community_id}, params);
    }

    /**
     * Deletes a community.
     * 
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/destoryCommunityStorage
     * 
     * @param community_id The id of the community to delete.
     * @returns promise
     */
    public static delete<T>(community_id : string, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(CommunitiesRoute.routes.delete, {}, {community_id : community_id});
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
    public static uploadLogoFile<T>(community_id: string, file : File, data? : object, params?: Record<string, any>): AxiosPromise<Response<T>> {

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
    public static uploadLogoBlob<T>(community_id: string, blob : Blob, data? : object, params?: Record<string, any>): AxiosPromise<Response<T>> {

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
    public static uploadBannerImageFile<T>(community_id: string, file : File, data? : object, params?: Record<string, any>): AxiosPromise<Response<T>> {

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
    public static uploadBannerImageBlob<T>(community_id: string, blob : Blob, data? : object, params?: Record<string, any>): AxiosPromise<Response<T>> {

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
     public static uploadVideoLogoFile<T>(community_id: string, file : File, data? : object, params?: Record<string, any>): AxiosPromise<Response<T>> {

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
    public static uploadVideoLogoBlob<T>(community_id: string, blob : Blob, data? : object, params?: Record<string, any>): AxiosPromise<Response<T>> {

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
    public static listInvites<T>(community_id : string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.listInvites, {}, {community_id : community_id}, params);  
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
    public static sendInvite<T>(community_id : string, data? : object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.sendInvite, data, {community_id : community_id}, params);  
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
    public static acceptInvite<T>(community_id : string, token : string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.acceptInvite, {}, {community_id : community_id}, params);  
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
    public static listUsers<T>(community_id : string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.listUsers, {}, {community_id : community_id}, params);  
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
    public static addUser<T>(community_id : string, data? : object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.addUser, data, {community_id : community_id}, params);  
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
    public static getUser<T>(community_id : string, user_id : string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.showUser, {}, {community_id : community_id, user_id}, params);  
    }

    /**
     * Updates the users information associated with the community.
     * 
     * @param community_id The id of the community.
     * @param user_id The id of the user.
     * 
     * @returns promise
     */
    public static updatetUser<T>(community_id : string, user_id : string, data? : object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.updateUser, data, {community_id : community_id, user_id}, params);  
    }

    /**
     * Removes a user from a community.
     * 
     * @param community_id The id of community. 
     * @param user_id The id of the user.
     * 
     * @returns promise
     */
    public static removetUser<T>(community_id : string, user_id : string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.removeUser, {}, {community_id : community_id, user_id}, params);  
    }

    /**
     * Finds a community either by its subdomain or cname. The cname must be active.
     * 
     * @param domain The subcname of the community.
     * 
     * @returns promise
     */
    public static findByDomain<T>(domain : string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CommunitiesRoute.routes.findByDomain, {}, {domain : domain}, params);  
    }


    

    

}

export default Communities;