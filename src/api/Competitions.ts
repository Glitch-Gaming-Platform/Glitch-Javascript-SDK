import CompetitionRoutes from "../routes/CompetitionRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Competitions {

    /**
     * List all the competitions
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceList
     * 
     * @returns promise
     */
    public static list<T>() :  AxiosPromise<Response<T>> {
        return Requests.processRoute(CompetitionRoutes.routes.list);
    }

    /**
     * Create a new competition
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/newResourceStorage
     * 
     * @param data The date to be passed when creating a competiton.
     * 
     * @returns Promise
     */
    public static create<T>(data : object) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(CompetitionRoutes.routes.create, data);
    }

    /**
     * Update a competition
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateStorage
     * 
     * @param competition_id The id of the competition to update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static update<T>(competition_id : string, data : object)  :  AxiosPromise<Response<T>>{

        return Requests.processRoute(CompetitionRoutes.routes.create, data, {competition_id : competition_id});
    }

    /**
     * Retrieve the information for a single competition.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/showStorage
     * 
     * @param competition_id The id fo the competition to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(competition_id : string) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(CompetitionRoutes.routes.view, {}, {competition_id : competition_id});
    }

    /**
     * Deletes a competition.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/destoryStorage
     * 
     * @param competition_id The id of the competition to delete.
     * @returns promise
     */
    public static delete<T>(competition_id : string) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(CompetitionRoutes.routes.delete, {}, {competition_id : competition_id});
    }

    

}

export default Competitions;