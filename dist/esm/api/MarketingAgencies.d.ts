import Response from "../util/Response";
import { AxiosPromise } from "axios";
declare class MarketingAgencies {
    /**
     * List all marketing agencies.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/getMarketing-agencies
     *
     * @param params Optional query parameters (e.g., is_admin, sort_by, sort_order, page, per_page).
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new marketing agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies
     *
     * @param data The data for the new agency.
     * @returns Promise
     */
    static create<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single marketing agency by its ID.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/getMarketing-agencies-id
     *
     * @param id The UUID of the agency to retrieve.
     * @returns promise
     */
    static view<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Update a marketing agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/putMarketing-agencies-id
     *
     * @param id The UUID of the agency to update.
     * @param data The data to update.
     * @returns promise
     */
    static update<T>(id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Deletes a marketing agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/deleteMarketing-agencies-id
     *
     * @param id The UUID of the agency to delete.
     * @returns promise
     */
    static delete<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Add a user as an administrator to an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-administrators
     *
     * @param id The UUID of the agency.
     * @param data The data containing the user_id to add.
     * @returns Promise
     */
    static addAdministrator<T>(id: string, data: {
        user_id: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Remove a user as an administrator from an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/deleteMarketing-agencies-id-administrators-user_id
     *
     * @param id The UUID of the agency.
     * @param user_id The UUID of the user to remove.
     * @returns Promise
     */
    static removeAdministrator<T>(id: string, user_id: string): AxiosPromise<Response<T>>;
    /**
     * Set the logo for an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-logo
     *
     * @param id The UUID of the agency.
     * @param data The data containing the media_id for the logo.
     * @returns Promise
     */
    static setLogo<T>(id: string, data: {
        media_id: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Add a case study to an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-case-studies
     *
     * @param id The UUID of the agency.
     * @param data The data containing the media_id and optional order.
     * @returns Promise
     */
    static addCaseStudy<T>(id: string, data: {
        media_id: string;
        order?: number;
    }): AxiosPromise<Response<T>>;
    /**
     * Remove a case study from an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/deleteMarketing-agencies-id-case-studies-media_id
     *
     * @param id The UUID of the agency.
     * @param media_id The UUID of the media to remove.
     * @returns Promise
     */
    static removeCaseStudy<T>(id: string, media_id: string): AxiosPromise<Response<T>>;
    /**
     * Update the order of case studies for an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-case-studies-order
     *
     * @param id The UUID of the agency.
     * @param order_data An array of objects with media_id and new order.
     * @returns Promise
     */
    static updateCaseStudyOrder<T>(id: string, order_data: {
        media_id: string;
        order: number;
    }[]): AxiosPromise<Response<T>>;
    /**
     * Invite a user to become an administrator of an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-invites
     *
     * @param id The UUID of the agency.
     * @param data The data containing the email of the user to invite.
     * @returns Promise
     */
    static invite<T>(id: string, data: {
        email: string;
    }): AxiosPromise<Response<T>>;
    /**
     * List all pending invitations for an agency.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/getMarketing-agencies-id-invites
     *
     * @param id The UUID of the agency.
     * @returns Promise
     */
    static listInvites<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Revoke a pending invitation.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/deleteMarketing-agencies-id-invites-invite_id
     *
     * @param id The UUID of the agency.
     * @param invite_id The UUID of the invitation to revoke.
     * @returns Promise
     */
    static revokeInvite<T>(id: string, invite_id: string): AxiosPromise<Response<T>>;
    /**
     * Get the details of a pending invitation using its token.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/getMarketing-agencies-invites-details
     *
     * @param params An object containing the token.
     * @returns Promise
     */
    static getInviteDetails<T>(params: {
        token: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Accept an invitation to become an administrator.
     *
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-invites-accept
     *
     * @param data The data containing the invitation token.
     * @returns Promise
     */
    static acceptInvite<T>(data: {
        token: string;
    }): AxiosPromise<Response<T>>;
}
export default MarketingAgencies;
