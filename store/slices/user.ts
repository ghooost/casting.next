import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthorizationError, LoginParams, UserProfile } from '@shared/user'
import type { RootState } from '../index'

type UserSlice = {
  user: UserProfile | null,
  isLoading: boolean;
  error: AuthorizationError;
}

const initialState: UserSlice = {
  user: null,
  isLoading: false,
  error: AuthorizationError.Empty,
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    postLogin: (state, { payload }: PayloadAction<LoginParams> ) => {
      state.user = null;
      state.isLoading = true;
      state.error = AuthorizationError.Empty;
    },
    doLogout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = AuthorizationError.Empty;
    },
    setAuthError: (state, { payload }: PayloadAction<AuthorizationError>) => {
      state.isLoading = false;
      state.error = payload;
    },
    setUser: (state, { payload }: PayloadAction<UserProfile>) => {
      state.user = payload;
      state.error = AuthorizationError.Empty;
      state.isLoading = false;
    }
  }
})

export const userSliceSelectors = {
  getUser: ({ userSlice }: RootState) => userSlice.user,
  isLoading: ({ userSlice }: RootState) => userSlice.isLoading,
  getError: ({ userSlice }: RootState) => userSlice.error,
};

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;