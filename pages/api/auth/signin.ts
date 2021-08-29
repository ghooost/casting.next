import { SessionResponse, SignInParams } from '@datatypes/apiAuth';
import { ApiStatus } from '@libs/apiRequest/types';
import { getUserByEmailPass } from '@libs/auth/server';
import { MongoCollections, update } from '@libs/mongo/server';
import { NextApiRequest, NextApiResponse } from 'next'
import short from 'short-uuid';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data: SignInParams = req.body;
  const login = data.email.trim();
  const pass = data.pass.trim();
  const user = await getUserByEmailPass(login, pass);
  if (!user) {
    //TODO: better errors
    res.status(ApiStatus.BadRequestError).json({});
    return;
  };
  const sessionId = short.uuid();
  await update(
    MongoCollections.users,
    { _id: user._id },
    { sessions: user.sessions.concat({ id: sessionId, validTill: 0})}
  );
  const result: SessionResponse = {
    user: user.user,
    sessionId,
  };

  res.status(ApiStatus.Ok).json(result);
}

export default handler
