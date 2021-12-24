import productReducer from "./productReducer";
import detailReducer from "./detailReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  product: productReducer,
  detail: detailReducer,
  cart: cartReducer,
  search: searchReducer
});

export default rootReducer;
