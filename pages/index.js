import "../styles/Home.module.css";
import React, { useEffect, useState } from "react";

import QRScanner from "../components/QRScanner";
import EntryAr from "../components/EntryAr";

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
      <audio src="/iphone_14.mp3"></audio>
      <div className="container">
        {device === "mobile" ? <QRScanner /> : <EntryAr />}
      </div>
    </>
  );
}
