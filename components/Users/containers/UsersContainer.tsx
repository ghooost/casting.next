import { authActions, authSelectors } from '@store/slices/auth'
import { usersActions, usersSelectors } from '@store/slices/users'
import React, { FC, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Users } from '../Users'

export const UsersContainer: FC = () => {
  const dispatch = useDispatch();

  const users = useSelector(usersSelectors.getUsers);
  const error = useSelector(usersSelectors.getError);
  const isLoading = useSelector(usersSelectors.getIsLoading);
  const userToEdit = useSelector(usersSelectors.getUserToEdit);

  const handleClickUser = useCallback((data) => {
    dispatch(usersActions.editUser(data));
  }, [dispatch]);

  const handleCancel = useCallback(() => {
    dispatch(usersActions.editUser(null));
  }, [dispatch]);

  useEffect(()=>{
    dispatch(usersActions.loadUsers());
  }, [dispatch]);

  return <Users
    users={users}
    userToEdit={userToEdit}
    error={error}
    isLoading={isLoading}
    onUserClick={handleClickUser}
    onCancelEdit={handleCancel}
  />
}
