import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class SocialPostsRoute {

    public static routes: { [key: string]: Route } = {
        getPosts: { url: '/socialposts', method: HTTP_METHODS.GET },
        createPost: { url: '/socialposts', method: HTTP_METHODS.POST },
        retrievePost: { url: '/socialposts/{post_id}', method: HTTP_METHODS.GET },
        updatePost: { url: '/socialposts/{post_id}', method: HTTP_METHODS.PUT },
        deletePost: { url: '/socialposts/{post_id}', method: HTTP_METHODS.DELETE },
        dispute: { url: '/social/{post_id}/dispute', method: HTTP_METHODS.POST },
        history: { url: '/socialposts/{post_id}/history', method: HTTP_METHODS.GET },
        progression: { url: '/socialposts/progression', method: HTTP_METHODS.GET },
        addMedia: { url: '/socialposts/{post_id}/addMedia', method: HTTP_METHODS.POST },
        removeMedia: { url: '/socialposts/{post_id}/removeMedia/{media_id}', method: HTTP_METHODS.DELETE },
        reschedule: { url: '/socialposts/{post_id}/reschedule', method: HTTP_METHODS.POST },
        reports: { url: '/socialposts/{post_id}/reports', method: HTTP_METHODS.GET },
        updatePostImpressions: { url: '/socialposts/{post_id}/impressions', method: HTTP_METHODS.PUT },
        shortLinkReports: { url: '/socialposts/shortlinks/reports', method: HTTP_METHODS.GET },

        // New Comment Routes
        listComments: { url: '/socialposts/{post_id}/comments', method: HTTP_METHODS.GET },
        syncComments: { url: '/socialposts/{post_id}/sync-comments', method: HTTP_METHODS.POST },
        listPendingResponses: { url: '/socialposts/comments/pending-responses', method: HTTP_METHODS.GET },
        viewComment: { url: '/socialposts/comments/{comment_id}', method: HTTP_METHODS.GET },
        replyToComment: { url: '/socialposts/comments/{comment_id}/reply', method: HTTP_METHODS.POST },
        moderateComment: { url: '/socialposts/comments/{comment_id}/moderate', method: HTTP_METHODS.PUT },
        markCommentForResponse: { url: '/socialposts/comments/{comment_id}/mark-for-response', method: HTTP_METHODS.PUT },
        getCommentThread: { url: '/socialposts/comments/{comment_id}/thread', method: HTTP_METHODS.GET },
        updateCommentMetrics: { url: '/socialposts/comments/{comment_id}/update-metrics', method: HTTP_METHODS.PUT },
        createComment: { url: '/socialposts/{post_id}/comments', method: HTTP_METHODS.POST },

        getPostAttribution: { url: '/socialposts/{post_id}/attribution', method: HTTP_METHODS.GET },
        getSocialPostAttributionReport: { url: '/reports/fingerprinting/social-post-attribution', method: HTTP_METHODS.GET },
        getLinkSummary: { url: '/socialposts/{post_id}/link-summary', method: HTTP_METHODS.GET },
        syncHistory: { url: '/social/sync-history/{platform}', method: HTTP_METHODS.POST },

        performAction: { url: '/socialposts/{post_id}/action', method: HTTP_METHODS.POST },
        performCommentAction: { url: '/socialposts/comments/{comment_id}/action', method: HTTP_METHODS.POST },

        creativePerformance: { url: '/socialposts/creative-performance', method: HTTP_METHODS.GET },

    };

}

export default SocialPostsRoute;