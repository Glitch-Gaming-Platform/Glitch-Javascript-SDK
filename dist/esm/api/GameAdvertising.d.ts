import { AxiosPromise } from 'axios';
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
    format: 'banner' | 'video' | 'interstitial' | 'rewarded' | 'in_game_image' | 'in_game_video' | 'other';
    /** Normalized SDK/ad lifecycle event. */
    event_type: 'sdk_ready' | 'request_started' | 'loaded' | 'channel_registered' | 'measurement' | 'no_fill' | 'fallback_shown' | 'started' | 'impression' | 'viewable' | 'clicked' | 'completed' | 'skipped' | 'closed' | 'paused_game' | 'resumed_game' | 'error';
    /** Optional provider-native event or impression identifier. */
    provider_event_id?: string;
    /** Non-sensitive provider diagnostics and event context. */
    metadata?: Record<string, any>;
    /** ISO 8601 client-observed timestamp. Defaults to server receipt time. */
    occurred_at?: string;
}
/** Provider-neutral intrinsic-ad surface declared by a game developer. */
export interface GameInGameAdPlacement {
    id?: string;
    title_id?: string;
    provider?: 'anzu';
    placement_key: string;
    channel_name: string;
    surface_type: 'mesh' | 'sprite' | 'ui_image' | 'raw_image' | 'html' | 'electron_shell';
    scene_name?: string | null;
    aspect_ratio: number;
    allow_images: boolean;
    allow_videos: boolean;
    allow_audio?: boolean;
    is_dynamic: boolean;
    is_clickable: boolean;
    shrink_to_fit: boolean;
    fallback_media_url?: string | null;
    status: 'active' | 'disabled';
    metadata?: Record<string, any> | null;
}
/** Public delivery identity for a provider and runtime platform. */
export interface GameAdProviderApp {
    id?: string;
    title_id?: string | null;
    provider: 'anzu';
    platform: 'web' | 'electron_macos' | 'electron_windows' | 'electron_linux' | 'unity_webgl' | 'cocos_web' | 'construct_web';
    app_key: string;
    bundle_id?: string | null;
    mode: 'integration' | 'production';
    integration_type: 'managed' | 'direct';
    status: 'active' | 'disabled' | 'pending';
    metadata?: Record<string, any> | null;
}
/**
 * Typed client for platform-served game advertising.
 *
 * These endpoints manage publisher inventory displayed around playable games;
 * they are intentionally separate from APIs used to buy advertising campaigns.
 */
declare class GameAdvertising {
    /** Return developer-visible ad-earnings settings for a title. */
    static settings<T>(title_id: string): AxiosPromise<Response<T>>;
    /** Update developer ad-earnings activation and optional title provider ID. */
    static updateSettings<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    /** Resolve ad eligibility and create an expiring provider manifest/session. */
    static createSession<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    /** Store one normalized, idempotent event for an advertising session. */
    static storeEvent<T>(title_id: string, session_id: string, data: GameAdEventPayload): AxiosPromise<Response<T>>;
    /** Return developer-visible estimated/finalized earnings and delivery totals. */
    static revenueSummary<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Return every intrinsic-ad surface configured for a title. */
    static inGamePlacements<T>(title_id: string): AxiosPromise<Response<T>>;
    /** Atomically replace a title's provider-neutral intrinsic-ad surfaces. */
    static replaceInGamePlacements<T>(title_id: string, placements: GameInGameAdPlacement[]): AxiosPromise<Response<T>>;
    /** Return site-admin delivery settings, aggregate metrics, and recent revenue. */
    static adminDashboard<T>(): AxiosPromise<Response<T>>;
    /** Partially update platform-wide providers and delivery frequency. */
    static adminUpdateSettings<T>(data: object): AxiosPromise<Response<T>>;
    /** Import or reconcile one provider revenue report row. */
    static adminStoreRevenue<T>(data: object): AxiosPromise<Response<T>>;
    /** Return public provider app keys and platform mappings for site admins. */
    static adminProviderApps<T>(): AxiosPromise<Response<T>>;
    /** Create or update a provider app mapping without accepting report secrets. */
    static adminUpsertProviderApp<T>(data: GameAdProviderApp): AxiosPromise<Response<T>>;
}
export default GameAdvertising;
