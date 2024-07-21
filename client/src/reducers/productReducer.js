import { UPDATE_PRODUCTS } from "../actions/productActions";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };
    default:
      return state;
  }
};
