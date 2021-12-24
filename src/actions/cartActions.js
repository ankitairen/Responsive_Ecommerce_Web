export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const INCREMENT_CART_ITEM = "INCREMENT_CART_ITEM";
export const DECREMENT_CART_ITEM = "DECREMENT_CART_ITEM";
export const CLEAR_CART = "CLEAR_CART";

export const addToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product
});

export const incrementCartItem = (productId) => ({
  type: INCREMENT_CART_ITEM,
  payload: productId
});

export const decrementCartItem = (productId) => ({
  type: DECREMENT_CART_ITEM,
  payload: productId
});

export const removeFromCart = (productId) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: productId
});

export const clearCart = () => ({
  type: CLEAR_CART
});

const allActions = {
  addToCart,
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
  clearCart
};

export default allActions;
