// import React from "react";
// import "promise.allsettled/auto";
// import { Canvas } from "@react-three/fiber";
// import { ResizeObserver } from "@juggle/resize-observer";
// import { Environment, OrbitControls } from "@react-three/drei";
// import ModelThree from "./ModelThree";

// const AframeInfo = ({ env, model, sound, envRotation }) => {
//   return (
//     <>
//       <audio src={sound} autoPlay={true} loop></audio>

//       <Canvas
//         resize={{ polyfill: ResizeObserver }}
//         camera={{
//           rotateX: 200,
//           rotateOnWorldAxis: [20, 20, 222],
//           position: [20, 0, 0],
//         }}
//       >
//         <ambientLight intensity={0.4} />
//         <ModelThree
//           model={model}
//           position={[-1, -2, -3]}
//           rotation={[0, 15, 0]}
//         />
//         <OrbitControls />
//         <Environment rotation={envRotation} files={env} background />
//       </Canvas>
//     </>
//   );
// };

// export default AframeInfo;
import React from "react";
import "promise.allsettled/auto";
import { Entity, Scene } from "aframe-react";

const AframeInfo = ({ env, model, sound, envRotation }) => {
  return (
    <>
      <Scene>
        <a-assets>
          <img id="skyTexture" src={`/environtments/${env}`} alt="sky" />
        </a-assets>
        <Entity primitive="a-light" type="ambient" color="#000" />
        <Entity
          primitive="a-light"
          type="point"
          intensity="2"
          position="2 4 4"
        />
        <Entity
          primitive="a-sky"
          radius="30"
          src="#skyTexture"
          theta-length="180"
          rotation="0 -90 0"
        />
        <a-entity
          gltf-model={`url(/three-assets/${model}.gltf)`}
          rotation="4 180 0"
          position="0 -2 -4"
        ></a-entity>
        <Entity primitive="a-camera"></Entity>
      </Scene>
    </>
  );
};

export default AframeInfo;
