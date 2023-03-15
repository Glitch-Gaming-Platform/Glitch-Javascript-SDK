
/**
 * The routes to the endpoints.
 */

const api_routes = {
    //Authentication Routes
    auth_login : {
        route : '/auth/login',
        method : 'POST',
    },
    auth_register : { 
        route :'/auth/register',
        method : 'POST'
    },
    auth_one_time_login : { 
        route :'/auth/oneTimeLoginWithToken',
        method : 'POST'
    },
    auth_forgot_password : { 
        route :'/auth/forgotpassword',
        method : 'POST'
    },
    auth_reset_password : { 
        route :'/auth/resetpassword',
        method : 'POST'
    },

    //Competitions
    competitions_list : {
        route: '/competitions',
        method : 'GET'
    },
    competitions_create : {
        route : '/competitions',
        method : 'POST'
    },
    competitions_view : {
        route : '/competitions/{competition_id}',
        method : 'GET'
    },
    competitions_update : {
        route : '/competitions/{competition_id}',
        method : 'PUT'
    },
    competitions_delete : {
        route : '/competitions/{competition_id}',
        method : 'DELETE'
    },
    competitions_upload_main_image : {
        route : '/competitions/{competition_id}/uploadMainImage',
        method : 'POST'
    },
    competitions_upload_main_banner : {
        route : '/competitions/{competition_id}/uploadBannerImage',
        method : 'POST'
    },
    competitions_register_team : {
        route : '/competitions/{competition_id}/registerTeam',
        method : 'POST'
    },
    competitions_register_individual : {
        route : '/competitions/{competition_id}/registerUser',
        method : 'POST'
    },
    competitions_rounds_list : {
        route: '/competitions/{competition_id}/rounds',
        method : 'GET'
    },
    competitions_rounds_create : {
        route : '/competitions/{competition_id}/rounds',
        method : 'POST'
    },
    competitions_rounds_view : {
        route : '/competitions/{competition_id}/rounds/{round_id}',
        method : 'GET'
    },
    competitions_rounds_update : {
        route : '/competitions/{competition_id}/rounds/{round_id}',
        method : 'PUT'
    },
    competitions_rounds_delete : {
        route : '/competitions/{competition_id}/rounds/{round_id}',
        method : 'DELETE'
    },
    competitions_teams_list : {
        route: '/competitions/{competition_id}/teams',
        method : 'GET'
    },
    competitions_teams_create : {
        route : '/competitions/{competition_id}/teams',
        method : 'POST'
    },
    competitions_teams_view : {
        route : '/competitions/{competition_id}/teams/{team_id}',
        method : 'GET'
    },
    competitions_teams_update : {
        route : '/competitions/{competition_id}/teams/{team_id}',
        method : 'PUT'
    },
    competitions_teams_delete : {
        route : '/competitions/{competition_id}/teams/{team_id}',
        method : 'DELETE'
    },
    competitions_teams_list : {
        route: '/competitions/{competition_id}/teams',
        method : 'GET'
    },
    competitions_users_create : {
        route : '/competitions/{competition_id}/users',
        method : 'POST'
    },
    competitions_users_view : {
        route : '/competitions/{competition_id}/users/{user_id}',
        method : 'GET'
    },
    competitions_users_update : {
        route : '/competitions/{competition_id}/users/{user_id}',
        method : 'PUT'
    },
    competitions_users_delete : {
        route : '/competitions/{competition_id}/users/{user_id}',
        method : 'DELETE'
    },
    competitions_venues_list : {
        route: '/competitions/{competition_id}/venues',
        method : 'GET'
    },
    competitions_venues_create : {
        route : '/competitions/{competition_id}/venues',
        method : 'POST'
    },
    competitions_venues_view : {
        route : '/competitions/{competition_id}/venues/{venue_id}',
        method : 'GET'
    },
    competitions_venues_update : {
        route : '/competitions/{competition_id}/venues/{venue_id}',
        method : 'PUT'
    },
    competitions_venues_delete : {
        route : '/competitions/{competition_id}/venues/{venue_id}',
        method : 'DELETE'
    },
    competitions_round_brackets_list : {
        route: '/competitions/{competition_id}/rounds/{round_id}/brackets',
        method : 'GET'
    },
    competitions_round_brackets_create : {
        route : '/competitions/{competition_id}/rounds/{round_id}/brackets',
        method : 'POST'
    },
    competitions_round_brackets_view : {
        route : '/competitions/{competition_id}/rounds/{round_id}/brackets/{bracket_id}',
        method : 'GET'
    },
    competitions_round_brackets_update : {
        route : '/competitions/{competition_id}/rounds/{round_id}/brackets/{bracket_id}',
        method : 'PUT'
    },
    competitions_round_brackets_delete : {
        route : '/competitions/{competition_id}/rounds/{round_id}/brackets/{bracket_id}',
        method : 'DELETE'
    },






    //Events
    events_list : {
        route: '/events',
        method : 'GET'
    },
    events_create : {
        route : '/events',
        method : 'POST'
    },
    events_view : {
        route : '/events/{event_id}',
        method : 'GET'
    },
    events_update : {
        route : '/events/{event_id}',
        method : 'PUT'
    },
    events_delete : {
        route : '/events/{event_id}',
        method : 'DELETE'
    },
    events_add_rtmp_source : {
        route : '/events/{event_id}/addRTMPSource',
        method : 'POST'
    },
    events_update_rtmp_source : {
        route : '/events/{event_id}/updateRTMPSource/{stream_id}',
        method : 'PUT'
    },
    events_remove_rtmp_source : {
        route : '/events/{event_id}/removeRTMPSource/{stream_id}',
        method : 'DELETE'
    },
    events_upload_main_image : {
        route : '/events/{event_id}/uploadMainImage',
        method : 'POST'
    },
    events_upload_main_banner : {
        route : '/events/{event_id}/uploadBannerImage',
        method : 'POST'
    },
    events_set_broadcast_mode : {
        route : '/events/{event_id}/enableBroadcastMode',
        method : 'POST'
    },
    events_set_livestream_mode : {
        route : '/events/{event_id}/enableLivestreamMode',
        method : 'POST'
    },
    events_sync_as_live : {
        route : '/events/{event_id}/syncAsLive',
        method : 'POST'
    },
    events_send_invite : {
        route : '/events/{event_id}/sendInvite',
        method : 'POST'
    },
    events_accept_invite : {
        route : '/events/{event_id}/acceptInvite',
        method : 'POST'
    },
    events_send_onscreen_content : {
        route : '/events/{event_id}/sendOnScreenContent',
        method : 'POST'
    },
    events_update_invirtu_event : {
        route : '/events/{event_id}/invirtu',
        method : 'PUT'
    },
    events_add_overlay : {
        route : '/events/{event_id}/addOverlay',
        method : 'POST'
    },
    events_remove_overlay : {
        route : '/events/{event_id}/removeOverlay/{overlay_id}',
        method : 'DELETE'
    },
    events_enable_overlay : {
        route : '/events/{event_id}/enableOverlay/{overlay_id}',
        method : 'POST'
    },
    events_disable_overlay : {
        route : '/events/{event_id}/disableOverlay',
        method : 'POST'
    },
    events_enable_donations : {
        route : '/events/{event_id}/enableDonations',
        method : 'POST'
    },
    events_disable_donations : {
        route : '/events/{event_id}/disableDonations',
        method : 'POST'
    },

    //Messages
    messages_list : {
        route: '/messages',
        method : 'GET'
    },
    messages_all_conversations : {
        route: '/messages/threads',
        method : 'GET'
    },
    messages_create_thread : {
        route: '/messages/threads',
        method : 'GET'
    },
    messages_send : {
        route: '/messages',
        method : 'POST'
    },
    messages_update : {
        route: '/messages/{message_id}',
        method : 'PUT'
    },
    messages_delete : {
        route: '/messages/{message_id}',
        method : 'DELETE'
    },

    //Teams
    teams_list : {
        route: '/teams',
        method : 'GET'
    },
    teams_create : {
        route : '/teams',
        method : 'POST'
    },
    teams_view : {
        route : '/teams/{team_id}',
        method : 'GET'
    },
    teams_update : {
        route : '/teams/{team_id}',
        method : 'PUT'
    },
    teams_delete : {
        route : '/teams/{team_id}',
        method : 'DELETE'
    },
    teams_users_create : {
        route : '/teams/{team_id}/users',
        method : 'POST'
    },
    teams_users_view : {
        route : '/teams/{team_id}/users/{user_id}',
        method : 'GET'
    },
    teams_users_update : {
        route : '/teams/{team_id}/users/{user_id}',
        method : 'PUT'
    },
    teams_users_delete : {
        route : '/teams/{team_id}/users/{user_id}',
        method : 'DELETE'
    },
    teams_upload_main_image : {
        route : '/teams/{team_id}/uploadMainImage',
        method : 'POST'
    },
    teams_upload_main_banner : {
        route : '/teams/{team_id}/uploadBannerImage',
        method : 'POST'
    },

    //Recordings
    recordings_update : {
        route: '/events/{event_id}/recording/{recording_id}',
        method : 'PUT'
    },

    //Users
    users_list : {
        route: '/users',
        method : 'GET'
    },
    users_update : {
        route: '/users',
        method : 'PUT'
    },
    users_profile : {
        route: '/users/{user_id}/profile',
        method : 'GET'
    },
    users_me : {
        route: '/users/me',
        method : 'GET'
    },
    users_one_time_token : {
        route: '/users/oneTimeToken',
        method : 'GET'
    },
    users_profile : {
        route: '/users/{user_id}/profile',
        method : 'GET'
    },
    users_followers : {
        route: '/users/{user_id}/followers',
        method : 'GET'
    },
    users_following : {
        route: '/users/{user_id}/following',
        method : 'GET'
    },
    users_toggle_follow : {
        route: '/users/{user_id}/follow',
        method : 'POST'
    },
    users_upload_avatar : {
        route: '/users/uploadAvatarImage',
        method : 'POST'
    },
    users_upload_banner : {
        route: '/users/uploadBannerImage',
        method : 'POST'
    },
    users_create_donation_page : {
        route: '/users/createDonationPage',
        method : 'POST'
    },


}

export default api_routes;