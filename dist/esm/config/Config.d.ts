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
export default Config;
