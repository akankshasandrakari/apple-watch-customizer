// src/pages/index.js
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Index.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <header>
        <h1>Apple Watch Studio</h1>
        <p>Customize your Apple Watch</p>
      </header>

      <section className={styles.intro}>
        <Image
          src="/images/landing-image.jpg" // Add your landing page image here
          alt="Apple Watch"
          width={500}
          height={500}
        />
        <p>
          Welcome to the Apple Watch Studio. Select your case, band, and size to
          customize your perfect watch!
        </p>
        <Link href="/customize">
          <button className={styles.customizeButton}>Start Customizing</button>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
