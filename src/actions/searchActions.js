export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";

export const setSearchValue = (searchValue) => ({
  type: SET_SEARCH_VALUE,
  payload: searchValue
});

const allActions = {
  setSearchValue
};

export default allActions;
