import { store } from "@store/index";
import { userSliceSelectors } from "@store/slices/user";

enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT'
};

const apiRequest = (url: string, params: any, method: RequestMethod) => {
  const user = userSliceSelectors.getUser(store.getState());
  const body = method === RequestMethod.GET
    ? new URLSearchParams({ body: JSON.stringify(params) })
    : JSON.stringify(params);
  const options: RequestInit = {
    method,
    body,
    headers: {
      'Content-type': 'application/json'
    }
  };
  if (user?.session) {
    options.headers['X-Session'] = user.session;
  };

  return fetch(url, options).then((response) => response.json());
}

export const apiGet = <T>(url: string, params: any): Promise<T> => {
  return apiRequest(url, params, RequestMethod.GET);
}

export const apiPost = <T>(url: string, params: any): Promise<T> => {
  return apiRequest(url, params, RequestMethod.POST);
}

export const apiPut = <T>(url: string, params: any): Promise<T> => {
  return apiRequest(url, params, RequestMethod.PUT);
}

export const apiDelete = <T>(url: string, params: any): Promise<T> => {
  return apiRequest(url, params, RequestMethod.DELETE);
}
