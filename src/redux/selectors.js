import { createSelector } from '@reduxjs/toolkit';

export const selectBaseCurrency = state => state.currency.baseCurrency;
export const selectExchangeInfo = state => state.currency.exchangeInfo;

export const selectIsLoading = state => state.currency.isLoading;

export const selectIsError = state => state.currency.isError;

export const selectRates = state => state.currency.rates;

export const selectFilter = state => state.filter.currency;

export const setFilteredRates = createSelector(
  [selectBaseCurrency, selectRates, selectFilter],
  (baseCurrency, rates, filter) => {
    const newRates = rates.filter(
      item =>
        item[0].toLowerCase() !== baseCurrency.toLowerCase() &&
        item[0].toLowerCase().includes(filter.toLowerCase()),
    );
    return newRates;
  },
);
