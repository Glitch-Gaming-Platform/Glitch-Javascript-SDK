import Route from './interface';
import HTTP_METHODS from '../constants/HttpMethods';

class GameAdvertisingRoute {
  /**
   * Route templates for publisher game-ad inventory, telemetry, earnings, and
   * site administration. Placeholders are expanded by Requests.processRoute.
   */
  public static routes: { [key: string]: Route } = {
    settings: { url: '/titles/{title_id}/advertising/settings', method: HTTP_METHODS.GET },
    updateSettings: { url: '/titles/{title_id}/advertising/settings', method: HTTP_METHODS.PUT },
    createSession: { url: '/titles/{title_id}/advertising/sessions', method: HTTP_METHODS.POST },
    storeEvent: { url: '/titles/{title_id}/advertising/sessions/{session_id}/events', method: HTTP_METHODS.POST },
    revenueSummary: { url: '/titles/{title_id}/advertising/revenue-summary', method: HTTP_METHODS.GET },
    inGamePlacements: { url: '/titles/{title_id}/advertising/in-game/placements', method: HTTP_METHODS.GET },
    replaceInGamePlacements: { url: '/titles/{title_id}/advertising/in-game/placements', method: HTTP_METHODS.PUT },
    adminDashboard: { url: '/admin/game-advertising', method: HTTP_METHODS.GET },
    adminUpdateSettings: { url: '/admin/game-advertising/settings', method: HTTP_METHODS.PUT },
    adminStoreRevenue: { url: '/admin/game-advertising/revenue', method: HTTP_METHODS.POST },
    adminProviderApps: { url: '/admin/game-advertising/provider-apps', method: HTTP_METHODS.GET },
    adminUpsertProviderApp: { url: '/admin/game-advertising/provider-apps', method: HTTP_METHODS.PUT },
  };
}

export default GameAdvertisingRoute;
