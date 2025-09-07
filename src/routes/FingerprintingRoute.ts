import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class FingerprintingRoute {
  public static routes: { [key: string]: Route } = {
    listFingerprints: {
      url: '/reports/fingerprinting/fingerprints',
      method: HTTP_METHODS.GET
    },
    userJourneyReport: {
      url: '/reports/fingerprinting/user-journeys',
      method: HTTP_METHODS.GET
    },
    attributionReport: {
      url: '/reports/fingerprinting/attribution',
      method: HTTP_METHODS.GET
    },
    deviceClusterReport: {
      url: '/reports/fingerprinting/device-clusters',
      method: HTTP_METHODS.GET
    },
    identityClusterReport: {
      url: '/reports/fingerprinting/identity-clusters',
      method: HTTP_METHODS.GET
    },
    attributionFunnelReport: {
      url: '/reports/fingerprinting/attribution-funnel',
      method: HTTP_METHODS.GET
    },
    deviceEnvironmentReport: {
      url: '/reports/fingerprinting/device-environment',
      method: HTTP_METHODS.GET
    },
    uniqueReturningReport: {
      url: '/reports/fingerprinting/unique-returning',
      method: HTTP_METHODS.GET
    },
    fraudDetectionReport: {
      url: '/reports/fingerprinting/fraud-detection',
      method: HTTP_METHODS.GET
    },
    geolocationReport: {
      url: '/reports/fingerprinting/geolocation',
      method: HTTP_METHODS.GET
    },
     pixelAttributionReport: {
      url: '/reports/fingerprinting/pixel-attribution',
      method: HTTP_METHODS.GET
    },
     installJourneyReport: {
      url: '/reports/fingerprinting/install-journey',
      method: HTTP_METHODS.GET
    },
     adCampaignPerformanceReport: {
      url: '/reports/fingerprinting/ad-campaign-performance',
      method: HTTP_METHODS.GET
    },
  };
}

export default FingerprintingRoute;