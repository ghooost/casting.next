import { Layout } from '@components/Layout'
import { authSelectors } from '@store/slices/auth';
import React from 'react'
import { useSelector } from 'react-redux';

export default function Page() {
  const user = useSelector(authSelectors.getUser);
  return <Layout
    title="Office"
    description="Castings you can"
    user={user}
    backUrl="/"
  >
    <p>Test test test</p>
  </Layout>
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   return { props: { public } }
// }
