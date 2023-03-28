
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

import { AcceptanceStatus } from "./constants/AcceptanceStatus";
import AddressLocationType  from "./constants/AddressLocationType";
import { CompetitionTypes } from "./constants/CompetitionTypes";
import { Modes } from "./constants/Modes";
import { Roles } from "./constants/Roles";
import { TeamJoinProcess } from "./constants/TeamJoinProcess";
import TicketTypes from "./constants/TicketTypes";
import { TicketUsageTypes } from "./constants/TicketUsageTypes";
import { TicketVisibility } from "./constants/TicketVisbility";

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

    public static constants = {
       AcceptanceStatus : AcceptanceStatus,
       AddressLocationType : AddressLocationType,
       CompetitionTypes : CompetitionTypes,
       Modes : Modes,
       Roles: Roles,
       TeamJoinProcess : TeamJoinProcess,
       TicketTypes : TicketTypes,
       TicketUsageTypes : TicketUsageTypes,
       TicketVisibility : TicketVisibility
    }


}

export default Glitch;