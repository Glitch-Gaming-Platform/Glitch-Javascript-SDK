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



}

export default Users;