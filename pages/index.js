
import React, { useState, useEffect } from "react";
import Link from "next/link";
import LazyLoad from 'react-lazyload';
import { motion } from 'framer-motion';
 
import Layout from "../components/Layout";
import sanity from "../lib/sanity";
import listStyles from "../styles/list";
import imageUrlFor from "../utils/imageUrlFor";
import EmailSVG from "../components/EmailSVG";

const query = `*[_type == "ryan"] {
  _id,
  name,
  summary,
  date,
  image,
  "imageAspect": image.asset->.metadata.dimensions.aspectRatio,
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







const Ryans = ({ ryan }) => {

  const [active, setActive] = useState(null);
  

   

  return (
    <Layout>
     

     
     <div className="sidebar">

     <motion.div key={ryan._id} initial="hidden" animate="visible" variants={{hidden: translateLeftStart,visible: translateLeftEnd}}>
     <div className="sidebar-inner">
     <div>
     <div className="sidebar-name">Ryan Sheehan</div>
     <div className="sidebar-bio">An archive of some of the graphic work Ryan has made in no particular order. Hover over any piece for a description. Click on the email to copy it.</div>

     </div>

     <motion.div className="contact" key={ryan._id} initial="hidden" animate="visible" variants={{hidden: translateUpStart,visible: translateUpEnd}}>

     <EmailSVG/>
         
     </motion.div>
     </div>
     </motion.div>
     {/*ryan.map(ryan => ((ryan._id == active && <div className="sidebar-date">{ryan.date.split("-")[0]}</div>)))*/}
     
     
     {ryan.map(ryan => ((ryan._id == active && 
       <motion.div key={ryan._id} initial="hidden" animate="visible" variants={{hidden: scaleStart,visible: scaleEnd}}>
       <div className="sidebar-description">{ryan.summary}</div>
       </motion.div>

      )))}

     
      
     
     

     </div>


     
     




      <div className="ryan">
        <ul className="list">
          {ryan.map(ryan => (
            <li key={ryan._id} className="list_item">
              {/*<Link href="/ryan/[id]" as={`/ryan/${ryan._id}`}>*/}
                <a>
                  {ryan.image && (
                    <motion.div initial="hidden" animate="visible" variants={{hidden: scaleStart,visible: scaleEnd}}>
                    
                    <img onMouseEnter={() => {setActive(ryan._id)}}
                      onMouseLeave={() => {setActive(null)}}
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
      <style jsx>{`
        @font-face {
          font-family: 'SwearDisplayBlack';
          src: url('./static/Swear_Display-Black.woff');
        }
        @font-face {
          font-family: 'SwearBannerBoldCilati';
          src: url('./static/Swear_Banner-Bold_Cilati.woff');
        }
        @font-face {
          font-family: 'SwearBannerRegular';
          src: url('./static/Swear_Banner-Regular.woff');
        }
        
        @font-face {
          font-family: 'SwearTextRegular';
          src: url('./static/Swear_Text-Regular.woff');
        }
        @font-face {
          font-family: 'ProtoGroteskBold';
          src: url('./static/ProtoGroteskWeb-Bold.woff');
        }
        @font-face {
          font-family: 'ProtoGroteskRegular';
          src: url('./static/ProtoGroteskWeb-Regular.woff');
        }
        @font-face {
          font-family: 'Trattatello';
          src: url('./static/TrattatelloFont.ttf');
        }
        @font-face {
          font-family: 'ElfrethBlack';
          src: url('./static/ElfrethBlack.otf');
        }
        @font-face {
          font-family: 'ElfrethBold';
          src: url('./static/ElfrethBold.otf');
        }
        
        
        
        
        .sidebar {
          height: 100%;
          grid-column-start: 1;
          grid-row-start: 1;
          display: grid;
          grid-template-columns:repeat(2, 1fr);
          grid-template-rows: repeat(1, 1fr);
          padding: 0.625rem;
          
        }
        .sidebar-name {
          font-size: 3.6rem;
          line-height: 4rem;
          margin-bottom: 0.625rem;
          
        }
        .sidebar-inner {
          font-family: 'SwearBannerBoldCilati';
          padding: 0 0.625rem;
          grid-column-start: 1;
          grid-column-end: 2;
          height: calc(100% - 2.5rem);
          display: flex;
          justify-content: space-between;
          flex-direction: column;
        }
        .sidebar-bio {
          font-family: 'ProtoGroteskRegular';
          font-family: 'Trattatello';
          font-family: 'SwearTextRegular';
          font-size: 1.4rem;
          line-height: 1.8rem;
        }
        .sidebar-description {
          font-family: 'SwearTextRegular';
          grid-column-start: 2;
          grid-row-start: 1;
          grid-row-end: 1;
          height: 100%;
          width: 100%;
          overflow: hidden;
          padding: 0 0.625rem;
        }
        .sidebar-date {
          
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 3;
          font-family: 'SwearDisplayBlack';
          font-size: 3.6rem;
          display:flex;
          align-items:flex-start;
          justify-content: flex-start;
          border-top: 0px solid black;
        }
        .sidebar-socials {
          grid-column-start: 1;
          grid-column-end: 1;
          grid-row-start: 2;
          
          
          align-items: center;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          position: absolute;
          width: 20vw;
          bottom: 1.25rem;
          
          padding-bottom: 1.25rem;

        }
        .sidebar-socials-buttons {
          margin-top: 1.25rem;
          display:flex;
          flex-direction:column;
          justify-content:flex-start;

        }
        .sidebar-social {
          height: 3rem;
          margin-right: 0.625rem;
          margin-top: 0.625rem;
          cursor: pointer;
        }
        .contact {
          grid-column-start: 1;
          
          grid-row-start: 2;
          display: flex;
          flex-direction: column;
          padding: 0 0.625rem;
          margin-bottom: 1.25rem;
          height: 100%;
          width: 100%;
          font-family: 'SwearTextRegular';
        }
        .contact-header {
          font-family: 'SwearBannerBoldCilati';
          font-size: 2.8rem;
          margin-bottom: 0.3125rem;
        }
        
        .color-selector {
          grid-column-start: 1;
          grid-row-start: 3;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: repeat(4, 1fr);
          margin-bottom: 0.5rem;
        }
        .gbyo {
          grid-column-start: 1;
          
        }
        .rpbw {
          grid-column-start: 2;
          
        }
        .color-option {
          margin: 0.3125rem;

          border-radius: 10px;
        }
        .list_item {
          
        }
        .list_item:hover {
          
    
        }
        .ryan {
          padding: 0.625rem;

          height: 100%;
          grid-column-start: 2;
          grid-row-start: 1;
          overflow-y: auto;
        }

        .ryan .list h3 {
          line-height: 1em;
          padding: 0.5em 0;
        }
        .tags {
          grid-column-start: 2;
          grid-row-start: 2;
          font-family: 'SwearBannerBoldCilati';
          font-size: 2.8rem;
          margin-bottom: 0.625rem;
        }


      `}</style>

      <style jsx>{listStyles}</style>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const ryan = await sanity.fetch(query);

  return {
    props: { ryan } // will be passed to the page component as props
  };
}

export default Ryans;