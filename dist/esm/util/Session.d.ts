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
    /**
     * Generate a tracking token for analytics collection
     * @param titleId The title ID to generate token for
     * @param secret The secret key (should match server config)
     * @returns HMAC-SHA256 token
     * @throws Error if crypto operations fail
     */
    static generateTrackingToken(titleId: string, secret: string): string;
}
export default Session;
