import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'idle',
};

export const topSalesGetAll = createAsyncThunk(
  'topSales/getAll',
  async () => {
    const response = await fetch(`${process.env.REACT_APP_SHOP_API}top-sales`);
    const data = await response.json();
    return data;
  }
)

const topSalesSlice = createSlice({
  name: 'topSales',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(topSalesGetAll.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(topSalesGetAll.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(topSalesGetAll.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })
  },
});

// export const { fetch_request, fetch_failure, fetch_success } = serviceListSlice.actions;
export default topSalesSlice.reducer;