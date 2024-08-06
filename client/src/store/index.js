import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import searchReducer from "./search";

const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
  },
});

export default store;
