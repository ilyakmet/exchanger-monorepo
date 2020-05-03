// Redux
import { takeEvery, put, call } from 'redux-saga/effects';

// Actions Types
import {
  // _updateMinAmount,
  // _updateMinAmountSaga,
  _updateAmountFromEstimateTo,
  _updateCurrencyList,
  _updateCurrencyListSaga,
} from '../types/exchangeForm';

// Actions
import { updateCurrencyList } from '../actions/exchangeForm';

// Lib
import { getCurrencyList } from '../../lib/fetch';

// function* updateMinAmountSaga(payload: string) {
//   console.log('updateMinAmountSaga');
//   const minAmount = yield call(getMinAmount, payload);
//   yield put(updateMinAmount(minAmount));
// }

function* updateCurrencyListSaga() {
  console.log('updateCurrencyListSaga');
  const currencyList = yield call(getCurrencyList);
  yield put(updateCurrencyList(currencyList));
}

export function* exchangeFormWatcherSaga() {
  // yield takeEvery(_updateMinAmountSaga, updateMinAmountSaga);
  yield takeEvery(_updateCurrencyListSaga, updateCurrencyListSaga);
}
