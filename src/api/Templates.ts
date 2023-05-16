import TemplatesRoute from "../routes/TemplatesRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Templates {

    /**
     * List all the templates.
     * 
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/resourceTemplateList
     * 
     * @returns promise
     */
    public static list<T>() :  AxiosPromise<Response<T>> {
        return Requests.processRoute(TemplatesRoute.routes.list);
    }

    /**
     * Create a new template.
     * 
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/newTemplateResourceStorage
     * 
     * @param data The data to be passed when creating a template.
     * 
     * @returns Promise
     */
    public static create<T>(data : object) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(TemplatesRoute.routes.create, data);
    }

    /**
     * Update a template.
     * 
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/updateTemplateStorage
     * 
     * @param template_id The id of the template to update.
     * @param data The data to update.
     * 
     * @returns promise
     */
    public static update<T>(template_id : string, data : object)  :  AxiosPromise<Response<T>>{

        return Requests.processRoute(TemplatesRoute.routes.create, data, {template_id : template_id});
    }

    /**
     * Retrieve the information for a single template.
     * 
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/showTemplateStorage
     * 
     * @param template_id The id fo the template to retrieve.
     * 
     * @returns promise
     */
    public static view<T>(template_id : string) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(TemplatesRoute.routes.view, {}, {template_id : template_id});
    }

    /**
     * Deletes a template.
     * 
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/destoryTemplateStorage
     * 
     * @param template_id The id of the template to delete.
     * @returns promise
     */
    public static delete<T>(template_id : string) :  AxiosPromise<Response<T>> {

        return Requests.processRoute(TemplatesRoute.routes.delete, {}, {template_id : template_id});
    }

    /**
     * Updates the logo for the template using a File object.
     * 
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/uploadLogoTemplateImage
     * 
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     * 
     * @returns promise
     */
    public static uploadLogoFile<T>(template_id: string, file : File, data? : object): AxiosPromise<Response<T>> {

        let url = TemplatesRoute.routes.uploadLogo.url.replace('{template_id}', template_id);

        return Requests.uploadFile(url, 'image', file, data);
    }

    /**
     * Updates the logo for the template using a Blob.
     * 
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/uploadLogoTemplateImage
     * 
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     * 
     * @returns promise
     */
    public static uploadLogoBlob<T>(template_id: string, blob : Blob, data? : object): AxiosPromise<Response<T>> {

        let url = TemplatesRoute.routes.uploadLogo.url.replace('{template_id}', template_id);

        return Requests.uploadBlob(url, 'image', blob, data);
    }

    /**
     * Updates the main image for the template using a File object.
     * 
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/uploadMainTemplateImage
     * 
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     * 
     * @returns promise
     */
    public static uploadMainImageFile<T>(template_id: string, file : File, data? : object): AxiosPromise<Response<T>> {

        let url = TemplatesRoute.routes.uploadMainImage.url.replace('{template_id}', template_id);

        return Requests.uploadFile(url, 'image', file, data);
    }

    /**
     * Updates the main image for the template using a Blob.
     * 
     * @see https://api.glitch.fun/api/documentation#/Template%20Route/uploadMainTemplateImage
     * 
     * @param blob The blob to upload.
     * @param data Any additional data to pass along to the upload
     * 
     * @returns promise
     */
    public static uploadMainImageBlob<T>(template_id: string, blob : Blob, data? : object): AxiosPromise<Response<T>> {

        let url = TemplatesRoute.routes.uploadMainImage.url.replace('{template_id}', template_id);

        return Requests.uploadBlob(url, 'image', blob, data);
    }

}

export default Templates;