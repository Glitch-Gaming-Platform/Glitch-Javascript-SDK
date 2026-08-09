import HTTP_METHODS from '../constants/HttpMethods';
import Route from './interface';

class GameDesignRoute {
  public static routes: { [key: string]: Route } = {
    generateBlueprint: {
      url: '/tools/game-design/blueprint',
      method: HTTP_METHODS.POST,
    },
  };
}

export default GameDesignRoute;
