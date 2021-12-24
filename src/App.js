import React from "react";
import { Switch, Route } from "react-router-dom";
import classes from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Cart from "./containers/Cart/Cart";
import ProductList from "./containers/ProductList/ProductList";
import Default from "./components/Default/Default";
import Modal from "./components/Modal/Modal";
import detailActions from "./actions/detailActions";
import cartActions from "./actions/cartActions";
import searchActions from "./actions/searchActions";

const App = () => {
  const productDetail = useSelector((state) => state.detail.productDetail);

  const cartMap = useSelector((state) => state.cart.cartMap);

  const showModal = useSelector((state) => state.detail.showModal);

  const searchValue = useSelector((state) => state.search.searchValue);

  const dispatch = useDispatch();

  const hideModalDialog = () => {
    dispatch(detailActions.hideProductDetails());
  };

  const addToCart = (product) => {
    dispatch(cartActions.addToCart(product));
  };

  const setSearchInput = (value) => {
    dispatch(searchActions.setSearchValue(value));
  };

  return (
    <div className={classes.App}>
      <div>
        <Navbar
          count={Object.values(cartMap).length}
          onChange={setSearchInput}
          value={searchValue}
        />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/cart" exact component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal
          productDetail={productDetail}
          showModal={showModal}
          hideModalDialog={hideModalDialog}
          addToCart={addToCart}
          cart={cartMap}
        />
      </div>
    </div>
  );
};

export default App;
