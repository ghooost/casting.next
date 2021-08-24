import { AuthError, SessionResponse, UserProfile } from '@shared/auth';
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * In: session
 * Out: session and userProfile or error
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200);
}

export default handler
