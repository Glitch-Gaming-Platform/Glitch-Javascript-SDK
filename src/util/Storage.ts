class Storage {
  private static rootDomain: string = '';
  private static data: { [key: string]: any } = {};

  public static setRootDomain(rootDomain: string) {
    Storage.rootDomain = rootDomain;
  }

  private static getStorageKey(key: string): string {
    return Storage.rootDomain ? `${Storage.rootDomain}:${key}` : key;
  }

  public static set(key: string, value: any) {
    // 1. Always update in-memory fallback for the current process
    Storage.data[key] = value;

    // 2. Only attempt browser storage if window exists
    if (typeof window !== 'undefined') {
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
          } catch (e) {}
        }
      }
    }
  }

  public static get(key: string): any {
    // 1. Try Browser Storage if available
    if (typeof window !== 'undefined') {
      try {
        const serializedValue = window.localStorage.getItem(Storage.getStorageKey(key));
        if (serializedValue !== null) return JSON.parse(serializedValue);
      } catch (e) {
        try {
          const serializedValue = window.sessionStorage.getItem(Storage.getStorageKey(key));
          if (serializedValue !== null) return JSON.parse(serializedValue);
        } catch (e) {}
      }
    }

    // 2. Try Cookie (getCookie is now SSR safe)
    let value = null;
    try {
      value = Storage.getCookie(key);
    } catch (e) {}

    // 3. Fallback to in-memory data
    if (!value) {
      value = Storage.data[key];
    }
    return value;
  }

  public static setAuthToken(token: string | null) {
    if (Storage.rootDomain) {
      if (token) {
        this.setCookie('glitch_auth_token', token, 31);
      } else {
        this.eraseCookie('glitch_auth_token');
      }
    }
    Storage.set('glitch_auth_token', token);
  }

  public static getAuthToken(): string | null {
    let token = Storage.getCookie('glitch_auth_token');

    if (!token || token === 'null') {
      token = Storage.get('glitch_auth_token');
    }

    return (token === 'null' || !token) ? null : token;
  }

  public static eraseCookie(name: string) {
    // Use typeof check to prevent ReferenceError
    if (typeof document !== 'undefined') {
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
    // Use typeof check to prevent ReferenceError
    if (typeof document !== 'undefined') {
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
    if (!expiry) return false;
    return Date.now() > expiry;
  }
}

export default Storage;