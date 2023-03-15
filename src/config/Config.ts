import Requests from "../util/Requests";

/**
 * Config
 * 
 * The configuration class will hold the configuration information used when accessing the
 * API.
 */
class Config {
    //The base url of the API, ie: http://api.example.com/v1/
    baseUrl: string;

    //The JWT token used to access the api.
    authToken: string;
  
    constructor(baseUrl: string, authToken: string) {
      this.baseUrl = baseUrl;
      this.authToken = authToken;

      Requests.setConfig(this);
    }

    setBaseUrl(baseUrl: string) {
      this.baseUrl = baseUrl;

      Requests.setBaseUrl(baseUrl);
    }

    setAuthToken(authToken: string) {
      this.authToken = authToken;

      Requests.setAuthToken(authToken);
    }

  }

  export default Config;