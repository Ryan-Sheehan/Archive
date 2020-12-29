import {useEffect} from "react";
import EmailSVG from './EmailSVG';
import SidebarHeader from './SidebarHeader';
import { motion } from 'framer-motion';
import sidebarStyles from "../styles/sidebar";

const sidebarAnimation = {
  open: { 
    opacity: 1, 
    x: 0 
  },
  closed: { 
    opacity: 0, 
    x: -100,
    transition: {
      duration: 0.8,
      
    } 
  }
}

const contactAnimation = {
  hidden: {
    y: 400,
    opacity: 0,
    transition: {
      delay: 0.8
    }
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
};

const Sidebar = ({open, mode, mobile}) => {
  
  useEffect(() => console.log(), [open, mode, mobile]);

  return(
    <div className={"sidebar"} style={{opacity: open || mode === "gallery" ? '0' : '1'}}>
    {mobile ? 
      
      <div className="sidebar-inner">
      <SidebarHeader/>
      <EmailSVG/>
      </div>

      :

      <motion.div initial="closed" animate={!open ? "open" : "closed"} transition={{ duration: 0.8 }} variants={sidebarAnimation}>
      <div className="sidebar-inner">
       <SidebarHeader/>
         <motion.div className="contact" initial="hidden" animate={!open ? "show" : "hidden"} variants={contactAnimation}>
         <EmailSVG/>
         </motion.div>
      </div>
      </motion.div>

    }
    <style jsx>{sidebarStyles}</style>
    </div>
    );
}
export default Sidebar;