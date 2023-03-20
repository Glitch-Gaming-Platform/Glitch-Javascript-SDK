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
    static end(): void;
    static processAuthentication(data: {
        token: {
            access_token: string;
        };
        id: string;
        first_name: string;
        last_name: string;
        email: string;
    }): void;
}
export default Session;
