import { Layout } from '@components/Layout'
import { authSelectors } from '@store/slices/auth';
import React from 'react'
import { useSelector } from 'react-redux';

export default function Page() {
  const user = useSelector(authSelectors.getUser);
  return <Layout
    title="Castings"
    description="Castings you can"
    user={user}
  >
    <p>Test test test</p>
  </Layout>
}
