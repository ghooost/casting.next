import { authActions, authSelectors } from '@store/slices/auth'
import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SignIn } from '../SignIn'

export const SignInContainer: FC = () => {
  const dispatch = useDispatch();

  const user = useSelector(authSelectors.getUser);
  const error = useSelector(authSelectors.getError);
  const isLoading = useSelector(authSelectors.isLoading);

  const handleSubmit = useCallback((email, pass) => {
    dispatch(authActions.doSignIn({email, pass}));
  }, [dispatch]);

  if (user !== null) {
    return null;
  };

  return <SignIn
    error={error}
    isLoading={isLoading}
    onSubmit={handleSubmit}
  />
}
