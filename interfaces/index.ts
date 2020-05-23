// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them.

export type CurrencyListItemType = {
  ticker: string;
  name: string;
  image: string;
  hasExternalId: boolean;
  isFiat: boolean;
  featured: boolean;
  isStable: boolean;
  supportsFixedRate: boolean;
};

// Actions
export type ReduxActionType<P = null> = {
  type: string;
  payload: P;
};

export type SetPayoutAddressParams = {
  payoutAddress: string;
};

export type SetExpectedSendAmountFromCurrencyToCurrencyParams = {
  expectedSendAmount: number;
  fromCurrency: string;
  toCurrency: string;
};

export type SetMinAmountParams = {
  minAmount: string;
};

export type SetCurrencyListParams = {
  currencyList: Array<CurrencyListItemType>;
};

export type SetOrderParams = {
  payinAddress: string;
  payoutAddress: string;
  fromCurrency: string;
  toCurrency: string;
  id: string;
  expectedReceiveAmount: number;
};

export type UpdateOrderParams = {
  payinAddress: string;
  payoutAddress: string;
  fromCurrency: string;
  toCurrency: string;
  id: string;
  expectedReceiveAmount: number;
  status: string;
};

export type SetExpectedReceiveAmountEstimatedArrivalParams = {
  expectedReceiveAmount: number;
  estimatedArrival: string;
};

// Lib
export type GetMinAmountParams = {
  fromCurrency: string;
  toCurrency: string;
};

export type GetExpectedReceiveAmountParams = {
  expectedSendAmount: number;
  fromCurrency: string;
  toCurrency: string;
};

export type PostOrderParams = {
  fromCurrency: string;
  toCurrency: string;
  payoutAddress: string;
  expectedSendAmount: string;
  extraId?: string;
  userId?: string;
  contactEmail?: string;
  refundAddress?: string;
  refundExtraId?: string;
};

// Components
export type AppLayoutProps = {
  children: any;
  title?: string;
};

export type LabelSelectorProps = {
  fieldName: string;
  defaultTicker: string;
  currencyList: Array<CurrencyListItemType>;
};

export type CurrencyLabelProps = {
  image: string;
  ticker: string;
};

export type StepButtonsProps = {
  rightButtonOnClick?: () => void;
  leftButtonOnClick?: () => void;
  rightButtonName: string;
  leftButtonName: string;
};
