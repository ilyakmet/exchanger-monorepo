export const selectFromTo = (state: any) => {
  const { from, to } = state.exchangeForm;
  return { from, to };
};

export const selectAmountFromToEstimateRateAmountTo = (state: any) => {
  const { amount, from, to, estimate, rate, amountTo } = state.exchangeForm;
  return { amount, from, to, estimate, rate, amountTo };
};

export const selectcurrentStep = (state: any) => state.exchangeForm.currentStep;
export const selectCurrencyList = (state: any) => state.exchangeForm.currencyList;
export const selectdefaultAmounts = (state: any) => state.exchangeForm.defaultAmounts;
export const selectEstimate = (state: any) => state.exchangeForm.estimate;
export const selectMinAmount = (state: any) => state.exchangeForm.minAmount;
export const selectEstimatedArrival = (state: any) => state.exchangeForm.estimatedArrival;
export const selectIsAmountToCopied = (state: any) => state.exchangeForm.isAmountToCopied;
