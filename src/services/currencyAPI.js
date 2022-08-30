import { requestCurrencies } from '../redux/actions';

const URL = 'https://economia.awesomeapi.com.br/json/all';

export const getCurrencies = async (dispatch) => {
  const response = await fetch(URL);
  const json = await response.json();
  // console.log(json);
  const currencies = Object.keys(json).filter((moeda) => moeda !== 'USDT');
  // console.log(Object.keys(json));
  dispatch(requestCurrencies(currencies));
};

export const getExchangeRates = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
};
