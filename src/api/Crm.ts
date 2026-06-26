import CrmRoute from "../routes/CrmRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Crm {
    /**
     * List and search CRM leads.
     */
    public static listLeads<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.listLeads, undefined, undefined, params);
    }

    /**
     * Manually create a new lead.
     */
    public static createLead<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.createLead, data);
    }

    /**
     * View a single lead with contacts and activity timeline.
     */
    public static viewLead<T>(lead_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.viewLead, {}, { lead_id });
    }

    /**
     * Update lead information.
     */
    public static updateLead<T>(lead_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.updateLead, data, { lead_id });
    }

    /**
     * Delete a lead (Soft Delete).
     */
    public static deleteLead<T>(lead_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.deleteLead, {}, { lead_id });
    }

    /**
     * Assign a Super Admin as the owner of a lead.
     */
    public static assignOwner<T>(lead_id: string, user_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.assignOwner, { user_id }, { lead_id });
    }

    /**
     * Manually trigger Apollo enrichment and website scraping for a lead.
     */
    public static enrichLead<T>(lead_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.enrichLead, {}, { lead_id });
    }

    /**
     * Approve a specific contact to start the Apollo email sequence.
     */
    public static approveContact<T>(contact_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.approveContact, {}, { contact_id });
    }

    /**
     * Manually update the pipeline status of a lead.
     */
    public static updateStatus<T>(lead_id: string, status: string, note?: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.updateStatus, { status, note }, { lead_id });
    }

    /**
     * Add a manual note to the lead's activity timeline.
     */
    public static addNote<T>(lead_id: string, content: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.addNote, { content }, { lead_id });
    }

    /**
     * Manually add a contact person to a lead.
     */
    public static addContact<T>(lead_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.addContact, data, { lead_id });
    }

    /**
     * Mark a lead as lost and record the reason.
     */
    public static markAsLost<T>(lead_id: string, reason: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.markAsLost, { reason }, { lead_id });
    }

    /**
     * Record that a staff member has manually replied to a prospect.
     */
    public static recordStaffReply<T>(lead_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.recordStaffReply, {}, { lead_id });
    }

    /**
     * Approve a batch of contacts for outreach.
     */
    public static bulkApprove<T>(contact_ids: string[]): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.bulkApprove, { contact_ids });
    }

    /**
     * Manually trigger the bi-weekly sourcing automation.
     */
    public static triggerSourcing<T>(): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.triggerSourcing, {});
    }

    /**
     * Manually trigger the Apollo status and conversion sync.
     */
    public static triggerSync<T>(): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.triggerSync, {});
    }

    /**
     * Get funnel conversion percentages.
     */
    public static getFunnelStats<T>(): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.funnelStats);
    }

    /**
     * Get win rates and response time analytics.
     */
    public static getPerformanceStats<T>(): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.performanceStats);
    }

    /**
     * Get the analytics on what users indcated they were interested in.
     */
    public static getInterestStats<T>(): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.getInterestStats);
    }

     /**
     * Update an existing contact's information.
     */
    public static updateContact<T>(contact_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.updateContact, data, { contact_id });
    }

    /**
     * Remove a contact from a lead.
     */
    public static deleteContact<T>(contact_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.deleteContact, {}, { contact_id });
    }

    /**
     * List CRM newsletter and mass-email campaigns.
     */
    public static listCampaigns<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.listCampaigns, undefined, undefined, params);
    }

    /**
     * Create a CRM campaign draft with filters, exclusions, and optional variants.
     */
    public static createCampaign<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.createCampaign, data);
    }

    /**
     * View a CRM campaign. Pass include_recipients in params for a small recipient sample.
     */
    public static viewCampaign<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.viewCampaign, {}, { campaign_id }, params);
    }

    /**
     * Update an editable CRM campaign draft or paused campaign.
     */
    public static updateCampaign<T>(campaign_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.updateCampaign, data, { campaign_id });
    }

    /**
     * Delete an unsent CRM campaign draft.
     */
    public static deleteCampaign<T>(campaign_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.deleteCampaign, {}, { campaign_id });
    }

    /**
     * Preview campaign audience filters and exclusions without creating recipients.
     */
    public static previewCampaignAudience<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.previewCampaignAudience, data);
    }

    /**
     * Read CRM campaign queue depth and Azure/system email rate-limit windows.
     */
    public static getCampaignDeliveryStatus<T>(): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.getCampaignDeliveryStatus);
    }

    /**
     * Materialize and queue a CRM campaign, optionally with a limit or dispatch=false.
     */
    public static sendCampaign<T>(campaign_id: string, data: object = {}): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.sendCampaign, data, { campaign_id });
    }

    /**
     * Refresh and read CRM campaign engagement, reply, and conversion stats.
     */
    public static getCampaignStats<T>(campaign_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.getCampaignStats, {}, { campaign_id });
    }

    /**
     * List campaign recipient audit rows with optional status or variant filters.
     */
    public static listCampaignRecipients<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.listCampaignRecipients, {}, { campaign_id }, params);
    }

    /**
     * Validate external prospect rows and preview field mapping/dedupe outcomes.
     */
    public static previewCampaignProspectImport<T>(prospects: object[], options: Record<string, any> = {}): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.previewCampaignProspectImport, { prospects, ...options });
    }

    /**
     * Import external prospects into CRM leads and contacts for future campaigns.
     */
    public static importCampaignProspects<T>(prospects: object[], options: Record<string, any> = {}): AxiosPromise<Response<T>> {
        return Requests.processRoute(CrmRoute.routes.importCampaignProspects, { prospects, ...options });
    }

}

export default Crm;
