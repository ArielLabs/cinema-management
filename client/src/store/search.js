import { createSlice } from "@reduxjs/toolkit";

const searchInit = {
  chars: "",
  page: 1,
};

const searchSlice = createSlice({
  name: "search",
  initialState: searchInit,
  reducers: {
    setSearch(state, action) {
      const { chars, page } = action.payload;
      state.chars = chars;
      state.page = page;
    },
    clearSearch(state){
        state.chars = "";
        state.page = 1;
    }
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
