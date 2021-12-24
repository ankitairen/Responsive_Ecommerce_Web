import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

const NavigationItem = ({ cart, link, children, click, exact }) => {
  return (
    <li
      className={cart !== "cart" ? classes.NavigationItem : classes.CartItem}
      onClick={click}
    >
      <NavLink to={link} exact={exact}>
        {children}
      </NavLink>
    </li>
  );
};

NavigationItem.propTypes = {
  cart: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.array,
  click: PropTypes.func,
  exact: PropTypes.bool
};

export default NavigationItem;
