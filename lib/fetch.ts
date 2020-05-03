// Axios
import axios from 'axios';

const apiRoot = 'https://changenow.io/api/v1';

export const getMinAmount = async (pair: string) => await axios.get(`${apiRoot}/${pair}`);

export const getCurrencyList = async () => {
  const response = await axios.get(`${apiRoot}/currencies`);
  return response.data;
};
