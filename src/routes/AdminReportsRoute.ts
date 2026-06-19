import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class AdminReportsRoute {
  public static routes: { [key: string]: Route } = {
    usersRevenue: {
      url: '/admin/reports/users-revenue',
      method: HTTP_METHODS.GET
    },
  };
}

export default AdminReportsRoute;
