import React, { Suspense, useState } from "react";
import { XR, XRButton } from "@react-three/xr";
import { OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ResizeObserver } from "@juggle/resize-observer";
import { useRouter } from "next/router";
import ModelThree from "./ModelThree";

const InfoGrafis = () => {
  const [inAr, setInAr] = useState(false);
  const router = useRouter();

  return (
    <div style={{ height: "100vh" }}>
      <XRButton
        mode="ar"
        position={[0, 0, 0]}
        camera={{ position: [0, 0, -3] }}
      />
      <Canvas resize={{ polyfill: ResizeObserver }}>
        <XR
          referenceSpace="local"
          onSessionStart={(e) => setInAr(true)}
          onSessionEnd={() => {
            setInAr(false);
            router.push("/");
          }}
        >
          {inAr ? (
            <>
              <ambientLight intensity={0.5} />
              <ModelThree position={[0, 0, -2]} scale={[0.05, 0.05, 0.05]} />
            </>
          ) : (
            <>
              <OrbitControls />
            </>
          )}
          <axesHelper />
        </XR>
      </Canvas>
    </div>
  );
};
export default InfoGrafis;
