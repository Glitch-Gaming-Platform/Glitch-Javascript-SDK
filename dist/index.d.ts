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
    static login(login: string, password: string): Promise<Response<unknown>>;
    static register(data: object): Promise<Response<unknown> | undefined>;
}

declare class Competitions {
    static list(): Promise<Response<unknown> | undefined>;
    static create(data: object): Promise<Response<unknown> | undefined>;
    static update(competition_id: string, data: object): Promise<Response<unknown> | undefined>;
    static view(competition_id: string): Promise<Response<unknown> | undefined>;
    static delete(competition_id: string): Promise<Response<unknown> | undefined>;
}

declare class Glitch {
    static config: typeof Config;
    static auth: typeof Auth;
    static competitions: typeof Competitions;
}

export { Glitch };
