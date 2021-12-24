import React from "react";
import PropTypes from "prop-types";
import classes from "./CartList.module.css";
import CartItem from "../CartItem/CartItem";
import CartColumns from "../CartColumns/CartColumns";

const CartList = ({
  cart,
  incrementCartItem,
  decrementCartItem,
  removeCartItem
}) => {
  return (
    <div className={classes.TabelContainer}>
      <table className={classes.CartTable}>
        <CartColumns />
        {cart.map((item) => {
          return (
            <CartItem
              key={item.productId}
              item={item}
              incrementCartItem={incrementCartItem}
              decrementCartItem={decrementCartItem}
              removeCartItem={removeCartItem}
            />
          );
        })}
      </table>
    </div>
  );
};

CartList.propTypes = {
  cart: PropTypes.array,
  incrementCartItem: PropTypes.func,
  decrementCartItem: PropTypes.func,
  removeCartItem: PropTypes.func
};

export default CartList;
