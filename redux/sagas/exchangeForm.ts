// Types
import {
  ReduxActionType,
  GetMinAmountParams,
  GetExpectedReceiveAmountParams,
} from '../../interfaces';

// Redux
import { takeEvery, put, call } from 'redux-saga/effects';

// Action Types
import {
  _setMinAmountSaga,
  _setCurrencyListSaga,
  _setExpectedReceiveAmountEstimatedArrivalSaga,
} from '../types/exchangeForm';

// Actions
import {
  setMinAmount,
  setCurrencyList,
  setExpectedReceiveAmountEstimatedArrival,
} from '../actions/exchangeForm';

// Lib
import { getMinAmount, getCurrencyList, getExpectedReceiveAmount } from '../../lib/fetch';

function* setMinAmountSaga({
  payload: { fromCurrency, toCurrency },
}: ReduxActionType<GetMinAmountParams>) {
  const data = yield call(getMinAmount, {
    fromCurrency,
    toCurrency,
  });
  yield put(setMinAmount(data));
}

function* setCurrencyListSaga() {
  const data = yield call(getCurrencyList);
  yield put(setCurrencyList(data));
}

function* setExpectedReceiveAmountEstimatedArrivalSaga({
  payload: { expectedSendAmount, fromCurrency, toCurrency },
}: ReduxActionType<GetExpectedReceiveAmountParams>) {
  console.log('updateEstimateSaga');
  const data = yield call(getExpectedReceiveAmount, {
    expectedSendAmount,
    fromCurrency,
    toCurrency,
  });

  if (!data.warningMessage) yield put(setExpectedReceiveAmountEstimatedArrival(data));
  // ToDo: warningMessage error case
}

export function* exchangeFormWatcherSaga() {
  // Sends ActionType {} to Generator
  yield takeEvery(_setMinAmountSaga, setMinAmountSaga);
  yield takeEvery(_setCurrencyListSaga, setCurrencyListSaga);
  yield takeEvery(
    _setExpectedReceiveAmountEstimatedArrivalSaga,
    setExpectedReceiveAmountEstimatedArrivalSaga,
  );
}
