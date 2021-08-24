import { PayloadAction } from '@reduxjs/toolkit';
import { authActions, authSelectors } from '@store/slices/auth';
import { call, put, select, takeEvery } from 'redux-saga/effects'
import { AuthError, SignInParams, SessionResponse, UserProfile } from '@shared/auth';
import { apiCheck, apiSignIn, apiSignOut } from '@clientapi/auth';
import { lsGetItem, lsRemoveItem, lsSetItem } from '@shared/localStorage';

function* doSignIn({ payload }: PayloadAction<SignInParams> ) {
  try {
    const data: SessionResponse = yield call(apiSignIn, payload);
    lsSetItem('session', data.session);
    yield put(authActions.setSession(data.session));
    yield put(authActions.setUser(data.user));
    yield put(authActions.setAuthError(AuthError.Empty));
  } catch (err){
    yield put(authActions.setAuthError(AuthError.WrongLogin));
  }
}

function* doSignOut() {
  try {
    lsRemoveItem('session');
    yield call(apiSignOut);
  } catch {
    yield put(authActions.setAuthError(AuthError.Unknown));
  }
}

function* doCheck() {
  try {
    const session = lsGetItem('session');
    if (!session) {
      return;
    }
    yield put(authActions.toggleLoading());
    yield put(authActions.setSession(session));
    const data: SessionResponse = yield call(apiCheck);
    yield put(authActions.setSession(data.session));
    yield put(authActions.setUser(data.user));
  } catch {
    yield put(authActions.clearSession());
  }
}

export function* authSaga() {
  yield call(doCheck);
  yield takeEvery(authActions.doSignIn, doSignIn);
  yield takeEvery(authActions.doSignOut, doSignOut);
}
