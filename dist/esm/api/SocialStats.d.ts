import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class SocialStats {
    /**
     * List all the social media account statistics, with optional filters.
     * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics
     *
     * @param params Optional query parameters:
     *  - platform (string | string[]): Filter by platform(s)
     *  - start_date (string): Filter records created on or after this date (YYYY-MM-DD)
     *  - end_date (string): Filter records created on or before this date (YYYY-MM-DD)
     *  - user_id (string): Filter by user ID
     *  - title_promotion_schedule_id (string): Filter by TitlePromotionSchedule ID
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get platform-level statistics, such as average follower count per platform.
     * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/platformStatistics
     *
     * @returns promise
     */
    static platformStatistics<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Generate various reports for social media account statistics.
     * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/reports
     *
     * @param params Query parameters:
     *  - report_type (string): Required (e.g. average_followers, growth, platform_breakdown)
     *  - platform (string or string[]): Filter by platform(s)
     *  - start_date (string): Filter from date (YYYY-MM-DD)
     *  - end_date (string): Filter to date (YYYY-MM-DD)
     *  - user_id (string): Filter by user ID
     *  - title_promotion_schedule_id (string): Filter by schedule ID
     *
     * @returns promise
     */
    static reports<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single social media account statistic record by its ID.
     * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/show
     *
     * @param id The ID of the statistic record.
     * @returns promise
     */
    static view<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default SocialStats;
