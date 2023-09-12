import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { token } from './token';
import { initialized } from './initialized';
import { profile } from './profile';
import { users } from './users';
import { animals } from './animals';
import { medicines } from './medicines';
import { diseases } from './diseases';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    initialized,
    token,
    profile,
    users,
    animals,
    medicines,
    diseases,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
