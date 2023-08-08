import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class TipPackagePurchaseRoute {
    
    public static routes: { [key: string]: Route } = {
      stripe: { url: '/tipspackagepurchases/stripe', method: HTTP_METHODS.POST },
      getStripePaymentIntent: { url: '/tipspackagepurchases/getstripepaymentintent', method: HTTP_METHODS.POST },
      processStripePaymentIntent: { url: '/tipspackagepurchases/processstripepaymentintent', method: HTTP_METHODS.POST },

    };

  }

  export default TipPackagePurchaseRoute;