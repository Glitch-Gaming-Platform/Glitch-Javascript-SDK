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
}

export default AdminReports;
