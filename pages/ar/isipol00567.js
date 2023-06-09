import React from "react";
import EntryAr from "../../components/EntryAr";
import Script from "next/script";

const isipol00567 = () => {
  return (
    <>
      <Script
        src="https://aframe.io/releases/1.4.1/aframe.min.js"
        strategy="beforeInteractive"
      ></Script>
      <div className="container">
        <EntryAr
          model="isipol"
          sound={"/sounds/vo.m4a"}
          env={"isipolnew.jpg"}
        />
      </div>
    </>
  );
};

export default isipol00567;
