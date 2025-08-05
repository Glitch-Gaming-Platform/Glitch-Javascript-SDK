import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class WebsiteAnalyticsRoute {
  public static routes: { [key: string]: Route } = {
    listSessions: {
      url: '/analytics/sessions',
      method: HTTP_METHODS.GET
    },
    listPageviews: {
      url: '/analytics/pageviews',
      method: HTTP_METHODS.GET
    },
    listEvents: {
      url: '/analytics/events',
      method: HTTP_METHODS.GET
    },
    overview: {
      url: '/analytics/overview',
      method: HTTP_METHODS.GET
    },
    collect: {
      url: '/analytics/collect',
      method: HTTP_METHODS.POST
    },
    sessionsAverage: {
      url: '/analytics/sessions/average',
      method: HTTP_METHODS.GET
    },
    sessionsHistogram: {
      url: '/analytics/sessions/histogram',
      method: HTTP_METHODS.GET
    },
    pageviewsOverTime: {
      url: '/analytics/pageviews/over-time',
      method: HTTP_METHODS.GET
    },
    topPages: {
      url: '/analytics/pageviews/top-pages',
      method: HTTP_METHODS.GET
    },
    eventsSummary: {
      url: '/analytics/events/summary',
      method: HTTP_METHODS.GET
    },
    popularEvents: {
      url: '/analytics/events/popular',
      method: HTTP_METHODS.GET
    },
    geoDistribution: {
      url: '/analytics/geo-distribution',
      method: HTTP_METHODS.GET
    },
    deviceBreakdown: {
      url: '/analytics/device-breakdown',
      method: HTTP_METHODS.GET
    },
    referrers: {
      url: '/analytics/referrers',
      method: HTTP_METHODS.GET
    },
    utmPerformance: {
      url: '/analytics/utm-performance',
      method: HTTP_METHODS.GET
    },
    journey: {  
      url: '/analytics/journey',  
      method: HTTP_METHODS.GET  
    }
    
  };
}

export default WebsiteAnalyticsRoute;