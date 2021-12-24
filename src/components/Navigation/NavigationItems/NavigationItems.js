import React from "react";
import PropTypes from "prop-types";
import NavigationItem from "./NavigationItem/NavigationItem";
import Cart from "../../../assets/img/shopping-cart.svg";
import classes from "./NavigationItems.module.css";

const NavigationItems = ({ count }) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/cart" cart="cart">
        <img src={Cart} alt="cart" className={classes.Cart} />
        {count > 0 && <span className={classes.Badge}>{count}</span>}
      </NavigationItem>
    </ul>
  );
};

NavigationItems.propTypes = {
  count: PropTypes.number
};

export default NavigationItems;
