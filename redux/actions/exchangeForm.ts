// Types
import {
  ReduxActionType,
  AmountFromEstimateToType,
  CurrenciesListItemType,
} from '../../interfaces';

// Actions Types
import {
  _updateMinAmount,
  _updateAmountFromEstimateTo,
  _updateCurrencyList,
  _updateCurrencyListSaga,
  _setIsLoading,
} from '../types/exchangeForm';

// Actions
export const updateMinAmount = (newMinAmount: number): ReduxActionType<string, number> => ({
  type: _updateMinAmount,
  payload: newMinAmount,
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

export const setIsLoadin = (): ReduxActionType<string, null> => ({
  type: _setIsLoading,
  payload: null,
});
