import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class SocialPostsRoute {
    
    public static routes: { [key: string]: Route } = {
        getPosts: { url: '/socialposts', method: HTTP_METHODS.GET },
        createPost: { url: '/socialposts', method: HTTP_METHODS.POST },
        retrievePost : { url: '/socialposts/{post_id}', method: HTTP_METHODS.GET },
    };

  }

  export default SocialPostsRoute;