import axios from 'axios';
import Config from '../config/Config';
import HTTP_METHODS from '../constants/HttpMethods';
import Route from '../routes/interface';
import Response from './Response';
import { AxiosPromise } from 'axios';

class Requests {

  config: Config;

  //The base url of the API.
  private static baseUrl = "";

  //The Json Web Token to send in the header
  private static authToken = "";

  constructor(config: Config) {
    this.config = config;
  }

  /**
   * Sets the configuration of the system.
   * 
   * @param config Config The config class.
   */
  public static setConfig(config: Config) {

    this.baseUrl = config.baseUrl;

    this.authToken = config.authToken;
  }

  /**
   * Sets the base url of the API.
   * 
   * @param url The url to of the API.
   */
  public static setBaseUrl(url : string) {
    this.baseUrl = url;
  }

  /**
   * Sets the JSON Web token
   * 
   * @param token 
   */
  public static setAuthToken(token : string) {
    this.authToken = token;
  }

  
  private static request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    data?: any,
    fileData?: any
  ): AxiosPromise<Response<T>> {

    let headers = {
      'Content-Type': 'application/json',
    };

     if(this.authToken) {
      headers['Authorization'] = `Bearer ${this.authToken}`;
     }

    if (fileData) {
      headers['Content-Type'] = 'multipart/form-data';
    }

    const axiosPromise = axios({
      method,
      url: `${this.baseUrl}${url}`,
      data: fileData || data,
      headers,
    });

    return axiosPromise;
  }

  /**
   * Calls a GET request to the url endpoint.
   * 
   * @param url 
   * @returns 
   */
  public static get<T>(url: string): AxiosPromise<Response<T>> {
    return this.request<T>('GET', url);
  }

  public static post<T>(url: string, data: any): AxiosPromise<Response<T>> {
    return this.request<T>('POST', url, data);
  }

  public static put<T>(url: string, data: any): AxiosPromise<Response<T>> {
    return this.request<T>('PUT', url, data);
  }

  public static delete<T>(url: string): AxiosPromise<Response<T>> {
    return this.request<T>('DELETE', url);
  }

  public static uploadFile<T>(
    url: string,
    filename : string,
    file: File,
    data?: any
  ): AxiosPromise<Response<T>> {
    
    const formData = new FormData();

    formData.append(filename, file);

    for (let key in data) {
      formData.append(key, data[key]);
    }

    return this.request<T>('POST', url, data, formData);
  }

  public static uploadBlob<T>(
    url: string,
    filename : string,
    blob: Blob,
    data?: any
  ): AxiosPromise<Response<T>> {

    const formData = new FormData();

    formData.append(filename, blob);

    for (let key in data) {
      formData.append(key, data[key]);
    }

    return this.request<T>('POST', url, data, formData);
  }

  /**
   *  The Route class contains the method and url, thereforce items can be
   *  automatically routed depending on the configuration.
   * 
   * @param route
   * @param data 
   * @returns 
   */
  public static processRoute<T>(route : Route, data? : object, routeReplace? : object) : AxiosPromise<Response<T>> {

    let url = route.url;

    if(routeReplace) {

      for (let key in routeReplace) {
        url = url.replace("{" + key + "}", routeReplace[key]);
      }

    }

    if(route.method == HTTP_METHODS.GET) {
      return this.get(url);
    } else if(route.method == HTTP_METHODS.POST) {
      return this.post(url, data);
    } else if(route.method == HTTP_METHODS.PUT) {
      return this.put(url, data);
    } else if(route.method == HTTP_METHODS.DELETE) {
      return this.delete(url);
    }

    return this.get(url);

  }

}

export default Requests;





