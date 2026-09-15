import Route from './interface';
/** Participant-only festival networking; all access checks are enforced by the API. */
export default class FestivalNetworkingRoute {
    static routes: {
        [key: string]: Route;
    };
}
