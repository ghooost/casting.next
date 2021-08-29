import { SessionResponse, SignInParams } from '@datatypes/apiAuth';
import { UserRole } from '@datatypes/users';
import { ApiStatus } from '@libs/apiRequest/types';
import { getUserByEmail, getUserBySession } from '@libs/auth/server';
import { findCount, insert, MongoCollections, update } from '@libs/mongo/server';
import { NextApiRequest, NextApiResponse } from 'next'
import short from 'short-uuid';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data: SignInParams = req.body;
  const login = data.email.trim();
  const pass = data.pass.trim();
  const userWithEmail = await getUserByEmail(login);
  if (userWithEmail) {
    //TODO: better errors
    res.status(ApiStatus.AuthorizationError).json({});
    return;
  };
  const sessionId = short.uuid();
  const numUsers = await findCount(MongoCollections.users, {});
  await insert(MongoCollections.users, {
    user: {
      email: login,
      pass: pass,
      role: numUsers === 0 ? UserRole.admin : UserRole.client,
      // role: UserRole.admin,
    },
    sessions: [{ id: sessionId, validTill: 0 }],
  });
  const user = await getUserBySession(sessionId);
  const result: SessionResponse = { user: user.user, sessionId };

  res.status(ApiStatus.Ok).json(result);
}

export default handler
