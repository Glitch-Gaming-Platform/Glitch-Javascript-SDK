import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class MessagesRoute {
    
    public static routes: { [key: string]: Route } = {
        listMessageThreads: { url: '/messages', method: HTTP_METHODS.GET },
        sendMessage: { url: '/messages', method: HTTP_METHODS.POST },
        deleteMessage: { url: '/messages/{message_id}', method: HTTP_METHODS.DELETE },
        createOrGetThread: { url: '/messages/makeThread', method: HTTP_METHODS.POST },
    };

  }

  export default MessagesRoute;