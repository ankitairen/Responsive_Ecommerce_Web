import React, { useCallback, useEffect, useRef, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./ProductList.module.css";
import Spinner from "react-svg-spinner";
import Product from "../../components/Product/Product";
import productActions from "../../actions/productActions";
import detailActions from "../../actions/detailActions";
import cartActions from "../../actions/cartActions";

const ProductList = () => {
  const loader = useRef(null);

  const productList = useSelector(
    (state) => state.product.paginatedProductList
  );

  const loading = useSelector((state) => state.product.loading);

  const cartMap = useSelector((state) => state.cart.cartMap);

  const searchValue = useSelector((state) => state.search.searchValue);

  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25
    };

    const observer = new IntersectionObserver(loadMore, options);

    if (loader && loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader, productList]);

  useEffect(() => {}, [searchValue]);

  useEffect(() => {
    dispatch(productActions.fetchProductList());
  }, []);

  const handleDetail = useCallback(
    (product) => {
      dispatch(detailActions.showProductDetails(product));
    },
    [productList]
  );

  const addToCart = useCallback(
    (product) => {
      dispatch(cartActions.addToCart(product));
    },
    [productList]
  );

  const loadMore = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && productList.length) {
        !loading && dispatch(productActions.showLoading());
        !loading && dispatch(productActions.fetchNextProducts());
      }
    },
    [loading, productList]
  );

  return (
    <div className={classes.PageContainer}>
      <div className={classes.ProductContainer}>
        {productList.map((product) => (
          <Product
            key={product.productId}
            product={product}
            inCart={!!cartMap[product.productId]}
            handleDetail={handleDetail}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div ref={loader} className={classes.Loader}>
        {loading && <Spinner color="goldenrod" size="64px" thickness={2} />}
      </div>
    </div>
  );
};

export default memo(ProductList);
