import * as actions from "../actions/searchActions";

export const initialState = {
  searchValue: ""
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_SEARCH_VALUE: {
      return {
        ...state,
        searchValue: action.payload
      };
    }
    default:
      return state;
  }
}
