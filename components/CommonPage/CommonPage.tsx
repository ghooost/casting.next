import React, { FC } from 'react'
import Head from 'next/head'
import styles from './styles.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { ProfileMenuContainer } from '@components/ProfileMenu'

enum Pages {
  home = '',
  events = '',
  event = '',
  admins = '',
}

type CommonPageProps = {

};

export const CommonPage: FC<CommonPageProps> = (props) => {
  const router = useRouter()
  console.log(router.query);

  return (
    <>
      <Head>
        <title>Casting</title>
        <meta name="description" content="Casting description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.bar}>
          <div className={styles.logo}>Casting</div>
          <ProfileMenuContainer/>
        </div>

        <main>
          <Link href="/manage"><a>Go to manage page</a></Link>
          <Link href="/event"><a>Go to event page</a></Link>
        </main>

        <footer></footer>
      </div>
    </>
  )
}
