import styles from "@/styles/BestTeamArea.module.css";
import Image from "next/image";
function index() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <h1>And we've got the best team to do it.</h1>
        <img src="/Group 3.svg" />
      </div>
      <div className={styles.image}>
        <img src="/Bitmap.svg" width="400px" height="340px" />
      </div>
    </div>
  );
}

export default index;
