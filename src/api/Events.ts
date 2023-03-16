import EventsRoutes from "../routes/EventsRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Events {

    /**
     * List all the events
     * 
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/resourceEventList
     * 
     * @returns promise
     */
    public static list<T>() :  AxiosPromise<Response<T>> {
        return Requests.processRoute(EventsRoutes.routes.list);
    }

    /**
     * Create a new event.
     * 
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/newEventResourceStorage
     * 
     * @param data The data to be passed when creating an event.
     * 
     * @returns Promise
     */
    public static create<T>(data : object) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.create, data);
    }

    /**
     * Update a event
     * 
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/updateEventStorage
     * 
     * @param event_id The id of the event to update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static update<T>(event_id : string, data : object)  :  AxiosPromise<Response<T>>{

        return Requests.processRoute(EventsRoutes.routes.create, data, {event_id : event_id});
    }

    /**
     * Retrieve the information for a single event.
     * 
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/showEventStorage
     * 
     * @param event_id The id fo the event to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(event_id : string) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.view, {}, {event_id : event_id});
    }

    /**
     * Deletes a event.
     * 
     * @see https://api.glitch.fun/api/documentation#/Event%20Route/destoryEventStorage
     * 
     * @param event_id The id of the event to delete.
     * @returns promise
     */
    public static delete<T>(event_id : string) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(EventsRoutes.routes.delete, {}, {event_id : event_id});
    }

    

    

}

export default Events;