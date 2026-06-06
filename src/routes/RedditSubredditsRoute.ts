import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class RedditSubredditsRoute {
    public static routes: { [key: string]: Route } = {
        list: { url: '/reddit/subreddits', method: HTTP_METHODS.GET },
        show: { url: '/reddit/subreddits/{subreddit}', method: HTTP_METHODS.GET },
        match: { url: '/reddit/subreddits/match', method: HTTP_METHODS.POST },
        matchTitle: { url: '/titles/{title_id}/reddit/subreddit-matches', method: HTTP_METHODS.POST },
        ingest: { url: '/admin/reddit/subreddits/ingest', method: HTTP_METHODS.POST },
        refresh: { url: '/admin/reddit/subreddits/{subreddit}/refresh', method: HTTP_METHODS.POST },
    };
}

export default RedditSubredditsRoute;
