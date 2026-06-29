import { AxiosPromise } from "axios";
import MarketResearchRoute from "../routes/MarketResearchRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";

class MarketResearch {
    public static access<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketResearchRoute.routes.access, undefined, undefined, params);
    }

    public static filterOptions<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketResearchRoute.routes.filterOptions, undefined, undefined, params);
    }

    public static listGames<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketResearchRoute.routes.listGames, undefined, undefined, params);
    }

    public static viewGame<T>(game_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketResearchRoute.routes.viewGame, undefined, { game_id }, params);
    }

    public static exportGames(params?: Record<string, any>): AxiosPromise<Blob> {
        return Requests.download(MarketResearchRoute.routes.exportGames.url, params);
    }

    public static exportGame(game_id: string, params?: Record<string, any>): AxiosPromise<Blob> {
        const url = MarketResearchRoute.routes.exportGame.url.replace('{game_id}', game_id);
        return Requests.download(url, params);
    }
}

export default MarketResearch;
