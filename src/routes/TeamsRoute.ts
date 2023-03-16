import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class TeamsRoute {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/teams', method: HTTP_METHODS.GET },
      create: { url: '/teams', method: HTTP_METHODS.POST  },
      view : { url: '/teams/{team_id}', method: HTTP_METHODS.GET  },
      update  :{ url: '/teams/{team_id}', method: HTTP_METHODS.PUT  },
      delete : { url: '/teams/{team_id}', method: HTTP_METHODS.DELETE },
      uploadMainImage : {url: '/teams/{team_id}/uploadMainImage', method : HTTP_METHODS.POST },
      uploadBannerImage : {url : '/teams/{team_id}/uploadBannerImage', method : HTTP_METHODS.POST },
      listInvites : {url : '/teams/{team_id}/invites', method : HTTP_METHODS.GET },
      sendInvite : {url: '/teams/{team_id}/sendInvite', method : HTTP_METHODS.POST},
      acceptInvite : {url : '/teams/{team_id}/acceptInvite', method: HTTP_METHODS.POST},
      listTeamUsers : {url : '/teams/{team_id}/users', method : HTTP_METHODS.GET},
      addTeamUser : {url : '/teams/{team_id}/users',  method : HTTP_METHODS.POST},
      showTeamUser : {url : '/teams/{team_id}/users/{user_id}', method : HTTP_METHODS.GET},
      updateTeamUser : {url : '/teams/{team_id}/users/{user_id}', method : HTTP_METHODS.PUT},
      removeTeamUser : {url : '/teams/{team_id}/users/{user_id}', method : HTTP_METHODS.DELETE}
    };

  }

  export default TeamsRoute;