import { Config } from "../config";
import Storage from "./Storage";

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

    if(!community) {
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

  public static processAuthentication(data: { token: { access_token: string }, id: string, first_name: string, last_name: string, email: string, username: string  }): void {
    Storage.setAuthToken(data.token.access_token);
    Storage.set(Session._id_key, data.id);
    Storage.set(Session._first_name_key, data.first_name);
    Storage.set(Session._last_name_key, data.last_name);
    Storage.set(Session._username_key, data.username);
    Storage.set(Session._email_key, data.email);

    Config.setAuthToken(data.token.access_token);
  }
}

export default Session;
