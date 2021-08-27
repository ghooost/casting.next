import { Casting } from '@components/Casting';
import { Layout } from '@components/Layout'
import { authSelectors } from '@store/slices/auth';
import React from 'react'
import { useSelector } from 'react-redux';
import { getPublicCastingList } from './api/casting/public';
import { CastingPublic } from "../shared/casting";

type PageProps = {
  castings: CastingPublic[],
}

export default function Page(props: PageProps) {
  const {castings} = props;
  const user = useSelector(authSelectors.getUser);
  return <Layout
    title="Castings"
    description="Castings you can"
    user={user}
  >
    {castings.map((casting) => (
      <Casting key={casting.id} data={casting} isEditable={false}/>
    ))}
  </Layout>
}

export async function getServerSideProps(context) {
  return {
    props: {
      castings: getPublicCastingList(),
    },
  }
}
