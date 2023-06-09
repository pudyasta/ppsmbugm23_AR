import "../styles/Home.module.css";
import React, { useEffect, useState } from "react";

import QRScanner from "../components/QRScanner";
import EntryAr from "../components/EntryAr";
import Script from "next/script";

export default function Home() {
  const [device, setDevice] = useState("mobile");
  useEffect(() => {
    const detectDeviceType = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? "Mobile"
        : "Desktop";
    if (detectDeviceType() === "Desktop") {
      setDevice("desktop");
    }
  }, []);

  return (
    <>
    <Script
        src="https://aframe.io/releases/1.4.1/aframe.min.js"
        strategy="beforeInteractive"
      ></Script>
      <div className="container">
        {device === "mobile" ? <QRScanner /> : <EntryAr
          model="isipol"
          sound={"/sounds/vo.m4a"}
          env={"isipolnew.jpg"}/>}
      </div>
    </>
  );
}
