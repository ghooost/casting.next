import { UserProfile, UserRole } from "./users";

export type UserAddData = UserProfile;

export type UserDeleteData = {
  email: string;
};

export type UserUpdateData = UserProfile;
