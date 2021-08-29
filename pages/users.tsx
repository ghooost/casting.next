import { LayoutContainer, StrictMode } from '@components/Layout'
import { UsersContainer } from '@components/Users/containers/UsersContainer'
import { Pages } from '@datatypes/pages'
import React from 'react'

export default function Page() {

  return <LayoutContainer
    title="Users"
    description="Castings you can"
    strictMode={StrictMode.Authorized}
    fallbackUrl={Pages.Home}
  >
    <UsersContainer/>
  </LayoutContainer>
}
