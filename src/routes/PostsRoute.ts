import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class PostsRoute {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/posts', method: HTTP_METHODS.GET },
      create: { url: '/posts', method: HTTP_METHODS.POST  },
      view : { url: '/posts/{post_id}', method: HTTP_METHODS.GET  },
      update  :{ url: '/posts/{post_id}', method: HTTP_METHODS.PUT  },
      delete : { url: '/posts/{post_id}', method: HTTP_METHODS.DELETE },
      toggleInteraction :  { url: '/posts/{post_id}/toggleInteraction', method: HTTP_METHODS.POST },
    };

  }

  export default PostsRoute;