import React from "react";
import EntryAr from "../components/EntryAr";

const blogs = () => {
  return (
    <>
      <EntryAr
        model="/three-assets/isipol.gltf"
        sound={"/sounds/vo.m4a"}
        env={"/environtments/fkkmk.hdr"}
      />
    </>
  );
};

export default blogs;
