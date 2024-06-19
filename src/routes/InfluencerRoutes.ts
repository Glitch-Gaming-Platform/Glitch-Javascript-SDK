import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class InfluencerRoutes {

  public static routes: { [key: string]: Route } = {
    listInfluencers: { url: '/influencers', method: HTTP_METHODS.GET },
    viewInfluencer: { url: '/influencers/{influencer_id}', method: HTTP_METHODS.GET },
    generateProfile: { url: '/influencers/{influencer_id}/generateProfile', method: HTTP_METHODS.POST },

  };

}

export default InfluencerRoutes;