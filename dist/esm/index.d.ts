import Config from "./config/Config";
import { Auth } from "./api";
import { Competitions } from "./api";
declare class Glitch {
    static config: typeof Config;
    static auth: typeof Auth;
    static competitions: typeof Competitions;
}
export { Glitch };
