import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartItem.module.scss";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  decrementProduct,
  deleteFromCart,
  incrementProduct,
} from "../../../../store/cart/cart.slice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(deleteFromCart(item.id));
  };

  const incrementCount = () => {
    dispatch(incrementProduct(item.id));
  };

  const decrementCount = () => {
    dispatch(decrementProduct(item.id));
  };

  return (
    <div className={styles.cart_item}>
      <Link to={`/card/${item.id}`}>
        <img src={item.image} alt={item.title} />
      </Link>
      <div className={styles.cart_description}>
        <h3>{item.category}</h3>
        <h2>{item.title}</h2>
        <span>
          {item.price} x {item.quantity} = $ {item.total}
        </span>
      </div>
      <div className={styles.cart_count}>
        <div>
          <button disabled={item.quantity === 1} onClick={decrementCount}>
            -
          </button>
          <span>{item.quantity}</span>
          <button disabled={item.quantity === 10} onClick={incrementCount}>
            +
          </button>
        </div>
      </div>
      <button className={styles.cart_delete} onClick={deleteProduct}>
        <AiOutlineDelete />
      </button>
    </div>
  );
};

export default CartItem;
