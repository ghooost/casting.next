import { UserRole, UsersCollectionItem } from '@datatypes/users'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../index'

type UsersSlice = {
  users: UsersCollectionItem[] | null;
  userToEdit: UsersCollectionItem | null;
  error: string | null;
  isLoading: boolean;
}

const initialState: UsersSlice = {
  users: null,
  userToEdit: null,
  isLoading: false,
  error: null,
}

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    loadUsers: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    onLoadUsersDone: (state, { payload }: PayloadAction<UsersCollectionItem[]>) => {
      state.users = payload;
      state.isLoading = false;
    },
    onLoadUsersError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isLoading = false;
    },
    deleteUser: (state, { payload }: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = null;
    },
    onDeleteUserDone: (state, { payload }: PayloadAction<UsersCollectionItem[]>) => {
      state.users = payload;
      state.isLoading = false;
    },
    onDeleteUserError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.isLoading = false;
    },
    addUser: (state) => {
      state.userToEdit = {
        user: {
          email: '',
          pass: '',
          role: UserRole.client,
        },
        sessions: [],
      };
    },
    editUser: (state, { payload }: PayloadAction<UsersCollectionItem>) => {
      state.userToEdit = payload;
    },
    saveUser: (state, { payload }: PayloadAction<UsersCollectionItem>) => {
      state.isLoading = true;
      state.error = null;
    },
    onSaveUserDone: (state, { payload }: PayloadAction<UsersCollectionItem>) => {
      state.userToEdit = payload;
      state.isLoading = false;
    },
    onSaveUserError: (state, { payload }: PayloadAction<string | null>) => {
      state.error = payload;
      state.isLoading = false;
    },
    closeUserEdit: (state) => {
      state.userToEdit = null;
      state.error = '';
    },
  }
})

export const usersSelectors = {
  getUsers: ({ usersSlice }: RootState) => usersSlice.users,
  getUserToEdit: ({ usersSlice }: RootState) => usersSlice.userToEdit,
  getError: ({ usersSlice }: RootState) => usersSlice.error,
  getIsLoading: ({ usersSlice }: RootState) => usersSlice.isLoading,
};

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;