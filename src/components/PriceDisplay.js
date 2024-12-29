// src/components/PriceDisplay.js
import React from "react";
import styles from "../styles/PriceDisplay.module.css"; // Correct path

const PriceDisplay = ({ price, description }) => {
  return (
    <div className={styles.priceContainer}>
      <h3>Total Price</h3>
      <p className={styles.price}>${price}</p>
      <p>{description}</p>
    </div>
  );
};

export default PriceDisplay;
