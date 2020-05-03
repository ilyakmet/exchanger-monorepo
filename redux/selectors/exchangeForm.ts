// import { CounterSelectorType } from '../../interfaces';

export const selectFromTo = (state: any) => {
  const { from, to } = state.exchangeForm;
  return { from, to };
};

export const selectCurrencyList = (state: any) => state.exchangeForm.currencyList;

export const selectdefaultAmounts = (state: any) => state.exchangeForm.defaultAmounts;
