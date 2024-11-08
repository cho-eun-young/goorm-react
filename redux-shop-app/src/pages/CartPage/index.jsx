import React from "react";
import { useSelector } from "react-redux";
import CartEmpty from "../../components/cart-empty/CartEmpty";
import Checkout from "./chekout/Checkout";
import CartList from "./cart-list/CartList";

const Cartpage = () => {
  const { products } = useSelector((state) => state.cart);
  return (
    <div className="page">
      {!products.length ? (
        <CartEmpty />
      ) : (
        <div className="container">
          <h1>장바구니</h1>
          <CartList />
          <Checkout />
        </div>
      )}
    </div>
  );
};

export default Cartpage;
