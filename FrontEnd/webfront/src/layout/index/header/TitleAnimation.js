import React from "react";
import SplitText from "react-pose-text";

const charPoses = {
  exit: { opacity: 0, y: -80 },
  enter: {
    opacity: 1,
    y: 20,
    delay: ({ charIndex }) => charIndex * 400,
  },
};

function TitleAnimation() {
  return (
    <div className="container">
      <SplitText
        id="maintitle"
        className="h1 m-1"
        initialPose="exit"
        pose="enter"
        charPoses={charPoses}
      >
        DADOK
      </SplitText>
    </div>
  );
}

export default TitleAnimation;
