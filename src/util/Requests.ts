import axios from 'axios';
import HTTP_METHODS from '../constants/HttpMethods';
import Route from '../routes/interface';

interface Response<T> {
  data: T;
  success: boolean;
  message?: string;
}

class Requests {

  private static readonly baseUrl = 'https://example.com/api';

  private static readonly authToken = 'your-jwt-token-here';


  private static async request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    data?: any
  ): Promise<Response<T>> {
    try {
      const response = await axios({
        method,
        url: `${this.baseUrl}${url}`,
        data,
        headers: {
          Authorization: `Bearer ${this.authToken}`,
          'Content-Type': 'application/json',
        },
      });
      return {
        data: response.data,
        success: true,
      };
    } catch (error) {
      const message = error.response?.data?.message || 'An error occurred';
      return {
        data: null,
        success: false,
        message,
      };
    }
  }

  public static async get<T>(url: string): Promise<Response<T>> {
    return this.request<T>('GET', url);
  }

  public static async post<T>(url: string, data: any): Promise<Response<T>> {
    return this.request<T>('POST', url, data);
  }

  public static async put<T>(url: string, data: any): Promise<Response<T>> {
    return this.request<T>('PUT', url, data);
  }

  public static async delete<T>(url: string): Promise<Response<T>> {
    return this.request<T>('DELETE', url);
  }

  /**
   *  The Route class contains the method and url, thereforce items can be
   *  automatically routed depending on the configuration.
   * 
   * @param route
   * @param data 
   * @returns 
   */
  public static async processRoute(route : Route, data? : object) {

    if(route.method == HTTP_METHODS.GET) {
      return this.get(route.url);
    } else if(route.method == HTTP_METHODS.POST) {
      return this.post(route.url, data);
    } else if(route.method == HTTP_METHODS.PUT) {
      return this.put(route.url, data);
    } else if(route.method == HTTP_METHODS.DELETE) {
      return this.delete(route.url);
    }

  }

}

export default Requests;





