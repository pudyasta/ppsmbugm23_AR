import React from "react";
import "promise.allsettled/auto";
import { Canvas } from "@react-three/fiber";
import { ResizeObserver } from "@juggle/resize-observer";
import { Environment, OrbitControls } from "@react-three/drei";
import ModelThree from "./ModelThree";
import BoxDeskripsi from "./BoxDeskripsi";
import { Box, Text } from "@react-three/drei";

const AframeInfo = () => {
  const boxScale = [1, 1, 1];
  const boxSize1 = [5, 5, 0.5];
  return (
    <Canvas resize={{ polyfill: ResizeObserver }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {/* <ModelThree position={[0, 5, -30]} scale={[0.09, 0.09, 0.09]} /> */}
      {/* <BoxDeskripsi/> */}

      <Text
        position={[-3, 3, -4]}
        fontSize={0.8}
        color="#000000"
        anchorX="top"
        anchorY="middle"
      >
        FKKMK
      </Text>

      <Box
        args={[5, 5, 0.1]}
        position={[-2, 0, -5]}
        scale={boxScale}
        rotatey={3}
      >
        <Text
          position={[-2, 2.0, 0.5]}
          fontSize={0.5}
          color="#000000"
          anchorX="top"
          anchorY="middle"
        >
          Deskripsi Singkat
        </Text>

        <Text
          position={[0, 0, 0.5]}
          fontSize={0.2}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          maxWidth={4} // Specify the maximum width for text wrapping
          wrap="true"
        >
          FK-KMK memiliki tujuan untuk menjadi Fakultas berkelas dunia yang
          inovatif dan unggul, serta senantiasa mengabdi kepada bangsa dan
          kemanusiaan. FK-KMK berdiri pada 5 Maret 1946. Sebagai fakultas
          kedokteran tertua di Indonesia, FK-KMK awalnya merupakan sekolah
          kedokteran yang didirikan pada zaman penjajahan belanda, yakni School
          tot Opleiding van Indische Artsen (STOVIA), sampai akhirnya bergabung
          dengan Universitas Gadjah Mada pada 16 Desember 1949.
        </Text>
      </Box>

      <Box args={[5, 5, 0.1]} position={[3.5, 0, -5]} scale={boxScale}>
        <Text
          position={[-2, 2.0, 0.5]}
          fontSize={0.3}
          color="#000000"
          anchorX="top"
          anchorY="middle"
        >
          PPSMB MORFOGENESIS
        </Text>

        <Text
          position={[0, 0, 0.5]}
          fontSize={0.2}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          maxWidth={4} // Specify the maximum width for text wrapping
          wrap="true"
        >
          PPSMB Morfogenesis merupakan kegiatan orientasi dan pengenalan kampus
          FK-KMK bagi ‘Sardjito Muda’ yang bertujuan untuk mewujudkan lingkungan
          pembelajaran yang nyaman, saling menghormati, dan saling menghargai.
        </Text>
      </Box>

      <Box args={[5, 5, 0.1]} position={[-7.5, 0, -5]} scale={boxScale}>
        <Text
          position={[0.2, 2.0, 0.5]}
          fontSize={0.5}
          color="#000000"
          anchorX="center"
          anchorY="middle"
        >
          Fasilitas
        </Text>

        <Text
          position={[0.2, 0, 0.5]}
          fontSize={0.2}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          maxWidth={4} // Specify the maximum width for text wrapping
          wrap="true"
        >
          - Perpustakaan FK-KMK - Gedung Perkuliahan (Grha Wiyata, Ruang Kuliah
          dan Auditorium, Gedung Ismangoen, Gedung Dept. Gizi dan Kesehatan,
          Gedung Radiopoetro, dll.) - Lapangan Basket - Kantin (Kantin Medika,
          Kantin IKM, Kantin Putri) - Masjid Ibnu Sina - Student Centre
        </Text>
      </Box>

      <OrbitControls />
      <Environment files="/ok2.hdr" background />
    </Canvas>
  );
};

export default AframeInfo;
