import { configureStore } from "@reduxjs/toolkit";
import topSales from "../reducers/topSalesSlice";
import catalog from "../reducers/catalogSlice";
import searchForm from "../reducers/searchFormSlice";
import catalogItem from "../reducers/catalogItemSlice";
import cart from "../reducers/cartSlice";

export const store = configureStore({
  reducer: {
    topSales,
    catalog,
    searchForm,
    catalogItem,
    cart,
  },
});
