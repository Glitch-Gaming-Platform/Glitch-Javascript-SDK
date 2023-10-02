import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class SocialRoute {
    
    public static routes: { [key: string]: Route } = {
        postVideoToTikTok: { url: '/social/postVideoToTikTok', method: HTTP_METHODS.POST },
        postVideoToFacebookGroup: { url: '/social/postVideoToFacebookGroup', method: HTTP_METHODS.POST },
    };

  }

  export default SocialRoute;