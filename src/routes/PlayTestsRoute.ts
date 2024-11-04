import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class PlayTestsRoute {
  public static routes: { [key: string]: Route } = {
    index: { url: '/playtests/{title_id}', method: HTTP_METHODS.GET },
    request: { url: '/playtests/{title_id}/request', method: HTTP_METHODS.POST },
    invite: { url: '/playtests/{title_id}/invite', method: HTTP_METHODS.POST },
    submitAnswers: { url: '/playtests/{title_id}/answers/{playtest_id}', method: HTTP_METHODS.PUT },
    updateQuestions: { url: '/playtests/{title_id}/questions/{playtest_id}', method: HTTP_METHODS.PUT },
    acceptInvite: { url: '/playtests/{title_id}/accept/{playtest_id}', method: HTTP_METHODS.POST },
    rejectInvite: { url: '/playtests/{title_id}/reject/{playtest_id}', method: HTTP_METHODS.POST },
    approveRequest: { url: '/playtests/{title_id}/approve/{playtest_id}', method: HTTP_METHODS.POST },
    declineRequest: { url: '/playtests/{title_id}/decline/{playtest_id}', method: HTTP_METHODS.POST },
    cancelRequest: { url: '/playtests/{title_id}/cancel/{playtest_id}', method: HTTP_METHODS.POST },
    show: { url: '/playtests/{title_id}/view/{playtest_id}', method: HTTP_METHODS.GET },
  };
}

export default PlayTestsRoute;
