import { createSlice } from "@reduxjs/toolkit";
import Auth from "../../utils/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: Auth.loggedIn(),
    error: null, // Add error state
  },
  reducers: {
    logout: (state) => {
      Auth.logout();
      state.loggedIn = false;
    },
    login: (state) => {
      state.loggedIn = true;
    },
    signupSuccess: (state) => {
      state.loggedIn = true;
      state.error = null;
    },
    signupFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { logout, login, signupSuccess, signupFailure } = authSlice.actions;
export default authSlice.reducer;
