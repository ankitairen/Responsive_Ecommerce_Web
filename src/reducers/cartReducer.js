import * as actions from "../actions/cartActions";

export const initialState = {
  cartMap: {},
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0
};

const computeCartAmount = (cartArr) => {
  let cartSubTotal = 0,
    cartTax = 0,
    cartTotal = 0;
  cartArr.map((item) => (cartSubTotal += item.totalPrice));
  const tempTax = cartSubTotal * 0.15;
  cartTax = parseFloat(tempTax.toFixed(2));
  cartTotal = parseFloat((cartSubTotal + cartTax).toFixed(2));
  cartSubTotal = parseFloat(cartSubTotal.toFixed(2));
  return {
    cartSubTotal,
    cartTax,
    cartTotal
  };
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_PRODUCT_TO_CART: {
      let product = {
        ...action.payload,
        totalCount: 1,
        totalPrice: action.payload.price
      };
      let { productId } = product;
      let cartMap = { ...state.cartMap, [productId]: product };
      let { cartSubTotal, cartTax, cartTotal } = computeCartAmount(
        Object.values(cartMap)
      );
      return {
        ...state,
        cartMap,
        cartSubTotal,
        cartTax,
        cartTotal
      };
    }
    case actions.INCREMENT_CART_ITEM: {
      let product = { ...state.cartMap[action.payload] };
      let { productId } = product;
      product.totalCount = product.totalCount + 1;
      product.totalPrice = parseFloat(
        (product.totalCount * product.price).toFixed(2)
      );
      let cartMap = { ...state.cartMap, [productId]: product };
      let { cartSubTotal, cartTax, cartTotal } = computeCartAmount(
        Object.values(cartMap)
      );
      return {
        ...state,
        cartMap,
        cartSubTotal,
        cartTax,
        cartTotal
      };
    }
    case actions.DECREMENT_CART_ITEM: {
      let cartMap = { ...state.cartMap };
      let product = { ...cartMap[action.payload] };
      let { productId } = product;
      product.totalCount = product.totalCount - 1;
      if (product.totalCount === 0) {
        delete cartMap[productId];
      } else {
        product.totalPrice = parseFloat(
          (product.totalCount * product.price).toFixed(2)
        );
        cartMap[productId] = product;
      }
      let { cartSubTotal, cartTax, cartTotal } = computeCartAmount(
        Object.values(cartMap)
      );
      return {
        ...state,
        cartMap,
        cartSubTotal,
        cartTax,
        cartTotal
      };
    }
    case actions.REMOVE_PRODUCT_FROM_CART: {
      let cartMap = { ...state.cartMap };
      let productId = action.payload;
      delete cartMap[productId];
      let { cartSubTotal, cartTax, cartTotal } = computeCartAmount(
        Object.values(cartMap)
      );
      return {
        ...state,
        cartMap,
        cartSubTotal,
        cartTax,
        cartTotal
      };
    }
    case actions.CLEAR_CART: {
      return {
        ...state,
        cartMap: {},
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
      };
    }
    default:
      return state;
  }
}
