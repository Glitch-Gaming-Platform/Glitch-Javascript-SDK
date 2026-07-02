import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class MultiplayerRoute {

  public static routes: { [key: string]: Route } = {
    searchLobbies: { url: '/titles/{title_id}/multiplayer/lobbies', method: HTTP_METHODS.GET },
    createLobby: { url: '/titles/{title_id}/multiplayer/lobbies', method: HTTP_METHODS.POST },
    showLobby: { url: '/titles/{title_id}/multiplayer/lobbies/{lobby_id}', method: HTTP_METHODS.GET },
    updateLobby: { url: '/titles/{title_id}/multiplayer/lobbies/{lobby_id}', method: HTTP_METHODS.PUT },
    joinLobby: { url: '/titles/{title_id}/multiplayer/lobbies/{lobby_id}/join', method: HTTP_METHODS.POST },
    leaveLobby: { url: '/titles/{title_id}/multiplayer/lobbies/{lobby_id}/leave', method: HTTP_METHODS.POST },
    setLobbyServer: { url: '/titles/{title_id}/multiplayer/lobbies/{lobby_id}/server', method: HTTP_METHODS.POST },
    listLobbyMessages: { url: '/titles/{title_id}/multiplayer/lobbies/{lobby_id}/messages', method: HTTP_METHODS.GET },
    sendLobbyMessage: { url: '/titles/{title_id}/multiplayer/lobbies/{lobby_id}/messages', method: HTTP_METHODS.POST },

    listVoiceRooms: { url: '/titles/{title_id}/multiplayer/voice/rooms', method: HTTP_METHODS.GET },
    createVoiceRoom: { url: '/titles/{title_id}/multiplayer/voice/rooms', method: HTTP_METHODS.POST },
    showVoiceRoom: { url: '/titles/{title_id}/multiplayer/voice/rooms/{voice_room_id}', method: HTTP_METHODS.GET },
    updateVoiceRoom: { url: '/titles/{title_id}/multiplayer/voice/rooms/{voice_room_id}', method: HTTP_METHODS.PUT },
    joinVoiceRoom: { url: '/titles/{title_id}/multiplayer/voice/rooms/{voice_room_id}/join', method: HTTP_METHODS.POST },
    heartbeatVoice: { url: '/multiplayer/voice/heartbeat', method: HTTP_METHODS.POST },
    leaveVoice: { url: '/multiplayer/voice/leave', method: HTTP_METHODS.POST },
    sendVoicePacket: { url: '/multiplayer/voice/packets', method: HTTP_METHODS.POST },
    pollVoicePackets: { url: '/multiplayer/voice/poll', method: HTTP_METHODS.POST },

    browseServers: { url: '/titles/{title_id}/multiplayer/servers', method: HTTP_METHODS.GET },
    registerServer: { url: '/titles/{title_id}/multiplayer/servers', method: HTTP_METHODS.POST },
    heartbeatServer: { url: '/titles/{title_id}/multiplayer/servers/{server_id}/heartbeat', method: HTTP_METHODS.POST },
    reserveServer: { url: '/titles/{title_id}/multiplayer/servers/{server_id}/reserve', method: HTTP_METHODS.POST },

    heartbeatSession: { url: '/multiplayer/sessions/heartbeat', method: HTTP_METHODS.POST },
    releaseSession: { url: '/multiplayer/sessions/release', method: HTTP_METHODS.POST },

    issueAuthTicket: { url: '/titles/{title_id}/multiplayer/auth-tickets', method: HTTP_METHODS.POST },
    validateAuthTicket: { url: '/titles/{title_id}/multiplayer/auth-tickets/validate', method: HTTP_METHODS.POST },
    validateAuthTicketForServer: { url: '/titles/{title_id}/multiplayer/servers/{server_id}/auth-tickets/validate', method: HTTP_METHODS.POST },

    listFavorites: { url: '/titles/{title_id}/multiplayer/favorites', method: HTTP_METHODS.GET },
    addFavorite: { url: '/titles/{title_id}/multiplayer/favorites', method: HTTP_METHODS.POST },
    deleteFavorite: { url: '/titles/{title_id}/multiplayer/favorites/{favorite_id}', method: HTTP_METHODS.DELETE },

    // MMO world layer: realms, zones, instances, presence.
    listRealms: { url: '/titles/{title_id}/multiplayer/realms', method: HTTP_METHODS.GET },
    createRealm: { url: '/titles/{title_id}/multiplayer/realms', method: HTTP_METHODS.POST },
    showRealm: { url: '/titles/{title_id}/multiplayer/realms/{realm_id}', method: HTTP_METHODS.GET },
    updateRealm: { url: '/titles/{title_id}/multiplayer/realms/{realm_id}', method: HTTP_METHODS.PUT },
    listZones: { url: '/titles/{title_id}/multiplayer/realms/{realm_id}/zones', method: HTTP_METHODS.GET },
    createZone: { url: '/titles/{title_id}/multiplayer/realms/{realm_id}/zones', method: HTTP_METHODS.POST },
    listInstances: { url: '/titles/{title_id}/multiplayer/zones/{zone_id}/instances', method: HTTP_METHODS.GET },
    showInstance: { url: '/titles/{title_id}/multiplayer/instances/{instance_id}', method: HTTP_METHODS.GET },
    listInstancePresence: { url: '/titles/{title_id}/multiplayer/instances/{instance_id}/presence', method: HTTP_METHODS.GET },
    enterZone: { url: '/titles/{title_id}/multiplayer/world/enter', method: HTTP_METHODS.POST },
    updatePresence: { url: '/titles/{title_id}/multiplayer/world/presence', method: HTTP_METHODS.POST },
    leaveWorld: { url: '/titles/{title_id}/multiplayer/world/leave', method: HTTP_METHODS.POST },

    // Ticketed matchmaking.
    enqueueTicket: { url: '/titles/{title_id}/multiplayer/matchmaking/tickets', method: HTTP_METHODS.POST },
    showTicket: { url: '/titles/{title_id}/multiplayer/matchmaking/tickets/{ticket_id}', method: HTTP_METHODS.GET },
    cancelTicket: { url: '/titles/{title_id}/multiplayer/matchmaking/tickets/{ticket_id}', method: HTTP_METHODS.DELETE },

    // Real-time negotiate + trust/moderation.
    negotiateRealtime: { url: '/titles/{title_id}/multiplayer/realtime/negotiate', method: HTTP_METHODS.POST },
    listBans: { url: '/titles/{title_id}/multiplayer/bans', method: HTTP_METHODS.GET },
    createBan: { url: '/titles/{title_id}/multiplayer/bans', method: HTTP_METHODS.POST },
    deleteBan: { url: '/titles/{title_id}/multiplayer/bans/{ban_id}', method: HTTP_METHODS.DELETE },
  };

}

export default MultiplayerRoute;
