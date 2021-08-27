import { PayloadAction } from '@reduxjs/toolkit';
import { authActions } from '@store/slices/auth';
import { call, put, takeEvery } from 'redux-saga/effects'
import { AuthError, SignInParams, SessionResponse } from "@shared/auth";
import { apiCheck, apiSignIn, apiSignOut, apiSignUp } from '@client/auth';
import { lsGetItem, lsRemoveItem, lsSetItem } from '@client/localStorage';

function* doSignIn({ payload }: PayloadAction<SignInParams> ) {
  try {
    const data: SessionResponse = yield call(apiSignIn, payload);
    lsSetItem('session', data.sessionId);
    yield put(authActions.setSession(data.sessionId));
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

function* doSignUp({ payload }: PayloadAction<SignInParams>) {
  try {
    const data: SessionResponse = yield call(apiSignUp, payload);
    lsSetItem('session', data.sessionId);
    yield put(authActions.setSession(data.sessionId));
    yield put(authActions.setUser(data.user));
    yield put(authActions.setAuthError(AuthError.Empty));
  } catch (err) {
    yield put(authActions.setAuthError(AuthError.WrongLogin));
  }
}

function* doCheck() {
  try {
    const session = lsGetItem('session');
    if (!session) {
      yield put(authActions.setSessionChecked());
      return;
    }
    yield put(authActions.toggleLoading());
    yield put(authActions.setSession(session));
    const data: SessionResponse = yield call(apiCheck);
    yield put(authActions.setSession(data.sessionId));
    yield put(authActions.setUser(data.user));
  } catch {
    yield put(authActions.clearSession());
  }
  yield put(authActions.setSessionChecked());
}

export function* authSaga() {
  yield call(doCheck);
  yield takeEvery(authActions.doSignIn, doSignIn);
  yield takeEvery(authActions.doSignOut, doSignOut);
  yield takeEvery(authActions.doSignUp, doSignUp);
}
