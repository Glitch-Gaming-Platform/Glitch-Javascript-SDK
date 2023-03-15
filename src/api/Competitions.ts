import CompetitionRoutes from "../routes/CompetitionRoute";
import Requests from "../util/Requests";

class Competitions {

    public static list() {
        return Requests.processRoute(CompetitionRoutes.routes.list);
    }

    public static create(data : object) {

        return Requests.processRoute(CompetitionRoutes.routes.create, data);
    }

    public static update(competition_id : string, data : object) {

        return Requests.processRoute(CompetitionRoutes.routes.create, data, {competition_id : competition_id});
    }

    public static view(competition_id : string) {

        return Requests.processRoute(CompetitionRoutes.routes.view, {}, {competition_id : competition_id});
    }

    public static delete(competition_id : string) {

        return Requests.processRoute(CompetitionRoutes.routes.delete, {}, {competition_id : competition_id});
    }

    

}

export default Competitions;