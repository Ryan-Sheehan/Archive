import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';






const Checkmark = ({ selected }) => (
  <div
    style={
      selected
        ? { left: "4px", top: "4px", position: "absolute", zIndex: "1" }
        : { display: "none" }
    }
  >
    <svg
      style={{ fill: "white", position: "absolute" }}
      width="24px"
      height="24px"
    >
      <circle cx="12.5" cy="12.2" r="8.292" />
    </svg>
    <svg
      style={{ fill: "#06befa", position: "absolute" }}
      width="24px"
      height="24px"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  </div>
);

const imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const selectedImgStyle = {
  transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const cont = {
  
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  borderRadius: "2px",

};

const SelectedImage = ({
  index,
  stagger,
  photo,
  margin,
  direction,
  top,
  left,
  selected,
  setActive
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  const [isHovered, setIsHovered] = useState(false);

  //calculate x,y scale
  const sx = (100 - (30 / photo.width) * 100) / 100;
  const sy = (100 - (30 / photo.height) * 100) / 100;
  selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }
  const photoAnimation = {
    hidden: {
      scale: .3,
      opacity: 0,
      x: Math.floor(Math.random() * 1600) - 800,
      y: Math.floor(Math.random() * 1600) - 800,
      z: Math.floor(Math.random() * 1600) - 800,
      filter: blur("800px")    

    },
    show: { 
      scale: 1,
      opacity: 1,
      filter: blur(0),  
      x: 0,  
      y: 0,  
      z: 0,  
      transition: {
        delay: stagger + 0.3,
        duration: 0.3,
        type: "spring", 
        stiffness: 100 
      } 
    }
  };

  const handleOnClick = e => {
    setIsSelected(!isSelected);
  };
  const handleMouseEnter = e => {
    setActive(photo.id,"gallery-hover")

  };
  const handleMouseLeave = e => {
   
  };

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  return (
    <motion.div variants={photoAnimation}>
    <div
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
      className={"gallery-item " + (!isSelected ? "not-selected" : "")}
    >
      <Checkmark selected={isSelected ? true : false} />
      
      <img 
        alt={photo.title}
        style={
          isSelected ? { ...imgStyle, ...selectedImgStyle } : { ...imgStyle }
        }
        {...photo}
        
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {isHovered && <div style={{position:"absolute", zIndex: 100000000, fontSize: "5rem", top: 0}}>{photo.desc}</div>}
      
      <style>{`.not-selected:hover{outline:2px solid #fff}`}</style>
    </div>
    </motion.div>
  );
};

export default SelectedImage;