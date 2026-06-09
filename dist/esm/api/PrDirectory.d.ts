import Response from "../util/Response";
import { AxiosPromise } from "axios";
/**
 * Allowed outlet types in the PR directory.
 */
export type PrPublicationType = "blog" | "podcast" | "publication";
/**
 * Eligibility state for a PR outlet.
 */
export type PrEligibilityStatus = "eligible" | "ineligible" | "needs_review" | "duplicate" | "archived";
/**
 * Verification state used by PR outlets, people, links, and contact points.
 */
export type PrVerificationStatus = "unverified" | "verified" | "stale" | "blocked" | "failed" | "needs_review";
/**
 * Email health status stored on the outlet-level PR email field.
 */
export type PrEmailStatus = "unknown" | "verified" | "bounced" | "missing" | "needs_review";
/**
 * Contact verification state for normalized contact points.
 */
export type PrContactVerificationStatus = "unverified" | "verified" | "stale" | "bounced" | "invalid" | "blocked" | "needs_review";
/**
 * Link refresh status for evidence URLs.
 */
export type PrLinkStatus = "unverified" | "ok" | "redirected" | "broken" | "blocked" | "failed" | "stale";
/**
 * Filters accepted by `/pr/publications` and `/pr/report`.
 *
 * Tag filters are human-readable slugs from `/pr/tags`. The backend accepts
 * format, genre, platform, and audience as namespace-specific tag filters so
 * frontend screens can expose simple controls without knowing pivot table
 * details.
 */
export interface PrPublicationSearchParams {
    q?: string;
    type?: PrPublicationType;
    eligibility_status?: PrEligibilityStatus;
    verification_status?: PrVerificationStatus;
    dedicated_to_gaming?: boolean;
    has_email?: boolean;
    country?: string;
    language?: string;
    canonical_domain?: string;
    tag?: string;
    format?: string;
    genre?: string;
    platform?: string;
    audience?: string;
    sort?: "name" | "-name" | "type" | "-type" | "eligibility_status" | "-eligibility_status" | "verification_status" | "-verification_status" | "last_verified_at" | "-last_verified_at" | "updated_at" | "-updated_at" | string;
    page?: number;
    per_page?: number;
}
/**
 * Filters accepted by `/pr/people`.
 */
export interface PrPeopleSearchParams {
    q?: string;
    publication_id?: string;
    role_category?: string;
    is_active?: boolean;
    verification_status?: PrVerificationStatus;
    has_email?: boolean;
    tag?: string;
    role?: string;
    sort?: "name" | "-name" | "verification_status" | "-verification_status" | "last_verified_at" | "-last_verified_at" | "updated_at" | "-updated_at" | string;
    page?: number;
    per_page?: number;
}
/**
 * Filters accepted by `/pr/tags`.
 */
export interface PrTagSearchParams {
    namespace?: string;
    q?: string;
}
/**
 * Query parameters accepted by `/titles/{title_id}/pr/matches`.
 *
 * The title matcher uses the title profile plus optional human-readable search
 * context to rank eligible outlets and explain why each outlet is a fit.
 */
export interface PrTitleMatchParams extends PrPublicationSearchParams {
    genres?: string[];
    platforms?: string[];
    audiences?: string[];
    limit?: number;
}
/**
 * Request body accepted by `/admin/pr/verification/queue`.
 */
export interface PrQueueVerificationRequest {
    due?: boolean;
    limit?: number;
    link_ids?: string[];
}
/**
 * A normalized metadata tag used to filter and match PR outlets, people, and
 * roles.
 */
export interface PrTag {
    id: string;
    namespace: string;
    slug: string;
    label: string;
    description?: string | null;
    pivot?: {
        confidence?: number | null;
        source?: string | null;
        source_link_id?: string | null;
        verified_at?: string | null;
        metadata?: Record<string, any> | null;
    };
    metadata?: Record<string, any>;
    created_at?: string | null;
    updated_at?: string | null;
}
/**
 * A refreshable evidence URL that supports an outlet, person, role, or contact
 * point.
 */
export interface PrLink {
    id: string;
    linkable_type?: string | null;
    linkable_id?: string | null;
    link_type: string;
    url: string;
    canonical_url?: string | null;
    final_url?: string | null;
    domain?: string | null;
    priority: number;
    http_status?: number | null;
    status: PrLinkStatus;
    content_type?: string | null;
    content_hash?: string | null;
    etag?: string | null;
    last_modified_at?: string | null;
    last_checked_at?: string | null;
    next_check_at?: string | null;
    last_error?: string | null;
    is_source_of_truth: boolean;
    metadata?: Record<string, any>;
    created_at?: string | null;
    updated_at?: string | null;
}
/**
 * A normalized way to reach an outlet, person, or publication role.
 */
export interface PrContactPoint {
    id: string;
    contactable_type: string;
    contactable_id: string;
    pr_link_id?: string | null;
    contact_type: "email" | "linkedin" | "x" | "bluesky" | "contact_form" | string;
    label?: string | null;
    value: string;
    normalized_value: string;
    verification_status: PrContactVerificationStatus;
    confidence?: number | null;
    is_primary: boolean;
    first_seen_at?: string | null;
    last_seen_at?: string | null;
    source_link?: PrLink | null;
    metadata?: Record<string, any>;
    created_at?: string | null;
    updated_at?: string | null;
}
/**
 * The role a PR person has at one publication, blog, or podcast.
 */
export interface PublicationPerson {
    id: string;
    publication_id: string;
    pr_person_id: string;
    source_link_id?: string | null;
    role_title?: string | null;
    role_category?: string | null;
    email?: string | null;
    email_status: "unknown" | "verified" | "bounced" | "invalid" | "needs_review";
    is_primary_contact: boolean;
    is_current: boolean;
    confidence?: number | null;
    started_at?: string | null;
    ended_at?: string | null;
    last_verified_at?: string | null;
    source_notes?: string | null;
    person?: PrPerson | null;
    publication?: PrPublication | null;
    source_link?: PrLink | null;
    contact_points?: PrContactPoint[];
    tags?: PrTag[];
    metadata?: Record<string, any>;
    created_at?: string | null;
    updated_at?: string | null;
}
/**
 * A gaming-focused publication, independent blog, or podcast in the PR
 * directory.
 */
export interface PrPublication {
    id: string;
    name: string;
    slug?: string | null;
    type: PrPublicationType;
    url?: string | null;
    canonical_domain?: string | null;
    description?: string | null;
    main_pr_email?: string | null;
    main_pr_email_status: PrEmailStatus;
    dedicated_to_gaming: boolean;
    eligibility_status: PrEligibilityStatus;
    exclusion_reason?: string | null;
    language?: string | null;
    country?: string | null;
    network_or_owner?: string | null;
    verification_status: PrVerificationStatus;
    last_verified_at?: string | null;
    next_verification_at?: string | null;
    source_imported_at?: string | null;
    people_count?: number;
    contact_points_count?: number;
    links_count?: number;
    people?: PublicationPerson[];
    contact_points?: PrContactPoint[];
    links?: PrLink[];
    tags?: PrTag[];
    metadata?: Record<string, any>;
    created_at?: string | null;
    updated_at?: string | null;
}
/**
 * A journalist, editor, podcast host, producer, contributor, or other PR
 * contact associated with one or more gaming-focused outlets.
 */
export interface PrPerson {
    id: string;
    name: string;
    slug?: string | null;
    bio?: string | null;
    location?: string | null;
    linkedin_url?: string | null;
    x_url?: string | null;
    bluesky_url?: string | null;
    website_url?: string | null;
    is_active: boolean;
    verification_status: PrVerificationStatus;
    last_verified_at?: string | null;
    next_verification_at?: string | null;
    roles_count?: number;
    contact_points_count?: number;
    links_count?: number;
    roles?: PublicationPerson[];
    contact_points?: PrContactPoint[];
    links?: PrLink[];
    tags?: PrTag[];
    metadata?: Record<string, any>;
    created_at?: string | null;
    updated_at?: string | null;
}
/**
 * Aggregate PR directory health metrics returned by `/pr/report`.
 */
export interface PrDirectoryReport {
    generated_at: string;
    publications: {
        total: number;
        by_type: Record<string, number>;
        by_eligibility_status: Record<string, number>;
        by_verification_status: Record<string, number>;
        dedicated_to_gaming: number;
        with_email: number;
        due_for_verification: number;
    };
    people: {
        total: number;
        active: number;
        with_email: number;
        by_verification_status: Record<string, number>;
    };
    links: {
        total: number;
        by_type: Record<string, number>;
        by_status: Record<string, number>;
        due_for_check: number;
    };
    contacts: {
        total: number;
        by_type: Record<string, number>;
        by_status: Record<string, number>;
    };
    tags: {
        total: number;
        by_namespace: Record<string, number>;
    };
}
/**
 * A ranked title-to-outlet match with evidence, contact route, and plain-English
 * explanation.
 */
export interface PrTitleMatch {
    publication: PrPublication;
    score: number;
    matched_tags: string[];
    best_contact_path?: Record<string, any> | null;
    why: string[];
    risks: string[];
    evidence_links: PrLink[];
}
/**
 * Response body returned after queueing PR verification jobs.
 */
export interface PrQueueVerificationResponse {
    queued: number;
}
/**
 * SDK wrapper for the PR Directory API.
 *
 * The PR directory is read-friendly by default: public endpoints expose
 * searchable publications, people, tags, and reporting metrics. Authenticated
 * title admins can request title-specific PR matches, and site admins can queue
 * monthly-style verification jobs.
 */
declare class PrDirectory {
    /**
     * Search gaming-focused PR publications, independent blogs, and podcasts.
     *
     * @example
     * ```ts
     * Glitch.api.PrDirectory.listPublications({
     *   q: "indie RPG",
     *   has_email: true,
     *   eligibility_status: "eligible",
     *   sort: "-last_verified_at",
     * });
     * ```
     */
    static listPublications<T = PrPublication[]>(params?: PrPublicationSearchParams): AxiosPromise<Response<T>>;
    /**
     * Retrieve one PR publication profile with loaded people, contact points,
     * evidence links, and tags.
     */
    static viewPublication<T = PrPublication>(publication_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Search PR people and roles across all known publications.
     *
     * @example
     * ```ts
     * Glitch.api.PrDirectory.listPeople({
     *   q: "reviews editor",
     *   has_email: true,
     *   role_category: "editor",
     * });
     * ```
     */
    static listPeople<T = PrPerson[]>(params?: PrPeopleSearchParams): AxiosPromise<Response<T>>;
    /**
     * Retrieve one PR person profile with their outlet roles, profile links,
     * contact points, and metadata tags.
     */
    static viewPerson<T = PrPerson>(person_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List the normalized tag vocabulary used for PR search, filters, matching,
     * and reporting.
     */
    static listTags<T = PrTag[]>(params?: PrTagSearchParams): AxiosPromise<Response<T>>;
    /**
     * Get aggregate PR directory reporting metrics. Publication filters can be
     * supplied to scope the outlet portion of the report.
     */
    static report<T = PrDirectoryReport>(params?: PrPublicationSearchParams): AxiosPromise<Response<T>>;
    /**
     * Match a registered game title to PR outlets. Requires an auth token for a
     * user who can administer the requested title.
     */
    static titleMatches<T = PrTitleMatch[]>(title_id: string, params?: PrTitleMatchParams): AxiosPromise<Response<T>>;
    /**
     * Queue PR verification jobs. Requires a site-admin auth token.
     *
     * @example
     * ```ts
     * Glitch.api.PrDirectory.queueVerification({ due: true, limit: 250 });
     * ```
     */
    static queueVerification<T = PrQueueVerificationResponse>(data?: PrQueueVerificationRequest, params?: Record<string, any>): AxiosPromise<Response<T>>;
}
export default PrDirectory;
