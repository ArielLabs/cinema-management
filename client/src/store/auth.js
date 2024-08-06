import { createSlice } from "@reduxjs/toolkit";

const authInit = {
  fullName: "",
  role: "",
  permissions: {
    movies: [],
    subscriptions: [],
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInit,
  reducers: {
    setAuth(state, action) {
      const { fullName, role, permissions } = action.payload;
      state.fullName = fullName;
      state.role = role;
      state.permissions = permissions;
    },
    clearAuth(state) {
      state.fullName = "";
      state.role = "";
      state.permissions = {
        movies: [],
        subscriptions: [],
      };
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
