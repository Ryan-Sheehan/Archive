
import React, { useState, useEffect } from "react";
import Link from "next/link";
import LazyLoad from 'react-lazyload';
import { motion } from 'framer-motion';
import {CopyToClipboard} from 'react-copy-to-clipboard'; 
import Layout from "../components/Layout";
import sanity from "../lib/sanity";
import listStyles from "../styles/list";
import imageUrlFor from "../utils/imageUrlFor";

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



const Email = () => { 
  const [copied, setCopied] = useState(false);
  useEffect(() => {
      
      if (copied) {
        setInterval(() => {
          setCopied(false);

        }, 2000)
      } else {
        clearInterval();
      }
   },[copied]);
    return (
      <React.Fragment>
      <CopyToClipboard text={"sheehan.w.ryan @gmail.com"}
          onCopy={() => setCopied(true)}>
          <div className={copied ? "contact-email contact-email-clicked" : "contact-email"}>sheehan.w.ryan @gmail.com</div>
     </CopyToClipboard>
      <style jsx>{`

        .contact-email {
          font-size: 1.6rem;
          word-wrap: break-word;
          text-decoration: none;
          transition-duration: 500ms;
          text-decoration-color: #FFE100;
          cursor: pointer;
        }
        .contact-email-clicked::after {
          content: "Copied!";
          background-color: #FFE100;
          position: absolute;
          margin-left: -10px;
          font-family: 'ProtoGroteskBold';
          font-size: 0.8rem;
          animation: 200ms ease-out 0s slideInFromBottom;

        }
        @keyframes slideInFromBottom {
         0% {
           transform: translateX(-15px) scale(0);
         }
         100% {
           transform: translateX(0) scale(1);
         }
       }

        .contact-email:hover {
          text-decoration: underline;
          text-decoration-color: #FFE100;

        }

      `}</style>
      </React.Fragment>
    );
};
const Ryans = ({ ryan }) => {

  const [active, setActive] = useState(null);
  

   

  return (
    <Layout>
     

     
     <div className="sidebar">

     <motion.div key={ryan._id} initial="hidden" animate="visible" variants={{hidden: translateLeftStart,visible: translateLeftEnd}}>
     <div className="sidebar-header">
     <div className="sidebar-name">Ryan Sheehan</div>
     <div className="sidebar-bio">An archive of some of the graphic work Ryan has made in no particular order. Hover over any piece for a description.</div>
     </div>
     </motion.div>
     {/*ryan.map(ryan => ((ryan._id == active && <div className="sidebar-date">{ryan.date.split("-")[0]}</div>)))*/}
     
     
     {ryan.map(ryan => ((ryan._id == active && 
       <motion.div key={ryan._id} initial="hidden" animate="visible" variants={{hidden: scaleStart,visible: scaleEnd}}>
       <div className="sidebar-description">{ryan.summary}</div>
       </motion.div>

      )))}
      
     
     <div className="sidebar-socials">
     <motion.div key={ryan._id} initial="hidden" animate="visible" variants={{hidden: translateUpStart,visible: translateUpEnd}}>
     <div className="contact">
     <div className="contact-header">Contact</div>

     <Email/>
     
     </div>
     <div className="sidebar-socials-buttons">
     <Link href="//github.com/Ryan-Sheehan">
     <img className="sidebar-social" src="/github.svg"/>
     </Link>
     <Link href="//www.instagram.com/ryan__sheehan/">
     <img className="sidebar-social" src="/instagram.svg"/>
     </Link>
     </div>
     </motion.div>
     </div>
     

     </div>
     




      <div className="ryan">
        <ul className="list">
          {ryan.map(ryan => (
            <li key={ryan._id} className="list__item">
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
          src: url('./static/ProtoGroteskWeb-Regular.eot');
        }
        
        
        
        .sidebar {

          height: 100%;
          grid-column-start: 1;
          grid-row-start: 1;
          
          display: grid;
          grid-template-columns:repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          padding: 0.625rem;
          
        }
        .sidebar-name {
          font-size: 2.8rem;
          line-height: 3.2rem;
          margin-bottom: 0.625rem;
        }
        .sidebar-header {
          font-family: 'SwearBannerBoldCilati';
          padding: 0 0.625rem;
          
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 2;
          display: flex;
          flex-direction: column;
        }
        .sidebar-bio {
          font-family: 'SwearBannerRegular';
          font-size: 1.6rem;
          
        }
        .sidebar-description {
          font-family: 'SwearTextRegular';
          grid-column-start: 2;
          
          grid-row-start: 1;
          grid-row-end: 3;
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
          padding: 0 0.625rem;
          padding-bottom: 1.25rem;

        }
        .sidebar-socials-buttons {
          margin-top: 1.25rem;
          display:flex;
          justify-content:flex-start;

        }
        .sidebar-social {
          height: 4rem;
          margin: 0 0.625rem;
          cursor: pointer;
        }
        .contact {
          display: flex;
          flex-direction: column;
          padding: 0 0.625rem;
          margin-bottom: 1.25rem;
          font-family: 'SwearTextRegular';
        }
        .contact-header {
          font-family: 'SwearBannerBoldCilati';
          font-size: 2.8rem;
          margin-bottom: 0.625rem;
        }
        .contact-email {
          font-size: 1.6rem;
          word-wrap: break-word;
          text-decoration: none;
          transition-duration: 500ms;
          text-decoration-color: #FFE100;
          cursor: pointer;
        }
        .contact-email-clicked::after {
          content: "Copied!";
          background-color: #FFE100;
          position: absolute;
          margin-left: -10px;
          font-family: 'ProtoGroteskBold';
          font-size: 0.8rem;
          animation: 200ms ease-out 0s slideInFromBottom;

        }
        @keyframes slideInFromBottom {
         0% {
           transform: translateX(-15px) scale(0);
         }
         100% {
           transform: translateX(0) scale(1);
         }
       }

        .contact-email:hover {
          text-decoration: underline;
          text-decoration-color: #FFE100;

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