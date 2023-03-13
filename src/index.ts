
//Configuration
import Config from "./config/Config";

//API
import Auth from "./api/Auth";
import Competitions from "./api/Competitions";

export class Glitch {

    public static config: typeof Config = Config;

    public static auth: typeof Auth = Auth;
    public static competitions: typeof Competitions = Competitions;


  }