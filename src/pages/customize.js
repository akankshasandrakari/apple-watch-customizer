import { useState } from "react";
import styles from "../styles/Customize.module.css";

const Customize = () => {
  const [customizing, setCustomizing] = useState(false);

  // Handle the button click event to start customizing
  const handleStartCustomizing = () => {
    setCustomizing(true); // Switch to the customization page after button click
  };

  const productDetails = [
    {
      name: "Aluminum",
      price: "$399",
      description: "Lightweight and durable",
      image: "/images/aluminum.jpg",
      features: [
        "Retina Display",
        "Up to 18 hours battery life",
        "Lightweight case",
      ],
    },
    {
      name: "Stainless Steel",
      price: "$499",
      description: "Sleek and premium",
      image: "/images/stainless-steel.jpg",
      features: [
        "Always-On Display",
        "Up to 20 hours battery life",
        "Premium finish",
      ],
    },
    {
      name: "Titanium",
      price: "$799",
      description: "Luxurious and tough",
      image: "/images/titanium.jpg",
      features: [
        "Sapphire Display",
        "Up to 24 hours battery life",
        "Strong & durable",
      ],
    },
  ];

  const [showMenu, setShowMenu] = useState(null);

  const handleMenuToggle = (index) => {
    setShowMenu(showMenu === index ? null : index); // Toggle the menu for each product
  };

  const handleFullscreen = (image) => {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(
      `<img src="${image}" style="width:100%; height:100%;" />`
    );
  };

  const handleDownload = (image) => {
    const link = document.createElement("a");
    link.href = image;
    link.download = "product-image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewOriginal = (image) => {
    window.open(image, "_blank");
  };

  // Render logic
  if (!customizing) {
    return (
      <div className={styles.welcomePage}>
        <h1 className={styles.welcomeHeading}>Apple Watch Studio</h1>
        <h2 className={styles.subHeading}>Customize your Apple Watch</h2>
        <div className={styles.welcomeContent}>
          <h3 className={styles.welcomeText}>
            Welcome to the Apple Watch Studio. Select your case, band, and size
            to customize your perfect watch!
          </h3>
          <img
            src="/images/apple.jpg" // Make sure this image exists in the public/images folder
            alt="Apple Watch"
            className={styles.welcomeImage}
          />
          <button
            className={styles.startButton}
            onClick={handleStartCustomizing} // Start customizing when clicked
          >
            Start Customizing
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.customizePage}>
      <h1 className={styles.heading}>Customize Your Apple Watch</h1>
      <div className={styles.productContainer}>
        {productDetails.map((product, index) => (
          <div className={styles.productCard} key={index}>
            <div className={styles.cardHeader}>
              <h2 className={styles.productName}>{product.name}</h2>
              <div className={styles.menu}>
                <span
                  className={styles.menuIcon}
                  onClick={() => handleMenuToggle(index)}
                >
                  &#8942;
                </span>
                {showMenu === index && (
                  <div className={styles.menuDropdown}>
                    <div
                      className={styles.menuItem}
                      onClick={() => handleFullscreen(product.image)}
                    >
                      &#128065; Fullscreen
                    </div>
                    <div
                      className={styles.menuItem}
                      onClick={() => handleViewOriginal(product.image)}
                    >
                      🔗 View Original
                    </div>
                    <div
                      className={styles.menuItem}
                      onClick={() => handleDownload(product.image)}
                    >
                      &#128190; Download
                    </div>
                  </div>
                )}
              </div>
            </div>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <p className={styles.productPrice}>{product.price}</p>
            <ul className={styles.featuresList}>
              {product.features.map((feature, featureIndex) => (
                <li key={featureIndex} className={styles.feature}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customize;
