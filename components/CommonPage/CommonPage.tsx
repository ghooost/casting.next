import React, { FC } from 'react'
import Head from 'next/head'
import styles from './styles.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ProfileMenuContainer } from '@components/ProfileMenu'
import { LoginCoverContainer } from '@components/LoginCover'
import { castEnum } from '@libs/enum'
import { SignUpPageContainer } from '@components/SignUpPage'
import { HomePageContainer } from '@components/HomePage'

export enum Pages {
  home = '/',
  event = 'event',
  signin = 'signin',
  signup = 'signup',
}

type CommonPageProps = {

};

export const CommonPage: FC<CommonPageProps> = (props) => {
  const router = useRouter();
  const path = castEnum(
    Pages,
    Array.isArray(router.query?.path)
      ? router.query?.path[0]
      : router.query?.path,
  ) || Pages.home;


  return (
    <>
      <Head>
        <title>Casting</title>
        <meta name="description" content="Casting description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.bar}>
          <Link href={Pages.home}><a className={styles.logo}>Casting</a></Link>
          <ProfileMenuContainer/>
        </div>

        <main className={styles.main}>
          {path === Pages.home && <HomePageContainer />}
          {path === Pages.signin && <LoginCoverContainer />}
          {path === Pages.signup && <SignUpPageContainer />}
        </main>

        <div className={styles.footer}/>
      </div>
    </>
  )
}
