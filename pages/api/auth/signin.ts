import { SessionResponse, SignInParams, UserProfile } from '@shared/auth';
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * In: session
 * Out: session and userProfile or error
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const data: SignInParams = req.body;
  if (data.login !== 'test@test.com') {
    //TODO: better errors
    res.status(403).json({});
    return;
  };

  const result: SessionResponse = {
    user: {
      email: 'test@test.com',
      roles: ['admin'],
    },
    session: '1233445',
  };

  res.status(200).json(result);
}

export default handler
