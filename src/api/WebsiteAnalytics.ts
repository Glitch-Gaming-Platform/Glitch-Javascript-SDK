import WebsiteAnalyticsRoute from "../routes/WebsiteAnalyticsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class WebsiteAnalytics {
  /**
   * List website analytics sessions with comprehensive filtering
   * 
   * @param params Filtering options:
   *   - title_id?: string - Filter by title ID
   *   - start_date?: string - Start date (YYYY-MM-DD)
   *   - end_date?: string - End date (YYYY-MM-DD)
   *   - device_type?: 'desktop'|'mobile'|'tablet'|'bot'|'other'
   *   - country_code?: string - 2-letter country code
   *   - is_bot?: boolean - Filter by bot status
   *   - sort?: 'started_at'|'total_duration'|'pageview_count' - Sort field
   *   - order?: 'asc'|'desc' - Sort order
   *   - per_page?: number - Items per page (max 100)
   * @returns Promise with paginated sessions data
   */
  public static listSessions<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      WebsiteAnalyticsRoute.routes.listSessions,
      {},
      undefined,
      params
    );
  }

  /**
   * Get a paginated list of pageviews with filtering options
   * 
   * @param params Filtering options:
   *   - title_id?: string - Filter by title ID
   *   - analytics_session_id?: string - Filter by session ID
   *   - start_date?: string - Start date (YYYY-MM-DD)
   *   - end_date?: string - End date (YYYY-MM-DD)
   *   - is_exit?: boolean - Filter by exit pageviews
   *   - sort?: 'occurred_at'|'load_time_ms'|'dom_complete_ms' - Sort field
   *   - order?: 'asc'|'desc' - Sort order
   *   - per_page?: number - Items per page (max 100)
   * @returns Promise with paginated pageviews data
   */
  public static listPageviews<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      WebsiteAnalyticsRoute.routes.listPageviews,
      {},
      undefined,
      params
    );
  }

  /**
   * Get a paginated list of events with filtering options
   * 
   * @param params Filtering options:
   *   - title_id?: string - Filter by title ID
   *   - analytics_session_id?: string - Filter by session ID
   *   - event_name?: string - Filter by event name
   *   - event_category?: string - Filter by event category
   *   - start_date?: string - Start date (YYYY-MM-DD)
   *   - end_date?: string - End date (YYYY-MM-DD)
   *   - sort?: 'occurred_at'|'event_name' - Sort field
   *   - order?: 'asc'|'desc' - Sort order
   *   - per_page?: number - Items per page (max 100)
   * @returns Promise with paginated events data
   */
  public static listEvents<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      WebsiteAnalyticsRoute.routes.listEvents,
      {},
      undefined,
      params
    );
  }

  /**
   * Get an analytics overview with summarized metrics
   * 
   * @param params Overview options:
   *   - title_id: string - Required title ID
   *   - start_date?: string - Start date (YYYY-MM-DD)
   *   - end_date?: string - End date (YYYY-MM-DD)
   *   - group_by?: 'day'|'week'|'month'|'year' - Grouping period
   *   - include_breakdowns?: boolean - Include detailed breakdowns
   * @returns Promise with overview data
   */
  public static overview<T>(params: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      WebsiteAnalyticsRoute.routes.overview,
      {},
      undefined,
      params
    );
  }

  /**
   * Single ingestion endpoint for sessions, pageviews and events
   * 
   * @param data Analytics data payload with type property:
   *   - type: 'session'|'pageview'|'event' - Type of analytics data
   *   - title_id: string - Title ID
   *   - tracking_token: string - HMAC token for verification
   *   - plus type-specific fields
   * @returns Promise with acceptance response
   */
  public static collect<T>(data: object): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      WebsiteAnalyticsRoute.routes.collect,
      data
    );
  }

  /**
   * Get average session length data with optional grouping
   * 
   * @param params Filtering options:
   *   - title_id?: string - Filter by title ID
   *   - start_date?: string - Start date (YYYY-MM-DD)
   *   - end_date?: string - End date (YYYY-MM-DD)
   *   - group_by?: 'day'|'week'|'month' - Grouping period
   *   - device_type?: string - Filter by device type
   *   - country_code?: string - Filter by country
   * @returns Promise with average session data
   */
  public static sessionsAverage<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      WebsiteAnalyticsRoute.routes.sessionsAverage,
      {},
      undefined,
      params
    );
  }

  /**
   * Get session duration histogram data
   * 
   * @param params Filtering options:
   *   - title_id?: string - Filter by title ID
   *   - start_date?: string - Start date (YYYY-MM-DD)
   *   - end_date?: string - End date (YYYY-MM-DD)
   *   - bucket_size?: number - Duration bucket size in seconds
   * @returns Promise with histogram data
   */
  public static sessionsHistogram<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      WebsiteAnalyticsRoute.routes.sessionsHistogram,
      {},
      undefined,
      params
    );
  }

  /**
   * Get pageviews over time with optional grouping
   * 
   * @param params Filtering options:
   *   - title_id?: string - Filter by title ID
   *   - start_date?: string - Start date (YYYY-MM-DD)
   *   - end_date?: string - End date (YYYY-MM-DD)
   *   - group_by?: 'hour'|'day'|'week'|'month' - Grouping period
   *   - path?: string - Filter by specific path
   * @returns Promise with pageviews over time data
   */
  public static pageviewsOverTime<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      WebsiteAnalyticsRoute.routes.pageviewsOverTime,
      {},
      undefined,
      params
    );
  }

  /**
   * Get top pages by views
   * 
   * @param params Filtering options:
   *   - title_id?: string - Filter by title ID
   *   - start_date?: string - Start date (YYYY-MM-DD)
   *   - end_date?: string - End date (YYYY-MM-DD)
   *   - limit?: number - Number of top pages to return
   * @returns Promise with top pages data
   */
  public static topPages<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      WebsiteAnalyticsRoute.routes.topPages,
      {},
      undefined,
      params
    );
  }

  /**
   * Get summary of events
   * 
   * @param params Filtering options:
   *   - title_id?: string - Filter by title ID
   *   - start_date?: string - Start date (YYYY-MM-DD)
   *   - end_date?: string - End date (YYYY-MM-DD)
   *   - event_category?: string - Filter by event category
   * @returns Promise with events summary data
   */
  public static eventsSummary<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      WebsiteAnalyticsRoute.routes.eventsSummary,
      {},
      undefined,
      params
    );
  }

  /**
   * Get most popular events
   * 
   * @param params Filtering options:
   *   - title_id?: string - Filter by title ID
   *   - start_date?: string - Start date (YYYY-MM-DD)
   *   - end_date?: string - End date (YYYY-MM-DD)
   *   - limit?: number - Number of events to return
   * @returns Promise with popular events data
   */
  public static popularEvents<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      WebsiteAnalyticsRoute.routes.popularEvents,
      {},
      undefined,
      params
    );
  }

  /**
   * Get geographic distribution of visitors
   * 
   * @param params Filtering options:
   *   - title_id?: string - Filter by title ID
   *   - start_date?: string - Start date (YYYY-MM-DD)
   *   - end_date?: string - End date (YYYY-MM-DD)
   *   - limit?: number - Number of countries to return
   * @returns Promise with geo distribution data
   */
  public static geoDistribution<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      WebsiteAnalyticsRoute.routes.geoDistribution,
      {},
      undefined,
      params
    );
  }

  /**
   * Get device type breakdown
   * 
   * @param params Filtering options:
   *   - title_id?: string - Filter by title ID
   *   - start_date?: string - Start date (YYYY-MM-DD)
   *   - end_date?: string - End date (YYYY-MM-DD)
   * @returns Promise with device breakdown data
   */
  public static deviceBreakdown<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      WebsiteAnalyticsRoute.routes.deviceBreakdown,
      {},
      undefined,
      params
    );
  }

  /**
   * Get top referrers
   * 
   * @param params Filtering options:
   *   - title_id?: string - Filter by title ID
   *   - start_date?: string - Start date (YYYY-MM-DD)
   *   - end_date?: string - End date (YYYY-MM-DD)
   *   - limit?: number - Number of referrers to return
   * @returns Promise with referrers data
   */
  public static referrers<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      WebsiteAnalyticsRoute.routes.referrers,
      {},
      undefined,
      params
    );
  }

  /**
   * Get UTM campaign performance
   * 
   * @param params Filtering options:
   *   - title_id?: string - Filter by title ID
   *   - start_date?: string - Start date (YYYY-MM-DD)
   *   - end_date?: string - End date (YYYY-MM-DD)
   *   - group_by?: 'source'|'medium'|'campaign' - Grouping field
   * @returns Promise with UTM performance data
   */
  public static utmPerformance<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(
      WebsiteAnalyticsRoute.routes.utmPerformance,
      {},
      undefined,
      params
    );
  }

  /**  
   * Get a combined user journey across short link clicks, web sessions, game installations, etc.  
   *  
   * @param params Filtering options. All are optional except `title_id`.  
   *   - title_id: string                   Required. The UUID of the title to unify user events.  
   *   - device_id?: string                Filter by device ID  
   *   - session_id?: string               Filter by session ID  
   *   - short_link_click_id?: string      Filter by short link click ID  
   *   - user_install_id?: string          Filter by game install user_install_id  
   *   - browser_fingerprint?: string      Filter by browser fingerprint hash  
   *   - hardware_fingerprint?: string     Filter by hardware fingerprint hash  
   *   - start_date?: string               Optional. Start date (YYYY-MM-DD) if your API supports time limiting  
   *   - end_date?: string                 Optional. End date (YYYY-MM-DD) if your API supports time limiting  
   *  
   * @returns Promise with a unified timeline of the user’s journey, in chronological order.  
   */  
  public static userJourney<T>(params: Record<string, any>): AxiosPromise<Response<T>> {  
    return Requests.processRoute(  
      WebsiteAnalyticsRoute.routes.journey, // references our new route definition  
      {}, // no body data (GET request)  
      undefined,  
      params  
    );  
  }  
}

export default WebsiteAnalytics;