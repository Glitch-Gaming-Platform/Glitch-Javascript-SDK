import Response from "../util/Response";
import { AxiosPromise, AxiosProgressEvent } from "axios";
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
    /**
    * Update an existing contact's information.
    */
    static updateContact<T>(contact_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Remove a contact from a lead.
     */
    static deleteContact<T>(contact_id: string): AxiosPromise<Response<T>>;
    /**
     * List CRM newsletter and mass-email campaigns.
     */
    static listCampaigns<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a CRM campaign draft with filters, exclusions, and optional variants.
     */
    static createCampaign<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * View a CRM campaign. Pass include_recipients in params for a small recipient sample.
     */
    static viewCampaign<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an editable CRM campaign draft or paused campaign.
     */
    static updateCampaign<T>(campaign_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Delete an unsent CRM campaign draft.
     */
    static deleteCampaign<T>(campaign_id: string): AxiosPromise<Response<T>>;
    /**
     * Preview campaign audience filters and exclusions without creating recipients.
     */
    static previewCampaignAudience<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * List human-readable filter options for the CRM campaign composer.
     */
    static getCampaignFilterOptions<T>(): AxiosPromise<Response<T>>;
    /**
     * List the backend-supported CRM campaign merge fields for the composer.
     */
    static getCampaignMergeFields<T>(): AxiosPromise<Response<T>>;
    /**
     * Render CRM campaign content with the same merge-field engine used at send time.
     */
    static renderCampaignTemplatePreview<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Send a non-tracked CRM campaign test email with rendered merge fields.
     */
    static sendCampaignTestEmail<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Read CRM campaign queue depth and Azure/system email rate-limit windows.
     */
    static getCampaignDeliveryStatus<T>(): AxiosPromise<Response<T>>;
    /**
     * Materialize and queue a CRM campaign, optionally with a limit or dispatch=false.
     */
    static sendCampaign<T>(campaign_id: string, data?: object): AxiosPromise<Response<T>>;
    /**
     * Refresh and read CRM campaign engagement, reply, and conversion stats.
     */
    static getCampaignStats<T>(campaign_id: string): AxiosPromise<Response<T>>;
    /**
     * List campaign recipient audit rows with optional status or variant filters.
     */
    static listCampaignRecipients<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Validate external prospect rows and preview field mapping/dedupe outcomes.
     */
    static previewCampaignProspectImport<T>(prospects: object[], options?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Import external prospects into CRM leads and contacts for future campaigns.
     */
    static importCampaignProspects<T>(prospects: object[], options?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Preview uploaded festival submission sheets without writing External Game or CRM records.
     */
    static previewFestivalSubmissionImport<T>(files: Array<File | Blob>, options?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    /**
     * Import uploaded festival submission sheets into External Games and CRM leads/contacts.
     */
    static importFestivalSubmissions<T>(files: Array<File | Blob>, options?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    /**
     * List saved recurring Google Sheet sources for festival submission imports.
     */
    static listFestivalSubmissionSources<T>(): AxiosPromise<Response<T>>;
    /**
     * Save a recurring Google Sheet source for festival submission imports.
     */
    static createFestivalSubmissionSource<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Update a recurring Google Sheet source for festival submission imports.
     */
    static updateFestivalSubmissionSource<T>(source_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Delete a recurring Google Sheet source for festival submission imports.
     */
    static deleteFestivalSubmissionSource<T>(source_id: string): AxiosPromise<Response<T>>;
    /**
     * List provider-managed sender and reply-to addresses for CRM campaigns.
     */
    static listEmailProviderAddresses<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List sender/reply-to dropdown options and defaults for the campaign composer.
     */
    static getEmailProviderAddressOptions<T>(): AxiosPromise<Response<T>>;
    /**
     * Add a provider-managed sender or reply-to address.
     */
    static createEmailProviderAddress<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Update provider verification, sendability, capabilities, defaults, or notes.
     */
    static updateEmailProviderAddress<T>(address_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Deactivate a provider address while keeping the audit record.
     */
    static deactivateEmailProviderAddress<T>(address_id: string): AxiosPromise<Response<T>>;
    private static festivalSubmissionFormData;
}
export default Crm;
