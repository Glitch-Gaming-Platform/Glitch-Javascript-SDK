import AgentsRoute from "../routes/AgentsRoute";
import Requests from "../util/Requests";
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

class Agents {
  /**
   * List game titles that can be managed in the Agents section.
   */
  public static listTitles<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.listTitles, {}, {}, params);
  }

  /**
   * List title-agent subscriptions linked to titles in a community.
   */
  public static listCommunitySubscriptions<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.listCommunitySubscriptions, {}, { community_id }, params);
  }

  /**
   * Cancel a title-agent subscription linked to a community title.
   */
  public static cancelCommunitySubscription<T>(community_id: string, stripe_subscription_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.cancelCommunitySubscription, {}, { community_id, stripe_subscription_id }, params);
  }

  /**
   * Return the full Laravel API route catalog agents use for route-aware planning.
   */
  public static routeCatalog<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.routeCatalog, {}, {}, params);
  }

  /**
   * Get a title-scoped agent workspace with setup, billing, counts, and route summary.
   */
  public static workspace<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.workspace, {}, { title_id }, params);
  }

  /**
   * List agents for a title.
   */
  public static listAgents<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.listAgents, {}, { title_id }, params);
  }

  /**
   * Create an agent before payment. Runs/results remain gated until subscription or prepaid credits.
   */
  public static createAgent<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.createAgent, data, { title_id }, params);
  }

  /**
   * View one agent.
   */
  public static viewAgent<T>(title_id: string, agent_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.viewAgent, {}, { title_id, agent_id }, params);
  }

  /**
   * Update an agent's setup, policies, and guidance stop rules.
   */
  public static updateAgent<T>(title_id: string, agent_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.updateAgent, data, { title_id, agent_id }, params);
  }

  /**
   * Archive an agent.
   */
  public static deleteAgent<T>(title_id: string, agent_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.deleteAgent, {}, { title_id, agent_id }, params);
  }

  /**
   * Run an agent planning cycle. Returns 402 when subscription or prepaid credits are required.
   */
  public static runAgent<T>(title_id: string, agent_id: string, data?: AgentRunRequest, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.runAgent, data, { title_id, agent_id }, params);
  }

  /**
   * Upload one file for an agent run. data can include { agent_run_id }.
   */
  public static uploadAgentFile<T>(
    title_id: string,
    agent_id: string,
    file: File | Blob,
    data?: object,
    params?: Record<string, any>,
    onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
  ): AxiosPromise<Response<T>> {
    const url = AgentsRoute.routes.uploadAgentFiles.url
      .replace("{title_id}", title_id)
      .replace("{agent_id}", agent_id);

    return Requests.uploadFile(url, "file", file, data, params, onUploadProgress);
  }

  /**
   * Alias for callers that use plural naming while uploading one file at a time.
   */
  public static uploadAgentFiles<T>(
    title_id: string,
    agent_id: string,
    file: File | Blob,
    data?: object,
    params?: Record<string, any>,
    onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
  ): AxiosPromise<Response<T>> {
    return Agents.uploadAgentFile(title_id, agent_id, file, data, params, onUploadProgress);
  }

  /**
   * List agent runs for a title.
   */
  public static listRuns<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.listRuns, {}, { title_id }, params);
  }

  /**
   * View one durable agent run, including events, files, actions, and guidance when loaded by the API.
   */
  public static viewRun<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.viewRun, {}, { title_id, run_id }, params);
  }

  /**
   * List real-time user-visible events for an agent run.
   */
  public static listRunEvents<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.listRunEvents, {}, { title_id, run_id }, params);
  }

  /**
   * Mark a queued or running agent run as being watched live so the UI can stream the loop
   * and the backend can avoid sending delayed background summaries to active viewers.
   */
  public static heartbeatRun<T>(title_id: string, run_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.heartbeatRun, data || {}, { title_id, run_id }, params);
  }

  /**
   * Request cancellation for a queued or running agent run.
   */
  public static cancelRun<T>(title_id: string, run_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.cancelRun, data || {}, { title_id, run_id }, params);
  }

  /**
   * Send a course correction to a queued or running agent run.
   */
  public static interjectRun<T>(title_id: string, run_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.interjectRun, data || {}, { title_id, run_id }, params);
  }

  /**
   * List agent actions/approval queue for a title.
   */
  public static listActions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.listActions, {}, { title_id }, params);
  }

  /**
   * Approve an agent action.
   */
  public static approveAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.approveAction, data || {}, { title_id, action_id }, params);
  }

  /**
   * Reject an agent action.
   */
  public static rejectAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.rejectAction, data || {}, { title_id, action_id }, params);
  }

  /**
   * Execute an approved safe action.
   */
  public static executeAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.executeAction, data || {}, { title_id, action_id }, params);
  }

  /**
   * List guidance requests where agents have stopped for developer direction.
   */
  public static listGuidance<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.listGuidance, {}, { title_id }, params);
  }

  /**
   * Answer a guidance request and write structured agent memory.
   */
  public static answerGuidance<T>(title_id: string, guidance_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.answerGuidance, data, { title_id, guidance_id }, params);
  }

  /**
   * Rewrite an editable agent draft for review without executing the parent action.
   */
  public static rewriteAgentDraft<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.rewriteAgentDraft, data, { title_id }, params);
  }

  /**
   * List structured agent memories for a title.
   */
  public static listMemories<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.listMemories, {}, { title_id }, params);
  }

  /**
   * Get results and outcome summary for title agents. Returns 402 until subscription or prepaid credits are active.
   */
  public static results<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.results, {}, { title_id }, params);
  }

  /**
   * Get this title's agent usage against plan limits (agents used/included, monthly runs, and
   * AI dollars spent vs the configured monthly AI budget). Powers usage meters and limit warnings.
   */
  public static usage<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.usage, {}, { title_id }, params);
  }

  /**
   * Get the prepaid agent credit balance and ledger (Pay-As-You-Go plan).
   */
  public static credits<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.credits, {}, { title_id }, params);
  }

  /**
   * Buy prepaid agent credits (Pay-As-You-Go). Charges the card up front; the agent draws down
   * credits per run and stops when they run out. data: { paymentMethod, amount_usd }.
   */
  public static purchaseCredits<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.purchaseCredits, data, { title_id }, params);
  }

  /**
   * Start a Stripe-backed agent subscription after setup.
   */
  public static startTrial<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.startTrial, data, { title_id }, params);
  }

  /**
   * List social/ad schedulers. Useful when agent setup needs to attach to an existing workflow.
   */
  public static listSchedulers<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.listSchedulers, {}, {}, params);
  }

  /**
   * Create a scheduler inline from an agent setup flow.
   */
  public static createScheduler<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.createScheduler, data || {}, {}, params);
  }

  /**
   * Cross-title agency cockpit: per-title agent status, billing/credits, and portfolio totals.
   */
  public static agencyOverview<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.agencyOverview, {}, {}, params);
  }

  /**
   * Unified cross-title "needs you" inbox (open guidance + pending approvals across all titles).
   */
  public static agencyInbox<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(AgentsRoute.routes.agencyInbox, {}, {}, params);
  }
}

export default Agents;
