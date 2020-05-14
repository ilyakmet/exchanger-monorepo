// Types
import { GetMinAmountParams, GetExpectedReceiveAmountParams } from '../interfaces';

// Axios
import axios from 'axios';

// Root
const apiRoot = 'https://changenow.io/api/v1';

// Methods
export const getMinAmount = async ({ fromCurrency, toCurrency }: GetMinAmountParams) => {
  const { data } = await axios.get(`${apiRoot}/min-amount/${fromCurrency}_${toCurrency}`);

  return data;
};

export const getCurrencyList = async () => {
  const { data } = await axios.get(`${apiRoot}/currencies`);
  return { currencyList: data };
};

export const getExpectedReceiveAmount = async ({
  expectedSendAmount,
  fromCurrency,
  toCurrency,
}: GetExpectedReceiveAmountParams) => {
  const { data } = await axios.get(
    `${apiRoot}/exchange-amount/${expectedSendAmount}/${fromCurrency}_${toCurrency}?api_key=changenow`,
  );
  return data;
};
