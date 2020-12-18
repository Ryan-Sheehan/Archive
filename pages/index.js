
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { motion } from 'framer-motion';
 
import Layout from "../components/Layout";
import sanity from "../lib/sanity";
import listStyles from "../styles/list";
import infoStyles from "../styles/info";
import sidebarStyles from "../styles/sidebar";
import fontStyles from "../styles/fonts";

import imageUrlFor from "../utils/imageUrlFor";

import EmailSVG from "../components/EmailSVG";

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


const translateLeftStart = {
    x: -200,
    opacity: 0
};

const translateLeftEnd = {
  x: 0,
  opacity: 1,
  transition: {
    delay: 0
  }
};

const translateUpStart = {
    y: 400,
    opacity: 0
};

const translateUpEnd = {
  y: 0,
  opacity: 1,
  transition: {
    delay: 0
  }
};







class Ryans extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: null,
      
    }

    this.domRefs = {};

  }

  handleClick = (id) => {
    console.log(this.domRefs[id])
    if (this.state.active === id) {
      this.setState({active:null})
    }
    else {
      this.setState({active:id})
    }
    
    this.domRefs[id].scrollIntoView({ behavior: 'smooth', block: 'start' });
    
  }

  onItemClick = () => {

  }


  
  

   
  render() {
  return (
    <Layout>
     <div id="main" className={this.state.active !== null ? "container-pushed" : "container"}>

     
     <div className="sidebar" style={{opacity: this.state.active !== null ? '0' : '1'}}>

     <motion.div initial="hidden" animate="visible" variants={{hidden: translateLeftStart,visible: translateLeftEnd}}>
      
      <div className="sidebar-inner ">
       
       <div>
         <div className="sidebar-name no-flickr">Ryan Sheehan</div>
         <div className="sidebar-bio">An archive of some of the graphic work Ryan has made in no particular order. Hover over any piece for a description. Click on the email to copy it.</div>
       </div>

       <motion.div className="contact" initial="hidden" animate="visible" variants={{hidden: translateUpStart,visible: translateUpEnd}}>
         <EmailSVG/>
       </motion.div>
     
      </div>
     </motion.div>
  
     </div>


     <div className={this.state.active !== null ?"info-open":"info"} >

     
      
      <div className="info-inner">
       
       
         
         
         {this.props.ryan.map((ryan, i) => (this.state.active === ryan._id && 
           <React.Fragment>
           <div>
           <div className="info-name">{ryan.name}</div>
           <div className="info-desc">{ryan.summary}</div>
           <div className="info-date" style={{"color":ryan.color}}>{ryan.date.split("-")[0]}</div>
           </div>
           
           </React.Fragment>
          ))}

         
         
      

       
     
      </div>

  
     </div>





     
     


      <div className="ryan-list">
        <ul className="ryan-list-inner">
          {this.props.ryan.map((ryan, i) => (
            <li key={ryan._id} 
            ref={(ref) => {this.domRefs[ryan._id] = ref}}
            className={"list_item"}
            onClick={() => {this.handleClick(ryan._id)}}>
              {/*<Link href="/ryan/[id]" as={`/ryan/${ryan._id}`}>*/}
                <a>
                  {ryan.image && (
                    <motion.div initial="hidden" animate="visible" variants={{hidden: scaleStart,visible: scaleEnd}}>
                    
                    <img 
                      
                      src={imageUrlFor(ryan.image).width(800)}
                      width="800"
                      height={800 / ryan.imageAspect}
                    />
                    
             
                    </motion.div>
                  )}
                  
                </a>
              {/*</Link>*/}
            </li>
          ))}
        </ul>
      </div>


      <style jsx global>{`
        body {
          margin: 0;
          
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transition-duration: 1s;
          background-color: ${this.state.active !== null ? '#000' : '#fff'};
          color: #000;
        }

        

      `}</style>
      <style jsx>{`
        
        .container {

          height: 100vh;
          width: 100vw;
          display: grid;
          grid-template-columns: 40vw 60vw;

          grid-template-rows: 100vh;
          margin: 0rem;
          position: relative;
          padding: 0;
          transition-delay: 0s;
          transition-duration: 0.5s;
          transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
          transform: translateX(0);
          backgroundColor:#fff;
        }

        .container-pushed {

          height: 100vh;
          width: 100vw;
          display: grid;
          grid-template-columns: 40vw 60vw;

          grid-template-rows: 100vh;
          margin: 0rem;
          position: relative;
          padding: 0;
          transition-delay: 0s;
          transition-duration: 0.8s;
          transform: translateX(-40vw);
          transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
          backgroundColor:#000;
          
        }
        
        
        
        
        
    
        
        

        


      `}</style>
      <style jsx>{sidebarStyles}</style>
      <style jsx>{listStyles}</style>
      <style jsx>{infoStyles}</style>
      <style jsx>{fontStyles}</style>
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