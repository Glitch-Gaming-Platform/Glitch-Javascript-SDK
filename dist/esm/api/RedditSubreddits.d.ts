import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class RedditSubreddits {
    /**
     * Search indexed Reddit communities for game marketing research.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/indexRedditSubreddits
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get an analyzed subreddit record by display name.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/showRedditSubreddit
     */
    static show<T>(subreddit: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Match a game concept to relevant Reddit communities.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/matchRedditSubreddits
     */
    static match<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Match one of the authenticated user's administered titles to Reddit communities.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/titleRedditSubredditMatches
     */
    static matchTitle<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Admin-only ingestion of subreddit metadata and rules.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/ingestRedditSubreddits
     */
    static ingest<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Admin-only refresh for one subreddit.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/refreshRedditSubreddit
     */
    static refresh<T>(subreddit: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default RedditSubreddits;
