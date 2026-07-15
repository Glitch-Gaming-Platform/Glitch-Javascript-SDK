import { AxiosPromise } from 'axios';
import GameAdvertisingRoute from '../routes/GameAdvertisingRoute';
import Requests from '../util/Requests';
import Response from '../util/Response';

export interface GameAdEventPayload {
  /** Opaque token returned by the server-created advertising manifest. */
  token: string;
  /** Client idempotency UUID. Reuse is valid only within the same ad session. */
  event_uuid?: string;
  /** Provider that produced or attempted the event. */
  provider: string;
  /** Stable Glitch placement name, such as game_banner or game_video. */
  placement: string;
  /** Normalized creative/ad format. */
  format: 'banner' | 'video' | 'interstitial' | 'rewarded' | 'other';
  /** Normalized SDK/ad lifecycle event. */
  event_type: 'sdk_ready' | 'request_started' | 'loaded' | 'no_fill' | 'started' | 'impression' | 'viewable' | 'clicked' | 'completed' | 'skipped' | 'closed' | 'paused_game' | 'resumed_game' | 'error';
  /** Optional provider-native event or impression identifier. */
  provider_event_id?: string;
  /** Non-sensitive provider diagnostics and event context. */
  metadata?: Record<string, any>;
  /** ISO 8601 client-observed timestamp. Defaults to server receipt time. */
  occurred_at?: string;
}

/**
 * Typed client for platform-served game advertising.
 *
 * These endpoints manage publisher inventory displayed around playable games;
 * they are intentionally separate from APIs used to buy advertising campaigns.
 */
class GameAdvertising {
  /** Return developer-visible ad-earnings settings for a title. */
  public static settings<T>(title_id: string): AxiosPromise<Response<T>> {
    return Requests.processRoute(GameAdvertisingRoute.routes.settings, undefined, { title_id });
  }

  /** Update developer ad-earnings activation and optional title provider ID. */
  public static updateSettings<T>(title_id: string, data: object): AxiosPromise<Response<T>> {
    return Requests.processRoute(GameAdvertisingRoute.routes.updateSettings, data, { title_id });
  }

  /** Resolve ad eligibility and create an expiring provider manifest/session. */
  public static createSession<T>(title_id: string, data: object): AxiosPromise<Response<T>> {
    return Requests.processRoute(GameAdvertisingRoute.routes.createSession, data, { title_id });
  }

  /** Store one normalized, idempotent event for an advertising session. */
  public static storeEvent<T>(title_id: string, session_id: string, data: GameAdEventPayload): AxiosPromise<Response<T>> {
    return Requests.processRoute(GameAdvertisingRoute.routes.storeEvent, data, { title_id, session_id });
  }

  /** Return developer-visible estimated/finalized earnings and delivery totals. */
  public static revenueSummary<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(GameAdvertisingRoute.routes.revenueSummary, undefined, { title_id }, params);
  }

  /** Return site-admin delivery settings, aggregate metrics, and recent revenue. */
  public static adminDashboard<T>(): AxiosPromise<Response<T>> {
    return Requests.processRoute(GameAdvertisingRoute.routes.adminDashboard);
  }

  /** Partially update platform-wide providers and delivery frequency. */
  public static adminUpdateSettings<T>(data: object): AxiosPromise<Response<T>> {
    return Requests.processRoute(GameAdvertisingRoute.routes.adminUpdateSettings, data);
  }

  /** Import or reconcile one provider revenue report row. */
  public static adminStoreRevenue<T>(data: object): AxiosPromise<Response<T>> {
    return Requests.processRoute(GameAdvertisingRoute.routes.adminStoreRevenue, data);
  }
}

export default GameAdvertising;
