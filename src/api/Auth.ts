import AuthRoutes from "../routes/AuthRoute";
import Requests from "../util/Requests";

class Auth {

    public static login(login: string, password: string) {
        return Requests.post(AuthRoutes.routes.login.url, {email : login, password: password});
    }

    public static register(data : object) {
        return Requests.processRoute(AuthRoutes.routes.register, data);
    }
}

export default Auth;