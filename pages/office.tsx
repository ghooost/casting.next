import { LayoutContainer, StrictMode } from '@components/Layout'
import React from 'react'

export default function Page() {

  return <LayoutContainer
    title="Office"
    description="Castings you can"
    strictMode={StrictMode.authorized}
    fallbackUrl="/"
  >
    <p>Your office here</p>
  </LayoutContainer>
}
