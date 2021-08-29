import { LayoutContainer, StrictMode } from '@components/Layout'
import { SignInContainer } from '@components/SignIn'
import { Pages } from '@datatypes/pages'
import React from 'react'

export default function Page() {

  return <LayoutContainer
    title="Sign In"
    description="Castings you can"
    strictMode={StrictMode.Anonimous}
    fallbackUrl={Pages.Office}
  >
    <SignInContainer />
  </LayoutContainer>
}
