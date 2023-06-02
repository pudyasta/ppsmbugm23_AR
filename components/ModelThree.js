import React from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";
import { useEffect } from "react";

const ModelThree = (props) => {
  const modelRef = useRef();

  const { camera } = useThree();
  const modelMatrix = new THREE.Matrix4();

  useEffect(() => {
    modelMatrix.copy(modelRef.current.matrixWorld);
  }, []);
  const model = useLoader(GLTFLoader, "/three-assets/tk.gltf");
  let mixer;
  if (model.animations.length) {
    mixer = new THREE.AnimationMixer(model.scene);
    model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((state, delta) => {
    mixer?.update(delta);
  });

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });

  return (
    <group position={props.position} ref={modelRef}>
      <primitive object={model.scene} scale={props.scale} />
    </group>
  );
};

export default ModelThree;
