import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class RafflesRoute {
    public static routes: { [key: string]: Route } = {
        list: { url: '/raffles', method: HTTP_METHODS.GET },
        create: { url: '/raffles', method: HTTP_METHODS.POST },
        view: { url: '/raffles/{id}', method: HTTP_METHODS.GET },
        update: { url: '/raffles/{id}', method: HTTP_METHODS.PUT },
        enter: { url: '/raffles/{id}/enter', method: HTTP_METHODS.POST },
        me: { url: '/raffles/{id}/me', method: HTTP_METHODS.GET },
        performAction: { url: '/raffles/{id}/actions', method: HTTP_METHODS.POST },
        shareSocially: { url: '/raffles/{id}/share', method: HTTP_METHODS.POST },
        inviteFriend: { url: '/raffles/{id}/invite-friend', method: HTTP_METHODS.POST },
        
        // Prize Management
        addPrize: { url: '/raffles/{id}/prizes', method: HTTP_METHODS.POST },
        
        // Drawing & Winners
        drawWinners: { url: '/raffles/{id}/draw', method: HTTP_METHODS.POST },
        pickWinner: { url: '/raffles/{id}/pick-winner', method: HTTP_METHODS.POST },
        winners: { url: '/raffles/{id}/winners', method: HTTP_METHODS.GET },
        
        // Participant & Fulfillment Management
        participants: { url: '/raffles/{id}/participants', method: HTTP_METHODS.GET },
        fulfillPrize: { url: '/raffles/entries/{entry_id}/fulfill', method: HTTP_METHODS.PUT },
        updateAddress: { url: '/raffles/entries/{entry_id}/address', method: HTTP_METHODS.PUT },
        disqualify: { url: '/raffles/{id}/disqualify/{entry_id}', method: HTTP_METHODS.POST },
        
        // Analytics & Finance
        escrowStatus: { url: '/raffles/{id}/escrow', method: HTTP_METHODS.GET },
        analytics: { url: '/raffles/{id}/analytics', method: HTTP_METHODS.GET },
    };
}

export default RafflesRoute;