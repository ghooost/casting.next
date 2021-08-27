import { LayoutContainer, StrictMode } from '@components/Layout'
import { SignInContainer } from '@components/SignIn'
import React from 'react'

export default function Page() {

  return <LayoutContainer
    title="Sign In"
    description="Castings you can"
    strictMode={StrictMode.anonimous}
    fallbackUrl="/office"
  >
    <SignInContainer />
  </LayoutContainer>
}
