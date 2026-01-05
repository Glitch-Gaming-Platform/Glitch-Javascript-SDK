import NewslettersRoutes from "../routes/NewslettersRoutes";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Newsletters {


    /**
     * Download the list of publictions, podcasts and blogs.
     * 
     * @see https://api.glitch.fun/api/documentation#/Newsletters/downloadMarketingChecklists
     * 
     * @param data The data to be passed when creating a team.
     * 
     * @returns Promise
     */
    public static downloadMarketingChecklist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(NewslettersRoutes.routes.downloadMarketingChecklist, data, undefined, params);
    }


    /**
     * Join the marketing course waitlist.
     * 
     * @param data { name, email, game, topics[] }
     * @returns Promise
     */
    public static joinCourseWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.joinCourseWaitlist, data, undefined, params);
    }

    /**
 * Join the raffle feature waitlist.
 * 
 * @param data { name, email, game, prizes[], interest_in_playtesters, launch_timeline, target_wishlist_count }
 */
    public static joinRaffleWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.joinRaffleWaitlist, data, undefined, params);
    }

    /**
     * Join the Discord Marketplace waitlist.
     * 
     * @param data { name, email, game, categories[] }
     */
    public static joinDiscordMarketplaceWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(NewslettersRoutes.routes.joinDiscordMarketplaceWaitlist, data, undefined, params);
    }


}

export default Newsletters;