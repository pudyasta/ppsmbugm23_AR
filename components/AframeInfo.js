import React from "react";
import "promise.allsettled/auto";
import { Canvas } from "@react-three/fiber";
import { ResizeObserver } from "@juggle/resize-observer";
import { Environment, OrbitControls } from "@react-three/drei";
import ModelThree from "./ModelThree";

const AframeInfo = () => {
  return (
    <Canvas resize={{ polyfill: ResizeObserver }}>
      <ambientLight intensity={0.4} />
      <ModelThree position={[0, 5, -30]} />
      <OrbitControls />
      <Environment files="/environtments/fkkmk.hdr" background />
    </Canvas>
  );
};

export default AframeInfo;
