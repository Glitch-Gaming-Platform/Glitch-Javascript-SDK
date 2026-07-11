import Route from "./interface";
declare class GameShowsRoute {
    /**
     * Canonical API route templates. JSON routes are substituted by
     * Requests.processRoute; multipart methods replace tokens before upload.
     */
    static routes: {
        [key: string]: Route;
    };
}
export default GameShowsRoute;
