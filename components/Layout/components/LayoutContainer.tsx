import { isAtServer } from '@libs/utils';
import { authActions, authSelectors } from '@store/slices/auth'
import { useRouter } from 'next/dist/client/router';
import React, { FC, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Layout, LayoutProps } from '../Layout'

export enum StrictMode {
  Authorized,
  Anonimous,
};

type LayoutContainerProps = Pick<LayoutProps, 'title' | 'description'> & {
  strictMode?: StrictMode;
  fallbackUrl?: string;
};

export const LayoutContainer: FC<LayoutContainerProps> = (props) => {
  const {strictMode, fallbackUrl} = props;
  const isSessionChecked = useSelector(authSelectors.getSessionChecked);
  const user = useSelector(authSelectors.getUser);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (isSessionChecked && !isAtServer()) {
      const mode = user === null ? StrictMode.Anonimous : StrictMode.Authorized;

      if (strictMode !== undefined && strictMode !== mode && fallbackUrl) {
        router.replace(fallbackUrl);
        return;
      }
    }
  }, [fallbackUrl, isSessionChecked, router, strictMode, user]);

  useEffect(() => {
    if (!isSessionChecked && !isAtServer()) {
      dispatch(authActions.doCheck());
    }
  }, [dispatch, isSessionChecked]);

  const handleLogout = useCallback(() => {
    dispatch(authActions.doSignOut());
  }, [dispatch]);

  const newProps = {
    ...props,
    isSessionChecked,
    user,
    onLogout: handleLogout,
  }
  return <Layout {...newProps}/>
}
