import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Fingerprinting {
    /**
     * List identified user fingerprints with filtering options
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - device_id?: string - Filter by device ID
     *   - user_install_id?: string - Filter by user install ID
     *   - browser_fingerprint?: string - Filter by browser fingerprint hash
     *   - device_fingerprint?: string - Filter by device fingerprint hash
     *   - is_bot?: boolean - Filter by bot status
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - sort?: 'first_seen_at'|'last_seen_at'|'match_confidence' - Sort field
     *   - order?: 'asc'|'desc' - Sort order
     *   - per_page?: number - Items per page (max 100)
     * @returns Promise with paginated fingerprints data
     */
    static listFingerprints<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get cross-platform user journey reports
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - fingerprint_id?: string - Specific fingerprint ID to analyze
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - platform?: 'web'|'ios'|'android'|'steam'|'console' - Filter by platform
     *   - event_type?: string - Filter by event type
     *   - group_by?: 'day'|'week'|'month'|'year' - Grouping period
     *   - include_paths?: boolean - Include journey paths in response
     * @returns Promise with user journey report data
     */
    static userJourneyReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get cross-platform attribution reports
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - conversion_event?: 'game_install'|'game_purchase'|'web_event' - Conversion event to analyze
     *   - attribution_model?: 'first_touch'|'last_touch'|'linear'|'time_decay'|'position_based' - Attribution model
     * @returns Promise with attribution report data
     */
    static attributionReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get cross-device identity clusters
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - min_confidence?: number - Minimum match confidence score (0-100)
     * @returns Promise with device cluster report data
     */
    static deviceClusterReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get combined identity clusters and user journey reports
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - min_confidence?: number - Minimum confidence score to include (0-100)
     *   - platform?: string - Filter by platform
     *   - include_journeys?: boolean - Include detailed journeys
     * @returns Promise with identity cluster report data
     */
    static identityClusterReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get combined attribution paths and conversion funnels
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - conversion_event?: string - Conversion event type
     *   - attribution_model?: string - Attribution model
     *   - funnel_steps?: string - Comma-separated funnel steps
     * @returns Promise with attribution and funnel report data
     */
    static attributionFunnelReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get device and environment breakdown reports
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - platform?: string - Filter by platform
     *   - group_by?: 'device_type'|'os'|'browser'|'country_code' - Grouping field
     * @returns Promise with device and environment report data
     */
    static deviceEnvironmentReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get unique vs returning user metrics
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - retention_period?: number - Days to consider for retention
     * @returns Promise with retention metrics data
     */
    static uniqueReturningReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get fraud and bot detection metrics
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - min_confidence?: number - Minimum confidence score to flag (0-100)
     * @returns Promise with fraud detection data
     */
    static fraudDetectionReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get geolocation distribution of users
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'country'|'region'|'city' - Grouping level
     * @returns Promise with geolocation report data
     */
    static geolocationReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get pixel and utem reports
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'country'|'region'|'city' - Grouping level
     * @returns Promise with geolocation report data
     */
    static pixelAttributionReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get an understanding of the path people take to install your game
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'country'|'region'|'city' - Grouping level
     * @returns Promise with geolocation report data
     */
    static installJourneyReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Fingerprinting;
