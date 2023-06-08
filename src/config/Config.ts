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
   * Set the JSON Web Token (JWT) that will be passed to the API
   * 
   * @param authToken The JWT
   */
  public static setAuthToken(authToken: string) {
    Config._authToken = authToken;

    Requests.setAuthToken(authToken);
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
   * Sets the root level domain so data can accessed across
   * multiple subdomains
   * 
   * @param domain The domain ie: example.com
   */
  public static setRootDomain(domain: string) {

    const parts = domain.split('.');

    if (parts.length > 2) {
      parts.shift();
    }

    let formattedDomain = parts.join('.');

    formattedDomain = formattedDomain.replace(/^\./, '');

    this._rootDomain = formattedDomain;

    Storage.setRootDomain(formattedDomain);
  }

  public static getRootDomain() {
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
}

export default Config;