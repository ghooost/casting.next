import { UserAddData, UserDeleteData, UserUpdateData } from "@datatypes/apiUser";
import { UsersCollectionItem } from "@datatypes/users";
import { apiDelete, apiGet, apiPost, apiPut } from "@libs/apiRequest/client";

export const apiUsersList = async (): Promise<UsersCollectionItem[]> => {
  return await apiGet('/api/users/list');
}

export const apiUsersAdd = async (data: UserAddData) => {
  return await apiPut('/api/users/add', data);
}

export const apiUsersUpdate = async (data: UserUpdateData) => {
  return await apiPost('/api/users/update', data);
}

export const apiUsersDelete = async (data: UserDeleteData) => {
  return await apiDelete('/api/users/delete', data);
}
