import { AxiosPromise } from 'axios';

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
    static uploadFile<T>(url: string, filename: string, file: File | Blob, data?: any, params?: Record<string, any>): AxiosPromise<Response<T>>;
    static uploadBlob<T>(url: string, filename: string, blob: Blob, data?: any, params?: Record<string, any>): AxiosPromise<Response<T>>;
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
        Auth: typeof Auth;
        Campaigns: typeof Campaigns;
        Competitions: typeof Competitions;
        Communities: typeof Communities;
        Users: typeof Users;
        Events: typeof Events;
        Games: typeof Games;
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
