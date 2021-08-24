import { UserProfile } from '@shared/auth';
import { authActions } from '@store/slices/auth'
import React, { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { ProfileMenu } from '../ProfileMenu'

type ProfileMenuContainerProps = {
  user: UserProfile;
};

export const ProfileMenuContainer: FC<ProfileMenuContainerProps> = (props) => {
  const dispatch = useDispatch();
  const {user} = props;

  const handleLogout = useCallback(() => {
    dispatch(authActions.doSignOut());
  }, [dispatch]);

  return <ProfileMenu
    user={user}
    onLogout={handleLogout}
  />
}
