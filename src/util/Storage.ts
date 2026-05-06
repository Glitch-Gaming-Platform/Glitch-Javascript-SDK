class Storage {
  private static rootDomain: string = '';
  private static data: { [key: string]: any } = {};

  private static crossDomainKeys = new Set([
    'glitch_auth_token',
    'glitch_token_expiry',
    'user_id',
    'user_first_name',
    'user_last_name',
    'username',
    'email',
    'session_id',
    'community_id',
  ]);

  public static setRootDomain(rootDomain: string) {
    Storage.rootDomain = rootDomain;
  }

  private static getStorageKey(key: string): string {
    return Storage.rootDomain ? `${Storage.rootDomain}:${key}` : key;
  }

  private static shouldShareAcrossSubdomains(key: string): boolean {
    return !!Storage.rootDomain && Storage.crossDomainKeys.has(key);
  }

  public static set(key: string, value: any) {
    Storage.data[key] = value;

    if (typeof window !== 'undefined') {
      try {
        const serializedValue = JSON.stringify(value);
        window.localStorage.setItem(Storage.getStorageKey(key), serializedValue);
      } catch (e) {
        try {
          const serializedValue = JSON.stringify(value);
          window.sessionStorage.setItem(Storage.getStorageKey(key), serializedValue);
        } catch (e) {}
      }
    }

    // Important: shared session keys must be written to a root-domain cookie.
    if (Storage.shouldShareAcrossSubdomains(key)) {
      if (value === null || value === undefined) {
        Storage.eraseCookie(key);
      } else {
        Storage.setCookie(key, value, 31);
      }
    }
  }

  public static get(key: string): any {
    // Important: for shared session keys, cookie must win over localStorage.
    // Otherwise stale www.glitch.fun localStorage can override the real shared cookie.
    if (Storage.shouldShareAcrossSubdomains(key)) {
      try {
        const cookieValue = Storage.getCookie(key);
        if (cookieValue !== null && cookieValue !== undefined && cookieValue !== 'null') {
          return cookieValue;
        }
      } catch (e) {}
    }

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

    try {
      const cookieValue = Storage.getCookie(key);
      if (cookieValue !== null && cookieValue !== undefined && cookieValue !== 'null') {
        return cookieValue;
      }
    } catch (e) {}

    return Storage.data[key];
  }

  public static setAuthToken(token: string | null) {
    Storage.set('glitch_auth_token', token);
  }

  public static getAuthToken(): string | null {
    const token = Storage.get('glitch_auth_token');
    return token === 'null' || !token ? null : token;
  }

  public static eraseCookie(name: string) {
    if (typeof document === 'undefined') return;

    // Clear host-only cookie.
    document.cookie =
      `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; Secure`;

    // Clear root-domain cookie.
    if (Storage.rootDomain) {
      document.cookie =
        `${name}=; Path=/; Domain=${Storage.rootDomain}; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; Secure`;
    }
  }

  private static setCookie(name: string, value: any, days: number) {
    let expires = '';

    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; Expires=' + date.toUTCString();
    }

    if (typeof document !== 'undefined') {
      const encodedValue = encodeURIComponent(JSON.stringify(value));

      document.cookie =
        `${name}=${encodedValue}${expires}; Path=/; Domain=${Storage.rootDomain}; SameSite=Lax; Secure`;
    }
  }

  private static getCookie(name: string): any {
    if (typeof document !== 'undefined') {
      const nameEQ = name + '=';
      const ca = document.cookie.split(';');

      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length);
        }

        if (c.indexOf(nameEQ) === 0) {
          const rawValue = c.substring(nameEQ.length, c.length);

          try {
            const decodedValue = decodeURIComponent(rawValue);
            return JSON.parse(decodedValue);
          } catch (e) {
            try {
              return decodeURIComponent(rawValue);
            } catch (e2) {
              return rawValue;
            }
          }
        }
      }
    }

    return null;
  }

  public static setTokenExpiry(expiresInSeconds: number) {
    const expiryTime = Date.now() + expiresInSeconds * 1000;
    Storage.set('glitch_token_expiry', expiryTime);
  }

  public static getTokenExpiry(): number | null {
    const expiry = Storage.get('glitch_token_expiry');
    return expiry ? parseInt(String(expiry), 10) : null;
  }

  public static isTokenExpired(): boolean {
    const expiry = this.getTokenExpiry();
    if (!expiry) return false;
    return Date.now() > expiry;
  }
}

export default Storage;