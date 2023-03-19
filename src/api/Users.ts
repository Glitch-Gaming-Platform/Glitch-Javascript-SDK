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
    public static list<T>(): AxiosPromise<Response<T>> {
        return Requests.processRoute(UserRoutes.routes.list);
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
    public static update<T>(data: object): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.update, data);
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
    public static me<T>(): AxiosPromise<Response<T>> {

        return Requests.processRoute(UserRoutes.routes.me, {});
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
    public static uploadAvatarImageFile<T>(file : File, data? : object): AxiosPromise<Response<T>> {

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
    public static uploadAvatarImageBlob<T>(blob : Blob, data? : object): AxiosPromise<Response<T>> {

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
    public static uploadBannerImageFile<T>(file : File, data? : object): AxiosPromise<Response<T>> {

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
    public static uploadBannerImageBlob<T>(blob : Blob, data? : object): AxiosPromise<Response<T>> {

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




}

export default Users;