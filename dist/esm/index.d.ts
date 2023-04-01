import { Config } from "./config";
import Auth from "./api/Auth";
import Competitions from "./api/Competitions";
import { Users } from "./api";
import { Events } from "./api";
import { Teams } from "./api";
import { Waitlists } from "./api";
import Requests from "./util/Requests";
import Parser from "./util/Parser";
import Session from "./util/Session";
import Storage from "./util/Storage";
import Data from './util/Data';
import { Modes } from "./constants/Modes";
import { Roles } from "./constants/Roles";
import { TeamJoinProcess } from "./constants/TeamJoinProcess";
import TicketTypes from "./constants/TicketTypes";
import { TicketUsageTypes } from "./constants/TicketUsageTypes";
import { TicketVisibility } from "./constants/TicketVisbility";
import { VenueType } from "./constants/VenueTypes";
declare class Glitch {
    static config: {
        Config: typeof Config;
    };
    static api: {
        Auth: typeof Auth;
        Competitions: typeof Competitions;
        Users: typeof Users;
        Events: typeof Events;
        Teams: typeof Teams;
        Waitlists: typeof Waitlists;
    };
    static util: {
        Requests: typeof Requests;
        Parser: typeof Parser;
        Session: typeof Session;
        Storage: typeof Storage;
        Data: typeof Data;
    };
    static constants: {
        AcceptanceStatus: Readonly<{
            UNAPPROVED: 0;
            APPROVED: 1;
            IN_REVIEW: 2;
            PENDING: 3;
            REQUIRE_MORE_INFORMATION: 4;
            DENIED: 5;
            BANNED: 6;
            PROBATION: 7;
        }>;
        AddressLocationType: Readonly<{
            VIRTUAL: 1;
            IN_PERSON: 2;
            HYBRID: 3;
        }>;
        CompetitionTypes: Readonly<{
            SINGLE_ELIMINATION: 1;
            DOUBLE_ELIMINATION: 2;
            MULTILEVEL: 3;
            STRAIGHT_ROUND_ROBIN: 4;
            ROUND_ROBIN_DOUBLE_SPLIT: 5;
            ROUND_ROBIN_TRIPLE_SPLIT: 6;
            ROUND_ROBIN_QUADRUPLE_SPLIT: 7;
            SEMI_ROUND_ROBINS: 8;
            EXTENDED: 9;
        }>;
        Modes: typeof Modes;
        Roles: typeof Roles;
        TeamJoinProcess: typeof TeamJoinProcess;
        TicketTypes: typeof TicketTypes;
        TicketUsageTypes: typeof TicketUsageTypes;
        TicketVisibility: typeof TicketVisibility;
        VenueType: typeof VenueType;
    };
}
export default Glitch;
