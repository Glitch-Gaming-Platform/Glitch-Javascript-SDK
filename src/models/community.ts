import Template from "./template";
import User from "./user";

interface Community {
    id?: string;
    name?: string;
    description?: string;
    logo?: string;
    banner_image?: string;
    video_logo?: string;
    subdomain?: string;
    cname?: string;
    bannner_image?: string;
    cname_enabled?: boolean;
    require_attendee_rsvp?: boolean;
    is_private?: boolean;
    disable_streams?: boolean;
    disable_competitions?: boolean;
    disable_forums?: boolean;
    disable_teams?: boolean;
    custom_css?: boolean;
    twitter_page?: string;
    facebook_page?: string;
    instagram_page?: string;
    snapchat_page?: string;
    tiktok_page?: string;
    twitch_page?: string;
    youtube_page?: string;
    paetron_page?: string;
    twitter_handle?: string;
    facebook_handle?: string;
    instagram_handle?: string;
    snapchat_handle?: string;
    tiktok_handle?: string;
    twitch_handle?: string;
    youtube_handle?: string;
    paetron_handle?: string;
    template?: Template;
    admins?: User[];
  }

  export default Community;