import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Funnel {
    /**
     * Get funnel metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with funnel metrics data
     */
    static index<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get funnel-optimized metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_funnel
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with funnel data optimized for visual funnels
     */
    static funnel<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get available metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_metrics
     *
     * @returns Promise with list of available metrics
     */
    static metrics<T>(): AxiosPromise<Response<T>>;
    /**
     * Get available stages.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_stages
     *
     * @returns Promise with list of available stages
     */
    static stages<T>(): AxiosPromise<Response<T>>;
    /**
     * Get daily funnel metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_daily
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with daily funnel metrics data
     */
    static daily<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get monthly funnel metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_monthly
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with monthly funnel metrics data
     */
    static monthly<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get yearly funnel metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_yearly
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with yearly funnel metrics data
     */
    static yearly<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get gamified funnel metrics with recommended targets, scores, and ranks.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_gamify
     *
     * @param params Query parameters (title_id, community_id, start_date, end_date)
     * @returns Promise with the gamified funnel data
     */
    static gamify<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Funnel;
