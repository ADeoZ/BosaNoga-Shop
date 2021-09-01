import { configureStore } from "@reduxjs/toolkit";
import topSales from "../reducers/topSalesSlice";
import catalog from "../reducers/catalogSlice";
import searchForm from "../reducers/searchFormSlice";

export const store = configureStore({
  reducer: {
    topSales,
    catalog,
    searchForm,
  },
});
