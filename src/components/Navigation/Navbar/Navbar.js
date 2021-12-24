import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Search from "../../Search/Search";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Navbar.module.css";
import Logo from "../../Logo/Logo";

const Navbar = ({ count, onChange, value }) => {
  return (
    <header className={classes.Navbar}>
      <nav className={classes.Navigation}>
        <div className={classes.Logo}>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div>
          <Search onChange={onChange} value={value} />
        </div>
        <NavigationItems count={count} />
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  count: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.string
};

export default Navbar;
