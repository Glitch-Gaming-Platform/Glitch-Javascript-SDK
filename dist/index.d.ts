import { AxiosPromise } from 'axios';

/**
 * Config
 *
 * The configuration class will hold the configuration information used when accessing the
 * API.
 */
declare class Config {
    baseUrl: string;
    authToken: string;
    constructor(baseUrl: string, authToken: string);
    setBaseUrl(baseUrl: string): void;
    setAuthToken(authToken: string): void;
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
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authRegister
     *
     * @param data The data the user can register with.
     *
     * @returns A promise
     */
    static register<T>(data: object): AxiosPromise<Response<T>>;
}

declare class Competitions {
    /**
     * List all the competitions
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/resourceList
     *
     * @returns promise
     */
    static list<T>(): AxiosPromise<Response<T>>;
    /**
     * Create a new competition
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/newResourceStorage
     *
     * @param data The date to be passed when creating a competiton.
     *
     * @returns Promise
     */
    static create<T>(data: object): AxiosPromise<Response<T>>;
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
    static update<T>(competition_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/showStorage
     *
     * @param competition_id The id fo the competition to retrieve.
     *
     * @returns promise
     */
    static view<T>(competition_id: string): AxiosPromise<Response<T>>;
    /**
     * Deletes a competition.
     *
     * @see https://api.glitch.fun/api/documentation#/Competitions%20Route/destoryStorage
     *
     * @param competition_id The id of the competition to delete.
     * @returns promise
     */
    static delete<T>(competition_id: string): AxiosPromise<Response<T>>;
}

declare class Users {
    /**
     * List all the users.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/userList
     *
     * @returns promise
     */
    static list<T>(): AxiosPromise<Response<T>>;
    /**
     * Updates a users information. Requires the users JSON Web Token (JWT) for them to update their profile.
     *
     * @see https://api.glitch.fun/api/documentation#/Users%20Route/updateUser
     *
     * @param data The date to be passed when creating a competiton.
     *
     * @returns Promise
     */
    static update<T>(data: object): AxiosPromise<Response<T>>;
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
    static me<T>(): AxiosPromise<Response<T>>;
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
}

declare class Events {
    /**
     * List all the events
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/resourceEventList
     *
     * @returns promise
     */
    static list<T>(): AxiosPromise<Response<T>>;
    /**
     * Create a new event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/newEventResourceStorage
     *
     * @param data The data to be passed when creating an event.
     *
     * @returns Promise
     */
    static create<T>(data: object): AxiosPromise<Response<T>>;
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
    static update<T>(event_id: string, data: object): AxiosPromise<Response<T>>;
    /**
     * Retrieve the information for a single event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/showEventStorage
     *
     * @param event_id The id fo the event to retrieve.
     *
     * @returns promise
     */
    static view<T>(event_id: string): AxiosPromise<Response<T>>;
    /**
     * Deletes a event.
     *
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/destoryEventStorage
     *
     * @param event_id The id of the event to delete.
     * @returns promise
     */
    static delete<T>(event_id: string): AxiosPromise<Response<T>>;
}

declare class Glitch {
    static config: typeof Config;
    static api: {
        Auth: typeof Auth;
        Competitions: typeof Competitions;
        Users: typeof Users;
        Events: typeof Events;
    };
}

export { Glitch };
