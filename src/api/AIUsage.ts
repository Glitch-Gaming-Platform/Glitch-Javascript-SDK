import AIUsageRoute from "../routes/AIUsageRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class AIUsage {
  /**
   * List all AI usage entries with optional filters (date range, service, model, etc.).
   * 
   * @see https://api.glitch.fun/api/documentation#/AI%20Usage/getAIUsage
   * 
   * @param params Query parameters for filtering and grouping
   * @returns AxiosPromise
   */
  public static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AIUsageRoute.routes.listUsage, undefined, undefined, params);
  }

  /**
   * Get summarized AI usage statistics (token totals, cost, grouped by service/model).
   * 
   * @see https://api.glitch.fun/api/documentation#/AI%20Usage/getAIUsageSummary
   * 
   * @param params Query parameters for filtering by date range
   * @returns AxiosPromise
   */
  public static summary<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AIUsageRoute.routes.summaryUsage, undefined, undefined, params);
  }
}

export default AIUsage;
