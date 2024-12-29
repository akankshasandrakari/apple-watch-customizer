import React from "react";
import ProductCard from "./components/ProductCard";
import styles from "./styles/Customize.module.css"; // Or your custom CSS file

const App = () => {
  const products = [
    {
      name: "Aluminum Case",
      description: "Lightweight and durable.",
      price: "399.99",
      image: "/images/aluminum.jpg",
    },
    {
      name: "Stainless Steel Case",
      description: "Sleek and premium.",
      price: "499.99",
      image: "/images/stainless-steel.jpg",
    },
    {
      name: "Titanium Case",
      description: "Luxurious and tough.",
      price: "799.99",
      image: "/images/titanium.jpg",
    },
  ];

  return (
    <div className="App">
      <div className={styles.productContainer}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
