import React from 'react'
import { useSelector } from 'react-redux';

import { Layout } from '@components/Layout'
import { authSelectors } from '@store/slices/auth';
import { SignUpContainer } from '@components/SignUp';

export default function Page() {
  const user = useSelector(authSelectors.getUser);
  return <Layout
    title="SignUp"
    description="Castings you can"
    user={user}
    backUrl="/"
  >
    <SignUpContainer />
  </Layout>
}
