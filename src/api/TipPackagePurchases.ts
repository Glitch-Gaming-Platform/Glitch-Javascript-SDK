import AuthRoutes from "../routes/AuthRoute";
import TipPackagePurchaseRoute from "../routes/TipPackagePurchaseRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class TipPackagePurchases {

    /**
     * Purchase a package with Stripe as the processor.
     * 
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     * 
     * @returns A promise
     */
    public static stripe<T>(data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(TipPackagePurchaseRoute.routes.stripe, data, {}, params);
    }

    /**
     * Get a stripe payment intent token.
     * 
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     * 
     * @returns A promise
     */
    public static getStripePaymentIntent<T>(data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(TipPackagePurchaseRoute.routes.getStripePaymentIntent, data, {}, params);
    }

     /**
     * Process the stripe payment intent after payment is complete.
     * 
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     * 
     * @returns A promise
     */
     public static processStripePaymentIntent<T>(data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(TipPackagePurchaseRoute.routes.processStripePaymentIntent, data, {}, params);
    }

}

export default TipPackagePurchases;