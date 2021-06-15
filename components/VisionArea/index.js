import styles from "@/styles/VisionArea.module.css";

import VisionLottie from "./VisionLottie";
import animationData from "@/components/lottie/animationData.json";
function VisionArea() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Imagine all the awesomeness of going
        <br /> electric without the shackles of charging.
      </h1>
      <div className={styles.lottie}>
        <VisionLottie className={styles.lottie} />
      </div>
    </div>
  );
}

export default VisionArea;
