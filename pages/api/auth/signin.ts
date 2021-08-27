import { SessionResponse, SignInParams } from '@shared/auth';
import { findOne, MongoCollections, update } from 'server/mongo';
import { NextApiRequest, NextApiResponse } from 'next'
import short from 'short-uuid';
/**
 * In: session
 * Out: session and userProfile or error
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data: SignInParams = req.body;
  const user = await findOne(MongoCollections.users, { 'user.email': data.login, 'user.pass': data.pass });
  if (!user) {
    //TODO: better errors
    res.status(403).json({});
    return;
  };
  const sessionId = short.uuid();
  await update(MongoCollections.users, { _id: user._id }, { sessions: user.sessions.concat({ id: sessionId, validTill: 0})});
  const result: SessionResponse = {
    user: user.user,
    sessionId,
  };

  res.status(200).json(result);
}

export default handler
