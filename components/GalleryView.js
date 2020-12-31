import React, { useState, useEffect, useCallback } from "react";
import { motion } from 'framer-motion';
import Gallery from "react-photo-gallery";
import shortid from "shortid";
import SelectedImage from "./SelectedImage";

const galleryAnimation = {
  hidden: { 
    opacity: 1,
    backgroundColor:"#fff" 
  },
  show: {
    opacity: 1,
    backgroundColor:"#000",
    transition: {
      delay: 0.2,
      duration: 0.4
    }
  }
}

export default function GalleryView({photos, setActive}) {
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

 
  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <SelectedImage
        selected={selectAll ? true : false}
        key={shortid.generate()}
        margin={"2px"}
        index={index}
        stagger={index * 0.05}
        photo={photo}
        left={left}
        top={top}
        setActive={setActive}
      />
    ),
    [selectAll]
  );

  return (
    
    <motion.div variants={galleryAnimation}
    initial="hidden"
    animate="show">

      <Gallery photos={photos} renderImage={imageRenderer} />
    </motion.div>
  );
}