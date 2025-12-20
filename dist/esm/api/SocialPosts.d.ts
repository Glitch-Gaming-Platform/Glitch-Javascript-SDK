import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class SocialPosts {
    /**
     * List all the Posts.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Give a tip to another user
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    static create<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param post_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    static view<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update the informationa bout a post, as long as it hasn't been posted.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param post_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    static update<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes a post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     *
     * @param post_id The id of the post to delete.
     * @returns promise
     */
    static delete<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Dispute a post as being fraudulent.,s
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/disputePost
    *
    * @param post_id The id fo the post to retrieve.
    *
    * @returns promise
    */
    static dispute<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get the change of the post metrics over a period of time.
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/getSocialMediaPostHistory
    *
    * @param post_id The id fo the post to retrieve.
    *
    * @returns promise
    */
    static history<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get the change progression of a social media post over period of time.
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/getSocialMediaPostHistory
    *
    * @param post_id The id fo the post to retrieve.
    *
    * @returns promise
    */
    static progression<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add media to a social media post.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/addMediaToSocialMediaPost
     *
     * @param post_id The ID of the social media post.
     * @param data The data to be sent in the request body.
     *
     * @returns promise
     */
    static addMedia<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove media from a social media post.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/removeMediaFromSocialMediaPost
     *
     * @param post_id The ID of the social media post.
     * @param media_id The ID of the media to remove.
     *
     * @returns promise
     */
    static removeMedia<T>(post_id: string, media_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Reschedule a post that has failed.
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/addMediaToSocialMediaPost
    *
    * @param post_id The ID of the social media post.
    * @param data The data to be sent in the request body.
    *
    * @returns promise
    */
    static reschedule<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get the reports for a social media post
    *
    * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
    *
    * @returns promise
    */
    static reports<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update the information about a post impressions, for posts who API do not give view counts.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param post_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    static updatePostImpressions<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get reports on all the the short links
    *
    * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
    *
    * @returns promise
    */
    static shortLinkReports<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List comments for a social media post.
     *
     * @param post_id The ID of the social media post.
     * @param params Optional query parameters for filtering and sorting.
     * @returns A promise
     */
    static listComments<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sync comments from the social media platform for a specific post.
     *
     * @param post_id The ID of the social media post.
     * @param params Optional query parameters (e.g., limit).
     * @returns A promise
     */
    static syncComments<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a list of all comments that are pending a response.
     *
     * @param params Optional query parameters for filtering.
     * @returns A promise
     */
    static listPendingResponses<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single comment by its ID.
     *
     * @param comment_id The ID of the comment.
     * @param params Optional query parameters (e.g., include_thread).
     * @returns A promise
     */
    static viewComment<T>(comment_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Post a reply to a comment.
     *
     * @param comment_id The ID of the comment to reply to.
     * @param data The content of the reply.
     * @returns A promise
     */
    static replyToComment<T>(comment_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Moderate a comment (approve, reject, spam, hide, show).
     *
     * @param comment_id The ID of the comment to moderate.
     * @param data The moderation action and optional reason.
     * @returns A promise
     */
    static moderateComment<T>(comment_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Mark a comment as needing a response.
     *
     * @param comment_id The ID of the comment.
     * @returns A promise
     */
    static markCommentForResponse<T>(comment_id: string): AxiosPromise<Response<T>>;
    /**
     * Get the full thread for a given comment.
     *
     * @param comment_id The ID of a comment within the thread.
     * @returns A promise
     */
    static getCommentThread<T>(comment_id: string): AxiosPromise<Response<T>>;
    /**
     * Trigger a manual update of a comment's metrics from its platform.
     *
     * @param comment_id The ID of the comment to update.
     * @returns A promise
     */
    static updateCommentMetrics<T>(comment_id: string): AxiosPromise<Response<T>>;
    /**
     * Create a new top-level comment on a post.
     *
     * @param post_id The ID of the social media post to comment on.
     * @param data The content of the comment.
     * @returns A promise
     */
    static createComment<T>(post_id: string, data: object): AxiosPromise<Response<T>>;
    /**
   * Get game install attribution data for a specific social media post.
   *
   * @param post_id The ID of the social media post.
   * @param params Optional query parameters (start_date, end_date, confidence_threshold).
   * @returns A promise
   */
    static getPostAttribution<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get a report of all social media posts for a title that are converting to game installs.
    *
    * @param params Query parameters (title_id, start_date, end_date, confidence_threshold).
    * @returns A promise
    */
    static getSocialPostAttributionReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
   * Get a summary of clicks for each short link in a post.
   *
   * @param post_id The ID of the social media post.
   * @returns A promise
   */
    static getLinkSummary<T>(post_id: string): AxiosPromise<Response<T>>;
    /**
     * Trigger a historical sync for a specific platform for the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/syncHistory
     *
     * @param platform The platform to sync (e.g., 'twitter', 'youtube', 'bluesky').
     *
     * @returns promise
     */
    static syncHistory<T>(platform: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Perform a social action (Like, Repost, Vote) on a post.
     *
     * @param post_id The ID of the social media post.
     * @param action The action to perform.
     * @returns promise
     */
    static performAction<T>(post_id: string, action: 'like' | 'unlike' | 'repost' | 'unrepost' | 'vote_up' | 'vote_down' | 'unvote'): AxiosPromise<Response<T>>;
    /**
     * Perform a social action (Like, Repost, Vote) on a comment.
     *
     * @param comment_id The ID of the comment.
     * @param action The action to perform.
     * @returns promise
     */
    static performCommentAction<T>(comment_id: string, action: 'like' | 'unlike' | 'repost' | 'unrepost' | 'vote_up' | 'vote_down' | 'unvote'): AxiosPromise<Response<T>>;
    /**
     * Get ad creative performance matrix.
     */
    static creativePerformance<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * List social media conversations.
    *
    * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/listSocialConversations
    *
    * @param params Query parameters (scheduler_id, platform, page, per_page).
    * @returns promise
    */
    static listConversations<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sync conversations from external platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/syncSocialConversations
     *
     * @param data Body parameters (platform, scheduler_id).
     * @returns promise
     */
    static syncConversations<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Get a specific conversation.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/getSocialConversation
     *
     * @param conversation_id The ID of the conversation.
     * @returns promise
     */
    static getConversation<T>(conversation_id: string): AxiosPromise<Response<T>>;
    /**
     * List messages in a conversation.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/listSocialMessages
     *
     * @param conversation_id The ID of the conversation.
     * @param params Query parameters (sync, page, per_page).
     * @returns promise
     */
    static getConversationMessages<T>(conversation_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send a Direct Message.
     *
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/sendSocialMessage
     *
     * @param data Body parameters (message, conversation_id, recipient_id, platform, scheduler_id, media_ids).
     * @returns promise
     */
    static sendSocialMessage<T>(data: object): AxiosPromise<Response<T>>;
}
export default SocialPosts;
