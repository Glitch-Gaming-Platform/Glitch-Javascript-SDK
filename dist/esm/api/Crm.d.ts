import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Crm {
    /**
     * List and search CRM leads.
     */
    static listLeads<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Manually create a new lead.
     */
    static createLead<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * View a single lead with contacts and activity timeline.
     */
    static viewLead<T>(lead_id: string): AxiosPromise<Response<T>>;
    /**
     * Update lead information.
     */
    static updateLead<T>(lead_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Delete a lead (Soft Delete).
     */
    static deleteLead<T>(lead_id: string): AxiosPromise<Response<T>>;
    /**
     * Assign a Super Admin as the owner of a lead.
     */
    static assignOwner<T>(lead_id: string, user_id: string): AxiosPromise<Response<T>>;
    /**
     * Manually trigger Apollo enrichment and website scraping for a lead.
     */
    static enrichLead<T>(lead_id: string): AxiosPromise<Response<T>>;
    /**
     * Approve a specific contact to start the Apollo email sequence.
     */
    static approveContact<T>(contact_id: string): AxiosPromise<Response<T>>;
    /**
     * Manually update the pipeline status of a lead.
     */
    static updateStatus<T>(lead_id: string, status: string, note?: string): AxiosPromise<Response<T>>;
    /**
     * Add a manual note to the lead's activity timeline.
     */
    static addNote<T>(lead_id: string, content: string): AxiosPromise<Response<T>>;
    /**
     * Manually add a contact person to a lead.
     */
    static addContact<T>(lead_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Mark a lead as lost and record the reason.
     */
    static markAsLost<T>(lead_id: string, reason: string): AxiosPromise<Response<T>>;
    /**
     * Record that a staff member has manually replied to a prospect.
     */
    static recordStaffReply<T>(lead_id: string): AxiosPromise<Response<T>>;
    /**
     * Approve a batch of contacts for outreach.
     */
    static bulkApprove<T>(contact_ids: string[]): AxiosPromise<Response<T>>;
    /**
     * Manually trigger the bi-weekly sourcing automation.
     */
    static triggerSourcing<T>(): AxiosPromise<Response<T>>;
    /**
     * Manually trigger the Apollo status and conversion sync.
     */
    static triggerSync<T>(): AxiosPromise<Response<T>>;
    /**
     * Get funnel conversion percentages.
     */
    static getFunnelStats<T>(): AxiosPromise<Response<T>>;
    /**
     * Get win rates and response time analytics.
     */
    static getPerformanceStats<T>(): AxiosPromise<Response<T>>;
    /**
     * Get the analytics on what users indcated they were interested in.
     */
    static getInterestStats<T>(): AxiosPromise<Response<T>>;
}
export default Crm;
