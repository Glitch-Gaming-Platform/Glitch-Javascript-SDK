import { AxiosPromise } from "axios";
import Response from "../util/Response";
declare class MarketResearch {
    static access<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static filterOptions<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static listGames<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static viewGame<T>(game_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static exportGames(params?: Record<string, any>): AxiosPromise<Blob>;
    static exportGame(game_id: string, params?: Record<string, any>): AxiosPromise<Blob>;
}
export default MarketResearch;
