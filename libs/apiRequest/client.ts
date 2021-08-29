import { AUTHHEADER } from "@libs/auth/share";
import { store } from "@store/index";
import { authSelectors } from "@store/slices/auth";

import { ApiStatus } from "./types";

enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT'
};

const apiRequest = async (method: RequestMethod, url: string, params?: any) => {
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
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if ((response.status >= 200 && response.status < 300) || response.status === 400) {
      return Promise.resolve(data);
    };
    if (response.status === ApiStatus.AuthorizationError ||
      response.status === ApiStatus.BadRequestError ||
      response.status === ApiStatus.ServerError
      ) {
      return Promise.reject(response.status);
    }
  } catch {
    //
  }
  return Promise.reject(ApiStatus.Unknown);
}

export const apiGet = (url: string, params?: any) => {
  return apiRequest(RequestMethod.GET, url, params);
}

export const apiPost = (url: string, params?: any) => {
  return apiRequest(RequestMethod.POST, url, params);
}

export const apiPut = (url: string, params?: any) => {
  return apiRequest(RequestMethod.PUT, url, params);
}

export const apiDelete = (url: string, params?: any) => {
  return apiRequest(RequestMethod.DELETE, url, params);
}
