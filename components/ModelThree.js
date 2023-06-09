import React from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useRef } from "react";
import { useEffect } from "react";

const ModelThree = (props) => {
  const modelx = props.model;
  const modelRef = useRef();

  const modelMatrix = new THREE.Matrix4();
  const { camera } = useThree();

  useEffect(() => {
    modelMatrix.copy(modelRef.current.matrixWorld);
  }, []);
  const model = useLoader(GLTFLoader, modelx);

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
    <group position={props.position} rotation={props.rotation} ref={modelRef}>
      <primitive object={model.scene} scale={props.scale} />
    </group>
  );
};

export default ModelThree;
