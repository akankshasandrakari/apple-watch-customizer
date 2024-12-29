// src/components/ProductCard.js
import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleOptionClick = (option) => {
    if (option === "fullscreen") {
      // Implement fullscreen functionality
      window.open(product.image, "_blank");
    } else if (option === "vieworiginal") {
      // Open original image in a new window
      window.open(product.image, "_blank");
    } else if (option === "download") {
      // Download image
      const link = document.createElement("a");
      link.href = product.image;
      link.download = product.name;
      link.click();
    }
    setShowMenu(false); // Close menu after action
  };

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      {/* Settings Dots */}
      <div className="settings-dots" onClick={toggleMenu}>
        ⋮
      </div>

      {/* Product Information */}
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>

      {/* Search Bar and Options */}
      {showMenu && (
        <div className="options-menu">
          <input type="text" placeholder="Search" className="search-input" />
          <div className="options">
            <button
              className="option-button"
              onClick={() => handleOptionClick("fullscreen")}
            >
              Full Screen
            </button>
            <button
              className="option-button"
              onClick={() => handleOptionClick("vieworiginal")}
            >
              View Original
            </button>
            <button
              className="option-button"
              onClick={() => handleOptionClick("download")}
            >
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
