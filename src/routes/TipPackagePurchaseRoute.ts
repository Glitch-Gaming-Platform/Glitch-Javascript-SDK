import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class TipPackagePurchaseRoute {
    
    public static routes: { [key: string]: Route } = {
      stripe: { url: '/tipspackagepurchases/stripe', method: HTTP_METHODS.POST },
      stripePaymentIntent: { url: '/tipspackagepurchases/stripepaymentintent', method: HTTP_METHODS.POST },

    };

  }

  export default TipPackagePurchaseRoute;