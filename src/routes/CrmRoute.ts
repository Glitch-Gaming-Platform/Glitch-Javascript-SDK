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