import { userSliceActions, userSliceSelectors } from '@store/slices/user'
import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HomePage } from '../HomePage'

export const HomePageContainer: FC = () => {
  const dispatch = useDispatch();

  const error = useSelector(userSliceSelectors.getError);
  const isLoading = useSelector(userSliceSelectors.isLoading);

  const handleSubmit = useCallback((login, pass) => {
    dispatch(userSliceActions.postLogin({login, pass}));
  }, [dispatch]);

  return <HomePage
    castings={[]}
  />
}
