// src/routes/SocialStatsRoute.ts
import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class SocialStatsRoute {
    
    public static routes: { [key: string]: Route } = {
        /**
         * Retrieve a list of social statistics with optional filters.
         * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics
         */
        getStats: { url: '/socialstats', method: HTTP_METHODS.GET },

        /**
         * Retrieve platform-level statistics (e.g., average followers).
         * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/platformStatistics
         */
        getPlatformStatistics: { url: '/socialstats/statistics', method: HTTP_METHODS.GET },

        /**
         * Generate reports with various insights based on report_type and filters.
         * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/reports
         */
        getReports: { url: '/socialstats/reports', method: HTTP_METHODS.GET },

        /**
         * Retrieve a single social media account statistic record by its ID.
         * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/show
         */
        getStatById: { url: '/socialstats/{id}', method: HTTP_METHODS.GET },
    };

}

export default SocialStatsRoute;
