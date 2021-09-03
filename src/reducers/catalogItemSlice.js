import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  status: "idle",
};

export const itemGetData = createAsyncThunk("catalogItem/getData", async (id) => {
  const response = await fetch(`${process.env.REACT_APP_SHOP_API}items/${id}`);
  const data = await response.json();
  return data;
});

const catalogItemSlice = createSlice({
  name: "catalogItem",
  initialState,
  reducers: {
    resetItemState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(itemGetData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(itemGetData.rejected, (state) => {
        state.status = "error";
      })
      .addCase(itemGetData.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      });
  },
});

export const { resetItemState } = catalogItemSlice.actions;
export default catalogItemSlice.reducer;
