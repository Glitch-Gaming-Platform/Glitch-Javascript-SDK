import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class NewslettersRoutes {

  public static routes: { [key: string]: Route } = {
    downloadMarketingChecklist: { url: '/newsletters/downloadMarketingChecklist', method: HTTP_METHODS.POST },
    joinCourseWaitlist: { url: '/newsletters/joinCourseWaitlist', method: HTTP_METHODS.POST },
    joinRaffleWaitlist: { url: '/newsletters/joinRaffleWaitlist', method: HTTP_METHODS.POST },
    joinDiscordMarketplaceWaitlist: { url: '/newsletters/joinDiscordMarketplaceWaitlist', method: HTTP_METHODS.POST },

   // --- Admin Campaign Management ---
        listCampaigns: { url: '/admin/newsletters/campaigns', method: HTTP_METHODS.GET },
        createCampaign: { url: '/admin/newsletters/campaigns', method: HTTP_METHODS.POST },
        viewCampaign: { url: '/admin/newsletters/campaigns/{id}', method: HTTP_METHODS.GET },
        updateCampaign: { url: '/admin/newsletters/campaigns/{id}', method: HTTP_METHODS.PUT },
        deleteCampaign: { url: '/admin/newsletters/campaigns/{id}', method: HTTP_METHODS.DELETE },
        
        // --- Admin Campaign Actions & Analytics ---
        getCampaignStats: { url: '/admin/newsletters/campaigns/{id}/stats', method: HTTP_METHODS.GET },
        getCampaignLogs: { url: '/admin/newsletters/campaigns/{id}/logs', method: HTTP_METHODS.GET },
        sendCampaign: { url: '/admin/newsletters/campaigns/{id}/send', method: HTTP_METHODS.POST },
        sendTest: { url: '/admin/newsletters/campaigns/{id}/test', method: HTTP_METHODS.POST },

        // --- Admin Subscriber Management ---
        listSubscribers: { url: '/admin/newsletters/subscribers', method: HTTP_METHODS.GET },
        createSubscriber: { url: '/admin/newsletters/subscribers', method: HTTP_METHODS.POST },
        viewSubscriber: { url: '/admin/newsletters/subscribers/{id}', method: HTTP_METHODS.GET },
        updateSubscriber: { url: '/admin/newsletters/subscribers/{id}', method: HTTP_METHODS.PUT },
        deleteSubscriber: { url: '/admin/newsletters/subscribers/{id}', method: HTTP_METHODS.DELETE },
  };

}

export default NewslettersRoutes;