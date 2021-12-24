import React from "react";
import PropTypes from "prop-types";
import classes from "./Modal.module.css";

const Modal = ({
  productDetail = {},
  cart,
  showModal,
  hideModalDialog,
  addToCart
}) => {
  if (!showModal) {
    return null;
  }

  const {
    productId,
    productName,
    price,
    searchImage,
    gender,
    primaryColour,
    brand,
    rating,
    ratingCount,
    additionalInfo
  } = productDetail;

  const inCart = !!cart[productId];

  return (
    <div key={productId}>
      <div className={classes.Backdrop} onClick={hideModalDialog} />
      <div className={classes.Container}>
        <div className={classes.ImgContainer}>
          <img src={searchImage} alt={productName} className={classes.Img} />
        </div>
        <div className={classes.InfoContainer}>
          <h1 className={classes.Title}>{productName}</h1>
          <h3>Made by: {brand}</h3>
          <p>
            <strong>Gender: </strong>
            {gender}
          </p>
          <p>
            <strong>Color: </strong>
            {primaryColour}
          </p>
          <p>
            <strong>Description: </strong>
            {additionalInfo}
          </p>
          <p>
            <strong>Rating: </strong>
            {`${Math.round(rating)} average based on ${ratingCount} reviews`}
          </p>
          <h2>Price: {price}</h2>
          <div className={classes.BtnContainer}>
            <button className={classes.BackButton} onClick={hideModalDialog}>
              Back to Shop
            </button>
            <button
              disabled={inCart ? true : false}
              onClick={() => {
                addToCart(productDetail);
              }}
              className={inCart ? classes.CartBtnDisable : classes.CartBtn}
            >
              {inCart ? <span>in Cart</span> : <span>ADD To CART</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  productDetail: PropTypes.shape({
    productId: PropTypes.number,
    productName: PropTypes.string,
    price: PropTypes.number,
    searchImage: PropTypes.string,
    gender: PropTypes.string,
    primaryColour: PropTypes.string,
    brand: PropTypes.string,
    rating: PropTypes.number,
    ratingCount: PropTypes.number,
    additionalInfo: PropTypes.string
  }),
  showModal: PropTypes.bool,
  hideModalDialog: PropTypes.func,
  cart: PropTypes.object,
  addToCart: PropTypes.func
};

export default Modal;
