import { Config } from "./config";
import { Auth } from "./api";
import { Competitions } from "./api";
import { Users } from "./api";
import { Events } from "./api";
import { Teams } from "./api";
import { Waitlists } from "./api";
declare class Glitch {
    static config: {
        Config: Config;
    };
    static api: {
        Auth: typeof Auth;
        Competitions: Competitions;
        Users: Users;
        Events: Events;
        Teams: Teams;
        Waitlists: Waitlists;
    };
}
export default Glitch;
