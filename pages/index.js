import React, { Suspense } from "react";
import Link from "next/link";
import Image from 'next/image'

import { motion } from 'framer-motion';

import {
  isMobile
} from "react-device-detect";

import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'
 
import Layout from "../components/Layout";
import sanity from "../lib/sanity";
import listStyles from "../styles/list";
import galleryStyles from "../styles/gallery";
import infoStyles from "../styles/info";
import sidebarStyles from "../styles/sidebar";
import fontStyles from "../styles/fonts";
import mainStyles from "../styles/main";

import imageUrlFor from "../utils/imageUrlFor";
import checkFile from "../utils/checkFile";
import getEmoji from "../utils/getEmoji";
import Favicon from "../components/Favicon";
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
  projects->{slug},
  image,
  "imageAspect": image.asset->.metadata.dimensions.aspectRatio,
  "color":image.asset->.metadata.palette.dominant.background
}[0...50]
`;




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

const SIZE = 700;


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
      popup: false,
      mobile: false,
      mode: 'list',
      scrollColor: '',
      emoji: getEmoji()
    }

    
    this.popupStyles = {left:this.state.x+20,top:this.state.y+20}

    this.domRefs = {};

    this.list = React.createRef();

    
    this.galleryPhotos = [];
    this.galleryDescriptions = {};
    this.listPhotos = [];
    this.listDescriptions = {};

    console.log(this.props.ryan)


    this.props.ryan.forEach((ryan, i) => {
      
      this.listDescriptions[ryan._id] = <Description info={ryan} mode={"list"}/>;

      this.listPhotos.push(
        <li key={ryan._id} 
            ref={(ref) => {this.domRefs[ryan._id] = ref}}
            className="ryan-list-item"
            onClick={() => {isMobile ? null : this.setActive(ryan._id, "clicked")}}
            onMouseEnter={() => {(this.state.open && this.setActive(ryan._id, "hovered"))}}>
            <motion.div initial="hidden" animate="show" transition={{delay: 0.2}} variants={listItemAnimation}>
              <Image src={checkFile(ryan.image, SIZE)} height={ SIZE / ryan.imageAspect} width={SIZE} alt={ryan.name}/>
            </motion.div>
          <style jsx>{listStyles}</style>
        </li>
      );

    });

  }

  componentDidMount() {

    this.updateWindowDimensions();
    window.addEventListener('resize', throttle(this.updateWindowDimensions),500);
    window.addEventListener('scroll', this.getListScrollOffset);
    
    document.addEventListener('mousemove', throttle((e) => {
      this.updateMousePosition(e)
    },20));
    
  }

  componentWillUnmount() {
    window.removeEventListener('resize', throttle(this.updateWindowDimensions,500));
    window.removeEventListener('scroll', throttle(this.getListScrollOffset,500));

    document.removeEventListener('mousemove', throttle((e) => {
       this.updateMousePosition(e)
    },20));
    this.setState = (state,callback)=>{
        return;
    };
    
    
  }

  


  getListScrollOffset = () => {
    const firstListElem = this.list.current.firstChild;
    const offset = Math.floor(firstListElem.getBoundingClientRect().top);
    const offsetPos = offset > 0 ? offset : 0;
    this.setState({scrollColor:`rgb(${offset},${offset},${offset})`})
  }



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
      this.setState({active:null, open: false, emoji: getEmoji()})
    }
    else if (method === "clicked") {
      this.setState({active:id, activeDescription: id, open: true, emoji: getEmoji()})
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

    if (current === "gallery" && this.galleryPhotos.length === 0) {
      
      this.props.ryan.forEach((ryan, i) => {
      
        this.galleryDescriptions[ryan._id] = <Description info={ryan} mode={"gallery"}/>;

        this.galleryPhotos.push({
          'src': imageUrlFor(ryan.image).width(SIZE).toString(),
          'id': ryan._id,
          'name': ryan.name,
          'desc': ryan.summary,
          'width':  SIZE, 
          'height': SIZE / ryan.imageAspect
        });

      });
    }

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
    popup,
    scrollColor,
    emoji
  } = this.state;

  return (
    <Layout>
    <Favicon emoji={emoji}/>
    <div style={isMobile ? {backgroundColor: scrollColor} : null}>
    <div id="main" className={open ? "container container-pushed" : "container"}>

    <Sidebar open={open} mode={mode} mobile={mobile}/>
    
    {/* Logic for list view */}
    <div className="ryan-list"  style={{opacity: mode === "gallery" ? '0' : '1'}} onScroll={this.getListScrollOffset}>
      <ul className="ryan-list-inner" ref={this.list} >
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

    {mobile && <EmailSVG/>}

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