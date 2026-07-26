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
    updateContainerAppResources: {
      url: '/admin/server-operations/titles/{title_id}/builds/{build_id}/container-app',
      method: HTTP_METHODS.PUT
    },
    updateCapacityModel: {
      url: '/admin/server-operations/titles/{title_id}/builds/{build_id}/capacity-model',
      method: HTTP_METHODS.PUT
    },
    listRealms: {
      url: '/admin/server-operations/titles/{title_id}/realms',
      method: HTTP_METHODS.GET
    },
    createRealm: {
      url: '/admin/server-operations/titles/{title_id}/realms',
      method: HTTP_METHODS.POST
    },
    updateRealm: {
      url: '/admin/server-operations/titles/{title_id}/realms/{realm_id}',
      method: HTTP_METHODS.PUT
    },
    deleteRealm: {
      url: '/admin/server-operations/titles/{title_id}/realms/{realm_id}',
      method: HTTP_METHODS.DELETE
    },
  };
}

export default ServerOperationsRoute;
