import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class InfluencerRoutes {

  public static routes: { [key: string]: Route } = {
    listInfluencers: { url: '/influencers', method: HTTP_METHODS.GET },
    viewInfluencer: { url: '/influencers/{influencer_id}', method: HTTP_METHODS.GET },
  };

}

export default InfluencerRoutes;