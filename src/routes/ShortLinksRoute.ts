import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class ShortLinksRoute {
  public static routes: { [key: string]: Route } = {
    listShortLinks:    { url: '/shortlinks', method: HTTP_METHODS.GET },
    createShortLink:   { url: '/shortlinks', method: HTTP_METHODS.POST },
    viewShortLink:     { url: '/shortlinks/{id}', method: HTTP_METHODS.GET },
    updateShortLink:   { url: '/shortlinks/{id}', method: HTTP_METHODS.PUT },
    // Delete can be added if supported
    // deleteShortLink:   { url: '/shortlinks/{id}', method: HTTP_METHODS.DELETE }
  };
}

export default ShortLinksRoute;
