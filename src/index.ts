
//Configuration
import { Config } from "./config";

//API
import { Auth } from "./api";
import { Competitions } from "./api";
import { Users } from "./api";
import { Events } from "./api";
import { Teams } from "./api";
import { Waitlists } from "./api";

import Requests from "./util/Requests";
import Parser from "./util/Parser";

class Glitch {

    public static config =  {
        Config: Config
    };

    public static api = {
        Auth: Auth,
        Competitions: Competitions,
        Users: Users,
        Events: Events,
        Teams: Teams,
        Waitlists: Waitlists
    }

    public static util = {
        Requests : Requests,
        Parser : Parser
    }


}

export default Glitch;