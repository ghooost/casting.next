import React, { FC } from 'react'
import Head from 'next/head'
import styles from './styles.module.css'
import { ProfileMenuContainer } from '@components/ProfileMenu'
import Link from 'next/link'
import { UserProfile } from '@shared/auth'

type LayoutProps = {
  user: UserProfile;
  title: string;
  description: string;
  backUrl?: string;
};

export const Layout: FC<LayoutProps> = (props) => {
  const { user, title, description, children, backUrl} = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.bar}>
          {backUrl ? (
            <Link href={backUrl}><a className={styles.logo}>&lt;&nbsp;{title}</a></Link>
          ) : (
              <a className={styles.logo}>{title}</a>
          )}
          <ProfileMenuContainer user={user}/>
        </div>

        <main className={styles.main}>{children}</main>

        <div className={styles.footer}/>
      </div>
    </>
  )
}
