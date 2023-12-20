import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { token } from './token';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    token,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
