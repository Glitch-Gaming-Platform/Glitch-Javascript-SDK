import Requests from "../util/Requests";

/**
 * Config
 * 
 * The configuration class will hold the configuration information used when accessing the
 * API.
 */
class Config {

  private static _baseUrl: string;
  private static _authToken: string;

  private static _baseUrlLocked: boolean = false;

  /**
   * Set the configuration
   * 
   * @param baseUrl The url base endpoint of the api
   * @param authToken The JSON Web Token
   */
  public static setConfig(baseUrl: string, authToken: string, lock? : boolean) {

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
  public static setBaseUrl(baseUrl: string, lock? : boolean) {

    if(!this._baseUrlLocked) {
      Config._baseUrl = baseUrl;

      Requests.setBaseUrl(baseUrl);
    }

    if(lock) {
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
}

export default Config;