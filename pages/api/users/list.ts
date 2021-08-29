import { UserRole } from '@datatypes/users';
import { ApiStatus } from '@libs/apiRequest/types';
import { getSessionId, getUserByEmail, getUserBySession } from '@libs/auth/server';
import { doesUserHaveRole } from '@libs/auth/share';
import { findMany, MongoCollections, update } from '@libs/mongo/server';
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const sessionId = getSessionId(req);
  const { user: admin } = await getUserBySession(sessionId);
  if (!doesUserHaveRole(admin, UserRole.admin)) {
    res.status(ApiStatus.AuthorizationError).json({});
  };

  const list = await findMany(MongoCollections.users, {}, {sort: {'user.email': 1}});
  res.status(ApiStatus.Ok).json(
    list.map((item) => ({...item, pass: ''}))
  );
}

export default handler
