import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    order: null,
    error: null,
  },
  reducers: {
    addOrderSuccess: (state, action) => {
      state.order = action.payload;
      state.error = null;
    },
    addOrderFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addOrderSuccess, addOrderFailure } = orderSlice.actions;
export default orderSlice.reducer;