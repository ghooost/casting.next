import { userSliceActions, userSliceSelectors } from '@store/slices/user'
import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginCover } from '../LoginCover'

export const LoginCoverContainer: FC = () => {
  const dispatch = useDispatch();

  const error = useSelector(userSliceSelectors.getError);
  const isLoading = useSelector(userSliceSelectors.isLoading);

  const handleSubmit = useCallback((login, pass) => {
    dispatch(userSliceActions.postLogin({login, pass}));
  }, [dispatch]);

  return <LoginCover
    error={error}
    isLoading={isLoading}
    onSubmit={handleSubmit}
  />
}
