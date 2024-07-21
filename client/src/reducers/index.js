import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import authReducer from "../slices/authSlice"; // Import the auth reducer

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  categories: categoryReducer,
  auth: authReducer, // Add the auth reducer
});

export default rootReducer;
