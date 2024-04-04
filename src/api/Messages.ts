import MessagesRoute from "../routes/MessagesRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Messages {

    /**
     * Get all the message threads that a user has particpated in.
     * 
     * @see https://api.glitch.fun/api/documentation#/Messages/getConversations
     * 
     * @returns promise
     */
    public static listMessageThreads<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(MessagesRoute.routes.listMessageThreads, undefined, undefined, params);
    }

    /**
     * Send a new message that will be added to a thread
     * 
     * @see https://api.glitch.fun/api/documentation#/Messages/storeMessage
     * 
     * @returns A promise
     */
    public static sendMessage<T>(data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(MessagesRoute.routes.sendMessage, data, {}, params);
    }

    /**
     * Deletes a message.
     * 
     * @see https://api.glitch.fun/api/documentation#/Messages/destroyMessage
     * 
     * @returns A promise
     */
    public static deleteMessage<T>(message_id: string, data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(MessagesRoute.routes.deleteMessage, data, {message_id : message_id}, params);
    }

    /**
     * A message thread is a thread between multiple users. Pass the user ids in the thread and it will either 
     * get the current thread or create a new thread.
     * 
     * @see https://api.glitch.fun/api/documentation#/Messages/conversations
     * 
     * @returns A promise
     */
    public static createOrGetThread<T>(data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {
        return Requests.processRoute(MessagesRoute.routes.createOrGetThread, data, {}, params);
    }

    /**
     * Get a single thread.
     * 
     * @see https://api.glitch.fun/api/documentation#/Messages/getThread
     * 
     * @returns promise
     */
    public static getThread<T>(thread_id : string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(MessagesRoute.routes.getThread, undefined, {thread_id : thread_id}, params);
    }

   

}

export default Messages;