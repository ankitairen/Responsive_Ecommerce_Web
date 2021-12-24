import * as actions from "../actions/productActions";

export const initialState = {
  productList: [],
  paginatedProductList: [],
  productsPerPagination: 12,
  loading: false,
  hasErrors: false
};

const getPaginatedProductList = (
  prevPaginatedProductList,
  productList,
  productsPerPagination
) => {
  let prevLength = prevPaginatedProductList.length;
  let newLength = prevLength + productsPerPagination;
  let productListLength = productList.length;
  if (newLength >= productListLength) {
    if (prevLength !== productListLength) {
      return [...productList];
    } else {
      return productList;
    }
  } else {
    return productList.slice(0, newLength);
  }
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_PRODUCT_LIST: {
      return {
        ...state,
        loading: true
      };
    }
    case actions.GET_PRODUCT_LIST_SUCCESS: {
      let { paginatedProductList, productsPerPagination } = state;
      let productList = action.payload;
      paginatedProductList = getPaginatedProductList(
        paginatedProductList,
        productList,
        productsPerPagination
      );
      return {
        ...state,
        productList,
        paginatedProductList,
        loading: false,
        hasErrors: false
      };
    }
    case actions.GET_PRODUCT_LIST_FAILURE: {
      return {
        ...state,
        loading: false,
        hasErrors: true
      };
    }
    case actions.SHOW_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case actions.GET_NEXT_PRODUCTS: {
      let { paginatedProductList, productList, productsPerPagination } = state;
      paginatedProductList = getPaginatedProductList(
        paginatedProductList,
        productList,
        productsPerPagination
      );
      return {
        ...state,
        paginatedProductList,
        loading: false
      };
    }
    default:
      return state;
  }
}
