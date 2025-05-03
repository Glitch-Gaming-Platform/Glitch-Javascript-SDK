import { Config } from "../config";
import Storage from "./Storage";

// Type declarations for crypto functionality
interface HmacInterface {
  update(data: string): HmacInterface;
  digest(encoding: 'hex'): string;
}

interface CryptoInterface {
  createHmac(algorithm: string, secret: string): HmacInterface;
}

// Browser implementation using crypto-js
class BrowserCrypto implements CryptoInterface {
  createHmac(algorithm: string, secret: string): HmacInterface {
    const CryptoJS = require('crypto-js');
    
    let data = '';
    
    const hmac: HmacInterface = {
      update: (updateData: string): HmacInterface => {
        data = updateData;
        return hmac;
      },
      digest: (encoding: 'hex'): string => {
        if (encoding !== 'hex') {
          throw new Error('Only hex encoding is supported in browser implementation');
        }
        return CryptoJS.HmacSHA256(data, secret).toString(CryptoJS.enc.Hex);
      }
    };
    
    return hmac;
  }
}

// Node.js implementation using native crypto
class NodeCrypto implements CryptoInterface {
  private crypto: typeof import('crypto');

  constructor() {
    this.crypto = require('crypto');
  }

  createHmac(algorithm: string, secret: string): HmacInterface {
    return this.crypto.createHmac(algorithm, secret);
  }
}

// Determine which crypto implementation to use
const getCrypto = (): CryptoInterface => {
  try {
    // Check if we're in Node.js environment
    if (typeof process !== 'undefined' && process.versions && process.versions.node) {
      return new NodeCrypto();
    }
    // Fall back to browser implementation
    return new BrowserCrypto();
  } catch (e) {
    return new BrowserCrypto();
  }
};

const crypto = getCrypto();

class Session {
  private static _id_key = 'user_id';
  private static _first_name_key = 'user_first_name';
  private static _last_name_key = 'user_last_name';
  private static _username_key = 'username';
  private static _email_key = 'email';

  public static isLoggedIn(): boolean {
    const authToken = Storage.getAuthToken();
    return authToken !== null && authToken !== 'null' && authToken !== undefined;
  }

  public static getAuthToken(): string | null {
    return Storage.getAuthToken();
  }

  public static getID(): string | null {
    return Storage.get(Session._id_key);
  }

  public static getFirstName(): string | null {
    return Storage.get(Session._first_name_key);
  }

  public static getLastName(): string | null {
    return Storage.get(Session._last_name_key);
  }

  public static getEmail(): string | null {
    return Storage.get(Session._email_key);
  }

  public static hasJoinedCommunity() {
    const community = Storage.get('community');

    if (!community) {
      return false;
    }

    return (community?.me) ? true : false;
  }

  public static end(): void {
    Storage.setAuthToken(null);
    Storage.set(Session._id_key, null);
    Storage.set(Session._first_name_key, null);
    Storage.set(Session._last_name_key, null);
    Storage.set(Session._email_key, null);
    Storage.set(Session._username_key, null);
  }

  public static processAuthentication(data: { token: { access_token: string }, id: string, first_name: string, last_name: string, email: string, username: string }): void {
    Storage.setAuthToken(data.token.access_token);
    Storage.set(Session._id_key, data.id);
    Storage.set(Session._first_name_key, data.first_name);
    Storage.set(Session._last_name_key, data.last_name);
    Storage.set(Session._username_key, data.username);
    Storage.set(Session._email_key, data.email);

    Config.setAuthToken(data.token.access_token);
  }

  /**
   * Generate a tracking token for analytics collection
   * @param titleId The title ID to generate token for
   * @param secret The secret key (should match server config)
   * @returns HMAC-SHA256 token
   * @throws Error if crypto operations fail
   */
  public static generateTrackingToken(titleId: string, secret: string): string {
    try {
      if (!titleId) {
        throw new Error('titleId is required');
      }
      if (!secret) {
        throw new Error('secret is required');
      }

      return crypto
        .createHmac('sha256', secret)
        .update(titleId)
        .digest('hex');
    } catch (error) {
      console.error('Failed to generate tracking token:', error);
      throw new Error('Failed to generate tracking token');
    }
  }
}

export default Session;