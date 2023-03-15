
//Configuration
import Config from "./config/Config";

//API
import { Auth } from "./api";
import { Competitions } from "./api";

class Glitch {

    public static config: typeof Config = Config;

    public static auth: typeof Auth = Auth;
    public static competitions: typeof Competitions = Competitions;


  }

  export {Glitch};