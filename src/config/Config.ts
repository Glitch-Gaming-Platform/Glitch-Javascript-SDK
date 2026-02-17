import Community from "../models/community";
import LabelManager from "../util/LabelManager";
import Requests from "../util/Requests";
import Storage from "../util/Storage";

/**
 * Config
 * 
 * The configuration class will hold the configuration information used when accessing the
 * API.
 */
class Config {

  private static _baseUrl: string;
  private static _authToken: string;
  private static _community: object;
  private static _rootDomain: string;

  private static _baseUrlLocked: boolean = false;

  /**
   * Set the configuration
   * 
   * @param baseUrl The url base endpoint of the api
   * @param authToken The JSON Web Token
   */
  public static setConfig(baseUrl: string, authToken: string, lock?: boolean) {

    this.setBaseUrl(baseUrl, lock);

    this.setAuthToken(authToken);

    Requests.setBaseUrl(baseUrl);
    Requests.setAuthToken(authToken);
  }

  /**
   * Sets the endpoint for the API
   * 
   * @param baseUrl The url that connects to the APIs base
   * @param lock If set to true, will lock the baseUrl so it cannot be changed
   */
  public static setBaseUrl(baseUrl: string, lock?: boolean) {

    if (!this._baseUrlLocked) {
      Config._baseUrl = baseUrl;

      Requests.setBaseUrl(baseUrl);
    }

    if (lock) {
      this._baseUrlLocked = true;
    }
  }

  /**
   * Gets the base URL
   */
  public static getBaseUrl(): string {
    return Config._baseUrl;
  }

  /**
   * Set the JSON Web Token (JWT) that will be passed to the API
   * 
   * @param authToken The JWT
   */
  public static setAuthToken(authToken: string) {
    Config._authToken = authToken;

    Requests.setAuthToken(authToken);
  }


  /**
  * Gets the auth token
  */
  public static getAuthToken(): string {
    return Config._authToken;
  }



  /**
   * Set the community to be associated with this config through
   * 
   * @param community The object of the community
   */
  public static setCommunity(community: Record<string, any>) {
    Config._community = community;

    Requests.setCommunityID(community.id);

    LabelManager.initialize(community);
  }


  /**
   * Sets the root level domain so data can be accessed across
   * multiple subdomains
   * 
   * @param domain The domain ie: example.com
   */
  public static setRootDomain(domain: string) {
    if (!domain) {
      console.error("setRootDomain: domain is undefined or null");
      return;
    }

    // If the domain already starts with a dot, keep it.
    // If not, and it's a standard domain, we usually want the dot for subdomains.
    let formattedDomain = domain;

    // REMOVE THIS LINE: formattedDomain = formattedDomain.replace(/^\./, '');
    // We WANT the dot.

    this._rootDomain = formattedDomain;

    Storage.setRootDomain(formattedDomain);
  }

  /**
   * Gets the root domain
   */
  public static getRootDomain(): string {
    return this._rootDomain;
  }

  /**
   * Gets base url
   */
  public static get baseUrl(): string {
    return Config._baseUrl;
  }

  /**
   * Gets auth token
   */
  public static get authToken(): string {
    return Config._authToken;
  }

  /**
   * Gets the community currently associated
   */
  public static get getCommunity(): object {
    return Config._community;
  }

  /**
  * Checks if the base URL is locked
  */
  public static isBaseUrlLocked(): boolean {
    return this._baseUrlLocked;
  }
}

export default Config;