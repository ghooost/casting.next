import { Menu } from '@components/Menu'
import { UserProfile } from '@datatypes/users';
import Head from 'next/head'
import React, { FC } from 'react'

import styles from './styles.module.css'

export type LayoutProps = {
  title: string;
  description: string;
  user: UserProfile;
  isSessionChecked: boolean;
  onLogout: ()=>void;
};

export const Layout: FC<LayoutProps> = (props) => {
  const { user, title, description, children, isSessionChecked, onLogout} = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {!isSessionChecked &&
          <div className={styles.loader}>oOoOo</div>
        }
        {isSessionChecked &&
          <>
            <div className={styles.bar}>
              <Menu title={title} user={user} onLogout={onLogout}/>
              {user !== null && <div className={styles.hi}>Hi, {user.email}</div>}
            </div>

            <main className={styles.main}>{children}</main>
            <div className={styles.footer} />
          </>
        }
      </div>
    </>
  )
}
