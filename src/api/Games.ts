import GamesRoutes from "../routes/GamesRoutes";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

/**
 * Interface for the Release Stats response to help developers 
 * understand the data structure returned by the optimizer.
 */
export interface ReleaseStatEntry {
    date: string;
    count: number;
    intensity: 'low' | 'medium' | 'high' | 'extreme';
    is_danger_zone: boolean;
    recommendation: string;
    events: Array<{
        name: string;
        type: 'nextfest' | 'sale';
        start: string;
        end: string;
    }>;
}

export interface ReleaseStatsResponse {
    data: ReleaseStatEntry[];
    meta: {
        user_status: 'authenticated' | 'guest';
        lookahead_days: number;
        start_date: string;
        end_date: string;
        global_events: any[];
    };
}

class Games {

    /**
     * Get a list of Games available on he platform.
     * 
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/getExternalGames
     * 
     * @returns promise
     */
    public static listGames<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GamesRoutes.routes.listGames, undefined, undefined, params);
    }

    /**
     * Retrieve information on a single game.
     * 
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/getExternalGameById
     * 
     * @returns promise
     */
    public static viewGame<T>(game_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GamesRoutes.routes.viewGame, undefined, { game_id: game_id }, params);
    }

    /**
     * Generates campaign data for this game.
     * 
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/generateCampaign
     * 
     * @returns promise
     */
    public static createCampaignData<T>(game_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GamesRoutes.routes.createCampaignData, data, { game_id: game_id }, params);
    }

    /**
     * Generates campaign data with a game title.
     * 
     * @returns promise
     */
    public static createCampaignWithTitle<T>(game_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GamesRoutes.routes.createCampaignWithTitle, data, { game_id: game_id }, params);
    }

    /**
     * Generates game data for this game.
     * 
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/generateCampaign
     * 
     * @returns promise
     */
    public static createGameTitle<T>(game_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GamesRoutes.routes.createGameTitle, data, { game_id: game_id }, params);
    }

    /**
     * Generates game scheduler data for this game.
     * 
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/generateCampaign
     * 
     * @returns promise
     */
    public static createGameScheduler<T>(game_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(GamesRoutes.routes.createGameScheduler, data, { game_id: game_id }, params);
    }

    /**
    * Get release competition statistics and Steam danger zones.
    * 
    * This tool analyzes the 'ExternalGames' database to show how many other games 
    * are releasing around a specific date. It also overlays hard-coded Steam events 
    * like NextFest and Seasonal Sales.
    * 
    * @see https://api.glitch.fun/api/documentation#/ExternalGames/getReleaseStats
    * 
    * @param params Filtering options:
    *   - precision: 'day' | 'month' | 'year' (Default: 'day'). Use 'month' for long-term planning.
    *   - start_date: 'YYYY-MM-DD'. The date to begin the analysis from.
    * 
    * @returns AxiosPromise<Response<ReleaseStatsResponse>>
    * 
    * @example
    * Games.getReleaseStats({ precision: 'day', start_date: '2025-06-01' })
    *   .then(res => console.log(res.data.data));
    */
    public static getReleaseStats<T = ReleaseStatsResponse>(params?: {
        precision?: 'day' | 'month' | 'year',
        start_date?: string
    }): AxiosPromise<Response<T>> {

        // Defensive check: ensure precision is valid if provided
        if (params?.precision && !['day', 'month', 'year'].includes(params.precision)) {
            console.warn(`Invalid precision '${params.precision}' passed to getReleaseStats. Defaulting to 'day'.`);
        }

        return Requests.processRoute(
            GamesRoutes.routes.releaseStats,
            undefined,
            undefined,
            params
        );
    }

}

export default Games;