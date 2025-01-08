import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class GamesRoutes {

  public static routes: { [key: string]: Route } = {
    listGames: { url: '/games', method: HTTP_METHODS.GET },
    viewGame: { url: '/games/{game_id}', method: HTTP_METHODS.GET },
    createCampaignData: { url: '/games/{game_id}/generateCampaign', method: HTTP_METHODS.POST },
    createCampaignWithTitle: { url: '/games/{game_id}/generateCampaignWithTitle', method: HTTP_METHODS.POST },
    createGameTitle: { url: '/games/{game_id}/generateTitle', method: HTTP_METHODS.POST },
    createGameScheduler: { url: '/games/{game_id}/generateScheduler', method: HTTP_METHODS.POST },

  };

}

export default GamesRoutes;