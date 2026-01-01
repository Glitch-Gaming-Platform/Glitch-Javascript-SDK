import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class RafflesRoute {

  public static routes: { [key: string]: Route } = {
    // CRUD
    list: { url: '/raffles', method: HTTP_METHODS.GET },
    create: { url: '/raffles', method: HTTP_METHODS.POST },
    view: { url: '/raffles/{raffle_id}', method: HTTP_METHODS.GET },
    update: { url: '/raffles/{raffle_id}', method: HTTP_METHODS.PUT },
    delete: { url: '/raffles/{raffle_id}', method: HTTP_METHODS.DELETE },

    // User/Player Actions
    enter: { url: '/raffles/{raffle_id}/enter', method: HTTP_METHODS.POST },
    performAction: { url: '/raffles/{raffle_id}/actions', method: HTTP_METHODS.POST },
    me: { url: '/raffles/{raffle_id}/me', method: HTTP_METHODS.GET },
    updateAddress: { url: '/raffles/entries/{entry_id}/address', method: HTTP_METHODS.PUT },
    inviteFriend: { url: '/raffles/{raffle_id}/invite-friend', method: HTTP_METHODS.POST },
    winners: { url: '/raffles/{raffle_id}/winners', method: HTTP_METHODS.GET },

    // Admin/Developer Actions
    addPrize: { url: '/raffles/{raffle_id}/prizes', method: HTTP_METHODS.POST },
    drawWinners: { url: '/raffles/{raffle_id}/draw', method: HTTP_METHODS.POST },
    pickWinner: { url: '/raffles/{raffle_id}/pick-winner', method: HTTP_METHODS.POST },
    fulfillPrize: { url: '/raffles/entries/{entry_id}/fulfill', method: HTTP_METHODS.PUT },
    disqualify: { url: '/raffles/{raffle_id}/disqualify/{entry_id}', method: HTTP_METHODS.POST },
    participants: { url: '/raffles/{raffle_id}/participants', method: HTTP_METHODS.GET },
    escrowStatus: { url: '/raffles/{raffle_id}/escrow', method: HTTP_METHODS.GET },
    analytics: { url: '/raffles/{raffle_id}/analytics', method: HTTP_METHODS.GET },
  };

}

export default RafflesRoute;