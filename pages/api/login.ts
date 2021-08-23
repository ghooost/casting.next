import { UserProfile } from '@shared/user';
import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const userProfile: UserProfile = {
    email: 'test@test.com',
    roles: ['admin'],
    session: '1234563',
  };
  res.status(200).json(userProfile)
}

export default handler
