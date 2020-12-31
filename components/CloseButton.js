import {useState,useEffect} from "react";
import { motion } from 'framer-motion';
import infoStyles from "../styles/info";

const xAnimation = {
  hidden: {
    scale: 0.2,
    
    transition: {
      delay: 0
    }
  },
  show: {
    scale: 1,
    
    transition: {
       delay: 0.5,
      duration: 1,
        type: "spring", 
        stiffness: 100 
    }
  }
};

const CloseButton = ({open, close}) => {
	const [hovered, setHover] = useState(false)
	return(
		<div className={hovered ? "info-x info-x-hover" : "info-x"} 
             onMouseEnter={() => setHover(true)} 
             onMouseLeave={() => setHover(false)}
             onClick={() => close()}
        >
        <motion.div initial="hidden" animate={open ? "show" : "hidden"} variants={xAnimation}>X</motion.div>
        <style jsx>{infoStyles}</style>
        </div>
		);
}

export default CloseButton;