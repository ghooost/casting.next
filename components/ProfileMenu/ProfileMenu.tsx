import { UserProfile } from '@shared/auth';
import { i18n, i18nUse } from '@shared/i18n';
import Link from 'next/link';
import React, { FC, useCallback, useState } from 'react'
import keyset from './i18n'

import styles from './styles.module.css'


type ProfileMenuProps = {
  user: UserProfile,
  onLogout?: () => void;
}

export const ProfileMenu: FC<ProfileMenuProps> = (props) => {
  const { user, onLogout } = props;
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
      {user === null && <>
        <div className={styles.note}>{i18n('forAdmins')}</div>
        <Link href={`/signin`}><a className={styles.link}>{i18n('signin')}</a></Link>
        <Link href={`/signup`}><a className={styles.link}>{i18n('signup')}</a></Link>
      </>}
      {user !== null && <>
          <a className={styles.link} onClick={handleClick}>{`Hi, ${user.email}`}</a>
          {isOpened &&
            <div className={styles.profilePopup}>
              <a className={styles.link} onClick={handleClick}>{`${i18n('hi')}${user.email}`}</a>
              <p className={styles.note}>{user.roles.join(', ')}</p>
              <Link href={`/office`}><a className={styles.link}>{i18n('office')}</a></Link>
              <a className={styles.link} onClick={handleLogout}>{i18n('signout')}</a>
            </div>
          }
      </>}
      {user && isOpened &&
        <div className={styles.popupCover} onClick={handleClick}/>
      }
    </div>
  )
}