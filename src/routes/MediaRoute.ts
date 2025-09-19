import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class MediaRoute {
    public static routes: { [key: string]: Route } = {
        upload: { url: '/media', method: HTTP_METHODS.POST },
        getMedia: { url: '/media/{media_id}', method: HTTP_METHODS.GET },
        cropSteamCapsule: { url: '/media/crop-steam-capsule', method: HTTP_METHODS.POST },
        analyzeSteamCapsule: { url: '/media/analyze-steam-capsule', method: HTTP_METHODS.POST },
    };
}

export default MediaRoute;
