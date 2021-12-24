import React from "react";
import PropTypes from "prop-types";

const Search = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search Products"
      value={value}
      onChange={(e) => {
        let { value } = e.target;
        onChange(value);
      }}
    />
  );
};

Search.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Search;
