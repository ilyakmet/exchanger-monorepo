export const selectOrderData = (state: any) => {
  const {
    expectedSendAmount,
    expectedReceiveAmount,
    fromCurrency,
    toCurrency,
    payinAddress,
    payoutAddress,
    id,
    status,
  } = state.exchangeForm;
  return {
    expectedSendAmount,
    expectedReceiveAmount,
    fromCurrency,
    toCurrency,
    payinAddress,
    payoutAddress,
    id,
    status,
  };
};

export const selectcurrentStep = (state: any) => state.exchangeForm.currentStep;
export const selectCurrencyList = (state: any) => state.exchangeForm.currencyList;
export const selectdefaultAmounts = (state: any) => state.exchangeForm.defaultAmounts;
export const selectMinAmount = (state: any) => state.exchangeForm.minAmount;
export const selectEstimatedArrival = (state: any) => state.exchangeForm.estimatedArrival;
export const selectIsPayinAddressCopied = (state: any) => state.exchangeForm.isPayinAddressCopied;
export const selectIsLoading = (state: any) => state.exchangeForm.isLoading;
