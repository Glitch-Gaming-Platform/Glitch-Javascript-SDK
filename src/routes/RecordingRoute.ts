import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class RecordingsRoute {
    
    public static routes: { [key: string]: Route } = {
      update: { url: '/events/{event_id}/recording/{recording_id}', method: HTTP_METHODS.PUT },
    };

  }

  export default RecordingsRoute;