import React, { useEffect } from "react";
import { Entity, Scene } from "aframe-react";
import "promise.allsettled/auto";

const ios = () => {
  return (
    // <div>
    //   <a rel="ar" href="/three-assets/lanternios.usdz">
    //     <img src="/detectors/logo.png" />
    //   </a>
    // </div>
    <div className="container">
      <Scene>
        <a-assets>
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
            alt="ground"
          />
          <img id="skyTexture" src="/environtments/teknik.jpg" alt="sky" />
        </a-assets>
        <Entity primitive="a-light" type="ambient" color="#445451" />
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
          rotation="0 30 0"
        />

        <Entity
          id="box"
          geometry={{ primitive: "box" }}
          material={{ color: "red", opacity: 0.6 }}
          position={{ x: 0, y: 2, z: -8 }}
          scale={{ x: 5, y: 5, z: 1 }}
        >
          <Entity
            text={{ value: "PPSMB Pionir \nGadjah Mada", align: "center" }}
            scale={{ x: 3, y: 3 }}
            position={{ x: 0, y: 0.2, z: 0.5 }}
          />
        </Entity>
        <Entity
          id="box"
          geometry={{ primitive: "box" }}
          material={{ color: "blue", opacity: 0.6 }}
          position={{ x: 8, y: 2, z: -6 }}
          scale={{ x: 5, y: 5, z: 1 }}
          rotation="0 -30 0"
        >
          <Entity
            text={{ value: "Ada apa sih di Teknik?", align: "center" }}
            scale={{ x: 2, y: 2 }}
            position={{ x: 0, y: 0.2, z: 0.5 }}
          />
        </Entity>

        <Entity primitive="a-camera">
          <Entity
            primitive="a-cursor"
            animation__click={{
              property: "scale",
              startEvents: "click",
              from: "0.1 0.1 0.1",
              to: "1 1 1",
              dur: 150,
            }}
          />
        </Entity>
      </Scene>
    </div>
  );
};

export default ios;
