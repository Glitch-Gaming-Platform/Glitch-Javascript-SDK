import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class TwitchReporting {
    /**
     * Get a streamer's Concurrent Viewership (CCV) history.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getCreatorCcvHistory
     *
     * @param twitch_streamer_id The ID of the Twitch streamer.
     * @param params Optional query parameters for filtering (e.g., start_date, end_date, per_page).
     *
     * @returns promise
     */
    static getCreatorCcvHistory<T>(twitch_streamer_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a summary of game performance metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getGamesSummary
     *
     * @param params Optional query parameters for filtering and sorting (e.g., start_date, end_date, sort_by, limit).
     *
     * @returns promise
     */
    static getGamesSummary<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get most recently active streamers.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getMostActiveStreamers
     *
     * @param params Optional query parameters (e.g., limit).
     *
     * @returns promise
     */
    static getMostActiveStreamers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get most recently streamed games.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getMostActiveGames
     *
     * @param params Optional query parameters (e.g., limit).
     *
     * @returns promise
     */
    static getMostActiveGames<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get top streamers by performance (average or peak CCV).
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getTopStreamers
     *
     * @param params Optional query parameters for filtering and sorting (e.g., sort_by, start_date, limit).
     *
     * @returns promise
     */
    static getTopStreamers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a streamer's typical streaming schedule as a heatmap.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getCreatorStreamingSchedule
     *
     * @param twitch_streamer_id The ID of the Twitch streamer.
     *
     * @returns promise
     */
    static getCreatorStreamingSchedule<T>(twitch_streamer_id: string): AxiosPromise<Response<T>>;
    /**
    * Get a list of games played by a specific streamer.
    *
    * @param twitch_streamer_id The ID of the Twitch streamer.
    * @returns promise
    */
    static getStreamerGameHistory<T>(twitch_streamer_id: string): AxiosPromise<Response<T>>;
    /**
     * Get a paginated list of streamers who played a specific game.
     *
     * @param game_name The URL-encoded name of the game.
     * @param params Optional query parameters for pagination (e.g., page, per_page).
     * @returns promise
     */
    static getStreamersForGame<T>(game_name: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default TwitchReporting;
