import React, { useEffect, useState } from "react";
import AframeInfo from "./AframeInfo";
import InfoGrafis from "./InfoGrafis";
import Swal from "sweetalert2";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";

const EntryAr = ({ sound, model, env, envRotation }) => {
  const [supported, setSupported] = useState(true);
  const router = useRouter();

  async function checkForXRSupport() {
    if (navigator.xr) {
      navigator.xr.isSessionSupported("immersive-vr").then((supported) => {
        if (!supported) {
          Swal.fire({
            title: "Device kamu tidak disupport",
            text: "Tapi jangan khawatir kamu tetap bisa mengakses AR dengan 3d Model lhoo",
            imageUrl:
              "https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg",

            imageAlt: "Custom image",
            showConfirmButton: false,
          });
          setSupported(false);
        }
      });
    } else {
      Swal.fire({
        title: "Device kamu tidak disupport",
        text: "Tapi jangan khawatir kamu tetap bisa mengakses AR dengan 3d Model lhoo",
        imageUrl:
          "https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        showConfirmButton: false,
      });
      setSupported(false);
    }
  }

  useEffect(() => {
    const detectDeviceType = () =>
      /iPhone|iPad|iPod/i.test(navigator.userAgent) ? true : false;
    if (detectDeviceType() === true) {
      router.push("https://ppsmbpionirgadjahmada.vercel.app/");
    } else {
      checkForXRSupport();
    }
  }, []);
  return (
    <>
      <Head>
        <title>AR PPSMB Pionir Gadjah Mada 2023</title>
      </Head>
      <div>
        {supported ? (
          <InfoGrafis model={model} sound={sound} />
        ) : (
          <AframeInfo
            model={model}
            sound={sound}
            env={env}
            envRotation={envRotation}
          />
        )}
      </div>
    </>
  );
};

export default EntryAr;
