// src/controllers/Funnel.tsx

import FunnelRoutes from "../routes/FunnelRoutes";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Funnel {
  /**
   * Get funnel metrics.
   * 
   * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels
   * 
   * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
   * @returns Promise with funnel metrics data
   */
  public static index<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(FunnelRoutes.routes.index, undefined, undefined, params);
  }

  /**
   * Get funnel-optimized metrics.
   * 
   * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_funnel
   * 
   * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
   * @returns Promise with funnel data optimized for visual funnels
   */
  public static funnel<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(FunnelRoutes.routes.funnel, undefined, undefined, params);
  }

  /**
   * Get available metrics.
   * 
   * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_metrics
   * 
   * @returns Promise with list of available metrics
   */
  public static metrics<T>(): AxiosPromise<Response<T>> {
    return Requests.processRoute(FunnelRoutes.routes.metrics);
  }

  /**
   * Get available stages.
   * 
   * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_stages
   * 
   * @returns Promise with list of available stages
   */
  public static stages<T>(): AxiosPromise<Response<T>> {
    return Requests.processRoute(FunnelRoutes.routes.stages);
  }

  /**
   * Get daily funnel metrics.
   * 
   * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_daily
   * 
   * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
   * @returns Promise with daily funnel metrics data
   */
  public static daily<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(FunnelRoutes.routes.daily, undefined, undefined, params);
  }

  /**
   * Get monthly funnel metrics.
   * 
   * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_monthly
   * 
   * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
   * @returns Promise with monthly funnel metrics data
   */
  public static monthly<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(FunnelRoutes.routes.monthly, undefined, undefined, params);
  }

  /**
   * Get yearly funnel metrics.
   * 
   * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_yearly
   * 
   * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
   * @returns Promise with yearly funnel metrics data
   */
  public static yearly<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(FunnelRoutes.routes.yearly, undefined, undefined, params);
  }

  /**
   * Get gamified funnel metrics with recommended targets, scores, and ranks.
   * 
   * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_gamify
   * 
   * @param params Query parameters (title_id, community_id, start_date, end_date)
   * @returns Promise with the gamified funnel data
   */
  public static gamify<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(FunnelRoutes.routes.gamify, undefined, undefined, params);
  }

   /**
   * Get comprehensive funnel diagnostic report.
   * 
   * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_diagnostic
   * 
   * @param params Query parameters:
   *  - title_id (string): Required
   *  - start_date (string): Required (YYYY-MM-DD)
   *  - end_date (string): Required (YYYY-MM-DD)
   *  - group_by (string): Optional ('none', 'platform', 'utm_source')
   * 
   * @returns Promise with diagnostic data including conversion rates, costs, and health indicators
   */
  public static diagnostic<T>(params: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(FunnelRoutes.routes.diagnostic, undefined, undefined, params);
  }
  
}

export default Funnel;
