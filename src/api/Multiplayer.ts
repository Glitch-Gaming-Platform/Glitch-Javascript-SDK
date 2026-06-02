import MultiplayerRoute from "../routes/MultiplayerRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

export type MultiplayerLobbyType = 'public' | 'invisible' | 'friends_only' | 'private';
export type MultiplayerLobbyState = 'waiting' | 'ready' | 'in_game' | 'closed';
export type MultiplayerLobbyMemberStatus = 'joined' | 'left' | 'disconnected' | 'kicked' | 'banned';
export type MultiplayerLobbyMessageType = 'chat' | 'binary' | 'system' | 'ready' | 'invite' | 'kick' | 'voice';
export type MultiplayerServerType = 'dedicated' | 'listen' | 'relay';
export type MultiplayerServerStatus = 'active' | 'available' | 'draining' | 'offline';
export type MultiplayerTransport = 'udp' | 'tcp' | 'webrtc' | 'relay';
export type MultiplayerSessionState = 'reserved' | 'active' | 'released' | 'expired';
export type MultiplayerAuthTicketStatus = 'active' | 'consumed' | 'revoked' | 'expired';
export type MultiplayerFavoriteKind = 'favorite' | 'history';
export type MultiplayerVoiceProvider = 'glitch_relay' | 'external';
export type MultiplayerVoiceTopology = 'lobby' | 'server' | 'party' | 'proximity';
export type MultiplayerVoiceState = 'active' | 'closed';
export type MultiplayerVoiceCodec = 'opus' | 'pcm16' | 'aac';
export type MultiplayerVoiceParticipantStatus = 'joined' | 'left' | 'muted' | 'kicked';
export type MultiplayerVoicePacketType = 'audio' | 'speaking' | 'mute_state' | 'offer' | 'answer' | 'ice' | 'control';

export type MultiplayerMetadata = Record<string, any>;

export interface MultiplayerLobbyMember {
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

export interface MultiplayerServer {
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

export interface MultiplayerLobby {
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

export interface MultiplayerLobbyMessage {
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

export interface MultiplayerSession {
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

export interface MultiplayerAuthTicket {
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

export interface MultiplayerServerFavorite {
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

export interface MultiplayerVoiceParticipant {
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

export interface MultiplayerVoiceRoom {
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

export interface MultiplayerVoicePacket {
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

export interface MultiplayerLobbySearchParams {
    region?: string;
    game_mode?: string;
    map_name?: string;
    lobby_type?: MultiplayerLobbyType;
    skill_band?: number;
    limit?: number;
}

export interface MultiplayerCreateLobbyRequest {
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

export interface MultiplayerJoinLobbyRequest {
    player_id?: string;
    display_name?: string;
    ready?: boolean;
    member_data?: MultiplayerMetadata;
}

export interface MultiplayerLeaveLobbyRequest {
    player_id?: string;
}

export interface MultiplayerUpdateLobbyRequest {
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

export interface MultiplayerSetLobbyServerRequest {
    player_id?: string;
    server_id: string;
    state?: MultiplayerLobbyState;
    joinable?: boolean;
}

export interface MultiplayerLobbyMessagesParams {
    after_sequence?: number;
    limit?: number;
}

export interface MultiplayerSendLobbyMessageRequest {
    player_id?: string;
    message_type?: MultiplayerLobbyMessageType;
    payload: MultiplayerMetadata;
}

export interface MultiplayerServerBrowserParams {
    region?: string;
    build_version?: string;
    transport?: MultiplayerTransport;
    status?: MultiplayerServerStatus;
    secure?: boolean;
    include_private?: boolean;
    limit?: number;
}

export interface MultiplayerRegisterServerRequest {
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

export interface MultiplayerRegisterServerResponse {
    server: MultiplayerServer;
    server_token: string;
}

export interface MultiplayerServerHeartbeatRequest {
    server_token: string;
    status?: MultiplayerServerStatus;
    current_players?: number;
    bot_players?: number;
    rules?: MultiplayerMetadata;
    metadata?: MultiplayerMetadata;
}

export interface MultiplayerReserveServerRequest {
    player_id?: string;
    lobby_id?: string;
    ttl_minutes?: number;
}

export interface MultiplayerReserveServerResponse {
    session: MultiplayerSession;
    reservation_token: string;
}

export interface MultiplayerSessionHeartbeatRequest {
    reservation_token: string;
    state?: Extract<MultiplayerSessionState, 'reserved' | 'active'>;
    ttl_minutes?: number;
}

export interface MultiplayerSessionReleaseRequest {
    reservation_token: string;
}

export interface MultiplayerIssueAuthTicketRequest {
    player_id?: string;
    remote_identity?: string;
    ttl_minutes?: number;
}

export interface MultiplayerIssueAuthTicketResponse {
    ticket: MultiplayerAuthTicket;
    auth_ticket: string;
}

export interface MultiplayerValidateAuthTicketRequest {
    auth_ticket: string;
    remote_identity?: string;
    consume?: boolean;
}

export interface MultiplayerValidateAuthTicketForServerRequest extends MultiplayerValidateAuthTicketRequest {
    server_token: string;
}

export interface MultiplayerValidateAuthTicketResponse {
    valid: boolean;
    ticket: MultiplayerAuthTicket;
}

export interface MultiplayerFavoritesParams {
    player_id?: string;
    kind?: MultiplayerFavoriteKind;
}

export interface MultiplayerFavoriteRequest {
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

export interface MultiplayerDeleteFavoriteParams {
    player_id?: string;
}

export interface MultiplayerDeleteFavoriteResponse {
    deleted: boolean;
}

export interface MultiplayerVoiceRoomListParams {
    lobby_id?: string;
    server_id?: string;
    provider?: MultiplayerVoiceProvider;
    topology?: MultiplayerVoiceTopology;
    state?: MultiplayerVoiceState;
    region?: string;
    limit?: number;
}

export interface MultiplayerCreateVoiceRoomRequest {
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

export interface MultiplayerUpdateVoiceRoomRequest {
    player_id?: string;
    state?: MultiplayerVoiceState;
    max_participants?: number;
    recording_allowed?: boolean;
    moderation_enabled?: boolean;
    connection_config?: MultiplayerMetadata;
    metadata?: MultiplayerMetadata;
    expires_at?: string;
}

export interface MultiplayerJoinVoiceRoomRequest {
    player_id?: string;
    display_name?: string;
    metadata?: MultiplayerMetadata;
    ttl_minutes?: number;
}

export interface MultiplayerVoiceRoomTokenResponse {
    voice_room: MultiplayerVoiceRoom;
    participant: MultiplayerVoiceParticipant;
    voice_token: string;
}

export interface MultiplayerVoiceHeartbeatRequest {
    voice_token: string;
    muted?: boolean;
    deafened?: boolean;
    speaking?: boolean;
    last_sequence?: number;
    ttl_minutes?: number;
}

export interface MultiplayerVoiceLeaveRequest {
    voice_token: string;
}

export interface MultiplayerVoicePacketRequest {
    voice_token: string;
    packet_type?: MultiplayerVoicePacketType;
    payload: string;
    duration_ms?: number;
}

export interface MultiplayerVoicePollRequest {
    voice_token: string;
    after_sequence?: number;
    limit?: number;
    exclude_self?: boolean;
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
class Multiplayer {

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
    public static searchLobbies<T = MultiplayerLobby[]>(title_id: string, params?: MultiplayerLobbySearchParams): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.searchLobbies, undefined, { title_id }, params);
    }

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
    public static createLobby<T = MultiplayerLobby>(title_id: string, data: MultiplayerCreateLobbyRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.createLobby, data, { title_id });
    }

    /**
     * Retrieve a lobby with members and assigned server information when present.
     *
     * Call this after lobby lifecycle notifications such as `lobby.joined`,
     * `lobby.updated`, `lobby.owner_transferred`, or `lobby.server_assigned`.
     *
     * @param title_id Title UUID.
     * @param lobby_id Lobby UUID.
     */
    public static showLobby<T = MultiplayerLobby>(title_id: string, lobby_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.showLobby, undefined, { title_id, lobby_id });
    }

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
    public static joinLobby<T = MultiplayerLobbyMember>(title_id: string, lobby_id: string, data: MultiplayerJoinLobbyRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.joinLobby, data, { title_id, lobby_id });
    }

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
    public static leaveLobby<T = MultiplayerLobbyMember | null>(title_id: string, lobby_id: string, data?: MultiplayerLeaveLobbyRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.leaveLobby, data, { title_id, lobby_id });
    }

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
    public static updateLobby<T = MultiplayerLobby>(title_id: string, lobby_id: string, data: MultiplayerUpdateLobbyRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.updateLobby, data, { title_id, lobby_id });
    }

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
    public static setLobbyServer<T = MultiplayerLobby>(title_id: string, lobby_id: string, data: MultiplayerSetLobbyServerRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.setLobbyServer, data, { title_id, lobby_id });
    }

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
    public static listLobbyMessages<T = MultiplayerLobbyMessage[]>(title_id: string, lobby_id: string, params?: MultiplayerLobbyMessagesParams): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.listLobbyMessages, undefined, { title_id, lobby_id }, params);
    }

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
    public static sendLobbyMessage<T = MultiplayerLobbyMessage>(title_id: string, lobby_id: string, data: MultiplayerSendLobbyMessageRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.sendLobbyMessage, data, { title_id, lobby_id });
    }

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
    public static listVoiceRooms<T = MultiplayerVoiceRoom[]>(title_id: string, params?: MultiplayerVoiceRoomListParams): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.listVoiceRooms, undefined, { title_id }, params);
    }

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
    public static createVoiceRoom<T = MultiplayerVoiceRoomTokenResponse>(title_id: string, data: MultiplayerCreateVoiceRoomRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.createVoiceRoom, data, { title_id });
    }

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
    public static showVoiceRoom<T = MultiplayerVoiceRoom>(title_id: string, voice_room_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.showVoiceRoom, undefined, { title_id, voice_room_id });
    }

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
    public static updateVoiceRoom<T = MultiplayerVoiceRoom>(title_id: string, voice_room_id: string, data: MultiplayerUpdateVoiceRoomRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.updateVoiceRoom, data, { title_id, voice_room_id });
    }

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
    public static joinVoiceRoom<T = MultiplayerVoiceRoomTokenResponse>(title_id: string, voice_room_id: string, data: MultiplayerJoinVoiceRoomRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.joinVoiceRoom, data, { title_id, voice_room_id });
    }

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
    public static heartbeatVoice<T = MultiplayerVoiceParticipant>(data: MultiplayerVoiceHeartbeatRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.heartbeatVoice, data);
    }

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
    public static leaveVoice<T = MultiplayerVoiceParticipant>(data: MultiplayerVoiceLeaveRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.leaveVoice, data);
    }

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
    public static sendVoicePacket<T = MultiplayerVoicePacket>(data: MultiplayerVoicePacketRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.sendVoicePacket, data);
    }

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
    public static pollVoicePackets<T = MultiplayerVoicePacket[]>(data: MultiplayerVoicePollRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.pollVoicePackets, data);
    }

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
    public static browseServers<T = MultiplayerServer[]>(title_id: string, params?: MultiplayerServerBrowserParams): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.browseServers, undefined, { title_id }, params);
    }

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
    public static registerServer<T = MultiplayerRegisterServerResponse>(title_id: string, data: MultiplayerRegisterServerRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.registerServer, data, { title_id });
    }

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
    public static heartbeatServer<T = MultiplayerServer>(title_id: string, server_id: string, data: MultiplayerServerHeartbeatRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.heartbeatServer, data, { title_id, server_id });
    }

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
    public static reserveServer<T = MultiplayerReserveServerResponse>(title_id: string, server_id: string, data?: MultiplayerReserveServerRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.reserveServer, data, { title_id, server_id });
    }

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
    public static heartbeatSession<T = MultiplayerSession>(data: MultiplayerSessionHeartbeatRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.heartbeatSession, data);
    }

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
    public static releaseSession<T = MultiplayerSession>(data: MultiplayerSessionReleaseRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.releaseSession, data);
    }

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
    public static issueAuthTicket<T = MultiplayerIssueAuthTicketResponse>(title_id: string, data?: MultiplayerIssueAuthTicketRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.issueAuthTicket, data, { title_id });
    }

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
    public static validateAuthTicket<T = MultiplayerValidateAuthTicketResponse>(title_id: string, data: MultiplayerValidateAuthTicketRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.validateAuthTicket, data, { title_id });
    }

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
    public static validateAuthTicketForServer<T = MultiplayerValidateAuthTicketResponse>(title_id: string, server_id: string, data: MultiplayerValidateAuthTicketForServerRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.validateAuthTicketForServer, data, { title_id, server_id });
    }

    /**
     * List a player's server favorites or history entries.
     *
     * Use this for Steam-like favorites and recent servers tabs. Title-token
     * clients should pass `player_id`; user JWT clients default to the user UUID.
     *
     * @param title_id Title UUID.
     * @param params Optional player and favorite/history filter.
     */
    public static listFavorites<T = MultiplayerServerFavorite[]>(title_id: string, params?: MultiplayerFavoritesParams): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.listFavorites, undefined, { title_id }, params);
    }

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
    public static addFavorite<T = MultiplayerServerFavorite>(title_id: string, data: MultiplayerFavoriteRequest): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.addFavorite, data, { title_id });
    }

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
    public static deleteFavorite<T = MultiplayerDeleteFavoriteResponse>(title_id: string, favorite_id: string, params?: MultiplayerDeleteFavoriteParams): AxiosPromise<Response<T>> {
        return Requests.processRoute(MultiplayerRoute.routes.deleteFavorite, undefined, { title_id, favorite_id }, params);
    }

}

export default Multiplayer;
