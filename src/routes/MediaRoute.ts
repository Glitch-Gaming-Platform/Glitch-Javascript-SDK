import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class MediaRoute {
    public static routes: { [key: string]: Route } = {
        upload: { url: '/media', method: HTTP_METHODS.POST },
        getMedia: { url: '/media/{meda_id}', method: HTTP_METHODS.GET },
    };
}

export default MediaRoute;
