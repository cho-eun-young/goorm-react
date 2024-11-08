import React, { useEffect } from "react";
import styles from "./Checkout.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice } from "../../../store/cart/cart.slice";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [cart]);

  return (
    <div className={styles.checkout}>
      <div>
        <p>
          {" "}
          <span>합계: ${cart.totalPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default Checkout;
