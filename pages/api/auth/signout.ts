import { AuthError, SessionResponse, UserProfile } from '@shared/auth';
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * In: session
 * Out: session and userProfile or error
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  //TODO: better status
  res.status(200).json({});
}

export default handler
