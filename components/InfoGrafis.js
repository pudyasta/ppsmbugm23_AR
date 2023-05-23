import React, { Suspense, useState } from "react";
import { Interactive, XR, XRButton } from "@react-three/xr";
import { OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ResizeObserver } from "@juggle/resize-observer";
import { useRouter } from "next/router";

const Box = ({ color, size, scale, children, ...rest }) => {
  return (
    <mesh scale={scale} {...rest}>
      <boxGeometry args={size} />
      <meshPhongMaterial color={color} />
      {children}
    </mesh>
  );
};

const BoxGeometric = (props) => {
  return (
    <Interactive>
      <Box color="fff" {...props}>
        <Suspense fallback={null}>
          <Text
            position={[0, 0.25, 0.1]}
            fontSize={0.06}
            lineHeight={1.5}
            color="#000"
            anchorX="center"
            anchorY="middle"
            overflowWrap="true"
            maxWidth={0.7}
          >
            {props.header}
          </Text>
          <Text
            position={[0, 0, 0.06]}
            fontSize={0.03}
            lineHeight={1.5}
            color="#000"
            anchorX="center"
            anchorY="middle"
            overflowWrap="true"
            maxWidth={0.7}
          >
            {props.children}
          </Text>
        </Suspense>
      </Box>
    </Interactive>
  );
};

const InfoGrafis = () => {
  const [inAr, setInAr] = useState(false);
  const router = useRouter();

  return (
    <div style={{ height: "100vh" }}>
      <XRButton
        mode="ar"
        position={[0, 0, 0]}
        camera={{ position: [0, 0, -3] }}
      />
      <Canvas resize={{ polyfill: ResizeObserver }}>
        <XR
          referenceSpace="local"
          onSessionStart={(e) => setInAr(true)}
          onSessionEnd={() => {
            setInAr(false);
            router.push("/");
          }}
        >
          {inAr ? (
            <>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <Text
                  position={[0.15, 0.89, -1.3]}
                  fontSize={0.3}
                  color="#000"
                  anchorX="center"
                  anchorY="middle"
                  overflowWrap="true"
                >
                  FKKMK
                </Text>
              </Suspense>
              <BoxGeometric
                header="Deskripsi"
                position={[0.1, 0.1, -1.2]}
                size={[0.9, 0.7, 0.1]}
              >
                FK-KMK memiliki tujuan untuk menjadi Fakultas berkelas dunia
                yang inovatif dan unggul,serta senantiasa mengabdi kepada bangsa
                dan kemanusiaan. FK-KMK berdiri pada 5 Maret 1946. Sebagai
                fakultas kedokteran tertua di Indonesia, FK-KMK awalnya
                merupakan sekolah kedokteran yang didirikan pada zaman
                penjajahan belanda, yakni School tot Opleiding van Indische
                Artsen (STOVIA), sampai akhirnya bergabung dengan Universitas
                Gadjah Mada pada 16 Desember 1949.
              </BoxGeometric>
              <BoxGeometric
                position={[-1, 0.1, -0.6]}
                rotation-y={Math.PI * 0.25}
                size={[0.9, 0.7, 0.1]}
                header="Fasilitas"
              >
                - Perpustakaan FK-KMK - Gedung Perkuliahan (Grha Wiyata, Ruang
                Kuliah dan Auditorium, Gedung Ismangoen, Gedung Dept. Gizi dan
                Kesehatan, Gedung Radiopoetro, dll.) - Lapangan Basket - Kantin
                (Kantin Medika, Kantin IKM, Kantin Putri) - Masjid Ibnu Sina -
                Student Centre
              </BoxGeometric>
              <BoxGeometric
                header="PPSMB Morfogenesis"
                position={[1.01, 0.1, -0.6]}
                rotation-y={49}
                size={[0.9, 0.7, 0.1]}
              >
                PPSMB Morfogenesis merupakan kegiatan orientasi dan pengenalan
                kampus FK-KMK bagi ‘Sardjito Muda’ yang bertujuan untuk
                mewujudkan lingkungan pembelajaran yang nyaman, saling
                menghormati, dan saling menghargai.
              </BoxGeometric>

              {/* <ModelThree position={[5, 0, -5]} scale={[0.008, 0.008, 0.008]} /> */}
            </>
          ) : (
            <>
              <OrbitControls />
              {/* <Environment files="/ok2.hdr" background /> */}
            </>
          )}
          <axesHelper />
        </XR>
      </Canvas>
    </div>
  );
};
export default InfoGrafis;
