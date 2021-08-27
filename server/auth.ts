import { NextApiRequest } from "next";
import { AUTHHEADER } from "../shared/auth";
import { findOne, MongoCollections } from "./mongo";

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

export const getUserBySession = async (sessionId: string) => {
  return findOne(MongoCollections.users, { sessions: { $elemMatch: { id: sessionId } } });
}
