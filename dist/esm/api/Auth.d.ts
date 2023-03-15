declare class Auth {
    static login(login: string, password: string): Promise<import("../util/Response").default<unknown>>;
    static register(data: object): Promise<import("../util/Response").default<unknown> | undefined>;
}
export default Auth;
