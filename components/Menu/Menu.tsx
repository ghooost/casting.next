import { Pages } from '@datatypes/pages';
import { UserProfile, UserRole } from '@datatypes/users';
import { doesUserHaveRole } from '@libs/auth/share';
import { i18n, i18nUse } from '@libs/i18n';
import Link from 'next/link';
import React, { FC, useCallback, useState } from 'react'

import keyset from './i18n'
import styles from './styles.module.css'

type MenuProps = {
  user: UserProfile | null,
  onLogout?: () => void;
  title: string;
}

export const Menu: FC<MenuProps> = (props) => {
  const { user, onLogout, title } = props;
  const [isOpened, setOpened] = useState(false);
  const handleClick=useCallback(() => {
    setOpened(!isOpened);
  }, [isOpened]);
  const handleLogout = useCallback(()=>{
    if(onLogout) {
      onLogout();
    }
  }, [onLogout])

  i18nUse(keyset);
  return (
    <div className={styles.main}>
      <a className={styles.logo} onClick={handleClick}>
        <svg viewBox="0 0 75 75" width="16" height="16" className={styles.ico}>
          <rect width="75" height="15"></rect>
          <rect y="30" width="75" height="15"></rect>
          <rect y="60" width="75" height="15"></rect>
        </svg>
        <span>{title}</span>
      </a>
      {isOpened &&
        <>
          <div className={styles.popup}>
            <Link href={Pages.Home}><a className={styles.link}>{i18n('home')}</a></Link>
            {user === null && <>
              <div className={styles.note}>{i18n('forAdmins')}</div>
              <Link href={Pages.SignIn}><a className={styles.link}>{i18n('signin')}</a></Link>
              <Link href={Pages.SignUp}><a className={styles.link}>{i18n('signup')}</a></Link>
            </>}
            {user !== null && <>
              <Link href={Pages.Office}><a className={styles.link}>{i18n('office')}</a></Link>
              {doesUserHaveRole(user, UserRole.admin) &&
                <Link href={Pages.Users}><a className={styles.link}>{i18n('users')}</a></Link>
              }
              <a className={styles.link} onClick={handleLogout}>{i18n('signout')}</a>
            </>}

          </div>
          <div className={styles.popupCover} onClick={handleClick}/>
        </>
      }
    </div>
  )
}