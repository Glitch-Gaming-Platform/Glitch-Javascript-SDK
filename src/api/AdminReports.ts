import AdminReportsRoute from "../routes/AdminReportsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class AdminReports {
    /**
     * Returns aggregate site-admin reporting for user growth, churn, acquisition,
     * engagement, and user-generated revenue.
     */
    public static usersRevenue<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdminReportsRoute.routes.usersRevenue, undefined, undefined, params);
    }

    /**
     * Returns site-admin Steam market reports, including social profile coverage,
     * platform usage, follower benchmarks, review/player relationships, and
     * optional target-app game reports.
     */
    public static steam<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AdminReportsRoute.routes.steam, undefined, undefined, params);
    }
}

export default AdminReports;
