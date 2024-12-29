// src/components/BandSelector.js
import React from "react";
import styles from "../styles/BandSelector.module.css"; // Correct path

const BandSelector = ({ selectedBand, setSelectedBand, bandDetails }) => {
  return (
    <div>
      <h3>Select Band</h3>
      <div className={styles.bandCarousel}>
        {Object.keys(bandDetails).map((band) => (
          <div
            key={band}
            className={`${styles.band} ${
              selectedBand === band ? styles.selected : ""
            }`}
            onClick={() => setSelectedBand(band)}
          >
            <img src={bandDetails[band].image} alt={band} />
            <p>{band}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BandSelector;
