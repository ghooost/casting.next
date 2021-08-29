import { AuthSession } from "@libs/auth/share";

export enum UserRole {
  admin = 'admin',
  client = 'client',
  blocked = 'blocked',
}

export type UserProfile = {
  email: string;
  pass?: string;
  role: UserRole;
}

export type UsersCollectionItem = {
  _id?: any;
  user: UserProfile;
  sessions?: AuthSession[];
};
