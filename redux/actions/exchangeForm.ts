// Types
import {
  ReduxActionType,
  SetPayoutAddressParams,
  SetExpectedSendAmountFromCurrencyToCurrencyParams,
  SetMinAmountParams,
  SetCurrencyListParams,
  SetExpectedReceiveAmountEstimatedArrivalParams,
  GetMinAmountParams,
  GetExpectedReceiveAmountParams,
} from '../../interfaces';

// Action Types
import {
  _setIsLoading,
  _incCurrentStep,
  _decCurrentStep,
  _setPayoutAddress,
  _resetPayoutAddress,
  _setExpectedSendAmountFromCurrencyToCurrency,
  _setMinAmount,
  _setCurrencyList,
  _setExpectedReceiveAmountEstimatedArrival,
  _setMinAmountSaga,
  _setCurrencyListSaga,
  _setExpectedReceiveAmountEstimatedArrivalSaga,
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
