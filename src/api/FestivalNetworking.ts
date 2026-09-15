import { AxiosProgressEvent, AxiosPromise, AxiosRequestConfig } from 'axios';
import FestivalNetworkingRoute from '../routes/FestivalNetworkingRoute';
import Requests from '../util/Requests';

export type FestivalPostKind = 'discussion' | 'job' | 'talent';
export type FestivalPostState = 'active' | 'locked' | 'archived' | 'hidden' | 'deleted' | 'removed' | 'paused' | 'filled' | 'expired' | 'closed';
export type FestivalApplicationState = 'submitted' | 'viewed' | 'shortlisted' | 'interview' | 'accepted' | 'rejected' | 'withdrawn' | 'closed';
export type FestivalWorkType = 'full_time' | 'part_time' | 'contract' | 'gig';
export type FestivalRequestOptions = Pick<AxiosRequestConfig, 'signal' | 'timeout'>;

export interface FestivalNetworkingSettings {
    discussions_enabled: boolean;
    jobs_enabled: boolean;
    employer_posts_enabled: boolean;
    talent_posts_enabled: boolean;
    matching_enabled: boolean;
    voting_enabled: boolean;
    comments_enabled: boolean;
    media_enabled: boolean;
    /** Registration or a valid ticket is mandatory; cannot be disabled. */
    require_registration: true;
    public_viewing: false;
    anonymous_enabled: false;
    categories: string[];
    skills: string[];
}

export interface FestivalPostInput {
    kind: FestivalPostKind;
    title: string;
    /** Sanitized HTML from the shared WYSIWYG editor. */
    content: string;
    visibility?: 'public' | 'unlisted' | 'private';
    category?: string | null;
    tags?: string[];
    skills?: string[];
    preferred_skills?: string[];
    job_types?: FestivalWorkType[];
    company?: string | null;
    organization_id?: string | null;
    work_arrangement?: 'remote' | 'onsite' | 'hybrid' | null;
    experience?: 'any' | 'entry' | 'junior' | 'mid' | 'senior' | 'lead' | null;
    location?: string | null;
    availability?: 'immediately' | 'within_30_days' | 'specific_date' | 'flexible' | 'unavailable';
    availability_date?: string | null;
    deadline?: string | null;
    expires_at?: string | null;
    compensation_type?: 'negotiable' | 'yearly' | 'monthly' | 'hourly' | 'flat_fee';
    compensation_min?: number | null;
    compensation_max?: number | null;
    currency?: string | null;
    portfolio_url?: string | null;
    application_method?: 'internal' | 'external';
    application_url?: string | null;
    /** UserMedia IDs returned by uploadMedia, NOT Media IDs or clip-library selections. Max 8. */
    media_ids?: string[];
    public_compensation?: boolean;
    public_location?: boolean;
    public_availability?: boolean;
    public_portfolio?: boolean;
}

export interface FestivalNetworkingFilters {
    kind?: FestivalPostKind;
    view?: 'all' | 'mine' | 'saved' | 'hidden' | 'comments';
    sort?: 'new' | 'hot' | 'top' | 'discussed' | 'compensation' | 'deadline';
    window?: 'today' | 'week' | 'month' | 'festival' | 'all';
    q?: string;
    category?: string;
    skill?: string;
    job_type?: FestivalWorkType;
    arrangement?: 'remote' | 'onsite' | 'hybrid';
    experience?: string;
    location?: string;
    company?: string;
    availability?: string;
    currency?: string;
    compensation_type?: string;
    min_compensation?: number;
    tag?: string;
    author?: string;
    has_comments?: boolean;
    has_portfolio?: boolean;
    media_type?: 'image' | 'video';
    page?: number;
    per_page?: number;
}

export interface FestivalMediaUpload {
    id: string;
    user_media_id: string;
    media_id: string;
    url: string;
    mime_type: string;
    size: number;
    title: string;
    processing_status: 'completed' | 'pending' | 'processing' | 'failed';
}

export interface FestivalNetworkingProfile { id: string | null; name: string; }
export interface FestivalNetworkingResponse<T> {
    data: T;
    message?: string;
    meta?: { current_page: number; last_page: number; total?: number; };
    has_access?: boolean;
    can_manage?: boolean;
    can_moderate?: boolean;
    user?: FestivalNetworkingProfile | null;
    show?: { id: string; name: string; };
    audit?: Array<Record<string, unknown>>;
}
export interface FestivalPost {
    id: string;
    game_show_id: string;
    parent_id: string | null;
    kind: FestivalPostKind | 'comment';
    title: string;
    content: string;
    state: FestivalPostState;
    visibility: 'public' | 'unlisted' | 'private';
    details: Partial<FestivalPostInput>;
    author: FestivalNetworkingProfile | null;
    created_at: string;
    updated_at: string;
    score: number;
    my_vote: -1 | 0 | 1;
    saved: boolean;
    is_owner: boolean;
    can_edit: boolean;
    comment_count: number;
    media: Array<{ id: string; user_media_id?: string | null; url: string; mime_type: string; title: string | null; }>;
    my_application?: { id: string; status: FestivalApplicationState; } | null;
    match?: { score: number; reasons: string[]; missing_required_skills: string[]; disclaimer: string; };
}
export interface FestivalApplicationInput { message?: string; portfolio?: string[]; }
export interface FestivalConversation {
    id: string;
    festival_application_id: string;
    can_send: boolean;
    read_only_reason: string | null;
    festival_context: { game_show_id: string; post_id: string | null; title: string; kind: FestivalPostKind; application_status: FestivalApplicationState } | null;
    users: Array<{ id: string | null; display_name: string; avatar: string | null }>;
    messages: Array<{ id: string; thread_id: string; user_id: string | null; message: string; client_message_id: string | null; created_at: string; updated_at: string; user: { id: string | null; display_name: string; avatar: string | null } }>;
}
export interface FestivalPreferences { notifications?: boolean; blocked_users?: string[]; blocked_companies?: string[]; }
export interface FestivalReportInput {
    reason: 'spam' | 'harassment' | 'hate' | 'sexual_content' | 'scam' | 'job_scam' | 'copyright' | 'malicious_link' | 'misleading' | 'other';
    explanation?: string;
}

/** Festival-scoped discussions, talent, jobs, moderation and new owned media uploads. */
export default class FestivalNetworking {
    private static request<T>(name: string, show_id: string, data?: object, ids: Record<string, string> = {}, params?: object, options?: FestivalRequestOptions): AxiosPromise<FestivalNetworkingResponse<T>> {
        const replacements = Object.fromEntries(Object.entries({ show_id, ...ids }).map(([key, id]) => [key, encodeURIComponent(id)]));
        return Requests.processRoute<T>(FestivalNetworkingRoute.routes[name], data, replacements, params, options);
    }

    /** Read enabled tools and the current account's registration/ticket access. */
    static settings<T = FestivalNetworkingSettings>(id: string, options?: FestivalRequestOptions) { return this.request<T>('settings', id, undefined, {}, undefined, options); }
    /** Organizer-only settings update; admission remains mandatory. */
    static updateSettings<T = FestivalNetworkingSettings>(id: string, data: Partial<FestivalNetworkingSettings>) { return this.request<T>('updateSettings', id, data); }
    /** Search posts; compensation comparisons require currency and period. */
    static listPosts<T = FestivalPost[]>(id: string, params?: FestivalNetworkingFilters, options?: FestivalRequestOptions) { return this.request<T>('listPosts', id, undefined, {}, params, options); }
    /** Create a post with rich HTML and optional newly uploaded UserMedia IDs. */
    static createPost<T = FestivalPost>(id: string, data: FestivalPostInput) { return this.request<T>('createPost', id, data); }
    /** Direct links still require admission and content visibility permission. */
    static getPost<T = FestivalPost>(id: string, post_id: string, options?: FestivalRequestOptions) { return this.request<T>('getPost', id, undefined, { post_id }, undefined, options); }
    /** Edit or soft-delete via state; omit media_ids to preserve current attachments. */
    static updatePost<T = FestivalPost>(id: string, post_id: string, data: Partial<FestivalPostInput> & { state?: FestivalPostState }) { return this.request<T>('updatePost', id, data, { post_id }); }
    /** Paginated direct replies; fetch children to expand a thread. */
    static listComments<T = FestivalPost[]>(id: string, post_id: string, params?: { page?: number }, options?: FestivalRequestOptions) { return this.request<T>('listComments', id, undefined, { post_id }, params, options); }
    /** Add a rich-text reply, subject to locking and five-level nesting. */
    static createComment<T = FestivalPost>(id: string, post_id: string, data: { content: string }) { return this.request<T>('createComment', id, data, { post_id }); }
    /** Set, replace, or remove a vote/save/hide idempotently. */
    static setInteraction<T = FestivalPost>(id: string, post_id: string, data: { action: 'vote' | 'saved' | 'hidden'; value: -1 | 0 | 1 }) { return this.request<T>('setInteraction', id, data, { post_id }); }
    /** Apply or express interest once; the original listing is snapshotted. */
    static apply<T = Record<string, unknown>>(id: string, post_id: string, data: FestivalApplicationInput) { return this.request<T>('apply', id, data, { post_id }); }
    /** Discovery matches for the current user's own job/talent listing. */
    static matches<T = FestivalPost[]>(id: string, post_id: string, params?: { page?: number }, options?: FestivalRequestOptions) { return this.request<T>('matches', id, undefined, { post_id }, params, options); }
    /** Report suspicious content privately to festival moderators. */
    static report<T = never>(id: string, post_id: string, data: FestivalReportInput) { return this.request<T>('report', id, data, { post_id }); }
    /** Only the applicant and listing owner receive application records. */
    static applications<T = Array<Record<string, unknown>>>(id: string, params?: { page?: number }, options?: FestivalRequestOptions) { return this.request<T>('applications', id, undefined, {}, params, options); }
    /** Applicant withdrawal or owner-managed status changes. */
    static updateApplication<T = Record<string, unknown>>(id: string, application_id: string, data: { status: Exclude<FestivalApplicationState, 'submitted'> }) { return this.request<T>('updateApplication', id, data, { application_id }); }
    /** Open the application/talent inquiry's private shared-inbox conversation, creating it once for legacy applications. Only the applicant and original listing owner may call this. Use Messages.getThread/sendMessage for subsequent conversation activity. */
    static conversation<T = FestivalConversation>(id: string, application_id: string) { return this.request<T>('conversation', id, {}, { application_id }); }
    /** Moderator-only report queue and audit history. */
    static moderation<T = Array<Record<string, unknown>>>(id: string, params?: { page?: number }, options?: FestivalRequestOptions) { return this.request<T>('moderation', id, undefined, {}, params, options); }
    /** Moderation remains available even while the board is disabled. */
    static moderatePost<T = FestivalPost>(id: string, post_id: string, data: { state?: 'active' | 'hidden' | 'locked' | 'deleted' | 'removed'; remove_media?: true }) { return this.request<T>('moderatePost', id, data, { post_id }); }
    /** Resolve, dismiss or begin reviewing a report. */
    static resolveReport<T = never>(id: string, report_id: string, data: { status: 'under_review' | 'resolved' | 'dismissed' }) { return this.request<T>('resolveReport', id, data, { report_id }); }
    /** Moderator-only participant restrictions. */
    static restrictMember<T = never>(id: string, user_id: string, data: { banned: boolean }) { return this.request<T>('restrictMember', id, data, { user_id }); }
    /** Current user's privacy and notification preferences. */
    static preferences<T = FestivalPreferences>(id: string, options?: FestivalRequestOptions) { return this.request<T>('preferences', id, undefined, {}, undefined, options); }
    /** Set notification opt-out and blocked participants/companies. */
    static updatePreferences<T = FestivalPreferences>(id: string, data: FestivalPreferences) { return this.request<T>('updatePreferences', id, data); }
    /** Uploaded festival attachments only; not the gameplay clip library. */
    static media<T = Array<Record<string, unknown>>>(id: string, params?: { page?: number }, options?: FestivalRequestOptions) { return this.request<T>('media', id, undefined, {}, params, options); }
    /**
     * Upload a new image (10 MB max) or video (100 MB max), using the existing media pipeline.
     * The response ID is an owned UserMedia ID for createPost/updatePost media_ids.
     * @param file New file selected by the attendee; supported images exclude SVG.
     * @param data Which enabled board the upload is for.
     * @param onUploadProgress Transfer progress; 100% may still require conversion before completion.
     */
    static uploadMedia<T = FestivalMediaUpload>(id: string, file: File | Blob, data: { kind: FestivalPostKind }, onUploadProgress?: (event: AxiosProgressEvent) => void, options?: FestivalRequestOptions): AxiosPromise<FestivalNetworkingResponse<T>> {
        return Requests.uploadFile<T>(FestivalNetworkingRoute.routes.uploadMedia.url.replace('{show_id}', encodeURIComponent(id)), 'media', file, data, undefined, onUploadProgress, options);
    }
    /** Organizations the authenticated user is authorized to represent. */
    static organizations<T = Array<{ id: string; name: string }>>(id: string, options?: FestivalRequestOptions) { return this.request<T>('organizations', id, undefined, {}, undefined, options); }
    /** Organizer-only aggregate participation metrics. */
    static analytics<T = Record<string, unknown>>(id: string, options?: FestivalRequestOptions) { return this.request<T>('analytics', id, undefined, {}, undefined, options); }
}
