import { userSliceActions, userSliceSelectors } from '@store/slices/user'
import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProfileMenu } from '../ProfileMenu'

export const ProfileMenuContainer: FC = () => {
  const dispatch = useDispatch();

  const user = useSelector(userSliceSelectors.getUser);

  const handleLogout = useCallback(() => {
    dispatch(userSliceActions.doLogout());
  }, [dispatch]);

  return <ProfileMenu
    user={user}
    onLogout={handleLogout}
  />
}
