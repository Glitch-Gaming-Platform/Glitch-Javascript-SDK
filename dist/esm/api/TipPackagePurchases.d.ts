import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class TipPackagePurchases {
    /**
     * Purchase a package with Stripe as the processor.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    static stripe<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a stripe payment intent token.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    static getStripePaymentIntent<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Process the stripe payment intent after payment is complete.
    *
    * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
    *
    * @returns A promise
    */
    static processStripePaymentIntent<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default TipPackagePurchases;
