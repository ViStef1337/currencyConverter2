import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.apilayer.com/exchangerates_data',
  headers: {
    apikey: 'Bqf0jgud3HsN3E435u3LbG7qgqDyjvOj',
  },
});

export const exchangeCurrency = async credentials => {
  const {
    data: { info, query, result },
  } = await instance.get('/convert', { params: credentials });
  return { ...query, rate: info.rate, result };
};

export const getLatestSymbols = async baseCurrency => {
  const { data } = await instance.get(`/latest?symbols&base=${baseCurrency}`);
  return Object.entries(data.rates);
};
