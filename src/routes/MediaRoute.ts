import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class MediaRoute {
    public static routes: { [key: string]: Route } = {
        upload: { url: '/media', method: HTTP_METHODS.POST },
        getMedia: { url: '/media/{media_id}', method: HTTP_METHODS.GET },
        cropSteamCapsule: { url: '/media/crop-steam-capsule', method: HTTP_METHODS.POST },
        analyzeSteamCapsule: { url: '/media/analyze-steam-capsule', method: HTTP_METHODS.POST },
        removeBackground: { url: '/media/remove-background', method: HTTP_METHODS.POST },
        removeBackgroundAI: { url: '/media/remove-background-ai', method: HTTP_METHODS.POST },
        createLibraryLogo: { url: '/media/create-library-logo', method: HTTP_METHODS.POST },
        validateScreenshot: { url: '/media/validate-screenshot', method: HTTP_METHODS.POST },
        uploadTikTokMusic: { url: '/media/tiktok/music', method: HTTP_METHODS.POST },
        getPresignedUrl: { url: '/media/presigned-url', method: HTTP_METHODS.POST },
        confirmS3Upload: { url: '/media/s3-confirm', method: HTTP_METHODS.POST },
    };
}

export default MediaRoute;
