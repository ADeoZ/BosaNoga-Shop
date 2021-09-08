import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "idle",
};

export const postOrder = createAsyncThunk(
  "cart/postOrder",
  async (owner, { getState }) => {
    const { items } = getState().cart;
    const response = await fetch(`${process.env.REACT_APP_SHOP_API}order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ owner, items }),
    });
    return response.ok;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCartStatus: (state) => {
      state.status = "idle";
    },
    addToCart: (state, action) => {
      const { id, size, count } = action.payload;
      const hasItem = state.items.findIndex(
        (item) => item.id === id && item.size === size
      );
      hasItem === -1
        ? state.items.push(action.payload)
        : (state.items[hasItem].count += count);
    },
    removeFromCart: (state, action) => {
      const { id, size } = action.payload;
      const indexItem = state.items.findIndex(
        (item) => item.id === id && item.size === size
      );
      if (indexItem !== -1) {
        state.items.splice(indexItem, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(postOrder.rejected, (state) => {
        state.status = "error";
      })
      .addCase(postOrder.fulfilled, (state) => {
        state.items = [];
        state.status = "success";
      });
  },
});

export const { addToCart, removeFromCart, resetCartStatus } = cartSlice.actions;
export default cartSlice.reducer;
