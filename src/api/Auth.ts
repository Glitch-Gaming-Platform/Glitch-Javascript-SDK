import AuthRoutes from "../routes/AuthRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Auth {

    /**
     * Attempts to authenticate a user using their email address.
     * 
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     * 
     * @param email The email address of the user
     * @param password The password of the user
     * 
     * @returns A promise
     */
    public static loginWithEmail<T>(email: string, password: string) :  AxiosPromise<Response<T>> {
        return Requests.post(AuthRoutes.routes.login.url, {email : email, password: password});
    }

    /**
     * Attempts to authenticate a user using their username.
     * 
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     * 
     * @param username The username of the user
     * @param password The password of the user
     * 
     * @returns A promise
     */
    public static loginWithUsername<T>(username: string, password: string) :  AxiosPromise<Response<T>> {
        return Requests.post(AuthRoutes.routes.login.url, {username : username, password: password});
    }

    /**
     * Attempts to register a user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authRegister
     * 
     * @param data The data the user can register with.
     * 
     * @returns A promise
     */
    public static register<T>(data : object) : AxiosPromise<Response<T>> {
        return Requests.processRoute(AuthRoutes.routes.register, data);
    }
}

export default Auth;