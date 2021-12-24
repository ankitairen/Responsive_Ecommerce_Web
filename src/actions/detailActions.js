export const SHOW_PRODUCT_DETAILS = "SHOW_PRODUCT_DETAILS";
export const HIDE_PRODUCT_DETAILS = "HIDE_PRODUCT_DETAILS";

export const showProductDetails = (product) => ({
  type: SHOW_PRODUCT_DETAILS,
  payload: product
});

export const hideProductDetails = () => ({
  type: HIDE_PRODUCT_DETAILS
});

const allActions = {
  showProductDetails,
  hideProductDetails
};

export default allActions;
