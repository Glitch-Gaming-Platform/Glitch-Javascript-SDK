import ServerOperationsRoute from "../routes/ServerOperationsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class ServerOperations {
    public static listDeployments<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(ServerOperationsRoute.routes.listDeployments, undefined, undefined, params);
    }

    public static updatePolicy<T>(title_id: string, build_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(ServerOperationsRoute.routes.updatePolicy, data, { title_id, build_id });
    }
}

export default ServerOperations;
