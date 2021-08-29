import { LayoutContainer, StrictMode } from '@components/Layout'
import { SignUpContainer } from '@components/SignUp'
import { Pages } from '@datatypes/pages'
import React from 'react'

export default function Page() {

  return <LayoutContainer
    title="Sign Up"
    description="Castings you can"
    strictMode={StrictMode.Anonimous}
    fallbackUrl={Pages.Office}
  >
    <SignUpContainer />
  </LayoutContainer>
}
