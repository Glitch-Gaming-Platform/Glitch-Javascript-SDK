import { AxiosPromise, AxiosProgressEvent } from 'axios';

/**
 * Config
 *
 * The configuration class will hold the configuration information used when accessing the
 * API.
 */
declare class Config {
    private static _baseUrl;
    private static _authToken;
    private static _community;
    private static _rootDomain;
    private static _baseUrlLocked;
    /**
     * Set the configuration
     *
     * @param baseUrl The url base endpoint of the api
     * @param authToken The JSON Web Token
     */
    static setConfig(baseUrl: string, authToken: string, lock?: boolean): void;
    /**
     * Sets the endpoint for the API
     *
     * @param baseUrl The url that connects to the APIs base
     * @param lock If set to true, will lock the baseUrl so it cannot be changed
     */
    static setBaseUrl(baseUrl: string, lock?: boolean): void;
    /**
     * Set the JSON Web Token (JWT) that will be passed to the API
     *
     * @param authToken The JWT
     */
    static setAuthToken(authToken: string): void;
    /**
     * Set the community to be associated with this config through
     *
     * @param community The object of the community
     */
    static setCommunity(community: Record<string, any>): void;
    /**
     * Sets the root level domain so data can be accessed across
     * multiple subdomains
     *
     * @param domain The domain ie: example.com
     */
    static setRootDomain(domain: string): void;
    static getRootDomain(): string;
    /**
     * Gets base url
     */
    static get baseUrl(): string;
    /**
     * Gets auth token
     */
    static get authToken(): string;
    /**
     * Gets the community currently associated
     */
    static get getCommunity(): object;
}

interface Response<T> {
    data: T;
    success: boolean;
    message?: string;
}

declare class Auth {
    /**
     * Attempts to authenticate a user using their email address.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @param email The email address of the user
     * @param password The password of the user
     *
     * @returns A promise
     */
    static loginWithEmail<T>(email: string, password: string): AxiosPromise<Response<T>>;
    /**
     * Attempts to authenticate a user using their username.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @param username The username of the user
     * @param password The password of the user
     *
     * @returns A promise
     */
    static loginWithUsername<T>(username: string, password: string): AxiosPromise<Response<T>>;
    /**
     * Attempts to register a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/oneTimeLoginToken
     *
     * @param data The data the user can register with.
     *
     * @returns A promise
     */
    static register<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Request an authentication token to faciliate a one time login of an user.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/oneTimeLoginToken
     *
     * @returns promise
     */
    static oneTimeLogin<T>(token: string): AxiosPromise<Response<T>>;
    /**
     * Execute the password reset process using a user's email address.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authForgotPassword
     *
     * @param email The email address
     *
     * @returns promise
     */
    static forgotPasswordWithEmail<T>(email: string): AxiosPromise<Response<T>>;
    /**
     * Resets the users password after the forgot password has been executed.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authResetPassword
     *
     * @param data The parameters required to reset the password.
     *
     * @returns promise
     */
    static resetPassword<T>(data: object): AxiosPromise<Response<T>>;
}

declare class AccessKeys {
    /**
     * List all access keys for a given title.
     *
     * @see https://api.glitch.fun/api/documentation#/Access%20Keys/get_titles__title_id__keys
     *
     * @param title_id The UUID of the title.
     * @param params Optional query parameters for pagination.
     * @returns promise
     */
    static list<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Bulk create access keys from a string of codes.
     *
     * @see https://api.glitch.fun/api/documentation#/Access%20Keys/post_titles__title_id__keys
     *
     * @param title_id The UUID of the title.
     * @param data The platform and codes to upload.
     * @param data.platform The platform for the keys (e.g., 'steam').
     * @param data.codes A string of codes separated by newlines, commas, or spaces.
     * @returns Promise
     */
    static store<T>(title_id: string, data: {
        platform: string;
        codes: string;
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes an unassigned access key.
     *
     * @see https://api.glitch.fun/api/documentation#/Access%20Keys/delete_keys__key_id_
     *
     * @param key_id The UUID of the access key to delete.
     * @returns promise
     */
    static delete<T>(key_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Competitions {
    /**
     * List all the competitions
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceList
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new competition
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/newResourceStorage
     *
     * @param data The date to be passed when creating a competiton.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a competition
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateStorage
     *
     * @param competition_id The id of the competition to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static update<T>(competition_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/showStorage
     *
     * @param competition_id The id fo the competition to retrieve.
     *
     * @returns promise
     */
    static view<T>(competition_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes a competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/destoryStorage
     *
     * @param competition_id The id of the competition to delete.
     * @returns promise
     */
    static delete<T>(competition_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a team
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/addTeam
     *
     * @param competition_id
     * @param team_id
     * @returns promise
     */
    static addTeam<T>(competition_id: string, team_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Adds participant
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/addParticipant
     *
     * @param competition_id
     * @param user_id
     * @returns promise
     */
    static addParticipant<T>(competition_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Register a team
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/registerTeam
     *
     * @param competition_id
     * @param team_id
     * @returns promise
     */
    static registerTeam<T>(competition_id: string, team_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Register a user
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/registerParticipant
     *
     * @param competition_id
     * @returns promise
     */
    static registerUser<T>(competition_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sync rounds
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/syncRounds
     *
     * @param competition_id
     * @param number_of_competitors
     * @param competitors_per_bracket
     * @returns promise
     */
    static syncRounds<T>(competition_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * auto generate team brackets
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/autoGenerateTeamBrackets
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    static autoGenerate<T>(competition_id: string, round_id: number, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * auto generate user brackets
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/autoGenerateUserBrackets
     *
     * @param competition_id
     * @returns promise
     */
    static autoGenerateUserBrackets<T>(competition_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
         * Updates the main image for the event using a File object.
         *
         * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/uploadMainImage
         *
         * @param file The file object to upload.
         * @param data Any additional data to pass along to the upload.
         *
         * @returns promise
         */
    static uploadCompetitionMainImageFile<T>(competition_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the main image for the competition using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/uploadMainImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadCompetitionMainImageBlob<T>(competition_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the competition using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/uploadBannerImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadCompetitionBannerImageFile<T>(competition_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the competition using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/uploadBannerImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadCompetitionsBannerImageBlob<T>(competition_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Invites
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionUserInviteList
     *
     * @param competition_id
     * @returns promise
     */
    static invites<T>(competition_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sends invite
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionSendInvite
     *
     * @param competition_id
     * @returns promise
     */
    static sendInvite<T>(competition_id: string): AxiosPromise<Response<T>>;
    /**
     * Accept invite
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionAcceptInvite
     *
     * @param competition_id
     * @param token
     * @returns promise
     */
    static acceptInvite<T>(competition_id: string, token: string): AxiosPromise<Response<T>>;
    /**
     * Round brackets
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundBracketList1
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    static brackets<T>(competition_id: string, round_id: number, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Store round brackets
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundBracketStorage
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    static createBracket<T>(competition_id: string, round_id: number, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Show round bracket
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundBracketShow
     *
     * @param competition_id
     * @param round_id
     * @param bracket_id
     * @returns promise
     */
    static showBracket<T>(competition_id: string, round_id: number, bracket_id: number, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update bracket
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateRoundBracket
     *
     * @param competition_id
     * @param round_id
     * @param bracket_id
     * @returns promise
     */
    static updateBracket<T>(competition_id: string, round_id: number, bracket_id: number, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete bracket
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/destoryRoundBracket
     *
     * @param competition_id
     * @param round_id
     * @param bracket_id
     * @returns promise
     */
    static destroyBracket<T>(competition_id: string, round_id: number, bracket_id: number): AxiosPromise<Response<T>>;
    /**
     * List round
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundList
     *
     * @param competition_id
     * @returns promise
     */
    static rounds<T>(competition_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new round for competition
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundStorage
     *
     * @param competition_id
     * @returns promise
     */
    static createRound<T>(competition_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single round.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundShow
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    static showRound<T>(competition_id: string, round_id: number, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updating resource in storage with new information.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateRound
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    static updateRound<T>(competition_id: string, round_id: number, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes the round for the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/destoryRound
     *
     * @param competition_id
     * @param round_id
     * @returns promise
     */
    static destroyRound<T>(competition_id: string, round_id: number): AxiosPromise<Response<T>>;
    /**
     * Retrieve a list of teams associated with the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceCompetitionTeamList
     *
     * @param competition_id
     * @returns promise
     */
    static team<T>(competition_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Associate a new team with the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceCompetitionTeamStorage
     *
     * @param competition_id
     * @returns promise
     */
    static createCompetitionTeam<T>(competition_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Display the contents of a single team associated with the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceTeamShow
     *
     * @param competition_id The id of the competition
     * @param team_id The id of the team
     * @returns promise
     */
    static showTeam<T>(competition_id: string, team_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update the team information associated with the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateTeam
     *
     * @param competition_id
     * @param team_id
     * @returns promise
     */
    static updateTeam<T>(competition_id: string, team_id: string, data?: object): AxiosPromise<Response<T>>;
    /**
     * Removes the team from the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/destoryTeam
     *
     * @param competition_id
     * @param team_id
     * @returns promise
     */
    static destroyTeam<T>(competition_id: string, team_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all the users associated with a competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionUserList
     *
     * @param competition_id
     * @returns promise
     */
    static users<T>(competition_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Associate a new users with the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/createCompetitionUser
     *
     * @param competition_id
     * @returns promise
     */
    static createCompetitionUser<T>(competition_id: string, data?: object): AxiosPromise<Response<T>>;
    /**
     * Show a single user by its ID.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/showCompetitionUser
     *
     * @param competition_id
     * @param user_id
     * @returns promise
     */
    static showCompetitionUser<T>(competition_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update the user associated with competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateCompetitionUser
     *
     * @param competition_id
     * @param user_id
     * @returns promise
     */
    static updateCompetitionUser<T>(competition_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove the associated user from the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/removeCompetitionUser
     *
     * @param competition_id
     * @param user_id
     * @returns promise
     */
    static destroyCompetitionUser<T>(competition_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all the venues associated with a competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/venueList
     *
     * @param competition_id
     * @returns promise
     */
    static venues<T>(competition_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Creating a new venue.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/createVenue
     *
     * @param competition_id
     * @returns promise
     */
    static createVenue<T>(competition_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Show a single venue by its ID.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/showVenue
     *
     * @param competition_id
     * @param venue_id
     * @returns promise
     */
    static showVenue<T>(competition_id: string, venue_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update the venue.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateVenue
     *
     * @param competition_id
     * @param venue_id
     * @returns promise
     */
    static updateVenue<T>(competition_id: string, venue_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes the venue from the competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/removeCompetitionVenue
     *
     * @param competition_id
     * @param venue_id
     * @returns promise
     */
    static destroyVenue<T>(competition_id: string, venue_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
         * Updates the main image for the venue using a File object.
         *
         * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/uploadVenueMainImage
         *
         * @param file The file object to upload.
         * @param data Any additional data to pass along to the upload.
         *
         * @returns promise
         */
    static uploadVenueMainImageFile<T>(competition_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the main image for the venue using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/uploadVenueMainImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadVenueMainImageBlob<T>(competition_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a leaderboard by a users points.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionUserList
     *
     * @param competition_id
     * @returns promise
     */
    static userPointsLeaderboard<T>(competition_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a leaderboard by a users wins.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionLeaderBoardUserWins
     *
     * @param competition_id
     * @returns promise
     */
    static userWinsLeaderboard<T>(competition_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a leaderboard by a teams points.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionUserList
     *
     * @param competition_id
     * @returns promise
     */
    static teamPointsLeaderboard<T>(competition_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a leaderboard by a teams wins.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionLeaderBoardTeamWins
     *
     * @param competition_id
     * @returns promise
     */
    static teamWinsLeaderboard<T>(competition_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all leaderboards.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionLeaderBoardTeamPoints
     *
     * @param competition_id
     * @returns promise
     */
    static allLeaderboards<T>(competition_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Gets all the information about a competition for the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionLeaderboardsAll
     *
     * @param competition_id
     * @returns promise
     */
    static me<T>(competition_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Ads {
    /**
     * List Ad Campaigns.
     *
     * Example usage:
     *  Ads.listCampaigns({ community: 'uuid-of-community', platform: 'tiktok' })
     *
     * @param params Query parameters (e.g. community, platform, advertiser_id, etc.)
     * @returns A paginated list of AdCampaign resources
     */
    static listCampaigns<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new Ad Campaign.
     *
     * @param data  The Ad Campaign payload (JSON) to create
     * @param params Optional query parameters
     * @returns The newly created AdCampaign resource
     */
    static createCampaign<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single Ad Campaign by ID.
     *
     * @param campaign_id The UUID of the campaign to fetch
     * @param params Optional query parameters
     * @returns The requested AdCampaign resource
     */
    static viewCampaign<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an existing Ad Campaign by ID.
     *
     * @param campaign_id The UUID of the campaign to update
     * @param data  The partial or full updated AdCampaign payload
     * @param params Optional query parameters
     * @returns The updated AdCampaign resource
     */
    static updateCampaign<T>(campaign_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete an Ad Campaign by ID.
     *
     * @param campaign_id The UUID of the campaign to delete
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    static deleteCampaign<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List Ad Groups (ad sets) for a specific campaign.
     *
     * Example usage:
     *  Ads.listGroups('some-campaign-uuid', { promotion_type: 'WEBSITE' })
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param params Optional query parameters (e.g. promotion_type, operation_status, etc.)
     * @returns A paginated list of AdGroup resources
     */
    static listGroups<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new Ad Group (ad set) under a specific campaign.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param data The AdGroup creation payload
     * @param params Optional query parameters
     * @returns The newly created AdGroup resource
     */
    static createGroup<T>(campaign_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single Ad Group by ID, under a specific campaign.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the AdGroup to fetch
     * @param params Optional query parameters
     * @returns The requested AdGroup resource
     */
    static viewGroup<T>(campaign_id: string, group_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an Ad Group (ad set) by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the AdGroup to update
     * @param data Updated fields for the AdGroup
     * @param params Optional query parameters
     * @returns The updated AdGroup resource
     */
    static updateGroup<T>(campaign_id: string, group_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete an Ad Group (ad set) by ID, under a specific campaign.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the AdGroup to delete
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    static deleteGroup<T>(campaign_id: string, group_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List Ads (creatives).
     *
     * Supports filtering by ad_group_id, social_media_post_id, operation_status, etc.
     *
     * @param params Optional query parameters for filtering/sorting
     * @returns A paginated list of Ad resources
     */
    static listAds<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new Ad (creative).
     *
     * @param data The Ad creation payload
     * @param params Optional query parameters
     * @returns The newly created Ad resource
     */
    static createAd<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single Ad by ID.
     *
     * @param ad_id The UUID of the Ad to fetch
     * @param params Optional query parameters
     * @returns The requested Ad resource
     */
    static viewAd<T>(ad_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an existing Ad by ID.
     *
     * @param ad_id The UUID of the Ad to update
     * @param data The partial or full Ad payload
     * @param params Optional query parameters
     * @returns The updated Ad resource
     */
    static updateAd<T>(ad_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete an Ad by ID.
     *
     * @param ad_id The UUID of the Ad to delete
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    static deleteAd<T>(ad_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List triggers defined for a given Ad Group.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param params Optional query parameters (pagination, etc.)
     * @returns A paginated list of AdGroupTrigger resources
     */
    static listTriggers<T>(campaign_id: string, group_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new Ad Group Trigger.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param data The trigger creation payload
     * @param params Optional query parameters
     * @returns The newly created AdGroupTrigger resource
     */
    static createTrigger<T>(campaign_id: string, group_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single Ad Group Trigger by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param trigger_id The UUID of the trigger
     * @param params Optional query parameters
     * @returns The requested AdGroupTrigger resource
     */
    static viewTrigger<T>(campaign_id: string, group_id: string, trigger_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an existing Ad Group Trigger by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param trigger_id The UUID of the trigger to update
     * @param data Updated trigger fields
     * @param params Optional query parameters
     * @returns The updated AdGroupTrigger resource
     */
    static updateTrigger<T>(campaign_id: string, group_id: string, trigger_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete an Ad Group Trigger by ID.
     *
     * @param campaign_id The UUID of the parent Ad Campaign
     * @param group_id The UUID of the Ad Group
     * @param trigger_id The UUID of the trigger
     * @param params Optional query parameters
     * @returns A 204 No Content response on success
     */
    static deleteTrigger<T>(campaign_id: string, group_id: string, trigger_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List platform-level businesses for the given campaign ID,
     * as defined by /ads/campaigns/{id}/businesses on the backend.
     *
     * Typically relevant for Reddit (list businesses), or might return a
     * "not supported" message for Meta/TikTok.
     *
     * @param campaign_id The UUID of the Ad Campaign
     * @param params      Optional query parameters, e.g. page.size, etc.
     * @returns           A response object with data (business list or messages)
     */
    static listCampaignBusinesses<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List Ad Accounts for the given campaign ID,
     * as defined by /ads/campaigns/{id}/ad_accounts on the backend.
     *
     * E.g. for Reddit, you can pass ?business_id= to get business-level ad accounts,
     * or for Twitter, it might just return a user’s ad accounts, etc.
     *
     * @param campaign_id The UUID of the Ad Campaign
     * @param params      Optional query parameters, e.g. business_id, page.size, etc.
     * @returns           A response object with data (ad account list)
     */
    static listCampaignAdAccounts<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List funding instruments for the given campaign ID,
     * as defined by /ads/campaigns/{id}/funding_instruments on the backend.
     *
     * For Twitter, pass ?account_id=...
     * For Reddit, pass ?ad_account_id=... or ?business_id=...
     *
     * @param campaign_id The UUID of the Ad Campaign
     * @param params      Optional query parameters
     * @returns           A response object with data (funding instruments)
     */
    static listCampaignFundingInstruments<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
   * GET /ads/reddit/targeting/carriers
   *
   * Example usage:
   *   Ads.listRedditCarriers({ scheduler_id: 'uuid-of-scheduler', 'page.size': 50 })
   */
    static listRedditCarriers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/reddit/targeting/communities?names=sub1,sub2
     */
    static listRedditCommunities<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/reddit/targeting/communities/search?query=xyz
     */
    static searchRedditCommunities<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/reddit/targeting/devices
     */
    static listRedditDevices<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/reddit/targeting/geolocations
     */
    static listRedditGeolocations<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/reddit/targeting/interests
     */
    static listRedditInterests<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/reddit/targeting/third_party_audiences
     */
    static listRedditThirdPartyAudiences<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
   * Sync an Ad Campaign with the remote platform
   *
   * @param campaign_id The UUID of the campaign to sync
   * @param params Optional query parameters
   * @returns The synced AdCampaign resource
   */
    static syncCampaign<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sync an Ad Group with the remote platform
     *
     * @param campaign_id The UUID of the parent campaign
     * @param group_id The UUID of the ad group to sync
     * @param params Optional query parameters
     * @returns The synced AdGroup resource
     */
    static syncGroup<T>(campaign_id: string, group_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static listRedditAdPosts<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Create a Reddit ad-style social-media post */
    static createRedditAdPost<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Retrieve a single Reddit ad-style social-media post */
    static viewRedditAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Update a Reddit ad-style social-media post */
    static updateRedditAdPost<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static listTwitterAdPosts<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static createTwitterAdPost<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static viewTwitterAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static updateTwitterAdPost<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static deleteTwitterAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static listFacebookAdPosts<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static createFacebookAdPost<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static viewFacebookAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static updateFacebookAdPost<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static deleteFacebookAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokUploadImageFile<T>(file: File, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static tiktokUploadVideoFile<T>(file: File, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static tiktokUploadMusicFile<T>(file: File, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static tiktokUploadImageBlob<T>(blob: Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static tiktokUploadVideoBlob<T>(blob: Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static tiktokUploadMusicBlob<T>(blob: Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static tiktokGetMediaInfo<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
 * Sync an Ad with the remote platform.
 *
 * @param ad_id  UUID of the ad to sync
 * @param params Optional query parameters
 * @returns      The synced Ad resource
 */
    static syncAd<T>(ad_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
 * POST /ads/facebook/targeting/search
 */
    static facebookTargetingSearch<T>(data: Record<string, any>, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/facebook/targeting/geo_search
     */
    static facebookGeoSearch<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/facebook/targeting/option_status
     */
    static facebookTargetingOptionStatus<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * POST /ads/facebook/targeting/suggestions
     */
    static facebookTargetingSuggestions<T>(data: Record<string, any>, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/facebook/targeting/browse
     */
    static facebookTargetingBrowse<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * POST /ads/facebook/targeting/validation
     */
    static facebookTargetingValidation<T>(data: Record<string, any>, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/facebook/targeting/delivery_estimate
     */
    static facebookDeliveryEstimate<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokTargetingSearch<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokContextualTags<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokRecommendHashtags<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokListCarriers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokListInterestCategories<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokListActionCategories<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokListContentExclusions<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokListRegions<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokGetTargetingInfo<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokListLanguages<T>(advertiser_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static tiktokRecommendInterestKeywords<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
 * GET /ads/tiktok/targeting/hashtag_info
 */
    static tiktokHashtagInfo<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/tiktok/targeting/contextual_tag_info
     */
    static tiktokContextualTagInfo<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * GET /ads/tiktok/targeting/content_exclusion_info
     */
    static tiktokContentExclusionInfo<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    static listTwitterTargetingCriteria<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static getTwitterTargetingCriterion<T>(criterion_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static createTwitterTargetingCriterion<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static deleteTwitterTargetingCriterion<T>(criterion_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static twitterBatchTargetingCriteria<T>(data: object[], params?: Record<string, any>): AxiosPromise<Response<T>>;
    static lookupTwitterTargeting<T>(resource: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static twitterTargetingSuggestions<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deep-sync a campaign tree (campaign → groups → ads) with its remote platform.
     *
     * @param campaign_id UUID of the campaign to sync
     * @param params      Optional query params
     * @returns           Fully-hydrated AdCampaign resource
     */
    static syncCampaignTree<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Deep-sync all the campaigns for a scheduler.
    *
    * @param scheduler_id UUID of the campaign to sync
    * @param params      Optional query params
    * @returns           Fully-hydrated AdCampaign resource
    */
    static syncSchedulerCampaigns<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get campaign performance summary.
     */
    static getPerformanceSummary<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get spend and delivery metrics over time.
     */
    static getSpendDeliveryReport<T>(params: {
        start_date: string;
        end_date: string;
        group_by?: 'day' | 'week' | 'month';
        community_id?: string;
        platform?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Compare performance across platforms.
     */
    static getPlatformComparisonReport<T>(params?: {
        start_date?: string;
        end_date?: string;
        community_id?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Get performance metrics for individual ad creatives.
     */
    static getCreativePerformanceReport<T>(params?: {
        community_id?: string;
        platform?: string;
        start_date?: string;
        end_date?: string;
        limit?: number;
        sort?: 'spend' | 'impressions' | 'clicks' | 'ctr' | 'cpm' | 'cpc';
        order?: 'asc' | 'desc';
    }): AxiosPromise<Response<T>>;
    /**
     * Get time-based performance metrics by hour and day of week.
     */
    static getTimePerformanceReport<T>(params: {
        start_date: string;
        end_date: string;
        community_id?: string;
        platform?: string;
    }): AxiosPromise<Response<T>>;
    /**
 * GET /ads/google/targeting/geo/suggest
 */
    static listGoogleGeoSuggestions<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * POST /ads/google/targeting/campaigns/{customer_id}/{campaign_id}/locations
     */
    static addGoogleLocationTargets<T>(customer_id: number, campaign_id: number, data: object): AxiosPromise<Response<T>>;
    /**
     * GET /ads/google/targeting/campaigns/{customer_id}/{campaign_id}/locations
     */
    static getGoogleLocationTargets<T>(customer_id: number, campaign_id: number, params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * DELETE /ads/google/targeting/campaigns/{customer_id}/{campaign_id}/locations
     */
    static removeGoogleLocationTargets<T>(customer_id: number, campaign_id: number, data: object): AxiosPromise<Response<T>>;
    /**
     * POST /ads/google/targeting/campaigns/{customer_id}/{campaign_id}/proximity
     */
    static addGoogleProximityTarget<T>(customer_id: number, campaign_id: number, data: object): AxiosPromise<Response<T>>;
    /**
     * PUT /ads/google/targeting/{resource_type}/{customer_id}/{resource_id}/settings
     */
    static updateGoogleTargetingSettings<T>(resource_type: 'campaign' | 'ad_group', customer_id: number, resource_id: number, data: object): AxiosPromise<Response<T>>;
    /**
     * GET /ads/google/targeting/{resource_type}/{customer_id}/{resource_id}/settings
     */
    static getGoogleTargetingSettings<T>(resource_type: 'campaign' | 'ad_group', customer_id: number, resource_id: number, params: Record<string, any>): AxiosPromise<Response<T>>;
    /** GET /ads/posts/google */
    static listGoogleAdPosts<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** POST /ads/posts/google */
    static createGoogleAdPost<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** PUT /ads/posts/google/{post_id} */
    static updateGoogleAdPost<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** DELETE /ads/posts/google/{post_id} */
    static deleteGoogleAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** POST /ads/posts/google/{post_id}/pause */
    static pauseGoogleAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** POST /ads/posts/google/{post_id}/enable */
    static enableGoogleAdPost<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Creates a new Google Ads client account under a specified manager account.
     * Corresponds to POST /ads/google/accounts/create
     *
     * @param data The creation payload.
     * @param data.scheduler_id The UUID of the scheduler with auth tokens.
     * @param data.manager_customer_id The 10-digit MCC ID.
     * @param data.descriptive_name The name for the new account.
     * @param data.currency_code ISO 4217 currency code.
     * @param data.time_zone Time zone identifier (e.g., 'America/New_York').
     * @returns The newly created Google Ads account details.
     */
    static createGoogleAccount<T>(data: {
        scheduler_id: string;
        manager_customer_id: string;
        descriptive_name: string;
        currency_code: string;
        time_zone: string;
    }): AxiosPromise<Response<T>>;
}

declare class Communities {
    /**
     * List all the communities.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/resourceCommunityList
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/newCommunityResourceStorage
     *
     * @param data The data to be passed when creating a community.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/updateCommunityStorage
     *
     * @param community_id The id of the community to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static update<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/showCommunityStorage
     *
     * @param community_id The id fo the community to retrieve.
     *
     * @returns promise
     */
    static view<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes a community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/destoryCommunityStorage
     *
     * @param community_id The id of the community to delete.
     * @returns promise
     */
    static delete<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the main image for the community using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadLogoCommunityImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadLogoFile<T>(community_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the main image for the community using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadLogoCommunityImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadLogoBlob<T>(community_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the community using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadBannerCommunityImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadBannerImageFile<T>(community_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the community using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadBannerCommunityImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadBannerImageBlob<T>(community_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Updates the banner image for the community using a File object.
    *
    * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadBannerCommunityImage
    *
    * @param file The file object to upload.
    * @param data Any additional data to pass along to the upload.
    *
    * @returns promise
    */
    static uploadVideoLogoFile<T>(community_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the community using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/uploadBannerCommunityImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadVideoLogoBlob<T>(community_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List the invites that have been sent for the community to users.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitysUserInviteList
     *
     * @param community_id The id of the community
     *
     * @returns promise
     */
    static listInvites<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send an invitation to a user to join the community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitySendInvite
     *
     * @param community_id The id of the community.
     * @param data The data that will be passed into sending an invite.
     *
     * @returns promise
     */
    static sendInvite<T>(community_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Accept an invite to a community. The JSON Web Token (JWT) must be related to the token.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communityAcceptInvite
     *
     * @param community_id The id of the community
     * @param token The token required to accept the user.
     *
     * @returns promise
     */
    static acceptInvite<T>(community_id: string, token: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieves a user's invite that have been sent.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communityAcceptInvite
     *
     * @param community_id The id of the community
     * @param token The token required to get the invite.
     *
     * @returns promise
     */
    static retrieveInvite<T>(community_id: string, token: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List the users who are currently associated with the community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communityUserList
     *
     * @param community_id The id of the community.
     *
     * @returns promise
     */
    static listUsers<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a user to a community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/createcommunityUser
     *
     * @param community_id The id of the community.
     * @param data The data to be passed when adding a user.
     *
     * @returns promise
     */
    static addUser<T>(community_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieves a single user and their information that is associated with a community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/showcommunityUser
     *
     * @param community_id The id of the community.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    static getUser<T>(community_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the users information associated with the community.
     *
     * @param community_id The id of the community.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    static updatetUser<T>(community_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Removes a user from a community.
     *
     * @param community_id The id of community.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    static removetUser<T>(community_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Finds a community either by its subdomain or cname. The cname must be active.
     *
     * @param domain The subcname of the community.
     *
     * @returns promise
     */
    static findByDomain<T>(domain: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Has a user join a community. The join is executed using the current user's authentication token.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/updateCommunityStorage
     *
     * @param community_id The id of the community to update.
     *
     * @returns promise
     */
    static join<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a payment method to the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/51802cc0cb758850807345918130cf3e
     *
     * @param community_id The id of the community to update.
     *
     * @returns promise
     */
    static addPaymentMethod<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sets the default payment method for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/dd743e8a7da3b2bebe557cbc6675380d
     *
     * @param community_id The id of the community to update.
     *
     * @returns promise
     */
    static setDefaultPaymentMethod<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the available payment methods.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitysUserInviteList
     *
     * @param community_id The id of the community
     *
     * @returns promise
     */
    static getPaymentMethods<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the ledger for all transactions from the community.
     *
     * @see https://api.glitch.fun/api/documentation#/communitys%20Route/communitysUserInviteList
     *
     * @param community_id The id of the community
     *
     * @returns promise
     */
    static getLedger<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Docusign authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearDocusignAuth<T>(community_id: string): AxiosPromise<Response<T>>;
    /**
     * Clear SimpleSin authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearSimplesignAuth<T>(community_id: string): AxiosPromise<Response<T>>;
    /**
     * Clear SimpleSin authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearHellosignAuth<T>(community_id: string): AxiosPromise<Response<T>>;
    /**
     * List all the saved email templates for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/resourceCommunityList
     *
     * @returns promise
     */
    static listEmailTemplates<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new email template for the community
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/newCommunityResourceStorage
     *
     * @param data The data to be passed when creating a community.
     *
     * @returns Promise
     */
    static createEmailTemplate<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an email template for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/updateCommunityStorage
     *
     * @param community_id The id of the community to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static updateEmailTemplate<T>(community_id: string, template_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single email template for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/showCommunityStorage
     *
     * @param community_id The id fo the community to retrieve.
     *
     * @returns promise
     */
    static viewEmailTemplate<T>(community_id: string, template_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes an email template for the community.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/destoryCommunityStorage
     *
     * @param community_id The id of the community to delete.
     * @returns promise
     */
    static deleteEmailTemplate<T>(community_id: string, template_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Populates an email template for the community that will replace the platholders with the data provided.
     *
     * @see https://api.glitch.fun/api/documentation#/Community%20Route/newCommunityResourceStorage
     *
     * @param data The data to be passed when creating a community.
     *
     * @returns Promise
     */
    static populateEmailTemplate<T>(community_id: string, template_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
   * List all newsletters for a community.
   *
   * @param community_id The ID of the community.
   * @param params Query parameters.
   * @returns Promise
   */
    static listNewsletters<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new newsletter for a community.
     *
     * @param community_id The ID of the community.
     * @param data The data for the new newsletter.
     * @returns Promise
     */
    static createNewsletter<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a specific newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Query parameters.
     * @returns Promise
     */
    static viewNewsletter<T>(community_id: string, newsletter_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a specific newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data The data to update.
     * @returns Promise
     */
    static updateNewsletter<T>(community_id: string, newsletter_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a specific newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @returns Promise
     */
    static deleteNewsletter<T>(community_id: string, newsletter_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Import subscribers from a CSV or XLS file into a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param file The CSV or XLS file.
     * @param params Additional parameters.
     * @returns Promise
     */
    static importNewsletterSubscribers<T>(community_id: string, newsletter_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the game show using a File object.
    *
    * @see https://api.glitch.fun/api/documentation#/GameShows/uploadGameShowBannerImage
    *
    * @param file The file object to upload.
    * @param data Any additional data to pass along to the upload.
    *
    * @returns promise
    */
    static uploadNewsletterBannerImageFile<T>(community_id: string, newsletter_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the game show using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/uploadGameShowBannerImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadNewsletterBannerImageBlob<T>(community_id: string, newsletter_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all campaigns for a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Query parameters.
     * @returns Promise
     */
    static listCampaigns<T>(community_id: string, newsletter_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new campaign for a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data The data for the new campaign.
     * @returns Promise
     */
    static createCampaign<T>(community_id: string, newsletter_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a specific campaign.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param params Query parameters.
     * @returns Promise
     */
    static viewCampaign<T>(community_id: string, newsletter_id: string, campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a specific campaign.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param data The data to update.
     * @returns Promise
     */
    static updateCampaign<T>(community_id: string, newsletter_id: string, campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a specific campaign.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @returns Promise
     */
    static deleteCampaign<T>(community_id: string, newsletter_id: string, campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send a campaign immediately.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @returns Promise
     */
    static sendCampaign<T>(community_id: string, newsletter_id: string, campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Schedule a campaign to be sent later.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param data The scheduling data (e.g., scheduled_at).
     * @returns Promise
     */
    static scheduleCampaign<T>(community_id: string, newsletter_id: string, campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Test an email campaign by sending an email to the current user.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param data The scheduling data (e.g., scheduled_at).
     * @returns Promise
     */
    static testCampaign<T>(community_id: string, newsletter_id: string, campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all emails sent in a campaign.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param campaign_id The ID of the campaign.
     * @param params Query parameters.
     * @returns Promise
     */
    static listCampaignEmails<T>(community_id: string, newsletter_id: string, campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all subscribers of a newsletter (admin only).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Query parameters.
     * @returns Promise
     */
    static listNewsletterSubscribers<T>(community_id: string, newsletter_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a specific subscriber of a newsletter (admin only).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param subscriber_id The ID of the subscriber.
     * @param params Query parameters.
     * @returns Promise
     */
    static viewNewsletterSubscriber<T>(community_id: string, newsletter_id: string, subscriber_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a specific subscriber of a newsletter (admin only).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param subscriber_id The ID of the subscriber.
     * @param data The data to update.
     * @returns Promise
     */
    static updateNewsletterSubscriber<T>(community_id: string, newsletter_id: string, subscriber_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a specific subscriber from a newsletter (admin only).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param subscriber_id The ID of the subscriber.
     * @returns Promise
     */
    static deleteNewsletterSubscriber<T>(community_id: string, newsletter_id: string, subscriber_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Register a new subscriber to a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data The subscriber data.
     * @returns Promise
     */
    static registerNewsletterSubscriber<T>(community_id: string, newsletter_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get newsletter overall reports (subscriber changes, unsubscribes, etc.).
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Optional query params (start_date, end_date, etc).
     * @returns Promise with aggregated data
     */
    static newsletterReports<T>(community_id: string, newsletter_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get campaign-level stats for a newsletter.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param params Optional query params (start_date, end_date, etc).
     * @returns Promise with campaign stats
     */
    static newsletterCampaignReports<T>(community_id: string, newsletter_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Retrieves daily subscriber trend data for the specified newsletter.
    *
    * @param community_id The UUID of the community
    * @param newsletter_id The UUID of the newsletter
    * @param params Optional date-range filter (start_date, end_date, etc.)
    */
    static newsletterSubscriberTrend<T>(community_id: string, newsletter_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Export subscribers for a specific newsletter.
     * The file is generated asynchronously on the server and
     * the user is emailed a link to download the file.
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data Export options (format: 'csv' or 'xlsx').
     * @returns Promise
     */
    static exportNewsletterSubscribers<T>(community_id: string, newsletter_id: string, data: {
        format: 'csv' | 'xlsx';
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Import game installs from a game title installations to a newsletter
     *
     * @param community_id The ID of the community.
     * @param newsletter_id The ID of the newsletter.
     * @param data Export options (format: 'csv' or 'xlsx').
     * @returns Promise
     */
    static importGameInstalls<T>(community_id: string, newsletter_id: string, data: {
        format: 'csv' | 'xlsx';
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the current user's pending community invitations across all communities.
     *
     * @returns promise
     */
    static myInvites<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Resends an invitation to a user.
     *
     * @param community_id The id of the community.
     * @param invite_id The id of the invite to resend.
     *
     * @returns promise
     */
    static resendInvite<T>(community_id: string, invite_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Revokes/deletes a community invitation.
     *
     * @param community_id The id of the community.
     * @param invite_id The id of the invite to delete.
     *
     * @returns promise
     */
    static deleteInvite<T>(community_id: string, invite_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Users {
    /**
     * List all the users.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userList
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates a users information. Requires the users JSON Web Token (JWT) for them to update their profile.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param data The date to be passed when creating a competiton.
     *
     * @returns Promise
     */
    static update<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Gets the current users information based on the current Json Web Token (JWT).
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showMe
     *
     * @param user_id The id of the user to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static me<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Gets the campaigns the users has been invited too.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showMe
     *
     * @param user_id The id of the user to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static getCampaignInvites<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Gets payouts from past campaings
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showMe
     *
     * @param user_id The id of the user to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static getPayouts<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sync the current influencer's information.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showMe
     *
     * @param user_id The id of the user to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static syncInfluencer<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create profile data for an influencer based on their synced information and social media posts.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/generateUserInfluencerProfile
     *
     * @param user_id The id of the user to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static generateInfluencerProfile<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Will follow and unfollow a user. If the user is not being following, it will follow the user. If they are following, it will unfollow the user. The current JWT is used for the follower.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userToggleFollow
     *
     * @param user_id The id fo the user to retrieve.
     *
     * @returns promise
     */
    static followToggle<T>(user_id: string): AxiosPromise<Response<T>>;
    /**
     * Show a users profile.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/showUser
     *
     * @param user_id The id of the user to delete.
     * @returns promise
     */
    static profile<T>(user_id: string): AxiosPromise<Response<T>>;
    /**
     * Retrieves a user's one time login token based on a users JWT.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userOneTimeLoginToken
     *
     *
     * @returns promise
     */
    static oneTimeLoginToken<T>(): AxiosPromise<Response<T>>;
    /**
     * Updates the avatar image for the user using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userUploadAvatarImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadAvatarImageFile<T>(file: File, data?: object): AxiosPromise<Response<T>>;
    /**
     * Updates the avatar image for the user using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userUploadAvatarImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadAvatarImageBlob<T>(blob: Blob, data?: object): AxiosPromise<Response<T>>;
    /**
     * Upload a banner image for the user, as a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userUploadBannerImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadBannerImageFile<T>(file: File, data?: object): AxiosPromise<Response<T>>;
    /**
     * Upload a banner image for the user, as a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userUploadBannerImage
     *
     * @param file The blob to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadBannerImageBlob<T>(blob: Blob, data?: object): AxiosPromise<Response<T>>;
    /**
     * Creates a donation page for that user by syncing their information with various
     * payment service.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static createDonationPage<T>(): AxiosPromise<Response<T>>;
    /**
    * Clear Twitches authentication information from the current user.
    *
    * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
    *
    * @returns promise
    */
    static clearTwitchAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear Facebook authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearFacebookAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear Google authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearGoogleAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear Stripe authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearStripeAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear TikTok authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearTikTokAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear YouTube authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearYoutubeAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear Reddit authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearRedditAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear Docusign authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/clearDocusignAuth
     *
     * @returns promise
     */
    static clearDocusignAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear Twitter authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static clearTwitterAuth<T>(): AxiosPromise<Response<T>>;
    /**
    * Clear StreamElements authentication information from the current user.
    *
    * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
    *
    * @returns promise
    */
    static clearStreamElementsAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Returns a list of tips received by the authenticated user for a given month and year
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static getTipsReceivedForMonth<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Returns a list of tips given by the authenticated user for a given month and year.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static getTipsGivenForMonth<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Returns the aggregated monthly tips received by the authenticated user over a certain number of months. Defaults to 12 months if not provided.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static aggregateMonthlyReceivedTips<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Returns the aggregated monthly tips given by the authenticated user over a certain number of months. Defaults to 12 months if not provided.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static aggregateMonthlyGivenTips<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Returns the user associated Youtube a channels a user has.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userCreateDonationPage
     *
     * @returns promise
     */
    static getFacebookGroups<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a genre to a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param data The genre information to be passed to update the genre information.
     *
     * @returns Promise
     */
    static addGenre<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove a genre from a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param genre_id The id of the genre to remove.
     *
     * @returns Promise
     */
    static removeGenre<T>(genre_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a type to a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param data The genre information to be passed to update the type information.
     *
     * @returns Promise
     */
    static addType<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove a genre from a user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param genre_id The id of the genre to remove.
     *
     * @returns Promise
     */
    static removeType<T>(type_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Verify a user's account to complete their sign-up process.
    *
    * @see https://api.glitch.fun/api/documentation#/Users%20Route/verifyAccount
    *
    * @param data The genre information to be passed to update the type information.
    *
    * @returns Promise
    */
    static verifyAccount<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Gets the instagram accounts associated with the user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getInstagramAccounts
     *
     * @returns promise
     */
    static getInstagramAccounts<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
   * Gets the Facebook Pages associated with the user.
   *
   * @see https://api.glitch.fun/api/documentation#/Users%20Route/getFacebookPages
   *
   * @returns Promise resolving to the list of Facebook Pages
   */
    static getFacebookPages<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Gets the subreddits the user is subscribed to.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getSubreddits
     *
     * @returns Promise resolving to the list of subreddits
     */
    static getSubreddits<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Gets the flairs for a specific subreddit.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getSubredditFlairs
     *
     * @param subreddit The name of the subreddit to get flairs for.
     * @returns Promise resolving to the list of flairs
     */
    static getSubredditFlairs<T>(subreddit: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Search all the users with advanced meilisearch options
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userSearch
     *
     * @returns promise
     */
    static search<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Resends the verification email to the authenticated user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/resendVerificationEmail
     *
     * @returns Promise
     */
    static resendVerificationEmail<T>(): AxiosPromise<Response<T>>;
    /**
     * Clear Instagram authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/clearInstagramAuth
     *
     * @returns promise
     */
    static clearInstagramAuth<T>(): AxiosPromise<Response<T>>;
    /**
     * Gets the rules for a specific subreddit.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/getSubredditRules
     *
     * @param subreddit The name of the subreddit to get rules for.
     * @returns Promise resolving to the list of rules
     */
    static getSubredditRules<T>(subreddit: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Events {
    /**
     * List all the events
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/resourceEventList
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/newEventResourceStorage
     *
     * @param data The data to be passed when creating an event.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a event
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventStorage
     *
     * @param event_id The id of the event to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static update<T>(event_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/showEventStorage
     *
     * @param event_id The id fo the event to retrieve.
     *
     * @returns promise
     */
    static view<T>(event_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes a event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/destoryEventStorage
     *
     * @param event_id The id of the event to delete.
     * @returns promise
     */
    static delete<T>(event_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * The event is synced with Invirtu for the lie streams. This will allow you to update
     *
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventStorage
     *
     * @param event_id The id of the event to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static updateInvirtuEvent<T>(event_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add an RTMP source to multicast a stream too.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/addRTMPSource
     *
     * @param event_id The id of the event.
     * @param data The data to be passed when adding an RTMP source.
     *
     * @returns promise
     */
    static addRTMPSource<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an RTMP Source for multicasing.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/addRTMPSource
     *
     * @param event_id The id of the event.
     * @param data The data to be passed when adding an RTMP source.
     *
     * @returns promise
     */
    static updateRTMPSource<T>(event_id: string, stream_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove a RTMP source for multicasing.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/addRTMPSource
     *
     * @param event_id The id of the event.
     * @param data The data to be passed when adding an RTMP source.
     *
     * @returns promise
     */
    static removeRTMPSource<T>(event_id: string, stream_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a Twitch Stream to the current event. The user must have authenticatd with Twitch.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/addRTMPSource
     *
     * @param event_id The id of the event.
     * @param data The data to be passed when adding an RTMP source.
     *
     * @returns promise
     */
    static addTwitchMulticast<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a Facebook Stream to the current event. The user must have authenticatd with Facebook.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/addRTMPSource
     *
     * @param event_id The id of the event.
     * @param data The data to be passed when adding an RTMP source.
     *
     * @returns promise
     */
    static addFacebookMulticast<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a Youtube Stream to the current event. The user must have authenticatd with Google.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/addRTMPSource
     *
     * @param event_id The id of the event.
     * @param data The data to be passed when adding an RTMP source.
     *
     * @returns promise
     */
    static addYoutubeMulticast<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * A function that should be run on an interval to set the event as live when the live stream is active.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/syncLive
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static syncAsLive<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the main image for the event using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadMainEventImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadMainImageFile<T>(event_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the main image for the event using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadMainEventImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadMainImageBlob<T>(event_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the event using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadBannerEventImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadBannerImageFile<T>(event_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the event using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadBannerEventImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadBannerImageBlob<T>(event_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Enable Broadcast Mode. Broadcast mode is when the live stream is broadcasted from the game play through a protocol
     * such as screen sharing.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/enableBroadcastMode
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static enableBroadcastMode<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Enable livestream mode, in which the stream will be delivered to the invirtu RTMP endpoint for
     * streaming.
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static enableLivestreamMode<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sends content that will appear on-screen to the user.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/sendOnScreenContent
     *
     * @param event_id The id of the event.
     * @param data The information to send on-screen.
     *
     * @returns promise
     */
    static sendOnScreenContent<T>(event_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Uploads an image that can be used and overlay later. A File object is used.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadOverlayImage
     *
     * @param event_id The id of the event.
     * @param file The image as a file.
     * @param data Any additional data to be sent in the request.
     *
     * @returns promise
     */
    static addOverlayAsFile<T>(event_id: string, file: File, data?: object): AxiosPromise<Response<T>>;
    /**
     * Uploads an image that can be used and overlay later. A blob is used.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/uploadOverlayImage
     *
     * @param event_id The id of the event.
     * @param blob Image data as a blob
     * @param data Any additional data to be sent in the request.
     *
     * @returns promise
     */
    static addOverlayAsBlob<T>(event_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes an overlay image.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/destoryOverlayStorage
     *
     * @param event_id The id of the event.
     * @param overlay_id The id of the overlay.
     *
     * @returns promise
     */
    static removeOverlay<T>(event_id: string, overlay_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Enables an overlay so that it will appear on screen.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/enableOverlayImage
     *
     * @param event_id The id of the event.
     * @param overlay_id The id of the overlay.
     *
     * @returns promise
     */
    static enableOverlay<T>(event_id: string, overlay_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Disables the overlay so it no longer appears on-screen.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static disableOverlay<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Enable the donations to appear on-screen
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/enableDonations
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static enableDonations<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Disable the donations and remove from the screen.
     *
     * @param event_id
     * @returns
     */
    static disableDonations<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static sendInvite<T>(event_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static acceptInvite<T>(event_id: string, token: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a recording related to an event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventRecording
     *
     * @param event_id The id of the event to update.
     * @param recording_id The id of the recording to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static updateRecording<T>(event_id: string, recording_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Enable a widget for the current event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventRecording
     *
     * @param event_id The id of the event to update.
     * @param widget_id The id of the widget to enable.
     * @param data The data, which should contain the roles.
     *
     * @returns promise
     */
    static enableWidget<T>(event_id: string, widget_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Disable a widget for the current event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventRecording
     *
     * @param event_id The id of the event to update.
     * @param widget_id The id of the widget to disable.
     *
     * @returns promise
     */
    static disableWidget<T>(event_id: string, widget_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all the tips associated with the current event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventRecording
     *
     * @param event_id The id of the event to update.
     *
     * @returns promise
     */
    static getTips<T>(event_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sets the personality attribute of the AI to adjust how it will respond.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static setAIAvatarPersonalityAttribute<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sets the AI Avatars name, which it can respond too.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static setAIAvatarName<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sets the AI Avatars accent, that will dictate the void in which it responds.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static setAIAccent<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sets the AI Avatar to that it willr respond to users in the chat.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static setAIAvatarRespondToChat<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sets the AI Avatar so that it will respond to you.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/disableOverlay
     *
     * @param event_id The id of the event.
     *
     * @returns promise
     */
    static setAIAvatarRespondToMe<T>(event_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the associated statistics for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/getStreamStatistics
     *
     * @returns promise
     */
    static statistics<T>(event_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the stream view counts for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/getEventStreamViewCounts
     *
     * @returns promise
     */
    static getStreamViewCounts<T>(event_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Fingerprinting {
    /**
     * List identified user fingerprints with filtering options
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - device_id?: string - Filter by device ID
     *   - user_install_id?: string - Filter by user install ID
     *   - browser_fingerprint?: string - Filter by browser fingerprint hash
     *   - device_fingerprint?: string - Filter by device fingerprint hash
     *   - is_bot?: boolean - Filter by bot status
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - sort?: 'first_seen_at'|'last_seen_at'|'match_confidence' - Sort field
     *   - order?: 'asc'|'desc' - Sort order
     *   - per_page?: number - Items per page (max 100)
     * @returns Promise with paginated fingerprints data
     */
    static listFingerprints<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get cross-platform user journey reports
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - fingerprint_id?: string - Specific fingerprint ID to analyze
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - platform?: 'web'|'ios'|'android'|'steam'|'console' - Filter by platform
     *   - event_type?: string - Filter by event type
     *   - group_by?: 'day'|'week'|'month'|'year' - Grouping period
     *   - include_paths?: boolean - Include journey paths in response
     * @returns Promise with user journey report data
     */
    static userJourneyReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get cross-platform attribution reports
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - conversion_event?: 'game_install'|'game_purchase'|'web_event' - Conversion event to analyze
     *   - attribution_model?: 'first_touch'|'last_touch'|'linear'|'time_decay'|'position_based' - Attribution model
     * @returns Promise with attribution report data
     */
    static attributionReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get cross-device identity clusters
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - min_confidence?: number - Minimum match confidence score (0-100)
     * @returns Promise with device cluster report data
     */
    static deviceClusterReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get combined identity clusters and user journey reports
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - min_confidence?: number - Minimum confidence score to include (0-100)
     *   - platform?: string - Filter by platform
     *   - include_journeys?: boolean - Include detailed journeys
     * @returns Promise with identity cluster report data
     */
    static identityClusterReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get combined attribution paths and conversion funnels
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - conversion_event?: string - Conversion event type
     *   - attribution_model?: string - Attribution model
     *   - funnel_steps?: string - Comma-separated funnel steps
     * @returns Promise with attribution and funnel report data
     */
    static attributionFunnelReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get device and environment breakdown reports
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - platform?: string - Filter by platform
     *   - group_by?: 'device_type'|'os'|'browser'|'country_code' - Grouping field
     * @returns Promise with device and environment report data
     */
    static deviceEnvironmentReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get unique vs returning user metrics
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - retention_period?: number - Days to consider for retention
     * @returns Promise with retention metrics data
     */
    static uniqueReturningReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get fraud and bot detection metrics
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - min_confidence?: number - Minimum confidence score to flag (0-100)
     * @returns Promise with fraud detection data
     */
    static fraudDetectionReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get geolocation distribution of users
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'country'|'region'|'city' - Grouping level
     * @returns Promise with geolocation report data
     */
    static geolocationReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get pixel and utem reports
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'country'|'region'|'city' - Grouping level
     * @returns Promise with geolocation report data
     */
    static pixelAttributionReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get an understanding of the path people take to install your game
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'country'|'region'|'city' - Grouping level
     * @returns Promise with geolocation report data
     */
    static installJourneyReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get how the ad campaigns are performing and turning into installs
     *
     * @param params Report options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'country'|'region'|'city' - Grouping level
     * @returns Promise with geolocation report data
     */
    static adCampaignPerformanceReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Teams {
    /**
     * List all the teams
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamsList
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamCreate
     *
     * @param data The data to be passed when creating a team.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUpdate
     *
     * @param team_id The id of the team to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static update<T>(team_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamShow
     *
     * @param team_id The id fo the team to retrieve.
     *
     * @returns promise
     */
    static view<T>(team_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes a team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamDelete
     *
     * @param team_id The id of the team to delete.
     * @returns promise
     */
    static delete<T>(team_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the main image for the team using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUploadMainImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadMainImageFile<T>(team_id: string, file: File, data?: object): AxiosPromise<Response<T>>;
    /**
     * Updates the main image for the team using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUploadMainImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadMainImageBlob<T>(team_id: string, blob: Blob, data?: object): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the team using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUploadMainImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadBannerImageFile<T>(team_id: string, file: File, data?: object): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the team using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUploadMainImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadBannerImageBlob<T>(team_id: string, blob: Blob, data?: object): AxiosPromise<Response<T>>;
    /**
     * List the invites that have been sent for the team to users.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamsUserInviteList
     *
     * @param team_id The id of the team
     *
     * @returns promise
     */
    static listInvites<T>(team_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send an invitation to a user to join the team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamSendInvite
     *
     * @param team_id The id of the team.
     * @param data The data that will be passed into sending an invite.
     *
     * @returns promise
     */
    static sendInvite<T>(team_id: string, data?: object): AxiosPromise<Response<T>>;
    /**
     * Accept an invite to a team. The JSON Web Token (JWT) must be related to the token.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamAcceptInvite
     *
     * @param team_id The id of the team
     * @param token The token required to accept the user.
     *
     * @returns promise
     */
    static acceptInvite<T>(team_id: string, token: string): AxiosPromise<Response<T>>;
    /**
     * List the users who are currently associated with the team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/teamUserList
     *
     * @param team_id The id of the team.
     *
     * @returns promise
     */
    static listUsers<T>(team_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a user to a team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/createTeamUser
     *
     * @param team_id The id of the team.
     * @param data The data to be passed when adding a user.
     *
     * @returns promise
     */
    static addUser<T>(team_id: string, data?: object): AxiosPromise<Response<T>>;
    /**
     * Retrieves a single user and their information that is associated with a team.
     *
     * @see https://api.glitch.fun/api/documentation#/Teams%20Route/showTeamUser
     *
     * @param team_id The id of the team.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    static getUser<T>(team_id: string, user_id: string): AxiosPromise<Response<T>>;
    /**
     * Updates the users information associated with the team.
     *
     * @param team_id The id of the team.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    static updatetUser<T>(team_id: string, user_id: string, data?: object): AxiosPromise<Response<T>>;
    /**
     * Removes a user from a team.
     *
     * @param team_id The id of team.
     * @param user_id The id of the user.
     *
     * @returns promise
     */
    static removetUser<T>(team_id: string, user_id: string): AxiosPromise<Response<T>>;
}

declare class Waitlists {
    /**
     * List all the waitlist sign-ups.
     *
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistList
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sign-up to the waitlist.
     *
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistCreate
     *
     * @param data The data to be passed when creating a team.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a waitlist.
     *
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistUpdate
     *
     * @param waitlist_id The id of the team to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static update<T>(waitlist_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single user who signed-up to the waitlist.
     *
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistUpdate
     *
     * @param waitlist_id The id fo the team to retrieve.
     *
     * @returns promise
     */
    static view<T>(waitlist_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes an entry from the waitlist.
     *
     * @see https://api.glitch.fun/api/documentation#/Waitlist%20Route/waitlistDelete
     *
     * @param waitlist_id The id of the team to delete.
     * @returns promise
     */
    static delete<T>(waitlist_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Posts {
    /**
     * List all the Posts.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
     *
     * @param data The data to be passed when creating a post.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Create a new post with a file. The file should either be an image or video.
    *
    * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
    *
    * @param file The file object to upload.
    * @param data Any additional data to pass along to the upload.
    *
    * @returns promise
    */
    static createWithFile<T>(file: File, data?: object): AxiosPromise<Response<T>>;
    /**
     * Create a new post with a blob. The blob should either be an image or video.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
     *
     * @param file The blob to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static createWithBlob<T>(blob: Blob, data?: object): AxiosPromise<Response<T>>;
    /**
   * Create a new post with a file divided into chunks.
   *
   * @param file The file object to upload.
   * @param chunkSize Size of each chunk in bytes. Default is 1MB.
   * @param data Any additional data to pass along to the upload.
   *
   * @returns Promise
   */
    /**
     * Create a new post with a file divided into chunks.
     *
     * @param file The file object to upload.
     * @param chunkSize Size of each chunk in bytes. Default is 1MB.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns Promise
     */
    static createWithFileInChunks<T>(file: File, chunkSize?: number, data?: {
        [key: string]: any;
    }): Promise<AxiosPromise<Response<T>>>;
    /**
     * Update a post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/updatePostStorage
     *
     * @param post_id The id of the post to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static update<T>(post_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
     * Deletes a post.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     *
     * @param post_id The id of the post to delete.
     * @returns promise
     */
    static delete<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Toggle a social interaction and off for a post.
     *
     * @see hhttps://api.glitch.fun/api/documentation#/Post%20Route/postToggleInteraction
     *
     * @param data The data to be passed when toggling the interaction.
     *
     * @returns Promise
     */
    static toggleInteraction<T>(post_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Social {
    /**
     * Give a tip to another user
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    static postVideoToTikTokFile<T>(file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static postVideoToTikTokBlob<T>(blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static postVideoToFacebookGroupFile<T>(file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static postVideoToFacebookGroupBlob<T>(blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static postVideoToTwitter<T>(file: File, data?: object, onProgress?: (totalSize: number, amountUploaded: number) => void, params?: Record<string, any>): Promise<void>;
}

declare class Templates {
    /**
     * List all the templates.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/resourceTemplateList
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new template.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/newTemplateResourceStorage
     *
     * @param data The data to be passed when creating a template.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a template.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/updateTemplateStorage
     *
     * @param template_id The id of the template to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static update<T>(template_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single template.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/showTemplateStorage
     *
     * @param template_id The id fo the template to retrieve.
     *
     * @returns promise
     */
    static view<T>(template_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes a template.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/destoryTemplateStorage
     *
     * @param template_id The id of the template to delete.
     * @returns promise
     */
    static delete<T>(template_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the logo for the template using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/uploadLogoTemplateImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadLogoFile<T>(template_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the logo for the template using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/uploadLogoTemplateImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadLogoBlob<T>(template_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the main image for the template using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/uploadMainTemplateImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadMainImageFile<T>(template_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the main image for the template using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/uploadMainTemplateImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadMainImageBlob<T>(template_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Utility {
    /**
     * Get all the social interactions and emojis that are available.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilSocialInteraction
     *
     * @returns promise
     */
    static listSocialInteractions<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all the genres available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenres
     *
     * @returns promise
     */
    static listGenres<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all the genders available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenders
     *
     * @returns promise
     */
    static listGenders<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all the countries available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenres
     *
     * @returns promise
     */
    static listCountries<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all the ethnicities available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilGenres
     *
     * @returns promise
     */
    static listEthnicities<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all the game types available on the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Utility%20Route/getUtilTypes
     *
     * @returns promise
     */
    static listTypes<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Tips {
    /**
     * Give a tip to another user
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    static give<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class TipEmojis {
    /**
     * Retrieve a list of emojis for tupping.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new emoji to use when tipping.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
     *
     * @param data The data to be passed when creating a post.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an emoji for tipping.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/updatePostStorage
     *
     * @param type_id The id of the post to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static update<T>(type_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single emoji resource to be used when tipping.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param type_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    static view<T>(type_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete an emoji resource.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     *
     * @param type_id The id of the post to delete.
     * @returns promise
     */
    static delete<T>(type_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class TipPackages {
    /**
     * Retrieve a list of tip packages.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/resourcePostList
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new tip package.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/newPostResourceStorage
     *
     * @param data The data to be passed when creating a post.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a tip package.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/updatePostStorage
     *
     * @param package_id The id of the post to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static update<T>(package_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single tip package resource.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/showPostStorage
     *
     * @param package_id The id fo the post to retrieve.
     *
     * @returns promise
     */
    static view<T>(package_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a tip package.
     *
     * @see https://api.glitch.fun/api/documentation#/Post%20Route/destoryPostStorage
     *
     * @param package_id The id of the post to delete.
     * @returns promise
     */
    static delete<T>(package_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class TipPackagePurchases {
    /**
     * Purchase a package with Stripe as the processor.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    static stripe<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a stripe payment intent token.
     *
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     *
     * @returns A promise
     */
    static getStripePaymentIntent<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Process the stripe payment intent after payment is complete.
    *
    * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
    *
    * @returns A promise
    */
    static processStripePaymentIntent<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

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
}

declare class Titles {
    /**
     * List all the Titles.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/edab2e3b061347b06c82258622d239e2
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/storeTitle
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/updateTitle
     *
     * @param title_id The id of the title to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static update<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/getTitleByUUID
     *
     * @param title_id The id fo the title to retrieve.
     *
     * @returns promise
     */
    static view<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes a title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/deleteTitle
     *
     * @param title_id The id of the title to delete.
     * @returns promise
     */
    static delete<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Approve a title
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/approveTitle
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    static approve<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Reject a title
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/rejectTitle
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    static reject<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a user as an administrator to a title
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/addTitleAdministrator
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    static addAdministrator<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove a user as an administrator toa  tile
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/removeTitleAdministrator
     *
     * @param data The data to be passed when creating a title.
     *
     * @returns Promise
     */
    static removeAdministrator<T>(title_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
       * Updates the main image for the title using a File object.
       *
       * @see https://api.glitch.fun/api/documentation#/Titles/uploadTitleMainImage
       *
       * @param file The file object to upload.
       * @param data Any additional data to pass along to the upload.
       *
       * @returns promise
       */
    static uploadMainImageFile<T>(title_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the main image for the title using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/uploadTitleMainImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadMainImageBlob<T>(title_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the title using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/uploadTitleBannerImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadBannerImageFile<T>(title_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the title using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/uploadTitleBannerImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadBannerImageBlob<T>(title_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Add media to a title.
    */
    static addMedia<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove media from a title.
     */
    static removeMedia<T>(title_id: string, media_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update the ordering of media items (images, videos, etc.) for a title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/updateMediaOrder
     *
     * @param title_id The ID of the title to update
     * @param media_order An array of objects, each containing:
     *                    - media_id: string (the UUID of the media)
     *                    - order: number (the new order/index)
     * @returns Promise containing the server response
     */
    static updateMediaOrder<T>(title_id: string, media_order: {
        media_id: string;
        order: number;
    }[]): AxiosPromise<Response<T>>;
    /**
     * Upload a CSV/Excel file containing wishlist data for a title.
     *
     * @param title_id The UUID of the title
     * @param file The CSV or Excel file
     * @param data Any additional form data, e.g. platform
     * @returns AxiosPromise
     */
    static importWishlist<T>(title_id: string, file: File | Blob, data?: Record<string, any>, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the wishlist data for a specific title.
     *
     * @param title_id The UUID of the title
     * @param params Optional query params, e.g. { platform: 'steam', start_date: '2025-01-01', end_date: '2025-01-31'}
     * @returns AxiosPromise
     */
    static getWishlist<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
   * Create a new API token for a title.
   * Returns { full_token: string, token: TitleToken }.
   */
    static createTitleToken<T>(title_id: string, data?: {
        expires_at?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * List all tokens for a title.
     */
    static listTitleTokens<T>(title_id: string): AxiosPromise<Response<T>>;
    /**
     * Revoke a specific token by ID.
     */
    static revokeTitleToken<T>(title_id: string, token_id: string): AxiosPromise<Response<T>>;
    /**
     * Search for Titles using Meilisearch or fallback based on the query and filters.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/searchTitles
     *
     * @param params Object of query params:
     *   - q?: string, filters?: string,
     *   - sort_by?: string, sort_order?: 'asc'|'desc',
     *   - page?: number, per_page?: number
     */
    static search<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * List game installs for a specific title.
    */
    static listInstalls<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * View a single game install record.
     */
    static viewInstall<T>(title_id: string, install_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new game install record.
     */
    static createInstall<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List retention events for a specific title.
     */
    static listRetentions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a summary report of retention events for a specific title.
     */
    static retentionSummary<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static activeRetentions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static retentionAnalysis<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static distinctDimensions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List sessions for a specific title, with optional filters and pagination.
     * Returns a paginated list of sessions with start/end times, session_length, user info, etc.
     */
    static listSessions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get aggregated average session length data (daily/weekly/monthly) for a title.
     * Optionally filter by platform/device_type/OS/version and group by one dimension.
     */
    static sessionsAverage<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static sessionsHistogram<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Upload a CSV/Excel file containing daily UTM analytics for a specific title.
     *
     * @param title_id The UUID of the title
     * @param file The CSV or Excel file
     * @param data Optional form fields (if needed)
     * @param params Optional query parameters
     * @returns AxiosPromise
     */
    static importUtmAnalytics<T>(title_id: string, file: File | Blob, data?: Record<string, any>, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the UTM analytics data for a title (paginated, filterable, sortable).
     *
     * GET /titles/{title_id}/utm
     *
     * @param title_id The UUID of the title
     * @param params Optional query params: start_date, end_date, source, device_type, sort_by, etc.
     * @returns AxiosPromise
     */
    static getUtmAnalytics<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the web tracking token used for websites.
     *
     * GET /titles/{title_id}/webTrackingToken
     *
     * @param title_id The UUID of the title
     * @param params Optional query params:
     * @returns AxiosPromise
     */
    static getWebTrackingToken<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Analyze UTM data with optional group_by (source, campaign, medium, device_type, etc.)
     *
     * GET /titles/{title_id}/utm/analysis
     *
     * @param title_id The UUID of the title
     * @param params e.g. ?group_by=source&start_date=YYYY-MM-DD
     * @returns AxiosPromise
     */
    static analyzeUtmAnalytics<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all chat sessions for a title.
     */
    static chatListSessions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a specific chat session and its messages.
     */
    static chatShowSession<T>(title_id: string, session_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Search messages across all sessions of a title.
     */
    static chatListMessages<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a specific chat message.
     */
    static chatUpdateMessage<T>(title_id: string, message_id: string, data: object): AxiosPromise<Response<T>>;
    /**
  * List all purchase events for a specific title.
  * Matches GET /titles/{title_id}/purchases
  */
    static listPurchases<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single purchase record by ID.
     * Matches GET /titles/{title_id}/purchases/{purchase_id}
     */
    static viewPurchase<T>(title_id: string, purchase_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new purchase record.
     * Matches POST /titles/{title_id}/purchases
     */
    static createPurchase<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a summary of total revenue, grouped by day or purchase_type.
     * Matches GET /titles/{title_id}/purchases/summary
     */
    static purchaseSummary<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Revenue by time (daily, weekly, or monthly).
     * Matches GET /titles/{title_id}/purchases/reports/time
     */
    static purchaseRevenueByTime<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * 30-day LTV (Lifetime Value) per install.
     * Matches GET /titles/{title_id}/purchases/reports/ltv30
     */
    static purchaseLtv30<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Show breakdown of revenue per currency, with optional USD conversion.
     * Matches GET /titles/{title_id}/purchases/reports/currency
     */
    static purchaseCurrencyBreakdown<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Distribution of installs by total revenue, plus a histogram array.
     * Matches GET /titles/{title_id}/purchases/reports/install-distribution
     */
    static installRevenueDistribution<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Stats by item SKU, purchase type, and repeat purchase analysis.
     * Matches GET /titles/{title_id}/purchases/reports/item-type-stats
     */
    static itemAndPurchaseTypeStats<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
       * Bulk import access keys for a title from a CSV or Excel file.
       * The file must contain 'platform' and 'code' columns.
       *
       * @see https://api.glitch.fun/api/documentation#/Titles/importTitleKeys
       *
       * @param title_id The UUID of the title.
       * @param file The CSV or Excel file to upload.
       * @param data Optional additional form data.
       * @param params Optional query parameters.
       * @returns AxiosPromise
       */
    static importKeys<T>(title_id: string, file: File | Blob, data?: Record<string, any>, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Campaigns {
    /**
     * List all the Campaigns.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/edab2e3b061347b06c82258622d239e2
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/createCampaign
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/updateCampaign
     *
     * @param campaign_id The id of the campaign to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static update<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignByUuid
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static view<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes a campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/deleteCampaign
     *
     * @param campaign_id The id of the campaign to delete.
     * @returns promise
     */
    static delete<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the ledger for this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLedger
     *
     * @returns promise
     */
    static getLedger<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the post associated with the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLedger
     *
     * @returns promise
     */
    static getPosts<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the associated statistics for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/campaignStatistics
     *
     * @returns promise
     */
    static statistics<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the stream view counts for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignStreamViewCounts
     *
     * @returns promise
     */
    static getStreamViewCounts<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve recommended influencers for a campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/recommendInfluencers
     *
     * @returns promise
     */
    static getRecommendedInfluencers<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all the campaign links.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLinks
     *
     * @returns promise
     */
    static listCampaignLinks<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all the campaign links.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLinks
     *
     * @returns promise
     */
    static listInfluencerCampaignLinkClicks<T>(campaign_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new campaign link.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/storeCampaignLink
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static createCampaignLink<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/1bb1492981b4529693604b03aade8bf6
     *
     * @param campaign_id The id of the campaign to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static updateCampaignLink<T>(campaign_id: string, link_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLink
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static getCampaignLink<T>(campaign_id: string, link_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * List all the influencers associated with a campaign.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerCampaigns
    *
    * @returns promise
    */
    static listInfluencerCampaigns<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create an influencer campaign
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/6d834c837c5f330d6a4cef5786c45c90
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static createInfluencerCampaign<T>(campaign_id: string, user_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Update an influencer campaign.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/updateInfluencerCampaign
    *
    * @param campaign_id The id of the campaign to update.
    * @param data The data to update.
    *
    * @returns promise
    */
    static updateInfluencerCampaign<T>(campaign_id: string, user_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/showInfluencerCampaign
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static viewInfluencerCampaign<T>(campaign_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Mark an influencer campaign as completed.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/markCompleted
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static markInfluencerCampaignComplete<T>(campaign_id: string, user_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Mark an influencer campaign as incomplete.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/afffdc7a0c7fc4d9740f10517c53933e
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static markInfluencerCampaignIncomplete<T>(campaign_id: string, user_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all the links associated with an influencer's campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/edab2e3b061347b06c82258622d239e2
     *
     * @returns promise
     */
    static listInfluencerCampaignLinks<T>(campaign_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * List all the campaign mentions.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLinks
    *
    * @returns promise
    */
    static listCampaignMentions<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new campaign mention.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/storeCampaignLink
     *
     * @param data The data to be passed when creating a campaign.
     *
     * @returns Promise
     */
    static createCampaignMention<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a campaign mention.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/1bb1492981b4529693604b03aade8bf6
     *
     * @param campaign_id The id of the campaign to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static updateCampaignMention<T>(campaign_id: string, mention_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single campaign mention.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLink
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static getCampaignMention<T>(campaign_id: string, mention_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Delete the information for a single campaign mention.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignLink
    *
    * @param campaign_id The id fo the campaign to retrieve.
    *
    * @returns promise
    */
    static deleteCampaignMention<T>(campaign_id: string, mention_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Associate a country with the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/addCountryToCampaign
     *
     * @param data The country information to be passed to update the country campaigns information.
     *
     * @returns Promise
     */
    static addCountry<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove a country
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeCountry
     *
     * @param country_id The id of the country to remove.
     *
     * @returns Promise
     */
    static removeCountry<T>(campaign_id: string, country_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Associate a gender with the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/addGenderToCampaign
     *
     * @param data The gener information to be passed to update the gender information.
     *
     * @returns Promise
     */
    static addGender<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove a gender
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeGender
     *
     * @param gender_id The id of the gender to remove.
     *
     * @returns Promise
     */
    static removeGender<T>(campaign_id: string, gender_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Associate an ethnicity with the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/addGenderToCampaign
     *
     * @param data The ethnicity information to be passed to update the campaign information.
     *
     * @returns Promise
     */
    static addEthnicity<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove an ethnicity
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeGender
     *
     * @param gender_id The id of the ethnicity to remove.
     *
     * @returns Promise
     */
    static removeEthnicity<T>(campaign_id: string, ethnicity_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Associate a type with the campaign.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/addGenderToCampaign
    *
    * @param data The type information to be passed to update the campaign information.
    *
    * @returns Promise
    */
    static addType<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Remove an type
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/removeGender
     *
     * @param type_id The id of the ethnicity to remove.
     *
     * @returns Promise
     */
    static removeType<T>(campaign_id: string, type_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a list of influencer invites that have been sent for this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerInvites
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static listInfluencerInvites<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Invites an influencer to join this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/inviteInfluencer
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static sendInfluencerInvite<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Invites an influencer to join this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static viewInfluencerInvite<T>(campaign_id: string, influencer_id: string, token: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the influencer invite information.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/updateInfluencerInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static updateInfluencerInvite<T>(campaign_id: string, influencer_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the influencer invite compenstation information.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/updateInfluencerCompensationInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static updateInfluencerCompensationInvite<T>(campaign_id: string, influencer_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * The route for an influencer to accept an invite.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/acceptInfluencerInvite
    *
    * @param campaign_id The id fo the campaign to retrieve.
    *
    * @returns promise
    */
    static acceptInfluencerInvite<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * The route for an influencer to decline an invite.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/delinceInfluencerInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static declineInfluencerInvite<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * The route for an influencer to decline an invite.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/withdrawInfluencerInvite
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static widthdrawInfluencerInvite<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * The route to mark an influencer reachout and finished, and it will no longer send reachouts.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/finishInfluencerInvite
    *
    * @param campaign_id The id fo the campaign to retrieve.
    *
    * @returns promise
    */
    static finishInfluencerInvite<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
   * The route to accept an influnecers request to join the campaign.
   *
   * @see https://api.glitch.fun/api/documentation#/Campaigns/acceptInfluencer
   *
   * @param campaign_id The id fo the campaign to retrieve.
   *
   * @returns promise
   */
    static acceptInfluencerRequest<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * The route to deny an influencer request to join the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/denyInfluencer
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static declineInfluencerRequest<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * The route the route to mark the influencers request as in review.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/reviewInfluencer
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static reviewInfluencerRequest<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Generate post content for the influencer to help them with their content creation.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/generatePostContent
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static generateContentForInfluencer<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a list of all active campaigns.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getActiveCampaignLinks
     *
     * @returns promise
     */
    static getActiveCampaignLinks<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Generate a contract for the influencer based on the values in the invite.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/generateInfluencerContract
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static generateContractFromInvite<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send a contract with Docusign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/sendContractWithDocusign
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static sendContractWithDocusign<T>(campaign_id: string, influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Resend the acceptance email for the influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/resendInfluencerAcceptance
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static resendAcceptanceEmail<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Pay the influencer a custom amount for the campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/payInfluencer
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static payInfluencer<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the ledger for this campaign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getCampaignPayouts
     *
     * @returns promise
     */
    static listPayouts<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Generate a contract for the influencer based on the values in the campaign.
    *
    * @see https://api.glitch.fun/api/documentation#/Campaigns/generateCampaignContract
    *
    * @param campaign_id The id fo the campaign to retrieve.
    *
    * @returns promise
    */
    static generateCampaignContract<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send a contract with Docusign.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/sendCampaignContractWithDocusign
     *
     * @param campaign_id The id fo the campaign to retrieve.
     *
     * @returns promise
     */
    static sendCampaignContractWithDocusign<T>(campaign_id: string, user_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Search IGDB for the campaign's game.
     * @param campaign_id The UUID of the campaign.
     * @param params Query parameters (e.g., search_query, limit).
     * @returns promise
     */
    static sourcingSearchIgdbForCampaignGame<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Find popular similar games from IGDB.
     * @param campaign_id The UUID of the campaign.
     * @param params Query parameters (e.g., igdb_id, limit).
     * @returns promise
     */
    static sourcingGetSimilarIgdbGames<T>(campaign_id: string, params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Find content creators for selected games. This does not save them to the database.
     * @param campaign_id The UUID of the campaign.
     * @param data The search criteria (source, igdb_ids, etc.).
     * @returns promise
     */
    static sourcingFindCreators<T>(campaign_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Update campaign sourcing settings.
     * @param campaign_id The UUID of the campaign.
     * @param data The settings to update (igdb_id, similar_game_igdb_ids, etc.).
     * @returns promise
     */
    static updateSourcingSettings<T>(campaign_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Find and save content creators for selected games to the database.
     * @param campaign_id The UUID of the campaign.
     * @param data The search criteria (source, igdb_ids, etc.).
     * @returns promise
     */
    static sourcingFindAndSaveCreators<T>(campaign_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Get sourced creators for a campaign from the database.
     * @param campaign_id The UUID of the campaign.
     * @param params Query parameters for filtering, sorting, and pagination.
     * @returns promise
     */
    static getSourcedCreators<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a single sourced creator.
     * @param campaign_id The UUID of the campaign.
     * @param sourced_creator_id The UUID of the sourced creator.
     * @returns promise
     */
    static getSourcedCreator<T>(campaign_id: string, sourced_creator_id: string): AxiosPromise<Response<T>>;
    /**
     * Update a sourced creator (e.g., approve or reject).
     * @param campaign_id The UUID of the campaign.
     * @param sourced_creator_id The UUID of the sourced creator to update.
     * @param data The update data (e.g., is_approved, is_rejected).
     * @returns promise
     */
    static updateSourcedCreator<T>(campaign_id: string, sourced_creator_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Assigns an available access key to an influencer for a specific campaign.
     * This will find the next available key for the given platform and assign it.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/assignKey
     *
     * @param campaign_id The ID of the campaign.
     * @param user_id The ID of the user (influencer).
     * @param data The platform for which to assign a key.
     * @param data.platform The platform of the key to assign (e.g., 'steam').
     * @returns promise
     */
    static assignKeyToInfluencer<T>(campaign_id: string, user_id: string, data: {
        platform: string;
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Manually trigger a real-time profile enrichment for a sourced creator.
     * This synchronously scrapes and parses social media profiles to enrich the creator's data and returns the updated record.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns%20Sourcing/enrichSourcedCreator
     *
     * @param campaign_id The UUID of the campaign.
     * @param sourced_creator_id The UUID of the sourced creator to enrich.
     * @returns promise containing the fully enriched SourcedCreator object.
     */
    static enrichSourcedCreator<T>(campaign_id: string, sourced_creator_id: string): AxiosPromise<Response<T>>;
    /**
    * Find and save Twitch creators for selected games to the database.
    * @param campaign_id The UUID of the campaign.
    * @param data The search criteria (source, igdb_ids, etc.).
    * @returns promise
    */
    static sourcingFindAndSaveTwitchCreators<T>(campaign_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Find and save YouTube creators for selected games to the database.
     * @param campaign_id The UUID of the campaign.
     * @param data The search criteria (igdb_ids, period).
     * @returns promise
     */
    static sourcingFindAndSaveYouTubeCreators<T>(campaign_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Export sourced creators for a campaign to a CSV or XLSX file.
     * This method applies the same filtering and sorting parameters as getSourcedCreators.
     * The browser will automatically trigger a download for the returned file.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns%20Sourcing/exportSourcedCreators
     *
     * @param campaign_id The UUID of the campaign.
     * @param params Query parameters for the export, including the required 'format' and any filters.
     * @param params.format The desired file format ('csv' or 'xlsx').
     * @param params.search Optional search term.
     * @param params.status Optional status filter ('pending', 'approved', 'rejected').
     * @param params.has_email Optional filter for creators with an email address (true/false).
     * @returns A promise that resolves with the file blob for download.
     */
    static exportSourcedCreators<T>(campaign_id: string, params: {
        format: 'csv' | 'xlsx';
        [key: string]: any;
    }): AxiosPromise<Response<T>>;
    /**
    * Search IGDB for any game by a query string.
    * @param campaign_id The UUID of the campaign (for permission checking).
    * @param params Query parameters including 'search_query' and optional 'limit'.
    * @returns promise
    */
    static sourcingSearchAnyIgdbGame<T>(campaign_id: string, params: {
        search_query: string;
        limit?: number;
    }): AxiosPromise<Response<T>>;
    /**
     * Get full game details from a list of IGDB IDs.
     * @param campaign_id The UUID of the campaign.
     * @param data An object containing the array of IGDB IDs.
     * @param data.igdb_ids An array of IGDB game IDs.
     * @returns promise
     */
    static sourcingGetGamesByIds<T>(campaign_id: string, data: {
        igdb_ids: number[];
    }): AxiosPromise<Response<T>>;
}

declare class Subscriptions {
    /**
     * Get a creator subscription for the creator program.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCreatorSubscription
     *
     * @returns promise
     */
    static getCreatorSubscription<T>(stripe_subscription_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a s subscription plan that a community has to talk with influencers
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCommunityInfluencerSubscription
     *
     * @returns promise
     */
    static getCommunityInfluencerSubscription<T>(community_id: string, stripe_subscription_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all the subscription plans that a creator has.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCreatorSubscriptions
     *
     * @returns promise
     */
    static listCreatorSubscriptions<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all the subscription plans that a community has.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/getCommunityInfluencerSubscriptions
     *
     * @returns promise
     */
    static listCommunityInfluencerSubscriptions<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new subscription of a content creator
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/createCreatorSubscription
     *
     * @returns A promise
     */
    static createCreatorSubscription<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new subscription of a community engaging in influencer marketing
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/createCommunityInfluencerSubscription
     *
     * @returns A promise
     */
    static createCommunityInfluencerSubscription<T>(community_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Cancels a creator subscription
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/cancelCreatorSubscription
     *
     * @returns A promise
     */
    static cancelCreatorSubscription<T>(stripe_subscription_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Cancels a community subscription
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/cancelCommunityInfluencerSubscription
     *
     * @returns A promise
     */
    static cancelCommunityInfluencerSubscription<T>(community_id: string, stripe_subscription_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Change the current subscription that the community is associated with.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/createCreatorSubscription
     *
     * @returns A promise
     */
    static changeCommunityInfluencerSubscription<T>(community_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

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
    /**
     * Get a single thread.
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/getThread
     *
     * @returns promise
     */
    static getThread<T>(thread_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Feedback {
    /**
     * List all the feedback that been left by users.
     *
     * @see https://api.glitch.fun/api/documentation#/Feedback/listFeedback
     *
     * @returns promise
     */
    static listFeedback<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * View a particular item of feedback.
     *
     * @see https://api.glitch.fun/api/documentation#/Feedback/getFeedbackById
     *
     * @returns promise
     */
    static viewFeedback<T>(feedback_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Submit feedback.
     *
     * @see https://api.glitch.fun/api/documentation#/Feedback/a64fe3d6f90ed1af5bbd5311a795c134
     *
     * @returns A promise
     */
    static sendFeedback<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Submit feedback with the log file as a file.
    *
    * @see https://api.glitch.fun/api/documentation#/Feedback/a64fe3d6f90ed1af5bbd5311a795c134
    *
    * @param file The file object to upload.
    * @param data Any additional data to pass along to the upload.
    *
    * @returns promise
    */
    static sendFeedbackWithFile<T>(file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Submit feedback with the log file as a blob.
     *
     * @see hhttps://api.glitch.fun/api/documentation#/Feedback/a64fe3d6f90ed1af5bbd5311a795c134
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static sendFeedbackWithBlob<T>(blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Influencers {
    /**
     * Add a new influencer to the platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/createInfluencersNotes
     *
     * @returns promise
     */
    static addInfluencer<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a list of influencers available on he platform.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencers
     *
     * @returns promise
     */
    static listInfluencers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve information on a single influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencerById
     *
     * @returns promise
     */
    static viewInfluencer<T>(influencer_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Generate a profile for an influencer based on their data.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/generateInfluencerProfile
     *
     * @returns promise
     */
    static generateProfile<T>(influencer_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all the notes left about an influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencersNotes
     *
     * @returns promise
     */
    static listNotes<T>(influencer_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * View a note left about an influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencersNote
     *
     * @returns promise
     */
    static viewNote<T>(influencer_id: string, note_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new note about an influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/createInfluencersNotes
     *
     * @returns promise
     */
    static createNote<T>(influencer_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Update a note about an influencer.
    *
    * @see https://api.glitch.fun/api/documentation#/Influencers/updateInfluencersNote
    *
    * @returns promise
    */
    static updateNote<T>(influencer_id: string, note_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a note about an influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/deleteInfluencersNote
     *
     * @returns promise
     */
    static deleteNote<T>(influencer_id: string, note_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get a list of contracts associated with an influencer.
    *
    * @see https://api.glitch.fun/api/documentation#/Influencers/getInfluencers
    *
    * @returns promise
    */
    static listContracts<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Download the influencer work
     *
     * @see https://api.glitch.fun/api/documentation#/Influencers/downloadInfluencersWorkbook
     *
     * @returns promise
     */
    static workbook<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Games {
    /**
     * Get a list of Games available on he platform.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/getExternalGames
     *
     * @returns promise
     */
    static listGames<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve information on a single game.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/getExternalGameById
     *
     * @returns promise
     */
    static viewGame<T>(game_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Generates campaign data for this game.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/generateCampaign
     *
     * @returns promise
     */
    static createCampaignData<T>(game_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Generates campaign data with a game title.
     *
     * @returns promise
     */
    static createCampaignWithTitle<T>(game_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Generates game data for this game.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/generateCampaign
     *
     * @returns promise
     */
    static createGameTitle<T>(game_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Generates game scheduler data for this game.
     *
     * @see https://api.glitch.fun/api/documentation#/ExternalGames/generateCampaign
     *
     * @returns promise
     */
    static createGameScheduler<T>(game_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Publications {
    /**
     * Get a list of all publictions, podcasts and blogs.
     *
     * @see https://api.glitch.fun/api/documentation#/Publications/getPublications
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Download the list of publictions, podcasts and blogs.
     *
     * @see https://api.glitch.fun/api/documentation#/Publications/downloadPublications
     *
     * @param data The data to be passed when creating a team.
     *
     * @returns Promise
     */
    static download<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class GameShows {
    /**
     * List all the GameShows.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/getGameShows
     *
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new game show.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/createGameShow
     *
     * @param data The data to be passed when creating a game show.
     *
     * @returns Promise
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a game show.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/updateGameShow
     *
     * @param show_id The id of the game show to update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static update<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single game show.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/getGameShowByUuid
     *
     * @param show_id The id fo the game show to retrieve.
     *
     * @returns promise
     */
    static view<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deletes a game show.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/deleteGameShow
     *
     * @param show_id The id of the game show to delete.
     * @returns promise
     */
    static delete<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
       * Updates the main image for the game show using a File object.
       *
       * @see https://api.glitch.fun/api/documentation#/GameShows/uploadGameShowLogo
       *
       * @param file The file object to upload.
       * @param data Any additional data to pass along to the upload.
       *
       * @returns promise
       */
    static uploadLogoFile<T>(show_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the main image for the game show using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/uploadGameShowLogo
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadLogoBlob<T>(show_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the game show using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/uploadGameShowBannerImage
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadBannerImageFile<T>(show_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Updates the banner image for the game show using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/GameShows/uploadGameShowBannerImage
     *
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     *
     * @returns promise
     */
    static uploadBannerImageBlob<T>(show_id: string, blob: Blob, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Register a title to a game show.
     */
    static registerTitle<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a title to a game show by admin.
     */
    static addTitle<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all titles for a game show.
     */
    static listTitles<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get details of a specific title in a game show.
     */
    static getTitle<T>(show_id: string, title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a specific title in a game show.
     */
    static updateTitle<T>(show_id: string, title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a specific title from a game show.
     */
    static deleteTitle<T>(show_id: string, title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Newsletters {
    /**
     * Download the list of publictions, podcasts and blogs.
     *
     * @see https://api.glitch.fun/api/documentation#/Newsletters/downloadMarketingChecklists
     *
     * @param data The data to be passed when creating a team.
     *
     * @returns Promise
     */
    static downloadMarketingChecklist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class PlayTests {
    /**
     * Get a list of play tests associated with a title.
     *
     * @param title_id The ID of the title.
     * @param params Optional query parameters.
     * @returns Promise
     */
    static list<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * User requests to test a title.
     *
     * @param title_id The ID of the title.
     * @param data Optional data for the request.
     * @returns Promise
     */
    static requestPlayTest<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Title administrator invites a user to test a title.
     *
     * @param title_id The ID of the title.
     * @param data The data containing user_id and other optional fields.
     * @returns Promise
     */
    static invitePlayTester<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * User submits or updates their answers for a play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @param data The answers data.
     * @returns Promise
     */
    static submitAnswers<T>(title_id: string, playtest_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Title admin updates test questions for a play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @param data The questions data.
     * @returns Promise
     */
    static updateQuestions<T>(title_id: string, playtest_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * User accepts an invite to a play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static acceptInvite<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * User rejects an invite to a play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static rejectInvite<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Title admin approves a user's play test request.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static approveRequest<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Title admin declines a user's play test request.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static declineRequest<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * User cancels their own play test request.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static cancelRequest<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single play test.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static show<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all the play tests that are associated with the current user.
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static mine<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}

interface SteamCapsuleCropRequest {
    media_id: string;
    capsule_type: 'header' | 'small' | 'main' | 'vertical' | 'library' | 'library_header' | 'library_hero' | 'page_background';
    crop_x?: number;
    crop_y?: number;
    crop_width?: number;
    crop_height?: number;
}
interface SteamCapsuleAnalysisRequest {
    media_id: string;
    capsule_type: 'header' | 'small' | 'main' | 'vertical' | 'library' | 'library_header' | 'library_hero' | 'page_background';
    game_name?: string;
    game_genre?: string;
}
interface SteamCapsuleDimensions {
    width: number;
    height: number;
}
interface SteamCapsuleCropResponse {
    media: any;
    download_url: string;
    dimensions: SteamCapsuleDimensions;
    capsule_type: string;
}
interface CategoryScores {
    visual_hierarchy: number;
    title_readability: number;
    genre_communication: number;
    brand_identity: number;
    composition_balance: number;
    art_style: number;
    emotional_impact: number;
    steam_compliance: number;
}
interface SteamCapsuleAnalysisResponse {
    media_id: string;
    capsule_type: string;
    dimensions: SteamCapsuleDimensions;
    overall_score: number;
    category_scores: CategoryScores;
    strengths: string[];
    improvements: string[];
    recommendations: string[];
    ai_description: string;
    guidelines: any;
}
declare class Media {
    /**
     * Upload media content using a File object.
     *
     * @see https://api.glitch.fun/api/documentation#/Media%20Route/uploadMedia
     *
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadFile<T>(file: File, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    /**
     * Upload media content using a Blob.
     *
     * @see https://api.glitch.fun/api/documentation#/Media%20Route/uploadMedia
     *
     * @param blob The Blob object to upload.
     * @param data Any additional data to pass along to the upload.
     *
     * @returns promise
     */
    static uploadBlob<T>(blob: Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    /**
     * Get media details.
     *
     * @see https://api.glitch.fun/api/documentation#/Media%20Route/getMedia
     *
     * @param id The ID of the media item.
     *
     * @returns promise
     */
    static get<T>(media_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Crop and resize an image to Steam capsule dimensions.
    *
    * @param request The crop request parameters.
    * @param params Additional query parameters.
    *
    * @returns promise
    */
    static cropSteamCapsule(request: SteamCapsuleCropRequest, params?: Record<string, any>): AxiosPromise<Response<SteamCapsuleCropResponse>>;
    /**
     * Analyze a Steam capsule image using AI.
     *
     * @param request The analysis request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static analyzeSteamCapsule(request: SteamCapsuleAnalysisRequest, params?: Record<string, any>): AxiosPromise<Response<SteamCapsuleAnalysisResponse>>;
    /**
     * Get Steam capsule dimensions for a specific type.
     *
     * @param capsuleType The type of Steam capsule.
     *
     * @returns The dimensions object or null if invalid type.
     */
    static getSteamCapsuleDimensions(capsuleType: string): SteamCapsuleDimensions | null;
    /**
     * Get Steam capsule type information and requirements.
     *
     * @param capsuleType The type of Steam capsule.
     *
     * @returns Information about the capsule type.
     */
    static getSteamCapsuleInfo(capsuleType: string): any;
}

declare class Scheduler {
    /**
     * List promotion schedules.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitlePromotionSchedules
     *
     * @returns promise
     */
    static listSchedules<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/createTitlePromotionSchedule
     *
     * @param data The data for the new schedule.
     *
     * @returns promise
     */
    static createSchedule<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a specific promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitlePromotionSchedule
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    static getSchedule<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/updateTitlePromotionSchedule
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The data to update.
     *
     * @returns promise
     */
    static updateSchedule<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/deleteTitlePromotionSchedule
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    static deleteSchedule<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Test the tone of the scheduler.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/updateTitlePromotionSchedule
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The data to update.
     *
     * @returns promise
     */
    static testTone<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get social media posts related to a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getPromotionScheduleSocialPosts
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    static getSchedulePosts<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
         * Rewrite / generate content for a promotion schedule.
         *
         * @see https://api.glitch.fun/api/documentation#/Scheduler/generateTitleContent
         *
         * @param scheduler_id UUID of the promotion schedule.
         * @param data         Body payload. At minimum you must supply
         *                     `{ platform: 'twitter' }` plus either `content`
         *                     **or** a `media` array containing at least one
         *                     `{ id: '<media-uuid>' }`.
         * @returns Axios promise with `{ content, title? }`
         */
    static generateTitleContent<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List title updates for a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitleUpdates
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    static listUpdates<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Search the updates related to a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/searchTitleUpdates
     *
     * @param scheduler_id The ID of the promotion schedule.
     *
     * @returns promise
     */
    static searchUpdates<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new title update for a promotion schedule.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/createTitleUpdate
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The data for the new update.
     *
     * @returns promise
     */
    static createUpdate<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a specific title update.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitleUpdate
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     *
     * @returns promise
     */
    static getUpdate<T>(scheduler_id: string, update_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a title update.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/updateTitleUpdate
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static updateUpdate<T>(scheduler_id: string, update_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a title update.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/deleteTitleUpdate
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     *
     * @returns promise
     */
    static deleteUpdate<T>(scheduler_id: string, update_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Schedule title update.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/updateTitleUpdate
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param data The data to update.
     *
     * @returns promise
     */
    static scheduleUpdate<T>(scheduler_id: string, update_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Twitter OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearTwitterAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Facebook OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearFacebookAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Instagram OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearInstagramAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Snapchat OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearSnapchatAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear TikTok OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearTikTokAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Twitch OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearTwitchAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Kick OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearKickAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Reddit OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearRedditAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Reddit Ads OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearRedditAdsAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear YouTube OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearYouTubeAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Patreon OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearPatreonAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Pinterest OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearPinterestAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Steam OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearSteamAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Discord OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearDiscordAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Bluesky OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearBlueskyAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get Facebook groups associated with the scheduler's Facebook account.
    *
    * @param scheduler_id The ID of the promotion schedule.
    * @returns promise
    */
    static getFacebookGroups<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get Instagram accounts associated with the scheduler's Instagram account.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static getInstagramAccounts<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get Reddit subreddits associated with the scheduler's Reddit account.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static getRedditSubreddits<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get flairs for a specific Reddit subreddit.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param subreddit The name of the subreddit.
     * @returns promise
     */
    static getRedditSubredditFlairs<T>(scheduler_id: string, subreddit: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get Discord channels associated with the scheduler's Discord account.
    *
    * @param scheduler_id The ID of the promotion schedule.
    * @returns promise
    */
    static getDiscordChannels<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Google Ads OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearGoogleAdsAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Clear Tiktok Ads OAuth credentials from a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @returns promise
     */
    static clearTiktokAdsAuth<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get aggregated reports for a promotion schedule.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param params Query parameters (e.g., social_platform, start_date, end_date)
     * @returns promise
     */
    static getSchedulerReports<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get progression data for social media posts over time.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param params Query parameters (e.g., social_platform, start_date, end_date)
     * @returns promise
     */
    static getSchedulerProgression<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
      * List cross-promote relationships for a scheduler (with optional pagination).
      * GET /schedulers/{scheduler_id}/crosspromote/relationships
      */
    static crossPromoteListRelationships<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Find potential cross-promote partners for a scheduler (with optional filters).
     * GET /schedulers/{scheduler_id}/crosspromote/find
     */
    static crossPromoteFind<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List cross-promote invites for a scheduler (incoming + outgoing).
     * GET /schedulers/{scheduler_id}/crosspromote/invites
     */
    static crossPromoteInvitesList<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send an invite to cross-promote (from scheduler_id to partner_scheduler_id).
     * POST /schedulers/{scheduler_id}/crosspromote/invites
     *
     * @param data { partner_scheduler_id, optional_message }
     */
    static crossPromoteInviteSend<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Accept an invite to cross-promote.
     * POST /schedulers/{scheduler_id}/crosspromote/invites/{invite_id}/accept
     */
    static crossPromoteInviteAccept<T>(scheduler_id: string, invite_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Reject an invite to cross-promote.
     * POST /schedulers/{scheduler_id}/crosspromote/invites/{invite_id}/reject
     */
    static crossPromoteInviteReject<T>(scheduler_id: string, invite_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * End a cross-promote relationship (delete).
     * DELETE /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}
     */
    static crossPromoteRelationshipDelete<T>(scheduler_id: string, relationship_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get which platforms are cross-promoted in an existing relationship.
     * GET /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/platforms
     */
    static crossPromoteRelationshipGetPlatforms<T>(scheduler_id: string, relationship_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Set which platforms are cross-promoted in an existing relationship.
     * PUT /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/platforms
     * data = { platforms: ['twitter','facebook',...]}
     */
    static crossPromoteRelationshipSetPlatforms<T>(scheduler_id: string, relationship_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get recently cross-promoted logs under a relationship.
     * GET /schedulers/{scheduler_id}/crosspromote/relationships/{relationship_id}/posts
     */
    static crossPromoteRelationshipPosts<T>(scheduler_id: string, relationship_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List platform-level businesses for the given campaign ID,
     * as defined by /schedulers/{scheduler_id}/businesses on the backend.
     *
     * Typically relevant for Reddit (list businesses), or might return a
     * "not supported" message for Meta/TikTok.
     *
     * @param scheduler_id The UUID of the Ad Campaign
     * @param params      Optional query parameters, e.g. page.size, etc.
     * @returns           A response object with data (business list or messages)
     */
    static listCampaignBusinesses<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List Ad Accounts for the given campaign ID,
     * as defined by /schedulers/{scheduler_id}/ad_accounts on the backend.
     *
     * E.g. for Reddit, you can pass ?business_id= to get business-level ad accounts,
     * or for Twitter, it might just return a user’s ad accounts, etc.
     *
     * @param scheduler_id The UUID of the Ad Campaign
     * @param params      Optional query parameters, e.g. business_id, page.size, etc.
     * @returns           A response object with data (ad account list)
     */
    static listCampaignAdAccounts<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List funding instruments for the given campaign ID,
     * as defined by /schedulers/{scheduler_id}/funding_instruments on the backend.
     *
     * For Twitter, pass ?account_id=...
     * For Reddit, pass ?ad_account_id=... or ?business_id=...
     *
     * @param scheduler_id The UUID of the Ad Campaign
     * @param params      Optional query parameters
     * @returns           A response object with data (funding instruments)
     */
    static listCampaignFundingInstruments<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all destinations for a title update.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/listTitleUpdateDestinations
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @returns promise
     */
    static listDestinations<T>(scheduler_id: string, update_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new destination for a title update.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/createTitleUpdateDestination
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param data The data for the new destination.
     * @returns promise
     */
    static createDestination<T>(scheduler_id: string, update_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a specific title update destination.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getTitleUpdateDestination
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param destination_id The ID of the destination.
     * @returns promise
     */
    static getDestination<T>(scheduler_id: string, update_id: string, destination_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a title update destination.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/updateTitleUpdateDestination
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param destination_id The ID of the destination.
     * @param data The data to update.
     * @returns promise
     */
    static updateDestination<T>(scheduler_id: string, update_id: string, destination_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a title update destination.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/deleteTitleUpdateDestination
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param update_id The ID of the title update.
     * @param destination_id The ID of the destination.
     * @returns promise
     */
    static deleteDestination<T>(scheduler_id: string, update_id: string, destination_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get AI-powered subreddit recommendations for a scheduler.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/getSchedulerRedditRecommendations
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The context for the post (title, content, media type).
     * @returns promise
     */
    static getRedditRecommendations<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Generate tailored content for a specific subreddit.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/generateRedditContentForSubreddit
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The target subreddit and post context.
     * @returns promise
     */
    static generateRedditContent<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get all posts and comments for a scheduler.
    *
    * @param scheduler_id The ID of the promotion schedule.
    * @param params Optional query parameters for filtering and sorting.
    * @returns promise
    */
    static getSchedulerPostsWithComments<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Sync all comments for all posts in a scheduler.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param params Optional query parameters (e.g., limit_per_post).
     * @returns promise
     */
    static syncAllSchedulerComments<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Funnel {
    /**
     * Get funnel metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with funnel metrics data
     */
    static index<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get funnel-optimized metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_funnel
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with funnel data optimized for visual funnels
     */
    static funnel<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get available metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_metrics
     *
     * @returns Promise with list of available metrics
     */
    static metrics<T>(): AxiosPromise<Response<T>>;
    /**
     * Get available stages.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_stages
     *
     * @returns Promise with list of available stages
     */
    static stages<T>(): AxiosPromise<Response<T>>;
    /**
     * Get daily funnel metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_daily
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with daily funnel metrics data
     */
    static daily<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get monthly funnel metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_monthly
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with monthly funnel metrics data
     */
    static monthly<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get yearly funnel metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_yearly
     *
     * @param params Query parameters for filtering (title_id, community_id, start_date, end_date)
     * @returns Promise with yearly funnel metrics data
     */
    static yearly<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get gamified funnel metrics with recommended targets, scores, and ranks.
     *
     * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_gamify
     *
     * @param params Query parameters (title_id, community_id, start_date, end_date)
     * @returns Promise with the gamified funnel data
     */
    static gamify<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class SocialStats {
    /**
     * List all the social media account statistics, with optional filters.
     * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics
     *
     * @param params Optional query parameters:
     *  - platform (string | string[]): Filter by platform(s)
     *  - start_date (string): Filter records created on or after this date (YYYY-MM-DD)
     *  - end_date (string): Filter records created on or before this date (YYYY-MM-DD)
     *  - user_id (string): Filter by user ID
     *  - title_promotion_schedule_id (string): Filter by TitlePromotionSchedule ID
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get platform-level statistics, such as average follower count per platform.
     * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/platformStatistics
     *
     * @returns promise
     */
    static platformStatistics<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Generate various reports for social media account statistics.
     * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/reports
     *
     * @param params Query parameters:
     *  - report_type (string): Required (e.g. average_followers, growth, platform_breakdown)
     *  - platform (string or string[]): Filter by platform(s)
     *  - start_date (string): Filter from date (YYYY-MM-DD)
     *  - end_date (string): Filter to date (YYYY-MM-DD)
     *  - user_id (string): Filter by user ID
     *  - title_promotion_schedule_id (string): Filter by schedule ID
     *
     * @returns promise
     */
    static reports<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single social media account statistic record by its ID.
     * @see https://api.glitch.fun/api/documentation#/SocialMediaAccountStatistics/show
     *
     * @param id The ID of the statistic record.
     * @returns promise
     */
    static view<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Hashtags {
    /**
     * List all the hashtags
     *
     *
     * @returns A promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the top hashtags for a title, campaign, or schedule.
     *
     * @param params - e.g. { title_id: '...', limit: 10, sort: 'sum_views', start_date: 'YYYY-MM-DD', end_date: 'YYYY-MM-DD' }
     * @returns AxiosPromise of an array of aggregated hashtags
     */
    static top<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class WebsiteAnalytics {
    /**
     * List website analytics sessions with comprehensive filtering
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - device_type?: 'desktop'|'mobile'|'tablet'|'bot'|'other'
     *   - country_code?: string - 2-letter country code
     *   - is_bot?: boolean - Filter by bot status
     *   - sort?: 'started_at'|'total_duration'|'pageview_count' - Sort field
     *   - order?: 'asc'|'desc' - Sort order
     *   - per_page?: number - Items per page (max 100)
     * @returns Promise with paginated sessions data
     */
    static listSessions<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a paginated list of pageviews with filtering options
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - analytics_session_id?: string - Filter by session ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - is_exit?: boolean - Filter by exit pageviews
     *   - sort?: 'occurred_at'|'load_time_ms'|'dom_complete_ms' - Sort field
     *   - order?: 'asc'|'desc' - Sort order
     *   - per_page?: number - Items per page (max 100)
     * @returns Promise with paginated pageviews data
     */
    static listPageviews<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a paginated list of events with filtering options
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - analytics_session_id?: string - Filter by session ID
     *   - event_name?: string - Filter by event name
     *   - event_category?: string - Filter by event category
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - sort?: 'occurred_at'|'event_name' - Sort field
     *   - order?: 'asc'|'desc' - Sort order
     *   - per_page?: number - Items per page (max 100)
     * @returns Promise with paginated events data
     */
    static listEvents<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get an analytics overview with summarized metrics
     *
     * @param params Overview options:
     *   - title_id: string - Required title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'day'|'week'|'month'|'year' - Grouping period
     *   - include_breakdowns?: boolean - Include detailed breakdowns
     * @returns Promise with overview data
     */
    static overview<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Single ingestion endpoint for sessions, pageviews and events
     *
     * @param data Analytics data payload with type property:
     *   - type: 'session'|'pageview'|'event' - Type of analytics data
     *   - title_id: string - Title ID
     *   - tracking_token: string - HMAC token for verification
     *   - plus type-specific fields
     * @returns Promise with acceptance response
     */
    static collect<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Get average session length data with optional grouping
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'day'|'week'|'month' - Grouping period
     *   - device_type?: string - Filter by device type
     *   - country_code?: string - Filter by country
     * @returns Promise with average session data
     */
    static sessionsAverage<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get session duration histogram data
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - bucket_size?: number - Duration bucket size in seconds
     * @returns Promise with histogram data
     */
    static sessionsHistogram<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get pageviews over time with optional grouping
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'hour'|'day'|'week'|'month' - Grouping period
     *   - path?: string - Filter by specific path
     * @returns Promise with pageviews over time data
     */
    static pageviewsOverTime<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get top pages by views
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - limit?: number - Number of top pages to return
     * @returns Promise with top pages data
     */
    static topPages<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get summary of events
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - event_category?: string - Filter by event category
     * @returns Promise with events summary data
     */
    static eventsSummary<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get most popular events
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - limit?: number - Number of events to return
     * @returns Promise with popular events data
     */
    static popularEvents<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get geographic distribution of visitors
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - limit?: number - Number of countries to return
     * @returns Promise with geo distribution data
     */
    static geoDistribution<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get device type breakdown
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     * @returns Promise with device breakdown data
     */
    static deviceBreakdown<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get top referrers
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - limit?: number - Number of referrers to return
     * @returns Promise with referrers data
     */
    static referrers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get UTM campaign performance
     *
     * @param params Filtering options:
     *   - title_id?: string - Filter by title ID
     *   - start_date?: string - Start date (YYYY-MM-DD)
     *   - end_date?: string - End date (YYYY-MM-DD)
     *   - group_by?: 'source'|'medium'|'campaign' - Grouping field
     * @returns Promise with UTM performance data
     */
    static utmPerformance<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a combined user journey across short link clicks, web sessions, game installations, etc.
     *
     * @param params Filtering options. All are optional except `title_id`.
     *   - title_id: string                   Required. The UUID of the title to unify user events.
     *   - device_id?: string                Filter by device ID
     *   - session_id?: string               Filter by session ID
     *   - short_link_click_id?: string      Filter by short link click ID
     *   - user_install_id?: string          Filter by game install user_install_id
     *   - browser_fingerprint?: string      Filter by browser fingerprint hash
     *   - hardware_fingerprint?: string     Filter by hardware fingerprint hash
     *   - start_date?: string               Optional. Start date (YYYY-MM-DD) if your API supports time limiting
     *   - end_date?: string                 Optional. End date (YYYY-MM-DD) if your API supports time limiting
     *
     * @returns Promise with a unified timeline of the user’s journey, in chronological order.
     */
    static userJourney<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class ShortLinks {
    /**
     * List all short links with optional filters
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new short link
     */
    static create<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a specific short link by ID
     */
    static view<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a short link
     */
    static update<T>(id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Get click-summary report
    *  - Example usage: ShortLinks.clickSummary({ short_link_id: 'uuid-here' })
    */
    static clickSummary<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get geo & device breakdown report
     *  - Example usage: ShortLinks.geoDeviceBreakdown({ short_link_id: 'uuid-here' })
     */
    static geoDeviceBreakdown<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get time-series report
     *  - Example usage: ShortLinks.timeSeries({ short_link_id: 'uuid-here', group_by: 'day' })
     */
    static timeSeries<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get referrer & UTM report
     *  - Example usage: ShortLinks.referrerReport({ short_link_id: 'uuid-here' })
     */
    static referrerReport<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class AIUsage {
    /**
     * List all AI usage entries with optional filters (date range, service, model, etc.).
     *
     * @see https://api.glitch.fun/api/documentation#/AI%20Usage/getAIUsage
     *
     * @param params Query parameters for filtering and grouping
     * @returns AxiosPromise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get summarized AI usage statistics (token totals, cost, grouped by service/model).
     *
     * @see https://api.glitch.fun/api/documentation#/AI%20Usage/getAIUsageSummary
     *
     * @param params Query parameters for filtering by date range
     * @returns AxiosPromise
     */
    static summary<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}

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

interface Route {
    url: string;
    method: string;
}

declare class Requests {
    private static config;
    private static baseUrl;
    private static authToken;
    private static community_id?;
    constructor(config: Config);
    static setBaseUrl(url: string): void;
    static setAuthToken(token: string): void;
    static setCommunityID(community_id: string | undefined): void;
    private static request;
    static get<T>(url: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static post<T>(url: string, data: any, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static put<T>(url: string, data: any, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static delete<T>(url: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static uploadFile<T>(url: string, filename: string, file: File | Blob, data?: any, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static uploadBlob<T>(url: string, filename: string, blob: Blob, data?: any, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static uploadFileInChunks<T>(file: File, uploadUrl: string, onProgress?: (totalSize: number, amountUploaded: number) => void, data?: any, chunkSize?: number): Promise<void>;
    static processRoute<T>(route: Route, data?: object, routeReplace?: {
        [key: string]: any;
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Parser {
    /**
     * To be used inside a catch close, this function will parse out any JSON in a error response from the api.
     *
     * @param error The Error object from the catch clause
     *
     * @returns Either returns a JSON object or false.
     */
    static parseJSONFromError(error: Error): object | boolean;
}

declare class Session {
    private static _id_key;
    private static _first_name_key;
    private static _last_name_key;
    private static _username_key;
    private static _email_key;
    static isLoggedIn(): boolean;
    static getAuthToken(): string | null;
    static getID(): string | null;
    static getFirstName(): string | null;
    static getLastName(): string | null;
    static getEmail(): string | null;
    static hasJoinedCommunity(): boolean;
    static end(): void;
    static processAuthentication(data: {
        token: {
            access_token: string;
        };
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        username: string;
    }): void;
    /**
     * Generate a tracking token for analytics collection
     * @param titleId The title ID to generate token for
     * @param secret The secret key (should match server config)
     * @returns HMAC-SHA256 token
     * @throws Error if crypto operations fail
     */
    static generateTrackingToken(titleId: string, secret: string): string;
}

declare class Storage {
    private static rootDomain;
    private static data;
    /**
     * Sets a root level domain so the data can persist across
     * subdomains
     *
     * @param rootDomain
     */
    static setRootDomain(rootDomain: string): void;
    private static getStorageKey;
    static set(key: string, value: any): void;
    static get(key: string): any;
    static setAuthToken(token: string | null): void;
    static getAuthToken(): string | null;
    static eraseCookie(name: string): void;
    private static setCookie;
    private static getCookie;
}

declare class Data {
    static dataURItoBlob(dataURI: string): Blob;
    static convertToHHMMSS(time: string | undefined): string | undefined;
}

interface CommunityLabels {
    [key: string]: string;
}
declare class LabelManager {
    private static community;
    static initialize(community: CommunityLabels): void;
    private static getLabel;
    static getUserLabel(plural: boolean, capitalize: boolean): string;
    static getCompetitionLabel(plural: boolean, capitalize: boolean): string;
    static getStreamLabel(plural: boolean, capitalize: boolean): string;
    static getPostLabel(plural: boolean, capitalize: boolean): string;
}

declare enum Modes {
    BROADCAST = 0,
    OBS = 1,
    RTMP = 2
}

declare enum Roles {
    NONE = 0,
    SUPER_ADMINISTRATOR = 1,
    ADMINISTRATOR = 2,
    MODERATOR = 3,
    SPEAKER = 4,
    SUBSCRIBER = 5,
    BLOCKED = 6,
    PRODUCER = 7,
    PARTICIPANT = 8
}

declare enum TeamJoinProcess {
    ANYONE = 1,
    INVITE = 2,
    APPROVAL = 3
}

declare enum SocialInteractions {
    LIKE = "\uD83D\uDC4D",
    LOVE = "\u2764\uFE0F",
    CARE = "\uD83E\uDD70",
    HAHA = "\uD83D\uDE02",
    WOW = "\uD83D\uDE2E",
    SAD = "\uD83D\uDE1E",
    CRY = "\uD83D\uDE22",
    ANGRY = "\uD83D\uDE21",
    THUMBS_UP = "\uD83D\uDC4D",
    THUMBS_DOWN = "\uD83D\uDC4E",
    SMILE = "\uD83D\uDE0A",
    GRIN = "\uD83D\uDE01",
    LAUGH = "\uD83D\uDE04",
    JOY = "\uD83D\uDE03",
    BLUSH = "\uD83D\uDE0A",
    SURPRISE = "\uD83D\uDE2E",
    SHOCK = "\uD83D\uDE32",
    WOW_FACE = "\uD83D\uDE2F",
    MIND_BLOWN = "\uD83E\uDD2F",
    ASTONISHED = "\uD83D\uDE33",
    CLAP = "\uD83D\uDC4F",
    PARTY = "\uD83C\uDF89",
    FIRE = "\uD83D\uDD25",
    COOL = "\uD83D\uDE0E",
    OK = "\uD83D\uDC4C",
    EYES = "\uD83D\uDC40",
    WINK = "\uD83D\uDE09",
    TONGUE_OUT = "\uD83D\uDE1C",
    SILLY = "\uD83E\uDD2A",
    COFFEE = "\u2615",
    TEA = "\uD83C\uDF75",
    BEER = "\uD83C\uDF7A",
    WINE = "\uD83C\uDF77",
    COCKTAIL = "\uD83C\uDF78",
    BALLOON = "\uD83C\uDF88",
    GIFT = "\uD83C\uDF81",
    CAMERA = "\uD83D\uDCF7",
    VIDEO_CAMERA = "\uD83D\uDCF9",
    MUSIC = "\uD83C\uDFB5",
    HEADPHONES = "\uD83C\uDFA7",
    TV = "\uD83D\uDCFA",
    BOOK = "\uD83D\uDCDA",
    PEN = "\uD83D\uDD8A\uFE0F",
    PAPERCLIP = "\uD83D\uDCCE",
    LOCK = "\uD83D\uDD12",
    KEY = "\uD83D\uDD11",
    MAGNIFYING_GLASS = "\uD83D\uDD0D",
    EARTH_GLOBE = "\uD83C\uDF0D",
    MAP = "\uD83D\uDDFA\uFE0F",
    SUN = "\u2600\uFE0F",
    MOON = "\uD83C\uDF19",
    STARS = "\uD83C\uDF1F",
    UMBRELLA = "\u2602\uFE0F",
    RAINBOW = "\uD83C\uDF08",
    CLOCK = "\u23F0",
    HOURGLASS = "\u231B",
    MONEY_BAG = "\uD83D\uDCB0",
    SHOPPING_CART = "\uD83D\uDED2",
    THUMBS_UP_SIGN = "\uD83D\uDC4D\uD83C\uDFFB",
    THUMBS_DOWN_SIGN = "\uD83D\uDC4E\uD83C\uDFFB",
    SMILING_FACE_WITH_HALO = "\uD83D\uDE07",
    NERD_FACE = "\uD83E\uDD13",
    ROLLING_ON_THE_FLOOR_LAUGHING = "\uD83E\uDD23",
    UPSIDE_DOWN_FACE = "\uD83D\uDE43",
    WAVING_HAND = "\uD83D\uDC4B",
    RAISED_HAND = "\u270B",
    VICTORY_HAND = "\u270C\uFE0F",
    FOLDED_HANDS = "\uD83D\uDE4F",
    PERSON_RAISING_HAND = "\uD83D\uDE4B",
    PERSON_BOWING = "\uD83D\uDE47",
    PERSON_SHRUGGING = "\uD83E\uDD37",
    PERSON_WALKING = "\uD83D\uDEB6",
    PERSON_RUNNING = "\uD83C\uDFC3",
    PERSON_SWIMMING = "\uD83C\uDFCA",
    PERSON_BIKING = "\uD83D\uDEB4",
    PERSON_DANCING = "\uD83D\uDC83",
    PEOPLE_HUGGING = "\uD83E\uDD17",
    SPEECH_BUBBLE = "\uD83D\uDCAC",
    THOUGHT_BUBBLE = "\uD83D\uDCAD",
    BUST_IN_SILHOUETTE = "\uD83D\uDC64",
    BUSTS_IN_SILHOUETTE = "\uD83D\uDC65",
    MONKEY_FACE = "\uD83D\uDC35",
    DOG_FACE = "\uD83D\uDC36",
    CAT_FACE = "\uD83D\uDC31",
    PIG_FACE = "\uD83D\uDC37",
    COW_FACE = "\uD83D\uDC2E",
    RABBIT_FACE = "\uD83D\uDC30",
    BEAR_FACE = "\uD83D\uDC3B",
    PANDA_FACE = "\uD83D\uDC3C",
    PENGUIN = "\uD83D\uDC27",
    BIRD = "\uD83D\uDC26",
    BABY_CHICK = "\uD83D\uDC24",
    HATCHING_CHICK = "\uD83D\uDC23",
    BUG = "\uD83D\uDC1B",
    BUTTERFLY = "\uD83E\uDD8B",
    SNAIL = "\uD83D\uDC0C",
    LADY_BEETLE = "\uD83D\uDC1E",
    SPIDER = "\uD83D\uDD77\uFE0F",
    WEB = "\uD83D\uDD78\uFE0F",
    TURTLE = "\uD83D\uDC22",
    FISH = "\uD83D\uDC1F",
    WHALE = "\uD83D\uDC33",
    DOLPHIN = "\uD83D\uDC2C",
    OCTOPUS = "\uD83D\uDC19",
    CACTUS = "\uD83C\uDF35",
    TULIP = "\uD83C\uDF37",
    ROSE = "\uD83C\uDF39",
    SUNFLOWER = "\uD83C\uDF3B",
    PALM_TREE = "\uD83C\uDF34",
    EVERGREEN_TREE = "\uD83C\uDF32",
    DECIDUOUS_TREE = "\uD83C\uDF33",
    EGGPLANT = "\uD83C\uDF46",
    TOMATO = "\uD83C\uDF45",
    CARROT = "\uD83E\uDD55",
    BROCCOLI = "\uD83E\uDD66",
    CORN = "\uD83C\uDF3D",
    HOT_PEPPER = "\uD83C\uDF36\uFE0F",
    BREAD = "\uD83C\uDF5E",
    CHEESE = "\uD83E\uDDC0",
    HAMBURGER = "\uD83C\uDF54",
    PIZZA = "\uD83C\uDF55",
    TACO = "\uD83C\uDF2E",
    SUSHI = "\uD83C\uDF63",
    CUPCAKE = "\uD83E\uDDC1",
    ICE_CREAM = "\uD83C\uDF68",
    DONUT = "\uD83C\uDF69",
    CAKE = "\uD83C\uDF82",
    COOKIES = "\uD83C\uDF6A"
}

declare enum TicketTypes {
    PAID = 1,
    FREE = 2,
    DONATION = 3
}

declare enum TicketUsageTypes {
    REGULAR = 1,
    DAY_PASS = 2,
    TRACK_PASS = 3,
    WHOLE_EVENT_PASS = 4
}

declare enum TicketVisibility {
    VISIBLE = 1,
    HIDDEN = 2,
    HIDDEN_WHEN_NO_SALE = 3,
    SCHEDULED = 4
}

/**
 * Select what kind of venue this is for the event.
 * @readonly
 * @enum {integer}
 */
declare enum VenueType {
    /** @member {integer} */
    /** A virtual only event. */
    VIRTUAL = 1,
    /** @member {integer} */
    /** An in person only event (IRL). */
    IN_PERSON = 2,
    /** @member {integer} */
    /** Combination of IRL and in-person. */
    HYBRID = 3
}

declare class Glitch {
    static config: {
        Config: typeof Config;
    };
    static api: {
        Ads: typeof Ads;
        AccessKeys: typeof AccessKeys;
        Auth: typeof Auth;
        Campaigns: typeof Campaigns;
        Competitions: typeof Competitions;
        Communities: typeof Communities;
        Users: typeof Users;
        Events: typeof Events;
        Games: typeof Games;
        GameShows: typeof GameShows;
        Hashtags: typeof Hashtags;
        Feedback: typeof Feedback;
        Influencers: typeof Influencers;
        Teams: typeof Teams;
        Posts: typeof Posts;
        Messages: typeof Messages;
        Templates: typeof Templates;
        Waitlists: typeof Waitlists;
        Utility: typeof Utility;
        Tips: typeof Tips;
        Titles: typeof Titles;
        Social: typeof Social;
        SocialPosts: typeof SocialPosts;
        Subscriptions: typeof Subscriptions;
        TipPackages: typeof TipPackages;
        TipEmojis: typeof TipEmojis;
        TipPackagePurchases: typeof TipPackagePurchases;
        Publications: typeof Publications;
        Newsletters: typeof Newsletters;
        PlayTests: typeof PlayTests;
        Media: typeof Media;
        Scheduler: typeof Scheduler;
        Funnel: typeof Funnel;
        SocialStats: typeof SocialStats;
        WebsiteAnalytics: typeof WebsiteAnalytics;
        Fingerprinting: typeof Fingerprinting;
        ShortLinks: typeof ShortLinks;
        AIUsage: typeof AIUsage;
        MarketingAgencies: typeof MarketingAgencies;
    };
    static util: {
        Requests: typeof Requests;
        Parser: typeof Parser;
        Session: typeof Session;
        Storage: typeof Storage;
        Data: typeof Data;
        LabelManager: typeof LabelManager;
    };
    static constants: {
        AcceptanceStatus: Readonly<{
            UNAPPROVED: 0;
            APPROVED: 1;
            IN_REVIEW: 2;
            PENDING: 3;
            REQUIRE_MORE_INFORMATION: 4;
            DENIED: 5;
            BANNED: 6;
            PROBATION: 7;
        }>;
        AddressLocationType: Readonly<{
            VIRTUAL: 1;
            IN_PERSON: 2;
            HYBRID: 3;
        }>;
        CampaignObjective: {
            BrandAwareness: number;
            AudienceEngagement: number;
            LeadGeneration: number;
            SalesConversion: number;
            BrandIdentityReputation: number;
            CustomerLoyaltyRetention: number;
            ContentAmplificationDiversity: number;
            MarketFeedbackInsight: number;
            EducatingAudience: number;
            CommunityBuilding: number;
            DrivingWebTraffic: number;
            SEOBenefits: number;
        };
        CompetitionTypes: Readonly<{
            SINGLE_ELIMINATION: 1;
            DOUBLE_ELIMINATION: 2;
            MULTILEVEL: 3;
            STRAIGHT_ROUND_ROBIN: 4;
            ROUND_ROBIN_DOUBLE_SPLIT: 5;
            ROUND_ROBIN_TRIPLE_SPLIT: 6;
            ROUND_ROBIN_QUADRUPLE_SPLIT: 7;
            SEMI_ROUND_ROBINS: 8;
            EXTENDED: 9;
        }>;
        ContentStatus: Readonly<{
            UNAPPROVED: 0;
            APPROVED: 1;
            IN_REVIEW: 2;
            PENDING: 3;
            FLAGGED: 4;
            REMOVED: 5;
            DELETED: 6;
        }>;
        InfluencerCampaignType: {
            SponsoredContent: number;
            AffiliateMarketing: number;
            ProductGifting: number;
            BrandAmbassador: number;
            SocialMediaTakeover: number;
            ContestsGiveaways: number;
            EventCoverage: number;
            CoCreationOfProducts: number;
            InfluencerWhitelisting: number;
            SocialIssuesCauseCampaigns: number;
        };
        Modes: typeof Modes;
        PostTypes: Readonly<{
            TEXT: "text";
            LINK: "link";
            POLL: "poll";
            IMAGE: "image";
            VIDEO: "video";
        }>;
        Roles: typeof Roles;
        SocialInteractions: typeof SocialInteractions;
        TeamJoinProcess: typeof TeamJoinProcess;
        TicketTypes: typeof TicketTypes;
        TicketUsageTypes: typeof TicketUsageTypes;
        TicketVisibility: typeof TicketVisibility;
        VenueType: typeof VenueType;
    };
}

export { Glitch as default };
