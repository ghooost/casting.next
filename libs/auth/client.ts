import { SessionResponse, SignInParams } from "@datatypes/apiAuth";
import { apiDelete, apiGet, apiPost, apiPut } from "@libs/apiRequest/client";

export const apiSignIn = async (data: SignInParams): Promise<SessionResponse> => {
  return await apiPost('/api/auth/signin', data);
}

export const apiSignUp = async (data: SignInParams): Promise<SessionResponse> => {
  return await apiPut('/api/auth/signup', data);
}

export const apiSignOut = async () => {
  return await apiDelete('/api/auth/signout');
}

export const apiCheck = async (): Promise<SessionResponse> => {
  return await apiGet('/api/auth/check');
}