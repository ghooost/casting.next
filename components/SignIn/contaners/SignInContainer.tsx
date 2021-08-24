import { authActions, authSelectors } from '@store/slices/auth'
import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SignIn } from '../SignIn'

export const SignInContainer: FC = () => {
  const dispatch = useDispatch();

  const error = useSelector(authSelectors.getError);
  const isLoading = useSelector(authSelectors.isLoading);

  const handleSubmit = useCallback((login, pass) => {
    dispatch(authActions.doSignIn({login, pass}));
  }, [dispatch]);

  return <SignIn
    error={error}
    isLoading={isLoading}
    onSubmit={handleSubmit}
  />
}
