import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

/**
 * Glitch MCP paid facade (/mcp/v1).
 *
 * Mirrors the routes served by McpAgentController. These endpoints authenticate
 * with either a Glitch user JWT or a title-scoped MCP token and keep all planner,
 * billing, and executor logic server-side. The public @glitch/mcp adapter calls
 * the same endpoints; this SDK surface lets first-party TypeScript clients reuse them.
 */
class McpRoute {
  public static routes: { [key: string]: Route } = {
    authStatus: { url: "/mcp/v1/auth/status", method: HTTP_METHODS.GET },
    listTitles: { url: "/mcp/v1/titles", method: HTTP_METHODS.GET },
    titleContext: { url: "/mcp/v1/titles/{title_id}/context", method: HTTP_METHODS.GET },
    billing: { url: "/mcp/v1/titles/{title_id}/billing", method: HTTP_METHODS.GET },
    startRun: { url: "/mcp/v1/titles/{title_id}/runs", method: HTTP_METHODS.POST },
    viewRun: { url: "/mcp/v1/titles/{title_id}/runs/{run_id}", method: HTTP_METHODS.GET },
    runEvents: { url: "/mcp/v1/titles/{title_id}/runs/{run_id}/events", method: HTTP_METHODS.GET },
    streamRun: { url: "/mcp/v1/titles/{title_id}/runs/{run_id}/stream", method: HTTP_METHODS.GET },
    finalReport: { url: "/mcp/v1/titles/{title_id}/runs/{run_id}/report", method: HTTP_METHODS.GET },
    artifacts: { url: "/mcp/v1/titles/{title_id}/runs/{run_id}/artifacts", method: HTTP_METHODS.GET },
    listActions: { url: "/mcp/v1/titles/{title_id}/actions", method: HTTP_METHODS.GET },
    approveAction: { url: "/mcp/v1/titles/{title_id}/actions/{action_id}/approve", method: HTTP_METHODS.POST },
    rejectAction: { url: "/mcp/v1/titles/{title_id}/actions/{action_id}/reject", method: HTTP_METHODS.POST },
    executeAction: { url: "/mcp/v1/titles/{title_id}/actions/{action_id}/execute", method: HTTP_METHODS.POST },
    listGuidance: { url: "/mcp/v1/titles/{title_id}/guidance", method: HTTP_METHODS.GET },
    answerGuidance: { url: "/mcp/v1/titles/{title_id}/guidance/{guidance_id}/answer", method: HTTP_METHODS.POST },
    createUpload: { url: "/mcp/v1/titles/{title_id}/uploads", method: HTTP_METHODS.POST },
    uploadFile: { url: "/mcp/v1/titles/{title_id}/files", method: HTTP_METHODS.POST },
    listTokens: { url: "/mcp/v1/titles/{title_id}/tokens", method: HTTP_METHODS.GET },
    createToken: { url: "/mcp/v1/titles/{title_id}/tokens", method: HTTP_METHODS.POST },
    revokeToken: { url: "/mcp/v1/titles/{title_id}/tokens/{token_id}", method: HTTP_METHODS.DELETE },
  };
}

export default McpRoute;
