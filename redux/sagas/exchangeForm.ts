// Types
import { ReduxActionType, getEstimateParams, getMinAmountParams } from '../../interfaces';

// Redux
import { takeEvery, put, call } from 'redux-saga/effects';

// Actions Types
import {
  _updateMinAmount,
  _updateMinAmountSaga,
  _updateAmountFromEstimateTo,
  _updateCurrencyList,
  _updateCurrencyListSaga,
  _updateEstimate,
  _updateEstimateSaga,
} from '../types/exchangeForm';

// Actions
import { updateCurrencyList, updateEstimate, updateMinAmount } from '../actions/exchangeForm';

// Lib
import { getCurrencyList, getEstimate, getMinAmount } from '../../lib/fetch';

function* updateCurrencyListSaga() {
  const currencyList = yield call(getCurrencyList);
  yield put(updateCurrencyList(currencyList));
}

function* updateEstimateSaga({ payload }: ReduxActionType<string, getEstimateParams>) {
  console.log('updateEstimateSaga');
  const estimate = yield call(getEstimate, {
    amount: payload.amount,
    from: payload.from,
    to: payload.to,
  });
  yield put(updateEstimate(estimate));
}

function* updateMinAmountSaga({ payload }: ReduxActionType<string, getMinAmountParams>) {
  const minAmount = yield call(getMinAmount, { from: payload.from, to: payload.to });
  yield put(updateMinAmount(minAmount));
}

export function* exchangeFormWatcherSaga() {
  yield takeEvery(_updateEstimateSaga, updateEstimateSaga);
  yield takeEvery(_updateMinAmountSaga, updateMinAmountSaga);
  yield takeEvery(_updateCurrencyListSaga, updateCurrencyListSaga);
}
