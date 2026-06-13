import Route from "./interface";
/**
 * Glitch MCP paid facade (/mcp/v1).
 *
 * Mirrors the routes served by McpAgentController. These endpoints authenticate
 * with either a Glitch user JWT or a title-scoped MCP token and keep all planner,
 * billing, and executor logic server-side. The public @glitch/mcp adapter calls
 * the same endpoints; this SDK surface lets first-party TypeScript clients reuse them.
 */
declare class McpRoute {
    static routes: {
        [key: string]: Route;
    };
}
export default McpRoute;
