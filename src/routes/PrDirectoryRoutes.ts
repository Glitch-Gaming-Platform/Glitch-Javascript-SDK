import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

/**
 * Route declarations for the PR Directory API.
 *
 * These mirror the Laravel routes under `/api/pr/*` and the title-scoped
 * matcher/research routes under `/api/titles/{title_id}/pr/*`. Keeping the URL
 * templates in one place lets the SDK methods stay small and consistent with
 * the rest of the package's route-wrapper pattern.
 */
class PrDirectoryRoutes {
  public static routes: { [key: string]: Route } = {
    listPublications: { url: "/pr/publications", method: HTTP_METHODS.GET },
    viewPublication: { url: "/pr/publications/{publication_id}", method: HTTP_METHODS.GET },
    listPeople: { url: "/pr/people", method: HTTP_METHODS.GET },
    viewPerson: { url: "/pr/people/{person_id}", method: HTTP_METHODS.GET },
    listFeeds: { url: "/pr/feeds", method: HTTP_METHODS.GET },
    viewFeed: { url: "/pr/feeds/{feed_id}", method: HTTP_METHODS.GET },
    listStories: { url: "/pr/stories", method: HTTP_METHODS.GET },
    viewStory: { url: "/pr/stories/{story_id}", method: HTTP_METHODS.GET },
    listTags: { url: "/pr/tags", method: HTTP_METHODS.GET },
    report: { url: "/pr/report", method: HTTP_METHODS.GET },
    titleMatches: { url: "/titles/{title_id}/pr/matches", method: HTTP_METHODS.GET },
    titleResearch: { url: "/titles/{title_id}/pr/research", method: HTTP_METHODS.GET },
    titleDraft: { url: "/titles/{title_id}/pr/drafts", method: HTTP_METHODS.POST },
    queueVerification: { url: "/admin/pr/verification/queue", method: HTTP_METHODS.POST },
    refreshFeeds: { url: "/admin/pr/feeds/refresh", method: HTTP_METHODS.POST },
  };
}

export default PrDirectoryRoutes;
