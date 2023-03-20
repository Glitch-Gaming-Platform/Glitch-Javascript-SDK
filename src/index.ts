
//Configuration
import { Config } from "./config";

//API
import { Auth } from "./api";
import { Competitions } from "./api";
import { Users } from "./api";
import { Events } from "./api";
import { Teams } from "./api";
import { Waitlists } from "./api";

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


}

export default Glitch;