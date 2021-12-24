import * as actions from "../actions/detailActions";

export const initialState = {
  productDetail: null,
  showModal: false
};

export default function detailReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SHOW_PRODUCT_DETAILS: {
      return {
        ...state,
        productDetail: action.payload,
        showModal: true
      };
    }
    case actions.HIDE_PRODUCT_DETAILS: {
      return {
        ...state,
        productDetail: null,
        showModal: false
      };
    }
    default:
      return state;
  }
}
