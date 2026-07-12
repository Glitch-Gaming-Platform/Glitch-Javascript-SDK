import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class GameShowsRoute {
    /**
     * Canonical API route templates. JSON routes are substituted by
     * Requests.processRoute; multipart methods replace tokens before upload.
     */
    public static routes: { [key: string]: Route } = {
      list: { url: '/gameshows', method: HTTP_METHODS.GET },
      create: { url: '/gameshows', method: HTTP_METHODS.POST  },
      view : { url: '/gameshows/{show_id}', method: HTTP_METHODS.GET  },
      update  :{ url: '/gameshows/{show_id}', method: HTTP_METHODS.PUT  },
      delete : { url: '/gameshows/{show_id}', method: HTTP_METHODS.DELETE },
      uploadLogo : {url : '/gameshows/{show_id}/uploadLogo', method: HTTP_METHODS.POST},
      uploadBannerImage : {url : '/gameshows/{show_id}/uploadBannerImage', method: HTTP_METHODS.POST},
      registerTitle: { url: '/gameshows/{show_id}/registerTitle', method: HTTP_METHODS.POST },
        // Schema-driven developer registration questions and organizer reports.
        listRegistrationQuestions: { url: '/gameshows/{show_id}/registration-questions', method: HTTP_METHODS.GET },
        manageRegistrationQuestions: { url: '/gameshows/{show_id}/registration-form/questions', method: HTTP_METHODS.GET },
        createRegistrationQuestion: { url: '/gameshows/{show_id}/registration-form/questions', method: HTTP_METHODS.POST },
        updateRegistrationQuestion: { url: '/gameshows/{show_id}/registration-form/questions/{question_id}', method: HTTP_METHODS.PUT },
        deleteRegistrationQuestion: { url: '/gameshows/{show_id}/registration-form/questions/{question_id}', method: HTTP_METHODS.DELETE },
        reorderRegistrationQuestions: { url: '/gameshows/{show_id}/registration-form/questions/reorder', method: HTTP_METHODS.POST },
        listRegistrationResponses: { url: '/gameshows/{show_id}/registration-form/responses', method: HTTP_METHODS.GET },
        registrationQuestionReports: { url: '/gameshows/{show_id}/registration-form/reports', method: HTTP_METHODS.GET },
        listTitles: { url: '/gameshows/{show_id}/titles', method: HTTP_METHODS.GET },
        addTitle: { url: '/gameshows/{show_id}/addTitle', method: HTTP_METHODS.POST },
        // External registration file preview/import endpoints.
        previewExternalTitles: { url: '/gameshows/{show_id}/external-titles/preview', method: HTTP_METHODS.POST },
        importExternalTitles: { url: '/gameshows/{show_id}/external-titles/import', method: HTTP_METHODS.POST },
        listTitleClaims: { url: '/gameshows/{show_id}/title-claims', method: HTTP_METHODS.GET },
        inviteTitleClaim: { url: '/gameshows/{show_id}/titles/{title_id}/claim-invitation', method: HTTP_METHODS.POST },
        viewTitleClaim: { url: '/gameshows/{show_id}/title-claims/{token}', method: HTTP_METHODS.GET },
        claimTitle: { url: '/gameshows/{show_id}/title-claims/{token}/claim', method: HTTP_METHODS.POST },
        completeTitleClaim: { url: '/gameshows/{show_id}/title-claims/{token}/complete', method: HTTP_METHODS.POST },
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
        // Organizer sponsor lifecycle and placement administration.
        listSponsors: { url: '/gameshows/{show_id}/sponsors', method: HTTP_METHODS.GET },
        createSponsor: { url: '/gameshows/{show_id}/sponsors', method: HTTP_METHODS.POST },
        getSponsor: { url: '/gameshows/{show_id}/sponsors/{sponsor_id}', method: HTTP_METHODS.GET },
        updateSponsor: { url: '/gameshows/{show_id}/sponsors/{sponsor_id}', method: HTTP_METHODS.PUT },
        deleteSponsor: { url: '/gameshows/{show_id}/sponsors/{sponsor_id}', method: HTTP_METHODS.DELETE },
        resendSponsorInvitation: { url: '/gameshows/{show_id}/sponsors/{sponsor_id}/invite', method: HTTP_METHODS.POST },
        createSponsorPlacement: { url: '/gameshows/{show_id}/sponsors/{sponsor_id}/placements', method: HTTP_METHODS.POST },
        updateSponsorPlacement: { url: '/gameshows/{show_id}/sponsors/{sponsor_id}/placements/{placement_id}', method: HTTP_METHODS.PUT },
        deleteSponsorPlacement: { url: '/gameshows/{show_id}/sponsors/{sponsor_id}/placements/{placement_id}', method: HTTP_METHODS.DELETE },
        // Privacy-limited anonymous sponsor inventory.
        listPublicSponsors: { url: '/gameshows/{show_id}/sponsors/public', method: HTTP_METHODS.GET },
        // Token-protected sponsor self-service; backend applies per-route limits.
        sponsorInvitation: { url: '/gameshow-sponsor-invitations/{token}', method: HTTP_METHODS.GET },
        sponsorInvitationUpload: { url: '/gameshow-sponsor-invitations/{token}/media', method: HTTP_METHODS.POST },
        sponsorInvitationSubmit: { url: '/gameshow-sponsor-invitations/{token}/submit', method: HTTP_METHODS.POST },
        sponsorInvitationPayment: { url: '/gameshow-sponsor-invitations/{token}/payment', method: HTTP_METHODS.POST },
        sponsorInvitationConfirmPayment: { url: '/gameshow-sponsor-invitations/{token}/payment/confirm', method: HTTP_METHODS.POST },
    };

  }

  export default GameShowsRoute;
