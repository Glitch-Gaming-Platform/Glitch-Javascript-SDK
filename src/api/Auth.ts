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
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/oneTimeLoginToken
     * 
     * @param data The data the user can register with.
     * 
     * @returns A promise
     */
    public static register<T>(data : object) : AxiosPromise<Response<T>> {
        return Requests.processRoute(AuthRoutes.routes.register, data);
    }

    /**
     * Request an authentication token to faciliate a one time login of an user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/oneTimeLoginToken
     * 
     * @returns promise
     */
    public static oneTimeLogin<T>(token : string) : AxiosPromise<Response<T>> {
        return Requests.processRoute(AuthRoutes.routes.one_time_login, {token : token});
    }
    
    /**
     * Execute the password reset process using a user's email address.
     * 
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authForgotPassword
     * 
     * @param email The email address
     * 
     * @returns promise
     */
    public static forgotPasswordWithEmail<T>(email: string) : AxiosPromise<Response<T>> {
        return Requests.processRoute(AuthRoutes.routes.forgot_password, {email: email});
    }

    /**
     * Resets the users password after the forgot password has been executed.
     * 
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authResetPassword
     * 
     * @param data The parameters required to reset the password.
     * 
     * @returns promise
     */
    public static resetPassword<T>(data : object) : AxiosPromise<Response<T>> {
        return Requests.processRoute(AuthRoutes.routes.reset_password, data);
    }

}

export default Auth;