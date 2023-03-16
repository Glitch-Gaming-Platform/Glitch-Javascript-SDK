import TeamsRoutes from "../routes/TeamsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Teams {

    /**
     * List all the teams
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamsList
     * 
     * @returns promise
     */
    public static list<T>() :  AxiosPromise<Response<T>> {
        return Requests.processRoute(TeamsRoutes.routes.list);
    }

    /**
     * Create a new team.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamCreate
     * 
     * @param data The data to be passed when creating a team.
     * 
     * @returns Promise
     */
    public static create<T>(data : object) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(TeamsRoutes.routes.create, data);
    }

    /**
     * Update a team.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUpdate
     * 
     * @param team_id The id of the team to update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static update<T>(team_id : string, data : object)  :  AxiosPromise<Response<T>>{

        return Requests.processRoute(TeamsRoutes.routes.create, data, {team_id : team_id});
    }

    /**
     * Retrieve the information for a single team.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamShow
     * 
     * @param team_id The id fo the team to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(team_id : string) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(TeamsRoutes.routes.view, {}, {team_id : team_id});
    }

    /**
     * Deletes a team.
     * 
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamDelete
     * 
     * @param team_id The id of the team to delete.
     * @returns promise
     */
    public static delete<T>(team_id : string) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(TeamsRoutes.routes.delete, {}, {team_id : team_id});
    }

    

    

}

export default Teams;