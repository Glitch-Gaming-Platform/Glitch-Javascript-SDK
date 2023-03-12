import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class AuthRoutes {
    
    public static routes: Route[] = [
      { url: '/users', method: HTTP_METHODS.GET },
      { url: '/users/:id', method: 'GET' },
      { url: '/users', method: 'POST' },
      { url: '/users/:id', method: 'PUT' },
      { url: '/users/:id', method: 'DELETE' },
    ];

  }

  export default AuthRoutes;