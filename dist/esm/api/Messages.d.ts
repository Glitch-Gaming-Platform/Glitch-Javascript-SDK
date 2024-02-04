import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class Messages {
    /**
     * Get all the message threads that a user has particpated in.
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/getConversations
     *
     * @returns promise
     */
    static listMessageThreads<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send a new message that will be added to a thread
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/storeMessage
     *
     * @returns A promise
     */
    static sendMessage<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes a message.
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/destroyMessage
     *
     * @returns A promise
     */
    static deleteMessage<T>(message_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * A message thread is a thread between multiple users. Pass the user ids in the thread and it will either
     * get the current thread or create a new thread.
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/conversations
     *
     * @returns A promise
     */
    static createOrGetThread<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default Messages;
