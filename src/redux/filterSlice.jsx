import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    currency: '',
  },
  reducers: {
    setCurrency(state, action) {
      state.currency = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { setCurrency } = filterSlice.actions;
