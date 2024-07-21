export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_MULTIPLE_TO_CART = "ADD_MULTIPLE_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const UPDATE_CART_QUANTITY = "UPDATE_CART_QUANTITY";
export const TOGGLE_CART = "TOGGLE_CART";

// Action creators
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const addMultipleToCart = (products) => ({
  type: ADD_MULTIPLE_TO_CART,
  products,
});

export const removeFromCart = (_id) => ({
  type: REMOVE_FROM_CART,
  _id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const updateCartQuantity = (_id, purchaseQuantity) => ({
  type: UPDATE_CART_QUANTITY,
  _id,
  purchaseQuantity,
});

export const toggleCart = () => ({
  type: TOGGLE_CART,
});
