import Route from './interface';
declare class GameAdvertisingRoute {
    /**
     * Route templates for publisher game-ad inventory, telemetry, earnings, and
     * site administration. Placeholders are expanded by Requests.processRoute.
     */
    static routes: {
        [key: string]: Route;
    };
}
export default GameAdvertisingRoute;
