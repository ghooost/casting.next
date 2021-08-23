export type LoginParams = {
  login: string;
  pass: string;
}

export type UserProfile = {
  email?: string;
  roles: string[];
  session?: string;
};

export enum AuthorizationError {
  Empty = '',
  WrongLogin = 'WrongLogin',
  NotConnected = 'NotConnected',
  Unknown = 'Unknown',
}