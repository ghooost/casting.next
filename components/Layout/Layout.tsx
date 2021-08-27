import React, { FC, useEffect } from 'react'
import Head from 'next/head'
import styles from './styles.module.css'
import { ProfileMenuContainer } from '@components/ProfileMenu'
import { UserProfile } from '@shared/auth'

export type LayoutProps = {
  title: string;
  description: string;
  user: UserProfile;
  isSessionChecked: boolean;
};

export const Layout: FC<LayoutProps> = (props) => {
  const { user, title, description, children, isSessionChecked} = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {!isSessionChecked &&
          <div className={styles.loader}>OoO</div>
        }
        {isSessionChecked &&
          <>
            <div className={styles.bar}>
              <a className={styles.logo}>
                <svg viewBox="0 0 75 75" width="16" height="16" className={styles.ico}>
                  <rect width="75" height="15"></rect>
                  <rect y="30" width="75" height="15"></rect>
                  <rect y="60" width="75" height="15"></rect>
                </svg>
                <span>{title}</span>
              </a>
              <ProfileMenuContainer user={user} />
            </div>

            <main className={styles.main}>{children}</main>
            <div className={styles.footer} />
          </>
        }
      </div>
    </>
  )
}
