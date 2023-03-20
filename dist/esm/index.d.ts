import { Config } from "./config";
import { Auth } from "./api";
import { Competitions } from "./api";
import { Users } from "./api";
import { Events } from "./api";
import { Teams } from "./api";
import { Waitlists } from "./api";
import Requests from "./util/Requests";
import Parser from "./util/Parser";
declare class Glitch {
    static config: {
        Config: typeof Config;
    };
    static api: {
        Auth: typeof Auth;
        Competitions: typeof Competitions;
        Users: typeof Users;
        Events: typeof Events;
        Teams: typeof Teams;
        Waitlists: typeof Waitlists;
    };
    static util: {
        Requests: typeof Requests;
        Parser: typeof Parser;
    };
}
export default Glitch;
