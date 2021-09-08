import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  categories: [],
  categoryId: 0,
  showMore: true,
  searchQ: "",
  status: { catalog: "idle", offset: "idle", categories: "idle" },
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
      if (status.catalog === "pending" || status.offset === "pending") {
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
    resetCatalogState: (state) => {
      return initialState
    },
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
          state.status.offset = "pending";
        } else {
          state.status.catalog = "pending";
        }
      })
      .addCase(catalogGetAll.rejected, (state, { meta }) => {
        if (meta.arg) {
          state.status.offset = "error";
        } else {
          state.status.catalog = "error";
        }
      })
      .addCase(catalogGetAll.fulfilled, (state, action) => {
        if (action.meta.arg) {
          state.status.offset = "success";
          state.items.push(...action.payload);
        } else {
          state.status.catalog = "success";
          state.items = action.payload;
        }
        if (action.payload.length !== 6) state.showMore = false;
      })
      .addCase(catalogGetCategories.pending, (state) => {
        state.status.categories = "pending";
      })
      .addCase(catalogGetCategories.rejected, (state) => {
        state.status.categories = "error";
      })
      .addCase(catalogGetCategories.fulfilled, (state, action) => {
        state.status.categories = "success";
        state.categories = action.payload;
      });
  },
});

export const { resetCatalogState, selectCategory, putSearch } =
  catalogSlice.actions;
export default catalogSlice.reducer;
