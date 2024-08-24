import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class InfluencerRoutes {

  public static routes: { [key: string]: Route } = {
    addInfluencer : { url: '/influencers', method: HTTP_METHODS.POST },
    listInfluencers: { url: '/influencers', method: HTTP_METHODS.GET },
    viewInfluencer: { url: '/influencers/{influencer_id}', method: HTTP_METHODS.GET },
    generateProfile: { url: '/influencers/{influencer_id}/generateProfile', method: HTTP_METHODS.POST },
    listNotes: { url: '/influencers/{influencer_id}/notes', method: HTTP_METHODS.GET },
    viewNote: { url: '/influencers/{influencer_id}/notes/{note_id}', method: HTTP_METHODS.GET },
    createNote: { url: '/influencers/{influencer_id}/notes', method: HTTP_METHODS.POST },
    updateNote: { url: '/influencers/{influencer_id}/notes/{note_id}', method: HTTP_METHODS.PUT },
    deleteNote: { url: '/influencers/{influencer_id}/notes/{note_id}', method: HTTP_METHODS.DELETE },
    listContracts: { url: '/influencers/contracts', method: HTTP_METHODS.GET },
  };

}

export default InfluencerRoutes;