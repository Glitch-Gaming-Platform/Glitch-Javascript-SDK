import GamesRoutes from "../routes/GamesRoutes";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Games {

    /**
     * Get a list of Games available on he platform.
     * 
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/getExternalGames
     * 
     * @returns promise
     */
    public static listGames<T>(params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(GamesRoutes.routes.listGames, undefined, undefined, params);
    }

    /**
     * Retrieve information on a single game.
     * 
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/getExternalGameById
     * 
     * @returns promise
     */
    public static viewGame<T>(game_id : string, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(GamesRoutes.routes.viewGame, undefined, {game_id : game_id}, params);
    }

    /**
     * Generates campaign data for this game.
     * 
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/generateCampaign
     * 
     * @returns promise
     */
    public static createCampaignData<T>(game_id : string, data?: object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(GamesRoutes.routes.createCampaignData, data, {game_id : game_id}, params);
    }

    /**
     * Generates campaign data with a game title.
     * 
     * @returns promise
     */
    public static createCampaignWithTitle<T>(game_id : string, data?: object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(GamesRoutes.routes.createCampaignWithTitle, data, {game_id : game_id}, params);
    }

    /**
     * Generates game data for this game.
     * 
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/generateCampaign
     * 
     * @returns promise
     */
    public static createGameTitle<T>(game_id : string, data?: object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(GamesRoutes.routes.createGameTitle, data, {game_id : game_id}, params);
    }

    /**
     * Generates game scheduler data for this game.
     * 
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/generateCampaign
     * 
     * @returns promise
     */
    public static createGameScheduler<T>(game_id : string, data?: object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(GamesRoutes.routes.createGameScheduler, data, {game_id : game_id}, params);
    }

}

export default Games;