import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk"; // Import thunk from redux-thunk
import rootReducer from "./reducers"; // Import the combined reducers

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
