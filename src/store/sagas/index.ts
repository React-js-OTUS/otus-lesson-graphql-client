import { all } from 'redux-saga/effects';
import { tokenSaga } from './token';

export default function* rootSaga() {
  yield all([tokenSaga()]);
}
