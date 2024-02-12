import axios, { AxiosPromise } from 'axios';
import Config from '../config/Config';
import HTTP_METHODS from '../constants/HttpMethods';
import Route from '../routes/interface';
import Response from './Response';
import * as crypto from 'crypto';


class Requests {
  private static config: Config;
  private static baseUrl = "";
  private static authToken = "";
  private static community_id?: string = "";

  constructor(config: Config) {
    Requests.config = config;
  }

  public static setBaseUrl(url: string) {
    Requests.baseUrl = url;
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

    const axiosPromise = axios({
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
    file: File | Blob,
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

  // Method adapted for browser environments

  public static async uploadFileInChunks<T>(
    file: File,
    uploadUrl: string,
    onProgress?: (totalSize: number, amountUploaded: number) => void,
    data?: any,
    chunkSize ?: number, // Default chunk size of 1MB
  ): Promise<void> {

    if(!chunkSize) {
      chunkSize = 1024 * 1024
    }
    const fileSize = file.size;
    const totalChunks = Math.ceil(fileSize / chunkSize);
    let currentChunkIndex = 0;
    let totalUploaded = 0; // Keep track of the total uploaded bytes
  
    // Generate a unique identifier for this upload session using the Web Cryptography API
    const array = new Uint32Array(4);
    window.crypto.getRandomValues(array);
    const identifier = Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('');
  
    while (currentChunkIndex < totalChunks) {
      const start = currentChunkIndex * chunkSize;
      const end = Math.min(start + chunkSize, fileSize);
      const chunk = file.slice(start, end);
  
      const formData = new FormData();
      formData.append('video', chunk, file.name);
      formData.append('chunkIndex', currentChunkIndex.toString());
      formData.append('totalChunks', totalChunks.toString());
      formData.append('identifier', identifier);

      // If there's additional data, append each key-value pair to the formData
      if (data) {
        for (const key in data) {
          formData.append(key, data[key]);
        }
      }
  
      // Construct the full URL if necessary or use a method to determine the base URL
      const fullUploadUrl = `${Requests.baseUrl}${uploadUrl}`;
  
      // Make sure the authorization token is included if required
      const headers: { [key: string]: string } = {};
      if (Requests.authToken) {
        headers['Authorization'] = `Bearer ${Requests.authToken}`;
      }
  
      // Perform the upload
      await axios.post(fullUploadUrl, formData, { 
        headers,
        onUploadProgress: (progressEvent) => {
          const currentChunkProgress = progressEvent.loaded; // Bytes uploaded of the current chunk
          // Calculate the total uploaded size including previous chunks and the current chunk's progress
          const totalProgress = totalUploaded + currentChunkProgress;

          if(onProgress){
            onProgress(fileSize, totalProgress);
          }
        } 
      });
  
      currentChunkIndex++;
    }
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
