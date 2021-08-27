import { getUserBySession } from '@server/auth';
import { findOne, insert, MongoCollections, update } from '@server/mongo';
import { AuthRole, SessionResponse, SignInParams } from '@shared/auth';
import { NextApiRequest, NextApiResponse } from 'next'
import short from 'short-uuid';

/**
 * In: session
 * Out: session and userProfile or error
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data: SignInParams = req.body;
  const userWithEmail = await findOne(MongoCollections.users, { 'user.email': data.login });
  if (userWithEmail) {
    //TODO: better errors
    res.status(403).json({});
    return;
  };
  const sessionId = short.uuid();
  await insert(MongoCollections.users, {
    user: {
      email: data.login,
      pass: data.pass,
      roles: [AuthRole.client],
    },
    sessions: [{ id: sessionId, validTill: 0 }],
  });
  const user = await getUserBySession(sessionId);
  const result: SessionResponse = {
    user: user.user,
    sessionId,
  };

  res.status(200).json(result);
}

export default handler
