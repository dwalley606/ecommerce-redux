import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { categoryReducer } from "./categoryReducer";
import authReducer from "../slices/authSlice";
import userReducer from "../slices/userSlice";
import orderReducer from "../slices/orderSlice"; // Import the order reducer

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  categories: categoryReducer,
  auth: authReducer,
  user: userReducer,
  order: orderReducer, // Add the order reducer
});

export default rootReducer;
