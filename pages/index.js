
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Router from "next/router";
import { motion } from 'framer-motion';

import ReactMarkdown from 'react-markdown'
 
import Layout from "../components/Layout";
import sanity from "../lib/sanity";
import listStyles from "../styles/list";
import galleryStyles from "../styles/gallery";
import infoStyles from "../styles/info";
import sidebarStyles from "../styles/sidebar";
import fontStyles from "../styles/fonts";
import mainStyles from "../styles/main";
import imageUrlFor from "../utils/imageUrlFor";

import EmailSVG from "../components/EmailSVG";
import Description from "../components/Description";
import CloseButton from "../components/CloseButton";
import SelectedImage from "../components/SelectedImage";


import Gallery from "react-photo-gallery";

const query = `*[_type == "ryan"] {
  _id,
  name,
  summary,
  date,
  image,
  height,
  width,
  "imageAspect": image.asset->.metadata.dimensions.aspectRatio,
  "color":image.asset->.metadata.palette.dominant.background
}[0...50]
`;

const scaleStart = {
   scale: .8,
    opacity: 0
};

const scaleEnd = {
  scale: 1,
    opacity: 1,
    transition: {
      delay: 0
    }
};

const listAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}


const bgStart = {
    backgroundColor: "#fff",
    opacity: 0
};

const bgEnd = {
  backgroundColor: "#000",
  opacity: 1,
  transition: {
    delay: 0
  }
};



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
      duration: 2,
        type: "spring", 
        stiffness: 100 
    }
  }
};

const descriptionAnimation = {
  hidden: {
    x: 300,
    transition: {
      delay: 0.5,  
    }
  },
  show: {
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: [0, 0.55, 0.45, 1]
    }
  }
};

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

function GalleryView({photos}) {
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <SelectedImage
        selected={selectAll ? true : false}
        key={key}
        margin={"2px"}
        index={index}
        stagger={index * 0.05}
        photo={photo}
        left={left}
        top={top}
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

class Ryans extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: null,
      currentDesc: null,
      open: false,
      xHovered: false,
      mode: 'list'
    }

    this.domRefs = {};

    this.descriptions = {};
    this.galleryPhotos = [];
    this.listPhotos = []
    this.props.ryan.forEach((ryan, i) => {
      this.descriptions[ryan._id] = <Description info={ryan}/>;
      

      this.galleryPhotos.push(
        {"src": imageUrlFor(ryan.image).width(800).toString(),
        "width":800, 
        "height":800 / ryan.imageAspect
      });

      const listItemAnimation = {
        hidden: {
          scale: .2,
          opacity: 0,
          
        },
        show: {
          scale: 1,
          opacity: 1,
          
          transition: {
            delay: i * 0.2,
            duration:0.4,
            ease: [0.85, 0, 0.15, 1]
          }
        }
      }

      this.listPhotos.push(
        <li key={ryan._id} 
            ref={(ref) => {this.domRefs[ryan._id] = ref}}
            className={"list_item"}
            onClick={() => {this.setActive(ryan._id, "clicked")}}
            onMouseEnter={() => {if (this.state.open) this.setActive(ryan._id, "hovered")}}
            >
              {ryan.image && (
              
              <motion.div initial="hidden" animate="show" variants={listItemAnimation}>
                    
                <img 
                  src={imageUrlFor(ryan.image).width(800)}
                  width="800"
                  height={800 / ryan.imageAspect}
                />
                    
             
              </motion.div>
              
              )}
                  
              <style jsx>{listStyles}</style>
        </li>
      )

    })
    
    
    

  }

  setActive = (id, method) => {
    
    if ((this.state.active === id || id === null) && method === "clicked") this.setState({active:null, open: false})
  
    else if (method === "clicked") {
      this.setState({active:id, currentDesc: id, open: true})
      this.domRefs[id].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  handleClose = () => {
    this.setActive(null, "clicked")
    this.setState({xHovered:false})
  } 

  setMode = (current) => {
    this.setState({active:null, open: false}, () => this.setState({mode:current}))
  }

 
  render() {
  return (
    <Layout>
    <div>
     <div id="main" className={this.state.open ? "container-pushed" : "container"}>

     
     <React.Fragment>
     <div className={"sidebar"} style={{opacity: this.state.open || this.state.mode === "gallery" ? '0' : '1'}}>

     <motion.div initial="closed" animate={!this.state.open ? "open" : "closed"} transition={{ duration: 0.8 }} variants={sidebarAnimation}>
      
      <div className="sidebar-inner ">
       
       <div>
         <div className="sidebar-name">Ryan Sheehan</div>
         <div className="sidebar-bio">An archive of some of the graphic work Ryan has made in no particular order. Click on any piece for more information. Click on the email below to copy it. Reach out for anything.</div>
       </div>

       <motion.div className="contact" initial="hidden" animate={!this.state.open ? "show" : "hidden"} variants={contactAnimation}>
         <EmailSVG/>
       </motion.div>
     
      </div>
     </motion.div>
  
     </div>


     <div className={this.state.open ? "info info-open" : "info"} >
  
      <div className="info-inner">
       
       
         
         
      
      <div className={this.state.xHovered ? "info-x info-x-hover" : "info-x"} 
           onMouseEnter={() => this.setState({xHovered:true})} 
           onMouseLeave={() => this.setState({xHovered:false})}
           onClick={() => this.handleClose()}
      ><motion.div initial="hidden" animate={this.state.open ? "show" : "hidden"} variants={xAnimation}>X</motion.div></div>
      
      <motion.div initial="hidden" animate={this.state.open ? "show" : "hidden"} variants={descriptionAnimation}>
      {this.descriptions[this.state.currentDesc]}
      </motion.div>

       
     
      </div>

  
     </div>

     
      <div className="ryan-list" style={{opacity: this.state.mode === "gallery" ? '0' : '1'}}>
        <ul className="ryan-list-inner" >
          {this.listPhotos}
        </ul>
      </div >

      </React.Fragment>
    

      {this.state.mode === "gallery" && 
      
      <div className="ryan-gallery">
      
      <GalleryView photos={this.galleryPhotos}/>
      
      </div>
      
      }





      <div className="mode-menu">
      <div className="mode" onClick={() => this.setMode("gallery")}>
      Gallery
      </div>
      <div className="mode" onClick={() => this.setMode("list")}>
      List
      </div>
      </div>

      <style jsx global>{`
        body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transition-duration: 1s;
          background-color: ${this.state.open ? '#000' : '#fff'};
          color: #000;
          position: relative;
        }
      `}</style>
      
      <style jsx>{mainStyles}</style>
      <style jsx>{sidebarStyles}</style>
      <style jsx>{listStyles}</style>
      <style jsx>{galleryStyles}</style>
      <style jsx>{infoStyles}</style>
      <style jsx>{fontStyles}</style>
      </div>
      </div>
    </Layout>
  );
}
};

export const getStaticProps = async () => {
  const ryan = await sanity.fetch(query);

  return {
    props: { ryan } // will be passed to the page component as props
  };
}

export default Ryans;