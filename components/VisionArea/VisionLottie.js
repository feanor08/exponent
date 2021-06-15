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
  lottieObj.setSpeed(0.5)
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0.0, 0.3],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.3, 0.4],
        type: "loop",
        frames: [0,33],
      },
      {
        visibility: [0.4, 0.55],
        type: "seek",
        frames: [33,37],
      }, {
        visibility: [0.55, 0.63],
        type: "loop",
        frames: [42,69],
      },
      {
        visibility: [0.63,0.75],
        type: "seek",
        frames: [69,78],
      },  {
        visibility: [0.75, 1.0],
        type: "loop",
        frames: [78,131],
      },
    ],
  });
  return Animation;
};
export default VisionLottie;