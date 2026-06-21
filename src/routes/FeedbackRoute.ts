import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class FeedbackRoute {
    
    public static routes: { [key: string]: Route } = {
        listFeedback: { url: '/feedback', method: HTTP_METHODS.GET },
        sendFeedback: { url: '/feedback', method: HTTP_METHODS.POST },
        viewFeedback: { url: '/feedback/{feedback_id}', method: HTTP_METHODS.GET },
        listSupportTickets: { url: '/support/tickets', method: HTTP_METHODS.GET },
        createSupportTicket: { url: '/support/tickets', method: HTTP_METHODS.POST },
        viewSupportTicket: { url: '/support/tickets/{feedback_id}', method: HTTP_METHODS.GET },
        replySupportTicket: { url: '/support/tickets/{feedback_id}/replies', method: HTTP_METHODS.POST },
        adminListFeedback: { url: '/admin/support/feedback', method: HTTP_METHODS.GET },
        adminViewFeedback: { url: '/admin/support/feedback/{feedback_id}', method: HTTP_METHODS.GET },
        adminUpdateFeedback: { url: '/admin/support/feedback/{feedback_id}', method: HTTP_METHODS.PUT },
        adminReplyFeedback: { url: '/admin/support/feedback/{feedback_id}/reply', method: HTTP_METHODS.POST },
        adminRewardFeedback: { url: '/admin/support/feedback/{feedback_id}/reward', method: HTTP_METHODS.POST },
    };

  }

  export default FeedbackRoute;
