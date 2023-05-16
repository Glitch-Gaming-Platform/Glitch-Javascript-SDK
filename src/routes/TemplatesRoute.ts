import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class TemplatesRoute {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/templates', method: HTTP_METHODS.GET },
      create: { url: '/templates', method: HTTP_METHODS.POST  },
      view : { url: '/templates/{template_id}', method: HTTP_METHODS.GET  },
      update  :{ url: '/templates/{template_id}', method: HTTP_METHODS.PUT  },
      delete : { url: '/templates/{template_id}', method: HTTP_METHODS.DELETE },
      uploadLogo : {url: '/templates/{template_id}/uploadLogo', method : HTTP_METHODS.POST },
      uploadMainImage : {url : '/templates/{template_id}/uploadMainImage', method : HTTP_METHODS.POST },
    };

  }

  export default TemplatesRoute;