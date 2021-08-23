import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user'
import { userSaga } from './sagas/user'
import createSagaMiddleware from '@redux-saga/core';
import { all } from '@redux-saga/core/effects';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([
    userSaga(),
  ])
}

export const store = configureStore({
  reducer: {
    userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
