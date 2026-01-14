import SocialPostsRoute from "../routes/SocialPostsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class SocialPosts {

    /**
     * List all the Posts.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     * 
     * @returns promise
     */
    public static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.getPosts, undefined, undefined, params);
    }

    /**
     * Give a tip to another user
     * 
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     * 
     * @returns A promise
     */
    public static create<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.createPost, data, {}, params);
    }

    /**
     * Retrieve the information for a single post.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     * 
     * @param post_id The id fo the post to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(SocialPostsRoute.routes.retrievePost, {}, { post_id: post_id }, params);
    }

    /**
     * Update the informationa bout a post, as long as it hasn't been posted.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     * 
     * @param post_id The id fo the post to retrieve.
     * 
     * @returns promise
     */
    public static update<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(SocialPostsRoute.routes.updatePost, data, { post_id: post_id }, params);
    }

    /**
     * Deletes a post.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     * 
     * @param post_id The id of the post to delete.
     * @returns promise
     */
    public static delete<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(SocialPostsRoute.routes.deletePost, {}, { post_id: post_id }, params);
    }



    /**
    * Dispute a post as being fraudulent.,s
    * 
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/disputePost
    * 
    * @param post_id The id fo the post to retrieve.
    * 
    * @returns promise
    */
    public static dispute<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(SocialPostsRoute.routes.dispute, data, { post_id: post_id }, params);
    }

    /**
    * Get the change of the post metrics over a period of time.
    * 
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/getSocialMediaPostHistory
    * 
    * @param post_id The id fo the post to retrieve.
    * 
    * @returns promise
    */
    public static history<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(SocialPostsRoute.routes.history, {}, { post_id: post_id }, params);
    }

    /**
    * Get the change progression of a social media post over period of time.
    * 
    * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/getSocialMediaPostHistory
    * 
    * @param post_id The id fo the post to retrieve.
    * 
    * @returns promise
    */
    public static progression<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(SocialPostsRoute.routes.progression, {}, {}, params);
    }

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
    public static addMedia<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.addMedia, data, { post_id: post_id }, params);
    }

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
    public static removeMedia<T>(post_id: string, media_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.removeMedia, {}, { post_id: post_id, media_id: media_id }, params);
    }

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
    public static reschedule<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.reschedule, data, { post_id: post_id }, params);
    }

    /**
    * Get the reports for a social media post
    * 
    * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
    * 
    * @returns promise
    */
    public static reports<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.reports, undefined, undefined, params);
    }

    /**
     * Update the information about a post impressions, for posts who API do not give view counts.
     * 
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     * 
     * @param post_id The id fo the post to retrieve.
     * 
     * @returns promise
     */
    public static updatePostImpressions<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>> {

        return Requests.processRoute(SocialPostsRoute.routes.updatePostImpressions, data, { post_id: post_id }, params);
    }

    /**
    * Get reports on all the the short links
    * 
    * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
    * 
    * @returns promise
    */
    public static shortLinkReports<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.shortLinkReports, undefined, undefined, params);
    }


    /**
     * List comments for a social media post.
     * 
     * @param post_id The ID of the social media post.
     * @param params Optional query parameters for filtering and sorting.
     * @returns A promise
     */
    public static listComments<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.listComments, undefined, { post_id }, params);
    }

    /**
     * Sync comments from the social media platform for a specific post.
     * 
     * @param post_id The ID of the social media post.
     * @param params Optional query parameters (e.g., limit).
     * @returns A promise
     */
    public static syncComments<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.syncComments, undefined, { post_id }, params);
    }

    /**
     * Get a list of all comments that are pending a response.
     * 
     * @param params Optional query parameters for filtering.
     * @returns A promise
     */
    public static listPendingResponses<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.listPendingResponses, undefined, undefined, params);
    }

    /**
     * Retrieve a single comment by its ID.
     * 
     * @param comment_id The ID of the comment.
     * @param params Optional query parameters (e.g., include_thread).
     * @returns A promise
     */
    public static viewComment<T>(comment_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.viewComment, undefined, { comment_id }, params);
    }

    /**
     * Post a reply to a comment.
     * 
     * @param comment_id The ID of the comment to reply to.
     * @param data The content of the reply.
     * @returns A promise
     */
    public static replyToComment<T>(comment_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.replyToComment, data, { comment_id });
    }

    /**
     * Moderate a comment (approve, reject, spam, hide, show).
     * 
     * @param comment_id The ID of the comment to moderate.
     * @param data The moderation action and optional reason.
     * @returns A promise
     */
    public static moderateComment<T>(comment_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.moderateComment, data, { comment_id });
    }

    /**
     * Mark a comment as needing a response.
     * 
     * @param comment_id The ID of the comment.
     * @returns A promise
     */
    public static markCommentForResponse<T>(comment_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.markCommentForResponse, undefined, { comment_id });
    }

    /**
     * Get the full thread for a given comment.
     * 
     * @param comment_id The ID of a comment within the thread.
     * @returns A promise
     */
    public static getCommentThread<T>(comment_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.getCommentThread, undefined, { comment_id });
    }

    /**
     * Trigger a manual update of a comment's metrics from its platform.
     * 
     * @param comment_id The ID of the comment to update.
     * @returns A promise
     */
    public static updateCommentMetrics<T>(comment_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.updateCommentMetrics, undefined, { comment_id });
    }

    /**
     * Create a new top-level comment on a post.
     * 
     * @param post_id The ID of the social media post to comment on.
     * @param data The content of the comment.
     * @returns A promise
     */
    public static createComment<T>(post_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.createComment, data, { post_id });
    }

    /**
   * Get game install attribution data for a specific social media post.
   * 
   * @param post_id The ID of the social media post.
   * @param params Optional query parameters (start_date, end_date, confidence_threshold).
   * @returns A promise
   */
    public static getPostAttribution<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.getPostAttribution, undefined, { post_id }, params);
    }

    /**
    * Get a report of all social media posts for a title that are converting to game installs.
    * 
    * @param params Query parameters (title_id, start_date, end_date, confidence_threshold).
    * @returns A promise
    */
    public static getSocialPostAttributionReport<T>(params: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.getSocialPostAttributionReport, undefined, undefined, params);
    }

     /**
    * Get a summary of clicks for each short link in a post.
    * 
    * @param post_id The ID of the social media post.
    * @returns A promise
    */
    public static getLinkSummary<T>(post_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.getLinkSummary, undefined, { post_id });
    }

    /**
     * Trigger a historical sync for a specific platform for the current user.
     * 
     * @see https://api.glitch.fun/api/documentation#/Social%20Media%20Posts/syncHistory
     * 
     * @param platform The platform to sync (e.g., 'twitter', 'youtube', 'bluesky').
     * 
     * @returns promise
     */
    public static syncHistory<T>(platform: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.syncHistory, {}, { platform }, params);
    }

    /**
     * Perform a social action (Like, Repost, Vote) on a post.
     * 
     * @param post_id The ID of the social media post.
     * @param action The action to perform.
     * @returns promise
     */
    public static performAction<T>(post_id: string, action: 'like' | 'unlike' | 'repost' | 'unrepost' | 'vote_up' | 'vote_down' | 'unvote'): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.performAction, { action }, { post_id });
    }

    /**
     * Perform a social action (Like, Repost, Vote) on a comment.
     * 
     * @param comment_id The ID of the comment.
     * @param action The action to perform.
     * @returns promise
     */
    public static performCommentAction<T>(comment_id: string, action: 'like' | 'unlike' | 'repost' | 'unrepost' | 'vote_up' | 'vote_down' | 'unvote'): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.performCommentAction, { action }, { comment_id });
    }

    /**
     * Get ad creative performance matrix.
     */
    public static creativePerformance<T>(params: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.creativePerformance, {}, {}, params);
    }

     /**
     * List social media conversations.
     * 
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/listSocialConversations
     * 
     * @param params Query parameters (scheduler_id, platform, page, per_page).
     * @returns promise
     */
    public static listConversations<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.listConversations, undefined, undefined, params);
    }

    /**
     * Sync conversations from external platform.
     * 
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/syncSocialConversations
     * 
     * @param data Body parameters (platform, scheduler_id).
     * @returns promise
     */
    public static syncConversations<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.syncConversations, data);
    }

    /**
     * Get a specific conversation.
     * 
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/getSocialConversation
     * 
     * @param conversation_id The ID of the conversation.
     * @returns promise
     */
    public static getConversation<T>(conversation_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.getConversation, undefined, { conversation_id });
    }

    /**
     * List messages in a conversation.
     * 
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/listSocialMessages
     * 
     * @param conversation_id The ID of the conversation.
     * @param params Query parameters (sync, page, per_page).
     * @returns promise
     */
    public static getConversationMessages<T>(conversation_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.getConversationMessages, undefined, { conversation_id }, params);
    }

    /**
     * Send a Direct Message.
     * 
     * @see https://api.glitch.fun/api/documentation#/Social%20Messaging/sendSocialMessage
     * 
     * @param data Body parameters (message, conversation_id, recipient_id, platform, scheduler_id, media_ids).
     * @returns promise
     */
    public static sendSocialMessage<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.sendSocialMessage, data);
    }

    /**
     * Reply to a high-intent TikTok comment via Direct Message.
     * 
     * @param comment_id The ID of the comment.
     * @param data { message: string }
     */
    public static replyViaDm<T>(comment_id: string, data: { message: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.replyViaDm, data, { comment_id });
    }

    /**
     * List all discovered Reddit questions (Admin Only).
     * 
     * @param params Query parameters: status, subreddit, is_question.
     */
    public static listRedditQuestions<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.listRedditQuestions, undefined, undefined, params);
    }

    /**
     * Retrieve details for a specific discovered Reddit question (Admin Only).
     * 
     * @param id The UUID of the question.
     */
    public static viewRedditQuestion<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.viewRedditQuestion, {}, { id }, params);
    }

    /**
     * Update a Reddit question's status or metadata (Admin Only).
     * 
     * @param id The UUID of the question.
     * @param data { status: 'pending'|'answered'|'ignored', metadata?: object }
     */
    public static updateRedditQuestion<T>(id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.updateRedditQuestion, data, { id }, params);
    }

    /**
     * Delete a discovered Reddit question (Admin Only).
     * 
     * @param id The UUID of the question.
     */
    public static deleteRedditQuestion<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.deleteRedditQuestion, {}, { id }, params);
    }

    /**
     * Optimize a Reddit post for a specific subreddit using the AI engine (Admin Only).
     * 
     * @param data { subreddit: string, content: string, title_id: string }
     */
    public static optimizeRedditPost<T>(data: { subreddit: string, content: string, title_id: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(SocialPostsRoute.routes.optimizeRedditPost, data);
    }
}

export default SocialPosts;