import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class AgentsRoute {
  public static routes: { [key: string]: Route } = {
    listTitles: { url: "/agents/titles", method: HTTP_METHODS.GET },
    routeCatalog: { url: "/agents/routes/catalog", method: HTTP_METHODS.GET },
    workspace: { url: "/agents/titles/{title_id}/workspace", method: HTTP_METHODS.GET },
    listAgents: { url: "/agents/titles/{title_id}/agents", method: HTTP_METHODS.GET },
    createAgent: { url: "/agents/titles/{title_id}/agents", method: HTTP_METHODS.POST },
    viewAgent: { url: "/agents/titles/{title_id}/agents/{agent_id}", method: HTTP_METHODS.GET },
    updateAgent: { url: "/agents/titles/{title_id}/agents/{agent_id}", method: HTTP_METHODS.PUT },
    deleteAgent: { url: "/agents/titles/{title_id}/agents/{agent_id}", method: HTTP_METHODS.DELETE },
    runAgent: { url: "/agents/titles/{title_id}/agents/{agent_id}/run", method: HTTP_METHODS.POST },
    listRuns: { url: "/agents/titles/{title_id}/runs", method: HTTP_METHODS.GET },
    listActions: { url: "/agents/titles/{title_id}/actions", method: HTTP_METHODS.GET },
    approveAction: { url: "/agents/titles/{title_id}/actions/{action_id}/approve", method: HTTP_METHODS.POST },
    rejectAction: { url: "/agents/titles/{title_id}/actions/{action_id}/reject", method: HTTP_METHODS.POST },
    executeAction: { url: "/agents/titles/{title_id}/actions/{action_id}/execute", method: HTTP_METHODS.POST },
    listGuidance: { url: "/agents/titles/{title_id}/guidance", method: HTTP_METHODS.GET },
    answerGuidance: { url: "/agents/titles/{title_id}/guidance/{guidance_id}/answer", method: HTTP_METHODS.POST },
    listMemories: { url: "/agents/titles/{title_id}/memories", method: HTTP_METHODS.GET },
    results: { url: "/agents/titles/{title_id}/results", method: HTTP_METHODS.GET },
    usage: { url: "/agents/titles/{title_id}/usage", method: HTTP_METHODS.GET },
    credits: { url: "/agents/titles/{title_id}/credits", method: HTTP_METHODS.GET },
    purchaseCredits: { url: "/agents/titles/{title_id}/credits/purchase", method: HTTP_METHODS.POST },
    startTrial: { url: "/agents/titles/{title_id}/subscription/trial", method: HTTP_METHODS.POST },
    agencyOverview: { url: "/agents/agency/overview", method: HTTP_METHODS.GET },
    agencyInbox: { url: "/agents/agency/inbox", method: HTTP_METHODS.GET },
  };
}

export default AgentsRoute;
