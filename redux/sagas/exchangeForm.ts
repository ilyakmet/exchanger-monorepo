// Types
import {
  ReduxActionType,
  GetMinAmountParams,
  PostOrderParams,
  GetExpectedReceiveAmountParams,
} from '../../interfaces';

// Lodash
import _ from 'lodash';

// Redux
import { takeEvery, put, call, delay } from 'redux-saga/effects';

// Action Types
import {
  _setMinAmountSaga,
  _setCurrencyListSaga,
  _setOrderSaga,
  _setExpectedReceiveAmountEstimatedArrivalSaga,
} from '../types/exchangeForm';

// Actions
import {
  setMinAmount,
  setCurrencyList,
  setOrder,
  updateOrder,
  setExpectedReceiveAmountEstimatedArrival,
} from '../actions/exchangeForm';

// Lib
import {
  getMinAmount,
  getCurrencyList,
  getExpectedReceiveAmount,
  postOrder,
  getOrderUpdates,
} from '../../lib/fetch';

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

function* setOrderSaga({ payload }: ReduxActionType<PostOrderParams>) {
  console.log('setOrderSaga1:', payload);
  const data = yield call(postOrder, { ...payload });

  console.log('setOrderSaga2: ', data);
  yield put(setOrder(data));

  while (true) {
    yield delay(_.multiply(60, 1000));
    console.log('updateOrderSaga');
    const updates = yield call(getOrderUpdates, { id: data.id });
    yield put(updateOrder(updates));
  }
}

function* setExpectedReceiveAmountEstimatedArrivalSaga({
  payload: { expectedSendAmount, fromCurrency, toCurrency },
}: ReduxActionType<GetExpectedReceiveAmountParams>) {
  yield put(
    setExpectedReceiveAmountEstimatedArrival({
      expectedReceiveAmount: 0,
      estimatedArrival: '',
    }),
  );
  const { estimatedAmount, transactionSpeedForecast, warningMessage } = yield call(
    getExpectedReceiveAmount,
    {
      expectedSendAmount,
      fromCurrency,
      toCurrency,
    },
  );

  if (!warningMessage)
    yield put(
      setExpectedReceiveAmountEstimatedArrival({
        expectedReceiveAmount: estimatedAmount,
        estimatedArrival: transactionSpeedForecast,
      }),
    );
  // ToDo: warningMessage error case
}

export function* exchangeFormWatcherSaga() {
  // Sends ActionType {} to Generator
  yield takeEvery(_setMinAmountSaga, setMinAmountSaga);
  yield takeEvery(_setCurrencyListSaga, setCurrencyListSaga);
  yield takeEvery(_setOrderSaga, setOrderSaga);
  yield takeEvery(
    _setExpectedReceiveAmountEstimatedArrivalSaga,
    setExpectedReceiveAmountEstimatedArrivalSaga,
  );
}
