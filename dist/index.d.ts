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
     * Gets the base URL
     */
    static getBaseUrl(): string;
    /**
     * Set the JSON Web Token (JWT) that will be passed to the API
     *
     * @param authToken The JWT
     */
    static setAuthToken(authToken: string): void;
    /**
    * Gets the auth token
    */
    static getAuthToken(): string;
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
    /**
     * Gets the root domain
     */
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
    /**
    * Checks if the base URL is locked
    */
    static isBaseUrlLocked(): boolean;
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
    /**
     * Emails the assigned key to the influencer.
     *
     * @param key_id The UUID of the access key.
     * @returns promise
     */
    static sendEmail<T>(key_id: string): AxiosPromise<Response<T>>;
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
     * Get detailed paid campaign performance rows for tables and exports.
     */
    static getDetailedBreakdownReport<T>(params: {
        start_date: string;
        end_date: string;
        community_id?: string;
        scheduler_id?: string;
        platform?: string;
        campaign_id?: string;
        ad_group_id?: string;
        ad_id?: string;
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
    /**
     * Submit a SKAN attribution postback to the public Apple app attribution endpoint.
     * This mirrors POST /.well-known/appattribution/report-attribution.
     */
    static reportSkanAttributionPostback<T>(data: {
        "jws-string"?: string;
        jws?: string;
        [key: string]: any;
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
     * Retrieve the site-admin grant state for the customer-facing game market
     * research product.
     */
    static getMarketResearchAccess<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Enable or disable game market research access for a business account.
     */
    static updateMarketResearchAccess<T>(community_id: string, data: {
        enabled: boolean;
        notes?: string;
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    /**
    * Create a one-time immediate invoice for a business account.
    *
    * @param community_id The ID of the community.
    * @param data { amount: number, description: string }
    */
    static createOneTimeInvoice<T>(community_id: string, data: {
        amount: number;
        description: string;
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a detailed breakdown of a specific invoice including per-title usage.
     *
     * @param community_id The ID of the community.
     * @param invoice_id The Stripe Invoice ID (e.g., in_123...).
     */
    static getInvoiceDetails<T>(community_id: string, invoice_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Generate a custom date-range statement for reimbursement.
     *
     * @param community_id The ID of the community.
     * @param params Should include { start_date: 'YYYY-MM-DD', end_date: 'YYYY-MM-DD' }
     */
    /**
 * Generate a custom date-range statement for reimbursement.
 *
 * @param community_id The ID of the community.
 * @param startDate 'YYYY-MM-DD'
 * @param endDate 'YYYY-MM-DD'
 */
    static getCustomStatement<T>(community_id: string, startDate: string, endDate: string): AxiosPromise<Response<T>>;
    /**
 * List all Stripe invoices for the community.
 */
    static listInvoices<T>(community_id: string): AxiosPromise<Response<T>>;
    /**
     * List influencers saved to the community's private talent pool.
     *
     * @param community_id The UUID of the community.
     * @param params Optional filters like 'list_name'.
     */
    static listSavedInfluencers<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Save an influencer to the community's talent pool (Shortlist).
     *
     * @param community_id The UUID of the community.
     * @param data { influencer_id: string, list_name?: string, tags?: string[] }
     */
    static saveInfluencerToPool<T>(community_id: string, data: object): AxiosPromise<Response<T>>;
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
     * Clear Gmail Workspace authentication information from the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/clearGmailAuth
     *
     * @returns promise
     */
    static clearGmailAuth<T>(): AxiosPromise<Response<T>>;
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
    /**
     * Get a list of games the current user has played.
     * Includes playtime and last played timestamps.
     */
    static playedGames<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all stats for a user, optionally filtered by title_id.
     */
    static getProgressionStats<T>(user_id: string, params?: {
        title_id?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Get all achievements for a user.
     */
    static getProgressionAchievements<T>(user_id: string, params?: {
        title_id?: string;
        status?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Get the raw gameplay history (Run Records) for a user.
     */
    static getProgressionHistory<T>(user_id: string, params?: {
        title_id?: string;
        page?: number;
    }): AxiosPromise<Response<T>>;
    /**
    * List the authenticated user's media library (clips, screenshots, AI generated).
    *
    * @param params Optional filters: { type: 'clip'|'screenshot'|'ai_generated', title_id: string }
    */
    static listMedia<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a Media record to the user's personal library.
     *
     * @param data { media_id: string, type: string, title_id?: string, label?: string, studio_metadata?: object }
     */
    static storeMedia<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Retrieve details for a specific library item.
     */
    static viewMedia<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Update a library item's label or metadata.
     */
    static updateMedia<T>(id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Remove an item from the user's library (Soft Delete).
     */
    static deleteMedia<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Apply AI transformations (Style Transfer/Upscale) to a library item.
     *
     * @param id The UUID of the UserMedia record.
     * @param data { prompt: string, tool: 'style_transfer'|'upscale' }
     */
    static modifyMedia<T>(id: string, data: {
        prompt: string;
        tool: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Get AI-generated suggestions for the best 15-second window to trim a video.
     */
    static suggestSmartTrim<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Share a library item to social media as User Generated Content (UGC).
     * This uses the player media share route, not the developer/scheduler post route.
     *
     * @param id The UUID of the UserMedia record.
     * @param data Player post payload, including platform/channel/schedule options.
     */
    static shareMedia<T>(id: string, data: {
        platform: string;
        social_platform?: string;
        title?: string;
        content: string;
        status?: 'pending' | 'scheduled' | string;
        scheduled_at?: string;
        main_channel_id?: string;
        sub_channel_id?: string;
        token?: string;
        track_links?: boolean;
        media_type?: string;
        [key: string]: any;
    }): AxiosPromise<Response<T>>;
    /**
     * List all gifts purchased by the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userSentGifts
     *
     * @param params Optional filters: title_id, status, gift_type, min_amount, max_amount, start_date, end_date, sort_by, sort_order.
     * @returns promise
     */
    static sentGifts<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all gifts received by the current user.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userReceivedGifts
     *
     * @param params Optional filters: title_id, status, start_date, sort_by.
     * @returns promise
     */
    static receivedGifts<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    /**
     * Join a Play Together session.
     */
    static joinSession<T>(post_id: string, data?: object): AxiosPromise<Response<T>>;
    /**
     * Follow a bug report for updates.
     */
    static followBug<T>(post_id: string, data?: object): AxiosPromise<Response<T>>;
    /**
     * Update notification preferences for a post.
     */
    static updatePreferences<T>(post_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Leave a session or unfollow a bug.
     */
    static leave<T>(post_id: string): AxiosPromise<Response<T>>;
    /**
     * Mark a bug as resolved (Admin only).
     */
    static resolveBug<T>(post_id: string): AxiosPromise<Response<T>>;
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
    /**
     * Get all genres that are associated with at least one game title.
     * Includes the 'titles_count' property.
     *
     * @returns promise
     */
    static listActiveGenres<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    static reports<T>(post_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    /**
     * Reply to a high-intent TikTok comment via Direct Message.
     *
     * @param comment_id The ID of the comment.
     * @param data { message: string }
     */
    static replyViaDm<T>(comment_id: string, data: {
        message: string;
    }): AxiosPromise<Response<T>>;
    /**
     * List all discovered Reddit questions (Admin Only).
     *
     * @param params Query parameters: status, subreddit, is_question.
     */
    static listRedditQuestions<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve details for a specific discovered Reddit question (Admin Only).
     *
     * @param id The UUID of the question.
     */
    static viewRedditQuestion<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a Reddit question's status or metadata (Admin Only).
     *
     * @param id The UUID of the question.
     * @param data { status: 'pending'|'answered'|'ignored', metadata?: object }
     */
    static updateRedditQuestion<T>(id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a discovered Reddit question (Admin Only).
     *
     * @param id The UUID of the question.
     */
    static deleteRedditQuestion<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Optimize a Reddit post for a specific subreddit using the AI engine (Admin Only).
     *
     * @param data { subreddit: string, content: string, title_id: string }
     */
    static optimizeRedditPost<T>(data: {
        subreddit: string;
        content: string;
        title_id: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Get a report attributing game installs, wishlists, and purchases to specific social media posts.
     *
     * @param params Filter object:
     *   - title_id: string (Required)
     *   - start_date?: string (YYYY-MM-DD)
     *   - end_date?: string (YYYY-MM-DD)
     *   - confidence_threshold?: number (0-100)
     */
    static getSocialPostAttribution<T>(params: {
        title_id: string;
        start_date?: string;
        end_date?: string;
        confidence_threshold?: number;
    }): AxiosPromise<Response<T>>;
    /**
     * Get a report attributing game installs and revenue to specific UTM sources and campaigns.
     *
     * @param params Filter object:
     *   - title_id: string (Required)
     *   - start_date?: string (YYYY-MM-DD)
     *   - end_date?: string (YYYY-MM-DD)
     *   - confidence_threshold?: number (0-100)
     */
    static getUtmAttribution<T>(params: {
        title_id: string;
        start_date?: string;
        end_date?: string;
        confidence_threshold?: number;
    }): AxiosPromise<Response<T>>;
    static getInfluencerAttribution<T>(params: {
        title_id: string;
        start_date?: string;
        end_date?: string;
        confidence_threshold?: number;
    }): AxiosPromise<Response<T>>;
}

type GameReviewRecommendation = 'recommended' | 'not_recommended' | 'neutral';
type GameReviewSentiment = 'positive' | 'mixed' | 'negative';
type GameReviewVoteType = 'helpful' | 'funny' | 'detailed' | 'not_helpful';
type GameReviewReportReason = 'abuse' | 'spam' | 'off_topic' | 'manipulation' | 'hate' | 'personal_info' | 'other';
interface GameReviewRatings {
    gameplay?: GameReviewSentiment;
    performance?: GameReviewSentiment;
    value?: GameReviewSentiment;
    content?: GameReviewSentiment;
    multiplayer?: GameReviewSentiment;
    monetization?: GameReviewSentiment;
    stability?: GameReviewSentiment;
    localization?: GameReviewSentiment;
    accessibility?: GameReviewSentiment;
}
interface CreateGameReviewRequest {
    recommendation: GameReviewRecommendation;
    title: string;
    body: string;
    review_type?: 'first_impression' | 'full_review' | 'bug_performance_warning' | 'early_access_feedback' | 'multiplayer_community_feedback' | 'monetization_pricing_feedback' | 'changed_opinion_after_update';
    liked?: string;
    needs_work?: string;
    audience?: string;
    language?: string;
    game_version?: string;
    platform?: string;
    acquisition_type?: 'purchased' | 'free_to_play' | 'free_copy' | 'promotional_key' | 'beta_key' | 'demo' | 'external_verified';
    received_for_free?: boolean;
    early_access?: boolean;
    current_version_review?: boolean;
    main_negative_reason?: 'bugs_crashes' | 'bad_performance' | 'not_enough_content' | 'misleading_marketing' | 'price_value' | 'monetization' | 'community_toxicity' | 'developer_business_decision' | 'localization' | 'server_network' | 'gameplay_design' | 'not_my_type' | 'other';
    change_reason?: string;
    ratings?: GameReviewRatings;
}
type UpdateGameReviewRequest = Partial<CreateGameReviewRequest>;
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
    /**
     * Update administrator email preferences for a title.
     *
     * @see https://api.glitch.fun/api/documentation#/Titles/updateTitleAdministrator
     *
     * @param title_id The id of the title.
     * @param user_id The id of the user/administrator.
     * @param data The preference data to update (notify_promotion_schedule_reminder_email, notify_weekly_promotion_performance_email).
     *
     * @returns Promise
     */
    static updateAdministrator<T>(title_id: string, user_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
 * List ad conversion events for a title with filtering
 */
    static listAdConversionEvents<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retry a failed or pending ad conversion event
     */
    static retryAdConversionEvent<T>(title_id: string, event_id: string): AxiosPromise<Response<T>>;
    /**
    * List all landing pages for a specific title.
    * @param title_id The UUID of the title.
    * @param params Optional query parameters for pagination.
    */
    static listLandingPages<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new landing page for a title.
     * @param title_id The UUID of the title.
     * @param data The data for the new landing page.
     */
    static createLandingPage<T>(title_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * View a specific landing page by its ID.
     * @param landing_page_id The UUID of the landing page.
     */
    static viewLandingPage<T>(landing_page_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an existing landing page.
     * @param landing_page_id The UUID of the landing page to update.
     * @param data The new data for the landing page.
     */
    static updateLandingPage<T>(landing_page_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a landing page.
     * @param landing_page_id The UUID of the landing page to delete.
     */
    static deleteLandingPage<T>(landing_page_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Trigger an AI translation for a landing page.
     * @param landing_page_id The UUID of the landing page.
     * @param data An object containing the target language code, e.g., { language_code: 'es' }.
     */
    static translateLandingPage<T>(landing_page_id: string, data: {
        language_code: string;
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
    * Generate or regenerate AI-powered HTML content for a landing page.
    * @param landing_page_id The UUID of the landing page.
    * @param data An object containing the prompt, language_code, and privacy_mode.
    */
    static generateLandingPageAiContent<T>(landing_page_id: string, data: {
        prompt: string;
        language_code: string;
        privacy_mode: string;
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create or update a specific translation for a landing page.
     * @param landing_page_id The UUID of the landing page.
     * @param translationData The full translation object to be saved.
     */
    static saveLandingPageTranslation<T>(landing_page_id: string, translationData: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static cohorts<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
 * Get an aggregated report of ad conversion events for charting.
 */
    static getAdConversionEventsReport<T>(title_id: string, params: {
        start_date: string;
        end_date: string;
        group_by: 'platform' | 'status' | 'event_type';
        unique_clicks?: boolean;
    }): AxiosPromise<Response<T>>;
    /**
     * Get a geographical distribution report for installs.
     * @param params e.g., { group_by: 'country_code', start_date: '2025-01-01' }
     */
    static geoReport<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List and filter raw game events (telemetry).
     */
    static listEvents<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Record a single in-game action.
     */
    static createEvent<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Record multiple events in one request (Batching).
     * @param data { events: Array<{game_install_id, step_key, action_key, metadata?}> }
     */
    static bulkCreateEvents<T>(title_id: string, data: {
        events: object[];
    }): AxiosPromise<Response<T>>;
    /**
     * Get a summary of actions per step.
     */
    static eventSummary<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get all unique step and action keys used in this title.
     */
    static eventDistinctKeys<T>(title_id: string): AxiosPromise<Response<T>>;
    /**
     * List all saved behavioral funnel definitions.
     */
    static listBehavioralFunnels<T>(title_id: string): AxiosPromise<Response<T>>;
    /**
     * Create and save a new behavioral funnel definition.
     * @param data { name: string, description?: string, steps: string[] }
     */
    static createBehavioralFunnel<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Generate the drop-off report for a specific behavioral funnel.
     * @param params { start_date?: string, end_date?: string }
     */
    static behavioralFunnelReport<T>(title_id: string, funnel_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a saved behavioral funnel definition.
     */
    static deleteBehavioralFunnel<T>(title_id: string, funnel_id: string): AxiosPromise<Response<T>>;
    /**
    * Generates a presigned S3 URL for uploading a game build ZIP.
    */
    static getDeploymentUploadUrl<T>(title_id: string): AxiosPromise<Response<T>>;
    /**
     * Confirms the upload and starts the automated deployment/extraction process.
     * @param data { file_path: string, version_string: string, entry_point?: string }
     */
    static confirmDeployment<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Initializes a play session. Handles age-gating and license verification.
     * Returns the CDN URL for WASM/iFrame or Signaling URL for Pixel Streaming.
     */
    static getPlaySession<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all developer payouts for a title.
     */
    static listDeveloperPayouts<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * View a specific payout record.
     */
    static viewDeveloperPayout<T>(title_id: string, payout_id: string): AxiosPromise<Response<T>>;
    /**
     * Get the total earnings and playtime summary for a title.
     */
    static getDeveloperPayoutSummary<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * The Aegis Handshake: Verify if a player is allowed to play.
     *
     * This is used by the game engine (Unity/Unreal) to confirm that the
     * current session is valid and the user has a proper license.
     *
     * @see https://api.glitch.fun/api/documentation#/Aegis%20Security/validateGameSession
     *
     * @param title_id The UUID of the game title.
     * @param install_id The UUID of the specific install/session.
     * @returns AxiosPromise containing { valid: boolean, user_name: string, license_type: string }
     */
    static validateInstall<T>(title_id: string, install_id: string): AxiosPromise<Response<T>>;
    /**
     * List all builds/deployments for a specific title.
     * @param title_id The UUID of the title.
     */
    static listBuilds<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all cloud save slots for the player associated with this install.
     */
    static listSaves<T>(title_id: string, install_id: string): AxiosPromise<Response<T>>;
    /**
     * Upload game progress. The user is identified by the install_id.
     */
    static storeSave<T>(title_id: string, install_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Resolve a conflict.
     */
    static resolveSaveConflict<T>(title_id: string, install_id: string, save_id: string, conflict_id: string, choice: 'keep_server' | 'use_client'): AxiosPromise<Response<T>>;
    /**
    * Toggle a game on the current user's wishlist.
    * If the game is not wishlisted, it will be added. If it is, it will be removed.
    *
    * @param title_id The UUID of the title.
    * @param data Optional context: { fingerprint_id?: string, short_link_click_id?: string }
    */
    static wishlistToggle<T>(title_id: string, data?: object): AxiosPromise<Response<T>>;
    /**
     * Record a self-assigned excitement score (1-5) for a wishlisted game.
     *
     * @param title_id The UUID of the title.
     * @param data { score: number } - Must be between 1 and 5.
     */
    static wishlistUpdateScore<T>(title_id: string, data: {
        score: number;
    }): AxiosPromise<Response<T>>;
    /**
     * Retrieve the current user's personal wishlist collection.
     *
     * @param params Optional pagination parameters (?page=1&per_page=25)
     */
    static myWishlists<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get Wishlist Intelligence statistics for a title.
     * Includes funnel data and predictive revenue forecasting.
     * Note: Requires Title Administrator permissions.
     *
     * @param title_id The UUID of the title.
     */
    static wishlistStats<T>(title_id: string): AxiosPromise<Response<T>>;
    /**
     * Get the current user's specific wishlist for a title.
     * @param title_id The UUID of the title.
     */
    static wishlistMe<T>(title_id: string): AxiosPromise<Response<T>>;
    /**
     * Get the consolidated attribution funnel report.
     * @param title_id The UUID of the title.
     */
    static attributionFunnel<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update the status of a specific deployment build.
     * @param title_id The UUID of the title.
     * @param build_id The UUID of the build.
     * @param status The new status ('ready', 'inactive', or 'failed').
     */
    static updateBuildStatus<T>(title_id: string, build_id: string, status: string): AxiosPromise<Response<T>>;
    /**
 * Proxies a request through the backend to the matchmaker.
 * This avoids HTTPS -> HTTP mixed content blocks.
 *
 * @param title_id The UUID of the game title.
 * @returns AxiosPromise containing { signallingServer: string }
 */
    static getMatchmakerServer<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send a session heartbeat to keep the dedicated instance claimed.
     * Called every 30s during active gameplay.
     */
    static matchmakerSessionHeartbeat<T>(title_id: string, data: {
        sessionId: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Release the session (starts reclaim countdown).
     * Called on beforeunload or explicit navigation away.
     */
    static matchmakerSessionRelease<T>(title_id: string, data: {
        sessionId: string;
    }): AxiosPromise<Response<T>>;
    /**
    * Initiates a resumable S3 multipart upload for large files.
    */
    static initiateMultipartUpload<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Get presigned URLs for specific chunk parts.
     */
    static getMultipartUrls<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Stitch together all uploaded chunks to complete the file in S3.
     */
    static completeMultipartUpload<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    static listProgressionStats<T>(title_id: string): AxiosPromise<Response<T>>;
    static createProgressionStat<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    static deleteProgressionStat<T>(title_id: string, id: string): AxiosPromise<Response<T>>;
    static listProgressionAchievements<T>(title_id: string): AxiosPromise<Response<T>>;
    static createProgressionAchievement<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    static listProgressionLeaderboards<T>(title_id: string): AxiosPromise<Response<T>>;
    static createProgressionLeaderboard<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    static listProgressionSeasons<T>(title_id: string): AxiosPromise<Response<T>>;
    static createProgressionSeason<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Submit a gameplay run. Updates stats and scores using the install_id for privacy.
     * @param data { idempotency_key: string, payload: { stats: {}, scores: {} } }
     */
    static submitProgressionRun<T>(title_id: string, install_id: string, data: object): AxiosPromise<Response<T>>;
    static getProgressionPlayerStats<T>(title_id: string, install_id: string): AxiosPromise<Response<T>>;
    static getProgressionPlayerAchievements<T>(title_id: string, install_id: string): AxiosPromise<Response<T>>;
    /**
     * View leaderboard rankings.
     * @param params Optional filters like { around_me: true, install_id: 'uuid', season_id: 'uuid' }
     */
    static getProgressionLeaderboard<T>(title_id: string, api_key: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static getTechnicalEventSummary<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get games ranked by community activity (active players).
     *
     * @param params
     *   - window: number (hours, default 24)
     *   - limit: number (default 10)
     *   - is_nsfw: 1 for adult titles only, 0 for safe titles only
     */
    static getCommunityActivity<T>(params?: {
        window?: number;
        limit?: number;
        is_nsfw?: number | boolean;
    }): AxiosPromise<Response<T>>;
    /**
     * Get games trending on social media.
     *
     * @param params
     *   - type: 'influencer' (campaigns) or 'organic' (non-paid)
     *   - window: number (hours, default 168)
     *   - limit: number (default 10)
     *   - is_nsfw: 1 for adult titles only, 0 for safe titles only
     */
    static getSocialTrending<T>(params: {
        type: 'influencer' | 'organic';
        window?: number;
        limit?: number;
        is_nsfw?: number | boolean;
    }): AxiosPromise<Response<T>>;
    /**
     * Get a personalized discovery queue of games.
     *
     * @param params
     *   - limit: number (default 12)
     *   - device_id: string (highly recommended for guest tracking)
     *   - is_nsfw: 1 for adult titles only, 0 for safe titles only
     */
    static getDiscoveryQueue<T>(params?: {
        limit?: number;
        device_id?: string;
        is_nsfw?: number | boolean;
    }): AxiosPromise<Response<T>>;
    /**
    * Get a curated, playable feed for the Swipe interface.
    * This route ensures games have builds and images, and supports seeded randomization.
    *
    * @see https://api.glitch.fun/api/documentation#/Discovery/getSwipeFeed
    *
    * @param params Object of query params:
    *   - seed?: number (For consistent randomization)
    *   - genres?: string[] (Filter by genre names)
    *   - models?: string[] (premium, rental, subscription, free)
    *   - is_nsfw?: 1 | 0 (1 for adult titles only, 0 for safe titles only)
    *   - excluded_ids?: string[] (UUIDs to skip)
    *   - page?: number
    *   - per_page?: number
    */
    static swipeFeed<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a consolidated report of all earnings for a title, including
     * playtime payouts, direct premium purchases, and rentals (minus refunds).
     *
     * @param title_id The UUID of the title.
     * @returns AxiosPromise containing the consolidated financial data.
     */
    static getDeveloperPayoutConsolidatedSummary<T>(title_id: string): AxiosPromise<Response<T>>;
    static wishlistHistory<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static wishlistInfluencers<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static wishlistAds<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static wishlistUtms<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static wishlistConversions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static wishlistGeo<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static wishlistDevices<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List public reviews for a title.
     *
     * @param title_id The UUID of the title.
     * @param params Optional filters: recommendation, language, current_version_only,
     * verified_only, platform, acquisition_type, complaint, playtime, sort, per_page.
     */
    static listReviews<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get aggregate review scores and structured praise/complaint summaries.
     */
    static reviewSummary<T>(title_id: string, params?: {
        language?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Create the current user's review for a title. The backend verifies play/purchase eligibility.
     */
    static createReview<T>(title_id: string, data: CreateGameReviewRequest): AxiosPromise<Response<T>>;
    /**
     * View a single review, including revision history when the backend includes it.
     */
    static viewReview<T>(review_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update the current user's review and preserve a backend revision trail.
     */
    static updateReview<T>(review_id: string, data: UpdateGameReviewRequest): AxiosPromise<Response<T>>;
    /**
     * Delete the current user's review, or a title admin's moderated review.
     */
    static deleteReview<T>(review_id: string): AxiosPromise<Response<T>>;
    /**
     * Vote on a review as helpful, funny, detailed, or not helpful.
     */
    static voteReview<T>(review_id: string, vote_type: GameReviewVoteType): AxiosPromise<Response<T>>;
    /**
     * Report a review for moderation.
     */
    static reportReview<T>(review_id: string, data: {
        reason: GameReviewReportReason;
        notes?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Create or update the title developer's official response to a review.
     */
    static respondToReview<T>(review_id: string, data: {
        body: string;
        linked_patch_note_id?: string;
        issue_marked_fixed?: boolean;
    }): AxiosPromise<Response<T>>;
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
     * List public influencer campaigns.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getPublicCampaigns
     *
     * @returns promise
     */
    static listPublic<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
     * Get planned influencer content for a campaign calendar.
     *
     * @param campaign_id The campaign id to retrieve calendar posts for.
     * @param params Optional filters such as scheduled_at_from, scheduled_at_to, status, or user_id.
     */
    static getCampaignCalendar<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
     * Delete a campaign link.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/deleteCampaignLink
     *
     * @param campaign_id The id of the campaign to update.
     * @param link_id The id of the campaign link to delete.
     *
     * @returns promise
     */
    static deleteCampaignLink<T>(campaign_id: string, link_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    * List planned influencer content across the authenticated influencer's accepted campaigns.
    */
    static getInfluencerCalendar<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    * Delete an influencer campaign relationship.
    *
    * The backend route currently exists, but the controller destroy implementation is intentionally
    * treated as an agent/admin stop-gate because removal can orphan posts, payouts, or contracts.
    */
    static deleteInfluencerCampaign<T>(campaign_id: string, user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
     * Create or update planned campaign content for an influencer.
     *
     * @param campaign_id The campaign id.
     * @param user_id The influencer user id.
     * @param data The posts payload.
     */
    static saveInfluencerCalendarPosts<T>(campaign_id: string, user_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
     * Get creator context used when preparing a personalized invite.
     */
    static creatorInviteContext<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send a personalized creator invite after review.
     */
    static sendCreatorInvite<T>(campaign_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    /**
     * Get full game details from a list of IGDB IDs.
     * @param campaign_id The UUID of the campaign.
     * @param data An object containing the array of IGDB IDs.
     * @param data.igdb_ids An array of IGDB game IDs.
     * @returns promise
     */
    static updateAutoInviteCriteria<T>(campaign_id: string, data: object): AxiosPromise<Response<T>>;
    static updateCustomRanking<T>(campaign_id: string, data: object): AxiosPromise<Response<T>>;
    static updateCreatorBucket<T>(campaign_id: string, creator_id: string, data: object): AxiosPromise<Response<T>>;
    static reRankSourcedCreators<T>(campaign_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Queue multiple sourced creators for profile enrichment.
     * This dispatches a background job for each creator to find their social media profiles and contact information.
     *
     * @param campaign_id The UUID of the campaign.
     * @param data An object containing the array of SourcedCreator IDs to enrich.
     * @param data.creator_ids An array of SourcedCreator UUIDs.
     * @returns A promise that resolves with a confirmation message and the count of queued jobs.
     */
    static bulkEnrichSourcedCreators<T>(campaign_id: string, data: {
        creator_ids: string[];
    }): AxiosPromise<Response<T>>;
    /**
     * Get install attribution breakdown by influencer.
     *
     * @see https://api.glitch.fun/api/documentation#/Campaigns/getInfluencerInstallReport
     *
     * @param campaign_id The UUID of the campaign.
     * @param params Optional query parameters (start_date, end_date).
     * @returns promise
     */
    static getInfluencerInstallReport<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get detailed install report for a specific influencer.
     * Accessible by Campaign Owners and the specific Influencer.
     *
     * @param campaign_id The UUID of the campaign.
     * @param influencer_id The UUID of the influencer.
     * @param params Optional query parameters (start_date, end_date).
     * @returns promise
     */
    static getSpecificInfluencerInstallReport<T>(campaign_id: string, influencer_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Generate AI Landing Page for an Influencer Campaign.
     */
    static generateInfluencerLandingPage<T>(campaign_id: string, user_id: string, data: {
        prompt: string;
        privacy_mode: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Update settings for the Influencer Landing Page.
     */
    static updateInfluencerLandingPage<T>(campaign_id: string, user_id: string, data: {
        is_landing_page_active?: boolean;
        landing_page_slug?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Export influencer invites to CSV.
     *
     * @param campaign_id The UUID of the campaign.
     * @param data Filters for the export (stages, status).
     */
    static exportInfluencerInvites<T>(campaign_id: string, data: {
        stages?: string[];
        status?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Find and save Fansly creators for a specific campaign.
     *
     * @see CampaignCreatorSourcingController@findAndSaveFanslyCreators
     *
     * @param campaign_id The UUID of the campaign.
     * @param data Parameters for sourcing.
     * @param data.query The search term (e.g., 'gaming', 'cosplay'). Defaults to 'gaming'.
     * @param data.pages Number of pages to crawl (25 results per page). Defaults to 10.
     * @returns promise
     */
    static sourcingFindAndSaveFanslyCreators<T>(campaign_id: string, data: {
        query?: string;
        pages?: number;
    }): AxiosPromise<Response<T>>;
    static sendOnboarding<T>(campaign_id: string, user_id: string, data?: {
        template_id?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Bulk invite influencers from a previous campaign into the current one.
     *
     * @param campaign_id The UUID of the target campaign.
     * @param data { source_campaign_id: string, only_successful: boolean }
     */
    static crossPromote<T>(campaign_id: string, data: {
        source_campaign_id: string;
        only_successful?: boolean;
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
     * Check whether the current user can access developer tool creation for a feature.
     *
     * @param params { feature: 'social_media'|'influencers'|'ads', community_id?: string, title_id?: string, scheduler_id?: string }
     * @returns promise
     */
    static getDeveloperToolAccess<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    /**
    * Create a custom tailored subscription for a business/community.
    * Only accessible by Glitch administrators.
    *
    * @param community_id The ID of the community.
    * @param data { priceId, paymentMethod, custom_name, limits: { posts, enrichments, invites, ads }, metered_prices: [] }
    */
    static createCustomCommunitySubscription<T>(community_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Purchase a permanent license or rent a game title.
     * If a rental was active in the last 7 days, the fee is automatically deducted from the premium price.
     * @param data { purchase_type: 'premium' | 'rental', payment_method_id: string }
     */
    static purchaseLicense<T>(title_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * List all game licenses (Premium/Rental) owned by the current user.
     */
    static listMyLicenses<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Request a refund for a premium purchase.
     */
    static refundLicense<T>(license_id: string): AxiosPromise<Response<T>>;
    /**
     * Purchase a game or subscription as a gift for another user.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/purchaseGift
     *
     * @param data { gift_type: 'premium'|'rental'|'subscription', payment_method_id: string, title_id?: string, recipient_id?: string, recipient_email?: string, recipient_name?: string }
     * @returns promise
     */
    static purchaseGift<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Redeem a gift code to grant access to a game or subscription.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/redeemGift
     *
     * @param redemption_code The unique GLITCH-XXXX-XXXX code.
     * @returns promise
     */
    static redeemGift<T>(redemption_code: string): AxiosPromise<Response<T>>;
    /**
     * Cancel an unredeemed gift and trigger a refund.
     * Only the user who purchased the gift (the giver) can perform this action.
     *
     * @see https://api.glitch.fun/api/documentation#/Subscriptions/cancelGift
     *
     * @param gift_id The UUID of the gift to cancel.
     * @returns promise
     */
    static cancelGift<T>(gift_id: string): AxiosPromise<Response<T>>;
    /**
     * Validates a coupon code and returns the calculated discount.
     * @param data { code: string, price: number, currency?: string }
     */
    static validateCoupon<T>(data: {
        code: string;
        price: number;
        currency?: string;
    }): AxiosPromise<Response<T>>;
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
     * Updates a message.
     *
     * @see https://api.glitch.fun/api/documentation#/Messages/updateMessage
     *
     * @returns A promise
     */
    static updateMessage<T>(message_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
     * List support tickets owned by the logged-in user.
     */
    static listSupportTickets<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a support ticket for the logged-in user.
     */
    static createSupportTicket<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * View a support ticket owned by the logged-in user.
     */
    static viewSupportTicket<T>(feedback_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Reply to a support ticket owned by the logged-in user.
     */
    static replySupportTicket<T>(feedback_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Admin support inbox covering support tickets and feedback.
     */
    static adminListFeedback<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static adminViewFeedback<T>(feedback_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static adminUpdateFeedback<T>(feedback_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static adminReplyFeedback<T>(feedback_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static adminRewardFeedback<T>(feedback_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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

/**
 * Interface for the Release Stats response to help developers
 * understand the data structure returned by the optimizer.
 */
interface ReleaseStatEntry {
    date: string;
    count: number;
    intensity: 'low' | 'medium' | 'high' | 'extreme';
    is_danger_zone: boolean;
    recommendation: string;
    events: Array<{
        name: string;
        type: 'nextfest' | 'sale';
        start: string;
        end: string;
    }>;
}
interface ReleaseStatsResponse {
    data: ReleaseStatEntry[];
    meta: {
        user_status: 'authenticated' | 'guest';
        lookahead_days: number;
        start_date: string;
        end_date: string;
        global_events: any[];
    };
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
    /**
    * Get release competition statistics and Steam danger zones.
    *
    * This tool analyzes the 'ExternalGames' database to show how many other games
    * are releasing around a specific date. It also overlays hard-coded Steam events
    * like NextFest and Seasonal Sales.
    *
    * @see https://api.glitch.fun/api/documentation#/ExternalGames/getReleaseStats
    *
    * @param params Filtering options:
    *   - precision: 'day' | 'month' | 'year' (Default: 'day'). Use 'month' for long-term planning.
    *   - start_date: 'YYYY-MM-DD'. The date to begin the analysis from.
    *
    * @returns AxiosPromise<Response<ReleaseStatsResponse>>
    *
    * @example
    * Games.getReleaseStats({ precision: 'day', start_date: '2025-06-01' })
    *   .then(res => console.log(res.data.data));
    */
    static getReleaseStats<T = ReleaseStatsResponse>(params?: {
        precision?: 'day' | 'month' | 'year';
        start_date?: string;
    }): AxiosPromise<Response<T>>;
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
    /** List the active ordered custom-question schema used by public registration. */
    static listRegistrationQuestions<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** List active, inactive, and archived custom questions for organizers. */
    static manageRegistrationQuestions<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Create one schema-driven custom developer-registration question. */
    static createRegistrationQuestion<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Update wording, validation, visibility, ordering, or stable choices. */
    static updateRegistrationQuestion<T>(show_id: string, question_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Archive a question while preserving historical answers and reporting. */
    static deleteRegistrationQuestion<T>(show_id: string, question_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Apply the organizer's exact ordered list of question UUIDs. */
    static reorderRegistrationQuestions<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Review custom answers grouped by submitted game. */
    static listRegistrationResponses<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Retrieve type-aware aggregate reports without exposing free-text values. */
    static registrationQuestionReports<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Add a title to a game show by admin.
     */
    static addTitle<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Preview CSV/TSV/TXT/ZIP registrations without writing showcase data. */
    static previewExternalTitles<T>(show_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Import valid external registrations after organizer preview. */
    static importExternalTitles<T>(show_id: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    /**
     * List public page-builder blocks for a game show.
     */
    static listBlocks<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a page-builder block for a game show. Requires organizer permissions.
     */
    static createBlock<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a page-builder block for a game show. Requires organizer permissions.
     */
    static updateBlock<T>(show_id: string, block_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a page-builder block from a game show. Requires organizer permissions.
     */
    static deleteBlock<T>(show_id: string, block_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Reorder page-builder blocks for a game show. Requires organizer permissions.
     */
    static reorderBlocks<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List livestream and programming schedule items for a game show.
     */
    static listSchedule<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a schedule item for a game show. Requires organizer permissions.
     */
    static createScheduleItem<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update a schedule item for a game show. Requires organizer permissions.
     */
    static updateScheduleItem<T>(show_id: string, schedule_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Delete a schedule item from a game show. Requires organizer permissions.
     */
    static deleteScheduleItem<T>(show_id: string, schedule_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the game show discovery queue.
     */
    static discoveryQueue<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Track public game show analytics events.
     */
    static trackAnalytics<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get organizer analytics for a game show.
     */
    static analyticsReport<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Join or update a public notification signup for a game show.
     */
    static joinWishlist<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List notification signups for a game show. Requires organizer permissions.
     */
    static listWishlist<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List public game shows that include a title. Useful for game-page festival banners.
     */
    static listForTitle<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** List organizer-visible developer claim and completion workflows. */
    static listTitleClaims<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Invite or remind a developer to claim and complete a festival game. */
    static inviteTitleClaim<T>(show_id: string, title_id: string, data: {
        email: string;
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Open a private festival game claim before authentication. */
    static viewTitleClaim<T>(show_id: string, token: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Bind the invited game to the current user and one administered business. */
    static claimTitle<T>(show_id: string, token: string, data: {
        community_id: string;
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Finish required game information and record the optional build choice. */
    static completeTitleClaim<T>(show_id: string, token: string, data: {
        build_choice: 'upload' | 'skip';
        build_completed?: boolean;
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** List private sponsor workflow, contact, billing, media, and placements. */
    static listSponsors<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Create a manual sponsor or send a self-service invitation. */
    static createSponsor<T>(show_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Retrieve one organizer-authorized festival sponsor. */
    static getSponsor<T>(show_id: string, sponsor_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Update sponsor workflow, creative metadata, schedule, or billing terms. */
    static updateSponsor<T>(show_id: string, sponsor_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Delete an unpaid sponsor and its placements. */
    static deleteSponsor<T>(show_id: string, sponsor_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Replace the private token and resend the sponsor invitation. */
    static resendSponsorInvitation<T>(show_id: string, sponsor_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Add another festival, game, session, or event placement. */
    static createSponsorPlacement<T>(show_id: string, sponsor_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Partially update an existing sponsor placement. */
    static updateSponsorPlacement<T>(show_id: string, sponsor_id: string, placement_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Delete one placement without deleting the sponsor creative. */
    static deleteSponsorPlacement<T>(show_id: string, sponsor_id: string, placement_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** List privacy-limited, publicly eligible creatives and placements. */
    static listPublicSponsors<T>(show_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Open a token-protected sponsor portal without a user session. */
    static sponsorInvitation<T>(token: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Upload sponsor image/video through the shared Media pipeline. */
    static uploadSponsorInvitationMedia<T>(token: string, file: File, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Submit sponsor identity, destination, and accessibility metadata. */
    static submitSponsorInvitation<T>(token: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Create/confirm a destination PaymentIntent from a PaymentMethod ID. */
    static paySponsorInvitation<T>(token: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Synchronize the same intent after Stripe.js completes required 3DS. */
    static confirmSponsorInvitationPayment<T>(token: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    /**
     * Join the marketing course waitlist.
     *
     * @param data { name, email, game, topics[] }
     * @returns Promise
     */
    static joinCourseWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
 * Join the raffle feature waitlist.
 *
 * @param data { name, email, game, prizes[], interest_in_playtesters, launch_timeline, target_wishlist_count }
 */
    static joinRaffleWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Join the Discord Marketplace waitlist.
     *
     * @param data { name, email, game, categories[] }
     */
    static joinDiscordMarketplaceWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Join the NSFW/Lewd game marketing waitlist.
     *
     * @param data { name, email, game }
     */
    static joinNsfwWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Apply for Codex credit support for a playable AI game.
     *
     * @param data { name, email, game, game_description, game_url }
     */
    static joinCodexCreditWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List all newsletter campaigns (Admin only).
     */
    static listCampaigns<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new newsletter campaign draft (Admin only).
     */
    static createCampaign<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Retrieve a specific newsletter campaign (Admin only).
     */
    static viewCampaign<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Update a newsletter campaign draft (Admin only).
     */
    static updateCampaign<T>(id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Delete a newsletter campaign (Admin only).
     */
    static deleteCampaign<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Get high-level analytics for a specific campaign (Admin only).
     */
    static getCampaignStats<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Get detailed delivery and open logs for a campaign (Admin only).
     */
    static getCampaignLogs<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Trigger the delivery of a newsletter campaign to all active subscribers (Admin only).
     */
    static sendCampaign<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Send a test email of a campaign to a specific address (Admin only).
     */
    static sendTestEmail<T>(id: string, email: string): AxiosPromise<Response<T>>;
    /**
     * List all newsletter subscribers (Admin only).
     */
    static listSubscribers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Manually create a new newsletter subscriber (Admin only).
     */
    static createSubscriber<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Retrieve a specific subscriber's details (Admin only).
     */
    static viewSubscriber<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Update a subscriber's information or status (Admin only).
     */
    static updateSubscriber<T>(id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Permanently delete a subscriber from the system (Admin only).
     */
    static deleteSubscriber<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Join the distribution platform waitlist for indie developers.
     *
     * @see https://api.glitch.fun/api/documentation#/Newsletters/joinDistributionWaitlist
     *
     * @param data { name: string, email: string, game: string, team_size: string, revenue_goal: string }
     * @returns Promise
     */
    static joinDistributionWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Register for Consumer Early Access to the streaming platform.
     *
     * @param data { name, email }
     */
    static joinConsumerWaitlist<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    /**
     * Get aggregated results for a play test (publisher view).
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @returns Promise
     */
    static getResults<T>(title_id: string, playtest_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Upload an audio/video answer file for a play test question. The file is
     * stored by the Glitch backend (authenticated with the session token) and a
     * media URL is returned that can then be passed to submitAnswers().
     *
     * @param title_id The ID of the title.
     * @param playtest_id The ID of the play test.
     * @param file The recorded audio/video file or blob.
     * @param data Additional fields (question_id, media_type, title, description).
     * @param params Optional query parameters.
     * @param onUploadProgress Optional progress callback.
     * @returns Promise
     */
    static uploadAnswer<T>(title_id: string, playtest_id: string, file: File | Blob, data?: Record<string, any>, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
}

interface SteamCapsuleCropRequest {
    media_id: string;
    capsule_type: 'header' | 'small' | 'main' | 'vertical' | 'library' | 'library_header' | 'library_hero' | 'page_background' | 'screenshot' | 'app_icon' | 'shortcut_icon';
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
interface RemoveBackgroundRequest {
    media_id: string;
    output_format?: 'png' | 'webp';
}
interface RemoveBackgroundAIRequest {
    media_id: string;
    use_ai_analysis?: boolean;
}
interface CreateLibraryLogoRequest {
    media_id: string;
    target_width?: number;
    target_height?: number;
}
interface ValidateScreenshotRequest {
    media_id: string;
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
interface RemoveBackgroundResponse {
    success: boolean;
    message: string;
    data: any;
}
interface RemoveBackgroundAIResponse {
    success: boolean;
    message: string;
    data: any;
    ai_used: boolean;
}
interface CreateLibraryLogoResponse {
    success: boolean;
    message: string;
    data: any;
}
interface ScreenshotValidationResponse {
    success: boolean;
    valid: boolean;
    dimensions: SteamCapsuleDimensions;
    aspect_ratio: number;
    issues: string[];
    recommendations: string[];
}
interface PresignedUrlResponse {
    upload_url: string;
    file_path: string;
}
interface S3ConfirmRequest {
    file_path: string;
    size: number;
    mime_type: string;
    title?: string;
    filename?: string;
}
/**
 * Interfaces for the Video Editor Manifest
 */
interface VideoEdit {
    type: 'trim' | 'crop' | 'text' | 'speed' | 'overlay' | 'thumbnail';
    params: TrimParams | CropParams | TextParams | SpeedParams | any;
}
interface TrimParams {
    start: number;
    duration: number;
}
interface CropParams {
    x: number;
    y: number;
    width: number;
    height: number;
}
interface TextParams {
    text: string;
    x: string | number;
    y: string | number;
    fontSize: number;
    fontColor: string;
}
interface SpeedParams {
    multiplier: number;
}
interface VideoProcessRequest {
    edits: VideoEdit[];
    output_format?: 'mp4' | 'webm';
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
     * Remove background from an image to create transparent PNG.
     *
     * @param request The background removal request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static removeBackground(request: RemoveBackgroundRequest, params?: Record<string, any>): AxiosPromise<Response<RemoveBackgroundResponse>>;
    /**
     * Remove background from an image using AI analysis for better results.
     *
     * @param request The AI-enhanced background removal request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static removeBackgroundAI(request: RemoveBackgroundAIRequest, params?: Record<string, any>): AxiosPromise<Response<RemoveBackgroundAIResponse>>;
    /**
     * Create a Steam Library Logo meeting Steam's requirements.
     *
     * @param request The library logo creation request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static createLibraryLogo(request: CreateLibraryLogoRequest, params?: Record<string, any>): AxiosPromise<Response<CreateLibraryLogoResponse>>;
    /**
     * Validate a screenshot against Steam's requirements.
     *
     * @param request The screenshot validation request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static validateScreenshot(request: ValidateScreenshotRequest, params?: Record<string, any>): AxiosPromise<Response<ScreenshotValidationResponse>>;
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
    /**
     * Get Steam screenshot requirements.
     *
     * @returns Screenshot requirements object.
     */
    static getSteamScreenshotRequirements(): {
        minWidth: number;
        minHeight: number;
        aspectRatio: number;
        minCount: number;
        format: string;
        content: string;
    };
    /**
     * Get Steam library logo requirements.
     *
     * @returns Library logo requirements object.
     */
    static getSteamLibraryLogoRequirements(): {
        maxWidth: number;
        maxHeight: number;
        format: string;
        requirement: string;
        content: string;
    };
    /**
     * Upload an audio file to TikTok's asset library via our Media controller.
     *
     * @param file The audio file (mp3).
     * @param scheduler_id The ID of the scheduler to provide OAuth context.
     */
    static uploadTikTokMusic<T>(file: File, scheduler_id: string): AxiosPromise<Response<T>>;
    /**
     * Generate an S3 Presigned URL for direct upload.
     *
     * @param filename The original name of the file.
     * @param extension The file extension (e.g., 'mp4').
     * @param is_public Set to true if the file should be publicly accessible via URL.
     */
    static getPresignedUrl<T = PresignedUrlResponse>(filename: string, extension: string, is_public?: boolean): AxiosPromise<Response<T>>;
    /**
     * Confirm a successful S3 upload and create the database record.
     * Call this after the direct S3 upload is complete.
     *
     * @param data The file metadata (path, size, mime_type).
     * @returns AxiosPromise containing the created Media resource.
     */
    static confirmS3Upload<T>(data: S3ConfirmRequest): AxiosPromise<Response<T>>;
    /**
    * Submit a video for processing (Trim, Crop, Text, etc.)
    * This triggers a background job on the server.
    *
    * @param media_id The UUID of the source video.
    * @param data The edit manifest containing the array of transformations.
    * @returns Promise with the pending_media_id.
    */
    static process<T>(media_id: string, data: VideoProcessRequest): AxiosPromise<Response<T>>;
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
     * Get posting rules for a specific Reddit subreddit.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param subreddit The name of the subreddit.
     * @returns promise
     */
    static getRedditSubredditRules<T>(scheduler_id: string, subreddit: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
     * Search cross-promote opportunities using the normalized route family.
     * GET /schedulers/cross-promote/search
     */
    static crossPromoteSearch<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send a normalized cross-promote invitation.
     * POST /schedulers/cross-promote/invitations
     */
    static crossPromoteInvitationSend<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Respond to a normalized cross-promote invitation.
     * POST /schedulers/cross-promote/invitations/{invitation_id}/respond
     */
    static crossPromoteInvitationRespond<T>(invitation_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List normalized cross-promote relationships.
     * GET /schedulers/cross-promote/relationships
     */
    static crossPromoteRelationshipsList<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * End a normalized cross-promote relationship.
     * POST /schedulers/cross-promote/relationships/{relationship_id}/end
     */
    static crossPromoteRelationshipEnd<T>(relationship_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List normalized cross-promote relationship logs.
     * GET /schedulers/cross-promote/relationships/{relationship_id}/logs
     */
    static crossPromoteRelationshipLogs<T>(relationship_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
     * List Google Ads conversion actions available to a scheduler account.
     * GET /schedulers/{scheduler_id}/conversion-actions
     */
    static listConversionActions<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
     * Get subreddit recommendations for a scheduler.
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
     * Match the scheduler title to indexed Reddit communities.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data Optional post context and filters.
     * @returns promise
     */
    static getRedditSubredditMatches<T>(scheduler_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Position a registered game for a subreddit and optionally prepare Reddit draft content.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data The target subreddit and optional post context.
     * @returns promise
     */
    static getRedditSubredditPositioning<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    /**
    * Get ad conversion actions for a specific platform linked to the scheduler.
    *
    * @see https://api.glitch.fun/api/documentation#/Scheduler/getSchedulerConversionActions
    *
    * @param scheduler_id The ID of the promotion schedule.
    * @param params Query parameters, including 'platform' (required) and 'account_id' (optional).
    *
    * @returns promise
    */
    static getConversionActions<T>(scheduler_id: string, params: {
        platform: string;
        account_id?: string;
    }): AxiosPromise<Response<T>>;
    /**
    * Send a platform test conversion event through the backend scheduler route.
    *
    * @param scheduler_id The ID of the promotion schedule.
    * @param platform Platform key, e.g. reddit, tiktok, facebook, google.
    * @param params Query parameters such as Reddit test_id or Meta test_event_code.
    */
    static sendTestConversionEvent<T>(scheduler_id: string, platform: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Trigger a historical sync for a specific platform on a scheduler.
     *
     * @see https://api.glitch.fun/api/documentation#/Scheduler/syncHistory
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param platform The platform to sync (e.g., 'twitter', 'youtube', 'bluesky').
     *
     * @returns promise
     */
    static syncHistory<T>(scheduler_id: string, platform: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Generate hashtags for content based on scheduler settings.
     *
     * @param scheduler_id The ID of the promotion schedule.
     * @param data { content: string, platform?: string }
     *
     * @returns promise
     */
    static generateHashtags<T>(scheduler_id: string, data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
 * Get TikTok hashtag suggestions based on a keyword.
 *
 * @param scheduler_id The ID of the promotion schedule.
 * @param params { keyword: string }
 */
    static getTikTokHashtags<T>(scheduler_id: string, params: {
        keyword: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Get trending commercial music from TikTok's library.
     *
     * @param scheduler_id The ID of the promotion schedule.
     */
    static getTikTokMusic<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
 * Get TikTok Music List with advanced filtering (Keyword, Recommendations, Liked).
 * @param params { music_scene: 'CREATIVE_ASSET'|'CAROUSEL_ADS', search_type: string, filtering: object }
 */
    static getTikTokMusicList<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the top 200 trending hashtags on TikTok.
     * @param params { country_code: string, category_name: string, date_range: string }
     */
    static getTikTokTrendingHashtags<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get trending search keywords on TikTok.
     * @param params { is_personalized: boolean }
     */
    static getTikTokTrendingKeywords<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get recommended search keywords on TikTok.
     * @param params { is_personalized: boolean }
     */
    static getTikTokRecommendedKeywords<T>(scheduler_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class RedditSubreddits {
    /**
     * Search indexed Reddit communities for game marketing research.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/indexRedditSubreddits
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get an analyzed subreddit record by display name.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/showRedditSubreddit
     */
    static show<T>(subreddit: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Match a game concept to relevant Reddit communities.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/matchRedditSubreddits
     */
    static match<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Match one of the authenticated user's administered titles to Reddit communities.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/titleRedditSubredditMatches
     */
    static matchTitle<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Admin-only ingestion of subreddit metadata and rules.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/ingestRedditSubreddits
     */
    static ingest<T>(data: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Admin-only refresh for one subreddit.
     *
     * @see https://api.glitch.fun/api/documentation#/Reddit%20Subreddit%20Intelligence/refreshRedditSubreddit
     */
    static refresh<T>(subreddit: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
    /**
    * Get comprehensive funnel diagnostic report.
    *
    * @see https://api.glitch.fun/api/documentation#/Funnel%20Metrics/get_funnels_diagnostic
    *
    * @param params Query parameters:
    *  - title_id (string): Required
    *  - start_date (string): Required (YYYY-MM-DD)
    *  - end_date (string): Required (YYYY-MM-DD)
    *  - group_by (string): Optional ('none', 'platform', 'utm_source')
    *
    * @returns Promise with diagnostic data including conversion rates, costs, and health indicators
    */
    static diagnostic<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
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
    /**
   * Get a detailed marketing report for the game's landing page.
   * Includes scroll depth, video watch time distribution, and CTA performance.
   *
   * @param params
   *   - title_id: string (Required)
   *   - start_date?: string (YYYY-MM-DD)
   *   - end_date?: string (YYYY-MM-DD)
   *   - group_by?: 'country' | 'device'
   */
    static landingPageReport<T>(params: Record<string, any>): AxiosPromise<Response<T>>;
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
    static campaignPerformance<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static influencerPerformance<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static socialPostPerformance<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static conversionFunnel<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static clickHeatmap<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static botAnalysis<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static attributionReport<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static socialPostDeepDive<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static socialPostContentAnalysis<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static socialPostEngagementBreakdown<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static socialPostTrackingEffectiveness<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
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

declare class TwitchReporting {
    /**
     * Get a streamer's Concurrent Viewership (CCV) history.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getCreatorCcvHistory
     *
     * @param twitch_streamer_id The ID of the Twitch streamer.
     * @param params Optional query parameters for filtering (e.g., start_date, end_date, per_page).
     *
     * @returns promise
     */
    static getCreatorCcvHistory<T>(twitch_streamer_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a summary of game performance metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getGamesSummary
     *
     * @param params Optional query parameters for filtering and sorting (e.g., start_date, end_date, sort_by, limit).
     *
     * @returns promise
     */
    static getGamesSummary<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get most recently active streamers.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getMostActiveStreamers
     *
     * @param params Optional query parameters (e.g., limit).
     *
     * @returns promise
     */
    static getMostActiveStreamers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get most recently streamed games.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getMostActiveGames
     *
     * @param params Optional query parameters (e.g., limit).
     *
     * @returns promise
     */
    static getMostActiveGames<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Discover the most active Twitch games with Steam/IGDB genre, category,
     * theme, live snapshot, and trend metrics.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/discoverActiveTwitchGames
     *
     * @param params Optional query parameters (e.g., genres, categories, match_mode, trend_days, sort_by, limit).
     *
     * @returns promise
     */
    static discoverActiveGames<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get top streamers by performance (average or peak CCV).
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getTopStreamers
     *
     * @param params Optional query parameters for filtering and sorting (e.g., sort_by, start_date, limit).
     *
     * @returns promise
     */
    static getTopStreamers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a streamer's typical streaming schedule as a heatmap.
     *
     * @see https://api.glitch.fun/api/documentation#/Twitch%20Reporting/getCreatorStreamingSchedule
     *
     * @param twitch_streamer_id The ID of the Twitch streamer.
     *
     * @returns promise
     */
    static getCreatorStreamingSchedule<T>(twitch_streamer_id: string): AxiosPromise<Response<T>>;
    /**
    * Get a list of games played by a specific streamer.
    *
    * @param twitch_streamer_id The ID of the Twitch streamer.
    * @returns promise
    */
    static getStreamerGameHistory<T>(twitch_streamer_id: string): AxiosPromise<Response<T>>;
    /**
     * Get a paginated list of streamers who played a specific game.
     *
     * @param game_name The URL-encoded name of the game.
     * @param params Optional query parameters for pagination (e.g., page, per_page).
     * @returns promise
     */
    static getStreamersForGame<T>(game_name: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class Raffles {
    /**
     * List all raffles with optional filters.
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a new raffle (Game Owner).
     */
    static create<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Retrieve details for a specific raffle.
     */
    static view<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Enter a raffle (User/Player). Requires Steam ID.
     */
    static enter<T>(id: string, data: {
        referral_code?: string;
        device_fingerprint?: string;
        opt_in_playtesting?: boolean;
    }): AxiosPromise<Response<T>>;
    /**
     * Get the authenticated user's entry status for a specific raffle.
     */
    static me<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Record a viral action (e.g., Steam Wishlist, Social Share).
     */
    static performAction<T>(id: string, data: {
        action_type: string;
        platform?: string;
        reference_id?: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Post raffle content to social media via Glitch API.
     */
    static shareSocially<T>(id: string, data: {
        platform: string;
        content: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Send an invitation email to a friend.
     */
    static inviteFriend<T>(id: string, data: {
        email: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Add a prize tier to a raffle (Game Owner).
     */
    static addPrize<T>(id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Trigger the automated drawing process (Game Owner).
     */
    static drawWinners<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Manually select a winner for a specific prize (Live Event Mode).
     */
    static pickWinner<T>(id: string, data: {
        entry_id: string;
        prize_id: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Get the public list of winners for a completed raffle.
     */
    static winners<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * List all participants/entries for a raffle (Game Owner).
     */
    static participants<T>(id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update shipping/tracking info for a prize (Game Owner).
     */
    static fulfillPrize<T>(entry_id: string, data: {
        tracking_number: string;
        shipping_carrier: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Submit shipping address for a won prize (User/Winner).
     */
    static updateAddress<T>(entry_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Disqualify a specific entry (Game Owner).
     */
    static disqualify<T>(id: string, entry_id: string, data: {
        reason: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Check if the raffle is fully funded in the community ledger.
     */
    static escrowStatus<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Get viral loop analytics (K-Factor, Cost Per Entry).
     */
    static analytics<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Update a raffle (Game Owner).
     * Handles status transitions (e.g., moving from draft to active).
     */
    static update<T>(id: string, data: object): AxiosPromise<Response<T>>;
}

declare class DiscordMarketplace {
    /**
     * Search for Discord servers available for sponsorship.
     */
    static listListings<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List a Discord server in the marketplace (Owner).
     */
    static createListing<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Get details for a specific server listing.
     */
    static viewListing<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Update listing settings like price or auto-approve (Owner).
     */
    static updateListing<T>(id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Remove a server from the marketplace (Owner).
     */
    static deleteListing<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * List sponsored post orders. Use params { mode: 'buyer' | 'seller' }.
     */
    static listOrders<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Submit a post to a Discord server for sponsorship (Game Developer).
     */
    static createOrder<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Get details for a specific order.
     */
    static viewOrder<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Approve and publish a sponsored post (Owner).
     */
    static approveOrder<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Reject a sponsored post (Owner).
     */
    static rejectOrder<T>(id: string, data: {
        reason: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Request changes to the post content (Owner).
     */
    static requestChanges<T>(id: string, data: {
        reason: string;
    }): AxiosPromise<Response<T>>;
    /**
     * Resubmit a post after making requested changes (Game Developer).
     */
    static resubmitOrder<T>(id: string): AxiosPromise<Response<T>>;
    /**
     * Get available text channels for a specific Discord listing.
     */
    static getChannels<T>(id: string): AxiosPromise<Response<T>>;
}

declare class Education {
    static listCategories<T>(params?: object): AxiosPromise<Response<T>>;
    static viewCategory<T>(uuid: string, params?: object): AxiosPromise<Response<T>>;
    static createCategory<T>(data: object): AxiosPromise<Response<T>>;
    static updateCategory<T>(uuid: string, data: object): AxiosPromise<Response<T>>;
    static deleteCategory<T>(uuid: string): AxiosPromise<Response<T>>;
    static listTracks<T>(params?: object): AxiosPromise<Response<T>>;
    static viewTrack<T>(uuid: string): AxiosPromise<Response<T>>;
    static createTrack<T>(data: object): AxiosPromise<Response<T>>;
    static updateTrack<T>(uuid: string, data: object): AxiosPromise<Response<T>>;
    static deleteTrack<T>(uuid: string): AxiosPromise<Response<T>>;
    static registerForTrack<T>(uuid: string): AxiosPromise<Response<T>>;
    static myTracks<T>(): AxiosPromise<Response<T>>;
    static getTrackAnalytics<T>(uuid: string): AxiosPromise<Response<T>>;
    static listContent<T>(params?: object): AxiosPromise<Response<T>>;
    static viewContent<T>(uuid: string, params?: object): AxiosPromise<Response<T>>;
    static createContent<T>(data: object): AxiosPromise<Response<T>>;
    static updateContent<T>(uuid: string, data: object): AxiosPromise<Response<T>>;
    static deleteContent<T>(uuid: string): AxiosPromise<Response<T>>;
    static heartbeat<T>(uuid: string, data: object): AxiosPromise<Response<T>>;
    static getSecureVideo<T>(uuid: string): AxiosPromise<Response<T>>;
    static getPreviewSecureVideo<T>(uuid: string): AxiosPromise<Response<T>>;
    static listAllProgress<T>(params?: object): AxiosPromise<Response<T>>;
    static listTrackContent<T>(track_id: string): AxiosPromise<Response<T>>;
    static addContentToTrack<T>(track_id: string, data: object): AxiosPromise<Response<T>>;
    static removeContentFromTrack<T>(track_id: string, content_id: string): AxiosPromise<Response<T>>;
    static reorderTrackContent<T>(track_id: string, content_ids: string[]): AxiosPromise<Response<T>>;
    static listQuizzes<T>(params?: object): AxiosPromise<Response<T>>;
    static viewQuiz<T>(uuid: string): AxiosPromise<Response<T>>;
    static submitQuiz<T>(uuid: string, answers: object): AxiosPromise<Response<T>>;
    static myQuizAttempts<T>(uuid: string): AxiosPromise<Response<T>>;
    static viewQuizAttempt<T>(uuid: string): AxiosPromise<Response<T>>;
    static createQuiz<T>(data: object): AxiosPromise<Response<T>>;
    static updateQuiz<T>(uuid: string, data: object): AxiosPromise<Response<T>>;
    static deleteQuiz<T>(uuid: string): AxiosPromise<Response<T>>;
    static listQuizQuestions<T>(quiz_id: string): AxiosPromise<Response<T>>;
    static createQuizQuestion<T>(quiz_id: string, data: object): AxiosPromise<Response<T>>;
    static reorderQuizQuestions<T>(quiz_id: string, question_ids: string[]): AxiosPromise<Response<T>>;
    static listQuizOptions<T>(question_id: string): AxiosPromise<Response<T>>;
    static createQuizOption<T>(question_id: string, data: object): AxiosPromise<Response<T>>;
    static viewQuizQuestion<T>(uuid: string): AxiosPromise<Response<T>>;
    static updateQuizQuestion<T>(uuid: string, data: object): AxiosPromise<Response<T>>;
    static deleteQuizQuestion<T>(uuid: string): AxiosPromise<Response<T>>;
    static viewQuizOption<T>(uuid: string): AxiosPromise<Response<T>>;
    static updateQuizOption<T>(uuid: string, data: object): AxiosPromise<Response<T>>;
    static deleteQuizOption<T>(uuid: string): AxiosPromise<Response<T>>;
    static syncProgress<T>(data: object): AxiosPromise<Response<T>>;
    static getMyProgressByContent<T>(content_id: string): AxiosPromise<Response<T>>;
    static listRegistrations<T>(params?: object): AxiosPromise<Response<T>>;
    static refreshUserTrack<T>(uuid: string): AxiosPromise<Response<T>>;
    static logView<T>(data: object): AxiosPromise<Response<T>>;
    static saveModuleData<T>(data: object): AxiosPromise<Response<T>>;
    static getModuleData<T>(uuid: string): AxiosPromise<Response<T>>;
    static getConversionReport<T>(): AxiosPromise<Response<T>>;
    static getAdoptionReport<T>(): AxiosPromise<Response<T>>;
    static getQuestionPerformanceReport<T>(params?: object): AxiosPromise<Response<T>>;
    static getRetentionReport<T>(): AxiosPromise<Response<T>>;
    /**
     * List raw engagement logs.
     * @param params Filter by user_id, content_id, or is_paid
     */
    static listViews<T>(params?: object): AxiosPromise<Response<T>>;
    static myBadges<T>(): AxiosPromise<Response<T>>;
    static awardBadge<T>(data: object): AxiosPromise<Response<T>>;
    static myCertificates<T>(): AxiosPromise<Response<T>>;
    static downloadCertificate<T>(uuid: string): AxiosPromise<Response<T>>;
    static listTemplates<T>(): AxiosPromise<Response<T>>;
    static uploadTemplateSignature<T>(uuid: string, file: File): AxiosPromise<Response<T>>;
    static uploadTemplateBackground<T>(uuid: string, file: File): AxiosPromise<Response<T>>;
}

declare class Crm {
    /**
     * List and search CRM leads.
     */
    static listLeads<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Manually create a new lead.
     */
    static createLead<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * View a single lead with contacts and activity timeline.
     */
    static viewLead<T>(lead_id: string): AxiosPromise<Response<T>>;
    /**
     * Update lead information.
     */
    static updateLead<T>(lead_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Delete a lead (Soft Delete).
     */
    static deleteLead<T>(lead_id: string): AxiosPromise<Response<T>>;
    /**
     * Assign a Super Admin as the owner of a lead.
     */
    static assignOwner<T>(lead_id: string, user_id: string): AxiosPromise<Response<T>>;
    /**
     * Manually trigger Apollo enrichment and website scraping for a lead.
     */
    static enrichLead<T>(lead_id: string): AxiosPromise<Response<T>>;
    /**
     * Approve a specific contact to start the Apollo email sequence.
     */
    static approveContact<T>(contact_id: string): AxiosPromise<Response<T>>;
    /**
     * Manually update the pipeline status of a lead.
     */
    static updateStatus<T>(lead_id: string, status: string, note?: string): AxiosPromise<Response<T>>;
    /**
     * Add a manual note to the lead's activity timeline.
     */
    static addNote<T>(lead_id: string, content: string): AxiosPromise<Response<T>>;
    /**
     * Manually add a contact person to a lead.
     */
    static addContact<T>(lead_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Mark a lead as lost and record the reason.
     */
    static markAsLost<T>(lead_id: string, reason: string): AxiosPromise<Response<T>>;
    /**
     * Record that a staff member has manually replied to a prospect.
     */
    static recordStaffReply<T>(lead_id: string): AxiosPromise<Response<T>>;
    /**
     * Approve a batch of contacts for outreach.
     */
    static bulkApprove<T>(contact_ids: string[]): AxiosPromise<Response<T>>;
    /**
     * Manually trigger the bi-weekly sourcing automation.
     */
    static triggerSourcing<T>(): AxiosPromise<Response<T>>;
    /**
     * Manually trigger the Apollo status and conversion sync.
     */
    static triggerSync<T>(): AxiosPromise<Response<T>>;
    /**
     * Get funnel conversion percentages.
     */
    static getFunnelStats<T>(): AxiosPromise<Response<T>>;
    /**
     * Get win rates and response time analytics.
     */
    static getPerformanceStats<T>(): AxiosPromise<Response<T>>;
    /**
     * Get the analytics on what users indcated they were interested in.
     */
    static getInterestStats<T>(): AxiosPromise<Response<T>>;
    /**
    * Update an existing contact's information.
    */
    static updateContact<T>(contact_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Remove a contact from a lead.
     */
    static deleteContact<T>(contact_id: string): AxiosPromise<Response<T>>;
    /**
     * List CRM newsletter and mass-email campaigns.
     */
    static listCampaigns<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a CRM campaign draft with filters, exclusions, and optional variants.
     */
    static createCampaign<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * View a CRM campaign. Pass include_recipients in params for a small recipient sample.
     */
    static viewCampaign<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an editable CRM campaign draft or paused campaign.
     */
    static updateCampaign<T>(campaign_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Delete an unsent CRM campaign draft.
     */
    static deleteCampaign<T>(campaign_id: string): AxiosPromise<Response<T>>;
    /**
     * Preview campaign audience filters and exclusions without creating recipients.
     */
    static previewCampaignAudience<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * List human-readable filter options for the CRM campaign composer.
     */
    static getCampaignFilterOptions<T>(): AxiosPromise<Response<T>>;
    /**
     * List the backend-supported CRM campaign merge fields for the composer.
     */
    static getCampaignMergeFields<T>(): AxiosPromise<Response<T>>;
    /**
     * Render CRM campaign content with the same merge-field engine used at send time.
     */
    static renderCampaignTemplatePreview<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Send a non-tracked CRM campaign test email with rendered merge fields.
     */
    static sendCampaignTestEmail<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Read CRM campaign queue depth and Azure/system email rate-limit windows.
     */
    static getCampaignDeliveryStatus<T>(): AxiosPromise<Response<T>>;
    /**
     * Materialize and queue a CRM campaign, optionally with a limit or dispatch=false.
     */
    static sendCampaign<T>(campaign_id: string, data?: object): AxiosPromise<Response<T>>;
    /**
     * Refresh and read CRM campaign engagement, reply, and conversion stats.
     */
    static getCampaignStats<T>(campaign_id: string): AxiosPromise<Response<T>>;
    /**
     * List campaign recipient audit rows with optional status or variant filters.
     */
    static listCampaignRecipients<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Validate external prospect rows and preview field mapping/dedupe outcomes.
     */
    static previewCampaignProspectImport<T>(prospects: object[], options?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Import external prospects into CRM leads and contacts for future campaigns.
     */
    static importCampaignProspects<T>(prospects: object[], options?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Preview uploaded festival submission sheets without writing External Game or CRM records.
     */
    static previewFestivalSubmissionImport<T>(files: Array<File | Blob>, options?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    /**
     * Import uploaded festival submission sheets into External Games and CRM leads/contacts.
     */
    static importFestivalSubmissions<T>(files: Array<File | Blob>, options?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    /**
     * List saved recurring Google Sheet sources for festival submission imports.
     */
    static listFestivalSubmissionSources<T>(): AxiosPromise<Response<T>>;
    /**
     * Save a recurring Google Sheet source for festival submission imports.
     */
    static createFestivalSubmissionSource<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Update a recurring Google Sheet source for festival submission imports.
     */
    static updateFestivalSubmissionSource<T>(source_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Delete a recurring Google Sheet source for festival submission imports.
     */
    static deleteFestivalSubmissionSource<T>(source_id: string): AxiosPromise<Response<T>>;
    /**
     * List provider-managed sender and reply-to addresses for CRM campaigns.
     */
    static listEmailProviderAddresses<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List sender/reply-to dropdown options and defaults for the campaign composer.
     */
    static getEmailProviderAddressOptions<T>(): AxiosPromise<Response<T>>;
    /**
     * Add a provider-managed sender or reply-to address.
     */
    static createEmailProviderAddress<T>(data: object): AxiosPromise<Response<T>>;
    /**
     * Update provider verification, sendability, capabilities, defaults, or notes.
     */
    static updateEmailProviderAddress<T>(address_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Deactivate a provider address while keeping the audit record.
     */
    static deactivateEmailProviderAddress<T>(address_id: string): AxiosPromise<Response<T>>;
    private static festivalSubmissionFormData;
}

type MultiplayerLobbyType = 'public' | 'invisible' | 'friends_only' | 'private';
type MultiplayerLobbyState = 'waiting' | 'ready' | 'in_game' | 'closed';
type MultiplayerLobbyMemberStatus = 'joined' | 'left' | 'disconnected' | 'kicked' | 'banned';
type MultiplayerLobbyMessageType = 'chat' | 'binary' | 'system' | 'ready' | 'invite' | 'kick' | 'voice';
type MultiplayerServerType = 'dedicated' | 'listen' | 'relay';
type MultiplayerServerStatus = 'active' | 'available' | 'draining' | 'offline';
type MultiplayerTransport = 'udp' | 'tcp' | 'webrtc' | 'relay';
type MultiplayerSessionState = 'reserved' | 'active' | 'released' | 'expired';
type MultiplayerAuthTicketStatus = 'active' | 'consumed' | 'revoked' | 'expired';
type MultiplayerFavoriteKind = 'favorite' | 'history';
type MultiplayerVoiceProvider = 'glitch_relay' | 'external';
type MultiplayerVoiceTopology = 'lobby' | 'server' | 'party' | 'proximity';
type MultiplayerVoiceState = 'active' | 'closed';
type MultiplayerVoiceCodec = 'opus' | 'pcm16' | 'aac';
type MultiplayerVoiceParticipantStatus = 'joined' | 'left' | 'muted' | 'kicked';
type MultiplayerVoicePacketType = 'audio' | 'speaking' | 'mute_state' | 'offer' | 'answer' | 'ice' | 'control';
type MultiplayerMetadata = Record<string, any>;
interface MultiplayerLobbyMember {
    id: string;
    lobby_id: string;
    player_id: string;
    user_id?: string | null;
    display_name?: string | null;
    status: MultiplayerLobbyMemberStatus;
    ready: boolean;
    member_data: MultiplayerMetadata;
    joined_at?: string | null;
    last_seen_at?: string | null;
    left_at?: string | null;
}
interface MultiplayerServer {
    id: string;
    title_id: string;
    name: string;
    server_type: MultiplayerServerType;
    status: MultiplayerServerStatus;
    region?: string | null;
    build_version?: string | null;
    host?: string | null;
    game_port?: number | null;
    query_port?: number | null;
    transport: MultiplayerTransport;
    connection_uri?: string | null;
    max_players: number;
    current_players: number;
    bot_players: number;
    secure: boolean;
    password_protected: boolean;
    private: boolean;
    tags: string[];
    rules: MultiplayerMetadata;
    metadata: MultiplayerMetadata;
    last_heartbeat_at?: string | null;
    expires_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
}
interface MultiplayerLobby {
    id: string;
    title_id: string;
    server_id?: string | null;
    owner_player_id: string;
    owner_user_id?: string | null;
    lobby_type: MultiplayerLobbyType;
    state: MultiplayerLobbyState;
    joinable: boolean;
    max_members: number;
    member_count: number;
    region?: string | null;
    game_mode?: string | null;
    map_name?: string | null;
    skill_band?: number | null;
    metadata: MultiplayerMetadata;
    last_activity_at?: string | null;
    expires_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    members?: MultiplayerLobbyMember[];
    server?: MultiplayerServer | null;
}
interface MultiplayerLobbyMessage {
    id: string;
    lobby_id: string;
    player_id: string;
    user_id?: string | null;
    message_type: MultiplayerLobbyMessageType;
    payload: MultiplayerMetadata;
    sequence: number;
    created_at?: string | null;
    updated_at?: string | null;
}
interface MultiplayerSession {
    id: string;
    title_id: string;
    server_id?: string | null;
    lobby_id?: string | null;
    player_id: string;
    user_id?: string | null;
    state: MultiplayerSessionState;
    connection_payload: MultiplayerMetadata;
    last_heartbeat_at?: string | null;
    expires_at?: string | null;
    started_at?: string | null;
    ended_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
}
interface MultiplayerAuthTicket {
    id: string;
    title_id: string;
    player_id: string;
    user_id?: string | null;
    remote_identity?: string | null;
    status: MultiplayerAuthTicketStatus;
    issued_at?: string | null;
    expires_at?: string | null;
    consumed_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
}
interface MultiplayerServerFavorite {
    id: string;
    title_id: string;
    server_id?: string | null;
    user_id?: string | null;
    player_id: string;
    kind: MultiplayerFavoriteKind;
    name?: string | null;
    host?: string | null;
    game_port?: number | null;
    query_port?: number | null;
    metadata: MultiplayerMetadata;
    last_played_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
}
interface MultiplayerVoiceParticipant {
    id: string;
    voice_room_id: string;
    player_id: string;
    user_id?: string | null;
    display_name?: string | null;
    status: MultiplayerVoiceParticipantStatus;
    muted: boolean;
    deafened: boolean;
    speaking: boolean;
    last_sequence: number;
    metadata: MultiplayerMetadata;
    joined_at?: string | null;
    last_heartbeat_at?: string | null;
    left_at?: string | null;
    expires_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
}
interface MultiplayerVoiceRoom {
    id: string;
    title_id: string;
    lobby_id?: string | null;
    server_id?: string | null;
    owner_player_id: string;
    owner_user_id?: string | null;
    provider: MultiplayerVoiceProvider;
    topology: MultiplayerVoiceTopology;
    state: MultiplayerVoiceState;
    region?: string | null;
    codec: MultiplayerVoiceCodec;
    sample_rate: number;
    bitrate: number;
    frame_duration_ms: 10 | 20 | 40 | 60;
    channels: 1 | 2;
    max_participants: number;
    participant_count: number;
    recording_allowed: boolean;
    moderation_enabled: boolean;
    connection_config: MultiplayerMetadata;
    metadata: MultiplayerMetadata;
    last_activity_at?: string | null;
    expires_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    participants?: MultiplayerVoiceParticipant[];
}
interface MultiplayerVoicePacket {
    id: string;
    voice_room_id: string;
    participant_id?: string | null;
    player_id: string;
    packet_type: MultiplayerVoicePacketType;
    payload: string;
    sequence: number;
    duration_ms?: number | null;
    sent_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
}
interface MultiplayerLobbySearchParams {
    region?: string;
    game_mode?: string;
    map_name?: string;
    lobby_type?: MultiplayerLobbyType;
    skill_band?: number;
    limit?: number;
}
interface MultiplayerCreateLobbyRequest {
    player_id?: string;
    display_name?: string;
    member_data?: MultiplayerMetadata;
    lobby_type?: MultiplayerLobbyType;
    state?: MultiplayerLobbyState;
    joinable?: boolean;
    max_members?: number;
    region?: string;
    game_mode?: string;
    map_name?: string;
    skill_band?: number;
    metadata?: MultiplayerMetadata;
    expires_at?: string;
}
interface MultiplayerJoinLobbyRequest {
    player_id?: string;
    display_name?: string;
    ready?: boolean;
    member_data?: MultiplayerMetadata;
}
interface MultiplayerLeaveLobbyRequest {
    player_id?: string;
}
interface MultiplayerUpdateLobbyRequest {
    player_id?: string;
    lobby_type?: MultiplayerLobbyType;
    state?: MultiplayerLobbyState;
    joinable?: boolean;
    max_members?: number;
    region?: string;
    game_mode?: string;
    map_name?: string;
    skill_band?: number;
    metadata?: MultiplayerMetadata;
    expires_at?: string;
}
interface MultiplayerSetLobbyServerRequest {
    player_id?: string;
    server_id: string;
    state?: MultiplayerLobbyState;
    joinable?: boolean;
}
interface MultiplayerLobbyMessagesParams {
    after_sequence?: number;
    limit?: number;
}
interface MultiplayerSendLobbyMessageRequest {
    player_id?: string;
    message_type?: MultiplayerLobbyMessageType;
    payload: MultiplayerMetadata;
}
interface MultiplayerServerBrowserParams {
    region?: string;
    build_version?: string;
    transport?: MultiplayerTransport;
    status?: MultiplayerServerStatus;
    secure?: boolean;
    include_private?: boolean;
    limit?: number;
}
interface MultiplayerRegisterServerRequest {
    name: string;
    server_type?: MultiplayerServerType;
    status?: MultiplayerServerStatus;
    region?: string;
    build_version?: string;
    host?: string;
    game_port?: number;
    query_port?: number;
    transport?: MultiplayerTransport;
    connection_uri?: string;
    max_players?: number;
    current_players?: number;
    bot_players?: number;
    secure?: boolean;
    password_protected?: boolean;
    private?: boolean;
    tags?: string[];
    rules?: MultiplayerMetadata;
    metadata?: MultiplayerMetadata;
    expires_at?: string;
}
interface MultiplayerRegisterServerResponse {
    server: MultiplayerServer;
    server_token: string;
}
interface MultiplayerServerHeartbeatRequest {
    server_token: string;
    status?: MultiplayerServerStatus;
    current_players?: number;
    bot_players?: number;
    rules?: MultiplayerMetadata;
    metadata?: MultiplayerMetadata;
}
interface MultiplayerReserveServerRequest {
    player_id?: string;
    lobby_id?: string;
    ttl_minutes?: number;
}
interface MultiplayerReserveServerResponse {
    session: MultiplayerSession;
    reservation_token: string;
}
interface MultiplayerSessionHeartbeatRequest {
    reservation_token: string;
    state?: Extract<MultiplayerSessionState, 'reserved' | 'active'>;
    ttl_minutes?: number;
}
interface MultiplayerSessionReleaseRequest {
    reservation_token: string;
}
interface MultiplayerIssueAuthTicketRequest {
    player_id?: string;
    remote_identity?: string;
    ttl_minutes?: number;
}
interface MultiplayerIssueAuthTicketResponse {
    ticket: MultiplayerAuthTicket;
    auth_ticket: string;
}
interface MultiplayerValidateAuthTicketRequest {
    auth_ticket: string;
    remote_identity?: string;
    consume?: boolean;
}
interface MultiplayerValidateAuthTicketForServerRequest extends MultiplayerValidateAuthTicketRequest {
    server_token: string;
}
interface MultiplayerValidateAuthTicketResponse {
    valid: boolean;
    ticket: MultiplayerAuthTicket;
}
interface MultiplayerFavoritesParams {
    player_id?: string;
    kind?: MultiplayerFavoriteKind;
}
interface MultiplayerFavoriteRequest {
    player_id?: string;
    server_id?: string;
    kind?: MultiplayerFavoriteKind;
    name?: string;
    host?: string;
    game_port?: number;
    query_port?: number;
    metadata?: MultiplayerMetadata;
    last_played_at?: string;
}
interface MultiplayerDeleteFavoriteParams {
    player_id?: string;
}
interface MultiplayerDeleteFavoriteResponse {
    deleted: boolean;
}
interface MultiplayerVoiceRoomListParams {
    lobby_id?: string;
    server_id?: string;
    provider?: MultiplayerVoiceProvider;
    topology?: MultiplayerVoiceTopology;
    state?: MultiplayerVoiceState;
    region?: string;
    limit?: number;
}
interface MultiplayerCreateVoiceRoomRequest {
    player_id?: string;
    display_name?: string;
    lobby_id?: string;
    server_id?: string;
    provider?: MultiplayerVoiceProvider;
    topology?: MultiplayerVoiceTopology;
    state?: MultiplayerVoiceState;
    region?: string;
    codec?: MultiplayerVoiceCodec;
    sample_rate?: number;
    bitrate?: number;
    frame_duration_ms?: 10 | 20 | 40 | 60;
    channels?: 1 | 2;
    max_participants?: number;
    recording_allowed?: boolean;
    moderation_enabled?: boolean;
    connection_config?: MultiplayerMetadata;
    metadata?: MultiplayerMetadata;
    ttl_minutes?: number;
    expires_at?: string;
}
interface MultiplayerUpdateVoiceRoomRequest {
    player_id?: string;
    state?: MultiplayerVoiceState;
    max_participants?: number;
    recording_allowed?: boolean;
    moderation_enabled?: boolean;
    connection_config?: MultiplayerMetadata;
    metadata?: MultiplayerMetadata;
    expires_at?: string;
}
interface MultiplayerJoinVoiceRoomRequest {
    player_id?: string;
    display_name?: string;
    metadata?: MultiplayerMetadata;
    ttl_minutes?: number;
}
interface MultiplayerVoiceRoomTokenResponse {
    voice_room: MultiplayerVoiceRoom;
    participant: MultiplayerVoiceParticipant;
    voice_token: string;
}
interface MultiplayerVoiceHeartbeatRequest {
    voice_token: string;
    muted?: boolean;
    deafened?: boolean;
    speaking?: boolean;
    last_sequence?: number;
    ttl_minutes?: number;
}
interface MultiplayerVoiceLeaveRequest {
    voice_token: string;
}
interface MultiplayerVoicePacketRequest {
    voice_token: string;
    packet_type?: MultiplayerVoicePacketType;
    payload: string;
    duration_ms?: number;
}
interface MultiplayerVoicePollRequest {
    voice_token: string;
    after_sequence?: number;
    limit?: number;
    exclude_self?: boolean;
}
type MultiplayerRealmStatus = 'active' | 'locked' | 'maintenance' | 'full' | 'offline';
type MultiplayerZoneType = 'overworld' | 'city' | 'dungeon' | 'raid' | 'arena' | 'instanced';
type MultiplayerInstanceKind = 'persistent' | 'dynamic' | 'dungeon' | 'raid' | 'arena';
type MultiplayerInstanceState = 'provisioning' | 'active' | 'draining' | 'closed';
type MultiplayerPresenceStatus = 'online' | 'in_queue' | 'in_world' | 'away' | 'offline';
type MultiplayerMatchmakingStatus = 'queued' | 'matched' | 'canceled' | 'expired' | 'timed_out';
type MultiplayerBanScope = 'title' | 'realm' | 'lobby' | 'server' | 'voice';
type MultiplayerBanSource = 'manual' | 'report' | 'anticheat' | 'automated';
type MultiplayerRealtimeScopeType = 'lobby' | 'voice' | 'zone' | 'instance';
/** A persistent world copy (shard). */
interface MultiplayerRealm {
    id: string;
    title_id: string;
    name: string;
    slug?: string | null;
    region?: string | null;
    status: MultiplayerRealmStatus;
    population_cap: number;
    current_population: number;
    recommended: boolean;
    ruleset: MultiplayerMetadata;
    metadata: MultiplayerMetadata;
    last_activity_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
}
/** A named area within a realm (map/continent/dungeon template). */
interface MultiplayerZone {
    id: string;
    title_id: string;
    realm_id: string;
    zone_key: string;
    display_name: string;
    zone_type: MultiplayerZoneType;
    is_instanced: boolean;
    max_players_per_instance: number;
    min_instances: number;
    grid_cell_size: number;
    coordinates_bounds: MultiplayerMetadata;
    metadata: MultiplayerMetadata;
    created_at?: string | null;
    updated_at?: string | null;
}
/** A runtime copy of a zone, optionally bound to a game server. */
interface MultiplayerInstance {
    id: string;
    title_id: string;
    realm_id: string;
    zone_id: string;
    server_id?: string | null;
    instance_kind: MultiplayerInstanceKind;
    state: MultiplayerInstanceState;
    layer: number;
    difficulty?: string | null;
    max_players: number;
    current_players: number;
    metadata: MultiplayerMetadata;
    last_heartbeat_at?: string | null;
    expires_at?: string | null;
    created_at?: string | null;
    updated_at?: string | null;
    server?: MultiplayerServer | null;
}
/** Authoritative location of a player. */
interface MultiplayerPresence {
    id: string;
    title_id: string;
    player_id: string;
    user_id?: string | null;
    realm_id?: string | null;
    zone_id?: string | null;
    instance_id?: string | null;
    party_id?: string | null;
    display_name?: string | null;
    status: MultiplayerPresenceStatus;
    rich_status?: string | null;
    pos_x?: number | null;
    pos_y?: number | null;
    pos_z?: number | null;
    heading?: number | null;
    grid_cell?: string | null;
    metadata: MultiplayerMetadata;
    last_heartbeat_at?: string | null;
    expires_at?: string | null;
}
interface MultiplayerMatchmakingTicket {
    id: string;
    title_id: string;
    queue: string;
    player_id: string;
    user_id?: string | null;
    party: string[];
    attributes: MultiplayerMetadata;
    skill?: number | null;
    region?: string | null;
    status: MultiplayerMatchmakingStatus;
    match_id?: string | null;
    assignment?: MultiplayerMetadata | null;
    queued_at?: string | null;
    matched_at?: string | null;
    expires_at?: string | null;
}
interface MultiplayerBan {
    id: string;
    title_id: string;
    scope: MultiplayerBanScope;
    scope_id?: string | null;
    player_id: string;
    user_id?: string | null;
    issued_by?: string | null;
    source: MultiplayerBanSource;
    reason?: string | null;
    metadata: MultiplayerMetadata;
    expires_at?: string | null;
}
interface MultiplayerRealmListParams {
    region?: string;
    status?: MultiplayerRealmStatus;
    recommended?: boolean;
    limit?: number;
}
interface MultiplayerCreateRealmRequest {
    name: string;
    slug?: string;
    region?: string;
    status?: MultiplayerRealmStatus;
    population_cap?: number;
    recommended?: boolean;
    ruleset?: MultiplayerMetadata;
    metadata?: MultiplayerMetadata;
}
interface MultiplayerUpdateRealmRequest extends Partial<MultiplayerCreateRealmRequest> {
}
interface MultiplayerZoneListParams {
    zone_type?: MultiplayerZoneType;
    limit?: number;
}
interface MultiplayerCreateZoneRequest {
    zone_key: string;
    display_name: string;
    zone_type?: MultiplayerZoneType;
    is_instanced?: boolean;
    max_players_per_instance?: number;
    min_instances?: number;
    grid_cell_size?: number;
    coordinates_bounds?: MultiplayerMetadata;
    metadata?: MultiplayerMetadata;
}
interface MultiplayerInstanceListParams {
    state?: MultiplayerInstanceState;
    limit?: number;
}
interface MultiplayerEnterZoneRequest {
    player_id?: string;
    realm_id: string;
    zone_id: string;
    server_id?: string;
    party_id?: string;
    instance_kind?: MultiplayerInstanceKind;
    difficulty?: string;
    display_name?: string;
    rich_status?: string;
    pos_x?: number;
    pos_y?: number;
    pos_z?: number;
    heading?: number;
    metadata?: MultiplayerMetadata;
    instance_metadata?: MultiplayerMetadata;
    ttl_minutes?: number;
}
interface MultiplayerEnterZoneResponse {
    instance: MultiplayerInstance;
    presence: MultiplayerPresence;
}
interface MultiplayerUpdatePresenceRequest {
    player_id?: string;
    status?: MultiplayerPresenceStatus;
    rich_status?: string;
    pos_x?: number;
    pos_y?: number;
    pos_z?: number;
    heading?: number;
    ttl_minutes?: number;
}
interface MultiplayerLeaveWorldRequest {
    player_id?: string;
}
interface MultiplayerInstancePresenceParams {
    grid_cell?: string;
    radius?: number;
    limit?: number;
}
interface MultiplayerEnqueueTicketRequest {
    player_id?: string;
    queue: string;
    party?: string[];
    attributes?: MultiplayerMetadata;
    skill?: number;
    region?: string;
    ttl_seconds?: number;
}
interface MultiplayerBanListParams {
    scope?: MultiplayerBanScope;
    player_id?: string;
    source?: MultiplayerBanSource;
    active_only?: boolean;
    limit?: number;
}
interface MultiplayerCreateBanRequest {
    player_id: string;
    scope?: MultiplayerBanScope;
    scope_id?: string;
    user_id?: string;
    source?: MultiplayerBanSource;
    reason?: string;
    metadata?: MultiplayerMetadata;
    expires_at?: string;
}
interface MultiplayerDeleteBanResponse {
    deleted: boolean;
}
interface MultiplayerRealtimeScope {
    type: MultiplayerRealtimeScopeType;
    id: string;
}
interface MultiplayerRealtimeNegotiateRequest {
    player_id?: string;
    scopes?: MultiplayerRealtimeScope[];
}
interface MultiplayerRealtimeNegotiateResponse {
    protocol: string;
    url: string | null;
    configured: boolean;
    groups: string[];
    access_token: string | null;
    expires_at: string | null;
}
/**
 * Steam-style multiplayer APIs for Glitch titles.
 *
 * The multiplayer surface is split into three groups:
 * lobby coordination, voice coordination, server browser/reservations, and short-lived auth tickets.
 * User JWTs can infer the player from the authenticated user. Title-token clients
 * and game clients without a Glitch user session should pass a stable `player_id`.
 * Dedicated servers use `server_token` on heartbeat and server-side ticket validation
 * so they do not need to hold a user JWT or title token.
 *
 * These endpoints are intentionally database-agnostic from the SDK's point of view:
 * callers work with public identifiers, metadata objects, and lifecycle events,
 * while the backend owns how those records are stored.
 */
declare class Multiplayer {
    /**
     * Search joinable, non-expired lobbies for a title.
     *
     * Filters are exact-match except `skill_band`, which the backend can use for
     * near sorting. Default results exclude full, closed, unjoinable, and expired
     * lobbies. Lifecycle context: clients usually call this before `joinLobby`;
     * joins create a `lobby.joined` event on the backend.
     *
     * @param title_id Title UUID.
     * @param params Optional filters such as region, game mode, map, lobby type, skill band, and limit.
     * @example
     * Multiplayer.searchLobbies('title-uuid', {
     *   region: 'us-central',
     *   game_mode: 'ranked_duos',
     *   skill_band: 1840,
     *   limit: 25
     * });
     */
    static searchLobbies<T = MultiplayerLobby[]>(title_id: string, params?: MultiplayerLobbySearchParams): AxiosPromise<Response<T>>;
    /**
     * Create a lobby and insert the owner as the first joined member.
     *
     * Use this when matchmaking has no suitable lobby, when a player invites
     * friends, or when a party needs pre-game setup before server assignment.
     * Lifecycle events: `lobby.created`, then `lobby.joined` for the owner.
     *
     * @param title_id Title UUID.
     * @param data Lobby configuration and optional owner/member metadata.
     * @example
     * Multiplayer.createLobby('title-uuid', {
     *   player_id: 'steam:76561198000000000',
     *   display_name: 'CinderAce',
     *   lobby_type: 'public',
     *   max_members: 4,
     *   region: 'us-central',
     *   game_mode: 'ranked_duos',
     *   metadata: { playlist: 'ranked', allow_voice: true }
     * });
     */
    static createLobby<T = MultiplayerLobby>(title_id: string, data: MultiplayerCreateLobbyRequest): AxiosPromise<Response<T>>;
    /**
     * Retrieve a lobby with members and assigned server information when present.
     *
     * Call this after lobby lifecycle notifications such as `lobby.joined`,
     * `lobby.updated`, `lobby.owner_transferred`, or `lobby.server_assigned`.
     *
     * @param title_id Title UUID.
     * @param lobby_id Lobby UUID.
     */
    static showLobby<T = MultiplayerLobby>(title_id: string, lobby_id: string): AxiosPromise<Response<T>>;
    /**
     * Join a lobby or refresh an existing membership.
     *
     * This call is idempotent for a player already in the lobby and can update
     * display name, ready state, or member metadata. It returns 409 when the lobby
     * is full, closed, expired, or not joinable. Lifecycle event: `lobby.joined`.
     *
     * @param title_id Title UUID.
     * @param lobby_id Lobby UUID.
     * @param data Player identity and optional member metadata.
     * @example
     * Multiplayer.joinLobby('title-uuid', 'lobby-uuid', {
     *   player_id: 'steam:76561198000000001',
     *   display_name: 'Nova',
     *   ready: false,
     *   member_data: { character: 'Ash', rank: 1799 }
     * });
     */
    static joinLobby<T = MultiplayerLobbyMember>(title_id: string, lobby_id: string, data: MultiplayerJoinLobbyRequest): AxiosPromise<Response<T>>;
    /**
     * Leave a lobby.
     *
     * If the owner leaves, ownership transfers to the oldest remaining joined
     * member. If no members remain, the lobby closes. Lifecycle events:
     * `lobby.left`, optionally `lobby.owner_transferred` or `lobby.updated`.
     *
     * @param title_id Title UUID.
     * @param lobby_id Lobby UUID.
     * @param data Optional player_id for title-token clients.
     */
    static leaveLobby<T = MultiplayerLobbyMember | null>(title_id: string, lobby_id: string, data?: MultiplayerLeaveLobbyRequest): AxiosPromise<Response<T>>;
    /**
     * Update lobby metadata, visibility, joinability, limits, or state.
     *
     * This is owner-only. `max_members` cannot be lower than the current member
     * count. Keep metadata low-frequency and mostly search/display oriented.
     * Lifecycle event: `lobby.updated`.
     *
     * @param title_id Title UUID.
     * @param lobby_id Lobby UUID.
     * @param data Owner identity plus fields to update.
     */
    static updateLobby<T = MultiplayerLobby>(title_id: string, lobby_id: string, data: MultiplayerUpdateLobbyRequest): AxiosPromise<Response<T>>;
    /**
     * Assign a registered game server to a lobby.
     *
     * This owner-only handoff mirrors Steam's SetLobbyGameServer flow. Clients
     * should react by reserving or connecting to the assigned server, then
     * optionally leaving the lobby. Lifecycle event: `lobby.server_assigned`.
     *
     * @param title_id Title UUID.
     * @param lobby_id Lobby UUID.
     * @param data Server UUID and optional lobby state/joinability updates.
     */
    static setLobbyServer<T = MultiplayerLobby>(title_id: string, lobby_id: string, data: MultiplayerSetLobbyServerRequest): AxiosPromise<Response<T>>;
    /**
     * List ordered low-bandwidth lobby messages.
     *
     * Use `after_sequence` to poll for messages missed during reconnects or after
     * a realtime `lobby.message_sent` event. This channel is for chat and control
     * messages, not gameplay, positional data, or voice streaming.
     *
     * @param title_id Title UUID.
     * @param lobby_id Lobby UUID.
     * @param params Optional sequence cursor and limit.
     */
    static listLobbyMessages<T = MultiplayerLobbyMessage[]>(title_id: string, lobby_id: string, params?: MultiplayerLobbyMessagesParams): AxiosPromise<Response<T>>;
    /**
     * Send a low-bandwidth message to all lobby members.
     *
     * Payloads are capped at 4KB by the backend. Use this for chat, ready signals,
     * invite/kick control messages, and owner-arbitrated choices. Lifecycle event:
     * `lobby.message_sent`.
     *
     * @param title_id Title UUID.
     * @param lobby_id Lobby UUID.
     * @param data Message type, sender identity, and JSON payload.
     * @example
     * Multiplayer.sendLobbyMessage('title-uuid', 'lobby-uuid', {
     *   player_id: 'steam:76561198000000000',
     *   message_type: 'ready',
     *   payload: { ready: true }
     * });
     */
    static sendLobbyMessage<T = MultiplayerLobbyMessage>(title_id: string, lobby_id: string, data: MultiplayerSendLobbyMessageRequest): AxiosPromise<Response<T>>;
    /**
     * List active/non-expired voice rooms for a title.
     *
     * Rooms can be attached to a lobby, a server, a party, or a proximity group.
     * Use this to discover existing voice state before joining. Lifecycle context:
     * realtime transports should mirror `voice.room_created`, `voice.room_updated`,
     * `voice.joined`, and `voice.left`.
     *
     * @param title_id Title UUID.
     * @param params Optional room filters such as lobby_id, server_id, provider, topology, state, region, and limit.
     */
    static listVoiceRooms<T = MultiplayerVoiceRoom[]>(title_id: string, params?: MultiplayerVoiceRoomListParams): AxiosPromise<Response<T>>;
    /**
     * Create a voice room and join the creator as the first participant.
     *
     * The backend returns `voice_token` once. Keep it client-side and use it for
     * voice heartbeat, packet send, packet polling, and leave calls. `glitch_relay`
     * can carry base64 Opus frames for prototypes, small-party fallback, or
     * signaling. For production-scale audio, set `provider: 'external'` and reuse
     * the room/token contract with WebRTC, an SFU, Vivox, Steam Networking, or an
     * engine-native transport. Lifecycle events: `voice.room_created`,
     * `voice.joined`.
     *
     * @param title_id Title UUID.
     * @param data Voice codec, topology, linked lobby/server, and owner metadata.
     * @example
     * const { data } = await Multiplayer.createVoiceRoom('title-uuid', {
     *   player_id: 'steam:76561198000000000',
     *   display_name: 'CinderAce',
     *   lobby_id: 'lobby-uuid',
     *   provider: 'glitch_relay',
     *   topology: 'lobby',
     *   codec: 'opus',
     *   sample_rate: 48000,
     *   frame_duration_ms: 20,
     *   channels: 1,
     *   metadata: { push_to_talk: true }
     * });
     */
    static createVoiceRoom<T = MultiplayerVoiceRoomTokenResponse>(title_id: string, data: MultiplayerCreateVoiceRoomRequest): AxiosPromise<Response<T>>;
    /**
     * Retrieve a voice room with participant media states.
     *
     * Use this after `voice.joined`, `voice.heartbeat`, `voice.left`, or
     * `voice.room_updated` to refresh in-game UI such as speaker lists, mute
     * icons, or team voice controls.
     *
     * @param title_id Title UUID.
     * @param voice_room_id Voice room UUID.
     */
    static showVoiceRoom<T = MultiplayerVoiceRoom>(title_id: string, voice_room_id: string): AxiosPromise<Response<T>>;
    /**
     * Update owner-controlled voice room state.
     *
     * Owner-only. Use this to close a room, adjust capacity, update moderation
     * flags, or provide external provider connection details. The backend rejects
     * lowering `max_participants` below the current participant count. Lifecycle
     * event: `voice.room_updated`.
     *
     * @param title_id Title UUID.
     * @param voice_room_id Voice room UUID.
     * @param data Owner player identity and room fields to update.
     */
    static updateVoiceRoom<T = MultiplayerVoiceRoom>(title_id: string, voice_room_id: string, data: MultiplayerUpdateVoiceRoomRequest): AxiosPromise<Response<T>>;
    /**
     * Join a voice room and receive a participant-scoped token.
     *
     * Rejoining with the same player is idempotent and rotates the token. The
     * token is used by participant endpoints instead of requiring a user JWT or
     * title token on every media request. Returns 409 when the room is closed,
     * expired, or full. Lifecycle event: `voice.joined`.
     *
     * @param title_id Title UUID.
     * @param voice_room_id Voice room UUID.
     * @param data Player identity, display name, metadata, and token TTL.
     */
    static joinVoiceRoom<T = MultiplayerVoiceRoomTokenResponse>(title_id: string, voice_room_id: string, data: MultiplayerJoinVoiceRoomRequest): AxiosPromise<Response<T>>;
    /**
     * Heartbeat voice participant state.
     *
     * Call every 10-30 seconds and whenever mute/deafen/speaking state changes.
     * `last_sequence` tells the backend how far this participant has processed
     * ordered packets. Expired participants are rejected with 409. Lifecycle event:
     * `voice.heartbeat`.
     *
     * @param data Participant voice token and mutable media state.
     */
    static heartbeatVoice<T = MultiplayerVoiceParticipant>(data: MultiplayerVoiceHeartbeatRequest): AxiosPromise<Response<T>>;
    /**
     * Leave the current voice room for a participant token.
     *
     * This is idempotent for disconnect cleanup: room participant count is
     * decremented once, room ownership is transferred when possible, and an
     * empty room closes. The token remains valid only for retrying this leave
     * call; heartbeat, send, and poll calls reject left participants. Lifecycle
     * event: `voice.left`.
     *
     * @param data Participant voice token.
     */
    static leaveVoice<T = MultiplayerVoiceParticipant>(data: MultiplayerVoiceLeaveRequest): AxiosPromise<Response<T>>;
    /**
     * Send one ordered voice-room packet.
     *
     * `audio` packets should contain compact compressed frames such as base64 Opus
     * at 48kHz mono/20ms. `offer`, `answer`, and `ice` packets support WebRTC
     * signaling. `control`, `speaking`, and `mute_state` packets are for custom
     * engine state. Audio payloads are capped at 16KB; non-audio packets at 4KB.
     * Muted participants cannot send audio. Lifecycle event: `voice.packet_sent`.
     *
     * @param data Participant token, packet type, payload, and optional duration.
     * @example
     * await Multiplayer.sendVoicePacket({
     *   voice_token: voiceToken,
     *   packet_type: 'audio',
     *   payload: base64OpusFrame,
     *   duration_ms: 20
     * });
     */
    static sendVoicePacket<T = MultiplayerVoicePacket>(data: MultiplayerVoicePacketRequest): AxiosPromise<Response<T>>;
    /**
     * Poll ordered voice-room packets after a known sequence.
     *
     * Defaults to excluding packets sent by the caller. Use the highest returned
     * sequence as the next `after_sequence` cursor. This is useful for fallback
     * relay, WebRTC signaling, reconnect recovery, and small-party prototypes.
     * Lifecycle event: `voice.packet_polled`.
     *
     * @param data Participant token, optional sequence cursor, limit, and self-exclusion flag.
     */
    static pollVoicePackets<T = MultiplayerVoicePacket[]>(data: MultiplayerVoicePollRequest): AxiosPromise<Response<T>>;
    /**
     * Browse public, joinable multiplayer servers for a title.
     *
     * Default results exclude private, draining, offline, stale, expired, and full
     * servers. Title administrators can pass `include_private` to inspect servers
     * that normal clients cannot join.
     *
     * @param title_id Title UUID.
     * @param params Optional server browser filters.
     */
    static browseServers<T = MultiplayerServer[]>(title_id: string, params?: MultiplayerServerBrowserParams): AxiosPromise<Response<T>>;
    /**
     * Register or refresh a multiplayer server and receive a one-time server token.
     *
     * Store `server_token` only on the server process. The backend stores only a
     * hash and will not return the plain token again. Counts are validated so
     * `current_players + bot_players` cannot exceed `max_players`. Lifecycle event:
     * `server.registered`.
     *
     * @param title_id Title UUID.
     * @param data Server browser, connection, rule, and capacity metadata.
     * @example
     * Multiplayer.registerServer('title-uuid', {
     *   name: 'Ranked US Central 01',
     *   server_type: 'dedicated',
     *   status: 'active',
     *   host: '203.0.113.42',
     *   game_port: 7777,
     *   query_port: 27015,
     *   transport: 'udp',
     *   max_players: 16,
     *   secure: true,
     *   tags: ['ranked', 'duos']
     * });
     */
    static registerServer<T = MultiplayerRegisterServerResponse>(title_id: string, data: MultiplayerRegisterServerRequest): AxiosPromise<Response<T>>;
    /**
     * Heartbeat a multiplayer server with its dedicated `server_token`.
     *
     * Call every 30-60 seconds and whenever player counts, rules, or metadata
     * change. Stale servers are hidden from default browsing and reservation.
     * This endpoint is for dedicated/listen server processes and does not require
     * a user JWT. Lifecycle event: `server.heartbeat`.
     *
     * @param title_id Title UUID.
     * @param server_id Server UUID.
     * @param data Server token and optional mutable server state.
     */
    static heartbeatServer<T = MultiplayerServer>(title_id: string, server_id: string, data: MultiplayerServerHeartbeatRequest): AxiosPromise<Response<T>>;
    /**
     * Reserve a short-lived slot on a multiplayer server before connecting.
     *
     * Reservations protect capacity during game handoff. The backend rejects stale,
     * private, full, draining, offline, expired, or duplicate open reservations.
     * The plain `reservation_token` is returned once and is used for session
     * heartbeat/release calls. Lifecycle event: `server.reserved`.
     *
     * @param title_id Title UUID.
     * @param server_id Server UUID.
     * @param data Optional player/lobby identity and reservation TTL.
     */
    static reserveServer<T = MultiplayerReserveServerResponse>(title_id: string, server_id: string, data?: MultiplayerReserveServerRequest): AxiosPromise<Response<T>>;
    /**
     * Heartbeat an open multiplayer session reservation.
     *
     * Use this after a successful reservation while the client is connecting or
     * playing. Expired sessions are marked expired and capacity is recovered before
     * the backend returns 409. Lifecycle events: `session.heartbeat` or
     * `session.expired`.
     *
     * @param data Reservation token and optional state/TTL.
     */
    static heartbeatSession<T = MultiplayerSession>(data: MultiplayerSessionHeartbeatRequest): AxiosPromise<Response<T>>;
    /**
     * Release an open multiplayer session reservation.
     *
     * Call this on normal disconnect, failed connection attempts, or shutdown so
     * server capacity is decremented promptly. The backend makes release safe to
     * call more than once for an already closed reservation. Lifecycle event:
     * `session.released`.
     *
     * @param data Reservation token returned by `reserveServer`.
     */
    static releaseSession<T = MultiplayerSession>(data: MultiplayerSessionReleaseRequest): AxiosPromise<Response<T>>;
    /**
     * Issue a short-lived multiplayer auth ticket for a player.
     *
     * The plain `auth_ticket` is returned once and only a hash is stored by the
     * backend. Use this for P2P or dedicated-server admission before game traffic
     * begins. `remote_identity` can bind the ticket to a server or validator.
     * Lifecycle event: `auth_ticket.issued`.
     *
     * @param title_id Title UUID.
     * @param data Player identity, optional remote identity, and TTL.
     */
    static issueAuthTicket<T = MultiplayerIssueAuthTicketResponse>(title_id: string, data?: MultiplayerIssueAuthTicketRequest): AxiosPromise<Response<T>>;
    /**
     * Validate a multiplayer auth ticket from a trusted title/user context.
     *
     * Pass `consume: true` for one-time tickets to prevent replay. Dedicated
     * servers should usually call `validateAuthTicketForServer` so they can use
     * `server_token` instead of a title token or user JWT. Lifecycle event:
     * `auth_ticket.validated`.
     *
     * @param title_id Title UUID.
     * @param data Ticket, optional remote identity check, and consume flag.
     */
    static validateAuthTicket<T = MultiplayerValidateAuthTicketResponse>(title_id: string, data: MultiplayerValidateAuthTicketRequest): AxiosPromise<Response<T>>;
    /**
     * Validate an auth ticket as a dedicated server.
     *
     * This server-token endpoint lets a dedicated server admit players without
     * holding a user JWT or title token. Pass `consume: true` to prevent replay.
     * Lifecycle event: `auth_ticket.validated`.
     *
     * @param title_id Title UUID.
     * @param server_id Server UUID.
     * @param data Server token, player auth ticket, optional remote identity, and consume flag.
     */
    static validateAuthTicketForServer<T = MultiplayerValidateAuthTicketResponse>(title_id: string, server_id: string, data: MultiplayerValidateAuthTicketForServerRequest): AxiosPromise<Response<T>>;
    /**
     * List a player's server favorites or history entries.
     *
     * Use this for Steam-like favorites and recent servers tabs. Title-token
     * clients should pass `player_id`; user JWT clients default to the user UUID.
     *
     * @param title_id Title UUID.
     * @param params Optional player and favorite/history filter.
     */
    static listFavorites<T = MultiplayerServerFavorite[]>(title_id: string, params?: MultiplayerFavoritesParams): AxiosPromise<Response<T>>;
    /**
     * Add or update a favorite/history server entry for a player.
     *
     * Provide `server_id` for a registered Glitch server, or `host` plus
     * `game_port` for a direct/community server. Lifecycle event:
     * `favorite.upserted`.
     *
     * @param title_id Title UUID.
     * @param data Favorite/history target and optional metadata.
     */
    static addFavorite<T = MultiplayerServerFavorite>(title_id: string, data: MultiplayerFavoriteRequest): AxiosPromise<Response<T>>;
    /**
     * Delete a player's favorite/history server entry.
     *
     * The SDK sends optional `player_id` as a query parameter because the shared
     * request helper treats DELETE payloads as query params. This maps cleanly to
     * the backend's optional player identity validation for title-token clients.
     * Lifecycle event: `favorite.deleted`.
     *
     * @param title_id Title UUID.
     * @param favorite_id Favorite/history UUID.
     * @param params Optional player_id for title-token clients.
     */
    static deleteFavorite<T = MultiplayerDeleteFavoriteResponse>(title_id: string, favorite_id: string, params?: MultiplayerDeleteFavoriteParams): AxiosPromise<Response<T>>;
    /**
     * List realms (persistent world shards) so a player can choose where to log in.
     *
     * @param title_id Title UUID.
     * @param params Optional region/status filters; recommended realms sort first.
     * @example
     * Multiplayer.listRealms('title-uuid', { region: 'us-central', status: 'active' });
     */
    static listRealms<T = MultiplayerRealm[]>(title_id: string, params?: MultiplayerRealmListParams): AxiosPromise<Response<T>>;
    /**
     * Create a realm. Requires a title administrator JWT.
     *
     * @param title_id Title UUID.
     * @param data Realm configuration.
     * @example
     * Multiplayer.createRealm('title-uuid', { name: 'Aurora', region: 'us-central', population_cap: 5000, recommended: true });
     */
    static createRealm<T = MultiplayerRealm>(title_id: string, data: MultiplayerCreateRealmRequest): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single realm.
     *
     * @param title_id Title UUID.
     * @param realm_id Realm UUID.
     */
    static showRealm<T = MultiplayerRealm>(title_id: string, realm_id: string): AxiosPromise<Response<T>>;
    /**
     * Update a realm (status, population cap, ruleset). Requires a title admin JWT.
     *
     * @param title_id Title UUID.
     * @param realm_id Realm UUID.
     * @param data Fields to update.
     */
    static updateRealm<T = MultiplayerRealm>(title_id: string, realm_id: string, data: MultiplayerUpdateRealmRequest): AxiosPromise<Response<T>>;
    /**
     * List the zones defined for a realm.
     *
     * @param title_id Title UUID.
     * @param realm_id Realm UUID.
     * @param params Optional zone_type filter.
     */
    static listZones<T = MultiplayerZone[]>(title_id: string, realm_id: string, params?: MultiplayerZoneListParams): AxiosPromise<Response<T>>;
    /**
     * Create a zone in a realm. Requires a title administrator JWT.
     *
     * @param title_id Title UUID.
     * @param realm_id Realm UUID.
     * @param data Zone configuration, including interest-management grid cell size.
     * @example
     * Multiplayer.createZone('title-uuid', 'realm-uuid', {
     *   zone_key: 'ashfall_valley',
     *   display_name: 'Ashfall Valley',
     *   zone_type: 'overworld',
     *   max_players_per_instance: 100,
     *   grid_cell_size: 64
     * });
     */
    static createZone<T = MultiplayerZone>(title_id: string, realm_id: string, data: MultiplayerCreateZoneRequest): AxiosPromise<Response<T>>;
    /**
     * List the active/other instances (runtime copies) of a zone.
     *
     * @param title_id Title UUID.
     * @param zone_id Zone UUID.
     * @param params Optional state filter.
     */
    static listInstances<T = MultiplayerInstance[]>(title_id: string, zone_id: string, params?: MultiplayerInstanceListParams): AxiosPromise<Response<T>>;
    /**
     * Retrieve a single instance.
     *
     * @param title_id Title UUID.
     * @param instance_id Instance UUID.
     */
    static showInstance<T = MultiplayerInstance>(title_id: string, instance_id: string): AxiosPromise<Response<T>>;
    /**
     * List players present in an instance. Pass grid_cell (and optional radius) to
     * receive only players in the caller's area of interest — the key to keeping
     * per-player fan-out bounded regardless of how populated the zone is.
     *
     * @param title_id Title UUID.
     * @param instance_id Instance UUID.
     * @param params grid_cell "cx:cy" and radius (0-4) to scope the query.
     * @example
     * Multiplayer.listInstancePresence('title-uuid', 'instance-uuid', { grid_cell: '12:8', radius: 1 });
     */
    static listInstancePresence<T = MultiplayerPresence[]>(title_id: string, instance_id: string, params?: MultiplayerInstancePresenceParams): AxiosPromise<Response<T>>;
    /**
     * Enter a zone. The backend places the player into an active instance with
     * capacity (creating a new layer if all are full), enforces bans and realm
     * capacity, and upserts presence. Returns the instance and presence so the
     * client can connect and subscribe to the instance's real-time group.
     *
     * @param title_id Title UUID.
     * @param data Realm/zone target plus optional spawn position and metadata.
     * @example
     * Multiplayer.enterZone('title-uuid', {
     *   player_id: 'steam:765...',
     *   realm_id: 'realm-uuid',
     *   zone_id: 'zone-uuid',
     *   pos_x: 128.0, pos_z: 64.0
     * });
     */
    static enterZone<T = MultiplayerEnterZoneResponse>(title_id: string, data: MultiplayerEnterZoneRequest): AxiosPromise<Response<T>>;
    /**
     * Update presence (position, heading, rich status) and refresh the TTL. Call
     * on a movement interval and on notable state changes.
     *
     * @param title_id Title UUID.
     * @param data New position/status for the player.
     */
    static updatePresence<T = MultiplayerPresence>(title_id: string, data: MultiplayerUpdatePresenceRequest): AxiosPromise<Response<T>>;
    /**
     * Leave the world. Frees the player's instance slot and realm population.
     *
     * @param title_id Title UUID.
     * @param data Optional player_id for title-token clients.
     */
    static leaveWorld<T = MultiplayerPresence>(title_id: string, data?: MultiplayerLeaveWorldRequest): AxiosPromise<Response<T>>;
    /**
     * Enqueue a matchmaking ticket. Idempotent per (queue, player): an existing
     * open ticket is returned rather than duplicated, so retries are safe. Poll
     * the ticket or subscribe to `matchmaking.matched` for the assignment.
     *
     * @param title_id Title UUID.
     * @param data Queue name plus optional party, skill, region, and attributes.
     * @example
     * Multiplayer.enqueueTicket('title-uuid', { player_id: 'steam:765...', queue: 'ranked_2v2', skill: 1840, region: 'us-central' });
     */
    static enqueueTicket<T = MultiplayerMatchmakingTicket>(title_id: string, data: MultiplayerEnqueueTicketRequest): AxiosPromise<Response<T>>;
    /**
     * Poll a matchmaking ticket. A queued ticket past its TTL is reported as
     * `timed_out`; a matched ticket carries the connection `assignment`.
     *
     * @param title_id Title UUID.
     * @param ticket_id Ticket UUID.
     */
    static showTicket<T = MultiplayerMatchmakingTicket>(title_id: string, ticket_id: string): AxiosPromise<Response<T>>;
    /**
     * Cancel a queued matchmaking ticket.
     *
     * @param title_id Title UUID.
     * @param ticket_id Ticket UUID.
     */
    static cancelTicket<T = MultiplayerMatchmakingTicket>(title_id: string, ticket_id: string): AxiosPromise<Response<T>>;
    /**
     * Negotiate a real-time push connection. Returns the authorized group names
     * and the push endpoint. When SignalR/Web PubSub is configured, an
     * access_token scoped to those groups is included; otherwise `configured` is
     * false and the client should fall back to the polling endpoints.
     *
     * @param title_id Title UUID.
     * @param data Optional player_id and the scopes (lobby/voice/zone/instance) to subscribe to.
     * @example
     * Multiplayer.negotiateRealtime('title-uuid', { player_id: 'steam:765...', scopes: [{ type: 'instance', id: 'instance-uuid' }] });
     */
    static negotiateRealtime<T = MultiplayerRealtimeNegotiateResponse>(title_id: string, data?: MultiplayerRealtimeNegotiateRequest): AxiosPromise<Response<T>>;
    /**
     * List bans for a title. Requires a title administrator JWT.
     *
     * @param title_id Title UUID.
     * @param params Optional scope/player/source filters and active_only.
     */
    static listBans<T = MultiplayerBan[]>(title_id: string, params?: MultiplayerBanListParams): AxiosPromise<Response<T>>;
    /**
     * Ban a player at a scope (title/realm/lobby/server/voice). Requires a title
     * administrator JWT. Omit expires_at for a permanent ban.
     *
     * @param title_id Title UUID.
     * @param data Ban target and scope.
     * @example
     * Multiplayer.createBan('title-uuid', { player_id: 'steam:765...', scope: 'title', reason: 'Cheating: aimbot' });
     */
    static createBan<T = MultiplayerBan>(title_id: string, data: MultiplayerCreateBanRequest): AxiosPromise<Response<T>>;
    /**
     * Lift a ban. Requires a title administrator JWT.
     *
     * @param title_id Title UUID.
     * @param ban_id Ban UUID.
     */
    static deleteBan<T = MultiplayerDeleteBanResponse>(title_id: string, ban_id: string): AxiosPromise<Response<T>>;
}

declare class ServerOperations {
    static listDeployments<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static updatePolicy<T>(title_id: string, build_id: string, data: object): AxiosPromise<Response<T>>;
}

interface AgentRunRequest {
    run_type?: string;
    trigger_source?: string;
    background?: boolean;
    inline?: boolean;
    live_mode?: boolean;
    initial_message?: string | null;
    attachment_ids?: string[];
    agent_run_id?: string | null;
    [key: string]: any;
}
interface AgentStreamAnswerRequest {
    prompt: string;
    [key: string]: any;
}
interface AgentFetchOptions {
    params?: Record<string, any>;
    signal?: AbortSignal;
    headers?: Record<string, string>;
    fetcher?: typeof fetch;
}
interface AgentStreamAnswerOptions extends AgentFetchOptions {
}
declare class Agents {
    private static fetchWithAuth;
    /**
     * List game titles that can be managed in the Agents section.
     */
    static listTitles<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List title-agent subscriptions linked to titles in a community.
     */
    static listCommunitySubscriptions<T>(community_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Cancel a title-agent subscription linked to a community title.
     */
    static cancelCommunitySubscription<T>(community_id: string, stripe_subscription_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Return the full Laravel API route catalog agents use for route-aware planning.
     */
    static routeCatalog<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get a title-scoped agent workspace with setup, billing, counts, and route summary.
     */
    static workspace<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List agents for a title.
     */
    static listAgents<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create an agent before payment. Runs/results remain gated until subscription or prepaid credits.
     */
    static createAgent<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * View one agent.
     */
    static viewAgent<T>(title_id: string, agent_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update an agent's setup, policies, and guidance stop rules.
     */
    static updateAgent<T>(title_id: string, agent_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Archive an agent.
     */
    static deleteAgent<T>(title_id: string, agent_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Run an agent planning cycle. Returns 402 when subscription or prepaid credits are required.
     */
    static runAgent<T>(title_id: string, agent_id: string, data?: AgentRunRequest, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Stream a quick advisory answer for the agent workspace.
     *
     * This returns the native Fetch API Response so callers can consume the
     * ReadableStream body incrementally. A 409 response means streaming is
     * disabled server-side and the caller should fall back to the normal run
     * flow.
     */
    static streamAnswer(title_id: string, agent_id: string, data: AgentStreamAnswerRequest | string, options?: AgentStreamAnswerOptions): Promise<globalThis.Response>;
    /**
     * Upload one file for an agent run. data can include { agent_run_id }.
     */
    static uploadAgentFile<T>(title_id: string, agent_id: string, file: File | Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    /**
     * Alias for callers that use plural naming while uploading one file at a time.
     */
    static uploadAgentFiles<T>(title_id: string, agent_id: string, file: File | Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    /**
     * List Google Drive files/folders available to attach to a title agent.
     */
    static listGoogleDriveFiles<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Attach a Google Drive file as a reference file for an agent.
     */
    static attachGoogleDriveFile<T>(title_id: string, agent_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Download a protected agent file through the authenticated API route.
     *
     * Returns the native Fetch API Response so callers can inspect headers such
     * as Content-Disposition before creating a browser download or preview blob.
     */
    static downloadAgentFile(title_id: string, file_id: string, options?: AgentFetchOptions): Promise<globalThis.Response>;
    /**
     * Export a generated agent artifact to Google Drive.
     */
    static exportAgentFileToGoogleDrive<T>(title_id: string, file_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List agent runs for a title.
     */
    static listRuns<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * View one durable agent run, including events, files, actions, and guidance when loaded by the API.
     */
    static viewRun<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List real-time user-visible events for an agent run.
     */
    static listRunEvents<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Mark a queued or running agent run as being watched live so the UI can stream the loop
     * and the backend can avoid sending delayed background summaries to active viewers.
     */
    static heartbeatRun<T>(title_id: string, run_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Request cancellation for a queued or running agent run.
     */
    static cancelRun<T>(title_id: string, run_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Send a course correction to a queued or running agent run.
     */
    static interjectRun<T>(title_id: string, run_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List agent actions/approval queue for a title.
     */
    static listActions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Approve an agent action.
     */
    static approveAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Reject an agent action.
     */
    static rejectAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Execute an approved safe action.
     */
    static executeAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List guidance requests where agents have stopped for developer direction.
     */
    static listGuidance<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Answer a guidance request and write structured agent memory.
     */
    static answerGuidance<T>(title_id: string, guidance_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Rewrite an editable agent draft for review without executing the parent action.
     */
    static rewriteAgentDraft<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Agent workflow convenience wrapper for creator invite context.
     */
    static creatorInviteContext<T>(campaign_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Agent workflow convenience wrapper for sending a reviewed creator invite.
     */
    static sendCreatorInvite<T>(campaign_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Agent workflow convenience wrapper for updating a drafted social post.
     */
    static updateSocialPost<T>(post_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Agent workflow convenience wrapper for updating campaign settings.
     */
    static updateCampaign<T>(campaign_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Agent workflow convenience wrapper for saving manual access keys.
     */
    static createAccessKeys<T>(title_id: string, data: {
        platform: string;
        codes: string;
    }, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List structured agent memories for a title.
     */
    static listMemories<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Update one structured agent memory.
     */
    static updateMemory<T>(title_id: string, memory_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Deactivate one structured agent memory.
     */
    static deactivateMemory<T>(title_id: string, memory_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get results and outcome summary for title agents. Returns 402 until subscription or prepaid credits are active.
     */
    static results<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get this title's agent usage against plan limits (agents used/included, monthly runs, and
     * AI dollars spent vs the configured monthly AI budget). Powers usage meters and limit warnings.
     */
    static usage<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Get the prepaid agent credit balance and ledger (Pay-As-You-Go plan).
     */
    static credits<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Buy prepaid agent credits (Pay-As-You-Go). Charges the card up front; the agent draws down
     * credits per run and stops when they run out. data: { paymentMethod, amount_usd }.
     */
    static purchaseCredits<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Start a Stripe-backed agent subscription after setup.
     */
    static startTrial<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * List social/ad schedulers. Useful when agent setup needs to attach to an existing workflow.
     */
    static listSchedulers<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Create a scheduler inline from an agent setup flow.
     */
    static createScheduler<T>(data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Cross-title agency cockpit: per-title agent status, billing/credits, and portfolio totals.
     */
    static agencyOverview<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Unified cross-title "needs you" inbox (open guidance + pending approvals across all titles).
     */
    static agencyInbox<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}

interface McpStartRunRequest {
    agent_id?: string | null;
    initial_message?: string | null;
    prompt?: string | null;
    run_type?: string;
    trigger_source?: string;
    background?: boolean;
    live_mode?: boolean;
    attachment_ids?: string[];
    [key: string]: any;
}
/**
 * Client for the Glitch MCP paid facade (/mcp/v1).
 *
 * Authenticate with a Glitch user JWT or a title-scoped MCP token. The facade
 * enforces subscription, title permissions, scope, and approval guardrails on
 * every call; this client only forwards requests.
 */
declare class Mcp {
    /** Health/auth probe. Returns authenticated=false (200) when no credential is set. */
    static authStatus<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** List titles visible to the current user token or title-scoped MCP token. */
    static listTitles<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Fetch safe, subscription-gated workspace context for a title. */
    static titleContext<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Check subscription, trial, plan, and credit state for a title. */
    static billing<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Start a paid Glitch Agent run for a title. */
    static startRun<T>(title_id: string, data?: McpStartRunRequest, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Fetch a durable run with status, actions, guidance, events, files, and report. */
    static viewRun<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** List user-visible timeline events for a run. */
    static runEvents<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Fetch the human-friendly final or partial report for a run. */
    static finalReport<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Server-Sent Events URL for a run's live event stream.
     *
     * Returns the absolute URL to open with an EventSource/fetch reader; the
     * endpoint emits `status`, `run_event`, and a terminal `settled`/`timeout` event.
     */
    static runStreamUrl(title_id: string, run_id: string, params?: Record<string, any>): string;
    /** List downloadable files and hosted report artifacts for a run. */
    static artifacts<T>(title_id: string, run_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** List proposed/guidance/approval/executed actions for a title. */
    static listActions<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Approve a reviewable action. Execution remains guarded server-side. */
    static approveAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Reject a proposed or approval-needed action. */
    static rejectAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Execute an approved action. Public/paid/creator-facing work stays guarded. */
    static executeAction<T>(title_id: string, action_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** List open or answered guidance requests for a title or run. */
    static listGuidance<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Answer a guidance request and resume the server-side workflow when possible. */
    static answerGuidance<T>(title_id: string, guidance_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Get instructions for uploading a file (points at uploadFile below). */
    static createUpload<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Upload a file (image, video, or document) to a title or run as multipart/form-data.
     * The facade re-checks the title scope, subscription, and allowed mime types.
     */
    static uploadFile<T>(title_id: string, file: File | Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    /** List MCP title tokens (user JWT only). */
    static listTokens<T>(title_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Create a revocable title-scoped MCP token (user JWT only). */
    static createToken<T>(title_id: string, data?: object, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /** Revoke a title-scoped MCP token (user JWT only). */
    static revokeToken<T>(title_id: string, token_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

/**
 * Allowed outlet types in the PR directory.
 */
type PrPublicationType = "blog" | "podcast" | "publication";
/**
 * Eligibility state for a PR outlet.
 */
type PrEligibilityStatus = "eligible" | "ineligible" | "needs_review" | "duplicate" | "archived";
/**
 * Verification state used by PR outlets, people, links, and contact points.
 */
type PrVerificationStatus = "unverified" | "verified" | "stale" | "blocked" | "failed" | "needs_review";
/**
 * Email health status stored on the outlet-level PR email field.
 */
type PrEmailStatus = "unknown" | "verified" | "bounced" | "missing" | "needs_review";
/**
 * Contact verification state for normalized contact points.
 */
type PrContactVerificationStatus = "unverified" | "verified" | "stale" | "bounced" | "invalid" | "blocked" | "needs_review";
/**
 * Link refresh status for evidence URLs.
 */
type PrLinkStatus = "unverified" | "ok" | "redirected" | "broken" | "blocked" | "failed" | "stale";
/**
 * Refresh state for discovered RSS/Atom/JSON feeds.
 */
type PrFeedStatus = "unverified" | "ok" | "empty" | "blocked" | "failed" | "stale" | "needs_review";
/**
 * Feed format detected during PR content ingestion.
 */
type PrFeedType = "rss" | "atom" | "json" | "unknown";
/**
 * Filters accepted by `/pr/publications` and `/pr/report`.
 *
 * Tag filters are human-readable slugs from `/pr/tags`. The backend accepts
 * format, genre, platform, and audience as namespace-specific tag filters so
 * frontend screens can expose simple controls without knowing pivot table
 * details.
 */
interface PrPublicationSearchParams {
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
interface PrPeopleSearchParams {
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
 * Filters accepted by `/pr/feeds`.
 */
interface PrFeedSearchParams {
    q?: string;
    publication_id?: string;
    feed_type?: PrFeedType;
    status?: PrFeedStatus;
    source?: string;
    has_stories?: boolean;
    sort?: "title" | "-title" | "feed_type" | "-feed_type" | "status" | "-status" | "last_fetched_at" | "-last_fetched_at" | "next_fetch_at" | "-next_fetch_at" | "updated_at" | "-updated_at" | string;
    page?: number;
    per_page?: number;
    include_raw?: boolean;
}
/**
 * Filters accepted by `/pr/stories`.
 */
interface PrStorySearchParams {
    q?: string;
    publication_id?: string;
    pr_feed_id?: string;
    pr_person_id?: string;
    story_type?: string;
    language?: string;
    ingestion_status?: string;
    has_author?: boolean;
    published_after?: string;
    published_before?: string;
    sort?: "published_at" | "-published_at" | "updated_at" | "-updated_at" | "title" | "-title" | string;
    page?: number;
    per_page?: number;
}
/**
 * Filters accepted by `/pr/tags`.
 */
interface PrTagSearchParams {
    namespace?: string;
    q?: string;
}
/**
 * Query parameters accepted by `/titles/{title_id}/pr/matches`.
 *
 * The title matcher uses the title profile plus optional human-readable search
 * context to rank eligible outlets and explain why each outlet is a fit.
 */
interface PrTitleMatchParams extends PrPublicationSearchParams {
    genres?: string[];
    platforms?: string[];
    audiences?: string[];
    limit?: number;
}
/**
 * Query parameters accepted by `/titles/{title_id}/pr/research`.
 */
interface PrTitleResearchParams extends PrStorySearchParams {
    limit?: number;
    story_sort?: string;
}
/**
 * Request body accepted by `/admin/pr/verification/queue`.
 */
interface PrQueueVerificationRequest {
    due?: boolean;
    limit?: number;
    link_ids?: string[];
}
/**
 * Review-only PR draft request for `/titles/{title_id}/pr/drafts`.
 */
interface PrTitleDraftRequest {
    publication_id?: string;
    pr_person_id?: string;
    q?: string;
    prompt?: string;
    press_kit_url?: string;
    trailer_url?: string;
    demo_or_review_key?: string;
    embargo_or_timing?: string;
    sender?: {
        name?: string;
    };
    use_ai?: boolean;
}
/**
 * Admin request body for `/admin/pr/feeds/refresh`.
 */
interface PrFeedRefreshRequest {
    discover?: boolean;
    due?: boolean;
    queue?: boolean;
    limit?: number;
    feed_ids?: string[];
    publication_ids?: string[];
}
/**
 * A normalized metadata tag used to filter and match PR outlets, people, and
 * roles.
 */
interface PrTag {
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
interface PrLink {
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
 * RSS/Atom/JSON feed discovered for a publication and used for story research.
 */
interface PrFeed {
    id: string;
    publication_id: string;
    pr_link_id?: string | null;
    feed_url: string;
    canonical_url?: string | null;
    feed_type: PrFeedType;
    title?: string | null;
    description?: string | null;
    language?: string | null;
    status: PrFeedStatus;
    http_status?: number | null;
    content_type?: string | null;
    etag?: string | null;
    raw_feed_hash?: string | null;
    raw_feed_content?: string | null;
    raw_feed_size?: number;
    last_modified_at?: string | null;
    last_fetched_at?: string | null;
    next_fetch_at?: string | null;
    item_count_last_fetch: number;
    source?: string | null;
    last_error?: string | null;
    publication?: PrPublication | null;
    stories_count?: number;
    stories?: PrStory[];
    metadata?: Record<string, any>;
    created_at?: string | null;
    updated_at?: string | null;
}
/**
 * A story, article, guide, review, or episode imported from a PR feed.
 */
interface PrStory {
    id: string;
    publication_id: string;
    pr_feed_id?: string | null;
    canonical_url?: string | null;
    guid?: string | null;
    title: string;
    dek?: string | null;
    summary?: string | null;
    content_excerpt?: string | null;
    content_hash?: string | null;
    author_name_raw?: string | null;
    author_email_raw?: string | null;
    author_url_raw?: string | null;
    published_at?: string | null;
    updated_at_feed?: string | null;
    story_type?: string | null;
    language?: string | null;
    categories?: string[];
    tags?: string[];
    media_url?: string | null;
    analysis?: Record<string, any>;
    ingestion_status?: string | null;
    publication?: PrPublication | null;
    feed?: PrFeed | null;
    authors?: PrStoryAuthor[];
    created_at?: string | null;
    updated_at?: string | null;
}
/**
 * Raw byline evidence and optional match to a known PR contact.
 */
interface PrStoryAuthor {
    id: string;
    pr_story_id: string;
    publication_id?: string | null;
    pr_person_id?: string | null;
    author_name?: string | null;
    author_email?: string | null;
    author_url?: string | null;
    confidence?: number | null;
    match_source?: string | null;
    evidence?: Record<string, any>;
    story?: PrStory | null;
    person?: PrPerson | null;
    created_at?: string | null;
    updated_at?: string | null;
}
/**
 * A normalized way to reach an outlet, person, or publication role.
 */
interface PrContactPoint {
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
interface PublicationPerson {
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
interface PrPublication {
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
    feeds_count?: number;
    stories_count?: number;
    people?: PublicationPerson[];
    contact_points?: PrContactPoint[];
    links?: PrLink[];
    feeds?: PrFeed[];
    stories?: PrStory[];
    tags?: PrTag[];
    metadata?: Record<string, any>;
    created_at?: string | null;
    updated_at?: string | null;
}
/**
 * A journalist, editor, podcast host, producer, contributor, or other PR
 * contact associated with one or more gaming-focused outlets.
 */
interface PrPerson {
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
    stories_count?: number;
    roles?: PublicationPerson[];
    contact_points?: PrContactPoint[];
    links?: PrLink[];
    stories?: PrStoryAuthor[];
    tags?: PrTag[];
    metadata?: Record<string, any>;
    created_at?: string | null;
    updated_at?: string | null;
}
/**
 * Aggregate PR directory health metrics returned by `/pr/report`.
 */
interface PrDirectoryReport {
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
    feeds: {
        total: number;
        by_status: Record<string, number>;
        due_for_fetch: number;
    };
    stories: {
        total: number;
        with_author: number;
        by_type: Record<string, number>;
    };
}
/**
 * A ranked title-to-outlet match with evidence, contact route, and plain-English
 * explanation.
 */
interface PrTitleMatch {
    publication: PrPublication;
    score: number;
    matched_tags: string[];
    best_contact_path?: Record<string, any> | null;
    why: string[];
    risks: string[];
    evidence_links: PrLink[];
}
/**
 * Title-scoped PR research workspace response.
 */
interface PrTitleResearchResponse {
    generated_at: string;
    title: {
        id: string;
        name: string;
        slug?: string | null;
        short_description?: string | null;
        description?: string | null;
        genres?: string[];
        platforms?: string[];
        website_url?: string | null;
        steam_url?: string | null;
        itch_url?: string | null;
        demo_url?: string | null;
        video_url?: string | null;
    };
    readiness: {
        score: number;
        strengths: string[];
        gaps: string[];
    };
    publication_matches: PrTitleMatch[];
    stories: PrStory[];
    story_summary: {
        count: number;
        with_known_author: number;
        publication_count: number;
    };
    suggested_next_steps: string[];
}
/**
 * Structured draft fields returned alongside the formatted HTML email body.
 */
interface PrOutreachDraft {
    subject?: string | null;
    opener?: string | null;
    body?: string | null;
    body_html?: string | null;
    key_points?: string[];
    personalization_notes?: string[];
    review_notes?: string[];
    missing_context_warnings?: string[];
    [key: string]: any;
}
/**
 * Review-only PR draft response. The API never sends email from this endpoint.
 */
interface PrTitleDraftResponse {
    draft_status: "draft_only_not_sent" | "no_verified_email_found" | "no_publication_found" | string;
    emails_sent: boolean;
    publication?: PrPublication | null;
    person?: PrPerson | null;
    target: Record<string, any>;
    recent_stories: PrStory[];
    draft: PrOutreachDraft;
    body_html: string;
    review_notes: string[];
}
/**
 * Response body returned after queueing PR verification jobs.
 */
interface PrQueueVerificationResponse {
    queued: number;
}
/**
 * Response body returned after discovering, queueing, or fetching PR feeds.
 */
interface PrFeedRefreshResponse {
    discovered: number;
    queued: number;
    fetched: number;
}
/**
 * SDK wrapper for the PR Directory API.
 *
 * The PR directory is read-friendly by default: public endpoints expose
 * searchable publications, people, feeds, stories, tags, and reporting metrics.
 * Authenticated title admins can request title-specific research and review-only
 * outreach drafts, and site admins can queue verification or feed refresh jobs.
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
     * Search discovered RSS/Atom/JSON feeds across known publications.
     */
    static listFeeds<T = PrFeed[]>(params?: PrFeedSearchParams): AxiosPromise<Response<T>>;
    /**
     * Retrieve one feed with freshness metadata and recent imported stories.
     * Pass `include_raw: true` to request the stored XML/RSS payload.
     */
    static viewFeed<T = PrFeed>(feed_id: string, params?: PrFeedSearchParams): AxiosPromise<Response<T>>;
    /**
     * Search imported stories, reviews, guides, and episodes by outlet or byline.
     */
    static listStories<T = PrStory[]>(params?: PrStorySearchParams): AxiosPromise<Response<T>>;
    /**
     * Retrieve one imported story with feed, publication, and byline evidence.
     */
    static viewStory<T = PrStory>(story_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
     * Get a title-scoped PR research workspace with outlet matches, recent story
     * context, media kit readiness, and next steps.
     */
    static titleResearch<T = PrTitleResearchResponse>(title_id: string, params?: PrTitleResearchParams): AxiosPromise<Response<T>>;
    /**
     * Create a formatted, review-only PR email draft for a selected title target.
     * The backend returns HTML with paragraphs, bullets, and links but sends no email.
     */
    static titleDraft<T = PrTitleDraftResponse>(title_id: string, data?: PrTitleDraftRequest, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Queue PR verification jobs. Requires a site-admin auth token.
     *
     * @example
     * ```ts
     * Glitch.api.PrDirectory.queueVerification({ due: true, limit: 250 });
     * ```
     */
    static queueVerification<T = PrQueueVerificationResponse>(data?: PrQueueVerificationRequest, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Discover, queue, or synchronously refresh PR feeds. Requires a site-admin
     * auth token.
     */
    static refreshFeeds<T = PrFeedRefreshResponse>(data?: PrFeedRefreshRequest, params?: Record<string, any>): AxiosPromise<Response<T>>;
}

declare class AdminReports {
    /**
     * Returns aggregate site-admin reporting for user growth, churn, acquisition,
     * engagement, and user-generated revenue.
     */
    static usersRevenue<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Returns site-admin Steam market reports, including social profile coverage,
     * platform usage, follower benchmarks, review/player relationships, and
     * optional target-app game reports.
     */
    static steam<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
}

/**
 * Site-administrator user management.
 *
 * These endpoints back the admin dashboard user directory. They require a
 * site-admin auth token (Super Administrator or Administrator), and
 * impersonation additionally requires a Super Administrator token.
 */
declare class AdminUsers {
    /**
     * List and search all users in the system.
     *
     * Supported params include `search` (matches name, username, email, or id),
     * `is_site_admin`, `is_verified`, `sort_by`, `sort_order`, `per_page`, and
     * `page`.
     *
     * @param params Optional query parameters.
     * @returns promise
     */
    static list<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve aggregated user analytics for the admin directory.
     *
     * Supported params include `search`, `is_site_admin`, `is_verified`,
     * `user_type`, `start_date`, `end_date`, `period`, `sort_by`, and
     * `sort_order`.
     *
     * @param params Optional query parameters.
     * @returns promise
     */
    static analytics<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Retrieve a comprehensive profile for a single user, including communities,
     * administered titles, games played, roles, billing status, social presence,
     * and activity counts.
     *
     * @param user_id The id of the user to view.
     * @param params Optional query parameters.
     * @returns promise
     */
    static view<T>(user_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Impersonate a user. Issues a JWT for the target account so a Super
     * Administrator can operate as that user. Administrator accounts cannot be
     * impersonated, and every call is written to the impersonation audit log.
     *
     * @param user_id The id of the user to impersonate.
     * @returns promise resolving to an access token and the impersonated user summary.
     */
    static impersonate<T>(user_id: string): AxiosPromise<Response<T>>;
}

declare class MarketResearch {
    static access<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static filterOptions<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static listGames<T>(params?: Record<string, any>): AxiosPromise<Response<T>>;
    static viewGame<T>(game_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static exportGames(params?: Record<string, any>): AxiosPromise<Blob>;
    static exportGame(game_id: string, params?: Record<string, any>): AxiosPromise<Blob>;
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
    /**
     * Build an absolute API URL using the currently configured base URL.
     *
     * This is useful for browser primitives such as EventSource that need a URL
     * string instead of an Axios request wrapper.
     */
    static buildUrl(url: string, params?: Record<string, any>): string;
    private static request;
    static get<T>(url: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static download(url: string, params?: Record<string, any>): AxiosPromise<Blob>;
    static post<T>(url: string, data: any, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static put<T>(url: string, data: any, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static patch<T>(url: string, data: any, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static delete<T>(url: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static uploadFile<T>(url: string, filename: string, file: File | Blob, data?: any, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    static postFormData<T>(url: string, formData: FormData, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
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
            expires_in: number;
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
    private static crossDomainKeys;
    static setRootDomain(rootDomain: string): void;
    private static getStorageKey;
    private static shouldShareAcrossSubdomains;
    static set(key: string, value: any): void;
    static get(key: string): any;
    static setAuthToken(token: string | null): void;
    static getAuthToken(): string | null;
    static eraseCookie(name: string): void;
    private static setCookie;
    private static getCookie;
    static setTokenExpiry(expiresInSeconds: number): void;
    static getTokenExpiry(): number | null;
    static isTokenExpired(): boolean;
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
        RedditSubreddits: typeof RedditSubreddits;
        Funnel: typeof Funnel;
        SocialStats: typeof SocialStats;
        WebsiteAnalytics: typeof WebsiteAnalytics;
        Fingerprinting: typeof Fingerprinting;
        ShortLinks: typeof ShortLinks;
        AIUsage: typeof AIUsage;
        MarketingAgencies: typeof MarketingAgencies;
        TwitchReporting: typeof TwitchReporting;
        Raffles: typeof Raffles;
        DiscordMarketplace: typeof DiscordMarketplace;
        Education: typeof Education;
        Crm: typeof Crm;
        Multiplayer: typeof Multiplayer;
        ServerOperations: typeof ServerOperations;
        Agents: typeof Agents;
        Mcp: typeof Mcp;
        PrDirectory: typeof PrDirectory;
        AdminReports: typeof AdminReports;
        AdminUsers: typeof AdminUsers;
        MarketResearch: typeof MarketResearch;
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
