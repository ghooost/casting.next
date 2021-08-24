export const AUTHHEADER = 'x-session-id';

export type SignInParams = {
  login: string;
  pass: string;
}

export type SessionResponse = {
  user?: UserProfile;
  session?: string;
  error: AuthError;
}

export type UserProfile = {
  email?: string;
  roles: string[];
};

export enum AuthError {
  Empty = '',
  WrongLogin = 'WrongLogin',
  NotConnected = 'NotConnected',
  Unknown = 'Unknown',
}
