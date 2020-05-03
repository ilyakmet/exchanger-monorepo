// import { CounterSelectorType } from '../../interfaces';

export const selectFromTo = (state: any) => {
  const { from, to } = state.exchangeForm;
  return { from, to };
};

export const selectCurrencyList = (state: any) => state.exchangeForm.currencyList;
export const selectdefaultAmounts = (state: any) => state.exchangeForm.defaultAmounts;
export const selectEstimate = (state: any) => state.exchangeForm.estimate;
export const selectMinAmount = (state: any) => state.exchangeForm.minAmount;
