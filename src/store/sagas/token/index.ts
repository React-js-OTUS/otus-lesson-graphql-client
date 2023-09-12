import { put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { FetchResult } from '@apollo/client';
import { storage } from 'src/utils/storage';
import { client } from 'src/client';
import { TOKEN_KEY, tokenActions, tokenSelectors } from '../../token';
import { profileActions } from '../../profile';
import { animalsActions } from '../../animals';
import { usersActions } from '../../users';
import { medicinesActions } from '../../medicines';
import { diseasesActions } from '../../diseases';
import { GET_INITIAL_DATA, GetProfileResponse } from './connections';
import { TokenChannel } from './TokenChannel';

const tokenChannel = new TokenChannel('token-saver-channel');

export function* setToken(): Generator {
  const token = (yield select(tokenSelectors.get)) as string;
  tokenChannel.setToken(token);
  if (token) {
    storage.set(TOKEN_KEY, token);
    const { data: res } = (yield client.query({ query: GET_INITIAL_DATA })) as FetchResult<GetProfileResponse>;
    yield put(profileActions.set(res.profile));
    yield put(animalsActions.set(res.animals));
    yield put(usersActions.set(res.users));
    yield put(medicinesActions.set(res.medicines));
    yield put(diseasesActions.set(res.diseases));
  }
}
export function* clearToken() {
  storage.remove(TOKEN_KEY);
  tokenChannel.setToken(null);
  yield put(profileActions.set(null));
}

export function* getToken() {
  const token = storage.get(TOKEN_KEY);
  yield put(tokenActions.set(token));
}

export function* tokenSaga() {
  yield takeEvery(tokenActions.logout().type, clearToken);
  yield takeLatest(tokenActions.set().type, setToken); // setToken отправляет запрос, потому лучше использовать takeLatest
}
