import { PayloadAction } from '@reduxjs/toolkit';
import { userSliceActions, userSliceSelectors } from '@store/slices/user';
import { call, put, select, takeEvery } from 'redux-saga/effects'
import { AuthorizationError, LoginParams, UserProfile } from '@shared/user';
import { apiLogin } from '@clientapi/login';

function* doLogin({ payload }: PayloadAction<LoginParams> ) {
  try {
    const data = yield call(apiLogin, payload);
    yield put(userSliceActions.setUser(data));
  } catch {
    yield put(userSliceActions.setAuthError(AuthorizationError.WrongLogin));
  }
}

export function* userSaga() {
  yield takeEvery(userSliceActions.postLogin, doLogin);
}
