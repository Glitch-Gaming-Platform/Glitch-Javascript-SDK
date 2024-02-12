import AuthRoutes from "../routes/AuthRoute";
import SocialRoute from "../routes/SocialRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Social {

    /**
     * Give a tip to another user
     * 
     * @see https://api.glitch.fun/api/documentation#/Authentication%20Route/authLogin
     * 
     * @returns A promise
     */
    public static postVideoToTikTokFile<T>(file: File, data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        let url = SocialRoute.routes.postVideoToTikTok.url;

        return Requests.uploadFile(url, 'video', file, data);
    }

    public static postVideoToTikTokBlob<T>(blob: Blob, data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        let url = SocialRoute.routes.postVideoToTikTok.url;

        return Requests.uploadBlob(url, 'video', blob, data);
    }

    public static postVideoToFacebookGroupFile<T>(file: File, data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        let url = SocialRoute.routes.postVideoToFacebookGroup.url;

        return Requests.uploadFile(url, 'video', file, data);
    }

    public static postVideoToFacebookGroupBlob<T>(blob: Blob, data? : object, params?: Record<string, any>) :  AxiosPromise<Response<T>> {

        let url = SocialRoute.routes.postVideoToFacebookGroup.url;

        return Requests.uploadBlob(url, 'video', blob, data);
    }

    public static postVideoToTwitter<T>(file: File, data? : object, onProgress ?: (totalSize: number, amountUploaded: number) => void, params?: Record<string, any>) :  Promise<void> {

        let url = SocialRoute.routes.postVideoToTwitter.url;

        return Requests.uploadFileInChunks(file, url, onProgress, data);
    }



    

}

export default Social;