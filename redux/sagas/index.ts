import { all } from 'redux-saga/effects';
import { exchangeFormWatcherSaga } from './exchangeForm';

export function* rootSaga() {
  yield all([exchangeFormWatcherSaga()]);
}
