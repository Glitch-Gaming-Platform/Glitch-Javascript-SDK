import Response from "../util/Response";
import { AxiosPromise } from "axios";
/**
 * Site-administrator user management.
 *
 * These endpoints back the admin dashboard user directory. They require a
 * site-admin auth token (Super Administrator or Administrator), and
 * impersonation additionally requires a Super Administrator token.
 */
declare class AdminUsers {
    /**
     * List and search all users in the system.
     *
     * Supported params include `search` (matches name, username, email, or id),
     * `is_site_admin`, `is_verified`, `sort_by`, `sort_order`, `per_page`, and
     * `page`.
     *
     * @param params Optional query parameters.
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a comprehensive profile for a single user, including communities,
     * administered titles, games played, roles, billing status, social presence,
     * and activity counts.
     *
     * @param user_id The id of the user to view.
     * @param params Optional query parameters.
     * @returns promise
     */
    static view<T>(user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Impersonate a user. Issues a JWT for the target account so a Super
     * Administrator can operate as that user. Administrator accounts cannot be
     * impersonated, and every call is written to the impersonation audit log.
     *
     * @param user_id The id of the user to impersonate.
     * @returns promise resolving to an access token and the impersonated user summary.
     */
    static impersonate<T>(user_id: string): AxiosPromise<Response<T>>;
}
export default AdminUsers;
