import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class EventsRoutes {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/events', method: HTTP_METHODS.GET },
      create: { url: '/events', method: HTTP_METHODS.POST  },
      view : { url: '/events/{event_id}', method: HTTP_METHODS.GET  },
      update  :{ url: '/events/{event_id}', method: HTTP_METHODS.PUT  },
      delete : { url: '/events/{event_id}', method: HTTP_METHODS.DELETE },
      updateInvirtu : {url : '/events/{uuid}/invirtu', method: HTTP_METHODS.PUT },
      updateRTMPSource : {url : '/events/{uuid}/updateRTMPSource/{subid}', method: HTTP_METHODS.PUT },
      removeRTMPSource : {url : '/events/{uuid}/removeRTMPSource/{subid}', method: HTTP_METHODS.DELETE},
      uploadMainImage : {url : '/events/{uuid}/removeRTMPSource/{subid}', method: HTTP_METHODS.POST},
      uploadBannerImage : {url : '/events/{uuid}/uploadBannerImage', method: HTTP_METHODS.POST},
      enableBroadcastMode : {url : '/events/{uuid}/uploadBannerImage', method: HTTP_METHODS.POST},
      enableLiestreamMode  : {url : '/events/{uuid}/enableLivestreamMode', method: HTTP_METHODS.POST},
      sendOnScreenContent : {url : '/events/{uuid}/sendOnScreenContent', method: HTTP_METHODS.POST},
      addOveleray : {url : '/events/{uuid}/addOverlay', method : HTTP_METHODS.POST},
      removeOverlay : {url : '/events/{uuid}/removeOverlay/{subid}',  method : HTTP_METHODS.DELETE},
      enableOverlay : {url : '/events/{uuid}/enableOverlay/{subid}', method : HTTP_METHODS.POST},
      disableOverlay : {url : '/events/{uuid}/disableOverlay', method: HTTP_METHODS.POST},
      enableDonations : {url : '/events/{uuid}/enableDonations', method: HTTP_METHODS.POST},
      disableDonations : {url : '/events/{uuid}/disableDonations', method : HTTP_METHODS.POST},
      sendInvite : {url : '/events/{uuid}/sendInvite', method : HTTP_METHODS.POST},
      acceptInvite : {url : '/events/{uuid}/sendInvite', method : HTTP_METHODS.POST}

    };

  }

  export default EventsRoutes;