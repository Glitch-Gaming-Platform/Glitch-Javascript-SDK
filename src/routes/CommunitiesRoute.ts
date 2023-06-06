import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class CommunitiesRoute {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/communities', method: HTTP_METHODS.GET },
      create: { url: '/communities', method: HTTP_METHODS.POST  },
      view : { url: '/communities/{community_id}', method: HTTP_METHODS.GET  },
      update  :{ url: '/communities/{community_id}', method: HTTP_METHODS.PUT  },
      delete : { url: '/communities/{community_id}', method: HTTP_METHODS.DELETE },
      uploadLogo : {url: '/communities/{community_id}/uploadLogo', method : HTTP_METHODS.POST },
      uploadBannerImage : {url : '/communities/{community_id}/uploadBannerImage', method : HTTP_METHODS.POST },
      uploadVideoLogo : {url : '/communities/{community_id}/uploadVideoLogo', method : HTTP_METHODS.POST },
      listInvites : {url : '/communities/{community_id}/invites', method : HTTP_METHODS.GET },
      sendInvite : {url: '/communities/{community_id}/sendInvite', method : HTTP_METHODS.POST},
      acceptInvite : {url : '/communities/{community_id}/acceptInvite', method: HTTP_METHODS.POST},
      retrieveInvite : {url : '/communities/{community_id}/invites/{token}', method: HTTP_METHODS.GET},
      listUsers : {url : '/communities/{community_id}/users', method : HTTP_METHODS.GET},
      addUser : {url : '/communities/{community_id}/users',  method : HTTP_METHODS.POST},
      showUser : {url : '/communities/{community_id}/users/{user_id}', method : HTTP_METHODS.GET},
      updateUser : {url : '/communities/{community_id}/users/{user_id}', method : HTTP_METHODS.PUT},
      removeUser : {url : '/communities/{community_id}/users/{user_id}', method : HTTP_METHODS.DELETE},
      join : {url : '/communities/{community_id}/join', method : HTTP_METHODS.POST},
      findByDomain : {url : '/communities/findByDomain/{domain}', method : HTTP_METHODS.GET}
    };

  }

  export default CommunitiesRoute;