declare class Storage {
    private static data;
    static set(key: string, value: any): void;
    static get(key: string): any;
    static setAuthToken(token: string | null): void;
    static getAuthToken(): string | null;
    private static setCookie;
    private static getCookie;
    static eraseCookie(name: string): void;
}
export default Storage;
