import React from "react";
import PropTypes from "prop-types";
import classes from "./CartItem.module.css";

const CartItem = ({
  item,
  incrementCartItem,
  decrementCartItem,
  removeCartItem
}) => {
  const {
    productId,
    productName,
    price,
    searchImage,
    additionalInfo,
    totalCount,
    totalPrice
  } = item;

  return (
    <tbody>
      <tr>
        <td>
          <img
            src={searchImage}
            alt={additionalInfo}
            style={{ width: "3rem", height: "3rem" }}
          />
        </td>
        <td>{productName}</td>
        <td>{price}</td>
        <td className={classes.BtnContainer}>
          <button
            onClick={() => {
              decrementCartItem(productId);
            }}
            className={classes.Btn}
          >
            -
          </button>
          <span className={classes.BtnSpan}>{totalCount}</span>
          <button
            onClick={() => {
              incrementCartItem(productId);
            }}
            className={classes.Btn}
          >
            +
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              removeCartItem(productId);
            }}
            className={classes.RemoveBtn}
          >
            X
          </button>
        </td>
        <td>{totalPrice}</td>
      </tr>
    </tbody>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    productId: PropTypes.number,
    productName: PropTypes.string,
    price: PropTypes.number,
    searchImage: PropTypes.string,
    additionalInfo: PropTypes.string,
    totalCount: PropTypes.number,
    totalPrice: PropTypes.number
  }).isRequired,
  incrementCartItem: PropTypes.func,
  decrementCartItem: PropTypes.func,
  removeCartItem: PropTypes.func
};

export default CartItem;
