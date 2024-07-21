export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

// Action creators
export const updateProducts = (products) => ({
  type: UPDATE_PRODUCTS,
  products,
});
