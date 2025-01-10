// src/routes/FunnelRoutes.tsx

import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class FunnelRoutes {
  public static routes: { [key: string]: Route } = {
    index: { url: '/funnels', method: HTTP_METHODS.GET },
    funnel: { url: '/funnels/funnel', method: HTTP_METHODS.GET },
    metrics: { url: '/funnels/metrics', method: HTTP_METHODS.GET },
    stages: { url: '/funnels/stages', method: HTTP_METHODS.GET },
    daily: { url: '/funnels/daily', method: HTTP_METHODS.GET },
    monthly: { url: '/funnels/monthly', method: HTTP_METHODS.GET },
    yearly: { url: '/funnels/yearly', method: HTTP_METHODS.GET },
    gamify: { url: '/funnels/gamify', method: HTTP_METHODS.GET },
  };
}

export default FunnelRoutes;
