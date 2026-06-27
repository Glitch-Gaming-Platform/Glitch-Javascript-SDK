import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class GameShowsRoute {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/gameshows', method: HTTP_METHODS.GET },
      create: { url: '/gameshows', method: HTTP_METHODS.POST  },
      view : { url: '/gameshows/{show_id}', method: HTTP_METHODS.GET  },
      update  :{ url: '/gameshows/{show_id}', method: HTTP_METHODS.PUT  },
      delete : { url: '/gameshows/{show_id}', method: HTTP_METHODS.DELETE },
      uploadLogo : {url : '/gameshows/{show_id}/uploadLogo', method: HTTP_METHODS.POST},
      uploadBannerImage : {url : '/gameshows/{show_id}/uploadBannerImage', method: HTTP_METHODS.POST},
      registerTitle: { url: '/gameshows/{show_id}/registerTitle', method: HTTP_METHODS.POST },
        listTitles: { url: '/gameshows/{show_id}/titles', method: HTTP_METHODS.GET },
        addTitle: { url: '/gameshows/{show_id}/addTitle', method: HTTP_METHODS.POST },
        viewTitle: { url: '/gameshows/{show_id}/titles/{title_id}', method: HTTP_METHODS.GET },
        updateTitle: { url: '/gameshows/{show_id}/titles/{title_id}', method: HTTP_METHODS.PUT },
        deleteTitle: { url: '/gameshows/{show_id}/titles/{title_id}', method: HTTP_METHODS.DELETE },
        listBlocks: { url: '/gameshows/{show_id}/blocks', method: HTTP_METHODS.GET },
        createBlock: { url: '/gameshows/{show_id}/blocks', method: HTTP_METHODS.POST },
        updateBlock: { url: '/gameshows/{show_id}/blocks/{block_id}', method: HTTP_METHODS.PUT },
        deleteBlock: { url: '/gameshows/{show_id}/blocks/{block_id}', method: HTTP_METHODS.DELETE },
        reorderBlocks: { url: '/gameshows/{show_id}/blocks/reorder', method: HTTP_METHODS.POST },
        listSchedule: { url: '/gameshows/{show_id}/schedule', method: HTTP_METHODS.GET },
        createScheduleItem: { url: '/gameshows/{show_id}/schedule', method: HTTP_METHODS.POST },
        updateScheduleItem: { url: '/gameshows/{show_id}/schedule/{schedule_id}', method: HTTP_METHODS.PUT },
        deleteScheduleItem: { url: '/gameshows/{show_id}/schedule/{schedule_id}', method: HTTP_METHODS.DELETE },
        discoveryQueue: { url: '/gameshows/{show_id}/discovery', method: HTTP_METHODS.GET },
        trackAnalytics: { url: '/gameshows/{show_id}/analytics', method: HTTP_METHODS.POST },
        analyticsReport: { url: '/gameshows/{show_id}/analytics/report', method: HTTP_METHODS.GET },
        joinWishlist: { url: '/gameshows/{show_id}/wishlist', method: HTTP_METHODS.POST },
        listWishlist: { url: '/gameshows/{show_id}/wishlist', method: HTTP_METHODS.GET },
        listForTitle: { url: '/titles/{title_id}/gameshows', method: HTTP_METHODS.GET },
    };

  }

  export default GameShowsRoute;
