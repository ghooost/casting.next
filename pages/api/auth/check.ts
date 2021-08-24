import { AuthError, AUTHHEADER, SessionResponse, UserProfile } from '@shared/auth';
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * In: session
 * Out: session and userProfile or error
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const session = req.headers[AUTHHEADER];
  if (session) {
    const result: SessionResponse = {
      user: {
        email: 'test@test.com',
        roles: ['admin'],
      },
      session: '1233445',
      error: AuthError.Empty,
    };

    res.status(200).json(result);
    return;
  }
  res.status(403).json({
    error: AuthError.Unknown,
  });
}

export default handler
