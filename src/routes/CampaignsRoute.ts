import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class CampaignsRoute {
    
    public static routes: { [key: string]: Route } = {
      listCampaigns: { url: '/campaigns', method: HTTP_METHODS.GET },
      createCampaign: { url: '/campaigns', method: HTTP_METHODS.POST  },
      viewCampaign : { url: '/campaigns/{campaign_id}', method: HTTP_METHODS.GET  },
      updateCampaign  :{ url: '/campaigns/{campaign_id}', method: HTTP_METHODS.PUT  },
      deleteCampaign  :{ url: '/campaigns/{campaign_id}', method: HTTP_METHODS.DELETE  },
      listCampaignLinks  :{ url: '/campaigns/{campaign_id}/links', method: HTTP_METHODS.GET },
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
      listCampaignMentions  :{ url: '/campaigns/{campaign_id}/mentions', method: HTTP_METHODS.GET },
      createCampaignMention  :{ url: '/campaigns/{campaign_id}/mentions', method: HTTP_METHODS.POST },
      getCampaignMention  :{ url: '/campaigns/{campaign_id}/mentions/{mention_id}', method: HTTP_METHODS.GET },
      updateCampaignMention  :{ url: '/campaigns/{campaign_id}/mentions/{mention_id}', method: HTTP_METHODS.PUT },
      deleteCampaignMention  :{ url: '/campaigns/{campaign_id}/mentions/{mention_id}', method: HTTP_METHODS.DELETE },
      addCountry : { url: '/users/addCountry', method: HTTP_METHODS.POST },
      removeCountry : { url: '/users/removeCountry/{country_id}', method: HTTP_METHODS.DELETE },   
      addGender : { url: '/users/addGender', method: HTTP_METHODS.POST },
      removeGender : { url: '/users/removeGender/{gender_id}', method: HTTP_METHODS.DELETE },
      addEthnicity : { url: '/users/addEthnicity', method: HTTP_METHODS.POST },
      removeEthnicity : { url: '/users/removeEthnicity/{ethnicity_id}', method: HTTP_METHODS.DELETE },          
    };

  }

  export default CampaignsRoute;