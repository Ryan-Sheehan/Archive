
import React, { useState } from "react";
import Link from "next/link";
import LazyLoad from 'react-lazyload';
import { motion } from 'framer-motion';

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

const hidden = {
    scale: .8,
    opacity: 0
};

const visible = {
  scale: 1,
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
     <div className="sidebar-header">Ryan Sheehan
     <div className="sidebar-bio">An archive of some of the graphic work Ryan has made in no particular order. Hover over any piece for a description.</div>
     
     {/*ryan.map(ryan => ((ryan._id == active && <div className="sidebar-date">{ryan.date.split("-")[0]}</div>)))*/}
     </div>
     
     {ryan.map(ryan => ((ryan._id == active && 
       <motion.div key={ryan._id} initial="hidden" animate="visible" variants={{hidden: hidden,visible: visible}}>
       <div className="sidebar-description">{ryan.summary}</div>
       </motion.div>

      )))}
      
    
     <div className="sidebar-socials">
     <div className="contact">
     <div className="contact-header">Contact</div>
     <div className="contact-email">sheehan.w.ryan @gmail.com</div>
     </div>
     <div className="sidebar-socials-buttons">
     <Link href="https://github.com/Ryan-Sheehan">
     <img className="sidebar-social" src="/github.svg"/>
     </Link>
     <Link href="https://www.instagram.com/ryan__sheehan/">
     <img className="sidebar-social" src="/instagram.svg"/>
     </Link>
     </div>
     </div>
     </div>
      <div className="ryan">
        <ul className="list">
          {ryan.map(ryan => (
            <li key={ryan._id} className="list__item">
              {/*<Link href="/ryan/[id]" as={`/ryan/${ryan._id}`}>*/}
                <a>
                  {ryan.image && (
                    <motion.div initial="hidden" animate="visible" variants={{hidden: hidden,visible: visible}}>
                    
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
        
        
        
        .sidebar {

          height: 100%;
          grid-column-start: 1;
          grid-row-start: 1;
          
          display: grid;
          grid-template-columns:repeat(2, 1fr);
          grid-template-rows: repeat(3, 1fr);
          padding: 0.625rem;
          
        }
        .sidebar-header {
          font-family: 'SwearBannerBoldCilati';
          padding: 0 0.625rem;
          font-size: 1.8rem;
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 2;
          display: flex;
          flex-direction: column;
        }
        .sidebar-bio {
          font-family: 'SwearBannerRegular';
          
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
          grid-row-start: 3;
          
          padding: 0 0.625rem;
          align-items: center;
          width: 20vw;
          position: absolute;
          bottom: 0.625rem;
          
          padding-bottom: 1.25rem;
        }
        .sidebar-socials-buttons {
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
          font-size: 1.8rem;
        }
        .contact-email {
          font-size: 1.8rem;
          word-wrap: break-word;
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