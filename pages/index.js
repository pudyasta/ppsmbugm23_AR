import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';


import QRScanner from "../components/QRScanner";
import EntryAr from "../components/EntryAr";
import Scanner from "../components/Scanner";

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

    
    <div className="container">
          <Routes>
            <Route path="/">
              <Route
                index
                element={device === "mobile" ? <QRScanner /> : <EntryAr />}
              />
              <Route path="blogs" element={<EntryAr />} />
              <Route path="scanner" element={<Scanner />} />
            </Route>
          </Routes>
    </div>
  )
}
