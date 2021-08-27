import { getSessionId, getUserBySession, isSessionValid } from 'server/auth';
import { AuthError, AUTHHEADER, SessionResponse, UserProfile } from "@shared/auth";
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * In: session
 * Out: session and userProfile or error
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const sessionId = getSessionId(req);
  const user = await getUserBySession(sessionId);
  if (user !== null) {
    const result: SessionResponse = {
      user: user.user,
      sessionId,
    };

    res.status(200).json(result);
    return;
  }
  //TODO: better errors
  res.status(403).json({});
}

export default handler
