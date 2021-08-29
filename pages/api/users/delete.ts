import { UserDeleteData } from '@datatypes/apiUser';
import { UserRole } from '@datatypes/users';
import { ApiStatus } from '@libs/apiRequest/types';
import { getSessionId, getUserByEmail, getUserBySession } from '@libs/auth/server';
import { doesUserHaveRole } from '@libs/auth/share';
import { deleteMany, MongoCollections } from '@libs/mongo/server';
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const sessionId = getSessionId(req);
  const {user: admin} = await getUserBySession(sessionId);
  if (!doesUserHaveRole(admin, UserRole.admin)) {
    res.status(ApiStatus.AuthorizationError).json({});
  };

  const data: UserDeleteData = req.body;
  const email = data.email.trim();
  if (!email) {
    res.status(ApiStatus.BadRequestError).json({});
    return;
  };
  const userWithEmail = await getUserByEmail(email);
  if (!userWithEmail) {
    res.status(ApiStatus.BadRequestError).json({});
    return;
  };
  await deleteMany(MongoCollections.users, { 'user.email': email });

  res.status(ApiStatus.Ok).json({ status: true });
}

export default handler
