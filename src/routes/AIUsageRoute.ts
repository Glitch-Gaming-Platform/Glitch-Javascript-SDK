import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class AIUsageRoute {
  public static routes: { [key: string]: Route } = {
    listUsage: { url: '/billing/ai-usage', method: HTTP_METHODS.GET },
    summaryUsage: { url: '/billing/ai-usage/summary', method: HTTP_METHODS.GET }
  };
}

export default AIUsageRoute;
