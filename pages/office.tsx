import { LayoutContainer, StrictMode } from '@components/Layout'
import { Pages } from '@datatypes/pages'
import React from 'react'

export default function Page() {

  return <LayoutContainer
    title="Office"
    description="Castings you can"
    strictMode={StrictMode.Authorized}
    fallbackUrl={Pages.Home}
  >

  </LayoutContainer>
}
