import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class CampaignsRoute {
    
    public static routes: { [key: string]: Route } = {
      listCampaigns: { url: '/campaigns', method: HTTP_METHODS.GET },
      createCampaign: { url: '/campaigns', method: HTTP_METHODS.POST  },
      viewCampaign : { url: '/campaigns/{campaign_id}', method: HTTP_METHODS.GET  },
      updateCampaign  :{ url: '/campaigns/{campaign_id}', method: HTTP_METHODS.PUT  },
      deleteCampaign  :{ url: '/campaigns/{campaign_id}', method: HTTP_METHODS.DELETE  },
      listCampaignLinks  :{ url: '/campaigns/{campaign_id}/links', method: HTTP_METHODS.DELETE },
      createCampaignLink  :{ url: '/campaigns/{campaign_id}/links', method: HTTP_METHODS.POST },
      getCampaignLink  :{ url: '/campaigns/{campaign_id}/links/{link_id}', method: HTTP_METHODS.GET },
      updateCampaignLink  :{ url: '/campaigns/{campaign_id}/links/{link_id}', method: HTTP_METHODS.PUT },
      createInfluencerCampaign  :{ url: '/campaigns/{campaign_id}/influencers', method: HTTP_METHODS.POST },
      listInfluencerCampaigns  :{ url: '/campaigns/influencers', method: HTTP_METHODS.GET },
      viewInfluencerCampaign  :{ url: '/campaigns/{campaign_id}/influencers/{user_id}', method: HTTP_METHODS.GET },
      updateInfluencerCampaign  :{ url: '/campaigns/{campaign_id}/influencers/{user_id}', method: HTTP_METHODS.PUT },
      markInfluencerCampaignComplete  :{ url: '/campaigns/{campaign_id}/influencers/{user_id}/setComplete', method: HTTP_METHODS.POST },
      markInfluencerCampaignIncomplete  :{ url: '/campaigns/{campaign_id}/influencers/{user_id}/setIncomplete', method: HTTP_METHODS.POST },
      listInfluencerCampaignLinks  :{ url: '/campaigns/{campaign_id}/influencers/{user_id}/links', method: HTTP_METHODS.GET },    
    };

  }

  export default CampaignsRoute;