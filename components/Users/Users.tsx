import { CheckBoxes } from '@components/CheckBoxes'
import { Submit } from '@components/Submit'
import { TextInput } from '@components/TextInput'
import { Pages } from '@datatypes/pages'
import { UserProfile, UserRole, UsersCollectionItem } from '@datatypes/users'
import Link from 'next/link'
import React, { FC, useCallback, useState } from 'react'

import styles from './styles.module.css'

type UsersProps = {
  users: UsersCollectionItem[] | null;
  error: string | null;
  isLoading: boolean;
  onUserClick: (data: UsersCollectionItem) => void;
  onCancelEdit: () => void;
  userToEdit: UsersCollectionItem | null;
}

export const Users: FC<UsersProps> = (props) => {
  const { users, userToEdit, isLoading, onUserClick, onCancelEdit} = props;

  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');

  const handlePassChange = useCallback((value: string) => {
    setPass(value);
  }, [setPass]);

  const handlePass2Change = useCallback((value: string) => {
    setPass2(value);
  }, [setPass2]);

  const handleCancel = useCallback(() => {
    onCancelEdit();
  }, [onCancelEdit]);

  return (
    <>
      <section className={styles.container}>
        {
          users?.map((item) => {
            const {user} = item;
            if (user === userToEdit?.user) {
              return (
                <div key={user.email} className={styles.userEdit}>
                  <div className={styles.field}>
                    {user.email}
                  </div>
                  <TextInput value={pass} disabled={isLoading} placeholder="Password" onChange={handlePassChange} />
                  <TextInput value={pass2} disabled={isLoading} placeholder="Confirm password" onChange={handlePass2Change} />
                  <CheckBoxes
                    value={user.role}
                    options={[
                      { value: UserRole.client, label: 'client' },
                      { value: UserRole.admin, label: 'admin' },
                      { value: UserRole.blocked, label: 'blocked' },
                    ]}
                    onChange={(value) => {
                      console.log(value);
                    }}
                  />
                  <div className={styles.rowHolder}>
                    <Submit label="Cancel" onClick={handleCancel}/>
                    <Submit label="Update" />
                  </div>
                </div>
              );
            }
            return (
              <div key={user.email} className={styles.row} onClick={() => onUserClick(item)}>
                <div className={styles.email}>
                  {user.email}
                </div>
                <div className={styles.roles}>
                  {user.role}
                </div>
              </div>
            )
          })
        }
      </section>
    </>
  )
}
