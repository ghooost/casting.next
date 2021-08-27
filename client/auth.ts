import { SignInParams } from "@shared/auth";
import { apiDelete, apiGet, apiPost, apiPut } from "@client/apiRequest";

export const apiSignIn = async (data: SignInParams) => {
  return await apiPost('/api/auth/signin', data);
}

export const apiSignUp = async (data: SignInParams) => {
  return await apiPut('/api/auth/signup', data);
}

export const apiSignOut = async () => {
  return await apiDelete('/api/auth/signout');
}

export const apiCheck = async () => {
  return await apiGet('/api/auth/check');
}