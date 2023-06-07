import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class CompetitionRoutes {
    
    public static routes: { [key: string]: Route } = {
      list: { url: '/competitions', method: HTTP_METHODS.GET },
      create: { url: '/competitions', method: HTTP_METHODS.POST  },
      view : { url: '/competitions/{competition_id}', method: HTTP_METHODS.GET  },
      update  :{ url: '/competitions/{competition_id}', method: HTTP_METHODS.PUT  },
      delete : { url: '/competitions/{competition_id}', method: HTTP_METHODS.DELETE },
      addTeam : { url: '/competitions/{competition_id}/addTeam', method: HTTP_METHODS.POST },
      addParticipant : { url: '/competitions/{competition_id}/addParticipant', method: HTTP_METHODS.POST },
      registerTeam : { url: '/competitions/{competition_id}/registerTeam', method: HTTP_METHODS.POST },
      registerUser : { url: '/competitions/{competition_id}/registerUser', method: HTTP_METHODS.POST },
      syncRounds : { url: '/competitions/{competition_id}/syncRounds', method: HTTP_METHODS.GET },
      autoGenerate : { url: '/competitions/{competition_id}/rounds/{round_id}/brackets/autoGenerate', method: HTTP_METHODS.GET },
      autoGenerateUserBrackets : { url: '/competitions/{competition_id}/autoGenerateUserBrackets', method: HTTP_METHODS.GET },
      uploadMainImage : { url: '/competitions/{competition_id}/uploadMainImage', method: HTTP_METHODS.POST },
      uploadBannerImage : { url: '/competitions/{competition_id}/uploadBannerImage', method: HTTP_METHODS.POST },
      invites : { url: '/competitions/{competition_id}/invites', method: HTTP_METHODS.GET },
      sendInvite : { url: '/competitions/{competition_id}/sendInvite', method: HTTP_METHODS.POST },
      acceptInvite : { url: '/competitions/{competition_id}/acceptInvite', method: HTTP_METHODS.POST },
      brackets : { url: '/competitions/{competition_id}/rounds/{round_id}/brackets', method: HTTP_METHODS.GET },
      bracketStore : { url: '/competitions/{competition_id}/rounds/{round_id}/brackets', method: HTTP_METHODS.POST },
      showBracket : { url: '/competitions/{competition_id}/rounds/{round_id}/brackets/{bracket_id}', method: HTTP_METHODS.GET },
      updateBracket : { url: '/competitions/{competition_id}/rounds/{round_id}/brackets/{bracket_id}', method: HTTP_METHODS.PUT },
      destroyBracket : { url: '/competitions/{competition_id}/rounds/{round_id}/brackets/{bracket_id}', method: HTTP_METHODS.DELETE },
      rounds : { url: '/competitions/{competition_id}/rounds', method: HTTP_METHODS.GET },
      roundStore : { url: '/competitions/{competition_id}/rounds', method: HTTP_METHODS.POST },
      showRound : { url: '/competitions/{competition_id}/rounds/{round_id}', method: HTTP_METHODS.GET },
      updateRound : { url: '/competitions/{competition_id}/rounds/{round_id}', method: HTTP_METHODS.PUT },
      destroyRound : { url: '/competitions/{competition_id}/rounds/{round_id}', method: HTTP_METHODS.DELETE },
      team : { url: '/competitions/{competition_id}/teams', method: HTTP_METHODS.GET },
      teamStore : { url: '/competitions/{competition_id}/teams', method: HTTP_METHODS.POST },
      showTeam : { url: '/competitions/{competition_id}/teams/{team_id}', method: HTTP_METHODS.GET },
      updateTeam : { url: '/competitions/{competition_id}/teams/{team_id}', method: HTTP_METHODS.PUT },
      destroyTeam : { url: '/competitions/{competition_id}/teams/{team_id}', method: HTTP_METHODS.DELETE },
      users : { url: '/competitions/{competition_id}/users', method: HTTP_METHODS.GET },
      competitionUser : { url: '/competitions/{competition_id}/users', method: HTTP_METHODS.POST },
      showCompetitionUser : { url: '/competitions/{competition_id}/users/{user_id}', method: HTTP_METHODS.GET },
      updateCompetitionUser : { url: '/competitions/{competition_id}/users/{user_id}', method: HTTP_METHODS.PUT },
      destroyCompetitionUser : { url: '/competitions/{competition_id}/users/{user_id}', method: HTTP_METHODS.DELETE },
      venues : { url: '/competitions/{competition_id}/venues', method: HTTP_METHODS.GET },
      newVenue : { url: '/competitions/{competition_id}/venues', method: HTTP_METHODS.POST },
      showVenue : { url: '/competitions/{competition_id}/venues/{venue_id}', method: HTTP_METHODS.GET },
      updateVenue : { url: '/competitions/{competition_id}/venues/{venue_id}', method: HTTP_METHODS.PUT },
      destroyVenue : { url: '/competitions/{competition_id}/venues/{venue_id}', method: HTTP_METHODS.DELETE },
      uploadVenueMainImage : { url: '/competitions/{competition_id}/venues/{venue_id}/uploadMainImage', method: HTTP_METHODS.POST },
      userPointsLeaderboard : { url: '/competitions/{competition_id}/userPointsLeaderboard', method: HTTP_METHODS.GET },
      teamPointsLeaderboard : { url: '/competitions/{competition_id}/teamPointsLeaderboard', method: HTTP_METHODS.GET },
      userWinsLeaderboard : { url: '/competitions/{competition_id}/userWinsLeaderboard', method: HTTP_METHODS.GET },
      teamWinsLeaderboard : { url: '/competitions/{competition_id}/teamWinsLeaderboard', method: HTTP_METHODS.GET },
      allLeaderboards : { url: '/competitions/{competition_id}/allLeaderboards', method: HTTP_METHODS.GET },
    };


  }

  export default CompetitionRoutes;