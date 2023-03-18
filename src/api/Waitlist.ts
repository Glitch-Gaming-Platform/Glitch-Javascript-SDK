import WaitlistRoutes from "../routes/TeamsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Teams {

    /**
     * List all the waitlist sign-ups.
     * 
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistList
     * 
     * @returns promise
     */
    public static list<T>() :  AxiosPromise<Response<T>> {
        return Requests.processRoute(WaitlistRoutes.routes.list);
    }

    /**
     * Sign-up to the waitlist.
     * 
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistCreate
     * 
     * @param data The data to be passed when creating a team.
     * 
     * @returns Promise
     */
    public static create<T>(data : object) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(WaitlistRoutes.routes.create, data);
    }

    /**
     * Update a waitlist.
     * 
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistUpdate
     * 
     * @param waitlist_id The id of the team to update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static update<T>(waitlist_id : string, data : object)  :  AxiosPromise<Response<T>>{

        return Requests.processRoute(WaitlistRoutes.routes.update, data, {waitlist_id : waitlist_id});
    }

    /**
     * Retrieve the information for a single user who signed-up to the waitlist.
     * 
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistUpdate
     * 
     * @param waitlist_id The id fo the team to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(waitlist_id : string) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(WaitlistRoutes.routes.view, {}, {waitlist_id : waitlist_id});
    }

    /**
     * Deletes an entry from the waitlist.
     * 
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistDelete
     * 
     * @param waitlist_id The id of the team to delete.
     * @returns promise
     */
    public static delete<T>(waitlist_id : string) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(WaitlistRoutes.routes.delete, {}, {waitlist_id : waitlist_id});
    }


}

export default Teams;