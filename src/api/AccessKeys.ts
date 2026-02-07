import AccessKeysRoute from "../routes/AccessKeysRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class AccessKeys {

    /**
     * List all access keys for a given title.
     * 
     * @see https://api.glitch.fun/api/documentation#/Access%20Keys/get_titles__title_id__keys
     * 
     * @param title_id The UUID of the title.
     * @param params Optional query parameters for pagination.
     * @returns promise
     */
    public static list<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AccessKeysRoute.routes.list, undefined, { title_id }, params);
    }

    /**
     * Bulk create access keys from a string of codes.
     * 
     * @see https://api.glitch.fun/api/documentation#/Access%20Keys/post_titles__title_id__keys
     * 
     * @param title_id The UUID of the title.
     * @param data The platform and codes to upload.
     * @param data.platform The platform for the keys (e.g., 'steam').
     * @param data.codes A string of codes separated by newlines, commas, or spaces.
     * @returns Promise
     */
    public static store<T>(title_id: string, data: { platform: string, codes: string }, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AccessKeysRoute.routes.store, data, { title_id }, params);
    }

    /**
     * Deletes an unassigned access key.
     * 
     * @see https://api.glitch.fun/api/documentation#/Access%20Keys/delete_keys__key_id_
     * 
     * @param key_id The UUID of the access key to delete.
     * @returns promise
     */
    public static delete<T>(key_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(AccessKeysRoute.routes.delete, {}, { key_id }, params);
    }

    /**
     * Emails the assigned key to the influencer.
     * 
     * @param key_id The UUID of the access key.
     * @returns promise
     */
    public static sendEmail<T>(key_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(AccessKeysRoute.routes.sendEmail, {}, { key_id });
    }
}

export default AccessKeys;