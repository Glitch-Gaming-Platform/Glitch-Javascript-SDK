import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class WebsiteAnalytics {
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
    static listSessions<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static listPageviews<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static listEvents<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static overview<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
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
    static collect<T>(data: object): AxiosPromise<Response<T>>;
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
    static sessionsAverage<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static sessionsHistogram<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static pageviewsOverTime<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static topPages<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static eventsSummary<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static popularEvents<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static geoDistribution<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get device type breakdown
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     * @returns Promise with device breakdown data
     */
    static deviceBreakdown<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static referrers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static utmPerformance<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default WebsiteAnalytics;
