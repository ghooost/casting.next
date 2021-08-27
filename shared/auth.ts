
export const AUTHHEADER = 'x-session-id';

export type SignInParams = {
  login: string;
  pass: string;
};

export type SessionResponse = {
  user?: UserProfile;
  sessionId?: string;
};

export type UserProfile = {
  email: string;
  pass?: string;
  roles: AuthRole[];
};

export enum AuthError {
  Empty = '',
  WrongLogin = 'WrongLogin',
  NotConnected = 'NotConnected',
  Unknown = 'Unknown'
}

export enum AuthRole {
  admin = 'admin',
  client = 'client'
}
type AuthSession = {
  id: string;
  validTill: number;
};
export type adminsCollectionItem = {
  user: UserProfile;
  sessions?: AuthSession[];
};
