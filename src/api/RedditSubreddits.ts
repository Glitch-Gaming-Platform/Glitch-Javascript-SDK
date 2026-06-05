import RedditSubredditsRoute from "../routes/RedditSubredditsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class RedditSubreddits {
    /**
     * Search indexed Reddit communities for game marketing research.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/indexRedditSubreddits
     */
    public static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(RedditSubredditsRoute.routes.list, undefined, undefined, params);
    }

    /**
     * Get an analyzed subreddit record by display name.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/showRedditSubreddit
     */
    public static show<T>(subreddit: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(RedditSubredditsRoute.routes.show, undefined, { subreddit }, params);
    }

    /**
     * Match a game concept to relevant Reddit communities.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/matchRedditSubreddits
     */
    public static match<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(RedditSubredditsRoute.routes.match, data, undefined, params);
    }

    /**
     * Admin-only ingestion of subreddit metadata and rules.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/ingestRedditSubreddits
     */
    public static ingest<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(RedditSubredditsRoute.routes.ingest, data, undefined, params);
    }

    /**
     * Admin-only refresh for one subreddit.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/refreshRedditSubreddit
     */
    public static refresh<T>(subreddit: string, data: object = {}, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(RedditSubredditsRoute.routes.refresh, data, { subreddit }, params);
    }
}

export default RedditSubreddits;
