import Route from './interface';
import HTTP_METHODS from '../constants/HttpMethods';

/** Participant-only festival networking; all access checks are enforced by the API. */
export default class FestivalNetworkingRoute {
    public static routes: { [key: string]: Route } = {
        settings: { url: '/gameshows/{show_id}/networking/settings', method: HTTP_METHODS.GET },
        updateSettings: { url: '/gameshows/{show_id}/networking/settings', method: HTTP_METHODS.PUT },
        listPosts: { url: '/gameshows/{show_id}/networking/posts', method: HTTP_METHODS.GET },
        createPost: { url: '/gameshows/{show_id}/networking/posts', method: HTTP_METHODS.POST },
        getPost: { url: '/gameshows/{show_id}/networking/posts/{post_id}', method: HTTP_METHODS.GET },
        updatePost: { url: '/gameshows/{show_id}/networking/posts/{post_id}', method: HTTP_METHODS.PUT },
        listComments: { url: '/gameshows/{show_id}/networking/posts/{post_id}/comments', method: HTTP_METHODS.GET },
        createComment: { url: '/gameshows/{show_id}/networking/posts/{post_id}/comments', method: HTTP_METHODS.POST },
        setInteraction: { url: '/gameshows/{show_id}/networking/posts/{post_id}/interaction', method: HTTP_METHODS.PUT },
        apply: { url: '/gameshows/{show_id}/networking/posts/{post_id}/apply', method: HTTP_METHODS.POST },
        matches: { url: '/gameshows/{show_id}/networking/posts/{post_id}/matches', method: HTTP_METHODS.GET },
        report: { url: '/gameshows/{show_id}/networking/posts/{post_id}/report', method: HTTP_METHODS.POST },
        applications: { url: '/gameshows/{show_id}/networking/applications', method: HTTP_METHODS.GET },
        updateApplication: { url: '/gameshows/{show_id}/networking/applications/{application_id}', method: HTTP_METHODS.PUT },
        conversation: { url: '/gameshows/{show_id}/networking/applications/{application_id}/conversation', method: HTTP_METHODS.POST },
        moderation: { url: '/gameshows/{show_id}/networking/moderation', method: HTTP_METHODS.GET },
        moderatePost: { url: '/gameshows/{show_id}/networking/moderation/posts/{post_id}', method: HTTP_METHODS.PUT },
        resolveReport: { url: '/gameshows/{show_id}/networking/moderation/{report_id}', method: HTTP_METHODS.PUT },
        restrictMember: { url: '/gameshows/{show_id}/networking/members/{user_id}', method: HTTP_METHODS.PUT },
        preferences: { url: '/gameshows/{show_id}/networking/preferences', method: HTTP_METHODS.GET },
        updatePreferences: { url: '/gameshows/{show_id}/networking/preferences', method: HTTP_METHODS.PUT },
        media: { url: '/gameshows/{show_id}/networking/media', method: HTTP_METHODS.GET },
        uploadMedia: { url: '/gameshows/{show_id}/networking/media', method: HTTP_METHODS.POST },
        organizations: { url: '/gameshows/{show_id}/networking/organizations', method: HTTP_METHODS.GET },
        analytics: { url: '/gameshows/{show_id}/networking/analytics', method: HTTP_METHODS.GET },
    };
}
