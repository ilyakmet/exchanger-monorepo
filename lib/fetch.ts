// Types
import { getMinAmountParams, getEstimateParams } from '../interfaces';

// Axios
import axios from 'axios';

const apiRoot = 'https://changenow.io/api/v1';

export const getMinAmount = async ({ from, to }: getMinAmountParams) => {
  const response = await axios.get(`${apiRoot}/min-amount/${from}_${to}`);
  return response.data.minAmount;
};

export const getCurrencyList = async () => {
  const response = await axios.get(`${apiRoot}/currencies`);
  return response.data;
};

export const getEstimate = async ({ amount, from, to }: getEstimateParams) => {
  const response = await axios.get(
    `${apiRoot}/exchange-amount/${amount}/${from}_${to}?api_key=changenow`,
  );
  return response.data.estimatedAmount;
};
