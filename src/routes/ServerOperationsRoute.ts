import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class ServerOperationsRoute {
  public static routes: { [key: string]: Route } = {
    listDeployments: {
      url: '/admin/server-operations/deployments',
      method: HTTP_METHODS.GET
    },
    updatePolicy: {
      url: '/admin/server-operations/titles/{title_id}/builds/{build_id}/policy',
      method: HTTP_METHODS.PUT
    },
  };
}

export default ServerOperationsRoute;
