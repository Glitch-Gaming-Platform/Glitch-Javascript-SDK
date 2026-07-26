import ServerOperationsRoute from "../routes/ServerOperationsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class ServerOperations {
    public static listDeployments<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(ServerOperationsRoute.routes.listDeployments, undefined, undefined, params);
    }

    /**
     * Update the warm/spare/ceiling shape of a matchmaker managed instance pool.
     * Rejected for any build whose capacity model is not "pooled".
     */
    public static updatePolicy<T>(title_id: string, build_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(ServerOperationsRoute.routes.updatePolicy, data, { title_id, build_id });
    }

    /**
     * Resize the Container App behind a build. Replica bounds are enforced
     * server side against the build's capacity model, so a singleton world
     * cannot be given a second replica. Pass acknowledge_outage when
     * deliberately setting min replicas to 0 on a singleton or replicated
     * deployment, which takes the game offline.
     */
    public static updateContainerAppResources<T>(title_id: string, build_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(ServerOperationsRoute.routes.updateContainerAppResources, data, { title_id, build_id });
    }

    /**
     * Declare how many server processes a build may run at once: singleton,
     * replicated, pooled, serverless, or static. Re-clamps the stored replica
     * shape and is honored by the next deployment.
     */
    public static updateCapacityModel<T>(title_id: string, build_id: string, data: { capacity_model: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(ServerOperationsRoute.routes.updateCapacityModel, data, { title_id, build_id });
    }

    /**
     * Realms are how a singleton world scales: one process per realm, all
     * sharing a database. These are the site-admin views of the multiplayer
     * realm records.
     */
    public static listRealms<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(ServerOperationsRoute.routes.listRealms, undefined, { title_id }, params);
    }

    public static createRealm<T>(title_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(ServerOperationsRoute.routes.createRealm, data, { title_id });
    }

    public static updateRealm<T>(title_id: string, realm_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(ServerOperationsRoute.routes.updateRealm, data, { title_id, realm_id });
    }

    public static deleteRealm<T>(title_id: string, realm_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(ServerOperationsRoute.routes.deleteRealm, undefined, { title_id, realm_id });
    }
}

export default ServerOperations;
