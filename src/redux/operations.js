import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from '../service/opencage.js';
import { exchangeCurrency, getLatestSymbols } from '../service/exchangeAPI.js';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/fetchBaseCurrency',
  async (coords, thunkAPI) => {
    const { currency } = thunkAPI.getState();
    if (currency.baseCurrency) {
      return currency.baseCurrency;
    }
    try {
      const data = await getUserInfo(coords);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchExchangeCurrency = createAsyncThunk(
  'currency/fetchExchangeCurrency',
  async (currency, thunkAPI) => {
    try {
      const data = await exchangeCurrency(currency);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchLatestRates = createAsyncThunk(
  'currency/fetchLatestRates',
  async (rates, thunkAPI) => {
    try {
      const data = await getLatestSymbols(rates);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
