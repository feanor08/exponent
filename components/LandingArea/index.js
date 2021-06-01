import styles from "@/styles/LandingArea.module.css";
import Image  from "next/image";
const LandingArea = () => {
  return (
    <div className={styles.container}>
    <div className={styles.gridContainer}>
      <div className={styles.gridItem}>
        <h1>Faster</h1>
        <h1>Farther</h1>
        <h1>Free-er</h1>
      </div>
      <div className={styles.gridItem2}>
        <div className={styles.parent}>
          <h3>powered by</h3>
          <h2>5 minute charge</h2>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LandingArea;
