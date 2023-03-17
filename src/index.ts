
//Configuration
import Config from "./config/Config";

//API
import { Auth } from "./api";
import { Competitions } from "./api";
import { Users } from "./api";
import {Events} from "./api";
import {Teams} from "./api";

class Glitch {

    public static config: Config;

    public static api : {
        Auth : Auth,
        Competitions: Competitions,
        Users:  Users,
        Events :  Events,
        Teams :  Teams
    }


  }

  export {Glitch};