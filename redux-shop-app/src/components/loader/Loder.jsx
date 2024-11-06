import React from "react";
import styles from "./Loder.module.scss";

const Loder = () => {
  return (
    <div className={styles.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loder;
