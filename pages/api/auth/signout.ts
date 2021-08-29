import { ApiStatus } from '@libs/apiRequest/types';
import { getSessionId, getUserBySession } from '@libs/auth/server';
import { MongoCollections, update } from '@libs/mongo/server';
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const sessionId = getSessionId(req);
  const user = await getUserBySession(sessionId);
  if (user !== null) {
    await update(
      MongoCollections.users,
      { _id: user._id },
      { sessions: user.sessions.filter((item) => item.id !== sessionId) },
    );
  }
  //TODO: better status
  res.status(ApiStatus.Ok).json({});
}

export default handler
