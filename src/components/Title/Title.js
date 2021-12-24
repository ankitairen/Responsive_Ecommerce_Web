import React from "react";
import PropTypes from "prop-types";
import classes from "./Title.module.css";

const Title = ({ name }) => {
  return <h1 className={classes.Title}>{name}</h1>;
};

Title.propTypes = {
  name: PropTypes.string
};

export default Title;
