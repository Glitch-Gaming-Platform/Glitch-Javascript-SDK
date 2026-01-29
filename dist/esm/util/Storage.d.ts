declare class Storage {
    private static rootDomain;
    private static data;
    static setRootDomain(rootDomain: string): void;
    private static getStorageKey;
    static set(key: string, value: any): void;
    static get(key: string): any;
    static setAuthToken(token: string | null): void;
    static getAuthToken(): string | null;
    static eraseCookie(name: string): void;
    private static setCookie;
    private static getCookie;
    static setTokenExpiry(expiresInSeconds: number): void;
    static getTokenExpiry(): number | null;
    static isTokenExpired(): boolean;
}
export default Storage;
