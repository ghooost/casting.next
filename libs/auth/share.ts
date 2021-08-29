import { UserProfile, UserRole } from "@datatypes/users";

export const AUTHHEADER = 'x-session-id';

export enum AuthError {
  Empty = '',
  WrongLogin = 'WrongLogin',
  NotConnected = 'NotConnected',
  Unknown = 'Unknown'
}

export type AuthSession = {
  id: string;
  validTill: number;
};

export const doesUserHaveRole = (user: UserProfile | null, role: UserRole) => user?.role === role;
