// Types
import { GetMinAmountParams, GetExpectedReceiveAmountParams, PostOrderParams } from '../interfaces';

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

export const postOrder = async ({
  fromCurrency,
  toCurrency,
  payoutAddress,
  expectedSendAmount,
}: PostOrderParams) => {
  const { data } = await axios.post(`${apiRoot}/transactions/changenow`, {
    from: fromCurrency,
    to: toCurrency,
    address: payoutAddress,
    amount: expectedSendAmount,
  });

  console.log('postOrder: ', data);

  return {
    payinAddress: data.payinAddress,
    payoutAddress: data.payoutAddress,
    fromCurrency: data.fromCurrency,
    toCurrency: data.toCurrency,
    id: data.id,
    expectedReceiveAmount: parseFloat(data.amount),
  };
};
