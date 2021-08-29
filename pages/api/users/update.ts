import { UserUpdateData } from '@datatypes/apiUser';
import { UserRole } from '@datatypes/users';
import { ApiStatus } from '@libs/apiRequest/types';
import { getSessionId, getUserByEmail, getUserBySession } from '@libs/auth/server';
import { doesUserHaveRole } from '@libs/auth/share';
import { MongoCollections, update } from '@libs/mongo/server';
import { castEnum } from '@libs/utils';
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const sessionId = getSessionId(req);
  const {user: admin} = await getUserBySession(sessionId);
  if (!doesUserHaveRole(admin, UserRole.admin)) {
    res.status(ApiStatus.AuthorizationError).json({});
  };

  const data: UserUpdateData = req.body;
  const email = data.email.trim();
  const pass = data.pass.trim();
  const role = castEnum(UserRole, data.role);

  if (!email || !role ) {
    res.status(ApiStatus.BadRequestError).json({});
    return;
  };
  const userWithEmail = await getUserByEmail(email);
  if (userWithEmail) {
    res.status(ApiStatus.BadRequestError).json({});
    return;
  };
  await update(MongoCollections.users, { 'user.email': email }, {
    user: {
      email,
      pass: pass || userWithEmail.user.pass,
      role,
    },
    sessions: [],
  });
  res.status(ApiStatus.Ok).json({ status: true });
}

export default handler
