import Route from "./interface";
/**
 * Route declarations for the PR Directory API.
 *
 * These mirror the Laravel routes under `/api/pr/*` and the title-scoped
 * matcher route under `/api/titles/{title_id}/pr/matches`. Keeping the URL
 * templates in one place lets the SDK methods stay small and consistent with
 * the rest of the package's route-wrapper pattern.
 */
declare class PrDirectoryRoutes {
    static routes: {
        [key: string]: Route;
    };
}
export default PrDirectoryRoutes;
