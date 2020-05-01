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
  index: string;
  minSendAmount: number;
};
