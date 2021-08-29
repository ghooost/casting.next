import { UserProfile } from "./users";

export type SignInParams = {
  email: string;
  pass: string;
};

export type SessionResponse = {
  user?: UserProfile;
  sessionId?: string;
};
