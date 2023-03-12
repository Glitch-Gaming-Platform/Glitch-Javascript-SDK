import Requests from "../util/Requests";

class Config {
    baseUrl: string;
    authToken: string;
  
    constructor(baseUrl: string, authToken: string) {
      this.baseUrl = baseUrl;
      this.authToken = authToken;

      Requests.setConfig(this);
    }

    setBaseUrl(baseUrl: string) {
      this.baseUrl = baseUrl;
    }

    setAuthToken(authToken: string) {
      this.authToken = authToken;
    }

  }

  export default Config;