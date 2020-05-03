// Types
import {
  ReduxActionType,
  AmountFromEstimateToType,
  CurrenciesListItemType,
  getEstimateParams,
  getMinAmountParams,
} from '../../interfaces';

// Actions Types
import {
  _updateMinAmount,
  _updateMinAmountSaga,
  _updateAmountFromEstimateTo,
  _updateCurrencyList,
  _updateCurrencyListSaga,
  _updateEstimate,
  _updateEstimateSaga,
  _setIsLoading,
} from '../types/exchangeForm';

// Actions
export const updateMinAmount = (newMinAmount: number): ReduxActionType<string, number> => ({
  type: _updateMinAmount,
  payload: newMinAmount,
});

export const updateMinAmountSaga = (
  pair: getMinAmountParams,
): ReduxActionType<string, getMinAmountParams> => ({
  type: _updateMinAmountSaga,
  payload: pair,
});

export const updateAmountFromEstimateTo = (
  newAmountFromEstimateTo: AmountFromEstimateToType,
): ReduxActionType<string, AmountFromEstimateToType> => ({
  type: _updateAmountFromEstimateTo,
  payload: newAmountFromEstimateTo,
});

export const updateCurrencyList = (
  newCurrencyList: Array<CurrenciesListItemType>,
): ReduxActionType<string, Array<CurrenciesListItemType>> => ({
  type: _updateCurrencyList,
  payload: newCurrencyList,
});

export const updateCurrencyListSaga = (): ReduxActionType<string, null> => ({
  type: _updateCurrencyListSaga,
  payload: null,
});

export const updateEstimate = (newEstimate: number): ReduxActionType<string, number> => ({
  type: _updateEstimate,
  payload: newEstimate,
});

export const updateEstimateSaga = (
  params: getEstimateParams,
): ReduxActionType<string, getEstimateParams> => ({
  type: _updateEstimateSaga,
  payload: params,
});

export const setIsLoadin = (): ReduxActionType<string, null> => ({
  type: _setIsLoading,
  payload: null,
});
