import React, { Suspense, useState } from "react";
import { XR, XRButton } from "@react-three/xr";
import { OrbitControls, Text, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ResizeObserver } from "@juggle/resize-observer";
import { useRouter } from "next/router";
import ModelThree from "./ModelThree";

const InfoGrafis = ({ sound, model }) => {
  const [inAr, setInAr] = useState(false);
  const router = useRouter();

  return (
    <div style={{ height: "100vh", backgroundImage: "url(/fisipol.jpg)" }}>
      {/* <audio src={sound} autoPlay={true} loop></audio> */}
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
              <ModelThree
                model={`/three-assets/${model}.gltf`}
                position={[0, -2, -10]}
                rotation={[0, 15.8, 0]}
                scale={[1.5, 1.5, 1.5]}
              />
            </>
          ) : (
            <>
              <Environment files={"/environtments/isipolnew.hdr"} background />
              <OrbitControls autoRotate />
            </>
          )}
        </XR>
      </Canvas>
    </div>
  );
};
export default InfoGrafis;
