// Types
import {
  ReduxActionType,
  AmountFromToType,
  CurrenciesListItemType,
  getEstimateParams,
  getMinAmountParams,
  updateAmountToParams,
  updateEstimateAndEstimatedArrivalParams,
} from '../../interfaces';

// Actions Types
import {
  _updateMinAmount,
  _updateMinAmountSaga,
  _updateAmountFromTo,
  _updateCurrencyList,
  _updateCurrencyListSaga,
  _updateEstimateAndEstimatedArrival,
  _updateEstimateAndEstimatedArrivalSaga,
  _setIsLoading,
  _incCurrentStep,
  _decCurrentStep,
  _updateAmountTo,
  _resetAmountTo,
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

export const updateAmountFromTo = (
  newAmountFromTo: AmountFromToType,
): ReduxActionType<string, AmountFromToType> => ({
  type: _updateAmountFromTo,
  payload: newAmountFromTo,
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

export const updateEstimateAndEstimatedArrival = (
  params: updateEstimateAndEstimatedArrivalParams,
): ReduxActionType<string, updateEstimateAndEstimatedArrivalParams> => ({
  type: _updateEstimateAndEstimatedArrival,
  payload: params,
});

export const updateEstimateAndEstimatedArrivalSaga = (
  params: getEstimateParams,
): ReduxActionType<string, getEstimateParams> => ({
  type: _updateEstimateAndEstimatedArrivalSaga,
  payload: params,
});

export const setIsLoadin = (): ReduxActionType<string, null> => ({
  type: _setIsLoading,
  payload: null,
});

export const incCurrentStep = (): ReduxActionType<string, null> => ({
  type: _incCurrentStep,
  payload: null,
});

export const decCurrentStep = (): ReduxActionType<string, null> => ({
  type: _decCurrentStep,
  payload: null,
});

export const updateAmountTo = (params: updateAmountToParams): ReduxActionType<string, string> => ({
  type: _updateAmountTo,
  payload: params.newAmountTo,
});

export const resetAmountTo = (): ReduxActionType<string, null> => ({
  type: _updateAmountTo,
  payload: null,
});
