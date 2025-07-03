import MarketingAgenciesRoute from "../routes/MarketingAgenciesRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class MarketingAgencies {

    /**
     * List all marketing agencies.
     * 
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/getMarketing-agencies
     * 
     * @param params Optional query parameters (e.g., is_admin, sort_by, sort_order, page, per_page).
     * @returns promise
     */
    public static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketingAgenciesRoute.routes.list, undefined, undefined, params);
    }

    /**
     * Create a new marketing agency.
     * 
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies
     * 
     * @param data The data for the new agency.
     * @returns Promise
     */
    public static create<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketingAgenciesRoute.routes.create, data);
    }

    /**
     * Retrieve a single marketing agency by its ID.
     * 
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/getMarketing-agencies-id
     * 
     * @param id The UUID of the agency to retrieve.
     * @returns promise
     */
    public static view<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketingAgenciesRoute.routes.view, {}, { id });
    }

    /**
     * Update a marketing agency.
     * 
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/putMarketing-agencies-id
     * 
     * @param id The UUID of the agency to update.
     * @param data The data to update.
     * @returns promise
     */
    public static update<T>(id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketingAgenciesRoute.routes.update, data, { id });
    }

    /**
     * Deletes a marketing agency.
     * 
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/deleteMarketing-agencies-id
     * 
     * @param id The UUID of the agency to delete.
     * @returns promise
     */
    public static delete<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketingAgenciesRoute.routes.delete, {}, { id });
    }

    /**
     * Add a user as an administrator to an agency.
     * 
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-administrators
     * 
     * @param id The UUID of the agency.
     * @param data The data containing the user_id to add.
     * @returns Promise
     */
    public static addAdministrator<T>(id: string, data: { user_id: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketingAgenciesRoute.routes.addAdministrator, data, { id });
    }

    /**
     * Remove a user as an administrator from an agency.
     * 
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/deleteMarketing-agencies-id-administrators-user_id
     * 
     * @param id The UUID of the agency.
     * @param user_id The UUID of the user to remove.
     * @returns Promise
     */
    public static removeAdministrator<T>(id: string, user_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketingAgenciesRoute.routes.removeAdministrator, {}, { id, user_id });
    }

    /**
     * Set the logo for an agency.
     * 
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-logo
     * 
     * @param id The UUID of the agency.
     * @param data The data containing the media_id for the logo.
     * @returns Promise
     */
    public static setLogo<T>(id: string, data: { media_id: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketingAgenciesRoute.routes.setLogo, data, { id });
    }

    /**
     * Add a case study to an agency.
     * 
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-case-studies
     * 
     * @param id The UUID of the agency.
     * @param data The data containing the media_id and optional order.
     * @returns Promise
     */
    public static addCaseStudy<T>(id: string, data: { media_id: string, order?: number }): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketingAgenciesRoute.routes.addCaseStudy, data, { id });
    }

    /**
     * Remove a case study from an agency.
     * 
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/deleteMarketing-agencies-id-case-studies-media_id
     * 
     * @param id The UUID of the agency.
     * @param media_id The UUID of the media to remove.
     * @returns Promise
     */
    public static removeCaseStudy<T>(id: string, media_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketingAgenciesRoute.routes.removeCaseStudy, {}, { id, media_id });
    }

    /**
     * Update the order of case studies for an agency.
     * 
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-case-studies-order
     * 
     * @param id The UUID of the agency.
     * @param order_data An array of objects with media_id and new order.
     * @returns Promise
     */
    public static updateCaseStudyOrder<T>(id: string, order_data: { media_id: string, order: number }[]): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketingAgenciesRoute.routes.updateCaseStudyOrder, { order_data }, { id });
    }

    /**
     * Invite a user to become an administrator of an agency.
     * 
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-id-invites
     * 
     * @param id The UUID of the agency.
     * @param data The data containing the email of the user to invite.
     * @returns Promise
     */
    public static invite<T>(id: string, data: { email: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketingAgenciesRoute.routes.invite, data, { id });
    }

    /**
     * List all pending invitations for an agency.
     * 
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/getMarketing-agencies-id-invites
     * 
     * @param id The UUID of the agency.
     * @returns Promise
     */
    public static listInvites<T>(id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketingAgenciesRoute.routes.listInvites, {}, { id });
    }

    /**
     * Revoke a pending invitation.
     * 
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/deleteMarketing-agencies-id-invites-invite_id
     * 
     * @param id The UUID of the agency.
     * @param invite_id The UUID of the invitation to revoke.
     * @returns Promise
     */
    public static revokeInvite<T>(id: string, invite_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketingAgenciesRoute.routes.revokeInvite, {}, { id, invite_id });
    }

    /**
     * Get the details of a pending invitation using its token.
     * 
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/getMarketing-agencies-invites-details
     * 
     * @param params An object containing the token.
     * @returns Promise
     */
    public static getInviteDetails<T>(params: { token: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketingAgenciesRoute.routes.getInviteDetails, undefined, undefined, params);
    }

    /**
     * Accept an invitation to become an administrator.
     * 
     * @see https://api.glitch.fun/api/documentation#/Marketing%20Agencies/postMarketing-agencies-invites-accept
     * 
     * @param data The data containing the invitation token.
     * @returns Promise
     */
    public static acceptInvite<T>(data: { token: string }): AxiosPromise<Response<T>> {
        return Requests.processRoute(MarketingAgenciesRoute.routes.acceptInvite, data);
    }
}

export default MarketingAgencies;