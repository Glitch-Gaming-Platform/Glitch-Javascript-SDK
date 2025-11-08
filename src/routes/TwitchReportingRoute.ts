import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class TwitchReportingRoute {

    public static routes: { [key: string]: Route } = {
        getCreatorCcvHistory: {
            url: '/reporting/twitch/streamers/{twitch_streamer_id}/ccv-history',
            method: HTTP_METHODS.GET
        },
        getGamesSummary: {
            url: '/reporting/twitch/games/summary',
            method: HTTP_METHODS.GET
        },
        getMostActiveStreamers: {
            url: '/reporting/twitch/streamers/most-active',
            method: HTTP_METHODS.GET
        },
        getMostActiveGames: {
            url: '/reporting/twitch/games/most-active',
            method: HTTP_METHODS.GET
        },
        getTopStreamers: {
            url: '/reporting/twitch/streamers/top',
            method: HTTP_METHODS.GET
        },
        getCreatorStreamingSchedule: {
            url: '/reporting/twitch/streamers/{twitch_streamer_id}/streaming-schedule',
            method: HTTP_METHODS.GET
        },
    };

}

export default TwitchReportingRoute;