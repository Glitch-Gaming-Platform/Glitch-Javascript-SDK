class Storage {

    //Back up data type if no storage is working.

    private static data: { [key: string]: any } = {};

  
    public static set(key: string, value: any) {
      try {
        window.localStorage.setItem(key, value);
      } catch (e) {
        try {
          window.sessionStorage.setItem(key, value);
        } catch (e) {
          this.setCookie(key, value, 31);
          //fallback if set cookie fails
          Storage.data[key] = value;
        }
      }
    }
  
    public static get(key: string): any {
      try {
        return window.localStorage.getItem(key);
      } catch (e) {
        try {
          return window.sessionStorage.getItem(key);
        } catch (e) {
          let value = Storage.getCookie(key);
  
          if (!value) {
            value = Storage.data[key];
          }
  
          return value;
        }
      }
    }
  
    public static setAuthToken(token: string | null) {
      Storage.set('glitch_auth_token', token);
    }
  
    public static getAuthToken(): string | null {
      return Storage.get('glitch_auth_token');
    }
  
    private static setCookie(name: string, value: string, days: number) {
      let expires = '';
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
      }
  
      //IFrames require HttpyOnly to be false, Chrome require SameSite to be none, and must be secure
      document.cookie =
        name +
        '=' +
        (value || '') +
        expires +
        '; path=/; HttpOnly=false; SameSite=none; Secure';
    }
  
    private static getCookie(name: string): string | null {
      const nameEQ = name + '=';
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
          return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
  
    public static eraseCookie(name: string) {
      document.cookie =
        name +
        '=; Secure; HttpOnly=false; SameSite=none; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  }
  
  export default Storage;
  