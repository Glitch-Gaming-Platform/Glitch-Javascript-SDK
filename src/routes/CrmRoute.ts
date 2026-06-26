import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class CrmRoute {
  public static routes: { [key: string]: Route } = {
    // Lead Management
    listLeads: { url: '/admin/crm/leads', method: HTTP_METHODS.GET },
    createLead: { url: '/admin/crm/leads', method: HTTP_METHODS.POST },
    viewLead: { url: '/admin/crm/leads/{lead_id}', method: HTTP_METHODS.GET },
    updateLead: { url: '/admin/crm/leads/{lead_id}', method: HTTP_METHODS.PUT },
    deleteLead: { url: '/admin/crm/leads/{lead_id}', method: HTTP_METHODS.DELETE },

    // Pipeline Actions
    assignOwner: { url: '/admin/crm/leads/{lead_id}/assign', method: HTTP_METHODS.POST },
    enrichLead: { url: '/admin/crm/leads/{lead_id}/enrich', method: HTTP_METHODS.POST },
    approveContact: { url: '/admin/crm/contacts/{contact_id}/approve', method: HTTP_METHODS.POST },
    updateStatus: { url: '/admin/crm/leads/{lead_id}/status', method: HTTP_METHODS.POST },
    addNote: { url: '/admin/crm/leads/{lead_id}/notes', method: HTTP_METHODS.POST },
    addContact: { url: '/admin/crm/leads/{lead_id}/contacts', method: HTTP_METHODS.POST },
    markAsLost: { url: '/admin/crm/leads/{lead_id}/lost', method: HTTP_METHODS.POST },
    recordStaffReply: { url: '/admin/crm/leads/{lead_id}/replied', method: HTTP_METHODS.POST },
    bulkApprove: { url: '/admin/crm/contacts/bulk-approve', method: HTTP_METHODS.POST },

    updateContact: { url: '/admin/crm/contacts/{contact_id}', method: HTTP_METHODS.PUT },
    deleteContact: { url: '/admin/crm/contacts/{contact_id}', method: HTTP_METHODS.DELETE },

    // Newsletter and Campaign Management
    listCampaigns: { url: '/admin/crm/campaigns', method: HTTP_METHODS.GET },
    createCampaign: { url: '/admin/crm/campaigns', method: HTTP_METHODS.POST },
    viewCampaign: { url: '/admin/crm/campaigns/{campaign_id}', method: HTTP_METHODS.GET },
    updateCampaign: { url: '/admin/crm/campaigns/{campaign_id}', method: HTTP_METHODS.PUT },
    deleteCampaign: { url: '/admin/crm/campaigns/{campaign_id}', method: HTTP_METHODS.DELETE },
    previewCampaignAudience: { url: '/admin/crm/campaigns/preview', method: HTTP_METHODS.POST },
    getCampaignFilterOptions: { url: '/admin/crm/campaigns/filter-options', method: HTTP_METHODS.GET },
    getCampaignMergeFields: { url: '/admin/crm/campaigns/merge-fields', method: HTTP_METHODS.GET },
    renderCampaignTemplatePreview: { url: '/admin/crm/campaigns/render-preview', method: HTTP_METHODS.POST },
    sendCampaignTestEmail: { url: '/admin/crm/campaigns/test-email', method: HTTP_METHODS.POST },
    getCampaignDeliveryStatus: { url: '/admin/crm/campaigns/delivery-status', method: HTTP_METHODS.GET },
    sendCampaign: { url: '/admin/crm/campaigns/{campaign_id}/send', method: HTTP_METHODS.POST },
    getCampaignStats: { url: '/admin/crm/campaigns/{campaign_id}/stats', method: HTTP_METHODS.GET },
    listCampaignRecipients: { url: '/admin/crm/campaigns/{campaign_id}/recipients', method: HTTP_METHODS.GET },
    previewCampaignProspectImport: { url: '/admin/crm/campaigns/import-prospects/preview', method: HTTP_METHODS.POST },
    importCampaignProspects: { url: '/admin/crm/campaigns/import-prospects', method: HTTP_METHODS.POST },
    listEmailProviderAddresses: { url: '/admin/crm/email-provider-addresses', method: HTTP_METHODS.GET },
    getEmailProviderAddressOptions: { url: '/admin/crm/email-provider-addresses/options', method: HTTP_METHODS.GET },
    createEmailProviderAddress: { url: '/admin/crm/email-provider-addresses', method: HTTP_METHODS.POST },
    updateEmailProviderAddress: { url: '/admin/crm/email-provider-addresses/{address_id}', method: HTTP_METHODS.PUT },
    deactivateEmailProviderAddress: { url: '/admin/crm/email-provider-addresses/{address_id}', method: HTTP_METHODS.DELETE },

    // Automation Triggers
    triggerSourcing: { url: '/admin/crm/automation/source', method: HTTP_METHODS.POST },
    triggerSync: { url: '/admin/crm/automation/sync', method: HTTP_METHODS.POST },

    // Analytics
    funnelStats: { url: '/admin/crm/analytics/funnel', method: HTTP_METHODS.GET },
    performanceStats: { url: '/admin/crm/analytics/performance', method: HTTP_METHODS.GET },
    getInterestStats: { url: '/admin/crm/analytics/interests', method: HTTP_METHODS.GET },
  };
}

export default CrmRoute;
