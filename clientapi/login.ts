import { LoginParams, UserProfile } from "shared/user";
import { apiPost } from "./utils";

export const apiLogin = async (data: LoginParams) => {
  return await apiPost<UserProfile>('/api/login', data);
}