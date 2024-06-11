import { createSlice } from "@reduxjs/toolkit";

const searchInit = {
  characters: "",
  page: 1,
};

const searchSlice = createSlice({
  name: "search",
  initialState: searchInit,
  reducers: {
    setSearch(state, action) {
      const { characters, page } = action.payload;
      state.characters = characters;
      state.page = page;
    },
    clearSearch(state){
        state.characters = "";
        state.page = 1;
    }
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
