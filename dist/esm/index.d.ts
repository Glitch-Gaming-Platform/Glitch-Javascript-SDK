import Config from "./config/Config";
import { Auth } from "./api";
import { Competitions } from "./api";
import { Users } from "./api";
import { Events } from "./api";
declare class Glitch {
    static config: typeof Config;
    static api: {
        Auth: typeof Auth;
        Competitions: typeof Competitions;
        Users: typeof Users;
        Events: typeof Events;
    };
}
export { Glitch };
