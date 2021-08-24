import { SignInParams, SessionResponse } from "@shared/auth";
import { apiDelete, apiGet, apiPost } from "@shared/apiRequest";

export const apiSignIn = async (data: SignInParams) => {
  return await apiPost('/api/auth/signin', data);
}

export const apiSignOut = async () => {
  return await apiDelete('/api/auth/signout');
}

export const apiCheck = async () => {
  return await apiGet('/api/auth/check');
}