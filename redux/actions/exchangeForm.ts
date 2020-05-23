// Types
import {
  ReduxActionType,
  SetPayoutAddressParams,
  SetExpectedSendAmountFromCurrencyToCurrencyParams,
  SetMinAmountParams,
  SetCurrencyListParams,
  SetExpectedReceiveAmountEstimatedArrivalParams,
  GetMinAmountParams,
  SetOrderParams,
  GetExpectedReceiveAmountParams,
  PostOrderParams,
  UpdateOrderParams,
} from '../../interfaces';

// Action Types
import {
  _setIsLoading,
  _incCurrentStep,
  _decCurrentStep,
  _setPayoutAddress,
  _resetPayoutAddress,
  _setOrder,
  _updateOrder,
  _setExpectedSendAmountFromCurrencyToCurrency,
  _setMinAmount,
  _setCurrencyList,
  _setExpectedReceiveAmountEstimatedArrival,
  _setMinAmountSaga,
  _setCurrencyListSaga,
  _setOrderSaga,
  _setExpectedReceiveAmountEstimatedArrivalSaga,
  _setTrueForIsPayinAddressCopied,
  _setFalseForIsPayinAddressCopied,
} from '../types/exchangeForm';

// Action Creators
export const setIsLoading = (): ReduxActionType => ({
  type: _setIsLoading,
  payload: null,
});

export const incCurrentStep = (): ReduxActionType => ({
  type: _incCurrentStep,
  payload: null,
});

export const decCurrentStep = (): ReduxActionType => ({
  type: _decCurrentStep,
  payload: null,
});

export const setPayoutAddress = ({
  payoutAddress,
}: SetPayoutAddressParams): ReduxActionType<SetPayoutAddressParams> => ({
  type: _setPayoutAddress,
  payload: { payoutAddress },
});

export const resetPayoutAddress = (): ReduxActionType => ({
  type: _resetPayoutAddress,
  payload: null,
});

export const setExpectedSendAmountFromCurrencyToCurrency = ({
  expectedSendAmount,
  fromCurrency,
  toCurrency,
}: SetExpectedSendAmountFromCurrencyToCurrencyParams): ReduxActionType<
  SetExpectedSendAmountFromCurrencyToCurrencyParams
> => ({
  type: _setExpectedSendAmountFromCurrencyToCurrency,
  payload: {
    expectedSendAmount,
    fromCurrency,
    toCurrency,
  },
});

export const setMinAmount = ({
  minAmount,
}: SetMinAmountParams): ReduxActionType<SetMinAmountParams> => ({
  type: _setMinAmount,
  payload: { minAmount },
});

export const setCurrencyList = ({
  currencyList,
}: SetCurrencyListParams): ReduxActionType<SetCurrencyListParams> => ({
  type: _setCurrencyList,
  payload: { currencyList },
});

export const setOrder = ({
  payinAddress,
  payoutAddress,
  fromCurrency,
  toCurrency,
  id,
  expectedReceiveAmount,
}: SetOrderParams): ReduxActionType<SetOrderParams> => ({
  type: _setOrder,
  payload: {
    payinAddress,
    payoutAddress,
    fromCurrency,
    toCurrency,
    id,
    expectedReceiveAmount,
  },
});

export const updateOrder = ({
  payinAddress,
  payoutAddress,
  fromCurrency,
  toCurrency,
  id,
  expectedReceiveAmount,
  status,
}: UpdateOrderParams): ReduxActionType<UpdateOrderParams> => ({
  type: _updateOrder,
  payload: {
    payinAddress,
    payoutAddress,
    fromCurrency,
    toCurrency,
    id,
    expectedReceiveAmount,
    status,
  },
});

export const setExpectedReceiveAmountEstimatedArrival = ({
  expectedReceiveAmount,
  estimatedArrival,
}: SetExpectedReceiveAmountEstimatedArrivalParams): ReduxActionType<
  SetExpectedReceiveAmountEstimatedArrivalParams
> => ({
  type: _setExpectedReceiveAmountEstimatedArrival,
  payload: {
    expectedReceiveAmount,
    estimatedArrival,
  },
});

export const setMinAmountSaga = ({
  fromCurrency,
  toCurrency,
}: GetMinAmountParams): ReduxActionType<GetMinAmountParams> => ({
  type: _setMinAmountSaga,
  payload: {
    fromCurrency,
    toCurrency,
  },
});

export const setCurrencyListSaga = (): ReduxActionType => ({
  type: _setCurrencyListSaga,
  payload: null,
});

export const setOrderSaga = ({
  fromCurrency,
  toCurrency,
  payoutAddress,
  expectedSendAmount,
}: PostOrderParams): ReduxActionType<PostOrderParams> => ({
  type: _setOrderSaga,
  payload: {
    fromCurrency,
    toCurrency,
    payoutAddress,
    expectedSendAmount,
  },
});

export const setExpectedReceiveAmountEstimatedArrivalSaga = ({
  expectedSendAmount,
  fromCurrency,
  toCurrency,
}: GetExpectedReceiveAmountParams): ReduxActionType<GetExpectedReceiveAmountParams> => ({
  type: _setExpectedReceiveAmountEstimatedArrivalSaga,
  payload: {
    expectedSendAmount,
    fromCurrency,
    toCurrency,
  },
});

export const setTrueForIsPayinAddressCopied = (): ReduxActionType => ({
  type: _setTrueForIsPayinAddressCopied,
  payload: null,
});

export const setFalseForIsPayinAddressCopied = (): ReduxActionType => ({
  type: _setFalseForIsPayinAddressCopied,
  payload: null,
});
