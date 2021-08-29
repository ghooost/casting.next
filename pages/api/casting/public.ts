import { Casting, CastingPublic } from 'datatypes/casting';
import { NextApiRequest, NextApiResponse } from 'next'

const castingsCollectionStub: Casting[] = [
  {
    id: '1',
    name: 'Casting 1',
    note: '',
    authors: ['test@test.com'],
    isPublic: true,
    isOpen: true,
  },
  {
    id: '2',
    name: 'Casting 2',
    note: '',
    authors: ['test@test.com'],
    isPublic: true,
    isOpen: true,
  },
  {
    id: '3',
    name: 'Casting 3',
    note: '',
    authors: ['test@test.com'],
    isPublic: true,
    isOpen: true,
  },
];

export const getPublicCastingList = (): CastingPublic[] => {
  //TODO: real search
  return castingsCollectionStub
    .filter((item) => item.isPublic)
    .map((item) => ({
      id: item.id,
      name: item.name,
      note: item.note,
    }))
};


/**
 * Out: public castings
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(getPublicCastingList());
}

export default handler
