import Config from "./config/Config";
import { Auth } from "./api";
import { Competitions } from "./api";
import { Users } from "./api";
import { Events } from "./api";
import { Teams } from "./api";
declare class Glitch {
    static config: Config;
    static api: {
        Auth: Auth;
        Competitions: Competitions;
        Users: Users;
        Events: Events;
        Teams: Teams;
    };
}
export { Glitch };
