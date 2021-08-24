import React, { FC } from 'react'
import Head from 'next/head'
import styles from './styles.module.css'
import { ProfileMenuContainer } from '@components/ProfileMenu'
import { UserProfile } from '@shared/auth'

type LayoutProps = {
  user: UserProfile;
  title: string;
  description: string;
  backUrl?: string;
};

export const Layout: FC<LayoutProps> = (props) => {
  const {user, title, description, children} = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.bar}>
          <a className={styles.logo}>{title}</a>
          <ProfileMenuContainer user={user}/>
        </div>

        <main className={styles.main}>{children}</main>

        <div className={styles.footer}/>
      </div>
    </>
  )
}
