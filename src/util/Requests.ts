import axios, { AxiosInstance, AxiosPromise } from 'axios';
import Config from '../config/Config';
import HTTP_METHODS from '../constants/HttpMethods';
import Route from '../routes/interface';
import Response from './Response';

class Requests {
  private static axiosInstance: AxiosInstance;
  private static config: Config;
  private static baseUrl = "";
  private static authToken = "";
  private static community_id?: string = "";

  constructor(config: Config) {
    Requests.config = config;
    Requests.axiosInstance = axios.create({
      baseURL: Requests.baseUrl,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public static setBaseUrl(url: string) {
    Requests.baseUrl = url;
    Requests.axiosInstance.defaults.baseURL = url;
  }

  public static setAuthToken(token: string) {
    Requests.authToken = token;
  }

  public static setCommunityID(community_id: string | undefined) {
    Requests.community_id = community_id;
  }

  private static request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    data?: any,
    fileData?: any
  ): AxiosPromise<Response<T>> {
    let headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
    };

    if (Requests.authToken) {
      headers['Authorization'] = `Bearer ${Requests.authToken}`;
    }

    if (fileData) {
      headers['Content-Type'] = 'multipart/form-data';
    }

    url = url.replace(/\/\//g, '/');

    const uri = `${Requests.baseUrl}${url}`;

    const validUri = uri.replace(/\/\//g, '/');

    const axiosPromise = Requests.axiosInstance({
      method,
      url: uri,
      data: fileData || data,
      headers,
    });

    return axiosPromise;
  }

  public static get<T>(url: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    if (params && Object.keys(params).length > 0) {
      const queryString = Object.entries(params)
        .map(([key, value]) => {
          if (Array.isArray(value)) {
            return value.map((item) => `${key}[]=${encodeURIComponent(item)}`).join('&');
          }
          return `${key}=${encodeURIComponent(value)}`;
        })
        .join('&');
      url = `${url}?${queryString}`;
    }

    if (Requests.community_id) {
      const separator = url.includes('?') ? '&' : '?';
      url = `${url}${separator}community_id=${Requests.community_id}`;
    }

    return Requests.request<T>('GET', url);
  }

  public static post<T>(url: string, data: any, params?: Record<string, any>): AxiosPromise<Response<T>> {
    if (params && Object.keys(params).length > 0) {
      const queryString = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
      url = `${url}?${queryString}`;
    }

    if (Requests.community_id) {
      data = {
        ...data,
        communities: [Requests.community_id],
      };
    }

    return Requests.request<T>('POST', url, data);
  }

  public static put<T>(url: string, data: any, params?: Record<string, any>): AxiosPromise<Response<T>> {
    if (params && Object.keys(params).length > 0) {
      const queryString = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
      url = `${url}?${queryString}`;
    }

    if (Requests.community_id) {
      data = {
        ...data,
        community_id: Requests.community_id,
      };
    }

    return Requests.request<T>('PUT', url, data);
  }

  public static delete<T>(url: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
    if (params && Object.keys(params).length > 0) {
      const queryString = Object.entries(params)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
      url = `${url}?${queryString}`;
    }

    if (Requests.community_id) {
      const separator = url.includes('?') ? '&' : '?';
      url = `${url}${separator}community_id=${Requests.community_id}`;
    }

    return Requests.request<T>('DELETE', url);
  }

  public static uploadFile<T>(
    url: string,
    filename: string,
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

    if (Requests.community_id) {
      data = {
        ...data,
        communities: [Requests.community_id],
      };
    }

    for (let key in data) {
      formData.append(key, data[key]);
    }

    return Requests.request<T>('POST', url, data, formData);
  }

  public static uploadBlob<T>(
    url: string,
    filename: string,
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

    if (Requests.community_id) {
      data = {
        ...data,
        communities: [Requests.community_id],
      };
    }

    for (let key in data) {
      formData.append(key, data[key]);
    }

    return Requests.request<T>('POST', url, data, formData);
  }

  public static processRoute<T>(route: Route, data?: object, routeReplace?: { [key: string]: any }, params?: Record<string, any>): AxiosPromise<Response<T>> {
    let url = route.url;

    if (routeReplace) {
      for (let key in routeReplace) {
        url = url.replace("{" + key + "}", routeReplace[key]);
      }
    }

    if (route.method == HTTP_METHODS.GET) {
      return Requests.get(url, params);
    } else if (route.method == HTTP_METHODS.POST) {
      return Requests.post(url, data, params);
    } else if (route.method == HTTP_METHODS.PUT) {
      return Requests.put(url, data, params);
    } else if (route.method == HTTP_METHODS.DELETE) {
      return Requests.delete(url, params);
    }

    return Requests.get(url);
  }
}

export default Requests;
