import { UserAddData } from '@datatypes/apiUser';
import { UserRole } from '@datatypes/users';
import { ApiStatus } from '@libs/apiRequest/types';
import { getSessionId, getUserBySession } from '@libs/auth/server';
import { doesUserHaveRole } from '@libs/auth/share';
import { findOne, insert, MongoCollections } from '@libs/mongo/server';
import { castEnum } from '@libs/utils';
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const sessionId = getSessionId(req);
  const {user: admin} = await getUserBySession(sessionId);
  if (!doesUserHaveRole(admin, UserRole.admin)) {
    res.status(ApiStatus.AuthorizationError).json({});
  };

  const data: UserAddData = req.body;
  const email = data.email.trim();
  const pass = data.pass.trim();
  const role = castEnum(UserRole, data.role);
  if (!email || !pass || !role) {
    res.status(ApiStatus.BadRequestError).json({});
    return;
  };
  const userWithEmail = await findOne(MongoCollections.users, { 'user.email': email });
  if (userWithEmail) {
    res.status(ApiStatus.BadRequestError).json({});
    return;
  };
  await insert(MongoCollections.users, {
    user: {
      email,
      pass,
      role,
    },
    sessions: [],
  });
  const createdUser = await findOne(MongoCollections.users, { 'user.email': email });
  if (createdUser) {
    res.status(ApiStatus.Ok).json({ status: createdUser !== null });
  }
  res.status(ApiStatus.BadRequestError).json({});
}

export default handler
