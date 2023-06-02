
//Configuration
import { Config } from "./config";

//API
import Auth  from "./api/Auth";
import Competitions  from "./api/Competitions";
import {Communities} from "./api";
import { Users } from "./api";
import { Events } from "./api";
import { Teams } from "./api";
import { Posts } from "./api";
import {Templates} from "./api";
import { Waitlists } from "./api";

import Requests from "./util/Requests";
import Parser from "./util/Parser";
import Session from "./util/Session";
import Storage from "./util/Storage";
import Data from './util/Data';
import LabelManager from "./util/LabelManager";

import { AcceptanceStatus } from "./constants/AcceptanceStatus";
import AddressLocationType  from "./constants/AddressLocationType";
import { ContentStatus } from "./constants/ContentStatus";
import { CompetitionTypes } from "./constants/CompetitionTypes";
import { Modes } from "./constants/Modes";
import { PostTypes } from "./constants/PostTypes";
import { Roles } from "./constants/Roles";
import { TeamJoinProcess } from "./constants/TeamJoinProcess";
import TicketTypes from "./constants/TicketTypes";
import { TicketUsageTypes } from "./constants/TicketUsageTypes";
import { TicketVisibility } from "./constants/TicketVisbility";
import { VenueType } from "./constants/VenueTypes";

class Glitch {

    public static config =  {
        Config: Config
    };

    public static api = {
        Auth: Auth,
        Competitions: Competitions,
        Communities : Communities,
        Users: Users,
        Events: Events,
        Teams: Teams,
        Posts: Posts,
        Templates : Templates,
        Waitlists: Waitlists
    }

    public static util = {
        Requests : Requests,
        Parser : Parser,
        Session: Session,
        Storage : Storage,
        Data : Data,
        LabelManager : LabelManager,
    }

    public static constants = {
       AcceptanceStatus : AcceptanceStatus,
       AddressLocationType : AddressLocationType,
       CompetitionTypes : CompetitionTypes,
       ContentStatus : ContentStatus,
       Modes : Modes,
       PostTypes : PostTypes,
       Roles: Roles,
       TeamJoinProcess : TeamJoinProcess,
       TicketTypes : TicketTypes,
       TicketUsageTypes : TicketUsageTypes,
       TicketVisibility : TicketVisibility,
       VenueType : VenueType
    }


}

export default Glitch;