// Types
import { ReduxActionType, getEstimateParams, getMinAmountParams } from '../../interfaces';

// Redux
import { takeEvery, put, call } from 'redux-saga/effects';

// Actions Types
import {
  _updateMinAmount,
  _updateMinAmountSaga,
  _updateCurrencyList,
  _updateCurrencyListSaga,
  _updateEstimateAndEstimatedArrivalSaga,
} from '../types/exchangeForm';

// Actions
import {
  updateCurrencyList,
  updateEstimateAndEstimatedArrival,
  updateMinAmount,
} from '../actions/exchangeForm';

// Lib
import { getCurrencyList, getEstimate, getMinAmount } from '../../lib/fetch';

function* updateCurrencyListSaga() {
  const currencyList = yield call(getCurrencyList);
  yield put(updateCurrencyList(currencyList));
}

function* updateEstimateAndEstimatedArrivalSaga({
  payload,
}: ReduxActionType<string, getEstimateParams>) {
  console.log('updateEstimateSaga');
  const response = yield call(getEstimate, {
    amount: payload.amount,
    from: payload.from,
    to: payload.to,
  });

  if (!response.warningMessage) yield put(updateEstimateAndEstimatedArrival(response));
  // ToDo warningMessage error case
}

function* updateMinAmountSaga({ payload }: ReduxActionType<string, getMinAmountParams>) {
  const minAmount = yield call(getMinAmount, { from: payload.from, to: payload.to });
  yield put(updateMinAmount(minAmount));
}

export function* exchangeFormWatcherSaga() {
  yield takeEvery(_updateEstimateAndEstimatedArrivalSaga, updateEstimateAndEstimatedArrivalSaga);
  yield takeEvery(_updateMinAmountSaga, updateMinAmountSaga);
  yield takeEvery(_updateCurrencyListSaga, updateCurrencyListSaga);
}
