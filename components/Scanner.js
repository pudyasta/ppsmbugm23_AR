import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "mind-ar/dist/mindar-image-aframe.prod.js";
import { redirectTo } from "../helpers/Route";
const Scanner = (props) => {
  const sceneRef = useRef(null);
  const targetRef = useRef();
  const navigateTo = useNavigate();

  useEffect(() => {
    const sceneEl = sceneRef.current;
    const arSystem = sceneEl.systems["mindar-image-system"];
    sceneEl.addEventListener("renderstart", () => {
      arSystem.start();
    });
    targetRef.current.addEventListener("targetFound", (e) => {
      arSystem.stop();
      redirectTo("/blogs");
      window.location.reload();
    });
  });
  return (
    <a-scene
      ref={sceneRef}
      mindar-image="imageTargetSrc: /targets.mind; autoStart: true;  uiError: no;"
      color-space="sRGB"
      embedded
      renderer="colorManagement: true, physicallyCorrectLights"
      vr-mode-ui="enabled: false"
      device-orientation-permission-ui="enabled: false"
    >
      <a-assets>
        <a-asset-item
          id="raccoonModel"
          src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.1/examples/image-tracking/assets/band-example/raccoon/scene.gltf"
        ></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 2" ref={targetRef}></a-entity>
      <a-entity mindar-image-target="targetIndex: 0">
        <a-gltf-model
          rotation="0 0 0 "
          position="0 -0.25 0"
          scale="0.05 0.05 0.05"
          src="#raccoonModel"
          animation-mixer
        />
      </a-entity>
    </a-scene>
  );
};

export default Scanner;
