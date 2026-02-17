/**
 * Config
 *
 * The configuration class will hold the configuration information used when accessing the
 * API.
 */
declare class Config {
    private static _baseUrl;
    private static _authToken;
    private static _community;
    private static _rootDomain;
    private static _baseUrlLocked;
    /**
     * Set the configuration
     *
     * @param baseUrl The url base endpoint of the api
     * @param authToken The JSON Web Token
     */
    static setConfig(baseUrl: string, authToken: string, lock?: boolean): void;
    /**
     * Sets the endpoint for the API
     *
     * @param baseUrl The url that connects to the APIs base
     * @param lock If set to true, will lock the baseUrl so it cannot be changed
     */
    static setBaseUrl(baseUrl: string, lock?: boolean): void;
    /**
     * Gets the base URL
     */
    static getBaseUrl(): string;
    /**
     * Set the JSON Web Token (JWT) that will be passed to the API
     *
     * @param authToken The JWT
     */
    static setAuthToken(authToken: string): void;
    /**
    * Gets the auth token
    */
    static getAuthToken(): string;
    /**
     * Set the community to be associated with this config through
     *
     * @param community The object of the community
     */
    static setCommunity(community: Record<string, any>): void;
    /**
     * Sets the root level domain so data can be accessed across
     * multiple subdomains
     *
     * @param domain The domain ie: example.com
     */
    static setRootDomain(domain: string): void;
    /**
     * Gets the root domain
     */
    static getRootDomain(): string;
    /**
     * Gets base url
     */
    static get baseUrl(): string;
    /**
     * Gets auth token
     */
    static get authToken(): string;
    /**
     * Gets the community currently associated
     */
    static get getCommunity(): object;
    /**
    * Checks if the base URL is locked
    */
    static isBaseUrlLocked(): boolean;
}
export default Config;
