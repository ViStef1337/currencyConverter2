import { createSlice } from '@reduxjs/toolkit';
import {
  fetchBaseCurrency,
  fetchExchangeCurrency,
  fetchLatestRates,
} from './operations.js';

const currencySlice = createSlice({
  name: 'converter',
  initialState: {
    baseCurrency: '',
    isLoading: false,
    isError: '',
    exchangeInfo: null,
    rates: [],
  },
  reducers: {
    setBaseCurrency(state, action) {
      state.baseCurrency = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, action) => {
        state.baseCurrency = action.payload;
      })
      .addCase(fetchExchangeCurrency.pending, state => {
        state.isLoading = true;
        state.isError = '';
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.exchangeInfo = action.payload;
      })
      .addCase(fetchExchangeCurrency.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(fetchLatestRates.pending, state => {
        state.isLoading = true;
        state.isError = '';
      })
      .addCase(fetchLatestRates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rates = action.payload;
      })
      .addCase(fetchLatestRates.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      }),
});
export const currencyReducer = currencySlice.reducer;

export const { setBaseCurrency } = currencySlice.actions;
