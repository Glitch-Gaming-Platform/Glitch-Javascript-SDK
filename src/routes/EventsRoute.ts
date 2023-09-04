import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class EventsRoutes {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/events', method: HTTP_METHODS.GET },
      create: { url: '/events', method: HTTP_METHODS.POST  },
      view : { url: '/events/{event_id}', method: HTTP_METHODS.GET  },
      update  :{ url: '/events/{event_id}', method: HTTP_METHODS.PUT  },
      delete : { url: '/events/{event_id}', method: HTTP_METHODS.DELETE },
      updateInvirtu : {url : '/events/{event_id}/invirtu', method: HTTP_METHODS.PUT },
      syncAsLive : {url : '/events/{event_id}/syncAsLive', method: HTTP_METHODS.POST },
      addRTMPSource : {url : '/events/{event_id}/addRTMPSource', method: HTTP_METHODS.POST },
      updateRTMPSource : {url : '/events/{event_id}/updateRTMPSource/{subid}', method: HTTP_METHODS.PUT },
      removeRTMPSource : {url : '/events/{event_id}/removeRTMPSource/{subid}', method: HTTP_METHODS.DELETE},
      uploadMainImage : {url : '/events/{event_id}/uploadMainImage', method: HTTP_METHODS.POST},
      uploadBannerImage : {url : '/events/{event_id}/uploadBannerImage', method: HTTP_METHODS.POST},
      enableBroadcastMode : {url : '/events/{event_id}/enableBroadcastMode', method: HTTP_METHODS.POST},
      enableLivestreamMode  : {url : '/events/{event_id}/enableLivestreamMode', method: HTTP_METHODS.POST},
      sendOnScreenContent : {url : '/events/{event_id}/sendOnScreenContent', method: HTTP_METHODS.POST},
      addOverlay : {url : '/events/{event_id}/addOverlay', method : HTTP_METHODS.POST},
      removeOverlay : {url : '/events/{event_id}/removeOverlay/{subid}',  method : HTTP_METHODS.DELETE},
      enableOverlay : {url : '/events/{event_id}/enableOverlay/{subid}', method : HTTP_METHODS.POST},
      disableOverlay : {url : '/events/{event_id}/disableOverlay', method: HTTP_METHODS.POST},
      enableDonations : {url : '/events/{event_id}/enableDonations', method: HTTP_METHODS.POST},
      disableDonations : {url : '/events/{event_id}/disableDonations', method : HTTP_METHODS.POST},
      sendInvite : {url : '/events/{event_id}/sendInvite', method : HTTP_METHODS.POST},
      acceptInvite : {url : '/events/{event_id}/acceptInvite', method : HTTP_METHODS.POST},
      addTwitchMulticast : {url : '/events/{event_id}/addTwitchMulticast', method : HTTP_METHODS.POST},
      addFacebookMulticast : {url : '/events/{event_id}/addFacebookMulticast', method : HTTP_METHODS.POST},
      addYoutubeMulticast : {url : '/events/{event_id}/addYoutubeMulticast', method : HTTP_METHODS.POST},
      enableWidget : {url : '/events/{event_id}/enableWidget/{widget_id}', method : HTTP_METHODS.POST},
      disableWidget : {url : '/events/{event_id}/disableWidget/{widget_id}', method : HTTP_METHODS.DELETE},
      getTips : {url : '/events/{event_id}/tips', method : HTTP_METHODS.GET},
    };

  }

  export default EventsRoutes;