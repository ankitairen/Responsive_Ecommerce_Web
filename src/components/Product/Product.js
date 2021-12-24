import React from "react";
import PropTypes from "prop-types";
import classes from "./Product.module.css";
const Product = ({ product, inCart, handleDetail, addToCart }) => {
  const {
    productId,
    productName,
    price,
    searchImage,
    gender,
    primaryColour,
    brand
  } = product;

  return (
    <div key={productId} className={classes.Card}>
      <div
        className={classes.ImgContainer}
        onClick={() => handleDetail({ ...product })}
      >
        <img src={searchImage} alt={productName} className={classes.Img} />
      </div>
      <h3 className={classes.Brand}>{brand}</h3>
      <h2 className={classes.Title}>{productName}</h2>
      <div className={classes.Info}>
        <span className={classes.GenderSpan}>Gender: {gender}</span>
        <span>Color: {primaryColour}</span>
      </div>
      <span className={classes.Price}>Cost : {price}</span>
      <button
        disabled={inCart ? true : false}
        onClick={() => {
          addToCart(product);
        }}
        className={inCart ? classes.CartBtnDisable : classes.CartBtn}
      >
        {inCart ? <span>in Cart</span> : <span>ADD To CART</span>}
      </button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.number,
    productName: PropTypes.string,
    price: PropTypes.number,
    searchImage: PropTypes.string,
    gender: PropTypes.string,
    primaryColour: PropTypes.string,
    brand: PropTypes.string
  }).isRequired,
  inCart: PropTypes.bool,
  handleDetail: PropTypes.func,
  addToCart: PropTypes.func
};

export default Product;
