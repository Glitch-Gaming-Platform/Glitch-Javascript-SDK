import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Games {
    /**
     * Get a list of Games available on he platform.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/getExternalGames
     *
     * @returns promise
     */
    static listGames<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve information on a single game.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/getExternalGameById
     *
     * @returns promise
     */
    static viewGame<T>(game_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Generates campaign data for this game.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/generateCampaign
     *
     * @returns promise
     */
    static createCampaignData<T>(game_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Games;
