import McpRoute from "../routes/McpRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise, AxiosProgressEvent } from "axios";

export interface McpStartRunRequest {
  agent_id?: string | null;
  initial_message?: string | null;
  prompt?: string | null;
  run_type?: string;
  trigger_source?: string;
  background?: boolean;
  live_mode?: boolean;
  attachment_ids?: string[];
  [key: string]: any;
}

/**
 * Client for the Glitch MCP paid facade (/mcp/v1).
 *
 * Authenticate with a Glitch user JWT or a title-scoped MCP token. The facade
 * enforces subscription, title permissions, scope, and approval guardrails on
 * every call; this client only forwards requests.
 */
class Mcp {
  /** Health/auth probe. Returns authenticated=false (200) when no credential is set. */
  public static authStatus<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.authStatus, {}, {}, params);
  }

  /** List titles visible to the current user token or title-scoped MCP token. */
  public static listTitles<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.listTitles, {}, {}, params);
  }

  /** Fetch safe, subscription-gated workspace context for a title. */
  public static titleContext<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.titleContext, {}, { title_id }, params);
  }

  /** Check subscription, trial, plan, and credit state for a title. */
  public static billing<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.billing, {}, { title_id }, params);
  }

  /** Start a paid Glitch Agent run for a title. */
  public static startRun<T>(title_id: string, data?: McpStartRunRequest, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.startRun, data ?? {}, { title_id }, params);
  }

  /** Fetch a durable run with status, actions, guidance, events, files, and report. */
  public static viewRun<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.viewRun, {}, { title_id, run_id }, params);
  }

  /** List user-visible timeline events for a run. */
  public static runEvents<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.runEvents, {}, { title_id, run_id }, params);
  }

  /** Fetch the human-friendly final or partial report for a run. */
  public static finalReport<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.finalReport, {}, { title_id, run_id }, params);
  }

  /**
   * Server-Sent Events URL for a run's live event stream.
   *
   * Returns the absolute URL to open with an EventSource/fetch reader; the
   * endpoint emits `status`, `run_event`, and a terminal `settled`/`timeout` event.
   */
  public static runStreamUrl(title_id: string, run_id: string, params?: Record<string, any>): string {
    const url = McpRoute.routes.streamRun.url
      .replace("{title_id}", encodeURIComponent(title_id))
      .replace("{run_id}", encodeURIComponent(run_id));
    return Requests.buildUrl(url, params);
  }

  /** List downloadable files and hosted report artifacts for a run. */
  public static artifacts<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.artifacts, {}, { title_id, run_id }, params);
  }

  /** List proposed/guidance/approval/executed actions for a title. */
  public static listActions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.listActions, {}, { title_id }, params);
  }

  /** Approve a reviewable action. Execution remains guarded server-side. */
  public static approveAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.approveAction, data ?? {}, { title_id, action_id }, params);
  }

  /** Reject a proposed or approval-needed action. */
  public static rejectAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.rejectAction, data ?? {}, { title_id, action_id }, params);
  }

  /** Execute an approved action. Public/paid/creator-facing work stays guarded. */
  public static executeAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.executeAction, data ?? {}, { title_id, action_id }, params);
  }

  /** List open or answered guidance requests for a title or run. */
  public static listGuidance<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.listGuidance, {}, { title_id }, params);
  }

  /** Answer a guidance request and resume the server-side workflow when possible. */
  public static answerGuidance<T>(title_id: string, guidance_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.answerGuidance, data ?? {}, { title_id, guidance_id }, params);
  }

  /** Get instructions for uploading a file (points at uploadFile below). */
  public static createUpload<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.createUpload, data ?? {}, { title_id }, params);
  }

  /**
   * Upload a file (image, video, or document) to a title or run as multipart/form-data.
   * The facade re-checks the title scope, subscription, and allowed mime types.
   */
  public static uploadFile<T>(
    title_id: string,
    file: File | Blob,
    data?: object,
    params?: Record<string, any>,
    onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
  ): AxiosPromise<Response<T>> {
    const url = McpRoute.routes.uploadFile.url.replace("{title_id}", title_id);
    return Requests.uploadFile(url, "file", file, data, params, onUploadProgress);
  }

  /** List MCP title tokens (user JWT only). */
  public static listTokens<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.listTokens, {}, { title_id }, params);
  }

  /** Create a revocable title-scoped MCP token (user JWT only). */
  public static createToken<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.createToken, data ?? {}, { title_id }, params);
  }

  /** Revoke a title-scoped MCP token (user JWT only). */
  public static revokeToken<T>(title_id: string, token_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(McpRoute.routes.revokeToken, {}, { title_id, token_id }, params);
  }
}

export default Mcp;
