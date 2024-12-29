// src/components/CaseSelector.js
import React from "react";
import styles from "../styles/CaseSelector.module.css"; // Correct path

const CaseSelector = ({ selectedCase, setSelectedCase, productDetails }) => {
  return (
    <div>
      <h3>Select Case</h3>
      <div className={styles.caseGrid}>
        {Object.keys(productDetails).map((caseType) => (
          <div
            key={caseType}
            className={`${styles.case} ${
              selectedCase === caseType ? styles.selected : ""
            }`}
            onClick={() => setSelectedCase(caseType)}
          >
            <img src={productDetails[caseType].image} alt={caseType} />
            <p>{caseType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseSelector;
