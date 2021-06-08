import { useLottie, useLottieInteractivity } from "lottie-react";
import animationData from "@/components/lottie/animationData.json";
const style = {
  height: "50%",
  width:"100%",
};
const options = {
  animationData: animationData,
};
const VisionLottie = () => {
  const lottieObj = useLottie(options, style);
  lottieObj.setSpeed(0.7)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.4, 0.9],
        type: "seek",
        frames: [0, 100],
      },
    ],
  });
  return Animation;
};
export default VisionLottie;