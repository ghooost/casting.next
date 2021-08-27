import { authActions, authSelectors } from '@store/slices/auth'
import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SignUp } from '../SignUp'

export const SignUpContainer: FC = () => {
  const dispatch = useDispatch();

  const error = useSelector(authSelectors.getError);
  const isLoading = useSelector(authSelectors.isLoading);

  const handleSubmit = useCallback((login, pass) => {
    dispatch(authActions.doSignUp({login, pass}));
  }, [dispatch]);

  return <SignUp
    error={error}
    isLoading={isLoading}
    onSubmit={handleSubmit}
  />
}
