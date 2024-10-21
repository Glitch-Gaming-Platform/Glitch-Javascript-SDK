
//Configuration
import { Config } from "./config";

//API
import Auth  from "./api/Auth";
import Competitions  from "./api/Competitions";
import {Communities, Social} from "./api";
import { Users } from "./api";
import { Events } from "./api";
import { Teams } from "./api";
import { Posts } from "./api";
import {Templates} from "./api";
import { Waitlists } from "./api";
import { Utility } from "./api";
import { Tips } from "./api";
import { TipPackages } from "./api";
import { TipEmojis } from "./api";
import { TipPackagePurchases } from "./api";
import { SocialPosts } from "./api";
import {Titles} from "./api";
import {Campaigns} from "./api";
import {Subscriptions} from "./api";
import {Messages} from "./api";
import {Feedback} from "./api";
import {Influencers} from "./api";
import {Games} from "./api";
import {Publications} from "./api";
import {GameShows} from "./api";



import Requests from "./util/Requests";
import Parser from "./util/Parser";
import Session from "./util/Session";
import Storage from "./util/Storage";
import Data from './util/Data';
import LabelManager from "./util/LabelManager";

import { AcceptanceStatus } from "./constants/AcceptanceStatus";
import AddressLocationType  from "./constants/AddressLocationType";
import CampaignObjective from "./constants/CampaignObjective";
import { ContentStatus } from "./constants/ContentStatus";
import { CompetitionTypes } from "./constants/CompetitionTypes";
import InfluencerCampaignType from "./constants/InfluencerCampaignType";
import { Modes } from "./constants/Modes";
import { PostTypes } from "./constants/PostTypes";
import { Roles } from "./constants/Roles";
import { TeamJoinProcess } from "./constants/TeamJoinProcess";
import {SocialInteractions} from "./constants/SocialInteractions"
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
        Campaigns : Campaigns,
        Competitions: Competitions,
        Communities : Communities,
        Users: Users,
        Events: Events,
        Games : Games,
        GameShows : GameShows,
        Feedback : Feedback,
        Influencers : Influencers,
        Teams: Teams,
        Posts: Posts,
        Messages : Messages,
        Templates : Templates,
        Waitlists: Waitlists,
        Utility : Utility,
        Tips: Tips,
        Titles : Titles,
        Social : Social,
        SocialPosts : SocialPosts,
        Subscriptions : Subscriptions,
        TipPackages : TipPackages,
        TipEmojis : TipEmojis ,
        TipPackagePurchases: TipPackagePurchases,
        Publications : Publications
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
       CampaignObjective :CampaignObjective,
       CompetitionTypes : CompetitionTypes,
       ContentStatus : ContentStatus,
       InfluencerCampaignType : InfluencerCampaignType,
       Modes : Modes,
       PostTypes : PostTypes,
       Roles: Roles,
       SocialInteractions : SocialInteractions,
       TeamJoinProcess : TeamJoinProcess,
       TicketTypes : TicketTypes,
       TicketUsageTypes : TicketUsageTypes,
       TicketVisibility : TicketVisibility,
       VenueType : VenueType
    }


}

export default Glitch;