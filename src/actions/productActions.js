export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
export const GET_PRODUCT_LIST_SUCCESS = "GET_PRODUCT_LIST_SUCCESS";
export const GET_PRODUCT_LIST_FAILURE = "GET_PRODUCT_LIST_FAILURE";
export const GET_NEXT_PRODUCTS = "GET_NEXT_PRODUCTS";
export const SHOW_LOADING = "SHOW_LOADING";

const fetchProductList = () => {
  return async (dispatch) => {
    dispatch(getProductList());
    try {
      const response = await fetch(
        "https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6"
      );
      const data = await response.json();
      dispatch(getProductListSuccess(data.products));
    } catch (error) {
      dispatch(getProductListFailure());
    }
  };
};

export const getProductList = () => ({ type: GET_PRODUCT_LIST });

export const getProductListSuccess = (productList) => ({
  type: GET_PRODUCT_LIST_SUCCESS,
  payload: productList
});

export const getProductListFailure = () => ({ type: GET_PRODUCT_LIST_FAILURE });

export const fetchNextProducts = () => ({ type: GET_NEXT_PRODUCTS });

export const showLoading = () => ({ type: SHOW_LOADING });

const allActions = {
  fetchProductList,
  fetchNextProducts,
  showLoading
};

export default allActions;
