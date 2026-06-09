import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

/**
 * Route declarations for the PR Directory API.
 *
 * These mirror the Laravel routes under `/api/pr/*` and the title-scoped
 * matcher route under `/api/titles/{title_id}/pr/matches`. Keeping the URL
 * templates in one place lets the SDK methods stay small and consistent with
 * the rest of the package's route-wrapper pattern.
 */
class PrDirectoryRoutes {
  public static routes: { [key: string]: Route } = {
    listPublications: { url: "/pr/publications", method: HTTP_METHODS.GET },
    viewPublication: { url: "/pr/publications/{publication_id}", method: HTTP_METHODS.GET },
    listPeople: { url: "/pr/people", method: HTTP_METHODS.GET },
    viewPerson: { url: "/pr/people/{person_id}", method: HTTP_METHODS.GET },
    listTags: { url: "/pr/tags", method: HTTP_METHODS.GET },
    report: { url: "/pr/report", method: HTTP_METHODS.GET },
    titleMatches: { url: "/titles/{title_id}/pr/matches", method: HTTP_METHODS.GET },
    queueVerification: { url: "/admin/pr/verification/queue", method: HTTP_METHODS.POST },
  };
}

export default PrDirectoryRoutes;
