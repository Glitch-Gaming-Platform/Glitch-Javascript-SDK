import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class MarketResearchRoute {
  public static routes: { [key: string]: Route } = {
    access: { url: '/market-research/access', method: HTTP_METHODS.GET },
    filterOptions: { url: '/market-research/filter-options', method: HTTP_METHODS.GET },
    listGames: { url: '/market-research/games', method: HTTP_METHODS.GET },
    viewGame: { url: '/market-research/games/{game_id}', method: HTTP_METHODS.GET },
    exportGames: { url: '/market-research/games/export', method: HTTP_METHODS.GET },
    exportGame: { url: '/market-research/games/{game_id}/export', method: HTTP_METHODS.GET },
  };
}

export default MarketResearchRoute;
