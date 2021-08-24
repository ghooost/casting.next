import { AUTHHEADER } from "@shared/auth";
import { store } from "@store/index";
import { authSelectors } from "@store/slices/auth";

enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT'
};

const apiRequest = (method: RequestMethod, url: string, params?: any) => {
  const session = authSelectors.getSession(store.getState());
  const options: RequestInit = {
    method,
    headers: {
      'Content-type': 'application/json'
    }
  };
  if (session) {
    options.headers[AUTHHEADER] = session;
  };

  if (params) {
    options.body = method === RequestMethod.GET
      ? new URLSearchParams({ body: JSON.stringify(params) })
      : JSON.stringify(params);
  };

  return fetch(url, options).then((response) => response.json());
}

export const apiGet = <T>(url: string, params?: any): Promise<T> => {
  return apiRequest(RequestMethod.GET, url, params);
}

export const apiPost = <T>(url: string, params?: any): Promise<T> => {
  return apiRequest(RequestMethod.POST, url, params);
}

export const apiPut = <T>(url: string, params?: any): Promise<T> => {
  return apiRequest(RequestMethod.PUT, url, params);
}

export const apiDelete = <T>(url: string, params?: any): Promise<T> => {
  return apiRequest(RequestMethod.DELETE, url, params);
}
