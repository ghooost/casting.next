import { UsersCollectionItem } from "@datatypes/users";
import { NextApiRequest } from "next";

import { findOne, MongoCollections } from "../mongo/server";
import { AUTHHEADER } from "./share";

export const getSessionId = (req: NextApiRequest) => {
  const rawSession = req.headers[AUTHHEADER];
  return Array.isArray(rawSession) ? rawSession[0] : rawSession;
}

export const isSessionValid = async (sessionId: string) => {
  try {
    const user = await getUserBySession(sessionId);
    return user !== null;
  } catch (err){
    return false;
  }
}

export const getUserBySession = async (sessionId: string): Promise<UsersCollectionItem> => {
  return findOne(MongoCollections.users, { sessions: { $elemMatch: { id: sessionId } } });
}

export const getUserByEmail = async (email: string): Promise<UsersCollectionItem> => {
  return findOne(MongoCollections.users, { 'user.email': email });
}

export const getUserByEmailPass = async (email: string, pass: string): Promise<UsersCollectionItem> => {
  return findOne(MongoCollections.users, { 'user.email': email, 'user.pass': pass });
}
