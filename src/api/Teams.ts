import TeamsRoutes from "../routes/TeamsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Teams {

    /**
     * List all the teams
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamsList
     * 
     * @returns promise
     */
    public static list<T>() :  AxiosPromise<Response<T>> {
        return Requests.processRoute(TeamsRoutes.routes.list);
    }

    /**
     * Create a new team.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamCreate
     * 
     * @param data The data to be passed when creating a team.
     * 
     * @returns Promise
     */
    public static create<T>(data : object) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(TeamsRoutes.routes.create, data);
    }

    /**
     * Update a team.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUpdate
     * 
     * @param team_id The id of the team to update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static update<T>(team_id : string, data : object)  :  AxiosPromise<Response<T>>{

        return Requests.processRoute(TeamsRoutes.routes.create, data, {team_id : team_id});
    }

    /**
     * Retrieve the information for a single team.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamShow
     * 
     * @param team_id The id fo the team to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(team_id : string) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(TeamsRoutes.routes.view, {}, {team_id : team_id});
    }

    /**
     * Deletes a team.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamDelete
     * 
     * @param team_id The id of the team to delete.
     * @returns promise
     */
    public static delete<T>(team_id : string) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(TeamsRoutes.routes.delete, {}, {team_id : team_id});
    }

    /**
     * Updates the main image for the team using a File object.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUploadMainImage
     * 
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     * 
     * @returns promise
     */
    public static uploadMainImageFile<T>(team_id: string, file : File, data? : object): AxiosPromise<Response<T>> {

        let url = TeamsRoutes.routes.uploadMainImage.url.replace('{team_id}', team_id);

        return Requests.uploadFile(url, 'image', file, data);
    }

    /**
     * Updates the main image for the team using a Blob.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUploadMainImage
     * 
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     * 
     * @returns promise
     */
    public static uploadMainImageBlob<T>(team_id: string, blob : Blob, data? : object): AxiosPromise<Response<T>> {

        let url = TeamsRoutes.routes.uploadMainImage.url.replace('{team_id}', team_id);

        return Requests.uploadBlob(url, 'image', blob, data);
    }

    /**
     * Updates the banner image for the team using a File object.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUploadMainImage
     * 
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     * 
     * @returns promise
     */
    public static uploadBannerImageFile<T>(team_id: string, file : File, data? : object): AxiosPromise<Response<T>> {

        let url = TeamsRoutes.routes.uploadBannerImage.url.replace('{team_id}', team_id);

        return Requests.uploadFile(url, 'image', file, data);
    }

    /**
     * Updates the banner image for the team using a Blob.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUploadMainImage
     * 
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     * 
     * @returns promise
     */
    public static uploadBannerImageBlob<T>(team_id: string, blob : Blob, data? : object): AxiosPromise<Response<T>> {

        let url = TeamsRoutes.routes.uploadBannerImage.url.replace('{team_id}', team_id);

        return Requests.uploadBlob(url, 'image', blob, data);
    }

    /**
     * List the invites that have been sent for the team to users.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamsUserInviteList
     * 
     * @param team_id The id of the team
     * 
     * @returns promise
     */
    public static listInvites<T>(team_id : string): AxiosPromise<Response<T>> {
        return Requests.processRoute(TeamsRoutes.routes.listInvites, {}, {team_id : team_id});  
    }

    /**
     * Send an invitation to a user to join the team.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamSendInvite
     * 
     * @param team_id The id of the team.
     * @param data The data that will be passed into sending an invite.
     * 
     * @returns promise
     */
    public static sendInvite<T>(team_id : string, data? : object): AxiosPromise<Response<T>> {
        return Requests.processRoute(TeamsRoutes.routes.sendInvite, data, {team_id : team_id});  
    }

    /**
     * Accept an invite to a team. The JSON Web Token (JWT) must be related to the token.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamAcceptInvite
     * 
     * @param team_id The id of the team
     * @param token The token required to accept the user.
     * 
     * @returns promise
     */
    public static acceptInvite<T>(team_id : string, token : string): AxiosPromise<Response<T>> {
        return Requests.processRoute(TeamsRoutes.routes.acceptInvite, {}, {team_id : team_id});  
    }

    /**
     * List the users who are currently associated with the team.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUserList
     * 
     * @param team_id The id of the team.
     * 
     * @returns promise
     */
    public static listUsers<T>(team_id : string): AxiosPromise<Response<T>> {
        return Requests.processRoute(TeamsRoutes.routes.listTeamUsers, {}, {team_id : team_id});  
    }

    /**
     * Add a user to a team.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/createTeamUser
     * 
     * @param team_id The id of the team.
     * @param data The data to be passed when adding a user.
     * 
     * @returns promise
     */
    public static addUser<T>(team_id : string, data? : object): AxiosPromise<Response<T>> {
        return Requests.processRoute(TeamsRoutes.routes.addTeamUser, data, {team_id : team_id});  
    }

    /**
     * Retrieves a single user and their information that is associated with a team.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/showTeamUser
     * 
     * @param team_id The id of the team.
     * @param user_id The id of the user.
     * 
     * @returns promise
     */
    public static getUser<T>(team_id : string, user_id : string): AxiosPromise<Response<T>> {
        return Requests.processRoute(TeamsRoutes.routes.showTeamUser, {}, {team_id : team_id, user_id});  
    }

    /**
     * Updates the users information associated with the team.
     * 
     * @param team_id The id of the team.
     * @param user_id The id of the user.
     * 
     * @returns promise
     */
    public static updatetUser<T>(team_id : string, user_id : string, data? : object): AxiosPromise<Response<T>> {
        return Requests.processRoute(TeamsRoutes.routes.updateTeamUser, data, {team_id : team_id, user_id});  
    }

    /**
     * Removes a user from a team.
     * 
     * @param team_id The id of team. 
     * @param user_id The id of the user.
     * 
     * @returns promise
     */
    public static removetUser<T>(team_id : string, user_id : string): AxiosPromise<Response<T>> {
        return Requests.processRoute(TeamsRoutes.routes.removeTeamUser, {}, {team_id : team_id, user_id});  
    }


    

    

}

export default Teams;