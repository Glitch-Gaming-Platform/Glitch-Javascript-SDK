import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class CommunitiesRoute {

  public static routes: { [key: string]: Route } = {
    list: { url: '/communities', method: HTTP_METHODS.GET },
    create: { url: '/communities', method: HTTP_METHODS.POST },
    view: { url: '/communities/{community_id}', method: HTTP_METHODS.GET },
    update: { url: '/communities/{community_id}', method: HTTP_METHODS.PUT },
    delete: { url: '/communities/{community_id}', method: HTTP_METHODS.DELETE },
    uploadLogo: { url: '/communities/{community_id}/uploadLogo', method: HTTP_METHODS.POST },
    uploadBannerImage: { url: '/communities/{community_id}/uploadBannerImage', method: HTTP_METHODS.POST },
    uploadVideoLogo: { url: '/communities/{community_id}/uploadVideoLogo', method: HTTP_METHODS.POST },
    listInvites: { url: '/communities/{community_id}/invites', method: HTTP_METHODS.GET },
    sendInvite: { url: '/communities/{community_id}/sendInvite', method: HTTP_METHODS.POST },
    acceptInvite: { url: '/communities/{community_id}/acceptInvite', method: HTTP_METHODS.POST },
    retrieveInvite: { url: '/communities/{community_id}/invites/{token}', method: HTTP_METHODS.GET },
    listUsers: { url: '/communities/{community_id}/users', method: HTTP_METHODS.GET },
    myInvites: { url: '/communities/invites/mine', method: HTTP_METHODS.GET },
    resendInvite: { url: '/communities/{community_id}/invites/{invite_id}/resend', method: HTTP_METHODS.POST },
    deleteInvite: { url: '/communities/{community_id}/invites/{invite_id}', method: HTTP_METHODS.DELETE },
    addUser: { url: '/communities/{community_id}/users', method: HTTP_METHODS.POST },
    showUser: { url: '/communities/{community_id}/users/{user_id}', method: HTTP_METHODS.GET },
    updateUser: { url: '/communities/{community_id}/users/{user_id}', method: HTTP_METHODS.PUT },
    removeUser: { url: '/communities/{community_id}/users/{user_id}', method: HTTP_METHODS.DELETE },
    join: { url: '/communities/{community_id}/join', method: HTTP_METHODS.POST },
    findByDomain: { url: '/communities/findByDomain/{domain}', method: HTTP_METHODS.GET },
    addPaymentMethod: { url: '/communities/{community_id}/payment/methods', method: HTTP_METHODS.POST },
    getPaymentMethods: { url: '/communities/{community_id}/payment/methods', method: HTTP_METHODS.GET },
    setDefaultPaymentMethod: { url: '/communities/{community_id}/payment/methods/default', method: HTTP_METHODS.POST },
    getLedger: { url: '/communities/{community_id}/payment/ledger', method: HTTP_METHODS.GET },
    clearDocusignAuth: { url: '/communities/{community_id}/clearDocusignAuth', method: HTTP_METHODS.DELETE },
    clearHellosignAuth: { url: '/communities/{community_id}/clearHellosignAuth', method: HTTP_METHODS.DELETE },
    clearSimplesignAuth: { url: '/communities/{community_id}/clearSimplesignAuth', method: HTTP_METHODS.DELETE },
    listEmailTemplates: { url: '/communities/{community_id}/emails/templates', method: HTTP_METHODS.GET },
    createEmailTemplate: { url: '/communities/{community_id}/emails/templates', method: HTTP_METHODS.POST },
    viewEmailTemplate: { url: '/communities/{community_id}/emails/templates/{template_id}', method: HTTP_METHODS.GET },
    updateEmailTemplate: { url: '/communities/{community_id}/emails/templates/{template_id}', method: HTTP_METHODS.PUT },
    deleteEmailTemplate: { url: '/communities/{community_id}/emails/templates/{template_id}', method: HTTP_METHODS.DELETE },
    populateEmailTemplate: { url: '/communities/{community_id}/emails/templates/{template_id}/populate', method: HTTP_METHODS.POST },

    // Newsletters
    listNewsletters: { url: '/communities/newsletters', method: HTTP_METHODS.GET },
    createNewsletter: { url: '/communities/{community_id}/newsletters', method: HTTP_METHODS.POST },
    viewNewsletter: { url: '/communities/{community_id}/newsletters/{newsletter_id}', method: HTTP_METHODS.GET },
    updateNewsletter: { url: '/communities/{community_id}/newsletters/{newsletter_id}', method: HTTP_METHODS.PUT },
    deleteNewsletter: { url: '/communities/{community_id}/newsletters/{newsletter_id}', method: HTTP_METHODS.DELETE },
    importNewsletterSubscribers: { url: '/communities/{community_id}/newsletters/{newsletter_id}/subscribers/import', method: HTTP_METHODS.POST },
    uploadNewsletterBannerImage: { url: '/communities/{community_id}/newsletters/{newsletter_id}/uploadBannerImage', method: HTTP_METHODS.POST },
    newsletterReports: {
      url: '/communities/{community_id}/newsletters/{newsletter_id}/reports',
      method: HTTP_METHODS.GET
    },
    newsletterCampaignReports: {
      url: '/communities/{community_id}/newsletters/{newsletter_id}/reports/campaign',
      method: HTTP_METHODS.GET
    },

    newsletterSubscriberTrend: {
      url: '/communities/{community_id}/newsletters/{newsletter_id}/reports/subscriber_trend',
      method: HTTP_METHODS.GET
    },

    exportNewsletterSubscribers: {
      url: '/communities/{community_id}/newsletters/{newsletter_id}/subscribers/export',
      method: HTTP_METHODS.POST
    },
    importGameInstalls: {
      url: '/communities/{community_id}/newsletters/{newsletter_id}/import_game_installs',
      method: HTTP_METHODS.POST
    },

    // Campaigns
    listCampaigns: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns', method: HTTP_METHODS.GET },
    createCampaign: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns', method: HTTP_METHODS.POST },
    viewCampaign: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns/{campaign_id}', method: HTTP_METHODS.GET },
    updateCampaign: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns/{campaign_id}', method: HTTP_METHODS.PUT },
    deleteCampaign: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns/{campaign_id}', method: HTTP_METHODS.DELETE },
    sendCampaign: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns/{campaign_id}/send', method: HTTP_METHODS.POST },
    scheduleCampaign: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns/{campaign_id}/schedule', method: HTTP_METHODS.POST },
    testCampaign: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns/{campaign_id}/test', method: HTTP_METHODS.POST },


    // Emails
    listCampaignEmails: { url: '/communities/{community_id}/newsletters/{newsletter_id}/campaigns/{campaign_id}/emails', method: HTTP_METHODS.GET },

    // Subscribers (admin routes)
    listNewsletterSubscribers: { url: '/communities/{community_id}/newsletters/{newsletter_id}/subscribers', method: HTTP_METHODS.GET },
    viewNewsletterSubscriber: { url: '/communities/{community_id}/newsletters/{newsletter_id}/subscribers/{subscriber_id}', method: HTTP_METHODS.GET },
    updateNewsletterSubscriber: { url: '/communities/{community_id}/newsletters/{newsletter_id}/subscribers/{subscriber_id}', method: HTTP_METHODS.PUT },
    deleteNewsletterSubscriber: { url: '/communities/{community_id}/newsletters/{newsletter_id}/subscribers/{subscriber_id}', method: HTTP_METHODS.DELETE },

    // Subscriber registration (open route)
    registerNewsletterSubscriber: { url: '/communities/{community_id}/newsletters/{newsletter_id}/subscribers', method: HTTP_METHODS.POST },

    createOneTimeInvoice: {
      url: '/communities/{community_id}/invoice-once',
      method: HTTP_METHODS.POST
    },
    // New Invoicing and Statement Routes
    listInvoices: {
      url: '/communities/{community_id}/payment/invoices',
      method: HTTP_METHODS.GET
    },
    getInvoiceDetails: {
      url: '/communities/{community_id}/payment/invoices/{invoice_id}',
      method: HTTP_METHODS.GET
    },
    getCustomStatement: {
      url: '/communities/{community_id}/payment/statement',
      method: HTTP_METHODS.GET
    },

    listSavedInfluencers: { url: '/communities/{community_id}/influencers', method: HTTP_METHODS.GET },
    saveInfluencerToPool: { url: '/communities/{community_id}/influencers', method: HTTP_METHODS.POST }

  };



}

export default CommunitiesRoute;