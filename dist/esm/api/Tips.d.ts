import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Tips {
    /**
     * Give a tip to another user
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    static give<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Tips;
