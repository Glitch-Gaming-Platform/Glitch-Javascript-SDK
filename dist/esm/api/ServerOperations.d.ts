import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class ServerOperations {
    static listDeployments<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update the warm/spare/ceiling shape of a matchmaker managed instance pool.
     * Rejected for any build whose capacity model is not "pooled".
     */
    static updatePolicy<T>(title_id: string, build_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Resize the Container App behind a build. Replica bounds are enforced
     * server side against the build's capacity model, so a singleton world
     * cannot be given a second replica. Pass acknowledge_outage when
     * deliberately setting min replicas to 0 on a singleton or replicated
     * deployment, which takes the game offline.
     */
    static updateContainerAppResources<T>(title_id: string, build_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Declare how many server processes a build may run at once: singleton,
     * replicated, pooled, serverless, or static. Re-clamps the stored replica
     * shape and is honored by the next deployment.
     */
    static updateCapacityModel<T>(title_id: string, build_id: string, data: {
        capacity_model: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Realms are how a singleton world scales: one process per realm, all
     * sharing a database. These are the site-admin views of the multiplayer
     * realm records.
     */
    static listRealms<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static createRealm<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    static updateRealm<T>(title_id: string, realm_id: string, data: object): AxiosPromise<Response<T>>;
    static deleteRealm<T>(title_id: string, realm_id: string): AxiosPromise<Response<T>>;
}
export default ServerOperations;
