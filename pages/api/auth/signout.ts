import { getSessionId, getUserBySession } from 'server/auth';
import { MongoCollections, update } from 'server/mongo';
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * In: session
 * Out: session and userProfile or error
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const sessionId = getSessionId(req);
  const user = await getUserBySession(sessionId);
  if (user !== null) {
    await update(MongoCollections.users, { _id: user._id }, { sessions: user.sessions.filter((item) => item.id !== sessionId) });
  }
  //TODO: better status
  res.status(200).json({});
}

export default handler
