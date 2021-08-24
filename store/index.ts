import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/auth'
import { authSaga } from './sagas/auth'
import createSagaMiddleware from '@redux-saga/core';
import { all } from '@redux-saga/core/effects';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([
    authSaga(),
  ])
}

export const store = configureStore({
  reducer: {
    authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
