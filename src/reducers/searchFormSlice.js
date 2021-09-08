import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  searchFormQ: "",
};

const searchFormSlice = createSlice({
  name: "searchForm",
  initialState,
  reducers: {
    resetSearchFormState: () => initialState,
    setOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    setSearchFormQuery: (state, action) => {
      state.searchFormQ = action.payload;
    },
  },
});

export const { resetSearchFormState, setOpen, setSearchFormQuery } =
  searchFormSlice.actions;
export default searchFormSlice.reducer;
