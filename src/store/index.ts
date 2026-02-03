import { configureStore } from '@reduxjs/toolkit';
import { dndReducer } from './dndSlice';
import createSagaMiddleware from 'redux-saga';
import { token } from './token';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    dnd: dndReducer,
    token,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;