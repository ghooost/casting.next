import React from 'react'
import { useSelector } from 'react-redux';

import { Layout } from '@components/Layout'
import { authSelectors } from '@store/slices/auth';
import { SignUpContainer } from '@components/SignUp';
import { useRouter } from 'next/dist/client/router';

export default function Page() {
  const user = useSelector(authSelectors.getUser);
  const router = useRouter();
  if (user && typeof window !== 'undefined') {
    router.replace('/office');
    return null;
  };
  return <Layout
    title="Sign Up"
    description="Castings you can"
    user={user}
    backUrl="/"
  >
    <SignUpContainer />
  </Layout>
}
