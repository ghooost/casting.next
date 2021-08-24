import { Pages } from '@components/CommonPage';
import { UserProfile } from '@shared/user';
import Link from 'next/link';
import React, { ChangeEvent, FC, useCallback, useState } from 'react'

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
  return (
    <div className={styles.main}>
      {user === null && <>
        <div className={styles.note}>For Admins:</div>
        <Link href={Pages.signin}><a className={styles.link}>Sign In</a></Link>
        <Link href={Pages.signup}><a className={styles.link}>Sign Up</a></Link>
      </>}
      {user !== null && <>
          <a className={styles.link} onClick={handleClick}>{`Hi, ${user.email}`}</a>
          {isOpened &&
            <div className={styles.profilePopup}>
              <a className={styles.link} onClick={handleClick}>{`Hi, ${user.email}`}</a>
              <p className={styles.note}>{user.roles.join(', ')}</p>
              <a className={styles.link} onClick={handleLogout}>Log out</a>
            </div>
          }
      </>}
      {user && isOpened &&
        <div className={styles.popupCover} onClick={handleClick}/>
      }
    </div>
  )
}