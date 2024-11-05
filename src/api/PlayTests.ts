import PlayTestsRoute from "../routes/PlayTestsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class PlayTests {
  /**
   * Get a list of play tests associated with a title.
   *
   * @param title_id The ID of the title.
   * @param params Optional query parameters.
   * @returns Promise
   */
  public static list<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(PlayTestsRoute.routes.index, undefined, { title_id }, params);
  }

  /**
   * User requests to test a title.
   *
   * @param title_id The ID of the title.
   * @param data Optional data for the request.
   * @returns Promise
   */
  public static requestPlayTest<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(PlayTestsRoute.routes.request, data, { title_id }, params);
  }

  /**
   * Title administrator invites a user to test a title.
   *
   * @param title_id The ID of the title.
   * @param data The data containing user_id and other optional fields.
   * @returns Promise
   */
  public static invitePlayTester<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(PlayTestsRoute.routes.invite, data, { title_id }, params);
  }

  /**
   * User submits or updates their answers for a play test.
   *
   * @param title_id The ID of the title.
   * @param playtest_id The ID of the play test.
   * @param data The answers data.
   * @returns Promise
   */
  public static submitAnswers<T>(title_id: string, playtest_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(PlayTestsRoute.routes.submitAnswers, data, { title_id, playtest_id }, params);
  }

  /**
   * Title admin updates test questions for a play test.
   *
   * @param title_id The ID of the title.
   * @param playtest_id The ID of the play test.
   * @param data The questions data.
   * @returns Promise
   */
  public static updateQuestions<T>(title_id: string, playtest_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(PlayTestsRoute.routes.updateQuestions, data, { title_id, playtest_id }, params);
  }

  /**
   * User accepts an invite to a play test.
   *
   * @param title_id The ID of the title.
   * @param playtest_id The ID of the play test.
   * @returns Promise
   */
  public static acceptInvite<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(PlayTestsRoute.routes.acceptInvite, {}, { title_id, playtest_id }, params);
  }

  /**
   * User rejects an invite to a play test.
   *
   * @param title_id The ID of the title.
   * @param playtest_id The ID of the play test.
   * @returns Promise
   */
  public static rejectInvite<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(PlayTestsRoute.routes.rejectInvite, {}, { title_id, playtest_id }, params);
  }

  /**
   * Title admin approves a user's play test request.
   *
   * @param title_id The ID of the title.
   * @param playtest_id The ID of the play test.
   * @returns Promise
   */
  public static approveRequest<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(PlayTestsRoute.routes.approveRequest, {}, { title_id, playtest_id }, params);
  }

  /**
   * Title admin declines a user's play test request.
   *
   * @param title_id The ID of the title.
   * @param playtest_id The ID of the play test.
   * @returns Promise
   */
  public static declineRequest<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(PlayTestsRoute.routes.declineRequest, {}, { title_id, playtest_id }, params);
  }

  /**
   * User cancels their own play test request.
   *
   * @param title_id The ID of the title.
   * @param playtest_id The ID of the play test.
   * @returns Promise
   */
  public static cancelRequest<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(PlayTestsRoute.routes.cancelRequest, {}, { title_id, playtest_id }, params);
  }

  /**
   * Retrieve a single play test.
   *
   * @param title_id The ID of the title.
   * @param playtest_id The ID of the play test.
   * @returns Promise
   */
  public static show<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(PlayTestsRoute.routes.show, {}, { title_id, playtest_id }, params);
  }

  /**
   * Get all the play tests that are associated with the current user.
   *
   * @param title_id The ID of the title.
   * @param playtest_id The ID of the play test.
   * @returns Promise
   */
  public static mine<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
    return Requests.processRoute(PlayTestsRoute.routes.mine, {}, {}, params);
  }
}

export default PlayTests;
