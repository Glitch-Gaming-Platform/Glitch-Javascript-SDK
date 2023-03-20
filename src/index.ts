
//Configuration
import { Config } from "./config";

//API
import Auth  from "./api/Auth";
import Competitions  from "./api/Competitions";
import { Users } from "./api";
import { Events } from "./api";
import { Teams } from "./api";
import { Waitlists } from "./api";

import Requests from "./util/Requests";
import Parser from "./util/Parser";
import Session from "./util/Session";
import Storage from "./util/Storage";
import Data from './util/Data';

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
        Parser : Parser,
        Session: Session,
        Storage : Storage,
        Data : Data,
    }


}

export default Glitch;