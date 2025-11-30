import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Newsletters {
    /**
     * Download the list of publictions, podcasts and blogs.
     *
     * @see https://api.glitch.fun/api/documentation#/Newsletters/downloadMarketingChecklists
     *
     * @param data The data to be passed when creating a team.
     *
     * @returns Promise
     */
    static downloadMarketingChecklist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Join the marketing course waitlist.
     *
     * @param data { name, email, game, topics[] }
     * @returns Promise
     */
    static joinCourseWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Newsletters;
