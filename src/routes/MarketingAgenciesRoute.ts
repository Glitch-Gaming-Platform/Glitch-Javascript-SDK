import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class MarketingAgenciesRoute {

  public static routes: { [key: string]: Route } = {
    // CRUD for agencies
    list: { url: '/marketing-agencies', method: HTTP_METHODS.GET },
    create: { url: '/marketing-agencies', method: HTTP_METHODS.POST },
    view: { url: '/marketing-agencies/{id}', method: HTTP_METHODS.GET },
    update: { url: '/marketing-agencies/{id}', method: HTTP_METHODS.PUT },
    delete: { url: '/marketing-agencies/{id}', method: HTTP_METHODS.DELETE },

    // Administrator management
    addAdministrator: { url: '/marketing-agencies/{id}/administrators', method: HTTP_METHODS.POST },
    removeAdministrator: { url: '/marketing-agencies/{id}/administrators/{user_id}', method: HTTP_METHODS.DELETE },

    // Logo management
    setLogo: { url: '/marketing-agencies/{id}/logo', method: HTTP_METHODS.POST },

    // Case Study management
    addCaseStudy: { url: '/marketing-agencies/{id}/case-studies', method: HTTP_METHODS.POST },
    removeCaseStudy: { url: '/marketing-agencies/{id}/case-studies/{media_id}', method: HTTP_METHODS.DELETE },
    updateCaseStudyOrder: { url: '/marketing-agencies/{id}/case-studies/order', method: HTTP_METHODS.POST },

    // Invitation management
    invite: { url: '/marketing-agencies/{id}/invites', method: HTTP_METHODS.POST },
    listInvites: { url: '/marketing-agencies/{id}/invites', method: HTTP_METHODS.GET },
    revokeInvite: { url: '/marketing-agencies/{id}/invites/{invite_id}', method: HTTP_METHODS.DELETE },
    getInviteDetails: { url: '/marketing-agencies/invites/details', method: HTTP_METHODS.GET },
    acceptInvite: { url: '/marketing-agencies/invites/accept', method: HTTP_METHODS.POST },
  };

}

export default MarketingAgenciesRoute;