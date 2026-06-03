import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class ServerOperations {
    static listDeployments<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static updatePolicy<T>(title_id: string, build_id: string, data: object): AxiosPromise<Response<T>>;
}
export default ServerOperations;
