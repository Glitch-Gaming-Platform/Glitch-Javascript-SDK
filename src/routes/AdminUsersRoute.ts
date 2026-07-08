import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class AdminUsersRoute {
  public static routes: { [key: string]: Route } = {
    // List and search every user in the system (site admin only).
    list: {
      url: '/admin/users',
      method: HTTP_METHODS.GET
    },
    // Aggregated user analytics for charts on the admin directory.
    analytics: {
      url: '/admin/users/analytics',
      method: HTTP_METHODS.GET
    },
    // Full profile for a single user (site admin only).
    view: {
      url: '/admin/users/{user_id}',
      method: HTTP_METHODS.GET
    },
    // Securely impersonate a user (super admin only, audited).
    impersonate: {
      url: '/admin/users/impersonate',
      method: HTTP_METHODS.POST
    },
  };
}

export default AdminUsersRoute;
