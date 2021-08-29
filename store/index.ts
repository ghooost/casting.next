import createSagaMiddleware from '@redux-saga/core';
import { all } from '@redux-saga/core/effects';
import { configureStore } from '@reduxjs/toolkit'

import { authSaga } from './sagas/auth'
import { usersSaga } from './sagas/users';
import authSlice from './slices/auth'
import usersSlice from './slices/users'

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([
    authSaga(),
    usersSaga(),
  ])
}

export const store = configureStore({
  reducer: {
    authSlice,
    usersSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
