// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

export type ReduxActionType<T, A> = {
  type: T;
  payload: A;
};

export type AppLayoutProps = {
  title?: string;
};

export type AppStepsProps = {
  children: any;
  current: number;
  marginV: number;
};

export type Step1Props = {
  marginV: number;
};

export type CurrenciesListItemType = {
  ticker: string;
  name: string;
  image: string;
  hasExternalId: boolean;
  isFiat: boolean;
  featured: boolean;
  isStable: boolean;
  supportsFixedRate: boolean;
};

export type CurrencyLabelType = {
  ticker: string;
  image: string;
};

export type LabelSelectorProps = {
  fieldName: string;
  defaultTicker: string;
  currencyList: Array<CurrenciesListItemType>;
};

export type AmountFromEstimateToType = {
  amount: number;
  from: string;
  estimate: number;
  to: string;
};

export type CurrencySelectionProps = {
  currencyList: Array<CurrenciesListItemType>;
};

export type getEstimateParams = {
  amount: number;
  from: string;
  to: string;
};

export type getMinAmountParams = {
  from: string;
  to: string;
};

export type getMinAmountReturn = {
  minAmount: number;
};
