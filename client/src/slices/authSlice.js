import { createSlice } from "@reduxjs/toolkit";
import Auth from "../../utils/auth";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: Auth.loggedIn(),
  },
  reducers: {
    logout: (state) => {
      Auth.logout();
      state.loggedIn = false;
    },
    login: (state) => {
      state.loggedIn = true;
    },
  },
});

export const { logout, login } = authSlice.actions;
export default authSlice.reducer;
