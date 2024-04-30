/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
//@ts-ignore
import Lottie from "react-lottie";
import animationData from "./../lotties/animation.json";

export default function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="logoAnimation">
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  );
}
