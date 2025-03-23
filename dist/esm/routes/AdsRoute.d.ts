import Route from "./interface";
/**
 * AdsRoute holds all the endpoint definitions for:
 * - Ad Campaigns
 * - Ad Groups (Ad Sets)
 * - Ads (Creatives)
 * - Ad Group Triggers
 */
declare class AdsRoute {
    static routes: {
        [key: string]: Route;
    };
}
export default AdsRoute;
