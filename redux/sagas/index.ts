import { all } from 'redux-saga/effects';
import { counterStream } from './counterSaga';

export function* rootSaga() {
  yield all([counterStream()]);
}
