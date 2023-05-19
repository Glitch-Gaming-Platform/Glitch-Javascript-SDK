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

  //The ID of the community that will be added to request
  private static community_id? = "";

  constructor(config: Config) {
    this.config = config;
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

  /**
   * Sets the community id that will be associated with all requests
   * 
   * @param token 
   */
  public static setCommunityID(community_id : string | undefined) {
    this.community_id = community_id;
  }


  
  private static request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    data?: any,
    fileData?: any
  ): AxiosPromise<Response<T>> {

    let headers : { [key: string]: string } = {
      'Content-Type': 'application/json',
    };

     if(this.authToken) {
      headers['Authorization'] = `Bearer ${this.authToken}`;
     }

    if (fileData) {
      headers['Content-Type'] = 'multipart/form-data';
    }

    //Remove double slashes
    url = url.replace(/\/\//g, '/');

    const uri = `${this.baseUrl}${url}`;

    const validUri = uri.replace(/\/\//g, '/');

    const axiosPromise = axios({
      method,
      url: uri,
      baseURL: this.baseUrl,
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
  public static get<T>(url: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

    if (params && Object.keys(params).length > 0) {
      const queryString = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
      url = `${url}?${queryString}`;
    }

    if (this.community_id) {
      // Check if the URL already contains query parameters
      const separator = url.includes('?') ? '&' : '?';
      // Append the community_id query parameter
      url = `${url}${separator}community_id=${this.community_id}`;
    }

    return this.request<T>('GET', url);
  }

  public static post<T>(url: string, data: any, params?: Record<string, any>): AxiosPromise<Response<T>> {

    if (params && Object.keys(params).length > 0) {
      const queryString = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
      url = `${url}?${queryString}`;
    }

    if (this.community_id) {
      // Add the community_id to the request body
      data = {
        ...data,
        communities: [ this.community_id ]
      };
    }

    return this.request<T>('POST', url, data);
  }

  public static put<T>(url: string, data: any, params?: Record<string, any>): AxiosPromise<Response<T>> {

    if (params && Object.keys(params).length > 0) {
      const queryString = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
      url = `${url}?${queryString}`;
    }

    if (this.community_id) {
      // Add the community_id to the request body
      data = {
        ...data,
        community_id: this.community_id
      };
    }

    return this.request<T>('PUT', url, data);
  }

  public static delete<T>(url: string, params?: Record<string, any>): AxiosPromise<Response<T>> {

    if (params && Object.keys(params).length > 0) {
      const queryString = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
      url = `${url}?${queryString}`;
    }

    if (this.community_id) {
      // Check if the URL already contains query parameters
      const separator = url.includes('?') ? '&' : '?';
      // Append the community_id query parameter
      url = `${url}${separator}community_id=${this.community_id}`;
    }

    return this.request<T>('DELETE', url);
  }

  public static uploadFile<T>(
    url: string,
    filename : string,
    file: File,
    data?: any,
    params?: Record<string, any>
  ): AxiosPromise<Response<T>> {

    if (params && Object.keys(params).length > 0) {
      const queryString = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
      url = `${url}?${queryString}`;
    }
    
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
    data?: any,
    params?: Record<string, any>
  ): AxiosPromise<Response<T>> {

    if (params && Object.keys(params).length > 0) {
      const queryString = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
      url = `${url}?${queryString}`;
    }

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
  public static processRoute<T>(route : Route, data? : object, routeReplace? : {[key: string]: any}, params?: Record<string, any>) : AxiosPromise<Response<T>> {

    let url = route.url;

    if(routeReplace) {

      for (let key in routeReplace) {
        url = url.replace("{" + key + "}", routeReplace[key]);
      }

    }

    if(route.method == HTTP_METHODS.GET) {
      return this.get(url, params);
    } else if(route.method == HTTP_METHODS.POST) {
      return this.post(url, data, params);
    } else if(route.method == HTTP_METHODS.PUT) {
      return this.put(url, data, params);
    } else if(route.method == HTTP_METHODS.DELETE) {
      return this.delete(url, params);
    }

    return this.get(url);

  }

}

export default Requests;





