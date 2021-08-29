import { SessionResponse } from '@datatypes/apiAuth';
import { ApiStatus } from '@libs/apiRequest/types';
import { getSessionId, getUserBySession } from '@libs/auth/server';
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const sessionId = getSessionId(req);
  const user = await getUserBySession(sessionId);
  if (user !== null) {
    const result: SessionResponse = {
      user: user.user,
      sessionId,
    };

    res.status(ApiStatus.Ok).json(result);
    return;
  }
  //TODO: better errors
  res.status(ApiStatus.AuthorizationError).json({});
}

export default handler
