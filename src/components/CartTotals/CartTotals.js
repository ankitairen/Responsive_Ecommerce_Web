import React from "react";
import PropTypes from "prop-types";
import classes from "./CartTotals.module.css";

const CartTotals = ({ cartSubTotal, cartTax, cartTotal, clearCart }) => {
  return (
    <div className={classes.Container}>
      <button className={classes.Btn} onClick={clearCart}>
        Clear Cart
      </button>
      <h3>
        <strong>SUBTOTAL : </strong>
        {cartSubTotal}
      </h3>
      <h3>
        <strong>Tax : </strong>
        {cartTax}
      </h3>
      <h3>
        <strong>TOTAL : </strong>
        {cartTotal}
      </h3>
    </div>
  );
};

CartTotals.propTypes = {
  cartSubTotal: PropTypes.number,
  cartTax: PropTypes.number,
  cartTotal: PropTypes.number,
  clearCart: PropTypes.func
};

export default CartTotals;
