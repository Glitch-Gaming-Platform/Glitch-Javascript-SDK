import Response from "../util/Response";
import { AxiosPromise, AxiosProgressEvent } from "axios";
export interface AgentRunRequest {
    run_type?: string;
    trigger_source?: string;
    background?: boolean;
    inline?: boolean;
    live_mode?: boolean;
    initial_message?: string | null;
    attachment_ids?: string[];
    agent_run_id?: string | null;
    [key: string]: any;
}
declare class Agents {
    /**
     * List game titles that can be managed in the Agents section.
     */
    static listTitles<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Return the full Laravel API route catalog agents use for route-aware planning.
     */
    static routeCatalog<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a title-scoped agent workspace with setup, billing, counts, and route summary.
     */
    static workspace<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List agents for a title.
     */
    static listAgents<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create an agent before payment. Runs/results remain gated until subscription or prepaid credits.
     */
    static createAgent<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * View one agent.
     */
    static viewAgent<T>(title_id: string, agent_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an agent's setup, policies, and guidance stop rules.
     */
    static updateAgent<T>(title_id: string, agent_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Archive an agent.
     */
    static deleteAgent<T>(title_id: string, agent_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Run an agent planning cycle. Returns 402 when subscription or prepaid credits are required.
     */
    static runAgent<T>(title_id: string, agent_id: string, data?: AgentRunRequest, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Upload one file for an agent run. data can include { agent_run_id }.
     */
    static uploadAgentFile<T>(title_id: string, agent_id: string, file: File | Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    /**
     * Alias for callers that use plural naming while uploading one file at a time.
     */
    static uploadAgentFiles<T>(title_id: string, agent_id: string, file: File | Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    /**
     * List agent runs for a title.
     */
    static listRuns<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * View one durable agent run, including events, files, actions, and guidance when loaded by the API.
     */
    static viewRun<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List real-time user-visible events for an agent run.
     */
    static listRunEvents<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Mark a queued or running agent run as being watched live so the UI can stream the loop
     * and the backend can avoid sending delayed background summaries to active viewers.
     */
    static heartbeatRun<T>(title_id: string, run_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Request cancellation for a queued or running agent run.
     */
    static cancelRun<T>(title_id: string, run_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send a course correction to a queued or running agent run.
     */
    static interjectRun<T>(title_id: string, run_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List agent actions/approval queue for a title.
     */
    static listActions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Approve an agent action.
     */
    static approveAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Reject an agent action.
     */
    static rejectAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Execute an approved safe action.
     */
    static executeAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List guidance requests where agents have stopped for developer direction.
     */
    static listGuidance<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Answer a guidance request and write structured agent memory.
     */
    static answerGuidance<T>(title_id: string, guidance_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Rewrite an editable agent draft for review without executing the parent action.
     */
    static rewriteAgentDraft<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List structured agent memories for a title.
     */
    static listMemories<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get results and outcome summary for title agents. Returns 402 until subscription or prepaid credits are active.
     */
    static results<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get this title's agent usage against plan limits (agents used/included, monthly runs, and
     * AI dollars spent vs the configured monthly AI budget). Powers usage meters and limit warnings.
     */
    static usage<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the prepaid agent credit balance and ledger (Pay-As-You-Go plan).
     */
    static credits<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Buy prepaid agent credits (Pay-As-You-Go). Charges the card up front; the agent draws down
     * credits per run and stops when they run out. data: { paymentMethod, amount_usd }.
     */
    static purchaseCredits<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Start a Stripe-backed agent subscription after setup.
     */
    static startTrial<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List social/ad schedulers. Useful when agent setup needs to attach to an existing workflow.
     */
    static listSchedulers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a scheduler inline from an agent setup flow.
     */
    static createScheduler<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Cross-title agency cockpit: per-title agent status, billing/credits, and portfolio totals.
     */
    static agencyOverview<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Unified cross-title "needs you" inbox (open guidance + pending approvals across all titles).
     */
    static agencyInbox<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Agents;
