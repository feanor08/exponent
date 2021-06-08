import styles from "@/styles/VisionArea.module.css";
import Lottie from "react-lottie";
import VisionLottie from './VisionLottie'
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
        <VisionLottie/>
        {/* <Lottie options={defaultOptions} height="50%" width="100%" /> */}

    </div>
  );
}

export default VisionArea;
