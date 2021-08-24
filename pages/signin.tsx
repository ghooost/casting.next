import React from 'react'
import { useSelector } from 'react-redux';

import { Layout } from '@components/Layout'
import { SignInContainer } from '@components/SignIn';
import { authSelectors } from '@store/slices/auth';

export default function Page() {
  const user = useSelector(authSelectors.getUser);
  return <Layout
    title="SignIn"
    description="Castings you can"
    user={user}
    backUrl="/"
  >
    <SignInContainer />
  </Layout>
}
