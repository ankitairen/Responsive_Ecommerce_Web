import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./Cart.module.css";
import Title from "../../components/Title/Title";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import CartList from "../../components/CartList/CartList";
import CartTotals from "../../components/CartTotals/CartTotals";
import cartActions from "../../actions/cartActions";

const Cart = () => {
  const cartMap = useSelector((state) => state.cart.cartMap);

  const cartSubTotal = useSelector((state) => state.cart.cartSubTotal);

  const cartTax = useSelector((state) => state.cart.cartTax);

  const cartTotal = useSelector((state) => state.cart.cartTotal);

  const dispatch = useDispatch();

  const incrementCartItem = (productId) => {
    dispatch(cartActions.incrementCartItem(productId));
  };

  const decrementCartItem = (productId) => {
    dispatch(cartActions.decrementCartItem(productId));
  };

  const removeCartItem = (productId) => {
    dispatch(cartActions.removeFromCart(productId));
  };

  const clearCart = () => {
    dispatch(cartActions.clearCart());
  };

  if (Object.keys(cartMap).length > 0) {
    return (
      <div className={classes.Container}>
        <NavLink to="/">
          <div className={classes.BackArrow}>
            <i className="fa fa-arrow-left" style={{ fontSize: "24px" }}></i>
            <span className={classes.ArrowText}>Back To Shop</span>
          </div>
        </NavLink>
        <Title name="Your Cart" />
        <CartList
          cart={Object.values(cartMap)}
          incrementCartItem={incrementCartItem}
          decrementCartItem={decrementCartItem}
          removeCartItem={removeCartItem}
        />
        <CartTotals
          cartSubTotal={cartSubTotal}
          cartTax={cartTax}
          cartTotal={cartTotal}
          clearCart={clearCart}
        />
      </div>
    );
  } else {
    return (
      <div className={classes.EmptyCartContainer}>
        <NavLink to="/">
          <div className={classes.Arrow}>
            <i className="fa fa-arrow-left" style={{ fontSize: "24px" }}></i>
            <span className={classes.ArrowText}>Back To Shop</span>
          </div>
        </NavLink>
        <EmptyCart />
      </div>
    );
  }
};

export default Cart;
