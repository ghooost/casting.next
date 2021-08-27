import { isAtServer } from '@shared/utils';
import { authActions, authSelectors } from '@store/slices/auth'
import { useRouter } from 'next/dist/client/router';
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout, LayoutProps } from '../Layout'

export enum StrictMode {
  authorized,
  anonimous,
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
      const mode = user === null ? StrictMode.anonimous : StrictMode.authorized;

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

  const newProps = {
    ...props,
    isSessionChecked,
    user,
  }
  return <Layout {...newProps}/>
}
