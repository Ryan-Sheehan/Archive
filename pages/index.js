
import React from "react";
import Link from "next/link";

import { motion } from 'framer-motion';
 
import Layout from "../components/Layout";
import sanity from "../lib/sanity";
import listStyles from "../styles/list";
import galleryStyles from "../styles/gallery";
import infoStyles from "../styles/info";
import sidebarStyles from "../styles/sidebar";
import fontStyles from "../styles/fonts";
import mainStyles from "../styles/main";

import imageUrlFor from "../utils/imageUrlFor";

import CloseButton from "../components/CloseButton";
import Description from "../components/Description";
import GalleryView from "../components/GalleryView";
import SidebarHeader from "../components/SidebarHeader";
import EmailSVG from "../components/EmailSVG";
import Sidebar from "../components/Sidebar";
import Modes from "../components/Modes";


const query = `*[_type == "ryan"] {
  _id,
  name,
  summary,
  date,
  image,
  "imageAspect": image.asset->.metadata.dimensions.aspectRatio,
  "color":image.asset->.metadata.palette.dominant.background
}[0...50]
`;


const listAnimation = {
  hidden: { 
    opacity: 0 
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
};

const listItemAnimation = {
  hidden: {
    scale: .2,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      
      duration: 0.4,
      ease: [0.85, 0, 0.15, 1]
    }
  }
}

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
      activeDescription: null,
      open: false,
      x:0,
      y:0,
      width: 0, 
      height: 0,
      scrolled: 355,
      popup: false,
      mobile: true,
      mode: 'list'
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.popupStyles = {left:this.state.x+20,top:this.state.y+20}

    this.domRefs = {};
    this.list = React.createRef();

    this.listDescriptions = {};
    this.galleryDescriptions = {};

    this.galleryPhotos = [];
    this.listPhotos = []


    this.props.ryan.forEach((ryan, i) => {
      
      this.listDescriptions[ryan._id] = <Description info={ryan} mode={"list"}/>;
      this.galleryDescriptions[ryan._id] = <Description info={ryan} mode={"gallery"}/>;
      
      this.galleryPhotos.push({
        'src': imageUrlFor(ryan.image).width(800).toString(),
        'id': ryan._id,
        'name': ryan.name,
        'desc': ryan.summary,
        'width': 800, 
        'height': 800 / ryan.imageAspect
      });

      this.listPhotos.push(
        <li key={ryan._id} 
            ref={(ref) => {this.domRefs[ryan._id] = ref}}
            className={"ryan-list-item"}
            onClick={() => {this.state.mobile ? null : this.setActive(ryan._id, "clicked")}}
            onMouseEnter={() => {if (this.state.open) this.setActive(ryan._id, "hovered")}}
        >
          <motion.div initial="hidden" animate="show" transition={{delay: i * 0.2}} variants={listItemAnimation}>
            <img src={imageUrlFor(ryan.image).width(800)} width="800" height={800 / ryan.imageAspect}/>
          </motion.div>
          <style jsx>{listStyles}</style>
        </li>
      );

    });

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
    
  }


  handleScroll = () => {

    let scrolled = this.list.current.children[0].getBoundingClientRect().top
    
    if (scrolled >= 0) this.setState({scrolled:scrolled});

    
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

    if (this.state.x + 500 > this.state.width) this.popupStyles.left = this.state.x-840;
    if (this.state.x + 500 <= this.state.width) this.popupStyles.left = this.state.x+20;
    if (this.state.y + 300 > this.state.height) this.popupStyles.top = this.state.y-320;
    if (this.state.y + 300 <= this.state.height) this.popupStyles.top = this.state.y+20;
  }

  
  setActive = (id, method) => {
    if ((this.state.active === id || id === null) && method === "clicked") {
      this.setState({active:null, open: false})
    }
    else if (method === "clicked") {
      this.setState({active:id, activeDescription: id, open: true})
      this.domRefs[id].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    else if (method === "gallery-hover") {
      this.setState({activeDescription: id})
    }
  }

  handleClose = () => {
    this.setActive(null, "clicked")
  } 

  setMode = (current) => {
    this.setState({active:null, open: false, popups:false}, () => this.setState({mode:current}))
  }

  setPopup = (current) => {
    this.setState({popup:current})
  }

  render() {
  const {
    mobile,
    scrolled,
    open,
    mode,
    activeDescription,
    popup
  } = this.state;

  return (
    <Layout>
    <div style={{backgroundColor: (mobile && `rgb(${scrolled-100},${scrolled-100},${scrolled-100})`)}}>
    <div id="main" className={open ? "container container-pushed" : "container"}>

    <Sidebar open={open} mode={mode} mobile={mobile}/>
    
    {/* Logic for list view */}
    <div className="ryan-list"  style={{opacity: mode === "gallery" ? '0' : '1'}}>
      <ul className="ryan-list-inner" ref={this.list}>
        {this.listPhotos}
      </ul>
    </div>

    <div className={open ? "info info-open" : "info"} >
      <div className="info-inner">
        <CloseButton open={open} close={this.handleClose}/>
        
        <motion.div initial="hidden" animate={open ? "show" : "hidden"} variants={descriptionAnimation}>
        {this.listDescriptions[activeDescription]}
        </motion.div>
      </div>
    </div>

    {/* Logic for gallery view */}
    {mode === "gallery" && 
    <div className="ryan-gallery">
    {popup && <div className="ryan-gallery-popup" style={this.popupStyles}>{this.galleryDescriptions[activeDescription]}</div>}
    <GalleryView photos={this.galleryPhotos} setActive={this.setActive}/>
    </div>}

    <Modes mode={mode} setMode={this.setMode} popup={popup} setPopup={this.setPopup}/>

    {/* Styles */}
    <style jsx global>{`body {background-color: ${open ? '#000' : '#fff'};}`}</style>
    <style jsx>{mainStyles}</style>
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