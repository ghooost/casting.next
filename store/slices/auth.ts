import { SignInParams } from '@datatypes/apiAuth'
import { UserProfile } from '@datatypes/users'
import { AuthError } from "@libs/auth/share"
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../index'

type AuthSlice = {
  user: UserProfile | null;
  isSessionChecked: boolean;
  isLoading: boolean;
  session: string;
  error: AuthError;
}

const initialState: AuthSlice = {
  user: null,
  isSessionChecked: false,
  isLoading: false,
  session: '',
  error: AuthError.Empty,
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    doCheck: (state) => {
      state.isSessionChecked = false;
    },
    setSessionChecked: (state) => {
      state.isSessionChecked = true;
    },
    toggleLoading: (state) => {
      state.isLoading = true;
    },
    doSignIn: (state, { payload }: PayloadAction<SignInParams>) => {
      state.user = null;
      state.isLoading = true;
      state.error = AuthError.Empty;
    },
    doSignUp: (state, { payload }: PayloadAction<SignInParams>) => {
      state.user = null;
      state.isLoading = true;
      state.error = AuthError.Empty;
    },
    doSignOut: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = AuthError.Empty;
    },
    setAuthError: (state, { payload }: PayloadAction<AuthError>) => {
      state.isLoading = false;
      state.error = payload;
    },
    setUser: (state, { payload }: PayloadAction<UserProfile>) => {
      state.user = payload;
      state.error = AuthError.Empty;
      state.isLoading = false;
    },
    setSession: (state, { payload }: PayloadAction<string>) => {
      state.error = AuthError.Empty;
      state.isLoading = false;
      state.session = payload;
    },
    clearSession: (state) => {
      state.error = AuthError.Empty;
      state.isLoading = false;
      state.session = '';
      state.user = null;
    },
  }
})

export const authSelectors = {
  getUser: ({ authSlice }: RootState) => authSlice.user,
  isLoading: ({ authSlice }: RootState) => authSlice.isLoading,
  getError: ({ authSlice }: RootState) => authSlice.error,
  getSession: ({ authSlice }: RootState) => authSlice.session,
  getSessionChecked: ({ authSlice }: RootState) => authSlice.isSessionChecked,
};

export const authActions = authSlice.actions;

export default authSlice.reducer;