
//Configuration
import Config from "./config/Config";

//API
import { Auth } from "./api";
import { Competitions } from "./api";
import { Users } from "./api";
import {Events} from "./api";

class Glitch {

    public static config: typeof Config = Config;

    public static api : {
        Auth : typeof Auth,
        Competitions: typeof Competitions,
        Users: typeof Users
        Events : typeof Events
    }


  }

  export {Glitch};