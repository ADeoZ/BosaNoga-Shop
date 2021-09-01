import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const searchFormSlice = createSlice({
  name: 'searchForm',
  initialState,
  reducers: {
    setOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setOpen } = searchFormSlice.actions;
export default searchFormSlice.reducer;