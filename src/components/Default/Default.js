import React from "react";
import PropTypes from "prop-types";
import classes from "./Default.module.css";

const Default = ({ location }) => {
  return (
    <div className={classes.Container}>
      <h1>404</h1>
      <h1>Error</h1>
      <h2>page not found</h2>
      <h3>
        Requested URL <strong>{location.pathname}</strong> was not found
      </h3>
    </div>
  );
};

Default.propTypes = {
  location: PropTypes.object
};

export default Default;
