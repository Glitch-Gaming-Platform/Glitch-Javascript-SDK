import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class AdminReports {
    /**
     * Returns aggregate site-admin reporting for user growth, churn, acquisition,
     * engagement, and user-generated revenue.
     */
    static usersRevenue<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Returns site-admin Steam market reports, including social profile coverage,
     * platform usage, follower benchmarks, review/player relationships, and
     * optional target-app game reports.
     */
    static steam<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default AdminReports;
