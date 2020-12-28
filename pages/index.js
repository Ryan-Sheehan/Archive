
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
import GalleryView from "../components/GalleryView";

import GalleryIcon from "./svg/gallery.svg"
import ListIcon from "./svg/list.svg"

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


const listAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}


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



class Ryans extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: null,
      currentDesc: null,
      open: false,
      xHovered: false,
      x:0,
      y:0,
      width: 0, 
      height: 0,
      scrollPos: 355,
      galleryPopups: false,
      mobile: true,

      mode: 'list'
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.popupStyles = {left:this.state.x+20,top:this.state.y+20}

    this.domRefs = {};
    this.list = React.createRef();

    this.lastScrollY = 0;
    this.ticking = false;

    this.listDescriptions = {};
    this.galleryDescriptions = {};

    this.galleryPhotos = [];
    this.listPhotos = []
    this.listPhotosMobile = []

    this.props.ryan.forEach((ryan, i) => {
      this.listDescriptions[ryan._id] = <Description info={ryan} mode={"list"}/>;
      this.galleryDescriptions[ryan._id] = <Description info={ryan} mode={"gallery"}/>;
      

      this.galleryPhotos.push(
        {"src": imageUrlFor(ryan.image).width(800).toString(),
        "id": ryan._id,
        "name": ryan.name,
        "desc": ryan.summary,
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
            className={"ryan-list-item"}
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

      this.listPhotosMobile.push(
        <li key={ryan._id} 
            ref={(ref) => {this.domRefs[ryan._id] = ref}}
            className={"ryan-list-item"}
            
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
    
    
    this.firstImage = this.props.ryan[0]._id;
    

  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('scroll', this.handleScroll, true)
    window.addEventListener('resize', this.updateWindowDimensions);
    document.addEventListener('mousemove', (e) => {
      this.updateMousePosition(e)
    });
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.updateWindowDimensions);
    document.removeEventListener('mousemove', (e) => {
       this.updateMousePosition(e)
    });
    this.setState = (state,callback)=>{
        return;
    };
  }


  handleScroll = () => {

    let scrolled = this.list.current.children[0].getBoundingClientRect().top
    
    if (scrolled >= 0) this.setState({scrollPos:scrolled});

    
  };

  updateMousePosition = (coords) => {
    this.setState({x: coords.pageX, y: coords.pageY});
    this.calculatePopupPosition();
  }
  updateWindowDimensions = () => {
    if (window.innerWidth <= 728) this.setState({ width: window.innerWidth, height: window.innerHeight, mobile: true });
    else this.setState({ width: window.innerWidth, height: window.innerHeight, mobile: false });
  }

  calculatePopupPosition = () => {
    this.popupStyles = {left:this.state.x+20,top:this.state.y+20}

    if (this.state.x + 500 > this.state.width) {
      this.popupStyles.left = this.state.x-840;
    }
    if (this.state.x + 500 <= this.state.width) {
      this.popupStyles.left = this.state.x+20;
    }

    if (this.state.y + 300 > this.state.height) {
      this.popupStyles.top = this.state.y-320;
    }
    if (this.state.y + 300 <= this.state.height) {
      this.popupStyles.top = this.state.y+20;
    }
    
  }

  handleChange = (event) => {
    this.setState({galleryPopups: !this.state.galleryPopups});
  }


  setActive = (id, method) => {
    if ((this.state.active === id || id === null) && method === "clicked") this.setState({active:null, open: false})
  
    else if (method === "clicked") {
      this.setState({active:id, currentDesc: id, open: true})
      this.domRefs[id].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else if (method === "gallery-hover") {
      this.setState({currentDesc: id})
      
    }
  }


  handleClose = () => {
    this.setActive(null, "clicked")
    this.setState({xHovered:false})
  } 

  setMode = (current) => {
    this.setState({active:null, open: false, galleryPopups:false}, () => this.setState({mode:current}))
  }

 
  render() {

  return (
    <Layout>
    <div style={{backgroundColor: (this.state.mobile && `rgb(${this.state.scrollPos-100},${this.state.scrollPos-100},${this.state.scrollPos-100})`)}}>
     <div id="main" className={this.state.open ? "container container-pushed" : "container"}>

    
     <div className={"sidebar"} style={{opacity: this.state.open || this.state.mode === "gallery" ? '0' : '1'}}>

     

     {this.state.mobile ? 

       <div className="sidebar-inner">
       
       <div>
         <div className="sidebar-name">Ryan Sheehan</div>
         <div className="sidebar-bio">An archive of some of the graphic work Ryan has made in no particular order. Click on any piece for more information on the project. Click on the email icon below to copy it. Reach out for anything I'm currently avaiable to work.</div>
       </div>
       <EmailSVG/>


      </div>

       :

     <motion.div initial="closed" animate={!this.state.open ? "open" : "closed"} transition={{ duration: 0.8 }} variants={sidebarAnimation}>
      
      <div className="sidebar-inner">
       
       <div>
         <div className="sidebar-name">Ryan Sheehan</div>
         <div className="sidebar-bio">An archive of some of the graphic work Ryan has made in no particular order. Click on any piece for more information. Click on the email below to copy it. Reach out for anything.</div>
       </div>

       
        <motion.div className="contact" initial="hidden" animate={!this.state.open ? "show" : "hidden"} variants={contactAnimation}>
         <EmailSVG/>
       </motion.div>

      </div>
     </motion.div>
     }
  
     </div>


     <div className={this.state.open ? "info info-open" : "info"} >
  
      <div className="info-inner">
      
        <div className={this.state.xHovered ? "info-x info-x-hover" : "info-x"} 
             onMouseEnter={() => this.setState({xHovered:true})} 
             onMouseLeave={() => this.setState({xHovered:false})}
             onClick={() => this.handleClose()}
        ><motion.div initial="hidden" animate={this.state.open ? "show" : "hidden"} variants={xAnimation}>X</motion.div></div>
        
        <motion.div initial="hidden" animate={this.state.open ? "show" : "hidden"} variants={descriptionAnimation}>
        {this.listDescriptions[this.state.currentDesc]}
        </motion.div>

      </div>
  
    </div>

     
      <div className="ryan-list"  style={{opacity: this.state.mode === "gallery" ? '0' : '1'}}>
        <ul className="ryan-list-inner" ref={this.list}>
          {this.state.mobile ? this.listPhotosMobile : this.listPhotos}
        </ul>
      </div >

      
    

      {this.state.mode === "gallery" && 
      
      <div className="ryan-gallery">
      {this.state.galleryPopups && <div className="ryan-gallery-popup" style={this.popupStyles}>{this.galleryDescriptions[this.state.currentDesc]}</div>}
      <GalleryView photos={this.galleryPhotos} setActive={this.setActive}/>
      
      </div>
      
      }


      {<label className={this.state.mode === "gallery" ? "checkbox-open":"checkbox-closed"}>
            <input
              type="checkbox"
              
              checked={this.state.galleryPopups}
              onChange={this.handleChange}
            /> Info on hover
        </label> }
      <div className="mode-menu">
      
        

      <div className={this.state.mode === "gallery" ? "mode mode-selected" : "mode mode-not-selected"} onClick={() => this.setMode("gallery")}>
      <GalleryIcon height={40} width={40}/>
      </div>
      <div className={this.state.mode === "list" ? "mode mode-selected" : "mode mode-not-selected"} onClick={() => this.setMode("list")}>
      <ListIcon height={40} width={40}/>
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