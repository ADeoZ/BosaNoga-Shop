import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  categories: [],
  categoryId: 0,
  showMore: true,
  searchQ: "",
  status: "idle",
};

export const catalogGetAll = createAsyncThunk(
  "catalog/getAll",
  async (_, { getState }) => {
    const { items, categoryId, searchQ } = getState().catalog;
    const params = new URLSearchParams({
      categoryId,
      offset: items.length,
      q: searchQ,
    });
    const response = await fetch(
      `${process.env.REACT_APP_SHOP_API}items?${params}`
    );
    const data = await response.json();
    return data;
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().catalog;
      if (status === 'pending') {
        return false;
      }
    },
  }
);

export const catalogGetCategories = createAsyncThunk(
  "catalog/getCategories",
  async () => {
    const response = await fetch(`${process.env.REACT_APP_SHOP_API}categories`);
    const data = await response.json();
    return data;
  }
);

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    resetCatalogState: () => initialState,
    selectCategory: (state, action) => {
      state.items = [];
      state.showMore = true;
      state.categoryId = action.payload;
    },
    putSearch: (state, action) => {
      state.items = [];
      state.showMore = true;
      state.searchQ = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(catalogGetAll.pending, (state, { meta }) => {
        if (meta.arg) {
          state.status = "pendingOffset";
        } else {
          state.status = "pending";
        }
      })
      .addCase(catalogGetAll.rejected, (state) => {
        state.status = "error";
      })
      .addCase(catalogGetAll.fulfilled, (state, action) => {
        state.status = "success";
        state.items.push(...action.payload);
        if (action.payload.length !== 6) state.showMore = false;
      })
      .addCase(catalogGetCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export const { resetCatalogState, selectCategory, putSearch } = catalogSlice.actions;
export default catalogSlice.reducer;
