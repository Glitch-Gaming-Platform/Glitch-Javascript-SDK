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
declare class Mcp {
    /** Health/auth probe. Returns authenticated=false (200) when no credential is set. */
    static authStatus<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** List titles visible to the current user token or title-scoped MCP token. */
    static listTitles<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Fetch safe, subscription-gated workspace context for a title. */
    static titleContext<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Check subscription, trial, plan, and credit state for a title. */
    static billing<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Start a paid Glitch Agent run for a title. */
    static startRun<T>(title_id: string, data?: McpStartRunRequest, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Fetch a durable run with status, actions, guidance, events, files, and report. */
    static viewRun<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** List user-visible timeline events for a run. */
    static runEvents<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Fetch the human-friendly final or partial report for a run. */
    static finalReport<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Server-Sent Events URL for a run's live event stream.
     *
     * Returns the absolute URL to open with an EventSource/fetch reader; the
     * endpoint emits `status`, `run_event`, and a terminal `settled`/`timeout` event.
     */
    static runStreamUrl(title_id: string, run_id: string, params?: Record<string, any>): string;
    /** List downloadable files and hosted report artifacts for a run. */
    static artifacts<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** List proposed/guidance/approval/executed actions for a title. */
    static listActions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Approve a reviewable action. Execution remains guarded server-side. */
    static approveAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Reject a proposed or approval-needed action. */
    static rejectAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Execute an approved action. Public/paid/creator-facing work stays guarded. */
    static executeAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** List open or answered guidance requests for a title or run. */
    static listGuidance<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Answer a guidance request and resume the server-side workflow when possible. */
    static answerGuidance<T>(title_id: string, guidance_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Get instructions for uploading a file (points at uploadFile below). */
    static createUpload<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Upload a file (image, video, or document) to a title or run as multipart/form-data.
     * The facade re-checks the title scope, subscription, and allowed mime types.
     */
    static uploadFile<T>(title_id: string, file: File | Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    /** List MCP title tokens (user JWT only). */
    static listTokens<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Create a revocable title-scoped MCP token (user JWT only). */
    static createToken<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Revoke a title-scoped MCP token (user JWT only). */
    static revokeToken<T>(title_id: string, token_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Mcp;
