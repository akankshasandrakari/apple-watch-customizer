// src/components/SizeSelector.js
import React from "react";
import styles from "../styles/SizeSelector.module.css"; // Correct path

const SizeSelector = ({ selectedSize, setSelectedSize, sizeDetails }) => {
  return (
    <div>
      <h3>Select Size</h3>
      <div className={styles.sizeGrid}>
        {Object.keys(sizeDetails).map((size) => (
          <div
            key={size}
            className={`${styles.size} ${
              selectedSize === size ? styles.selected : ""
            }`}
            onClick={() => setSelectedSize(size)}
          >
            <img src={sizeDetails[size].image} alt={size} />
            <p>{size}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
