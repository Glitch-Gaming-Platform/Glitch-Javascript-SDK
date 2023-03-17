import CompetitionRoutes from "../routes/CompetitionRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Competitions {

    /**
     * List all the competitions
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceList
     * 
     * @returns promise
     */
    public static list<T>() :  AxiosPromise<Response<T>> {
        return Requests.processRoute(CompetitionRoutes.routes.list);
    }

    /**
     * Create a new competition
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/newResourceStorage
     * 
     * @param data The date to be passed when creating a competiton.
     * 
     * @returns Promise
     */
    public static create<T>(data : object) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(CompetitionRoutes.routes.create, data);
    }

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
    public static update<T>(competition_id : string, data : object)  :  AxiosPromise<Response<T>>{

        return Requests.processRoute(CompetitionRoutes.routes.create, data, {competition_id : competition_id});
    }

    /**
     * Retrieve the information for a single competition.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/showStorage
     * 
     * @param competition_id The id fo the competition to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(competition_id : string) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(CompetitionRoutes.routes.view, {}, {competition_id : competition_id});
    }

    /**
     * Deletes a competition.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/destoryStorage
     * 
     * @param competition_id The id of the competition to delete.
     * @returns promise
     */
    public static delete<T>(competition_id : string) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(CompetitionRoutes.routes.delete, {}, {competition_id : competition_id});
    }

    /**
     * Add a team
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/addTeam
     * 
     * @param competition_id 
     * @param team_id 
     * @returns promise
     */
    public static addTeam<T>(competition_id : string, team_id : string) : AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.addTeam, {team_id : team_id}, {competition_id : competition_id});
    }

    /**
     * Adds participant
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/addParticipant
     * 
     * @param competition_id 
     * @param user_id 
     * @returns promise
     */
    public static addParticipant<T>(competition_id : string, user_id : string) : AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.addParticipant, {user_id : user_id}, {competition_id : competition_id});
    }

    /**
     * Register a team
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/registerTeam
     * 
     * @param competition_id 
     * @param team_id 
     * @returns promise
     */
    public static registerTeam<T>(competition_id : string, team_id : string) : AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.registerTeam, {team_id : team_id}, {competition_id : competition_id});
    }

    /**
     * Register a user
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/registerParticipant
     * 
     * @param competition_id
     * @returns promise
     */
    public static registerUser<T>(competition_id : string) : AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.registerUser, {competition_id : competition_id});
    }

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
    public static syncRounds<T>(competition_id : string) : AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.syncRounds, {competition_id : competition_id});
    }

    /**
     * auto generate team brackets
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/autoGenerateTeamBrackets
     * 
     * @param competition_id 
     * @param round_id 
     * @returns promise
     */
    public static autoGenerate<T>(competition_id : string, round_id : number) : AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.autoGenerate, {round_id : round_id}, {competition_id : competition_id});
    }

    /**
     * auto generate user brackets
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/autoGenerateUserBrackets
     * 
     * @param competition_id 
     * @returns promise
     */
    public static autoGenerateUserBrackets<T>(competition_id : string) : AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.autoGenerateUserBrackets, {competition_id : competition_id});
    }

    /**
     * Upload main image
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/uploadMainImage
     * 
     * @param competition_id 
     * @param image 
     * @returns promise
     */
    public static uploadMainImage<T>(competition_id : string, image : string) : AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.uploadMainImage, {competition_id : competition_id}, {image : image});
    }

    /**
     * Upload banner image
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/uploadBannerImage
     * 
     * @param competition_id 
     * @param image 
     * @returns promise
     */
    public static uploadBannerImage<T>(competition_id : string, image : string) : AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.uploadBannerImage, {competition_id : competition_id}, {image : image});
    }

    /**
     * Invites
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionUserInviteList
     * 
     * @param competition_id 
     * @returns promise
     */
    public static invites<T>(competition_id : string) : AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.invites, {competition_id : competition_id});
    }

    /**
     * Sends invite
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionSendInvite
     * 
     * @param competition_id
     * @returns promise
     */
    public static sendInvite<T>(competition_id : string) : AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.sendInvite, {competition_id : competition_id});
    }

    /**
     * Accept invite
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionAcceptInvite
     * 
     * @param competition_id 
     * @param token 
     * @returns promise
     */
    public static acceptInvite<T>(competition_id : string, token : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.acceptInvite, {competition_id : competition_id}, {token : token});
    }

    /**
     * Round brackets
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundBracketList1
     * 
     * @param competition_id 
     * @param round_id 
     * @returns promise
     */
    public static brackets<T>(competition_id : string, round_id : number): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.brackets, {competition_id : competition_id}, {round_id : round_id});
    }

    /**
     * Store round brackets
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundBracketStorage
     * 
     * @param competition_id 
     * @param round_id 
     * @returns promise
     */
    public static bracketStore<T>(competition_id : string, round_id : number): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.bracketStore, {competition_id : competition_id}, {round_id : round_id});
    }

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
    public static showBracket<T>(competition_id : string, round_id : number, bracket_id : number): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.showBracket, {competition_id : competition_id}, {round_id : round_id, bracket_id : bracket_id});
    }

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
    public static updateBracket<T>(competition_id : string, round_id : number, bracket_id : number): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.updateBracket, {competition_id : competition_id}, {round_id : round_id, bracket_id : bracket_id});
    }

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
    public static destroyBracket<T>(competition_id : string, round_id : number, bracket_id : number): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.destroyBracket, {competition_id : competition_id}, {round_id : round_id, bracket_id : bracket_id});
    }

    /**
     * List round
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundList
     * 
     * @param competition_id 
     * @returns promise
     */
    public static rounds<T>(competition_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.rounds, {competition_id : competition_id});
    }

    /**
     * Create a new round for competition
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundStorage
     * 
     * @param competition_id 
     * @returns promise
     */
    public static roundStore<T>(competition_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.roundStore, {competition_id : competition_id});
    }

    /**
     * Retrieve the information for a single round.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceRoundShow
     * 
     * @param competition_id 
     * @param round_id 
     * @returns promise
     */
    public static showRound<T>(competition_id : string, round_id : number): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.showRound, {competition_id : competition_id}, {round_id : round_id});
    }

    /**
     * Updating resource in storage with new information.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateRound
     * 
     * @param competition_id 
     * @param round_id 
     * @returns promise
     */
    public static updateRound<T>(competition_id : string, round_id : number): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.updateBracket, {competition_id : competition_id}, {round_id : round_id});
    }

    /**
     * Deletes the round for the competition.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/destoryRound
     * 
     * @param competition_id 
     * @param round_id 
     * @returns promise
     */
    public static destroyRound<T>(competition_id : string, round_id : number): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.destroyRound, {competition_id : competition_id}, {round_id : round_id});
    }

    /**
     * Retrieve a list of teams associated with the competition.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceCompetitionTeamList
     * 
     * @param competition_id 
     * @returns promise
     */
    public static team<T>(competition_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.team, {competition_id : competition_id});
    }

    /**
     * Associate a new team with the competition.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceCompetitionTeamStorage
     * 
     * @param competition_id 
     * @returns promise
     */
    public static teamStore<T>(competition_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.teamStore, {competition_id : competition_id});
    }

    /**
     * Display the contents of a single team associated with the competition.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceTeamShow
     * 
     * @param competition_id 
     * @param team 
     * @returns promise
     */
    public static showTeam<T>(competition_id : string, team : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.showTeam, {competition_id : competition_id}, {team : team});
    }
    
    /**
     * Update the team information associated with the competition.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateTeam
     * 
     * @param competition_id 
     * @param team_id 
     * @returns promise
     */
    public static updateTeam<T>(competition_id : string, team_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.updateTeam, {competition_id : competition_id}, {team_id : team_id});
    }

    /**
     * Removes the team from the competition.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/destoryTeam
     * 
     * @param competition_id 
     * @param team_id 
     * @returns promise
     */
    public static destroyTeam<T>(competition_id : string, team_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.destroyTeam, {competition_id : competition_id}, {team_id : team_id});
    }

    /**
     * List all the users associated with a competition.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/competitionUserList
     * 
     * @param competition_id 
     * @returns promise
     */
    public static users<T>(competition_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.users, {competition_id : competition_id});
    }

    /**
     * Associate a new users with the competition.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/createCompetitionUser
     * 
     * @param competition_id 
     * @returns promise
     */
    public static competitionUser<T>(competition_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.competitionUser, {competition_id : competition_id});
    }

    /**
     * Show a single user by its ID.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/showCompetitionUser
     * 
     * @param competition_id 
     * @param user_id 
     * @returns promise
     */
    public static showCompetitionUser<T>(competition_id : string, user_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.showCompetitionUser, {competition_id : competition_id}, {user_id : user_id});
    }

    /**
     * Update the user associated with competition.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateCompetitionUser
     * 
     * @param competition_id 
     * @param user_id 
     * @returns promise
     */
    public static updateCompetitionUser<T>(competition_id : string, user_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.updateCompetitionUser, {competition_id : competition_id}, {user_id : user_id});
    }

    /**
     * Remove the associated user from the competition.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/removeCompetitionUser
     * 
     * @param competition_id 
     * @param user_id 
     * @returns promise
     */
    public static destroyCompetitionUser<T>(competition_id : string, user_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.destroyCompetitionUser, {competition_id : competition_id}, {user_id : user_id});
    }  
    
    /**
     * List all the venues associated with a competition.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/venueList
     * 
     * @param competition_id 
     * @returns promise
     */
    public static venues<T>(competition_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.venues, {competition_id : competition_id});
    }  

    /**
     * Creating a new venue.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/createVenue
     * 
     * @param competition_id 
     * @returns promise
     */
    public static newVenue<T>(competition_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.newVenue, {competition_id : competition_id});
    } 

    /**
     * Show a single venue by its ID.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/showVenue
     * 
     * @param competition_id 
     * @param venue_id 
     * @returns promise
     */
    public static showVenue<T>(competition_id : string, venue_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.showVenue, {competition_id : competition_id}, {venue_id : venue_id});
    } 

    /**
     * Update the venue.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/updateVenue
     * 
     * @param competition_id 
     * @param venue_id 
     * @returns promise
     */
    public static updateVenue<T>(competition_id : string, venue_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.updateVenue, {competition_id : competition_id}, {venue_id : venue_id});
    }

    /**
     * Deletes the venue from the competition.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/removeCompetitionVenue
     * 
     * @param competition_id 
     * @param venue_id 
     * @returns promise
     */
    public static destroyVenue<T>(competition_id : string, venue_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.destroyVenue, {competition_id : competition_id}, {venue_id : venue_id});
    }

    /**
     * Upload venue main image to storage.
     * 
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/uploadVenueMainImage
     * 
     * @param competition_id 
     * @param venue_id 
     * @returns promise
     */
    public static uploadVenueMainImage<T>(competition_id : string, venue_id : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.uploadVenueMainImage, {competition_id : competition_id}, {venue_id : venue_id});
    }

    public static addRTMPSource<T>(rtmp_source : string): AxiosPromise<Response<T>>{
        return Requests.processRoute(CompetitionRoutes.routes.competition_id, {rtmp_source : rtmp_source});
    }
}

export default Competitions;