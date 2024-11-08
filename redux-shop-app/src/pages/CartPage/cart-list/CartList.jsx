import React from "react";
import styles from "./CartList.module.scss";
import { useSelector } from "react-redux";
import CartItem from "./cart-item/CartItem";

const CartList = () => {
  const { products } = useSelector((state) => state.cart);
  return (
    <div className={styles.cart_list}>
      {products.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;