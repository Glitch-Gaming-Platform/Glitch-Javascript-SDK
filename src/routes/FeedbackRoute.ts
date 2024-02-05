import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class FeedbackRoute {
    
    public static routes: { [key: string]: Route } = {
        listFeedback: { url: '/feedback', method: HTTP_METHODS.GET },
        sendFeedback: { url: '/feedback', method: HTTP_METHODS.POST },
        viewFeedback: { url: '/feedback/{feedback_id}', method: HTTP_METHODS.GET },
    };

  }

  export default FeedbackRoute;