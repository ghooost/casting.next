import { Home } from '@components/Home'
import { LayoutContainer } from '@components/Layout'
import React from 'react'

export default function Page() {

  return <LayoutContainer
    title="Castings"
    description="Castings you can"
  >
    <Home/>
  </LayoutContainer>
}
