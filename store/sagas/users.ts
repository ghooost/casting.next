import { UsersCollectionItem } from '@datatypes/users';
import { apiUsersAdd, apiUsersDelete, apiUsersList, apiUsersUpdate } from '@libs/users/client';
import { PayloadAction } from '@reduxjs/toolkit';
import { usersActions } from '@store/slices/users';
import { call, put, takeEvery } from 'redux-saga/effects'

function* loadUsers() {
  try {
    const list: UsersCollectionItem[] = yield call(apiUsersList);
    yield put(usersActions.onLoadUsersDone(list));
  } catch (err) {
    yield put(usersActions.onLoadUsersError('something happens'));
  }
}

function* deleteUser({ payload }: PayloadAction<string>) {
  try {
    yield call(apiUsersDelete, {email: payload});
    yield call(loadUsers);
  } catch (err) {
    yield put(usersActions.onLoadUsersError('something happens'));
  }
}

function* saveUser({ payload }: PayloadAction<UsersCollectionItem>) {
  try {
    const data = {
      email: payload.user.email.trim(),
      pass: payload.user.pass.trim(),
      role: payload.user.role,
    }
    if (payload._id) {
      yield call(apiUsersUpdate, data);
    } else {
      yield call(apiUsersAdd, data);
    }
    yield call(loadUsers);
  } catch (err) {
    yield put(usersActions.onLoadUsersError('something happens'));
  }
}


export function* usersSaga() {
  yield takeEvery(usersActions.loadUsers, loadUsers);
  yield takeEvery(usersActions.deleteUser, deleteUser);
  yield takeEvery(usersActions.saveUser, saveUser);
}
