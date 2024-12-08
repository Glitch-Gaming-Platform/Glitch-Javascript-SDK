import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class SocialPostsRoute {
    
    public static routes: { [key: string]: Route } = {
        getPosts: { url: '/socialposts', method: HTTP_METHODS.GET },
        createPost: { url: '/socialposts', method: HTTP_METHODS.POST },
        retrievePost : { url: '/socialposts/{post_id}', method: HTTP_METHODS.GET },
        updatePost : { url: '/socialposts/{post_id}', method: HTTP_METHODS.PUT },
        deletePost : { url: '/socialposts/{post_id}', method: HTTP_METHODS.DELETE },
        dispute: { url: '/social/{post_id}/dispute', method: HTTP_METHODS.POST },
        history : { url: '/socialposts/{post_id}/history', method: HTTP_METHODS.GET },
        addMedia: { url: '/socialposts/{post_id}/addMedia', method: HTTP_METHODS.POST },
        removeMedia: { url: '/socialposts/{post_id}/removeMedia/{media_id}', method: HTTP_METHODS.DELETE },
        reschedule: { url: '/socialposts/{post_id}/reschedule', method: HTTP_METHODS.POST },
        reports: { url: '/socialposts/{post_id}/reports', method: HTTP_METHODS.GET },

    };

  }

  export default SocialPostsRoute;