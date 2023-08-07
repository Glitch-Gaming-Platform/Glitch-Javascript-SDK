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

}

export default TipPackagePurchases;