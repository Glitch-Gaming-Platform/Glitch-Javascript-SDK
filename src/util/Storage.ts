class Storage {
  private static rootDomain: string = '';
  private static data: { [key: string]: any } = {};

  /**
   * Sets a root level domain so the data can persist across
   * subdomains
   * 
   * @param rootDomain
   */
  public static setRootDomain(rootDomain: string) {
    Storage.rootDomain = rootDomain;
  }

  private static getStorageKey(key: string): string {
    return Storage.rootDomain ? `${Storage.rootDomain}:${key}` : key;
  }

  public static set(key: string, value: any) {
    try {
      const serializedValue = JSON.stringify(value);
      window.localStorage.setItem(Storage.getStorageKey(key), serializedValue);
    } catch (e) {
      try {
        const serializedValue = JSON.stringify(value);
        window.sessionStorage.setItem(Storage.getStorageKey(key), serializedValue);
      } catch (e) {
        try {
          this.setCookie(key, value, 31);
        } catch (e) {

        }
        Storage.data[key] = value;
      }
    }
  }

  public static get(key: string): any {
    try {
      const serializedValue = window.localStorage.getItem(Storage.getStorageKey(key));
      if (serializedValue !== null) {
        return JSON.parse(serializedValue);
      }
    } catch (e) {
      try {
        const serializedValue = window.sessionStorage.getItem(Storage.getStorageKey(key));
        if (serializedValue !== null) {
          return JSON.parse(serializedValue);
        }
      } catch (e) {
        let value = null;

        try {
          value = Storage.getCookie(key);
        } catch (e) {

        }

        if (!value) {
          value = Storage.data[key];
        }
        return value;
      }
    }
  }

  public static setAuthToken(token: string | null) {
    // Always set the cookie if we have a root domain to ensure cross-subdomain sync
    if (Storage.rootDomain) {
      if (token) {
        this.setCookie('glitch_auth_token', token, 31);
      } else {
        this.eraseCookie('glitch_auth_token');
      }
    }
    // Still set localStorage for the current domain
    Storage.set('glitch_auth_token', token);
  }

  public static getAuthToken(): string | null {
    // 1. Try Cookie first (best for cross-subdomain)
    let token = Storage.getCookie('glitch_auth_token');

    // 2. Fallback to LocalStorage
    if (!token || token === 'null') {
      token = Storage.get('glitch_auth_token');
    }

    return (token === 'null' || !token) ? null : token;
  }

  public static eraseCookie(name: string) {

    if (document) {
      document.cookie =
        name +
        '=; Secure; HttpOnly=false; SameSite=none; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  }

  private static setCookie(name: string, value: string, days: number) {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + date.toUTCString();
    }

    if (typeof document !== 'undefined') {
      // If rootDomain is .glitch.fun, this works for all subdomains
      document.cookie =
        name +
        '=' +
        (value || '') +
        expires +
        '; path=/; domain=' +
        Storage.rootDomain +
        '; SameSite=Lax; Secure';
    }
  }

  private static getCookie(name: string): string | null {
    if (document) {
      const nameEQ = name + '=';
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }

  public static setTokenExpiry(expiresInSeconds: number) {
    const expiryTime = Date.now() + (expiresInSeconds * 1000);
    Storage.set('glitch_token_expiry', expiryTime);

    // Also set a cookie for cross-subdomain consistency if rootDomain exists
    if (Storage.rootDomain && typeof document !== 'undefined') {
      this.setCookie('glitch_token_expiry', expiryTime.toString(), 31);
    }
  }

  public static getTokenExpiry(): number | null {
    let expiry = Storage.getCookie('glitch_token_expiry');
    if (!expiry) {
      expiry = Storage.get('glitch_token_expiry');
    }
    return expiry ? parseInt(expiry) : null;
  }

  public static isTokenExpired(): boolean {
    const expiry = this.getTokenExpiry();
    if (!expiry) return false; // If no expiry set, assume valid or let API handle 401

    return Date.now() > expiry;
  }
}

export default Storage;
